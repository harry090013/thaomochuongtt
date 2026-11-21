"use client";

import { useState } from "react";
import {
  PRODUCTS,
  SCENT_FILTERS,
  FORMAT_FILTERS,
  ScentLine,
  ProductFormat,
} from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductCatalogClient() {
  const [scent, setScent] = useState<"all" | ScentLine>("all");
  const [format, setFormat] = useState<"all" | ProductFormat>("all");

  const filtered = PRODUCTS.filter((p) => {
    const matchScent = scent === "all" || p.scentLine === scent;
    const matchFormat = format === "all" || p.format === format;
    return matchScent && matchFormat;
  });

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="p-5 rounded-2xl bg-white border border-line space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Lọc theo 5 dòng hương chính thức
          </p>
          <div className="flex flex-wrap gap-2">
            {SCENT_FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setScent(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  scent === item.id
                    ? "bg-herbal text-white"
                    : "bg-cream text-ink/80 border border-line hover:border-herbal/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-line/70 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Định dạng sản phẩm
          </p>
          <div className="flex flex-wrap gap-2">
            {FORMAT_FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFormat(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  format === item.id
                    ? "bg-wood text-white"
                    : "bg-cream text-ink/80 border border-line hover:border-wood/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-14 px-6 rounded-2xl bg-white border border-line space-y-3">
          <p className="text-sm text-muted">
            Chưa có sản phẩm khớp cả hai bộ lọc này.
          </p>
          <button
            type="button"
            onClick={() => {
              setScent("all");
              setFormat("all");
            }}
            className="px-4 py-2 rounded-full bg-herbal text-white text-xs font-semibold cursor-pointer"
          >
            Xem lại tất cả 6 sản phẩm
          </button>
        </div>
      )}
    </div>
  );
}
