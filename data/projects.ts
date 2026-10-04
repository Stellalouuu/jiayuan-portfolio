export type ProductProject = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  metrics?: { value: string; label: string }[];
  highlights?: string[];
  tags: string[];
  links: { label: string; href: string; external?: boolean }[];
};

export const productProjects: ProductProject[] = [
  {
    number: "01",
    eyebrow: "个人项目 · 2026.10",
    title: "JobPilot AI｜AI 秋招求职管理 Agent",
    description: "针对秋招期间招聘邮件分散、面试与测评节点易遗漏的问题，设计并开发 AI 求职管理 Agent。通过 IMAP 自动读取招聘邮件，结合本地预筛选与 Gemini 将非结构化邮件转换为结构化 Job Event，实现招聘事项识别、求职状态管理、Deadline 倒计时、逾期提醒及 Google Calendar 日程同步。",
    highlights: ["Agent Workflow", "Privacy-aware Demo"],
    tags: ["Next.js", "Gemini", "AI Agent", "IMAP"],
    links: [
      { label: "在线体验", href: "https://jobpilot-ai-agent-gilt.vercel.app/", external: true },
      { label: "GitHub", href: "https://github.com/Stellalouuu/Jobpilot-AI-Agent", external: true },
      { label: "项目详情", href: "/work/jobpilot-ai" },
    ],
  },
  {
    number: "02",
    eyebrow: "阿里巴巴 · 飞猪",
    title: "AI 内容智能生产平台",
    description: "从酒店主图 AIGC 自动化生产，逐步升级为支持多渠道的 AI 内容生产体系。",
    metrics: [
      { value: "1,200 → 12,000", label: "可获流酒店" },
      { value: "3K → 13K+", label: "生产素材" },
      { value: "+3,500", label: "双端日均 IPVUV" },
    ],
    tags: ["AI 产品", "AIGC", "内容平台", "0→1"],
    links: [{ label: "查看项目", href: "/work/fliggy-ai-content" }],
  },
  {
    number: "03",
    eyebrow: "WPS AI",
    title: "AI Copilot表格输出优化",
    description: "围绕 AI 表格输出的预览与分享体验，重新设计从「生成结果」到「真正可用」的最后一步。",
    highlights: ["动态列宽适配", "关键行冻结", "一键复制 PNG", "智能排版"],
    tags: ["AI 产品", "用户体验", "办公软件"],
    links: [{ label: "查看项目", href: "/work/wps-copilot-table" }],
  },
  {
    number: "04",
    eyebrow: "个人项目",
    title: "FlowDay",
    description: "从一个简单的日程工具，逐步迭代为连接「计划、行动与回顾」的 AI 个人时间系统。",
    highlights: ["计划时间，也记住生活。"],
    tags: ["AI 产品", "0→1", "Vibe Coding", "交互原型"],
    links: [
      { label: "在线体验", href: "https://flowday-pi.vercel.app/app?demo=true", external: true },
      { label: "GitHub", href: "https://github.com/Stellalouuu/flowday", external: true },
      { label: "项目故事", href: "https://flowday-pi.vercel.app/case-study", external: true },
    ],
  },
];

export const otherEngineeringProjects = [
  { number: "02", title: "计算机视觉无线信道仿真与手势识别", description: "结合虚拟无线信道模拟与深度学习完成手势识别，通过迁移学习将识别准确率提升至 94.1%。", tags: ["计算机视觉", "无线感知", "深度学习"] },
  { number: "03", title: "毫米波通信信号被动呼吸检测", description: "IEEE WCNC 2024 · 论文", tags: ["毫米波", "无线感知", "IEEE"] },
  { number: "04", title: "Health Guard 慢性病健康管理系统", tags: ["UI/UX", "数字医疗", "NUS"] },
];
