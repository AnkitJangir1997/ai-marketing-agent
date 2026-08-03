"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Globe,
  ShieldCheck,
  Search,
  Users,
  FileText,
  BarChart3,
  Settings,
  Sparkles,
} from "lucide-react";

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Websites", href: "/dashboard/websites", icon: Globe },
  { name: "SEO Audit", href: "/dashboard/seo-audit", icon: ShieldCheck },
  { name: "Keywords", href: "/dashboard/keywords", icon: Search },
  { name: "Competitors", href: "/dashboard/competitors", icon: Users },
  { name: "Blog Manager", href: "/dashboard/blogs", icon: FileText },
  { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
      <div>
        <div className="border-b border-slate-200 p-6 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold shadow-xs">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                AI Marketing
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Digital Marketing Agent
              </p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
          <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
            Master AI Engine
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Default Theme: Dark Mode
          </p>
        </div>
      </div>
    </aside>
  );
}