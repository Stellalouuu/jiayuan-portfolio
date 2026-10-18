import type { Metadata } from "next";
import { EchohireCaseStudy } from "@/components/portfolio/EchohireCaseStudy";

export const metadata: Metadata = {
  title: "EchoHire｜AI 招聘反馈分析 Agent | 朱家源",
  description: "面向企业招聘场景的 AI 招聘反馈分析 Agent 高保真交互原型。",
};

export default function EchohirePage() {
  return <EchohireCaseStudy />;
}
