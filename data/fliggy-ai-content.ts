export type FliggyMetric = {
  value: string;
  label: string;
  status?: "actual" | "target" | "estimate";
};

export const fliggyMetrics: FliggyMetric[] = [
  { value: "1,200 → 12,000", label: "可获流酒店" },
  { value: "3K → 13K+", label: "生产素材" },
  { value: "+3,500 / 日", label: "双端 IPVUV" },
];

export const fliggyTags = ["AI 产品", "AIGC", "内容平台", "0→1", "Agent"];

export const modelCapabilityRows = [
  {
    model: "Nano Banana Pro",
    strengths: "自由设计稳定；场景感与美感较强",
    limitation: "复杂文字稳定性不足",
  },
  {
    model: "即梦",
    strengths: "生产效率高；支持较完整的一站式生成",
    limitation: "自由排版随机性较高",
  },
  {
    model: "Qwen",
    strengths: "参考模板复用能力较强",
    limitation: "可作为模板生产 / 兜底能力",
  },
];

