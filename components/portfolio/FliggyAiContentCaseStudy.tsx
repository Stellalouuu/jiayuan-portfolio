import Link from "next/link";
import { fliggyMetrics, fliggyTags, modelCapabilityRows } from "@/data/fliggy-ai-content";

function SectionHeading({ number, title, description }: { number: string; title: React.ReactNode; description?: React.ReactNode }) {
  return <div className="fliggy-section-heading"><span>{number}</span><div><h2>{title}</h2>{description && <p>{description}</p>}</div></div>;
}

function Flow({ items, className = "" }: { items: string[]; className?: string }) {
  return <div className={`fliggy-flow ${className}`}>{items.map((item) => <div className="fliggy-flow-step" key={item}>{item}</div>)}</div>;
}

function MetricRow() {
  return <div className="fliggy-metrics">{fliggyMetrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span>{metric.status && <small>{metric.status}</small>}</div>)}</div>;
}

export function FliggyAiContentCaseStudy() {
  return <main className="fliggy-case-study">
    <header className="fliggy-case-hero fliggy-shell">
      <Link className="fliggy-back-link" href="/">← 返回首页</Link>
      <div className="fliggy-hero-grid">
        <div><p className="fliggy-eyebrow">阿里巴巴 · 飞猪</p><h1>从 AIGC 内容生产，<br />到 AI 内容生产平台。</h1><p className="fliggy-hero-summary">从淘宝首页单渠道的酒店内容生产问题出发，完成 AI 主图生产 MVP，并进一步将能力抽象为可复用的 Skill 与 Agent，支持多渠道内容生产。</p><div className="fliggy-tags">{fliggyTags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
        <MetricRow />
      </div>
    </header>

    <section className="fliggy-section fliggy-section-tinted"><div className="fliggy-shell"><SectionHeading number="01" title={<>酒店不是没有流量机会，<br />而是没有足够的内容进入流量场。</>} description="淘宝首页推荐存在商品维度和内容维度两类获流方式。内容维度拥有更大的曝光空间，但当时只有约 1,200 个酒店 item-id 在投。" /><div className="fliggy-problem-layout"><div className="fliggy-problem-statement">问题不在于有没有流量，<br /><strong>而在于内容生产跟不上。</strong></div><div className="fliggy-bottleneck"><p className="fliggy-label">Problem → Bottleneck</p><Flow items={["找模板", "写 Prompt", "选图", "排序", "批量生产"]} /><div className="fliggy-three-columns"><div><strong>产量有限</strong><span>人工模板只有 10+</span></div><div><strong>同质化</strong><span>不同酒店复用相似模板</span></div><div><strong>难以形成闭环</strong><span>生产、投放与效果分析割裂</span></div></div></div></div></div></section>

    <section className="fliggy-section fliggy-shell"><SectionHeading number="02" title={<>不是先选模型，<br />而是先确定 AI 应该负责什么。</>} description="不是寻找一个“最好的模型”，而是根据不同生产任务，组合不同模型的优势。" /><div className="fliggy-model-table"><div className="fliggy-model-table-head"><span>模型能力</span><span>适合的部分</span><span>需要注意</span></div>{modelCapabilityRows.map((row) => <div className="fliggy-model-row" key={row.model}><strong>{row.model}</strong><p>{row.strengths}</p><p>{row.limitation}</p></div>)}</div></section>

    <section className="fliggy-section fliggy-section-tinted"><div className="fliggy-shell"><SectionHeading number="03" title={<>AI 不负责全部，<br />而是负责最适合自动化的部分。</>} description="酒店营销内容涉及事实准确、图片关联、文字变形、模板合理性和最终投放质量，因此没有追求完全无人化。" /><div className="fliggy-strategy"><div><strong>AI 批量生成</strong><span>提高内容生产的规模与速度</span></div><div><strong>AI 基础审核</strong><span>提前筛出明显的质量问题</span></div><div><strong>人工精校</strong><span>把关事实、关联和最终投放质量</span></div></div><Flow className="fliggy-long-flow" items={["任务下发", "酒店信息 / 素材读取", "卖点提炼", "AI 智能选图", "多模型内容生成", "AI 基础审核", "人工精校", "内容投放"]} /></div></section>

    <section className="fliggy-section fliggy-shell"><SectionHeading number="04" title={<>生成内容只是第一步。</>} description="生产、投放和效果分析被放进同一条闭环，内容不再只是一次性产物。" /><div className="fliggy-loop"><Flow items={["酒店数据 + 图片素材 + 套餐信息", "卖点提炼", "场景理解", "智能选图", "AIGC 海报", "AI 审核", "人工精校", "内容存储", "淘宝 / 飞猪投放", "曝光 / CTR / CVR / IPVUV", "内容诊断"]} /><div className="fliggy-loop-caption"><span>Generate</span><b>→</b><span>Distribute</span><b>→</b><span>Measure</span><b>→</b><span>Learn</span></div></div></section>

    <section className="fliggy-section fliggy-section-tinted"><div className="fliggy-shell"><SectionHeading number="05" title={<>但规模扩大以后，<br />新的问题出现了。</>} description="问题从“怎么生产更多内容？”升级为“怎么让 AI 内容生产能力真正复用？”" /><div className="fliggy-scale"><div className="fliggy-scale-number"><strong>4</strong><span>大生态</span></div><div className="fliggy-scale-number"><strong>9</strong><span>个渠道</span></div><div className="fliggy-scale-number"><strong>约 8 万篇</strong><span>在投内容</span></div></div><div className="fliggy-channel-list">{["淘宝", "飞猪", "小红书", "微信"].map((channel) => <div key={channel}><strong>{channel}</strong><span>素材类型 · 挂货方式 · 内容结构 · 审核规则 · 运营目标</span></div>)}</div><p className="fliggy-pivot">继续为每个渠道复制一套生产 Pipeline，会带来高开发成本、能力无法复用、内容无法统一管理和数据难以沉淀。</p></div></section>

    <section className="fliggy-section fliggy-shell"><SectionHeading number="06" title={<>如果每个渠道都重新做一套，<br />AI 能力就无法真正沉淀。</>} description="从 Pipeline 到 Platform：Skill 负责可复用能力，Agent 负责不同渠道的策略组合。" /><div className="fliggy-architecture"><div className="fliggy-architecture-agents"><p>渠道 Agent</p>{["淘宝 Agent", "飞猪 Agent", "小红书 Agent", "微信 Agent"].map((agent) => <div key={agent}>{agent}</div>)}</div><div className="fliggy-architecture-arrow">↓</div><div className="fliggy-architecture-skills"><p>Skill 库</p><div><section><strong>素材处理</strong><span>智能选图 · 卖点提炼 · 图片处理</span></section><section><strong>智能生成</strong><span>海报生成 · 文案生成 · 攻略生成</span></section><section><strong>智能审核</strong><span>事实审核 · 逻辑审核 · 风险审核</span></section></div></div></div></section>

    <section className="fliggy-section fliggy-section-tinted"><div className="fliggy-shell"><SectionHeading number="07" title={<>能力复用，<br />和渠道差异，需要分开解决。</>} /><div className="fliggy-skill-agent"><article><p>Skill</p><h3>哪些能力可以复用？</h3><span>把素材处理、生成和审核中的通用能力沉淀下来。</span></article><article><p>Agent</p><h3>这些能力如何组合？</h3><span>让不同渠道拥有自己的内容策略与任务编排。</span></article></div><div className="fliggy-channel-strategy"><div><strong>淘宝</strong><span>更强调种草感与 CTR</span></div><div><strong>飞猪</strong><span>更强调信息准确与转化</span></div><div><strong>小红书</strong><span>更强调攻略与长尾内容</span></div><div><strong>微信</strong><span>更强调社交传播</span></div></div></div></section>

    <section className="fliggy-section fliggy-shell"><SectionHeading number="08" title={<>从一次生产，<br />到可以持续迭代的内容系统。</>} /><div className="fliggy-value-grid"><div><p>规模</p><strong>1,200 → 12,000</strong><span>可获流酒店</span></div><div><p>生产</p><strong>人工模板<br />↓<br />AI + 人协同<br />↓<br />批量生产</strong></div><div><p>平台</p><strong>单渠道 Pipeline<br />↓<br />Skill + Agent<br />↓<br />多渠道复用</strong></div></div><MetricRow /></section>

    <section className="fliggy-section fliggy-section-tinted"><div className="fliggy-shell"><SectionHeading number="09" title={<>我的工作</>} /><div className="fliggy-work-list">{[["业务调研", "分析淘宝首页推荐与内容获流链路，定位内容生产瓶颈。"], ["AI 能力验证", "横向测试不同生成模型，定义模型在不同生产任务中的能力边界。"], ["产品方案", "设计任务下发、卖点提炼、智能选图、内容生成、审核与数据回流的完整链路。"], ["平台抽象", "将单渠道 Pipeline 拆解为可复用 Skill，通过 Agent 承载渠道差异化策略。"], ["跨团队推进", "与算法、研发、运营等角色协作推进方案落地。"]].map(([title, text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}</div></div></section>

    <section className="fliggy-section fliggy-shell fliggy-reflection"><SectionHeading number="10" title={<>从这个项目中，<br />我重新理解了“AI 产品化”。</>} /><div className="fliggy-reflection-copy"><p>一开始的问题是：“AI 能不能帮我们生成更多内容？”</p><p>但随着项目推进，问题逐渐变成：哪些能力应该由 AI 完成？哪些判断仍然需要人？哪些 AI 能力值得被抽象和复用？</p><p>AI 产品的价值不只是模型生成效果，还来自 Workflow、数据闭环、能力复用和业务结果。</p></div></section>

    <footer className="fliggy-footer fliggy-shell"><Link href="/">← 返回首页</Link><span>阿里巴巴 · 飞猪 / AI 内容智能生产平台</span></footer>
  </main>;
}
