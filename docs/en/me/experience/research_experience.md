---
title: Research Experience
hide:
  - navigation
---

[Back](../experience.md)

# Research Experience

## December 2024 - June 2025: Study on Nonlinear Reconstruction of Particle Velocity for AMS Time-of-Flight Detector

> Undergraduate thesis project.

## July 2024: Particle Propagation and Detection Simulation

> Shandong Institute for Advanced Technology Summer Camp.

## May 2024 - May 2025: Intelligent Warehouse Game Design Based on Minecraft Platform

> SRTP (Student Research Training Program) project, National level.

## May 2023 - May 2024: Cosmic Ray Direction Reconstruction Based on Cherenkov Telescope

> SRTP (Student Research Training Program) project, Provincial level.

## July 2022 - August 2023: CUPT 2023

> CUPT (Chinese Undergraduate Physics Tournament), using some problems from IYPT (International Young Physicists' Tournament).

### Euler's Pendulum

> Take a thick plate of non-magnetic material and fix a neodymium magnet on top of it. Suspend a magnetic rod (which can be assembled from cylindrical neodymium magnets) underneath it. Deflect the rod so that it touches the plate only with highest edge and release it. Study the motion of such a pendulum under various conditions.

### Ball on Ferrite Rod

> A ferrite rod is placed at the bottom end of a vertical tube. Apply an ac voltage, of a frequency of the same order as the natural frequency of the rod, to a fine wire coil wrapped around its lower end. When a ball is placed on top of the rod, it will start to bounce. Explain and investigate this phenomenon.

### Pancake Rotation

> Place a few balls in a round container. If you move the container around a vertical axis, the balls can move co-directionally with the movement of the container, or they can move in the opposite direction. Explain this phenomenon and investigate how the direction of movement depends on relevant parameters.

## May 2022 - May 2023: Research on Properties of Water Under Magnetic Field

> SRTP (Student Research Training Program) project, University level.

> Derived from IYPT 2022 problem: Strange Motion.

## December 2021 - June 2022: CUPT 2022

### Unsinkable Disk

> A metal disk with a hole at its centre sinks in a container filled with water. When a vertical water jet hits the centre of the disc, it may float on the water surface. Explain this phenomenon and investigate the relevant parameters.

In the experimental design of this research, I innovatively compared two states: fine-tuning the disk to just below the water surface versus having the disk completely floating on the water surface. This analysis excluded the influence of buoyancy, facilitating quantitative analysis of the effects produced by water flow.

### Three-Sided Dice

> To land a coin on its side is often associated with the idea of a rare occurrence. What should be the physical and geometrical characteristics of a cylindrical dice so that it has the same probability to land on its side and one of its faces?

For this problem, with a relatively simple physical structure, I designed a cylindrical dice model and used the pybullet library for simulation, employing Monte Carlo methods to statistically analyze the probability of landing on the side and the top/bottom surfaces.

After completion, the project was uploaded to GitHub at: <https://github.com/abwuge/IYPT-2022-using-cppandpython>. Due to my bias against Python's execution efficiency at the time, I used C++ to write the main logic and Python to write the simulation scripts.

The project was compiled using Visual Studio.

### Strange Motion

> Sprinkle small floating particles on the surface of water in a bowl. Bring a strong magnet above and near to the water surface. Explain any observed motion of the particles.

In the research of this problem, using the principle of optical lever, I innovatively visualized the weak magnetic field effect of the magnet on the water surface and quantitatively analyzed the motion of floating objects on the water surface.

<div style="text-align: center;">
<img src="../../../../assets/me/experience/research_experience/CUPT2022/Strange_Motion/experiment.jpeg" alt="Magnetic field visualization experiment" style="width: 61.8%; height: auto;">
<p>Drawing by Xi</p>
</div>

The above figure roughly shows the experimental setup. A laser pointer （激光笔） (outside the water tank（水缸）) is used to illuminate the point of action (below the magnet（磁铁）) from below the water surface. After reflection, it reaches the wall. By measuring the displacement of the reflected light spot, the effect of the magnet on the water surface can be quantitatively analyzed.

### Invisibility

> Lenticular lenses can be used to distort light and make objects disappear. Investigate how changing the properties of the lens and the geometry of the object affect the extent to which the object can be detected.

Initially, I used convex lens groups for experiments. Later, after consulting references to correct the translation, I switched to using lenticular lenses for experiments.

The experiments using convex lens groups and lenticular lenses are briefly introduced separately below.

#### Convex Lens Group

<div style="text-align: center;">
<img src="../../../../assets/me/experience/research_experience/CUPT2022/Invisibility/convex_lens_group.jpeg" alt="Convex Lens Group Experiment" style="width: 61.8%; height: auto;">

<p>
Image source: Bilibili UP master <a href="https://space.bilibili.com/630874464">冷科普</a> video: <a href="https://www.bilibili.com/video/BV1Kq4y1r7AH">不可思议的“隐形透镜”，把手指放在镜片后，有趣的现象发生了</a> (Incredible "Invisible Lens", Put Your Finger Behind the Lens, Interesting Phenomena Happen)
</p>

</div>

The cyan area in the figure is the invisible area.

The convex lens group refracts light rays, causing the final rays to propagate along the white path in the middle, directly refracting the light incident on the last lens to the first lens for exit. The cyan area is not on the light propagation path, creating an invisibility effect.

In the experiment, I innovatively combined a dark room, long exposure, laser pointer, and water mist to visualize the light propagation path, allowing quantitative analysis of the invisible area.

However:

- The problem suggests that "the geometry of the object" affects the invisibility effect, while the invisibility effect of the convex lens group only depends on the lens and lens group properties.

After in-depth research on this anomaly, I believe the problem actually refers to lenticular lenses, so I conducted the following experiments.

#### Lenticular Lenses

By orthogonally decomposing light rays, the light propagation situation can be analyzed through Figure 1.

<div style="text-align: center;">
<div style="display: flex; justify-content: center; align-items: flex-end; width: 61.8%; margin: 0 auto; gap: 2%;">
<div style="width: 49%;">
<img src="../../../../assets/me/experience/research_experience/CUPT2022/Invisibility/cross_section_perpendicular_to_column_divergent_light.jpeg" alt="Cross-section perpendicular to the line direction, with divergent light rays" style="width: 100%; height: auto;">
<p>(a) Perpendicular to line direction</p>
</div>
<div style="width: 49%;">
<img src="../../../../assets/me/experience/research_experience/CUPT2022/Invisibility/cross_section_parallel_to_column_divergent_light.jpeg" alt="Cross-section parallel to the line direction, with divergent light rays" style="width: 100%; height: auto;">
<p>(b) Parallel to line direction</p>
</div>
</div>
<p>Figure 1 Cross-section schematic diagram</p>
</div>

In (a), each line (each cylindrical lens of the lenticular lens) can refract light rays.

In (b), on the same cross-section, the thickness is uniform, and light rays do not change direction.

Focus on analyzing the perpendicular cross-section:

<div style="text-align: center;">
<div style="display: flex; justify-content: center; align-items: flex-end; width: 61.8%; margin: 0 auto; gap: 2%;">
<div style="width: 49%;">
<img src="../../../../assets/me/experience/research_experience/CUPT2022/Invisibility/cross_section_perpendicular_to_column_parallel_light_wide.jpeg" alt="Cross-section perpendicular to the line direction, with divergent light rays, wide light source" style="width: 100%; height: auto;">
<p>(a) Wide object</p>
</div>
<div style="width: 49%;">
<img src="../../../../assets/me/experience/research_experience/CUPT2022/Invisibility/cross_section_perpendicular_to_column_parallel_light_narrow.jpeg" alt="Cross-section parallel to the line direction, with parallel light rays, narrow light source" style="width: 100%; height: auto;">
<p>(b) Narrow object</p>
</div>
</div>
<p>Figure 2 Comparison of wide and narrow objects</p>
</div>

For narrow objects, fewer light rays ultimately enter the human eye, thus achieving invisibility.

In addition, [Wikipedia](https://en.wikipedia.org/wiki/Lenticular_lens) has an introduction to [lenticular lenses](https://en.wikipedia.org/wiki/Lenticular_lens), which contains some relevant information.

[Back](../experience.md)
