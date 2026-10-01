import type { Metadata } from "next";
import { FliggyAiContentCaseStudy } from "@/components/portfolio/FliggyAiContentCaseStudy";

export const metadata: Metadata = {
  title: "从 AIGC 内容生产到 AI 内容生产平台 | 朱家源",
  description: "阿里巴巴 · 飞猪 AI 内容智能生产平台产品案例。",
};

export default function FliggyAiContentPage() {
  return <FliggyAiContentCaseStudy />;
}
