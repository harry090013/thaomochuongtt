import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function ZaloFloatingButton() {
  return (
    <a
      href={siteConfig.contact.zaloUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Nhắn Zalo ${siteConfig.brandName}`}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-herbal text-white shadow-lg hover:bg-herbal-mid transition-all hover:scale-[1.02]"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-xs sm:text-sm font-semibold">Nhắn Zalo</span>
    </a>
  );
}
