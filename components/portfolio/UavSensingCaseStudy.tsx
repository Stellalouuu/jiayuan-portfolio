import Link from "next/link";
import {
  projectContributions,
  systemHardware,
  uavTags,
} from "@/data/uav-sensing";

function FlowStep({ children }: { children: React.ReactNode }) {
  return <div className="case-flow-step">{children}</div>;
}

export function UavSensingCaseStudy() {
  return (
    <main className="case-study">
      <header className="case-hero case-shell">
        <Link className="case-back-link" href="/">← 返回首页</Link>
        <div className="case-hero-grid">
          <div>
            <p className="case-eyebrow">南方科技大学 · 本科毕业设计</p>
            <h1>基于移动平台的有源感知</h1>
            <p className="case-subtitle">基于单无人机与多普勒频率差的非协作信号源定位系统</p>
            <div className="case-tags">{uavTags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
          <div className="case-results case-results-hero">
            <div><strong>2.13°</strong><span>平均测向误差</span></div>
            <div><strong>1.77 m</strong><span>平均定位误差</span></div>
            <div><strong>5.32 GHz</strong><span>非协作 WiFi 实测</span></div>
          </div>
        </div>
      </header>

      <section className="case-section case-shell" aria-labelledby="overview-title">
        <div className="case-section-heading"><span>01</span><div><h2 id="overview-title">用一架无人机，<br />定位一个“不配合”的无线信号源。</h2><p>项目面向复杂动态环境中的非协作信号源定位。</p></div></div>
        <div className="case-two-column"><div className="case-lead">能否只使用一架无人机，利用它自身的运动产生定位信息？</div><div className="case-body-copy"><p>信号源不会主动配合定位，WiFi 等窄带信号难以依赖高时间分辨率；无人机空间有限，不适合部署大型天线阵列，多平台协同也会增加系统复杂度和部署成本。</p><p>因此，系统尝试把移动平台的运动转化为空间观测，在不增加大型阵列和多站同步负担的前提下完成定位。</p></div></div>
      </section>

      <section className="case-section case-section-tinted" aria-labelledby="idea-title">
        <div className="case-shell"><div className="case-section-heading"><span>02</span><div><h2 id="idea-title">把“运动”变成定位信息。</h2><p>系统利用无人机运动产生的多普勒频率差作为观测量，避免依赖大带宽信号和复杂的多站时间同步。</p></div></div>
          <div className="case-flow case-flow-horizontal"><FlowStep>无人机运动</FlowStep><FlowStep>两个空间分离的接收天线</FlowStep><FlowStep>不同的 Doppler Shift</FlowStep><FlowStep>Frequency Difference of Arrival</FlowStep><FlowStep>目标方向 / 目标位置</FlowStep></div>
        </div>
      </section>

      <section className="case-section case-shell" aria-labelledby="modes-title">
        <div className="case-section-heading"><span>03</span><div><h2 id="modes-title">两种运动模式，<br />对应两类定位问题。</h2></div></div>
        <div className="case-mode-grid"><article><p className="case-card-kicker">旋转模式</p><h3>先找到方向</h3><div className="case-flow"><FlowStep>原地旋转</FlowStep><FlowStep>获得周期性多普勒频率差</FlowStep><FlowStep>最小二乘 LS</FlowStep><FlowStep>目标方向估计</FlowStep></div></article><article><p className="case-card-kicker">平移模式</p><h3>再估计位置</h3><div className="case-flow"><FlowStep>稳定平移</FlowStep><FlowStep>连续获得空间观测</FlowStep><FlowStep>构建非线性定位问题</FlowStep><FlowStep>粒子群优化 PSO</FlowStep><FlowStep>目标位置估计</FlowStep></div></article></div>
      </section>

      <section className="case-section case-section-tinted" aria-labelledby="system-title">
        <div className="case-shell"><div className="case-section-heading"><span>04</span><div><h2 id="system-title">从算法，<br />到真正飞起来的系统。</h2><p>将飞行状态、射频采集和定位算法连接成一套可在户外运行的系统。</p></div></div>
          <div className="case-system-layout"><div className="case-system-flow"><FlowStep>DJI M350 RTK<br /><small>RTK + IMU</small></FlowStep><FlowStep>双天线<br /><small>USRP-B210</small></FlowStep><FlowStep>Raspberry Pi</FlowStep><FlowStep>射频数据 + 飞行状态数据</FlowStep><FlowStep>信号处理与定位</FlowStep></div><ul className="hardware-list">{systemHardware.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="case-section case-shell" aria-labelledby="signal-title">
        <div className="case-section-heading"><span>05</span><div><h2 id="signal-title">从原始无线信号，<br />到可以用于定位的观测量。</h2></div></div>
        <div className="signal-pipeline"><div><strong>双通道 RF 信号</strong><span>同步接收来自两个空间位置的信号。</span></div><div><strong>共轭相乘</strong><span>比较两路信号之间的相位与频率差异。</span></div><div><strong>抵消公共频偏 CFO</strong><span>消除两路信号共同受到的频偏影响。</span></div><div><strong>STFT 时频分析</strong><span>观察多普勒频率随时间的变化。</span></div><div><strong>1D-CFAR</strong><span>从时频结果中提取可靠的频率峰值。</span></div><div><strong>提取多普勒频率差</strong><span>将信号处理结果交给定位算法。</span></div></div>
      </section>

      <section className="case-section case-section-tinted" aria-labelledby="experiment-title">
        <div className="case-shell"><div className="case-section-heading"><span>06</span><div><h2 id="experiment-title">不只是在仿真里有效。</h2><p>系统在真实户外环境中，针对 5.32 GHz 非协作 WiFi 信号源进行测试。</p></div></div><div className="case-results-grid"><div className="case-result-text"><strong>5.32 GHz</strong><span>非协作 WiFi 信号源</span></div><div className="case-result-text"><strong>2.13°</strong><span>旋转模式平均测向误差</span></div><div className="case-result-text"><strong>1.77 m</strong><span>平移模式平均定位误差</span></div></div></div>
      </section>

      <section className="case-section case-shell" aria-labelledby="result-title">
        <div className="case-section-heading"><span>07</span><div><h2 id="result-title">真实飞行实验，<br />验证方案的工程可行性。</h2></div></div><div className="case-result-highlight"><div><strong>2.13°</strong><span>旋转模式 · 平均测向误差</span></div><div><strong>1.77 m</strong><span>平移模式 · 平均定位误差</span></div></div><p className="case-result-note">通过多组户外飞行实验，验证单无人机 FDoA 定位方案的工程可行性。</p>
      </section>

      <section className="case-section case-section-tinted" aria-labelledby="contribution-title"><div className="case-shell"><div className="case-section-heading"><span>08</span><div><h2 id="contribution-title">我在这个项目中完成了什么</h2></div></div><div className="contribution-list">{projectContributions.map(([title, description]) => <div key={title}><strong>{title}</strong><p>{description}</p></div>)}</div></div></section>

      <section className="case-section case-shell case-reflection" aria-labelledby="reflection-title"><div className="case-section-heading"><span>09</span><div><h2 id="reflection-title">从这个项目中，<br />我真正学到的是什么？</h2></div></div><div className="reflection-copy"><p>这个项目让我第一次完整经历：</p><p className="reflection-sequence">理论模型 → 算法 → 硬件约束 → 真实数据 → 实验结果</p><p>最大的体会不是某一个算法本身，而是：一个在理论上成立的方法，只有在真实系统的噪声、同步、硬件和环境约束下仍然工作，才真正成为一个可以验证的工程方案。</p><p>这种对“真实约束”的关注，后来也影响了我做产品时的思考方式：不仅问“这个能力能不能实现”，也会继续问：“它在真实场景里，是否真的能够被使用？”</p></div></section>

      <footer className="case-footer case-shell"><Link href="/">← 返回首页</Link><span>本科毕业设计 · 工程与科研</span></footer>
    </main>
  );
}
