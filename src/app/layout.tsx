import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ZaloFloatingButton } from "@/components/ZaloFloatingButton";
import { siteConfig } from "@/data/siteConfig";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.brandName} — Nhang Thảo Mộc Gia Truyền Từ 2010`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "Xưởng nhang thảo mộc gia đình 16 năm tại Trà Kiệu Tây, Duy Xuyên, Đà Nẵng. Nhang Quế, Tu Hú, Bài Quảng, Trầm Hương, Nụ Trầm thủ công và Điếu Ngải Cứu — không hương liệu hóa chất.",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} — Nghề Nhang Thảo Mộc Gia Truyền Từ 2010`,
    description:
      "Sản phẩm nhà bán cũng là sản phẩm nhà dùng. Nhang thảo mộc tự nhiên phơi nắng miền Trung — Dễ chịu, An tâm, Ấm áp.",
    images: [
      {
        url: "/images/products/huong-tu-hu.jpg",
        width: 1200,
        height: 630,
        alt: "Thảo Mộc Hương T&T",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} ${playfairDisplay.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ZaloFloatingButton />
      </body>
    </html>
  );
}
