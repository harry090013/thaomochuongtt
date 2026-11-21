"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { LotusMark } from "./LotusMark";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-md border-b border-line">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group shrink-0"
          onClick={() => setOpen(false)}
        >
          <span className="w-9 h-9 rounded-full bg-herbal-soft border border-herbal-mid/30 flex items-center justify-center group-hover:border-herbal transition-colors">
            <LotusMark className="w-6 h-6" />
          </span>
          <div className="leading-tight">
            <span className="block font-serif text-base sm:text-lg font-bold text-herbal tracking-tight">
              Thảo Mộc Hương T&amp;T
            </span>
            <span className="hidden sm:block text-[11px] text-muted">
              Gia truyền từ 05/2010
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Điều hướng chính">
          {siteConfig.navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "text-herbal font-semibold bg-herbal-soft"
                    : "text-ink/80 hover:text-herbal hover:bg-cream-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Zalo CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={siteConfig.contact.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-herbal text-white text-xs font-semibold hover:bg-herbal-mid transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Zalo {siteConfig.contact.phoneDisplay}
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-herbal hover:bg-herbal-soft transition-colors"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-line bg-cream px-4 py-4 space-y-1">
          {siteConfig.navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-herbal-soft text-herbal font-semibold"
                    : "text-ink hover:bg-cream-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 mt-2 border-t border-line">
            <a
              href={siteConfig.contact.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-herbal text-white text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              Nhắn Zalo {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
