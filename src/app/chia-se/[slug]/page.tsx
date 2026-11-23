import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle, ArrowRight } from "lucide-react";
import { JOURNAL_POSTS, getPostBySlug } from "@/data/posts";
import { siteConfig } from "@/data/siteConfig";
import { YouTubeFacade } from "@/components/YouTubeFacade";

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
    openGraph: post.coverImage
      ? {
          title: post.title,
          description: post.excerpt,
          images: [{ url: post.coverImage, alt: post.title }],
        }
      : undefined,
  };
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const morePosts = JOURNAL_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

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

      {/* Rich content blocks */}
      <div className="space-y-6 text-base text-ink/90 leading-[1.85]">
        {post.blocks.map((block, idx) => {
          switch (block.type) {
            case "heading":
              return (
                <h2
                  key={idx}
                  className="font-serif text-xl sm:text-2xl font-bold text-herbal pt-3"
                >
                  {block.text}
                </h2>
              );
            case "paragraph":
              return <p key={idx}>{block.text}</p>;
            case "image":
              return (
                <figure key={idx} className="my-6 space-y-2.5">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-line bg-cream-soft">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                    />
                  </div>
                  {block.caption && (
                    <figcaption className="text-xs sm:text-sm text-muted text-center italic px-2">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            case "gallery":
              return (
                <div
                  key={idx}
                  className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {block.images.map((img, i) => (
                    <figure key={i} className="space-y-2">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-line bg-cream-soft">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      {img.caption && (
                        <figcaption className="text-xs text-muted text-center italic">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              );
            case "youtube":
              return (
                <div key={idx} className="my-6 space-y-2">
                  <YouTubeFacade
                    videoId={block.videoId}
                    title={block.title}
                    caption={block.caption}
                  />
                  {block.caption && (
                    <p className="text-xs sm:text-sm text-muted text-center italic">
                      {block.caption}
                    </p>
                  )}
                </div>
              );
            case "quote":
              return (
                <blockquote
                  key={idx}
                  className="my-6 p-6 rounded-2xl bg-herbal-soft border-l-4 border-herbal space-y-2"
                >
                  <p className="font-serif text-lg sm:text-xl font-bold text-herbal leading-snug">
                    &ldquo;{block.text}&rdquo;
                  </p>
                  {block.author && (
                    <footer className="text-xs text-muted">
                      — {block.author}
                    </footer>
                  )}
                </blockquote>
              );
          }
        })}
      </div>

      {/* Zalo CTA */}
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

      {/* More posts */}
      {morePosts.length > 0 && (
        <section className="pt-8 border-t border-line space-y-4">
          <h2 className="font-serif text-xl font-bold text-herbal">
            Đọc thêm từ Nhật ký xưởng
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {morePosts.map((item) => (
              <Link
                key={item.slug}
                href={`/chia-se/${item.slug}`}
                className="group p-5 rounded-2xl bg-white border border-line hover:border-herbal/40 transition-colors space-y-2"
              >
                <span className="text-[11px] font-semibold text-gold uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-serif text-base font-bold text-herbal group-hover:text-herbal-mid leading-snug">
                  {item.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-herbal">
                  Đọc tiếp <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
