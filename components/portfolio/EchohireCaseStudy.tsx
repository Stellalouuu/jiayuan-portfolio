import Link from "next/link";

function Heading({ number, title, description }: { number: string; title: React.ReactNode; description?: React.ReactNode }) {
  return <div className="wps-heading"><span>{number}</span><div><h2>{title}</h2>{description && <p>{description}</p>}</div></div>;
}

export function EchohireCaseStudy() {
  return <main className="wps-case-study">
    <header className="wps-hero wps-shell">
      <Link className="wps-back" href="/">← 返回首页</Link>
      <div className="wps-hero-grid">
        <div>
          <p className="wps-eyebrow">个人项目 · 2026.10</p>
          <h1>EchoHire<br />AI 招聘反馈分析 Agent</h1>
          <p className="wps-intro">让每一次面试反馈都有据可依。</p>
          <div className="wps-tags">{["AI Agent", "产品设计", "Next.js", "Vibe Coding", "Human-in-the-loop"].map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
        <div className="wps-directions">
          <div><strong>关联</strong><span>岗位、简历与面试记录</span></div>
          <div><strong>分析</strong><span>匹配事实与证据边界</span></div>
          <div><strong>确认</strong><span>人工审核反馈报告</span></div>
        </div>
      </div>
    </header>

    <section className="wps-section wps-section-tinted">
      <div className="wps-shell">
        <Heading number="01" title="项目背景" description="企业招聘中，面试反馈经常依赖面试官的主观描述，存在信息分散、证据不完整、岗位要求与评价脱节等问题。" />
        <div className="wps-copy-grid">
          <p className="wps-lead">让面试信息成为可核查的反馈依据。</p>
          <div className="wps-copy"><p>EchoHire 聚焦面试结束后的反馈分析环节，帮助招聘团队将已有面试信息转化为结构化、可核查的反馈报告。</p></div>
        </div>
      </div>
    </section>

    <section className="wps-section wps-shell">
      <Heading number="02" title="产品定位" description="面向招聘 HR 与业务面试官的面试反馈分析 Agent。" />
      <div className="wps-copy-grid">
        <p className="wps-lead">不是替代人作出录用决策，而是帮助人更高效地整理事实、识别证据缺口、形成有依据的判断。</p>
      </div>
    </section>

    <section className="wps-section wps-section-tinted">
      <div className="wps-shell">
        <Heading number="03" title="核心功能" />
        <div className="wps-view-states">
          <article><span>01 / 岗位匹配分析</span><h3>围绕岗位要求组织判断</h3><p>关联岗位要求、简历经历与面试记录，逐项展示岗位相关事实及证据边界。</p></article>
          <article><span>02 / 面试证据分析</span><h3>把面试记录还原为事实</h3><p>整理候选人的项目背景、个人职责、采取行动和实际结果，形成结构化能力分析。</p></article>
          <article><span>03 / 反馈质量核查</span><h3>保留信息边界</h3><p>识别缺少事实支持的评价、个人贡献不明确及尚未验证的岗位能力。</p></article>
          <article><span>04 / 反馈报告与人工确认</span><h3>形成可追溯的反馈闭环</h3><p>生成结构化反馈报告，支持人工编辑、证据定位、确认归档和后续查看。</p></article>
        </div>
      </div>
    </section>

    <section className="wps-section wps-shell">
      <Heading number="04" title="产品设计亮点" description="让 Agent 辅助整理与分析，同时把判断权和确认权交还给人。" />
      <div className="wps-principles">
        <div><span>01</span><strong>证据驱动</strong><p>每项能力分析尽量关联具体面试事实。</p></div>
        <div><span>02</span><strong>岗位导向</strong><p>围绕岗位要求组织反馈，而非泛泛总结候选人。</p></div>
        <div><span>03</span><strong>信息边界</strong><p>区分“有证据支持”“部分证据”和“尚无证据”。</p></div>
        <div><span>04</span><strong>人工确认</strong><p>不自动决定录用或淘汰，保留人工审核权。</p></div>
        <div><span>05</span><strong>MVP 取舍</strong><p>聚焦面试后反馈分析，不扩展完整招聘管理系统。</p></div>
      </div>
    </section>

    <section className="wps-section wps-section-tinted">
      <div className="wps-shell">
        <Heading number="05" title="技术实现" description="以高保真交互原型展示 Agent 的任务处理逻辑与人机协作方式。" />
        <div className="wps-copy-grid">
          <p className="wps-lead">用可控的本地规则还原完整业务流程。</p>
          <div className="wps-copy"><p>使用 Next.js、React、TypeScript 和 Tailwind CSS 开发高保真交互原型，通过预设案例、本地分析规则和浏览器存储，展示完整业务流程。当前版本不接入真实大模型推理服务。</p></div>
        </div>
      </div>
    </section>

    <section className="wps-section wps-shell">
      <Heading number="06" title="在线体验" description="体验 EchoHire 的招聘反馈分析与人工确认流程。" />
      <div className="hero-actions echohire-actions">
        <a className="button button-dark" href="https://echohire-xi.vercel.app/" target="_blank" rel="noopener noreferrer">在线体验 EchoHire <span aria-hidden="true">↗</span></a>
        <a className="button button-line" href="https://github.com/Stellalouuu/echohire" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a className="button button-line" href="/documents/echohire-product-introduction.pdf" target="_blank" rel="noopener noreferrer">产品介绍 PDF <span aria-hidden="true">↗</span></a>
        <Link className="button button-line" href="/work/echohire">项目详情 <span aria-hidden="true">↗</span></Link>
      </div>
    </section>

    <footer className="wps-footer wps-shell"><Link href="/">← 返回作品集</Link><span>EchoHire · 2026.10</span></footer>
  </main>;
}
