import Link from "next/link";

export function HeroSection() {
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-intro"><p className="eyebrow">朱家源 / Jiayuan Zhu</p><p className="hero-role">AI 产品 × 工程技术</p></div>
      <div className="hero-main">
        <h1 id="hero-title">让复杂技术，<br />变成真正可用的产品。</h1>
        <p className="hero-summary">我关注复杂技术如何转化为真正可用、可规模化的产品体验。<br className="desktop-break" />从通信工程、无线感知，到 WPS AI、飞猪 AI 产品，再到独立完成 AI 产品原型，<br className="desktop-break" />我持续探索技术能力与真实用户需求之间的连接。</p>
        <div className="hero-actions"><a className="button button-dark" href="#work">查看项目 <span aria-hidden="true">↓</span></a><Link className="button button-line" href="/resume">查看简历 <span aria-hidden="true">↗</span></Link></div>
      </div>
      <div className="hero-education" aria-label="教育经历"><div><span>新加坡国立大学</span><small>科技与创新管理</small></div><div><span>南方科技大学</span><small>通信工程</small></div></div>
    </section>
  );
}
