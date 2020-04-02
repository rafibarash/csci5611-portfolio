import * as searchComparison1 from "./astar_vs_ucs_1.png";
import * as searchComparison2 from "./astar_vs_ucs_2.png";
import * as searchComparison3 from "./astar_vs_ucs_3.png";
import * as scenicDrive from "./scenic_drive.png";
import * as initCarScene from "./init_car_scene.png";
import * as carReachedGoal from "./car_reached_goal.png";

const Metadata = {
  title: "Project #3 - Multi-Agent Motion Planning",
  group: ["Rafi Barash (baras015@umn.edu)"],
  description: `
  These are my motion planning simulations for project #3.

  In both simulations, the goal position, all agent initial positions, and all obstacles are 
  created through user interactions at runtime. I then use a probabilistic roadmap (PRM) with 
  anywhere from 300 to 3000 sampled nodes to create a graph connecting all agents to the goal 
  position while avoiding all obstacles. Once this graph is constructed, I run A* search along 
  the graph for all agents to find their optimal path towards the goal (performance gain is 
  documented in the images under the next video). 
  
  The simulation runs after this global navigation is processed, typically within a second. Throughout the 
  simulations, a guiding "goal force" is applied to get each agent to the goal position, along with obstacle 
  forces to repel the agent away from obstacles and walls. The goal force pushes the agent towards the
  furthest possible node in its pre-processed path by using path smoothing. Also, in the first video, 
  you can see the agents repelling from each other from my implementation of Boids (only used the separation aspect).
      `,
  code: "https://github.com/rafibarash/csci5611/tree/master/projects/proj3",
  videos: [
    {
      title: "Multi-agent Motion Planning",
      videoLink: "https://www.youtube.com/embed/FE0Jf3LilGQ",
      featureList: [
        "0:06 - Obstacles, goal position, agents created at runtime via user interaction",
        "0:10 - Agents pushed towards goal",
        "0:12 - Boids force pushes agents away from each other",
        "0:13 - Some agents feel obstacle force after being pushed near wall",
        "0:14 - Agents turn and feel both wall and obstacle forces",
        "0:14 - Lots of agent collisions occur from narrow turning",
        "0:32 - All agents have reached goal",
        "0:36 - Setting up a new map",
        "0:43 - Agents start moving in new map",
        "0:55 - Able to see a little path smoothing in big agent chain",
        "1:02 - All agents reach goal in new map",
      ],
      imageList: [
        {
          url: searchComparison1,
          alt:
            "A* search took 2.4ms on avg vs 2.6ms for UCS, a 7.7% improvement.",
        },
        {
          url: searchComparison2,
          alt:
            "A* search took 6.1ms on avg vs 6.36ms for UCS, a 4.25% improvement.",
        },
        {
          url: searchComparison3,
          alt:
            "A* search took 2.7ms on avg vs 2.9ms for UCS, a 6.9% improvement.",
        },
      ],
    },
    {
      title: "Single-agent Motion Planning (with prettier rendering)",
      videoLink: "https://www.youtube.com/embed/sIKdo1TcdrY",
      featureList: [
        "0:06 - Obstacles rendered as trees",
        "0:09 - Goal rendered as temple",
        "0:10 - Agent rendered as car",
        "0:12 - Camera placed behind car, camera direction is just the normalized car velocity",
        "0:19 - Car parks neatly by temple after arriving",
      ],
      imageList: [
        {
          url: initCarScene,
          alt: "Drawing out a car scene",
        },
        {
          url: scenicDrive,
          alt: "A scenic drive",
        },
        {
          url: carReachedGoal,
          alt: "Car parks outside goal",
        },
      ],
    },
  ],
  tools: [{ title: "Processing", url: "https://processing.org/" }],
  otherResources: [
    {
      title: "Motion Planning Lecture Slides (from class)",
      url: "https://canvas.umn.edu/courses/158159/modules/items/3629384",
      description: `
      I referenced these lecture slides for an initial understanding of how a PRM works.
      `,
    },
    {
      title: "PRM-Sampling 2006 Paper",
      url: "https://canvas.umn.edu/courses/158159/modules/items/3280791",
      description: `
      I skimmed through this paper on PRM Sampling to get a better understanding of how
      to implement a PRM.
      `,
    },
    {
      title: "Youtube Video on Constructing a PRM",
      url: "https://www.youtube.com/watch?v=rKe6HO8LDu0",
      description: `
      This youtube video explained the psuedocode for constructing a probabilistic roadmap,
      and my implementation is largely based off this psuedocode.
      `,
    },
    {
      title: "Nature of Code Chapter 6 - Autonomous Agents",
      url: "https://natureofcode.com/book/chapter-6-autonomous-agents/",
      description: `
      I skimmed the beginning of this chapter to get a better idea of how to write my "Agent"
      class, and how to update my force in the direction of a target vector.
      `,
    },
    {
      title: "Wikipedia on Dikjstra's Algorithm",
      url: "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",
      description: `
      I referenced this page when having issues with my Uniform Cost Search algorithm.
      `,
    },
    {
      title: "Processing - Forum on Drawing an Arrow",
      url: "https://processing.org/discourse/beta/num_1219607845.html",
      description: `
      I utilized the code at the end of this page to have the arrow head at the end of each line to an agent's next node.
      `,
    },
    {
      title: "Boids summary (from original author)",
      url: "https://www.red3d.com/cwr/boids/",
      description: `
      I followed this explanation to better understand boids for my initial implementation.
      `,
    },
    {
      title: "Processing - Boids Psuedocode",
      url: "https://www.processing.org/examples/flocking.html",
      description: `
      My boids implementation was spazzing out so I tried fixing it by adding some math found in this resource... honestly
      just made my code worse. I refactored this stuff out but feel like it's worth mentioning.
      `,
    },
    {
      title: "Canvas - Circle Line Intersect Code",
      url: "https://canvas.umn.edu/courses/158159/modules/items/3687187",
      description: `
      I utilized this code to check for collisions while building the PRM graph... didn't really understand the math
      `,
    },
    {
      title: "Office Hours",
      url: "#",
      description: `
      Thank you guys for your help with both applying forces to guide an agent and with my camera!!!
      `,
    },
  ],
};

export default Metadata;
