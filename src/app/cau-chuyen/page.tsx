import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Câu Chuyện 16 Năm",
  description:
    "Hành trình 16 năm giữ nghề nhang thảo mộc gia truyền của Ba Thảo, Mẹ Thu và sự tiếp nối của Harry tại Trà Kiệu Tây, Duy Xuyên, Đà Nẵng.",
};

const TIMELINE = [
  {
    year: "05/2010",
    title: "Cơ duyên Sư phụ dạy võ & những bó Nhang Tu Hú đầu tiên",
    body: "Ba Thảo được gia đình Sư phụ dạy võ truyền lại nghề làm nhang vì thấy gia đình hiền lành, sống thật thà và hợp với nghề. Dòng đầu tiên xưởng làm là Nhang Tu Hú từ rễ găng núi bán cho bà con quanh vùng. Ba năm đầu đầy chật vật — từng bị trả hàng, nợ đọng và xoay xở từng đồng vốn — nhưng gia đình vẫn kiên trì giữ lấy cách làm mộc.",
  },
  {
    year: "2010 – 2020",
    title: "Lối sống ăn chay, làm thật và hành trình truyền miệng",
    body: "Cũng từ những năm đầu bén nghề, cả gia đình bén duyên ăn chay trường. Tên Thảo Mộc Hương T&T ra đời từ hai chữ cái đầu của Mẹ Thu và Ba Thảo, cùng một nguyên tắc duy nhất: 'Sản phẩm nhà bán cũng là sản phẩm nhà dùng.' Nhờ sự tin tưởng của bà con, nhang xưởng dần được gửi đều vào Sài Gòn, Nha Trang, Đà Nẵng hoàn toàn qua giới thiệu truyền miệng.",
  },
  {
    year: "2020 – 2021",
    title: "Mở rộng sang các dòng thảo dược tự nhiên",
    body: "Khi rễ Tu Hú tự nhiên ngày càng khó tìm người đi đào, được người thân bán hàng sạch khích lệ, Ba Mẹ bắt đầu thử nghiệm và hoàn thiện thêm các dòng Bài Quảng, Quế, Trầm Hương, Nụ Trầm thủ công và Điếu Ngải Cứu — tất cả đều giữ nguyên tinh thần thảo mộc tự nhiên, không hương liệu hóa chất.",
  },
  {
    year: "2026 – 2027",
    title: "Thế hệ trẻ trở về tiếp nối & chuẩn hóa từ gốc",
    body: "Sau thời gian làm công nghệ và marketing tại TP.HCM, Harry (Nguyễn Quang Hiếu — con trai Ba Thảo, Mẹ Thu) chính thức trở về quê Trà Kiệu Tây xin Ba Mẹ truyền nghề. Cùng gia đình chuẩn hóa lại quy trình sản xuất, danh mục 5 dòng hương cốt lõi, bao bì nhãn mác chỉn chu và từng bước xây dựng hồ sơ hướng tới OCOP.",
  },
];

export default function StoryPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <header className="space-y-4 border-b border-line pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Câu chuyện gia đình · 2010 – 2026
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-herbal leading-tight">
          16 năm giữ lấy mùi nhang mộc ở Trà Kiệu Tây
        </h1>
        <p className="text-base text-muted leading-relaxed">
          Chúng tôi không phải nhà máy lớn. Thảo Mộc Hương T&amp;T là một xưởng
          nhang hộ gia đình nhỏ, nơi Ba Thảo đứng máy trộn bột và canh nắng phơi,
          Mẹ Thu lo khâu đóng gói – chăm khách quen, còn Harry lo chuẩn hóa quy
          trình và đưa sản phẩm nhà lên mạng một cách tử tế, rõ ràng.
        </p>
      </header>

      {/* Manifesto pull-quote */}
      <blockquote className="p-6 sm:p-8 rounded-2xl bg-herbal-soft border-l-4 border-herbal space-y-2">
        <p className="font-serif text-xl sm:text-2xl font-bold text-herbal leading-snug">
          &ldquo;{siteConfig.manifesto}&rdquo;
        </p>
        <footer className="text-xs text-muted">
          — Nguyên tắc làm nghề của Ba Thảo &amp; Mẹ Thu từ tháng 5/2010
        </footer>
      </blockquote>

      {/* Timeline */}
      <section className="space-y-8">
        <h2 className="font-serif text-2xl font-bold text-herbal">
          Dòng thời gian 16 năm
        </h2>
        <div className="space-y-6 border-l-2 border-line pl-6 ml-2">
          {TIMELINE.map((item) => (
            <div key={item.year} className="relative space-y-2">
              <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-herbal border-2 border-cream" />
              <div className="text-xs font-bold uppercase tracking-wider text-gold">
                {item.year}
              </div>
              <h3 className="font-serif text-xl font-bold text-herbal">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-line space-y-4">
        <h2 className="font-serif text-2xl font-bold text-herbal">
          Những con người đứng sau mỗi bó nhang
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-cream border border-line/70 space-y-1">
            <p className="font-serif font-bold text-herbal">Ba Thảo</p>
            <p className="text-xs text-muted leading-relaxed">
              Phụ trách nguyên liệu, công thức thảo mộc, ép máy và kiểm soát độ
              cháy từng mẻ nhang.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-cream border border-line/70 space-y-1">
            <p className="font-serif font-bold text-herbal">Mẹ Thu</p>
            <p className="text-xs text-muted leading-relaxed">
              Phụ trách khách hàng truyền thống, chăm sóc khách quen và giữ nhịp
              bán hàng hằng ngày.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-cream border border-line/70 space-y-1">
            <p className="font-serif font-bold text-herbal">Harry (Quang Hiếu)</p>
            <p className="text-xs text-muted leading-relaxed">
              Chuẩn hóa dữ liệu vận hành, quy cách đóng gói, thương hiệu và kết
              nối khách hàng toàn quốc.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="flex flex-wrap items-center gap-3 pt-4">
        <Link
          href="/san-pham"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-herbal text-white text-sm font-semibold hover:bg-herbal-mid transition-colors"
        >
          Xem 6 dòng sản phẩm
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href={siteConfig.contact.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-line text-herbal text-sm font-semibold hover:bg-herbal-soft transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Trò chuyện cùng xưởng qua Zalo
        </a>
      </div>
    </article>
  );
}
