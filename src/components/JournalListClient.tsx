"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { JOURNAL_POSTS, JOURNAL_PILLARS, PillarId } from "@/data/posts";

export function JournalListClient() {
  const [activePillar, setActivePillar] = useState<"all" | PillarId>("all");

  const filtered =
    activePillar === "all"
      ? JOURNAL_POSTS
      : JOURNAL_POSTS.filter((p) => p.pillar === activePillar);

  return (
    <div className="space-y-8">
      {/* Pillar filter bar */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActivePillar("all")}
          className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
            activePillar === "all"
              ? "bg-herbal text-white"
              : "bg-white text-ink/80 border border-line hover:border-herbal/40"
          }`}
        >
          Tất cả ({JOURNAL_POSTS.length})
        </button>
        {JOURNAL_PILLARS.map((pillar) => {
          const count = JOURNAL_POSTS.filter((p) => p.pillar === pillar.id).length;
          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActivePillar(pillar.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                activePillar === pillar.id
                  ? "bg-herbal text-white"
                  : "bg-white text-ink/80 border border-line hover:border-herbal/40"
              }`}
            >
              {pillar.shortLabel}
              {count > 0 ? ` (${count})` : ""}
            </button>
          );
        })}
      </div>

      {/* Post list */}
      {filtered.length > 0 ? (
        <div className="space-y-6">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl bg-white border border-line overflow-hidden hover:border-herbal/40 transition-colors"
            >
              <Link
                href={`/chia-se/${post.slug}`}
                className="grid grid-cols-1 sm:grid-cols-12 items-stretch"
              >
                {post.coverImage && (
                  <div className="sm:col-span-4 relative aspect-[16/10] sm:aspect-auto sm:min-h-[190px] bg-cream-soft overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                )}

                <div
                  className={`${
                    post.coverImage ? "sm:col-span-8" : "sm:col-span-12"
                  } p-6 flex flex-col justify-between gap-3`}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                      <span className="px-2.5 py-0.5 rounded-full bg-herbal-soft text-herbal font-medium">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="font-serif text-xl font-bold text-herbal group-hover:text-herbal-mid transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-herbal pt-1">
                    Đọc tiếp
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="p-8 rounded-2xl bg-white border border-line text-center space-y-2">
          <p className="font-serif text-lg font-bold text-herbal">
            Chuyên mục này đang được xưởng hoàn thiện hình ảnh &amp; bài viết
          </p>
          <p className="text-sm text-muted">
            Những câu chuyện thật từ vườn và xưởng Trà Kiệu Tây sẽ sớm được cập nhật tại đây.
          </p>
        </div>
      )}
    </div>
  );
}
