import Link from "next/link";
import { wpsTags } from "@/data/wps-copilot-table";

function Heading({ number, title, description }: { number: string; title: React.ReactNode; description?: React.ReactNode }) {
  return <div className="wps-heading"><span>{number}</span><div><h2>{title}</h2>{description && <p>{description}</p>}</div></div>;
}

function Flow({ items }: { items: string[] }) {
  return <div className="wps-flow">{items.map((item) => <div key={item}>{item}</div>)}</div>;
}

export function WpsCopilotTableCaseStudy() {
  return <main className="wps-case-study">
    <header className="wps-hero wps-shell"><Link className="wps-back" href="/">← 返回首页</Link><div className="wps-hero-grid"><div><p className="wps-eyebrow">金山办公 · WPS AI</p><h1>WPS Copilot<br />表格输出体验优化</h1><p className="wps-intro">围绕 AI 生成表格后的查看、导出与编辑流程，优化表格自适应布局、图片导出和文档排版体验。</p><div className="wps-tags">{wpsTags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="wps-directions"><div><strong>查看</strong><span>更高效地阅读 AI 生成表格</span></div><div><strong>分享</strong><span>降低跨平台使用成本</span></div><div><strong>编辑</strong><span>减少导出后的二次排版</span></div></div></div></header>

    <section className="wps-section wps-section-tinted"><div className="wps-shell"><Heading number="01" title="项目背景" /><div className="wps-copy-grid"><p className="wps-lead">AI 表格生成之后，用户仍然需要完成一系列后续操作。</p><div className="wps-copy"><Flow items={["AI 生成表格", "查看", "深入分析", "导出 / 复制", "分享", "文档编辑"]} /><p>现有体验在查看、导出和排版环节存在断点，因此本项目聚焦 AI 表格生成后的输出体验优化。</p></div></div></div></section>

    <section className="wps-section wps-shell"><Heading number="02" title="现有体验问题" description="使用 Problem / Evidence 结构梳理 AI 表格从生成结果到后续使用的主要问题。" /><div className="wps-problem-grid"><article><span>01</span><h3>显示问题</h3><p>表格无法根据窗口尺寸合理自适应。放大后仍可能无法完整显示，用户需要手动横向拖拽；部分弹窗存在较大无效留白。</p></article><article><span>02</span><h3>交互冗余</h3><p>表格详情窗口中，关闭图标和取消按钮承担相同功能。</p></article><article><span>03</span><h3>导出限制</h3><p>现有方式主要支持文本复制、Excel 导出和 WPS 文档导出，缺乏一键复制 / 下载表格 PNG 图片。</p></article><article><span>04</span><h3>排版问题</h3><p>表格进入文档后可能出现行列布局不合理、文字拥挤和对齐混乱，用户仍需要人工二次调整。</p></article></div></section>

    <section className="wps-section wps-section-tinted"><div className="wps-shell"><Heading number="03" title="核心使用场景" /><div className="wps-scenario-grid"><article><span>01</span><h3>快速查看</h3><p>用户希望在 Copilot 侧边栏中快速理解 AI 返回表格的核心信息。</p></article><article><span>02</span><h3>深入查看</h3><p>当表格较大时，用户需要进入更大的视图完成浏览、对比和分析。</p></article><article><span>03</span><h3>输出与复用</h3><p>用户需要将 AI 生成的表格复制到报告、保存为文件、分享到其他平台或继续编辑。</p></article></div></div></section>

    <section className="wps-section wps-shell"><Heading number="04" title="竞品分析" description="以 Gemini 2.5 Pro 作为主要对标，关注表格展示和文档输出中的设计模式。" /><div className="wps-competitor"><div><strong>自适应布局</strong><span>在不同宽度下更合理地展示表格，减少用户为了查看内容进行横向拖动的频率。</span></div><div><strong>清晰的文档排版</strong><span>表格进入文档后保持更清晰的结构，减少 AI 输出进入正式文档后的二次整理成本。</span></div></div></section>

    <section className="wps-section wps-section-tinted"><div className="wps-shell"><Heading number="05" title="设计目标" /><div className="wps-principles"><div><span>01</span><strong>提高可读性</strong><p>让不同尺寸和内容复杂度的表格能够合理适应当前查看空间。</p></div><div><span>02</span><strong>提高输出效率</strong><p>让用户能够根据使用场景选择复制文字、复制 PNG、下载 PNG 或下载 Excel。</p></div><div><span>03</span><strong>降低二次整理成本</strong><p>让 AI 表格进入文档后，自动应用更清晰的排版规则。</p></div></div></div></section>

    <section className="wps-section wps-shell"><Heading number="06" title="表格查看" description="根据侧边栏、详情查看器和全屏三种尺寸状态，分别处理信息密度与操作空间。" /><div className="wps-view-states"><article><span>侧边栏</span><h3>有限空间内优先保证可读性</h3><ul><li>固定格式列使用较窄宽度</li><li>长文本列弹性填充剩余空间</li><li>内容过长时截断并支持展开 / 收起</li><li>上下滚动时固定表头</li></ul></article><article><span>详情查看器</span><h3>扩大空间并减少无效操作</h3><ul><li>根据弹窗大小重新计算布局</li><li>支持动态列宽与手动调整列宽</li><li>首行 / 首列冻结</li><li>删除功能重复的“取消”按钮</li></ul></article><article><span>全屏</span><h3>充分利用更大的屏幕空间</h3><ul><li>支持全屏 / 退出全屏</li><li>全屏状态下重新计算表格布局</li><li>保留首行 / 首列冻结</li></ul></article></div></section>

    <section className="wps-section wps-section-tinted"><div className="wps-shell"><Heading number="07" title="导出与分享" description="不同输出格式对应不同后续场景，而不是简单增加按钮。" /><div className="wps-before-after"><div><p>Before</p><span>复制文字</span><span>Excel</span></div><b>→</b><div><p>After</p><span>复制文字</span><span>复制 PNG</span><span>下载 PNG</span><span>下载 Excel</span></div></div><div className="wps-output-use"><div><strong>Excel</strong><span>继续数据处理</span></div><div><strong>PNG</strong><span>即时分享 / 报告引用</span></div><div><strong>文字</strong><span>快速复制内容</span></div></div></div></section>

    <section className="wps-section wps-shell"><Heading number="08" title="文档排版优化" description="让 AI 生成内容进入正式文档后，直接达到基本可读状态。" /><div className="wps-document-rules"><div><strong>边框</strong><span>使用清晰的表格边框。</span></div><div><strong>表头</strong><span>保持明显的信息层级。</span></div><div><strong>第一列</strong><span>作为行标题保持稳定布局。</span></div><div><strong>数据单元格</strong><span>根据内容类型设置合理对齐方式。</span></div><div><strong>单元格</strong><span>保留合理内边距，避免文字紧贴边框。</span></div></div></section>

    <section className="wps-section wps-section-tinted"><div className="wps-shell"><Heading number="09" title="完整交互流程" /><Flow items={["用户提问", "AI 生成表格", "侧边栏快速查看", "详情 / 全屏查看 或 复制 / 下载 或 新建文档继续编辑", "生成 → 查看 → 输出 → 继续使用"]} /></div></section>

    <section className="wps-section wps-shell"><Heading number="10" title="我的工作" /><div className="wps-work-list"><div><strong>问题分析</strong><p>梳理 WPS Copilot 表格输出链路中的显示、导出和排版问题。</p></div><div><strong>竞品研究</strong><p>分析 Gemini 等 AI 产品在表格展示和文档输出上的交互方式。</p></div><div><strong>产品方案</strong><p>设计表格自适应布局、详情 / 全屏查看、PNG 图片导出和文档自动排版。</p></div><div><strong>交互设计</strong><p>梳理表格从生成、查看、导出到编辑的完整交互流程。</p></div></div></section>

    <footer className="wps-footer wps-shell"><Link href="/">← 返回首页</Link><span>金山办公 · WPS AI / AI 表格输出体验优化</span></footer>
  </main>;
}
