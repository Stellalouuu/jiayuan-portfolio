import Link from "next/link";

function Heading({ number, title, description }: { number: string; title: React.ReactNode; description?: React.ReactNode }) {
  return <div className="research-heading"><span>{number}</span><div><h2>{title}</h2>{description && <p>{description}</p>}</div></div>;
}

function Flow({ items }: { items: string[] }) {
  return <div className="research-flow">{items.map((item) => <div key={item}>{item}</div>)}</div>;
}

export function GestureChannelResearch() {
  return <main className="research-case research-case-gesture">
    <header className="research-hero research-shell"><Link className="research-back" href="/">← 返回首页</Link><div className="research-hero-grid"><div><p className="research-eyebrow">南方科技大学 · 工程项目</p><h1>基于计算机视觉的<br />无线信道仿真与手势识别系统</h1><p className="research-intro">项目针对无线手势识别中真实数据采集成本较高的问题，利用计算机视觉获取手势三维运动轨迹，通过虚拟无线信道生成对应的无线频谱数据，并结合真实无线实验数据进行迁移学习与验证。</p></div><div className="research-results"><div><strong>85%</strong><span>模拟数据初始识别准确率</span></div><div><strong>94.1%</strong><span>迁移真实数据后识别准确率</span></div></div></div></header>

    <section className="research-section research-section-tinted"><div className="research-shell"><Heading number="01" title="项目背景" /><div className="research-copy-grid"><p className="research-lead">基于无线信号的手势识别可应用于非接触式交互、智能家居和虚拟现实等场景。</p><div className="research-copy"><p>但基于真实无线环境构建手势数据集需要完成硬件部署、重复数据采集和数据处理，成本较高。</p><p>本项目探索利用计算机视觉提取手势运动信息，通过虚拟无线信道生成无线频谱数据，降低无线手势识别数据集的获取成本。</p></div></div></div></section>

    <section className="research-section research-shell"><Heading number="02" title="系统架构" description="系统由视频手势捕捉、虚拟信道生成和手势识别三个主要模块组成。" /><Flow items={["手势视频", "关键点提取", "三维运动轨迹", "虚拟无线信道", "频谱图", "深度学习模型", "手势分类"]} /></section>

    <section className="research-section research-section-tinted"><div className="research-shell"><Heading number="03" title="视频手势捕捉与三维轨迹生成" /><div className="research-two-column"><div className="research-copy"><p>使用单目相机采集手势视频，通过 MediaPipe 提取手部关键点。</p><p>结合三维轨迹处理方法，将视频中的手势运动转换为可输入无线信道模型的三维运动轨迹。</p></div><div className="research-method-list"><div><strong>MediaPipe</strong><span>提取手部关键点</span></div><div><strong>Perspective-n-Point</strong><span>估计三维空间姿态</span></div><div><strong>轨迹平滑与插值</strong><span>处理运动轨迹中的缺失与噪声</span></div></div></div></div></section>

    <section className="research-section research-shell"><Heading number="04" title="虚拟无线信道生成" description="将手势三维运动轨迹输入无线信道模型，计算运动对无线传播产生的影响并生成对应频谱数据。" /><div className="research-effect-grid"><div><strong>时延</strong><span>描述传播路径变化</span></div><div><strong>增益</strong><span>描述信号强度变化</span></div><div><strong>多普勒效应</strong><span>描述运动产生的频率变化</span></div></div><p className="research-note">仿真频谱数据用于后续手势识别模型的训练与测试。</p></section>

    <section className="research-section research-section-tinted"><div className="research-shell"><Heading number="05" title="真实无线实验与数据采集" description="搭建真实无线手势识别实验环境，通过发射端、接收端、相控阵、USRP 和摄像头同步获取真实无线信号与手势数据。" /><div className="research-system-line"><div>发射端</div><div>相控阵 / USRP</div><div>摄像头</div><div>同步真实数据</div></div><p className="research-note">真实数据用于评估基于虚拟信道生成的数据训练得到的模型在真实无线环境中的泛化能力。</p></div></section>

    <section className="research-section research-shell"><Heading number="06" title="迁移学习" description="使用真实无线数据进一步适配真实环境中的噪声、硬件误差和复杂信道传播。" /><div className="research-transfer"><div><strong>85%</strong><span>模拟数据训练</span></div><b>→</b><div><strong>94.1%</strong><span>真实数据迁移后</span></div></div><div className="research-transfer-caption"><span>模拟数据</span><span>真实数据迁移</span></div></section>

    <section className="research-section research-section-tinted"><div className="research-shell"><Heading number="07" title="实验结果" description="实验结果保留模拟数据训练与真实数据迁移后的识别准确率对比。" /><div className="research-results-large"><div><strong>85%</strong><span>模拟数据识别准确率</span></div><div><strong>94.1%</strong><span>迁移学习后识别准确率</span></div></div></div></section>

    <section className="research-section research-shell"><Heading number="08" title="主要工作" /><div className="research-work-list">{["视频手势关键点提取与轨迹处理", "虚拟无线信道数据生成", "无线频谱数据处理", "深度学习手势识别实验", "迁移学习与实验结果分析"].map((item) => <div key={item}>{item}</div>)}</div></section>
    <footer className="research-footer research-shell"><Link href="/">← 返回首页</Link><span>南方科技大学 · 工程项目</span></footer>
  </main>;
}
