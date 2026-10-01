import Link from "next/link";

function Heading({ number, title, description }: { number: string; title: React.ReactNode; description?: React.ReactNode }) {
  return <div className="research-heading"><span>{number}</span><div><h2>{title}</h2>{description && <p>{description}</p>}</div></div>;
}

function Flow({ items }: { items: string[] }) {
  return <div className="research-flow">{items.map((item) => <div key={item}>{item}</div>)}</div>;
}

export function MmwaveRespirationResearch() {
  return <main className="research-case research-case-mmwave">
    <header className="research-hero research-shell"><Link className="research-back" href="/">← 返回首页</Link><div className="research-hero-grid"><div><p className="research-eyebrow">南方科技大学 · 科研项目</p><h1>毫米波通信信号<br />被动呼吸检测</h1><p className="research-paper">Passive Respiration Detection via mmWave Communication Signal Under Interference</p><div className="research-tags">{["毫米波", "无线感知", "ISAC", "深度学习", "IEEE WCNC"].map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="research-results"><div><strong>60.48 GHz</strong><span>工作频率</span></div><div><strong>&gt;95%</strong><span>足够检测时长下的呼吸存在检测准确率</span></div><div><strong>≈90%</strong><span>呼吸次数整体计数准确率</span></div></div></div></header>

    <section className="research-section research-section-tinted"><div className="research-shell"><Heading number="01" title="研究背景" /><div className="research-copy-grid"><p className="research-lead">非接触式呼吸检测可应用于健康监测、睡眠分析等场景。</p><div className="research-copy"><p>相比需要身体接触的传感器或可穿戴设备，无线感知可以利用人体呼吸产生的细微运动对无线传播信号造成的变化进行检测。</p><p>现有系统在人体运动干扰环境下，呼吸信号容易受到更强运动信号的影响。本研究针对人体运动干扰环境下的毫米波被动呼吸检测问题展开。</p></div></div></div></section>

    <section className="research-section research-shell"><Heading number="02" title="毫米波被动感知系统" description="系统工作于 60.48 GHz，发射端发送毫米波通信信号，接收端通过参考通道和监视通道完成信号处理。" /><div className="research-channel-grid"><div><strong>Reference Channel</strong><span>获取参考通信信号</span></div><div><strong>Surveillance Channel 1 / 2</strong><span>获取人体和环境反射信号</span></div></div><p className="research-note">通过参考通道和监视通道之间的信号处理，提取目标运动产生的 Doppler 信息。</p></section>

    <section className="research-section research-section-tinted"><div className="research-shell"><Heading number="03" title="信号处理流程" /><Flow items={["Reference Channel + Surveillance Channel", "Clutter Cancellation", "Cross Ambiguity Function", "CFAR", "Time-Doppler Spectrogram", "ResNet"]} /><div className="research-method-list research-method-list-wide"><div><strong>Clutter Cancellation</strong><span>降低静态环境反射产生的干扰。</span></div><div><strong>Cross Ambiguity Function</strong><span>提取时延和 Doppler 特征。</span></div><div><strong>CFAR</strong><span>降低噪声和误检测影响。</span></div><div><strong>ResNet</strong><span>基于 Time-Doppler 特征完成呼吸存在检测和呼吸次数估计。</span></div></div></div></section>

    <section className="research-section research-shell"><Heading number="04" title="人体运动干扰" description="实验引入附近人员随机走动产生的人体运动干扰，模拟复杂环境下的检测条件。" /><div className="research-copy-grid"><p className="research-lead">从复杂干扰中分离与呼吸相关的信号特征。</p><div className="research-copy"><p>人体运动产生的 Doppler 信号可能显著强于胸腔呼吸产生的微弱变化，因此系统需要在运动干扰环境下识别呼吸相关特征。</p></div></div></section>

    <section className="research-section research-section-tinted"><div className="research-shell"><Heading number="05" title="实验系统与数据采集" /><div className="research-system-line"><div>60 GHz phased array</div><div>USRP</div><div>Reference Channel</div><div>Surveillance Channels</div></div><div className="research-copy-grid research-experiment-copy"><p className="research-lead">目标人员正常呼吸，另一名实验人员在附近随机移动。</p><div className="research-copy"><p>实验用于模拟人体运动干扰。数据集包括呼吸存在检测，以及 2–6 次呼吸计数场景。</p></div></div></div></section>

    <section className="research-section research-shell"><Heading number="06" title="呼吸检测与计数" description="将经过 CAF 与 CFAR 处理得到的 Time-Doppler Spectrogram 输入 ResNet。" /><div className="research-task-grid"><div><strong>呼吸存在检测</strong><span>二分类</span></div><div><strong>呼吸次数估计</strong><span>回归 / 计数</span></div></div></section>

    <section className="research-section research-section-tinted"><div className="research-shell"><Heading number="07" title="实验结果" /><div className="research-results-large"><div><strong>&gt;95%</strong><span>足够检测时长下<br />呼吸存在检测准确率</span></div><div><strong>≈90%</strong><span>呼吸次数<br />整体计数准确率</span></div></div></div></section>

    <section className="research-section research-shell"><Heading number="08" title="论文成果" /><div className="research-paper-block"><p>Passive Respiration Detection via mmWave Communication Signal Under Interference</p><span>IEEE WCNC</span></div></section>

    <section className="research-section research-section-tinted"><div className="research-shell"><Heading number="09" title="我的参与" /><p className="research-participation">参与毫米波无线感知与呼吸检测科研项目，为论文共同作者。</p></div></section>
    <footer className="research-footer research-shell"><Link href="/">← 返回首页</Link><span>南方科技大学 · 科研项目</span></footer>
  </main>;
}
