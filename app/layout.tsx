import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "朱家源 | 个人简介",
  description: "朱家源的个人作品集，聚焦 AI 产品、产品设计与工程技术。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
