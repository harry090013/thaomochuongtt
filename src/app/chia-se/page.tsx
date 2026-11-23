import type { Metadata } from "next";
import { JournalListClient } from "@/components/JournalListClient";

export const metadata: Metadata = {
  title: "Nhật Ký Xưởng",
  description:
    "Những ghi chép mộc mạc từ xưởng Thảo Mộc Hương T&T về rễ Tu Hú, vườn Hương Bài, quy trình làm nhang phơi nắng và cách dùng nhang thảo mộc an tâm.",
};

export default function JournalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
      <header className="max-w-2xl space-y-3 border-b border-line pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Nhật ký xưởng
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-herbal">
          Hành trình một cây nhang mộc
        </h1>
        <p className="text-sm sm:text-base text-muted leading-relaxed">
          Ghi chép theo từng chặng: từ lòng đất &amp; khu vườn, nhịp xưởng Trà
          Kiệu Tây, chuyện 16 năm giữ nghề của gia đình đến cách bảo quản và
          dùng nhang thảo mộc sao cho dịu nhẹ, bền hương nhất.
        </p>
      </header>

      <JournalListClient />
    </div>
  );
}
