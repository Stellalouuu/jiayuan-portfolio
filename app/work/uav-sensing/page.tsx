import type { Metadata } from "next";
import { UavSensingCaseStudy } from "@/components/portfolio/UavSensingCaseStudy";

export const metadata: Metadata = {
  title: "基于移动平台的有源感知 | 朱家源",
  description: "朱家源本科毕业设计：基于单无人机与多普勒频率差的非协作信号源定位系统。",
};

export default function UavSensingPage() {
  return <UavSensingCaseStudy />;
}
