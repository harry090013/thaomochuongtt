"use client";

import { useState } from "react";
import { MessageCircle, Check, Copy } from "lucide-react";
import { Product } from "@/data/products";
import { formatVnd, siteConfig } from "@/data/siteConfig";

interface ProductOrderPanelProps {
  product: Product;
}

export function ProductOrderPanel({ product }: ProductOrderPanelProps) {
  const [selectedLength, setSelectedLength] = useState(
    product.lengths?.[0] || ""
  );
  const [selectedStick, setSelectedStick] = useState(
    product.stickColors?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);

  const buildOrderMessage = () => {
    const parts = [
      `Chào Thảo Mộc Hương T&T, mình muốn đặt:`,
      `- Sản phẩm: ${product.name} (${product.unitLabel})`,
    ];
    if (selectedLength) parts.push(`- Chiều dài: ${selectedLength}`);
    if (selectedStick) parts.push(`- Màu tăm: ${selectedStick}`);
    parts.push(`- Số lượng: ${quantity}`);
    parts.push(`- Tạm tính: ${formatVnd(product.price * quantity)} (chưa gồm phí ship)`);
    return parts.join("\n");
  };

  const handleOrderViaZalo = async () => {
    const message = buildOrderMessage();
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } catch {
      // Clipboard might be blocked on insecure context; still open Zalo
    }
    window.open(siteConfig.contact.zaloUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopyOnly = async () => {
    try {
      await navigator.clipboard.writeText(buildOrderMessage());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="space-y-5 p-5 sm:p-6 rounded-2xl bg-white border border-line">
      {/* Price */}
      <div className="pb-4 border-b border-line/70">
        <span className="text-xs text-muted uppercase tracking-wider">
          Giá bán lẻ đề xuất
        </span>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-bold text-wood">
            {formatVnd(product.price)}
          </span>
          <span className="text-sm text-muted">/ {product.unitLabel}</span>
        </div>
      </div>

      {/* Length selector */}
      {product.lengths && product.lengths.length > 0 && (
        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-herbal">
            Chọn chiều dài cây nhang
          </label>
          <div className="flex flex-wrap gap-2">
            {product.lengths.map((len) => (
              <button
                key={len}
                type="button"
                onClick={() => setSelectedLength(len)}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors cursor-pointer ${
                  selectedLength === len
                    ? "bg-herbal text-white border-herbal"
                    : "bg-cream text-ink border-line hover:border-herbal/50"
                }`}
              >
                {len}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Stick color selector */}
      {product.stickColors && product.stickColors.length > 0 && (
        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-herbal">
            Chọn màu tăm tre
          </label>
          <div className="flex flex-wrap gap-2">
            {product.stickColors.map((stick) => (
              <button
                key={stick}
                type="button"
                onClick={() => setSelectedStick(stick)}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors cursor-pointer ${
                  selectedStick === stick
                    ? "bg-herbal text-white border-herbal"
                    : "bg-cream text-ink border-line hover:border-herbal/50"
                }`}
              >
                {stick}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="flex items-center justify-between gap-4 pt-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-herbal">
          Số lượng
        </span>
        <div className="inline-flex items-center border border-line rounded-xl overflow-hidden bg-cream">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-9 h-9 flex items-center justify-center text-ink hover:bg-cream-soft cursor-pointer font-semibold"
            aria-label="Giảm số lượng"
          >
            −
          </button>
          <span className="w-10 text-center text-sm font-semibold">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="w-9 h-9 flex items-center justify-center text-ink hover:bg-cream-soft cursor-pointer font-semibold"
            aria-label="Tăng số lượng"
          >
            +
          </button>
        </div>
      </div>

      {/* Primary Zalo CTA */}
      <div className="space-y-2.5 pt-2">
        <button
          type="button"
          onClick={handleOrderViaZalo}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-herbal text-white text-sm font-semibold hover:bg-herbal-mid transition-colors cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          Đặt nhanh qua Zalo {siteConfig.contact.phoneDisplay}
        </button>

        <button
          type="button"
          onClick={handleCopyOnly}
          className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-cream border border-line text-xs font-medium text-muted hover:text-herbal hover:border-herbal/40 transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-herbal" />
              <span className="text-herbal font-semibold">
                Đã chép sẵn thông tin đơn hàng — chỉ cần dán vào Zalo!
              </span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Chép nội dung đặt hàng (tên SP + quy cách)
            </>
          )}
        </button>
      </div>

      <p className="text-xs text-muted leading-relaxed">
        * Bấm nút <strong>Đặt nhanh qua Zalo</strong> sẽ tự động chép sẵn tên
        sản phẩm, quy cách và số lượng để bạn dán ngay vào khung chat Zalo với
        xưởng.
      </p>
    </div>
  );
}
