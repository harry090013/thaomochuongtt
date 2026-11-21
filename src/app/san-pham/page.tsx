import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ProductCatalogClient } from "@/components/ProductCatalogClient";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Sản Phẩm",
  description:
    "Danh mục 6 dòng nhang thảo mộc chủ lực của Thảo Mộc Hương T&T: Nhang Quế, Tu Hú, Bài Quảng, Trầm Hương, Nụ Trầm thủ công và Điếu Ngải Cứu.",
};

export default function ProductsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Danh mục chính thức 2027
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-herbal">
          Sản phẩm Thảo Mộc Hương T&amp;T
        </h1>
        <p className="text-sm sm:text-base text-muted leading-relaxed">
          Tập trung chuẩn hóa 5 dòng thảo mộc cốt lõi (Quế, Tu Hú, Bài Quảng,
          Trầm Hương, Ngải Cứu). Bấm vào từng sản phẩm để chọn kích cỡ, màu tăm
          và đặt nhanh qua Zalo.
        </p>
      </div>

      <ProductCatalogClient />

      {/* Custom sizes / Wholesale note */}
      <div className="rounded-2xl bg-herbal-soft border border-herbal/20 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="space-y-1.5 max-w-xl">
          <h2 className="font-serif text-xl font-bold text-herbal">
            Cần gói 500g, 1kg hoặc nhang cây to 60–80cm cho dịp lễ, Tết?
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Ngoài quy cách chuẩn 250g tiện dùng và làm quà biếu, xưởng vẫn nhận
            đóng gói 500g / 1kg cho khách quen và làm nhang cây to 60–80cm (cháy
            gần 4 tiếng) theo đặt trước.
          </p>
        </div>
        <a
          href={siteConfig.contact.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-herbal text-white text-sm font-semibold hover:bg-herbal-mid transition-colors shrink-0"
        >
          <MessageCircle className="w-4 h-4" />
          Nhắn Zalo hỏi quy cách
        </a>
      </div>
    </div>
  );
}
