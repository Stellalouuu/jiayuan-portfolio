# Jiayuan Zhu · Personal Portfolio

朱家源的个人作品集。

聚焦：

**AI 产品 × 工程技术**

我关注复杂技术如何转化为真正可用、可规模化的产品体验。

[在线作品集](#在线作品集) · [GitHub](https://github.com/Stellalouuu/jiayuan-portfolio)

在线作品集：部署后更新

## 关于这个 Portfolio

这个网站用于整理我的产品实践、工程项目与科研经历。

内容主要分为两个方向：

### 产品实践

- 阿里巴巴 · 飞猪 AI 内容智能生产平台
- WPS Copilot 表格输出体验优化
- FlowDay AI 时间管理与个人成长记录产品

### 工程与科研

- 基于移动平台的有源感知（本科毕业设计）
- 基于计算机视觉的无线信道仿真与手势识别
- 毫米波通信信号被动呼吸检测

## 代表项目

### 01 · 飞猪 AI 内容智能生产平台

从淘宝首页酒店内容生产场景出发，设计 AI 内容生产流程，并进一步探索面向多渠道的 Skill + Agent 内容生产架构。

关键词：

AI 产品 · AIGC · 内容平台 · Agent

### 02 · WPS Copilot 表格输出体验优化

围绕 AI 生成表格后的查看、导出、分享和文档编辑，优化表格自适应布局、PNG 输出与文档排版体验。

关键词：

AI 产品 · 用户体验 · 办公软件 · 交互设计

### 03 · FlowDay

计划时间，也记住生活。

一个连接计划 → 行动 → 回顾的 AI 时间管理与个人成长记录产品。

提供可交互 Demo：

https://flowday-pi.vercel.app/

### 04 · 本科毕业设计

基于移动平台的有源感知。

基于单无人机与 FDoA 的非协作信号源定位系统。

核心实验结果：

- 平均测向误差：2.13°
- 平均定位误差：1.77 m

### 05 · 无线信道仿真与手势识别

通过计算机视觉获取手势运动轨迹，生成虚拟无线信道数据，并结合真实无线数据进行迁移学习。

结果：

85% → 94.1%

模拟数据初始识别准确率 → 迁移真实数据后识别准确率

### 06 · 毫米波通信信号被动呼吸检测

参与基于 60.48 GHz 毫米波通信信号的非接触式呼吸检测研究。

研究成果发表于 IEEE WCNC。

## 网站结构

| 路由 | 内容 |
| --- | --- |
| `/` | 个人作品集首页 |
| `/work/fliggy-ai-content` | 飞猪 AI 内容生产 Case Study |
| `/work/wps-copilot-table` | WPS Copilot Case Study |
| `/work/uav-sensing` | 本科毕业设计 |
| `/work/gesture-channel-simulation` | 无线信道仿真与手势识别 |
| `/work/mmwave-respiration` | 毫米波呼吸检测 |
| `/resume` | 个人简历 |

## 技术实现

- Next.js `16.3.6`
- React `19.2.8`
- TypeScript
- Tailwind CSS `4`

## 本地运行

```bash
git clone https://github.com/Stellalouuu/jiayuan-portfolio.git
cd jiayuan-portfolio
npm install
npm run dev
```

启动后访问：

http://localhost:3000

其他可用命令：

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run start
```
