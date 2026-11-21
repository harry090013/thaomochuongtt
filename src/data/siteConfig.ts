export const siteConfig = {
  brandName: "Thảo Mộc Hương T&T",
  legalName: "Cơ sở sản xuất Nhang Thảo Mộc Thu Thảo",
  tagline: "Nghề nhang thảo mộc gia truyền từ 05/2010",
  manifesto: "Sản phẩm nhà bán cũng là sản phẩm nhà dùng.",
  feeling: "Dễ chịu · An tâm · Ấm áp",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://thaomochuongtt.vn",
  domainDisplay: "thaomochuongtt.vn",
  foundedYear: 2010,
  yearsOfCraft: 16,
  contact: {
    phoneDisplay: "0766 757 525",
    phoneRaw: "0766757525",
    zaloUrl: "https://zalo.me/0766757525",
    email: "stshieu09@gmail.com",
    address: "Thôn Trà Kiệu Tây, xã Duy Xuyên, thành phố Đà Nẵng",
    addressNote: "Trước đây là xã Duy Sơn, huyện Duy Xuyên, tỉnh Quảng Nam",
    mapsQueryUrl:
      "https://www.google.com/maps/place/Natural+Incense/@15.8090479,108.2324451,17z/",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.9033794205925!2d108.23244509999999!3d15.8090479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314207c2dce50fbf%3A0x7253f59840c2d99e!2sNatural%20Incense!5e0!3m2!1sen!2s!4v1795238321326!5m2!1sen!2s",
  },
  catalogPdfUrl: "/docs/Catalog-Thao-Moc-Huong-TT-2027.pdf",
  youtubeWorkshopId: process.env.NEXT_PUBLIC_YOUTUBE_WORKSHOP_ID || "",
  navLinks: [
    { href: "/", label: "Trang chủ" },
    { href: "/san-pham", label: "Sản phẩm" },
    { href: "/cau-chuyen", label: "Câu chuyện" },
    { href: "/quy-trinh", label: "Quy trình" },
    { href: "/dai-ly", label: "Đại lý" },
    { href: "/chia-se", label: "Nhật ký xưởng" },
    { href: "/lien-he", label: "Liên hệ" },
  ],
} as const;

export function formatVnd(amount: number): string {
  return new Intl.NumberFormat("vi-VN").format(amount) + "đ";
}
