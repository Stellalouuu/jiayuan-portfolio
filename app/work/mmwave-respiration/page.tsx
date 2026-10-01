import type { Metadata } from "next";
import { MmwaveRespirationResearch } from "@/components/portfolio/MmwaveRespirationResearch";

export const metadata: Metadata = {
  title: "毫米波通信信号被动呼吸检测 | 朱家源",
  description: "南方科技大学科研项目：毫米波通信信号被动呼吸检测。",
};

export default function MmwaveRespirationPage() {
  return <MmwaveRespirationResearch />;
}
