"use client";

import { useState } from "react";
import { Play, Sun, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface YouTubeFacadeProps {
  videoId?: string;
  title: string;
  caption?: string;
}

export function YouTubeFacade({ videoId, title, caption }: YouTubeFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videoId) {
    return (
      <div className="relative rounded-2xl overflow-hidden border border-line bg-herbal text-white">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto md:h-full min-h-[220px]">
            <Image
              src="/images/products/huong-tu-hu.jpg"
              alt="Nhang thảo mộc phơi nắng tự nhiên tại xưởng Trà Kiệu Tây"
              fill
              className="object-cover opacity-90"
            />
          </div>
          <div className="md:col-span-7 p-6 sm:p-8 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FDE6A8] text-xs font-medium">
              <Sun className="w-3.5 h-3.5" />
              Video thực tế tại xưởng phơi nắng
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
              {title}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {caption ||
                "Nhang được ép máy từ bột thảo mộc tự nhiên, nhặt bỏ cây lỗi thủ công rồi đem phơi dưới nắng gió miền Trung để giữ trọn hương thơm dịu ấm."}
            </p>
            <div className="pt-2">
              <Link
                href="/quy-trinh"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#FDE6A8] hover:underline underline-offset-4"
              >
                Xem quy trình 7 bước làm nhang mộc
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-line bg-black aspect-video relative">
      {isPlaying ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="w-full h-full relative group text-left cursor-pointer"
          aria-label={`Phát video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col items-center justify-center p-6">
            <span className="w-16 h-16 rounded-full bg-herbal text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Play className="w-7 h-7 fill-current ml-1" />
            </span>
            <span className="mt-4 font-serif text-lg sm:text-xl font-bold text-white text-center">
              {title}
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
