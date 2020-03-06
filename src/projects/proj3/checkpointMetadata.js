import * as pathSmoothingSearchingImg from "./searching_with_path_smoothing.png";
import * as dumbSearchImg from "./unintelligent_searching.png";
import * as graphWithEdgesImg from "./graph_with_edges.png";

const Metadata = {
  title: "Checkpoint #3 - Motion Planning",
  group: ["Rafi Barash (baras015@umn.edu)"],
  description: `
      This is my check in for project #3. In this simulation, you can see a triangle
      agent in the bottom left of the world moving towards the goal in the top left
      while avoiding the circular obstacle in the middle of the world. A probabilistic
      roadmap with 10 samples was constructed for path planning from the agent's initial
      position towards the goal, and path smoothing was utilized to push the agent towards
      the goal when no obstacles were in the way. The PRM was used to guide the agent's direction,
      and in each update call a force is applied in that direction. Because of this, when the 
      agent spots the goal, rather than immediately changing direction and heading 
      straight towards the goal, the agent moves towards the goal in a more curved fashion. Also,
      there seems to be a small bug with how my PRM implementation creates edges that avoid the circle 
      in the middle.
      `,
  code:
    "https://github.com/rafibarash/csci5611/tree/master/projects/proj3/SearchCheckpoint",
  videoLink: "https://www.youtube.com/embed/6bo3tcm9erQ",
  featureList: [
    "0:03 - Sampled points and edges for PRM visualized, agent moving towards a random point it shares an edge with",
    "0:06 - Path Smoothing towards goal",
    "0:12 - Agent reaches goal",
    "0:17 - Agent randomly choses random point, can't smooth towards goal yet",
    "0:22 - Agent randomly choses bad point away from goal",
    "0:30 - Agent randomly chooses 3rd bad point",
    "0:41 - Agent finally able to smooth path towards goal",
    "0:50 - Sorry for how slow this is, I store lots of snapshots of the agent's past positions and I have to render past positions as circles because when I tried rendering the path with points the edge lines kept blocking it.",
  ],
  imageList: [
    {
      url: pathSmoothingSearchingImg,
      alt: "PRM path planning with path smoothing",
    },
    {
      url: dumbSearchImg,
      alt: "Lack of intelligent searching in PRM path planning",
    },
    {
      url: graphWithEdgesImg,
      alt: "Edges in PRM graph visualized",
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
      title: "Blogpost on how to find equation of a line from two points",
      url:
        "https://bobobobo.wordpress.com/2008/01/07/solving-linear-equations-ax-by-c-0/",
      description: `
      I followed this blogpost to solve the linear equation "Ax + By + C = 0" from two points, 
      for use inside my "Obstacle.isCollision(vec1, vec2)" function.
      `,
    },
    {
      title: "GeeksforGeeks - Check if a line touches or intersects a circle",
      url:
        "https://www.geeksforgeeks.org/check-line-touches-intersects-circle/",
      description: `
      I followed this page to implement my check to see if a circle intersects with a line, 
      for use inside my "Obstacle.isCollision(vec1, vec2)" function... Think my implementation
      has a couple small bugs though.
      `,
    },
  ],
};

export default Metadata;
