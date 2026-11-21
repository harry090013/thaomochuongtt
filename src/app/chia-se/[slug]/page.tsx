import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { JOURNAL_POSTS, getPostBySlug } from "@/data/posts";
import { siteConfig } from "@/data/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return JOURNAL_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Không tìm thấy bài viết" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
      <Link
        href="/chia-se"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-herbal transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Quay lại Nhật ký xưởng
      </Link>

      <header className="space-y-4 border-b border-line pb-7">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="px-2.5 py-0.5 rounded-full bg-herbal-soft text-herbal font-medium">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-herbal leading-tight">
          {post.title}
        </h1>
        <p className="text-base text-muted leading-relaxed">{post.excerpt}</p>
      </header>

      <div className="space-y-5 text-base text-ink/90 leading-[1.85]">
        {post.content.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>

      <footer className="pt-8 mt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-muted">
          Cần tư vấn chọn mùi hương phù hợp cho gia đình?
        </p>
        <a
          href={siteConfig.contact.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-herbal text-white text-sm font-semibold hover:bg-herbal-mid transition-colors shrink-0"
        >
          <MessageCircle className="w-4 h-4" />
          Nhắn Zalo {siteConfig.contact.phoneDisplay}
        </a>
      </footer>
    </article>
  );
}
