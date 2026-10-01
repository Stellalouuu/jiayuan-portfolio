import { otherEngineeringProjects } from "@/data/projects";

export function EngineeringSection() {
  return (
    <section id="engineering" className="section-shell section-block" aria-labelledby="engineering-title">
      <div className="section-heading"><div><p className="section-index">02 / 03</p><h2 id="engineering-title">工程与科研</h2></div><p>工程背景让我习惯从系统、技术约束和真实验证中理解问题。</p></div>
      <article className="featured-engineering"><div className="project-number">01</div><div className="featured-copy"><p className="eyebrow">南方科技大学 · 本科毕业设计</p><h3>基于移动平台的有源感知</h3><p className="featured-subtitle">基于单无人机与多普勒频率差的非协作信号源定位系统</p><p className="project-description">设计并实现一套基于单无人机平台的 FDoA 定位系统，从数学建模、信号处理和定位算法，到无人机 + SDR + 树莓派硬件系统集成，最终通过真实户外实验验证。</p>
        <div className="metric-grid engineering-metrics"><div className="metric"><strong>2.13°</strong><span>平均测向误差</span></div><div className="metric"><strong>1.77 m</strong><span>平均定位误差</span></div><div className="metric"><strong>5.32 GHz</strong><span>非协作 WiFi 实测</span></div></div>
        <div className="project-footer"><div className="tag-list">{["无人机", "无线感知", "SDR", "FDoA", "信号处理"].map((tag) => <span key={tag}>{tag}</span>)}</div><a href="/work/uav-sensing">查看完整项目 <span aria-hidden="true">↗</span></a></div>
      </div></article>
      <div className="other-projects"><div className="subsection-heading"><h3>其他工程与科研项目</h3><span>03 项</span></div>{otherEngineeringProjects.map((project) => <article className="compact-project" key={project.number}><span className="compact-number">{project.number}</span><div><h4>{project.title}</h4>{project.description && <p>{project.description}</p>}</div><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
    </section>
  );
}
