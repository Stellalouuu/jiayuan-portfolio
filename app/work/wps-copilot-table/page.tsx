import type { Metadata } from "next";
import { WpsCopilotTableCaseStudy } from "@/components/portfolio/WpsCopilotTableCaseStudy";

export const metadata: Metadata = {
  title: "WPS Copilot 表格输出体验优化 | 朱家源",
  description: "金山办公 WPS AI 产品案例：AI 表格输出体验优化。",
};

export default function WpsCopilotTablePage() {
  return <WpsCopilotTableCaseStudy />;
}
