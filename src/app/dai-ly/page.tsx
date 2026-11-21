import type { Metadata } from "next";
import {
  FileDown,
  MessageCircle,
  Package,
  Handshake,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Hợp Tác Đại Lý & Phân Phối",
  description:
    "Chính sách hợp tác phân phối nhang thảo mộc Thảo Mộc Hương T&T: tải Catalog PDF 2027, nhận bộ mẫu 6 sản phẩm thực tế và báo giá chiết khấu theo sản lượng.",
};

export default function DistributorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-14">
      {/* Header */}
      <header className="space-y-4">
        <span className="inline-block px-3 py-1 rounded-full bg-gold-soft border border-gold/30 text-wood text-xs font-semibold">
          Dành cho Đối tác · Cửa hàng đặc sản · Kênh quà Tết
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-herbal leading-tight">
          Hợp tác phân phối cùng xưởng Thảo Mộc Hương T&amp;T
        </h1>
        <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
          Chúng tôi tìm kiếm những đối tác bán lẻ, cửa hàng chay, cửa hàng đặc
          sản miền Trung và nhà phân phối mùa Tết cùng chia sẻ giá trị làm thật,
          bán hàng tử tế. Hợp tác trực tiếp từ xưởng sản xuất 16 năm tại Trà Kiệu
          Tây — không qua trung gian.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={siteConfig.catalogPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-herbal text-white text-sm font-semibold hover:bg-herbal-mid transition-colors"
          >
            <FileDown className="w-4 h-4" />
            Tải Catalog Sản Phẩm PDF 2027
          </a>
          <a
            href={siteConfig.contact.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-herbal/30 text-herbal text-sm font-semibold hover:bg-herbal-soft transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Nhận bảng chiết khấu qua Zalo
          </a>
        </div>
      </header>

      {/* 3 Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl bg-white border border-line space-y-3">
          <div className="w-10 h-10 rounded-xl bg-herbal-soft text-herbal flex items-center justify-center">
            <Handshake className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-lg font-bold text-herbal">
            Chiết khấu linh hoạt &amp; thưởng doanh số
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Bậc thang chiết khấu rõ ràng theo 3 mức đơn hàng (từ đơn khởi động
            đến nhà phân phối), ghép linh hoạt nhiều dòng sản phẩm trong cùng 1
            đơn và có chính sách thưởng thêm theo tháng/quý.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-line space-y-3">
          <div className="w-10 h-10 rounded-xl bg-herbal-soft text-herbal flex items-center justify-center">
            <Package className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-lg font-bold text-herbal">
            Hỗ trợ bộ mẫu 6 sản phẩm thực tế
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Đối tác có thể nhận bộ mẫu đầy đủ 6 dòng chủ lực (Quế, Tu Hú, Bài
            Quảng, Trầm cây, Nụ Trầm, Điếu Ngải Cứu) để tự tay đốt thử, cảm nhận
            mùi hương và bao bì trước khi quyết định nhập hàng.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-line space-y-3">
          <div className="w-10 h-10 rounded-xl bg-herbal-soft text-herbal flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-lg font-bold text-herbal">
            Chủ động sản xuất &amp; đổi mới 100%
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Đơn có sẵn giao trong 3–4 ngày; đơn sản xuất mới cận Tết từ 5–7 ngày.
            Cam kết đổi mới 100% nếu hàng gãy vỡ vận chuyển, ẩm mốc đóng gói hoặc
            lỗi cháy.
          </p>
        </div>
      </section>

      {/* 3-step onboarding */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-line space-y-6">
        <h2 className="font-serif text-2xl font-bold text-herbal">
          Quy trình hợp tác 3 bước gọn nhẹ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold">
              Bước 01
            </span>
            <h3 className="font-serif text-lg font-bold text-herbal">
              Xem Catalog &amp; trao đổi Zalo
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Tải Catalog sản phẩm 2027 và nhắn trực tiếp Zalo{" "}
              <strong>{siteConfig.contact.phoneDisplay}</strong> để xưởng gửi
              bảng chiết khấu dành riêng cho đối tác.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold">
              Bước 02
            </span>
            <h3 className="font-serif text-lg font-bold text-herbal">
              Trải nghiệm bộ mẫu 6 sản phẩm
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Xưởng gửi bộ mẫu về tận nơi để anh/chị đốt thử, kiểm chứng mùi mộc
              và độ hoàn thiện bao bì thực tế.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold">
              Bước 03
            </span>
            <h3 className="font-serif text-lg font-bold text-herbal">
              Lên đơn &amp; đồng hành lâu dài
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Ghép đơn linh hoạt theo nhu cầu khách hàng khu vực, nhận hỗ trợ
              hình ảnh studio và tài liệu giới thiệu sản phẩm rõ ràng.
            </p>
          </div>
        </div>
      </section>

      {/* Suitable partners */}
      <section className="p-6 sm:p-8 rounded-2xl bg-herbal-soft border border-herbal/20 space-y-4">
        <h2 className="font-serif text-xl font-bold text-herbal">
          Ai phù hợp phân phối Thảo Mộc Hương T&amp;T?
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-ink/85">
          {[
            "Cửa hàng thực phẩm sạch, thực dưỡng, quán chay",
            "Cửa hàng đặc sản miền Trung, quà tặng quê hương",
            "Điểm bán đồ thờ cúng, trà đạo, gốm sứ thủ công",
            "Cộng tác viên / Đại lý kinh doanh hàng sạch mùa Tết",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-herbal shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
