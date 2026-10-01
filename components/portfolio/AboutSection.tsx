const education = [
  {
    number: "01",
    school: "新加坡国立大学",
    english: "National University of Singapore",
    degree: "科技与创新管理 · 工学硕士",
    period: "2026.08 — 2027.06",
    context: "QS 世界大学排名前 10",
    courses: ["产品开发与价值创造", "工业数据分析", "科技商业财务", "创新与知识产权战略", "科技与可持续发展"],
    honors: ["新加坡国立大学入学学费减免奖学金", "海外硕士学生最高减免档位 30%"],
  },
  {
    number: "02",
    school: "南方科技大学",
    english: "Southern University of Science and Technology",
    degree: "通信工程 · 工学学士",
    period: "2022.09 — 2026.06",
    context: "双一流建设高校 · GPA 3.78 / 4.00",
    courses: ["计算机程序设计基础", "计算机网络", "数据库原理", "通信原理", "信号与系统", "无线通信", "天线与电波传播"],
    honors: ["南方科技大学校级优秀毕业生", "南方科技大学优秀学生奖学金", "南方科技大学校团委学生骨干"],
  },
];

const strengths = [
  { number: "01", title: "快速学习与跨领域适应", text: "从通信工程到 AI 产品，能够快速理解新技术、新业务与新场景。本科获南方科技大学校级优秀毕业生，硕士阶段获新加坡国立大学入学学费减免奖学金。" },
  { number: "02", title: "AI 产品与 0→1 能力", text: "具备 WPS AI、飞猪 AI 产品实践，并独立完成 FlowDay 从产品定义、交互设计到 Vibe Coding 原型落地。" },
  { number: "03", title: "技术理解与工程背景", text: "通信工程本科背景，具备无线通信、信号处理、计算机视觉与深度学习项目经验，能够理解技术能力、实现逻辑与技术边界。" },
  { number: "04", title: "逻辑分析与业务洞察", text: "习惯从用户场景和业务链路出发定位核心问题，再进行需求拆解、方案验证与数据分析，关注产品方案是否真正解决问题并产生价值。" },
  { number: "05", title: "执行与协同推进", text: "能够将模糊问题转化为具体产品方案，并在产品、算法、研发、运营等不同角色之间推动信息对齐、方案推进与落地。" },
];

const professionalCapabilities = [
  { title: "产品设计", items: ["Figma", "原型设计", "需求分析", "产品方案设计"] },
  { title: "数据分析", items: ["SQL", "Tableau", "数据分析与可视化"] },
  { title: "编程", items: ["Python", "Vibe Coding"] },
  { title: "工程技术", items: ["通信系统", "信号处理", "PCB 电路板设计与绘制"] },
];

export function AboutSection() {
  return <section id="about" className="section-shell section-block about-section" aria-labelledby="about-title">
    <div className="section-heading"><div><p className="section-index">03 / 03</p><h2 id="about-title">关于我</h2></div></div>
    <div className="about-layout"><div className="about-copy"><p>我本科就读于南方科技大学通信工程专业，现在在新加坡国立大学攻读科技与创新管理硕士。</p><p>工程学习让我习惯理解系统是如何工作的，而在 WPS AI 和飞猪的产品经历，让我开始更关注另一个问题：</p><blockquote>“一项技术能力，怎样才能真正变成用户愿意使用、业务能够规模化落地的产品？”</blockquote></div><div className="strength-list">{strengths.map((strength) => <article className="strength-item" key={strength.number}><span>{strength.number}</span><div><h3>{strength.title}</h3><p>{strength.text}</p></div></article>)}</div></div>
    <div className="about-detail-heading"><h3>教育背景</h3></div>
    <div className="education-list">{education.map((item) => <article className="education-item" key={item.number}><div className="education-meta"><span>{item.number}</span><time>{item.period}</time></div><div className="education-main"><h3>{item.school}</h3><p className="education-english">{item.english}</p><p className="education-degree">{item.degree}</p><p className="education-context">{item.context}</p></div><div className="education-secondary"><div><span>核心课程</span><p>{item.courses.join(" · ")}</p></div><div><span>荣誉</span><ul>{item.honors.map((honor) => <li className={honor.includes("校级优秀毕业生") ? "education-honor-primary" : ""} key={honor}>{honor}</li>)}</ul></div></div></article>)}</div>
    <div className="about-detail-heading about-capability-heading"><h3>专业能力</h3></div>
    <div className="professional-grid">{professionalCapabilities.map((group) => <article key={group.title}><h3>{group.title}</h3><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
    <div className="language-row"><div><h3>语言能力</h3></div><div><strong>英语</strong><span>IELTS 7.5</span><span>CET-6 595</span></div></div>
  </section>;
}
