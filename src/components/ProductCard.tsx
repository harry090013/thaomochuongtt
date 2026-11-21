import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import { formatVnd } from "@/data/siteConfig";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/san-pham/${product.slug}`}
      className="group flex flex-col bg-white border border-line rounded-2xl overflow-hidden hover:border-herbal/40 hover:shadow-sm transition-all"
    >
      <div className="relative aspect-[4/3] bg-cream-soft overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-herbal/90 text-[#FDE6A8] text-[11px] font-semibold">
          {product.orderNumber}
        </span>
        {product.badge && (
          <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-cream/95 text-wood border border-line text-[11px] font-medium">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <div className="text-xs font-medium text-herbal-mid">
            {product.specBadge}
          </div>
          <h3 className="font-serif text-lg font-bold text-herbal group-hover:text-herbal-mid transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        <div className="pt-3.5 border-t border-line/70 flex items-end justify-between gap-2">
          <div>
            <span className="block text-[11px] text-muted">Giá bán lẻ đề xuất</span>
            <span className="text-lg font-bold text-wood">
              {formatVnd(product.price)}
            </span>
            <span className="text-xs text-muted"> / {product.unitLabel.split(" (")[0]}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-herbal group-hover:translate-x-0.5 transition-transform">
            Chi tiết
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
