import type { Metadata } from "next";
import { GestureChannelResearch } from "@/components/portfolio/GestureChannelResearch";

export const metadata: Metadata = {
  title: "基于计算机视觉的无线信道仿真与手势识别系统 | 朱家源",
  description: "南方科技大学工程项目：基于计算机视觉的无线信道仿真与手势识别系统。",
};

export default function GestureChannelSimulationPage() {
  return <GestureChannelResearch />;
}
