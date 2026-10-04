import Link from "next/link";

function Heading({ number, title, description }: { number: string; title: React.ReactNode; description?: React.ReactNode }) {
  return <div className="wps-heading"><span>{number}</span><div><h2>{title}</h2>{description && <p>{description}</p>}</div></div>;
}

function Flow({ items }: { items: string[] }) {
  return <div className="wps-flow">{items.map((item) => <div key={item}>{item}</div>)}</div>;
}

export function JobpilotAiCaseStudy() {
  return <main className="wps-case-study">
    <header className="wps-hero wps-shell"><Link className="wps-back" href="/">← 返回首页</Link><div className="wps-hero-grid"><div><p className="wps-eyebrow">个人项目 · 2026.10</p><h1>JobPilot AI<br />AI 秋招求职管理 Agent</h1><p className="wps-intro">把分散在招聘邮件里的面试、测评和 Deadline，转换成可执行、可管理、可同步的求职事项。</p><div className="wps-tags">{["Next.js", "Gemini", "AI Agent", "IMAP", "Google Calendar"].map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="wps-directions"><div><strong>识别</strong><span>从招聘邮件提取 Job Event</span></div><div><strong>管理</strong><span>集中处理状态与 Deadline</span></div><div><strong>行动</strong><span>同步到 Google Calendar</span></div></div></div></header>

    <section className="wps-section wps-section-tinted"><div className="wps-shell"><Heading number="01" title="项目背景" description="秋招期间，面试邀请、在线测评、笔试和 Offer 信息分散在大量邮件中，用户需要反复查看邮箱、记录 Deadline 并维护求职状态。" /><div className="wps-copy-grid"><p className="wps-lead">招聘信息不是缺失，而是没有被转换成下一步行动。</p><div className="wps-copy"><Flow items={["招聘邮件", "识别重要事项", "记录 Deadline", "跟进状态", "安排下一步"]} /><p>JobPilot AI 面向秋招 / 校招求职者，将非结构化招聘邮件转换为结构化 Job Event，减少遗漏关键节点的风险。</p></div></div></div></section>

    <section className="wps-section wps-shell"><Heading number="02" title="产品目标" description="把招聘邮件从“信息”转化为“可执行求职事项”，而不是只返回一段聊天文本。" /><div className="wps-principles"><div><span>01</span><strong>看见重要事项</strong><p>识别公司、岗位、事件类型、面试轮次、时间和 Deadline。</p></div><div><span>02</span><strong>持续管理进度</strong><p>支持状态修改、收藏 / 置顶、紧急程度和状态筛选。</p></div><div><span>03</span><strong>安排下一步行动</strong><p>将面试、测评和材料提交转换为 Google Calendar Event Template。</p></div></div></section>

    <section className="wps-section wps-section-tinted"><div className="wps-shell"><Heading number="03" title="AI Agent 工作流" description="工作流的目标是把邮件变成可执行任务，并在信息不确定时明确请求确认。" /><Flow items={["QQ 邮箱", "IMAP 邮件读取", "本地招聘预筛选", "Gemini 信息理解", "结构化 Job Event", "JobPilot Dashboard", "Deadline / 状态管理", "Google Calendar"]} /><div className="wps-copy" style={{ marginTop: 35 }}><p>真实私有模式支持 QQ 邮箱 + IMAP + Gemini Pipeline；公开作品集 Demo 使用合成招聘邮件和模拟 Agent 工作流，不访问真实邮箱，也不调用私人 Gemini API。</p></div></div></section>

    <section className="wps-section wps-shell"><Heading number="04" title="核心功能" /><div className="wps-view-states"><article><span>01 / AI 邮件解析</span><h3>从邮件中理解招聘事件</h3><ul><li>公司与岗位</li><li>事件类型与面试轮次</li><li>日期、时间、地点与会议链接</li><li>AI 摘要与当前状态</li></ul></article><article><span>02 / 求职任务管理</span><h3>把 Job Event 变成任务</h3><ul><li>手动修改状态</li><li>收藏 / 置顶与紧急程度</li><li>Deadline 倒计时</li><li>逾期识别与即将发生的事项</li></ul></article><article><span>03 / 日历集成</span><h3>为下一步行动留出时间</h3><ul><li>面试与笔试</li><li>测评 Deadline</li><li>Offer 确认与材料提交</li><li>Google Calendar Event Template</li></ul></article></div></section>

    <section className="wps-section wps-section-tinted"><div className="wps-shell"><Heading number="05" title="产品决策" description="重点不是让 AI 做更多，而是让它在可靠的边界内承担正确的工作。" /><div className="wps-principles"><div><span>A</span><strong>先本地预筛选，再调用 LLM</strong><p>用招聘关键词进行本地预筛选，减少无意义的 LLM 请求，同时保持招聘邮件识别 Recall。</p></div><div><span>B</span><strong>AI 不补全缺失时间</strong><p>错误的面试时间比信息缺失风险更高。不确定字段返回 null，并标记 needsConfirmation，而不是编造信息。</p></div><div><span>C</span><strong>公开 Demo 与真实 Pipeline 隔离</strong><p>公开 Demo 使用合成招聘数据，保护私人邮箱和 API Credentials，同时保证稳定体验。</p></div></div></div></section>

    <section className="wps-section wps-shell">
      <Heading number="06" title="Demo & GitHub" description="公开体验对应独立 Demo Mode，不包含真实邮箱凭证或 Gemini API Key。" />
      <div className="hero-actions">
        <a className="button button-dark" href="https://jobpilot-ai-agent-gilt.vercel.app/" target="_blank" rel="noopener noreferrer">在线体验 <span aria-hidden="true">↗</span></a>
        <a className="button button-line" href="https://github.com/Stellalouuu/Jobpilot-AI-Agent" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <footer className="wps-footer wps-shell"><Link href="/">← 返回作品集</Link><span>JobPilot AI · 2026.10</span></footer>
  </main>;
}
