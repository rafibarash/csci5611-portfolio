import * as treeImgURL from "./proj_tree_burning.png";
import * as smokeImgURL from "./proj_tree_smoking.png";

const Metadata = {
  title: "Project #1 - Particle System",
  group: ["Rafi Barash (baras015@umn.edu)"],
  description: `
      This is my particle simulation for project #1. In this simulation, you can see a tree burning in the
      bottom right, as well as a mouse controlled house that spits out water. The fire particles continuously check for
      collisions with the water particles, and turn into smoke upon collision. The water particles are rendered as
      vertices to speed up the animation, while the fire particles use a textured image. As you can see at the top 
      of the video, the second performance benchmark of 5,000 particles simulated and rendered at over 30 FPS was hit. I
      also implemented a 3D user controlled camera with the ability for translation and rotation in x, y, and z.
      `,
  code:
    "https://github.com/rafibarash/csci5611-portfolio/tree/master/src/projects/proj1/PSystemEngine",
  videoLink: "",
  featureList: [
    "0:00 - Fire particles coming out of tree",
    "0:00 - Fire particles rendered with texture",
    "0:03 - Water particles coming out of cursor",
    "0:05 - Performance Benchmark #2 hit: 5,000 particles simulated and rendered at over 30 FPS",
    "0:08 - Water particles colliding with fire and causing fire particles to turn into smoke",
    "0:15 - 3D user controlled camera",
  ],
  imageList: [
    { url: treeImgURL, alt: "Tree burning" },
    { url: smokeImgURL, alt: "Water causing tree fire to smoke" },
  ],
  tools: [{ title: "Processing", url: "https://processing.org/" }],
  otherResources: [
    {
      title: "Particle System Lecture Slides",
      url: "https://canvas.umn.edu/courses/158159/modules/items/3546021",
      description: `I first understood the basics of a particle system off these lecture slides,
       and based my initial particle system off this.`,
    },
    {
      title: "Nature of Code - Particle Systems Tutorial",
      url: "https://natureofcode.com/book/chapter-4-particle-systems/",
      description: `I used many parts of this tutorial to better understand how a particle system works, and improve my particle system code. 
      In particular, I used this tutorial to create abstract Particle and ParticleSystem classes, that serve as the basis for my Water and Fire classes.
      This tutorial was also helpful in understanding how to use Gaussian Distribution to make a Fire look more realistic.`,
    },
  ],
};

export default Metadata;
