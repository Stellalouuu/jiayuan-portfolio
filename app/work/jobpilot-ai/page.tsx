import type { Metadata } from "next";
import { JobpilotAiCaseStudy } from "@/components/portfolio/JobpilotAiCaseStudy";

export const metadata: Metadata = {
  title: "JobPilot AI｜AI 秋招求职管理 Agent | 朱家源",
  description: "面向秋招求职者的 AI 求职管理 Agent 产品案例。",
};

export default function JobpilotAiPage() {
  return <JobpilotAiCaseStudy />;
}
