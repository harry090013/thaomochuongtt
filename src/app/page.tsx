import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Leaf,
  Sun,
  RefreshCw,
  FileDown,
  BookOpen,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { siteConfig } from "@/data/siteConfig";
import { ProductCard } from "@/components/ProductCard";
import { YouTubeFacade } from "@/components/YouTubeFacade";
import { JOURNAL_POSTS } from "@/data/posts";

export default function HomePage() {
  return (
    <div>
      {/* 1. HERO SECTION — Tối giản, nhiều khoảng thở */}
      <section className="border-b border-line bg-gradient-to-b from-cream to-cream-soft/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-herbal-soft border border-herbal/15 text-herbal text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-herbal" />
              Xưởng gia đình 16 năm (từ 05/2010) · Trà Kiệu Tây, Đà Nẵng
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-herbal leading-[1.2] tracking-tight">
              Nhang thảo mộc mộc mạc,{" "}
              <span className="text-wood">dịu ấm gian thờ</span> mỗi ngày.
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed">
              &ldquo;{siteConfig.manifesto}&rdquo; — Ba Thảo &amp; Mẹ Thu làm
              nhang từ bột thảo mộc tự nhiên, keo bời lời và phơi nắng miền Trung.
              Không hương liệu hóa chất, không chất cuốn tàn.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-herbal text-white text-sm font-semibold hover:bg-herbal-mid transition-colors"
              >
                Xem 6 sản phẩm chủ lực
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.contact.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-herbal/30 text-herbal text-sm font-semibold hover:bg-herbal-soft transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Nhắn Zalo {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 6 SẢN PHẨM CHỦ LỰC */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Danh mục tuyển chọn 2027
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-herbal">
              6 dòng thảo mộc chủ lực
            </h2>
            <p className="text-sm text-muted max-w-xl">
              Công khai giá bán lẻ đề xuất theo gói 250g, hộp nụ 45 viên và điếu
              ngải cứu — dễ chọn dùng hằng ngày hoặc làm quà biếu Tết.
            </p>
          </div>
          <Link
            href="/san-pham"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-herbal hover:text-herbal-mid shrink-0"
          >
            Lọc theo dòng hương
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-gold-soft border border-gold/25 text-sm text-wood leading-relaxed">
          <strong className="font-semibold">Lưu ý nhỏ từ xưởng:</strong> Nhang
          thảo mộc tự nhiên không tẩm hương liệu hóa chất nên khi chưa đốt chỉ
          thoảng mùi gỗ khô; khi bén lửa tỏa hương dịu ấm, khói mảnh và tàn rụng
          tự nhiên.
        </div>
      </section>

      {/* 3. 3 CAM KẾT THẬT */}
      <section className="bg-white border-y border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-xl space-y-2 mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Minh bạch từ gốc
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-herbal">
              3 điều xưởng giữ trọn suốt 16 năm
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-cream border border-line space-y-3">
              <div className="w-10 h-10 rounded-xl bg-herbal-soft text-herbal flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-herbal">
                Không hóa chất tạo mùi
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Chỉ dùng bột thảo mộc tự nhiên (rễ Tu Hú, hương bài, vỏ quế, gỗ
                trầm, lá ngải cứu) kết dính bằng bột keo bời lời. Không chủ động
                pha tinh dầu hóa chất hay chất dẫn cháy, cuốn tàn.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-line space-y-3">
              <div className="w-10 h-10 rounded-xl bg-herbal-soft text-herbal flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-herbal">
                Phơi nắng tự nhiên
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Nhang ép xong được nhặt bỏ cây lỗi thủ công rồi phơi dưới nắng
                gió miền Trung, hạn chế tối đa sấy nhiệt cao để giữ lại mùi hương
                mộc dịu ấm của thảo dược.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-line space-y-3">
              <div className="w-10 h-10 rounded-xl bg-herbal-soft text-herbal flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-herbal">
                Bảo hành đổi mới 100%
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Đổi mới hoàn toàn khi sản phẩm bị gãy vỡ do vận chuyển, ẩm mốc do
                đóng gói, hoặc gặp tình trạng tắt giữa chừng liên tục từ 30 cây
                trở lên.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/quy-trinh"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-herbal hover:text-herbal-mid"
            >
              Xem 7 bước làm nhang &amp; góc minh bạch chất lượng
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. VIDEO XƯỞNG PHƠI NẮNG */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <YouTubeFacade
          videoId={siteConfig.youtubeWorkshopId}
          title="Một buổi phơi nắng nhang thảo mộc tại Trà Kiệu Tây"
          caption="Ghi lại nhịp làm việc mộc mạc hằng ngày của Ba Thảo & Mẹ Thu: trộn bột thảo mộc, ép cây, nhặt tăm lỗi và đón nắng miền Trung."
        />
      </section>

      {/* 5. CÂU CHUYỆN GIA ĐÌNH */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-2xl bg-white border border-line p-7 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Từ tháng 5/2010 đến nay
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-herbal leading-snug">
              Câu chuyện Ba Thảo, Mẹ Thu và hành trình tiếp nối nghề nhà
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Chữ <strong>T&amp;T</strong> trong Thảo Mộc Hương T&amp;T là viết
              tắt tên <strong>Mẹ Thu</strong> và <strong>Ba Thảo</strong>. Bắt
              đầu từ cơ duyên được gia đình Sư phụ dạy võ truyền nghề năm 2010 với
              dòng Nhang Tu Hú, gia đình đã đi qua 16 năm giữ trọn nếp ăn chay,
              làm thật — và nay có thêm thế hệ trẻ trở về chuẩn hóa quy trình,
              bao bì để đưa hương sạch xứ Quảng đi xa hơn.
            </p>
            <div className="pt-1">
              <Link
                href="/cau-chuyen"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-herbal hover:text-herbal-mid"
              >
                Đọc trọn vẹn câu chuyện 16 năm
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3 bg-cream p-5 rounded-xl border border-line">
            <div className="text-xs font-semibold text-herbal uppercase tracking-wider">
              3 mốc đáng nhớ
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="font-bold text-wood">05/2010</span>
                <p className="text-muted text-xs mt-0.5">
                  Khởi đầu nghề làm Nhang Tu Hú tại Trà Kiệu Tây.
                </p>
              </li>
              <li>
                <span className="font-bold text-wood">2020–2021</span>
                <p className="text-muted text-xs mt-0.5">
                  Mở rộng các dòng thảo dược tự nhiên: Bài Quảng, Quế, Trầm, Ngải Cứu.
                </p>
              </li>
              <li>
                <span className="font-bold text-wood">2026–2027</span>
                <p className="text-muted text-xs mt-0.5">
                  Harry về quê tiếp nối, chuẩn hóa mã SKU, bao bì và hướng tới OCOP.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. NHẬT KÝ XƯỞNG MỚI NHẤT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div className="space-y-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Nhật ký xưởng
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-herbal">
              Ghi chép nhỏ về thảo mộc
            </h2>
          </div>
          <Link
            href="/chia-se"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-herbal hover:text-herbal-mid"
          >
            Xem tất cả
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {JOURNAL_POSTS.slice(0, 2).map((post) => (
            <Link
              key={post.slug}
              href={`/chia-se/${post.slug}`}
              className="group p-6 rounded-2xl bg-white border border-line hover:border-herbal/40 transition-colors space-y-2.5"
            >
              <div className="flex items-center gap-2 text-xs text-muted">
                <BookOpen className="w-3.5 h-3.5 text-herbal" />
                <span>{post.category}</span>
                <span>·</span>
                <span>{post.date}</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-herbal group-hover:text-herbal-mid leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. KHỐI MỜI HỢP TÁC ĐẠI LÝ / CATALOG PDF */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-herbal text-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#FDE6A8] text-xs font-semibold">
              Dành cho Đại lý · Cửa hàng đặc sản · Kênh quà Tết
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-snug">
              Đồng hành phân phối nhang thảo mộc sạch từ xưởng gốc
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              Chính sách chiết khấu linh hoạt theo sản lượng, ghép đơn đa dạng 6
              dòng sản phẩm và hỗ trợ gửi bộ mẫu thực tế để đối tác trải nghiệm
              trước khi nhập hàng.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <a
              href={siteConfig.catalogPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FDE6A8] text-wood text-sm font-bold hover:bg-[#fce090] transition-colors"
            >
              <FileDown className="w-4 h-4" />
              Tải Catalog PDF
            </a>
            <Link
              href="/dai-ly"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/25 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
            >
              Xem chính sách
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
