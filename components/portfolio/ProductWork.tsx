import { productProjects } from "@/data/projects";

export function ProductWork() {
  return (
    <section id="work" className="section-shell section-block" aria-labelledby="work-title">
      <div className="section-heading"><div><p className="section-index">01 / 03</p><h2 id="work-title">产品项目</h2></div><p>从 AI 能力验证、产品设计，到规模化落地。</p></div>
      <div className="product-list">
        {productProjects.map((project) => <article className={`product-project project-${project.number}`} key={project.number}>
          <div className="project-number">{project.number}</div><div className="project-content"><p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3>
            {project.highlights?.map((highlight) => <p className="project-highlight" key={highlight}>{highlight}</p>)}
            <p className="project-description">{project.description}</p>
            {project.metrics && <div className="metric-grid">{project.metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>}
            <div className="project-footer"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.links.map((link) => <a key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>{link.label} <span aria-hidden="true">↗</span></a>)}</div></div>
          </div>
        </article>)}
      </div>
    </section>
  );
}
