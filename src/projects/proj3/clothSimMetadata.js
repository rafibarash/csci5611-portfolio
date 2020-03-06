import * as freeFallImg from "./cloth_in_free_fall.png";
import * as postCollisionImg from "./cloth_post_sphere_collision.png";

const Metadata = {
  title: "Project #2 - Cloth Simulation",
  group: ["Tien Dinh (dinh0080@umn.edu)", "Rafi Barash (baras015@umn.edu)"],
  description: `
      This is our cloth simulation for project #2. In this simulation you can see a cloth, through our 
      3D user controlled camera, free falling from its initial starting position, and having a 1-way collision with a sphere 
      before falling to the floor. The cloth is simulated 20x20 in 3D at 30 FPS. We are currently using 
      1st order Eulerian Integration to update the cloth state (regret not going in to office hours to work through
      implementing RK4). As you can see, the cloth is textured, although for some reason when the cloth stretches, 
      the texture does not stretch with it. There is also no friction in this simulation, so after the cloth falls
      it keeps its momentum and moves around the world, colliding with the floor, walls, and sphere in weird ways. 
      You can checkout our second simulation for this project, a fluid simulation, by clicking on the respective left tab.
      `,
  code:
    "https://github.com/rafibarash/csci5611/tree/master/projects/proj2/ClothSphereInteraction",
  videoLink: "https://www.youtube.com/embed/Vsi1NUXqe5Y",
  featureList: [
    // Will need to update the times in the video for these features, just putting them in for now
    "0:03 - Realtime rendered cloth starting in initial position",
    "0:04 - Gravity pushes down on cloth",
    "0:05 - Cloth collides with sphere and spreads around it",
    "0:10 - 3D Camera Functionality",
  ],
  imageList: [
    {
      url: freeFallImg,
      alt: "Cloth at the beginning of free fall",
    },
    {
      url: postCollisionImg,
      alt: "Cloth after colliding with sphere",
    },
  ],
  tools: [{ title: "Processing", url: "https://processing.org/" }],
  otherResources: [
    {
      title: "Rotation (Spring) Lecture Slides (from class)",
      url: "https://canvas.umn.edu/courses/158159/modules/items/3572277",
      description: `
      We used these lecture slides to first understand the physics behind how a 
      spring works.
      `,
    },
    {
      title: "Cloth Simulation Reference Slides",
      url: "https://www.cs.umd.edu/class/fall2019/cmsc828X/LEC/Wei_Cloth.pdf",
      description: `
      We used these lecture slides to better understand the physics behind springs, and 
      to create our first attempt at a cloth simulation.
      `,
    },
    {
      title: "Sample Camera Code (from class)",
      url: "https://canvas.umn.edu/courses/158159/modules/items/3578341",
      description: `
      We used the sample camera given to us on canvas for our camera library... Realizing now that
      we did not show our camera functionality in the check-in video... oops
      `,
    },
    {
      title: "Triple Spring Code (from class)",
      url: "https://canvas.umn.edu/courses/158159/modules/items/3577748",
      description: `
      We used the triple spring code given to us on canvas to better understand how we can apply spring
      physics in Processing.
      `,
    },
    {
      title: "Nature of Code Chapter 5 - Physics Libraries",
      url: "https://natureofcode.com/book/chapter-5-physics-libraries/",
      description: `
      We used this resource to imagine how we could create our cloth/spring
      system in an object oriented fashion, loosely basing our Spring and Point classes
      off how we imagined the Verlet Physics library would implement it's classes. This inspired
      our final implementation of the cloth simulation checkpoint.
      `,
    },
  ],
};

export default Metadata;
