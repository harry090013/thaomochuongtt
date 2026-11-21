import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JOURNAL_POSTS } from "@/data/posts";

export const metadata: Metadata = {
  title: "Nhật Ký Xưởng",
  description:
    "Những ghi chép mộc mạc từ xưởng Thảo Mộc Hương T&T về rễ Tu Hú, cách bảo quản nhang mùa mưa, hơ điếu ngải cứu và chuyện nghề gia truyền.",
};

export default function JournalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
      <header className="space-y-3 border-b border-line pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Nhật ký xưởng
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-herbal">
          Ghi chép về thảo mộc &amp; nghề nhang
        </h1>
        <p className="text-sm sm:text-base text-muted leading-relaxed">
          Chia sẻ những chuyện nhỏ quanh xưởng Trà Kiệu Tây, cách phân biệt và
          bảo quản nhang thảo mộc tự nhiên sao cho dễ chịu và bền hương nhất.
        </p>
      </header>

      <div className="divide-y divide-line">
        {JOURNAL_POSTS.map((post) => (
          <article key={post.slug} className="py-7 first:pt-0">
            <Link href={`/chia-se/${post.slug}`} className="group block space-y-2.5">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                <span className="px-2.5 py-0.5 rounded-full bg-herbal-soft text-herbal font-medium">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-herbal group-hover:text-herbal-mid transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-herbal pt-1">
                Đọc tiếp
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
