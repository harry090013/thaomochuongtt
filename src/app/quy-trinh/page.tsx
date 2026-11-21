import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Info, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Quy Trình & Chất Lượng",
  description:
    "7 bước làm nhang thảo mộc mộc mạc tại xưởng Thảo Mộc Hương T&T, giải thích minh bạch về nhang không hóa chất và chính sách đổi mới 100%.",
};

const STEPS = [
  {
    num: "01",
    title: "Tuyển chọn & sơ chế nguyên liệu",
    desc: "Thu mua, trồng hoặc thuê đào rễ Tu Hú, rễ hương bài, vỏ quế, gỗ trầm và lá ngải cứu tự nhiên; làm sạch đất cát, loại bỏ tạp chất.",
  },
  {
    num: "02",
    title: "Cắt nhỏ, phơi khô & xay bột mịn",
    desc: "Nguyên liệu được băm nhỏ, phơi kiệt nắng rồi xay thành bột mịn đồng đều để cây nhang khi ép giữ kết cấu chắc và cháy êm.",
  },
  {
    num: "03",
    title: "Trộn bột thảo mộc với keo bời lời",
    desc: "Dùng bột keo vỏ cây bời lời tự nhiên kết hợp nước sạch để tạo độ kết dính — không dùng hóa chất dẫn cháy hay hương liệu tổng hợp.",
  },
  {
    num: "04",
    title: "Ép máy tạo cây & nhặt tăm lỗi thủ công",
    desc: "Đưa bột vào máy ép nhang lên tăm tre (tăm đỏ hoặc tăm trắng), sau đó nhặt bỏ thủ công những cây bị cong, gãy hoặc hở bột.",
  },
  {
    num: "05",
    title: "Phơi nắng tự nhiên miền Trung",
    desc: "Trải vỉ phơi dưới nắng gió tự nhiên giúp giữ trọn mùi thảo mộc dịu ấm, hạn chế tối đa sấy nhiệt cao làm bay tinh dầu (mùa mưa mới sấy hỗ trợ tránh ẩm mốc).",
  },
  {
    num: "06",
    title: "Đốt thử kiểm tra độ cháy",
    desc: "Mỗi mẻ nhang khô đều được đốt thử thực tế để kiểm tra mùi hương, độ cháy đều và độ tàn trước khi đưa sang khâu đóng gói.",
  },
  {
    num: "07",
    title: "Đóng gói & chống ẩm cẩn thận",
    desc: "Đóng gói theo quy cách 250g / 500g / 1kg hoặc hộp nụ 45 viên có gói hút ẩm, dán nhãn rõ thành phần và hướng dẫn bảo quản.",
  },
];

const HONEST_FACTS = [
  {
    q: "Vì sao chưa đốt không thấy thơm nồng?",
    a: "Tinh dầu tự nhiên nằm sâu trong thớ gỗ, vỏ quế và rễ cây. Không xịt hương liệu bên ngoài nên khi chưa châm lửa chỉ thoảng mùi gỗ khô; đến khi bén lửa hương mới tỏa ra dịu ấm.",
  },
  {
    q: "Vì sao tàn nhang không cuốn tròn trắng muốt?",
    a: "Xưởng không tẩm hóa chất giữ tàn. Tàn nhang thảo mộc sẽ rụng tự nhiên xuống bát hương, giữ cho khói mảnh và nhẹ nhàng hơn khi thắp trong nhà.",
  },
  {
    q: "Vì sao nhang dễ hút ẩm vào mùa mưa?",
    a: "Vì không dùng chất chống mốc. Chỉ cần đóng kín túi sau khi lấy nhang và để nơi khô ráo, tránh sát nền ẩm là dùng bền suốt nhiều tháng.",
  },
  {
    q: "Nhang có bao giờ bị tắt giữa chừng không?",
    a: "Vì không có chất dẫn cháy, nếu thắp ngay trước luồng gió quạt mạnh hoặc gặp tăm tre ẩm, nhang đôi khi có thể tắt. Nếu gặp lỗi tắt liên tục trên 30 cây, xưởng đổi mới 100% ngay.",
  },
];

export default function ProcessPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-14">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Minh bạch từ xưởng
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-herbal leading-tight">
          7 bước làm nhang mộc &amp; những điều xưởng nói thẳng từ đầu
        </h1>
        <p className="text-sm sm:text-base text-muted leading-relaxed">
          Chúng tôi tin sự an tâm không đến từ những lời quảng cáo lớn, mà đến
          từ việc khách hàng biết rõ cây nhang mình thắp mỗi ngày được làm ra
          như thế nào.
        </p>
      </header>

      {/* 7 steps */}
      <section className="space-y-5">
        <h2 className="font-serif text-2xl font-bold text-herbal">
          Quy trình 7 bước tại xưởng Trà Kiệu Tây
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="p-5 rounded-2xl bg-white border border-line flex gap-4 items-start"
            >
              <span className="w-10 h-10 rounded-xl bg-herbal-soft text-herbal font-serif font-bold text-sm flex items-center justify-center shrink-0">
                {step.num}
              </span>
              <div className="space-y-1">
                <h3 className="font-serif text-base font-bold text-herbal">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honest transparency */}
      <section className="space-y-5">
        <div className="flex items-center gap-2 text-herbal">
          <Info className="w-5 h-5" />
          <h2 className="font-serif text-2xl font-bold">
            4 điều thật về nhang không hóa chất
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {HONEST_FACTS.map((item) => (
            <div
              key={item.q}
              className="p-5 rounded-2xl bg-gold-soft/60 border border-gold/25 space-y-2"
            >
              <h3 className="font-serif text-base font-bold text-wood">
                {item.q}
              </h3>
              <p className="text-sm text-ink/80 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Warranty */}
      <section className="p-6 sm:p-8 rounded-2xl bg-herbal text-white space-y-4">
        <div className="flex items-center gap-2.5 text-[#FDE6A8]">
          <ShieldCheck className="w-6 h-6" />
          <h2 className="font-serif text-2xl font-bold text-white">
            Chính sách bảo hành đổi mới 100%
          </h2>
        </div>
        <p className="text-sm sm:text-base text-white/85 leading-relaxed">
          Thảo Mộc Hương T&amp;T cam kết đổi mới hoàn toàn cho khách hàng và đối
          tác khi sản phẩm gặp một trong các trường hợp:
        </p>
        <ul className="space-y-2 text-sm text-white/90 list-disc pl-5">
          <li>Sản phẩm bị gãy vỡ trong quá trình vận chuyển.</li>
          <li>Sản phẩm bị ẩm mốc do lỗi khâu đóng gói.</li>
          <li>
            Nhang gặp tình trạng tắt giữa chừng liên tục từ 30 cây trở lên trong
            điều kiện thắp bình thường (không gió lùa mạnh).
          </li>
        </ul>
        <div className="pt-2">
          <Link
            href="/san-pham"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FDE6A8] text-wood text-sm font-bold hover:bg-[#fce090] transition-colors"
          >
            Xem danh mục sản phẩm
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
