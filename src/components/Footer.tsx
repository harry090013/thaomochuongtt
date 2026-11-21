import Link from "next/link";
import { MapPin, Phone, Mail, FileDown } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { LotusMark } from "./LotusMark";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-herbal-soft border border-herbal-mid/30 flex items-center justify-center">
                <LotusMark className="w-6 h-6" />
              </span>
              <div>
                <p className="font-serif text-lg font-bold text-herbal">
                  {siteConfig.brandName}
                </p>
                <p className="text-xs text-muted">{siteConfig.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              &ldquo;{siteConfig.manifesto}&rdquo; — Xưởng nhang thảo mộc gia đình
              tại Trà Kiệu Tây, làm mộc từ rễ cây, vỏ quế, gỗ trầm và lá ngải cứu
              tự nhiên.
            </p>
            <p className="text-xs font-medium text-gold tracking-wide uppercase">
              {siteConfig.feeling}
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-herbal">
              Khám phá
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/san-pham" className="hover:text-herbal transition-colors">
                  Danh mục sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/cau-chuyen" className="hover:text-herbal transition-colors">
                  Câu chuyện 16 năm
                </Link>
              </li>
              <li>
                <Link href="/quy-trinh" className="hover:text-herbal transition-colors">
                  Quy trình &amp; chất lượng
                </Link>
              </li>
              <li>
                <Link href="/dai-ly" className="hover:text-herbal transition-colors">
                  Hợp tác đại lý
                </Link>
              </li>
              <li>
                <Link href="/chia-se" className="hover:text-herbal transition-colors">
                  Nhật ký xưởng
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-herbal">
              Liên hệ xưởng
            </h3>
            <ul className="space-y-2.5 text-sm text-muted">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-herbal shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-herbal shrink-0" />
                <a
                  href={siteConfig.contact.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink hover:text-herbal transition-colors"
                >
                  Zalo / SĐT: {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-herbal shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-herbal transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <a
                href={siteConfig.catalogPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-herbal hover:text-herbal-mid underline underline-offset-4"
              >
                <FileDown className="w-3.5 h-3.5" />
                Tải Catalog Sản Phẩm PDF 2027
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} {siteConfig.brandName}. Xưởng gia đình Ba Thảo &amp; Mẹ Thu.
          </p>
          <p>{siteConfig.domainDisplay}</p>
        </div>
      </div>
    </footer>
  );
}
