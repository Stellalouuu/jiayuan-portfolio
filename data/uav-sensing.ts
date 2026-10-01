export const uavTags = ["无人机", "无线感知", "SDR", "FDoA", "信号处理"];

export const systemHardware = ["DJI M350 RTK", "USRP-B210", "Raspberry Pi", "双接收天线"];

export const projectContributions = [
  ["理论建模", "建立无人机旋转与平移状态下的 FDoA 观测模型"],
  ["信号处理", "设计双通道频偏抵消、STFT 与 1D-CFAR 提取流程"],
  ["定位算法", "实现旋转模式 LS 测向与平移模式 PSO 直接定位"],
  ["系统实现", "参与无人机、SDR、树莓派和双天线系统集成"],
  ["实验验证", "完成户外数据采集、结果分析与定位精度评估"],
] as const;
