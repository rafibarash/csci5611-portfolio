import * as fluidImg from "./fluid.png";

const Metadata = {
  title: "Project #2 - Fluid Simulation",
  group: ["Tien Dinh (dinh0080@umn.edu)", "Rafi Barash (baras015@umn.edu)"],
  description: `
      This is our 2D Eulerian fluid simulation for project #2. We were motivated by
      fluid dynamics and how incompressible fluid flows in a medium. Therefore, we decided
      to implement this simulation. Our simulation relies heavily on Stam's implementation
      in his GDC paper Real-Time Fluid Dynamics for Games.
      `,
  code:
    "https://github.com/rafibarash/csci5611/tree/master/projects/proj2/FluidSimulationMain",
  videos: [
    {
      title: "Fluid Simulation",
      videoLink: "https://www.youtube.com/embed/hquSqXGp8yg",
      featureList: [
        "2D Eulerian Fluid Simulation",
        "Mouse-based user interaction",
        "The simulation can be paused with the 'v' button",
        "200x200 grid benchmarking at 30+ FPS",
      ],
      imageList: [{ url: fluidImg, alt: "Fluid dissipating" }],
    },
  ],
  tools: [{ title: "Processing", url: "https://processing.org/" }],
  otherResources: [
    {
      title: "Real-Time Fluid Dynamics for Games",
      url:
        "https://pdfs.semanticscholar.org/847f/819a4ea14bd789aca8bc88e85e906cfc657c.pdf",
      description: `
      Our implementation relies heavily on Stam's implementation, the only
      different is his implementation is in C++, and our is in Processing.
      `,
    },
    {
      title: "Fluid Simulation for Dummies",
      url: "https://www.mikeash.com/pyblog/fluid-simulation-for-dummies.html",
      description: `
      We also look at Ash's implementation of Stam's paper, but in 3D.
      `,
    },
  ],
};

export default Metadata;
