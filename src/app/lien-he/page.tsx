import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Liên Hệ",
  description:
    "Liên hệ xưởng sản xuất Thảo Mộc Hương T&T tại Thôn Trà Kiệu Tây, xã Duy Xuyên, thành phố Đà Nẵng. Hotline/Zalo: 0766 757 525.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Liên hệ trực tiếp xưởng
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-herbal">
          Ghé xưởng hoặc nhắn Zalo cho gia đình mình
        </h1>
        <p className="text-sm sm:text-base text-muted leading-relaxed">
          Cô chú cần tư vấn chọn mùi nhang dịu nhẹ, đặt gói 500g/1kg hay trao
          đổi chính sách đại lý cứ nhắn trực tiếp Zalo — gia đình sẽ phản hồi
          nhanh và rõ ràng nhất.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Info cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-herbal text-white space-y-4">
            <p className="text-xs uppercase tracking-wider text-[#FDE6A8] font-semibold">
              Kênh đặt hàng &amp; tư vấn nhanh nhất
            </p>
            <div>
              <p className="text-sm text-white/80">Hotline / Zalo chính thức</p>
              <p className="font-serif text-2xl font-bold mt-0.5">
                {siteConfig.contact.phoneDisplay}
              </p>
            </div>
            <a
              href={siteConfig.contact.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FDE6A8] text-wood text-sm font-bold hover:bg-[#fce090] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Mở khung chat Zalo ngay
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-line space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-herbal shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-herbal">Địa chỉ xưởng</p>
                <p className="text-ink mt-0.5">{siteConfig.contact.address}</p>
                <p className="text-xs text-muted mt-1">
                  ({siteConfig.contact.addressNote})
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-line/70">
              <Mail className="w-4 h-4 text-herbal shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-herbal">Email</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-ink hover:text-herbal mt-0.5 block"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-line/70">
              <Phone className="w-4 h-4 text-herbal shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-herbal">Điện thoại</p>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-ink hover:text-herbal mt-0.5 block"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-line/70">
              <Clock className="w-4 h-4 text-herbal shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-herbal">Giờ tiếp khách tại xưởng</p>
                <p className="text-muted mt-0.5">
                  Thứ 2 – Chủ Nhật: 7:30 – 17:30 (nên nhắn trước khi ghé để gia
                  đình đón tiếp chu đáo).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="lg:col-span-7 space-y-3">
          <div className="rounded-2xl overflow-hidden border border-line bg-white aspect-[4/3]">
            <iframe
              title="Bản đồ xưởng Thảo Mộc Hương T&T tại Trà Kiệu Tây, Duy Xuyên, Đà Nẵng"
              src={siteConfig.contact.mapsEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="flex justify-end">
            <a
              href={siteConfig.contact.mapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-herbal hover:text-herbal-mid"
            >
              Mở chỉ đường trên Google Maps
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
