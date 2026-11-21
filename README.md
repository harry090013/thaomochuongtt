# Website Thảo Mộc Hương T&T — Phiên Bản 2027 (v1.0)

Website chính thức của xưởng nhang thảo mộc gia truyền **Thảo Mộc Hương T&T** (từ 05/2010, Trà Kiệu Tây, Duy Xuyên, TP. Đà Nẵng).

- **Tên miền dự kiến**: `https://thaomochuongtt.vn`
- **Công nghệ**: Next.js 15 (App Router, Standalone Output) · TypeScript · Tailwind CSS v4
- **Định hướng giao diện**: Tối giản, thoáng, mobile-first, đồng bộ bảng màu Catalog 2027 (`#FDFBF7` · `#234B32` · `#5C3A21` · `#A67C2E`).

## Chạy thử trên máy cá nhân

```powershell
cd F:\Dev\tmh-web-2027
npm.cmd install
npm.cmd run dev
```

Mở trình duyệt tại `http://localhost:3000`.

## Cập nhật dữ liệu nhanh

- **Thông tin liên hệ, tên miền, YouTube ID**: `src/data/siteConfig.ts` (và `.env.local` dựa theo `.env.example`)
- **6 sản phẩm chủ lực & giá bán lẻ**: `src/data/products.ts`
- **Bài viết Nhật ký xưởng**: `src/data/posts.ts`
- **Hình ảnh sản phẩm**: `public/images/products/`
- **Catalog PDF 2027**: `public/docs/Catalog-Thao-Moc-Huong-TT-2027.pdf`

## Đóng gói & Triển khai trên VPS (Docker)

```bash
cp .env.example .env.local
docker compose up -d --build
```
