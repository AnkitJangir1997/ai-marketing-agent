"use client";

import { useState, useEffect, useCallback } from "react";

export default function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = useCallback(async () => {
    try {
      const res = await fetch("/api/blogs");
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const generateBlog = async ({ topic, tone, wordCount }) => {
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, tone, wordCount }),
      });
      if (!res.ok) throw new Error("Failed to generate blog article");
      const newBlog = await res.json();
      setBlogs((prev) => [newBlog, ...prev]);
      return newBlog;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const publishToWp = async ({ blogId, wpUrl, username, applicationPassword }) => {
    try {
      const res = await fetch("/api/blogs/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blogId, wpUrl, username, applicationPassword }),
      });
      if (!res.ok) throw new Error("WordPress publishing failed");
      const data = await res.json();
      setBlogs((prev) =>
        prev.map((b) => (b.id === blogId ? { ...b, status: "Published", wpSync: true } : b))
      );
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return {
    blogs,
    loading,
    error,
    refetch: fetchBlogs,
    generateBlog,
    publishToWp,
  };
}
