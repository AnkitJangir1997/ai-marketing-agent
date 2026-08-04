/**
 * Crawl Queue & State Manager
 */

export class CrawlQueue {
  constructor({ maxPages = 10, maxDepth = 2 } = {}) {
    this.maxPages = maxPages;
    this.maxDepth = maxDepth;
    this.visited = new Set();
    this.queue = [];
  }

  enqueue(url, depth = 0) {
    if (this.visited.has(url) || this.visited.size + this.queue.length >= this.maxPages) {
      return false;
    }
    if (depth > this.maxDepth) return false;

    this.queue.push({ url, depth });
    return true;
  }

  dequeue() {
    if (this.queue.length === 0) return null;
    const item = this.queue.shift();
    this.visited.add(item.url);
    return item;
  }

  get size() {
    return this.queue.length;
  }

  get visitedCount() {
    return this.visited.size;
  }
}
