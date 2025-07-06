---
title: 科研经历
hide:
    - navigation
---

[返回](../experience.md)

# 科研经历

## 2024 年 12 月 - 2025 年 6 月：AMS 飞行时间探测器粒子速度非线性重建方法研究

> 毕业设计论文。

## 2024 年 7 月 - 2024 年 7 月：粒子传播与探测模拟

> > 山东高等技术研究院夏令营。
>
> 这是我在山东高等技术研究院夏令营期间，[许伟伟老师](https://iat.cn/about/team_info.html?id=138)给我的一个小项目。

该研究中，我使用C++编写了一个粒子传播和探测的蒙特卡洛模拟程序。

程序从理想情况（探测器无误差、粒子无能损无散射）开始，逐步加入探测器误差、粒子能损、多次散射等因素，模拟粒子在探测器中的传播，并生成探测器的探测数据。最后，统计分析探测器的分辨率。

粒子的传播轨迹应当是：

<div style="text-align: center;">
<img src="../../../../assets/me/experience/research_experience/Particle_Propagation_and_Detection_Simulation/particle_trajectory.jpeg" alt="粒子传播轨迹草图" style="width: auto; height: 61.8vh;">
</div>

这是一张最终模拟图：

<div style="text-align: center;">
<img src="../../../../assets/me/experience/research_experience/Particle_Propagation_and_Detection_Simulation/result.jpeg" alt="探测器分辨率结果图" style="width: 61.8%; height: auto;">
</div>

项目完成后，我将模拟代码上传至了 GitHub，地址为：<https://github.com/abwuge/sdiat>

## 2024 年 5 月 - 至今：基于 Minecraft 平台的智能仓储游戏设计

> > SRTP（Student Research Training Program，大学生科研训练计划）项目，国家级。
>
> SRTP 已结束于 2025 年 5 月，但项目仍在持续开发中...

这并不是物理相关的研究项目，我因对 Minecraft 的兴趣参与该项目。

项目简介：

> 该项目利用 Minecraft 的高自由度和 Create 模组的机械仿真功能，对智能仓储实验室进行游戏化设计。通过功能性复刻实验室系统，建立仓库存取货物、系统间配合的直观模型，设计多种游戏玩法，为寓教于乐的教学方式提供参考。

该项目中，我负责理解负责人的设计意图，使用 mcfunction 编写数据包，使用 Java 编写模组（Forge），该部分的主要功能是实现玩法逻辑。

项目的仓库位于 GitHub，但因项目相关专利申请中，暂不公开，以下仓库将在专利公开后转公开：

-   数据包： <https://github.com/abwuge/mlc>
-   模组： <https://github.com/abwuge/Minecraft_Logistics_Create_Mod>

## 2023 年 5 月 - 2024 年 5 月：基于切伦科夫望远镜的宇宙射线方向重建

> SRTP（Student Research Training Program，大学生科研训练计划）项目，省部级。

本项目针对 LHAASO 实验中超高能伽马射线源的方向重建精度问题，通过建立理论模型和蒙特卡洛模拟，系统地研究了切伦科夫望远镜各参数对方向重建精度的影响。

该项目中我为学生负责人。在[刘虎老师](https://iap.swjtu.edu.cn/info/1016/1027.htm)的指导下，团队完成了望远镜位型的设计、望远镜参数化模型的建立，使用 COSIKA 软件产生模拟数据，基于 C++，使用 ROOT 框架进行分析数据。

团队撰写并发表论文一篇：[Study of Angular Resolution Using Imaging Atmospheric Cherenkov Technique](https://doi.org/10.3390/universe10020100)；参与相关专利一项：[大气切伦科夫望远镜阵列的位型布局方法、设备及介质](https://kns.cnki.net/kcms2/article/abstract?v=_ISxPpdig3w_7LJv9AivZfQQoSeB5DmEAy8iEJgPXQomGmCSWaZnEucOM7luJI_AO-WytwlYqI9KnIMLLJ-8gqjG7-VsLjFQwOlG9-mJJcLRQslD5wyyieXS1tp9fw4GfjAd4kbDnL4EqGKzi1mVXuWxTBiwPml7LnRd3VXb8ZzuIjZT6X77ag==&uniplatform=NZKPT&language=CHS)（专利公开号 CN117011476A，链接来自知网，[中国专利发布公告](http://epub.cnipa.gov.cn/)无法使用直链跳转）。

## 2022 年 7 月 - 2023 年 8 月：CUPT 2023

> CUPT（Chinese Undergraduate Physics Tournament，中国大学生物理学术竞赛），采用 IYPT（International Young Physicists' Tournament，国际青年物理学家锦标赛）部分题目。

> 此竞赛每题都需要进行理论分析、实验设计、实验实施、数据处理、结果分析等：每题都是一个完整的研究项目。因此我将其称为“研究”。

### Euler’s Pendulum （欧拉摆）

> Take a thick plate of non-magnetic ma­terial and fix a neodymium magnet on top of it. Suspend a magnetic rod (which can be assembled from cylindrical neo­dy­mium magnets) underneath it. Deflect the rod so that it touches the plate only with highest edge and release it. Study the motion of such a pendulum under various conditions.（取一块厚的无磁性的板子，在上面固定一块钕磁铁。在其下方悬挂一根磁棒（可以由圆柱形钕磁铁组装而成）。将磁棒偏转，使其只有最高处的边缘接触到板子，然后释放它。研究这种摆在各种条件下的运动。）

此研究中我做了一个理想假设，即磁棒与板不发生滑动。

则题目即可视为多个阶段的，接触点固定的，类复摆问题。

摆动过程就像这样：

<div style="text-align: center;">
<img src="../../../../assets/me/experience/research_experience/CUPT2023/Eulers_Pendulum/euler_pendulum.jpeg" alt="欧拉摆运动示意图" style="width: auto; height: 61.8vh;">
<p>（如果摆在竖直方向上的角速度很大，以至于不再为两个接触点而是一个圆，则可以简单的假定一个等效接触点于圆心的上方——因为摆是规则的圆柱体）</p>
</div>

关于复摆则已有较为成熟的研究。

### Ball on Ferrite Rod （铁氧体棒上的球）

> A ferrite rod is placed at the bottom end of a vertical tube. Apply an ac voltage, of a frequency of the same order as the natural frequency of the rod, to a fine wire coil wrapped around its lower end. When a ball is placed on top of the rod, it will start to bounce. Explain and investigate this phenomenon.（铁氧体棒放置在垂直管的底端。将频率与铁氧体棒固有频率同阶的交流电压加到包裹在棒下端的细线圈上。当一个球放在铁氧体棒顶部时，球就会开始反弹。研究并解释这一现象。）

此题实际上是磁致伸缩和共振的现象结合。

实验中，由于普通函数发生器的功率过小，利用同相放大电路（运算放大器）对信号进行放大以驱动线圈。

电路简图：

<div style="text-align: center;">
<img src="../../../../assets/me/experience/research_experience/CUPT2023/Ball_on_Ferrite_Rod/circuit_diagram.jpeg" alt="同相放大电路图" style="width: 61.8%; height: auto;">
</div>

### Pancake Rotation （煎饼旋转）

> Place a few balls in a round container. If you move the container around a vertical axis, the balls can move co-directionally with the movement of the container, or they can move in the opposite direction. Explain this phenomenon and investigate how the direction of movement depends on re­le­vant parameters.（将几个球放入圆形容器中。如果围绕垂直轴移动容器，则球可以随容器的移动一起同向移动，也可以沿相反方向移动。解释这种现象，并研究运动方向取决于哪些相关参数。）

与大多数队伍使用现成的振动台不同，我根据绕垂直轴旋转，设计并制作了一个转动平台，利用可调电机，实现了完全可控的转速、转动半径、方向。

实验装置：

<div style="text-align: center;">
<img src="../../../../assets/me/experience/research_experience/CUPT2023/Pancake_Rotation/experimental_apparatus.jpeg" alt="煎饼旋转实验装置" style="width: 61.8%; height: auto;">
</div>

## 2022 年 5 月 - 2023 年 5 月：水在磁场作用下性质的研究

> SRTP（Student Research Training Program，大学生科研训练计划）项目，校级。

> 衍生自 IYPT 2022 题目：Strange Motion（奇怪的运动）。

在抗磁性研究中，除利用光杠杆原理可视化磁场作用外，还创新性地改造金属热膨胀实验装置（实际为迈克耳孙干涉仪），利用水本身对激光的反射替代了原有的镜面反射，定量分析了水面由于抗磁性而产生的形变。

## 2021 年 12 月 - 2022 年 6 月：CUPT 2022

### Unsinkable Disk（永不沉没的圆盘）

> A metal disk with a hole at its centre sinks in a container filled with water. When a vertical water jet hits the centre of the disc, it may float on the water surface. Explain this phenomenon and investigate the relevant parameters.（将一个中心有孔的金属圆盘沉入装满水的容器中。当一个垂直的水流击中圆盘中心时，它可能会漂浮在水面上。解释这一现象并研究相关参数。）

在本研究的实验设计中，创新性的通过将圆盘微调至水面下方与将圆盘完全浮于水面上两种状态对比，分析排除了浮力的影响，利于定量分析由水流产生的作用。

### Three-Sided Dice （圆柱形骰子）

> To land a coin on its side is often associated with the idea of a rare occurrence. What should be the physical and geometrical characteristics of a cylindrical dice so that it has the same probability to land on its side and one of its faces?（一枚硬币落地时侧面站立的情况通常是很罕见的。为了使一个圆柱形骰子落下时能有相同的概率立在它的侧面和上下表面其中之一，它应该具有怎样的物理和几何特征？）

本题，物理结构较为简单，我设计了圆柱形骰子模型，利用 pybullet 库进行模拟，通过蒙特卡洛方法统计落地时侧面和上下表面的概率。

项目在完成后，上传至了 GitHub，地址为：<https://github.com/abwuge/IYPT-2022-using-cppandpython>。由于当时对 Python 的执行效率存在偏见，故使用 C++编写主逻辑，用 Python 编写模拟脚本。

项目使用 Visual Studio 编译。

### Strange Motion （奇怪的运动）

> Sprinkle small floating particles on the surface of water in a bowl. Bring a strong magnet above and near to the water surface. Explain any observed motion of the particles.（在碗中的水面上撒上漂浮的小颗粒。在水面上方和附近放一块强力磁铁。解释观察到的粒子运动。）

在本题的研究中，利用光杠杆原理，创新性地将磁铁对水面微弱的磁场作用可视化，定量分析了水面上漂浮物体的运动。

<div style="text-align: center;">
<img src="../../../../assets/me/experience/research_experience/CUPT2022/Strange_Motion/experiment.jpeg" alt="磁场可视化实验" style="width: 61.8%; height: auto;">
<p>作图 熙</p>
</div>

上图大致展示了实验装置。使用激光笔（水缸外）从水面下方照射作用点（磁铁下方），经反射到达墙面，测量反射光点的偏移量，从而定量分析磁铁对水面的作用。

### Invisibility （隐形）

> Lenticular lenses can be used to distort light and make objects disappear. Investigate how changing the properties of the lens and the geometry of the object affect the extent to which the object can be detected.（光栅透镜/双凸透镜可以用来扭曲光线并使物体消失，研究改变透镜的属性和物体的几何形状会如何影响物体被检测到的范围。）

最初，我使用凸透镜组进行实验。而后因查阅资料更正翻译，改用光栅进行实验。

下分别简介使用双凸透镜组和光栅透镜进行的实验。

#### 双凸透镜

<div style="text-align: center;">
<img src="../../../../assets/me/experience/research_experience/CUPT2022/Invisibility/convex_lens_group.jpeg" alt="双凸透镜组实验" style="width: 61.8%; height: auto;">

<p>
图源哔哩哔哩 UP 主<a href="https://space.bilibili.com/630874464">冷科普</a>视频：<a href="https://www.bilibili.com/video/BV1Kq4y1r7AH">不可思议的“隐形透镜”，把手指放在镜片后，有趣的现象发生了</a>
</p>

</div>

图中青色区域即为隐形区域。

凸透镜组通过折射光线，使得最后光线沿途中白色路径传播，直接将入射最后一个透镜的光线折射到最前一个透镜上出射，其中青色区域并不在光线传播路径上，出现隐形效果。

实验中，我创新性采用暗室、长曝光、激光笔、水雾结合的方式，可视化光线传播路径，能定量分析隐形区域。

但：

-   题目中暗示“物体的几何形状”会影响隐形效果，而凸透镜组的隐形效果仅取决于透镜、透镜组属性。

对此异常情况深入研究，我认为题目中实指光栅透镜，遂进行如下实验。

#### 光栅透镜

将光线正交分解，可通过图 1 分析光线传播情况。

<div style="text-align: center;">
<div style="display: flex; justify-content: center; align-items: flex-end; width: 61.8%; margin: 0 auto; gap: 2%;">
<div style="width: 49%;">
<img src="../../../../assets/me/experience/research_experience/CUPT2022/Invisibility/cross_section_perpendicular_to_column_divergent_light.jpeg" alt="垂直于线方向，光线呈发散状态的截面图" style="width: 100%; height: auto;">
<p>(a) 垂直于线方向</p>
</div>
<div style="width: 49%;">
<img src="../../../../assets/me/experience/research_experience/CUPT2022/Invisibility/cross_section_parallel_to_column_divergent_light.jpeg" alt="平行于线方向，光线呈发散状态的截面图" style="width: 100%; height: auto;">
<p>(b) 平行于线方向</p>
</div>
</div>
<p>图1 截面示意图</p>
</div>

(a)中，每线（光栅的每一个柱状透镜）都可以对光线进行折射。

(b)中，同一截面上，厚度均匀，光线不改变方向。

重点分析垂直截面：

<div style="text-align: center;">
<div style="display: flex; justify-content: center; align-items: flex-end; width: 61.8%; margin: 0 auto; gap: 2%;">
<div style="width: 49%;">
<img src="../../../../assets/me/experience/research_experience/CUPT2022/Invisibility/cross_section_perpendicular_to_column_parallel_light_wide.jpeg" alt="垂直于线方向，光线呈发散状态，光源宽的截面图" style="width: 100%; height: auto;">
<p>(a) 宽物体</p>
</div>
<div style="width: 49%;">
<img src="../../../../assets/me/experience/research_experience/CUPT2022/Invisibility/cross_section_perpendicular_to_column_parallel_light_narrow.jpeg" alt="平行于线方向，光线呈平行状态，光源窄的截面图" style="width: 100%; height: auto;">
<p>(b) 窄物体</p>
</div>
</div>
<p>图2 宽、窄物体对比图</p>
</div>

对于窄物体，最终入射人眼的光线更少，从而实现隐形。

此外，[Wikipedia](https://en.wikipedia.org/wiki/Lenticular_lens) 中有关于[光栅透镜](https://en.wikipedia.org/wiki/Lenticular_lens)的介绍，其中有部分相关信息。

[返回](../experience.md)
