export type ScentLine = "que" | "tu-hu" | "bai-quang" | "tram" | "ngai-cuu";
export type ProductFormat = "nhang-cay" | "huong-nu" | "dieu-ngai";

export interface Product {
  slug: string;
  orderNumber: string;
  skuBase: string;
  name: string;
  shortName: string;
  scentLine: ScentLine;
  scentLabel: string;
  format: ProductFormat;
  formatLabel: string;
  price: number;
  unitLabel: string;
  specBadge: string;
  image: string;
  tagline: string;
  colorDesc: string;
  ingredients: string[];
  aromaAndExperience: string;
  suitableFor: string[];
  lengths?: string[];
  stickColors?: string[];
  extraSpecsNote?: string;
  storageTips: string[];
  burnTime?: string;
  badge?: string;
}

export const SCENT_FILTERS: { id: "all" | ScentLine; label: string }[] = [
  { id: "all", label: "Tất cả (6)" },
  { id: "que", label: "Quế" },
  { id: "tu-hu", label: "Tu Hú" },
  { id: "bai-quang", label: "Bài Quảng" },
  { id: "tram", label: "Trầm Hương" },
  { id: "ngai-cuu", label: "Ngải Cứu" },
];

export const FORMAT_FILTERS: { id: "all" | ProductFormat; label: string }[] = [
  { id: "all", label: "Mọi định dạng" },
  { id: "nhang-cay", label: "Nhang cây" },
  { id: "huong-nu", label: "Hương nụ" },
  { id: "dieu-ngai", label: "Điếu ngải cứu" },
];

export const PRODUCTS: Product[] = [
  {
    slug: "nhang-cay-que",
    orderNumber: "01",
    skuBase: "NC-QUE-L1",
    name: "Nhang cây Quế",
    shortName: "Nhang Quế",
    scentLine: "que",
    scentLabel: "Quế",
    format: "nhang-cay",
    formatLabel: "Nhang cây",
    price: 45000,
    unitLabel: "gói 250g",
    specBadge: "Gói 250g · 30/35/40/50cm",
    image: "/images/products/huong-que.jpg",
    tagline: "Hương quế ngọt cay ấm áp, dễ chịu và gần gũi cho gian thờ hằng ngày.",
    colorDesc: "Nâu đất ấm tự nhiên của vỏ quế; tùy chọn tăm đỏ thờ cúng hoặc tăm trắng tự nhiên.",
    ingredients: [
      "Bột quế tự nhiên",
      "Hoa hồi",
      "Bột keo bời lời kết dính",
      "Tăm tre mộc",
    ],
    aromaAndExperience:
      "Hương quế ngọt cay ấm áp, khói mảnh và không gây cay mắt. Phù hợp thắp hằng ngày để làm ấm không gian, giảm cảm giác ẩm mốc vào những ngày mưa gió và tạo bầu không khí thư giãn nhẹ nhàng.",
    suitableFor: [
      "Thắp thờ cúng gia tiên hằng ngày",
      "Khử mùi ẩm mốc mùa mưa, làm ấm phòng",
      "Gia đình thích mùi quế mộc ấm, giá dễ tiếp cận",
    ],
    lengths: ["30cm", "35cm", "40cm", "50cm"],
    stickColors: ["Tăm đỏ", "Tăm trắng"],
    extraSpecsNote:
      "Ngoài gói 250g tiện dùng, xưởng có đóng gói 500g và 1kg cho gia đình dùng thường xuyên.",
    storageTips: [
      "Bảo quản nơi khô ráo, thoáng mát, tránh đặt sát nền nhà ẩm.",
      "Đóng kín miệng túi sau khi lấy nhang để giữ hương thảo mộc bền lâu.",
      "Hạn chế thắp trực tiếp trước luồng gió quạt mạnh để cây nhang cháy đều.",
    ],
    burnTime: "~45–60 phút tùy chiều dài cây",
    badge: "Bán chạy",
  },
  {
    slug: "nhang-cay-tu-hu-loai-1",
    orderNumber: "02",
    skuBase: "NC-TUH-L1",
    name: "Nhang cây Tu Hú (Loại 1)",
    shortName: "Nhang Tu Hú",
    scentLine: "tu-hu",
    scentLabel: "Tu Hú",
    format: "nhang-cay",
    formatLabel: "Nhang cây",
    price: 65000,
    unitLabel: "gói 250g",
    specBadge: "Gói 250g · 30/35/40/50cm",
    image: "/images/products/huong-tu-hu.jpg",
    tagline: "Dòng nhang cội nguồn xứ Quảng gắn liền với xưởng từ tháng 5/2010.",
    colorDesc:
      "Vàng nâu ánh xanh nhẹ từ lá khuynh diệp; tùy chọn tăm đỏ hoặc tăm trắng.",
    ingredients: [
      "Bột rễ cây Tu Hú (rễ găng núi)",
      "Rễ hương lau",
      "Bột lá khuynh diệp",
      "Bột keo bời lời",
      "Tăm tre mộc",
    ],
    aromaAndExperience:
      "Đây là dòng nhang đầu tiên Ba Thảo & Mẹ Thu làm khi bắt đầu nghề năm 2010. Mùi thơm mộc dịu nhẹ, thanh ấm, rất dễ chịu khi thắp trong không gian kín hoặc nhà có người lớn tuổi, trẻ nhỏ.",
    suitableFor: [
      "Thờ cúng hằng ngày, ngày rằm, mùng một",
      "Không gian căn hộ, nhà phố cần mùi dịu nhẹ, ít khói",
      "Khách hàng yêu nét hương truyền thống xứ Quảng",
    ],
    lengths: ["30cm", "35cm", "40cm", "50cm"],
    stickColors: ["Tăm đỏ", "Tăm trắng"],
    extraSpecsNote:
      "Có đầy đủ quy cách 250g, 500g, 1kg và nhận làm cây to 60–80cm cho dịp lễ, cúng tộc, Tết.",
    storageTips: [
      "Nhang không tẩm chất chống mốc nên cần cất ở nơi khô thoáng.",
      "Tránh để gần khu vực bếp ẩm hoặc tường thấm nước mùa mưa.",
      "Nếu lỡ gặp trời nồm ẩm, có thể phơi nắng nhẹ 15–20 phút trước khi cất.",
    ],
    burnTime: "~45–60 phút tùy chiều dài cây",
    badge: "Cội nguồn 2010",
  },
  {
    slug: "nhang-cay-bai-quang",
    orderNumber: "03",
    skuBase: "NC-BAQ-L1",
    name: "Nhang cây Bài Quảng",
    shortName: "Nhang Bài Quảng",
    scentLine: "bai-quang",
    scentLabel: "Bài Quảng",
    format: "nhang-cay",
    formatLabel: "Nhang cây",
    price: 85000,
    unitLabel: "gói 250g",
    specBadge: "Gói 250g · 30/35/40/50cm",
    image: "/images/products/huong-bai-quang.jpg",
    tagline: "Hương rễ bài đặc trưng miền Trung — thơm đậm, thanh khiết và lưu hương ấm gian thờ.",
    colorDesc:
      "Nâu vàng mộc đậm nét truyền thống; tùy chọn tăm đỏ hoặc tăm trắng tự nhiên.",
    ingredients: [
      "Rễ găng núi",
      "Rễ hương bài",
      "Rễ quýt rừng",
      "Bột keo bời lời",
      "Tăm tre mộc",
    ],
    aromaAndExperience:
      "Kết hợp từ các loại rễ thảo mộc đặc trưng vùng miền Trung, Nhang Bài Quảng cho mùi thơm đậm và sâu hơn Tu Hú nhưng vẫn giữ trọn nét thanh khiết, không nồng gắt. Rất hợp thắp dịp giỗ chạp, lễ Tết để gian thờ thêm ấm cúng.",
    suitableFor: [
      "Dịp rằm, mùng một, giỗ chạp và Tết cổ truyền",
      "Khách hàng thích hương rễ bài đậm đà, lưu hương lâu",
      "Làm quà biếu người thân, ông bà",
    ],
    lengths: ["30cm", "35cm", "40cm", "50cm"],
    stickColors: ["Tăm đỏ", "Tăm trắng"],
    extraSpecsNote:
      "Có sẵn gói 250g chuẩn nhãn mới; nhận đặt gói 500g và 1kg theo nhu cầu.",
    storageTips: [
      "Giữ trong túi kín hoặc ống đựng nhang đặt nơi khô ráo.",
      "Tránh ánh nắng trực tiếp quá lâu sau khi đã mở túi để không bay hương rễ bài.",
    ],
    burnTime: "~45–60 phút tùy chiều dài cây",
    badge: "Đặc trưng miền Trung",
  },
  {
    slug: "nhang-cay-tram-huong",
    orderNumber: "04",
    skuBase: "NC-TRA-L1",
    name: "Nhang cây Trầm Hương",
    shortName: "Nhang Trầm cây",
    scentLine: "tram",
    scentLabel: "Trầm Hương",
    format: "nhang-cay",
    formatLabel: "Nhang cây",
    price: 250000,
    unitLabel: "gói 250g",
    specBadge: "Gói 250g · 30/35/40/50cm",
    image: "/images/products/huong-tram.jpg",
    tagline: "Hương trầm sâu lắng, trang trọng — giúp định tâm và thư giãn tinh thần.",
    colorDesc: "Nâu trầm mộc mạc tự nhiên của gỗ trầm; tùy chọn tăm đỏ hoặc tăm trắng.",
    ingredients: [
      "Bột trầm hương tự nhiên",
      "Bột keo bời lời kết dính",
      "Tăm tre mộc",
    ],
    aromaAndExperience:
      "Khi chưa đốt chỉ thoảng mùi gỗ trầm khô rất nhẹ; khi bén lửa tỏa hương trầm ngọt dịu, sâu lắng và trang trọng. Tạo không gian yên tĩnh để thờ cúng, đọc sách, thưởng trà hay nghỉ ngơi sau ngày dài.",
    suitableFor: [
      "Thờ cúng trang trọng, lễ lớn, Tết Nguyên Đán",
      "Không gian thiền định, thưởng trà, phòng làm việc yên tĩnh",
      "Quà biếu chỉn chu cho người thân, đối tác",
    ],
    lengths: ["30cm", "35cm", "40cm", "50cm"],
    stickColors: ["Tăm trắng", "Tăm đỏ"],
    extraSpecsNote:
      "Xưởng cũng có dòng Trầm Đặc Biệt và nhận làm cây to 60–80cm cho dịp Tết, cúng tộc.",
    storageTips: [
      "Đóng kín sau mỗi lần sử dụng để giữ trọn hương gỗ trầm tự nhiên.",
      "Đặt nơi khô ráo, tránh môi trường ẩm thấp.",
    ],
    burnTime: "~45–60 phút tùy chiều dài cây",
    badge: "Cao cấp",
  },
  {
    slug: "nu-tram-thu-cong",
    orderNumber: "05",
    skuBase: "NU-TRA-L1-H45",
    name: "Nụ Trầm thủ công",
    shortName: "Nụ Trầm hộp 45 viên",
    scentLine: "tram",
    scentLabel: "Trầm Hương",
    format: "huong-nu",
    formatLabel: "Hương nụ",
    price: 240000,
    unitLabel: "hộp 45 viên",
    specBadge: "Hộp 45 viên · Cháy ~20 phút",
    image: "/images/products/nu-tram.jpg",
    tagline: "Nặn tay thủ công mộc mạc — thích hợp xông nhà, thưởng trà, thiền định và biếu Tết.",
    colorDesc: "Nâu trầm tự nhiên, dáng tháp nặn tay thủ công (cao ~4.3cm).",
    ingredients: [
      "Bột trầm hương tự nhiên",
      "Bột keo bời lời kết dính",
    ],
    aromaAndExperience:
      "Mỗi viên nụ được nặn thủ công mộc mạc từ bột trầm và keo bời lời, không pha hóa chất tạo khói. Khi đốt trên lư gốm hoặc đĩa sứ, hương trầm lan tỏa ấm áp, thanh tịnh, rất thích hợp xông nhà dịp cuối năm, khai trương, thưởng trà hoặc thư giãn buổi tối.",
    suitableFor: [
      "Xông nhà mới, xông không gian dịp cuối năm & đầu xuân",
      "Thưởng trà, thiền định, yoga, đọc sách",
      "Đóng hộp tròn lịch sự, rất hợp làm quà biếu Tết",
    ],
    extraSpecsNote: "Mỗi hộp gồm 45 viên nụ trầm thủ công, có kèm gói hút ẩm bảo quản.",
    storageTips: [
      "Đậy kín nắp hộp sau khi lấy nụ và giữ nguyên gói hút ẩm bên trong.",
      "Đốt trên lư đồng, đĩa gốm hoặc đế chịu nhiệt ở nơi ít gió.",
    ],
    burnTime: "~20 phút / viên",
    badge: "Quà biếu Tết",
  },
  {
    slug: "dieu-ngai-cuu-thu-cong",
    orderNumber: "06",
    skuBase: "DH-NGA-L1-NH",
    name: "Điếu Ngải Cứu (Nhỏ)",
    shortName: "Điếu Ngải Cứu",
    scentLine: "ngai-cuu",
    scentLabel: "Ngải Cứu",
    format: "dieu-ngai",
    formatLabel: "Điếu ngải cứu",
    price: 70000,
    unitLabel: "hộp 10 cây (lẻ 7.000đ/cây)",
    specBadge: "Hộp 10 cây · Lẻ 7.000đ/cây",
    image: "/images/products/dieu-ngai-cuu.jpg",
    tagline:
      "Bột ngải cứu kết hợp bột quế và keo bời lời, nén chắc qua máy đạp nhang — dùng hơ ấm thư giãn theo nếp dưỡng sinh dân gian.",
    colorDesc:
      "Dạng điếu nén chắc qua máy đạp nhang, màu nâu tự nhiên của bột ngải cứu và bột quế.",
    ingredients: [
      "Bột ngải cứu tự nhiên",
      "Bột quế tự nhiên",
      "Bột keo bời lời kết dính",
    ],
    aromaAndExperience:
      "Mùi ngải cứu ấm đặc trưng hòa cùng chút ngọt cay dịu của bột quế. Điếu được nén chắc qua máy đạp nhang nên cháy đượm và giữ nhiệt êm — được nhiều gia đình dùng để hơ ấm cơ thể, thư giãn vùng cổ vai gáy hoặc xông nhẹ không gian theo kinh nghiệm dân gian.",
    suitableFor: [
      "Hơ ấm cơ thể, thư giãn theo kinh nghiệm dưỡng sinh dân gian",
      "Gia đình lớn tuổi hoặc người thích liệu pháp làm ấm tự nhiên",
      "Có bán lẻ từng cây nhỏ (7.000đ) và cây lớn (10.000đ)",
    ],
    extraSpecsNote:
      "Ngoài Điếu Ngải Cứu nhỏ (70.000đ/hộp 10 cây · lẻ 7.000đ/cây), xưởng có Điếu Ngải Cứu lớn (10.000đ/cây) và Nhang cây Ngải Cứu.",
    storageTips: [
      "Bảo quản nơi khô thoáng, tránh ẩm để điếu ngải giữ độ khô và cháy đượm.",
      "Khi hơ cứu, luôn giữ khoảng cách an toàn với da, không để quá nóng và dập tắt kỹ đầu điếu sau khi dùng.",
    ],
    burnTime: "~30–40 phút / điếu",
    badge: "Thảo dược dân gian",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
