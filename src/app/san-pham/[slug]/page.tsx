import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { formatVnd } from "@/data/siteConfig";
import { ProductOrderPanel } from "@/components/ProductOrderPanel";
import { ProductCard } from "@/components/ProductCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Không tìm thấy sản phẩm" };

  return {
    title: `${product.name} — ${formatVnd(product.price)}`,
    description: `${product.tagline} Thành phần: ${product.ingredients.join(", ")}.`,
    openGraph: {
      title: `${product.name} | Thảo Mộc Hương T&T`,
      description: product.tagline,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-14">
      {/* Breadcrumb */}
      <div>
        <Link
          href="/san-pham"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-herbal transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại danh mục sản phẩm
        </Link>
      </div>

      {/* Main 2-col product hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Image */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-line bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-herbal/90 text-[#FDE6A8] text-xs font-semibold">
              Mã dòng: {product.skuBase}
            </span>
          </div>

          {product.burnTime && (
            <div className="flex items-center gap-2 text-xs text-muted px-4 py-3 rounded-xl bg-cream-soft border border-line">
              <Clock className="w-4 h-4 text-herbal shrink-0" />
              <span>
                <strong>Thời gian cháy tham khảo:</strong> {product.burnTime}
              </span>
            </div>
          )}
        </div>

        {/* Info & Zalo Order Panel */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-herbal-soft text-herbal text-xs font-semibold">
                Dòng {product.scentLabel}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-gold-soft text-wood text-xs font-medium">
                {product.formatLabel}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-herbal leading-tight">
              {product.name}
            </h1>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {product.tagline}
            </p>
          </div>

          <ProductOrderPanel product={product} />

          {product.extraSpecsNote && (
            <p className="text-xs text-muted bg-gold-soft/70 border border-gold/25 rounded-xl p-3.5 leading-relaxed">
              <strong className="text-wood">Quy cách khác:</strong>{" "}
              {product.extraSpecsNote}
            </p>
          )}
        </div>
      </div>

      {/* Detailed specs: Ingredients, Aroma, Storage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-line space-y-4">
          <h2 className="font-serif text-xl font-bold text-herbal">
            Thành phần công khai &amp; màu sắc tự nhiên
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            <strong className="text-ink">Màu sắc:</strong> {product.colorDesc}
          </p>
          <ul className="space-y-2">
            {product.ingredients.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="w-4 h-4 text-herbal shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-line space-y-4">
          <h2 className="font-serif text-xl font-bold text-herbal">
            Mùi hương &amp; trải nghiệm
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            {product.aromaAndExperience}
          </p>
          <div className="pt-2 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-herbal">
              Phù hợp cho
            </p>
            <ul className="space-y-1.5 text-sm text-ink/90 list-disc pl-5">
              {product.suitableFor.map((use) => (
                <li key={use}>{use}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-line space-y-3">
          <h2 className="font-serif text-xl font-bold text-herbal">
            Hướng dẫn bảo quản
          </h2>
          <ul className="space-y-2 text-sm text-muted list-disc pl-5 leading-relaxed">
            {product.storageTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="p-6 sm:p-7 rounded-2xl bg-herbal-soft border border-herbal/20 space-y-3">
          <div className="flex items-center gap-2 text-herbal">
            <ShieldCheck className="w-5 h-5" />
            <h2 className="font-serif text-xl font-bold">
              Chính sách đổi mới 100%
            </h2>
          </div>
          <p className="text-sm text-ink/80 leading-relaxed">
            Xưởng cam kết đổi mới hoàn toàn nếu sản phẩm bị gãy vỡ do vận chuyển,
            ẩm mốc từ khâu đóng gói, hoặc gặp tình trạng tắt giữa chừng liên tục
            từ 30 cây trở lên. Chỉ cần chụp ảnh gửi qua Zalo{" "}
            <strong>0766 757 525</strong>, gia đình xử lý ngay.
          </p>
        </div>
      </div>

      {/* Related products */}
      <section className="space-y-6 pt-4">
        <h2 className="font-serif text-2xl font-bold text-herbal">
          Các dòng thảo mộc khác tại xưởng
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
