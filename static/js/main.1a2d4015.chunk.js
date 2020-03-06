(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{34:function(e,t,i){e.exports=i.p+"static/media/checkpoint_01_bouncing_ball.c63dc387.png"},35:function(e,t,i){e.exports=i.p+"static/media/proj_tree_smoking.edb0d877.png"},36:function(e,t,i){e.exports=i.p+"static/media/proj_tree_smoking_distant.a577a2a0.png"},37:function(e,t,i){e.exports=i.p+"static/media/proj_water_evaporating_fire1.fef8e242.png"},38:function(e,t,i){e.exports=i.p+"static/media/proj_water_evaporating_fire2.f86347b5.png"},39:function(e,t,i){e.exports=i.p+"static/media/foldingCloth.6b9834e4.png"},40:function(e,t,i){e.exports=i.p+"static/media/stableCloth.fb918feb.png"},41:function(e,t,i){e.exports=i.p+"static/media/cloth_in_free_fall.a4a4d12c.png"},42:function(e,t,i){e.exports=i.p+"static/media/cloth_post_sphere_collision.98de0868.png"},43:function(e,t,i){e.exports=i.p+"static/media/fluid.fff26989.png"},44:function(e,t,i){e.exports=i.p+"static/media/searching_with_path_smoothing.e7429d62.png"},45:function(e,t,i){e.exports=i.p+"static/media/unintelligent_searching.bf17bcb5.png"},54:function(e,t,i){e.exports=i(62)},62:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),o=i(12),r=i.n(o),s=i(92),l=i(91),c=i(89),u=i(93),h=i(63),d=i(47),m=i(33),p=i(94),g=i(88),f=i(48),b=function(e){var t=e.children,i=e.value,a=e.index,o=Object(f.a)(e,["children","value","index"]);return n.a.createElement(h.a,Object.assign({component:"div",role:"tabpanel",hidden:i!==a,id:"vertical-tabpanel-".concat(a),"aria-labelledby":"vertical-tab-".concat(a)},o),i===a&&n.a.createElement(u.a,{p:3,pt:1},t))},w=i(85),y=i(96),v=i(86),k=i(87),E=function(e){var t=e.url,i=e.title;return n.a.createElement("iframe",{width:"560",height:"315",src:t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:i})},C=function(e){var t=e.children,i=S();return n.a.createElement(u.a,{className:i.section},t)},x=function(e){var t=e.text;return n.a.createElement(h.a,{variant:"h6"},t)},P=function(e){var t=e.list,i=e.renderItem;return n.a.createElement(n.a.Fragment,null,t.map((function(e){return i(e)})))},S=Object(m.a)((function(e){return{root:{padding:"2rem",marginTop:0,maxWidth:"1000px",marginLeft:"1rem"},section:{marginTop:"1rem"},img:{maxHeight:"300px",borderRadius:"8px"}}})),j=function(e){var t=e.project,i=S(),a=t.title,o=t.group,r=t.description,s=t.code,l=t.videoLink,c=t.featureList,u=t.imageList,d=t.tools,m=t.otherResources;return n.a.createElement(w.a,{className:i.root},n.a.createElement(h.a,{variant:"h4",component:"h3",gutterBottom:!0},a),n.a.createElement(C,null,n.a.createElement(x,{text:"Group"}),n.a.createElement(P,{list:o,renderItem:function(e){return n.a.createElement(y.a,{key:e,disablePadding:!0},e)}})),n.a.createElement(C,null,n.a.createElement(x,{text:"Description"}),n.a.createElement(h.a,null,r)),n.a.createElement(C,null,n.a.createElement(x,{text:"Code"}),n.a.createElement(v.a,{href:s,target:"_blank",rel:"noreferrer"},s)),n.a.createElement(C,null,n.a.createElement(x,{text:"Video"}),n.a.createElement(E,{url:l,title:a})),n.a.createElement(C,null,n.a.createElement(x,{text:"Features"}),n.a.createElement(P,{list:c,renderItem:function(e){return n.a.createElement(y.a,{key:e,disablePadding:!0},e)}})),n.a.createElement(C,null,n.a.createElement(x,{text:"Images"}),n.a.createElement(k.a,{container:!0,style:{marginTop:"0.5rem"}},n.a.createElement(P,{list:u,renderItem:function(e){var t=e.url,a=e.alt;return n.a.createElement(k.a,{key:t,item:!0,sm:6},n.a.createElement("img",{src:t,alt:a,className:i.img}),n.a.createElement(h.a,{variant:"subtitle2",style:{marginBottom:"1.5rem"}},a))}}))),n.a.createElement(C,null,n.a.createElement(x,{text:"Tools and Libraries"}),n.a.createElement(P,{list:d,renderItem:function(e){var t=e.title,i=e.url;return n.a.createElement(v.a,{key:t,href:i,target:"_blank",rel:"noreferrer"},t)}})),m&&n.a.createElement(C,null,n.a.createElement(x,{text:"Additional Resources"}),n.a.createElement(P,{list:m,renderItem:function(e){var t=e.title,i=e.url,a=e.description;return n.a.createElement(y.a,{key:t},n.a.createElement(v.a,{href:i,target:"_blank",rel:"noreferrer"},t),n.a.createElement(h.a,null,a))}})))},R={title:"Checkpoint #1 - 3D Bouncing Ball",group:["Rafi Barash (baras015@umn.edu)"],description:"This is the checkpoint for project #1. Very rough simulation of a ball bouncing around in 3D. \n  The ball's movements are computed using Eulerian Numerical Integration.\n  Whenever the mouse hits the ball with some velocity, the ball will move according to the direction and magnitude of the hit.",code:"https://github.com/rafibarash/csci5611/tree/master/projects/proj1/BouncingBall_3D",videoLink:"https://www.youtube.com/embed/FP6W6uRTXOc",featureList:["0:06 - Ball changes direction off wall collision","0:12 - Ball changes direction from mouse hit"],imageList:[{url:i(34),alt:"Bouncing Ball"}],tools:[{title:"Processing",url:"https://processing.org/"}],otherResources:null},T=i(35),L=i(36),_=i(37),I={title:"Project #1 - Particle System",group:["Rafi Barash (baras015@umn.edu)"],description:"\n      This is my particle simulation for project #1. In this simulation, you can see a tree burning in the\n      bottom right, as well as a continously controlled hose (via the mouse) that spits out water. The fire particles continuously check for\n      collisions with the water particles, and evaporate upon collision. The water particles are rendered as\n      vertices to speed up the animation, while the fire particles are translucent and use a textured image. As you can see at the top \n      of the video, the second performance benchmark of 5,000 particles simulated and rendered at over 30 FPS was hit. I\n      also implemented a 3D user controlled camera with the ability for translation in x, y, and z. I worked on adding rotation, but \n      struggle with rotating around the center of the animation rather than the left edge of the screen. Also, the fire particles\n      were only implemented in 2D, as I was unable to figure out how to add texture to a 3D sphere.\n      ",code:"https://github.com/rafibarash/csci5611/tree/master/projects/proj1/PSystemEngine",videoLink:"https://www.youtube.com/embed/KCLLm187Hok",featureList:["0:00 - Fire particles coming out of tree","0:00 - Fire particles rendered translucent and with texture","0:00 - Water particles continously coming out of cursor","0:06 - Water low to ground, low bounce","0:08 - Water high to ground, higher bounce","0:15 - Water particles colliding with fire and causing fire particles to evaporate","0:32 - Attempt to show my awful 3D user controlled camera, really struggled with that rotation","THROUGHOUT - Performance Benchmark #2 hit: 5,000 particles simulated and rendered at over 30 FPS"],imageList:[{url:L,alt:"Distant view of tree smoking"},{url:T,alt:"Close up view of tree smoking from fire"},{url:i(38),alt:"Water partially evaporating fire from tree"},{url:_,alt:"Water fully evaporating fire from tree"}],tools:[{title:"Processing",url:"https://processing.org/"}],otherResources:[{title:"Particle System Lecture Slides",url:"https://canvas.umn.edu/courses/158159/modules/items/3546021",description:"I first understood the basics of a particle system off these lecture slides,\n       and based my initial particle system off this."},{title:"Nature of Code - Particle Systems Tutorial",url:"https://natureofcode.com/book/chapter-4-particle-systems/",description:"I used many parts of this tutorial to better understand how a particle system works, and improve my particle system code. \n      In particular, I used this tutorial to create abstract Particle and ParticleSystem classes, that serve as the basis for my Water and Fire classes.\n      This tutorial was also helpful in understanding how to use Gaussian Distribution to make a Fire look more realistic."}]},W={title:"Checkpoint #2 - Cloth Simulation",group:["Tien Dinh (dinh0080@umn.edu)","Rafi Barash (baras015@umn.edu)"],description:"\n      This is our check in for project #2. In this simulation, you can see a cloth\n      with vertical and horizontal threads anchored at the top left and top right \n      moving around freely after starting from an initial grid position. The \n      only external force on the cloth is gravity. Over time, the cloth stabilizes\n      due to dampening.\n      ",code:"https://github.com/rafibarash/csci5611/tree/master/projects/proj2/ClothThreadCheckpoint",videoLink:"https://www.youtube.com/embed/AqcS69Nigo0",featureList:["0:04 - Gravity causing cloth to deviate from starting position","0:12 - Cloth stabilizes due to dampening effect"],imageList:[{url:i(39),alt:"Folded cloth, picture taken at beginning of simulation"},{url:i(40),alt:"More stable cloth, picture taken later in simulation from result of dampening"}],tools:[{title:"Processing",url:"https://processing.org/"}],otherResources:[{title:"Rotation (Spring) Lecture Slides (from class)",url:"https://canvas.umn.edu/courses/158159/modules/items/3572277",description:"\n      We used these lecture slides to first understand the physics behind how a \n      spring works.\n      "},{title:"Cloth Simulation Reference Slides",url:"https://www.cs.umd.edu/class/fall2019/cmsc828X/LEC/Wei_Cloth.pdf",description:"\n      We used these lecture slides to better understand the physics behind springs, and \n      to create our first attempt at a cloth simulation.\n      "},{title:"Sample Camera Code (from class)",url:"https://canvas.umn.edu/courses/158159/modules/items/3578341",description:"\n      We used the sample camera given to us on canvas for our camera library... Realizing now that\n      we did not show our camera functionality in the check-in video... oops\n      "},{title:"Triple Spring Code (from class)",url:"https://canvas.umn.edu/courses/158159/modules/items/3577748",description:"\n      We used the triple spring code given to us on canvas to better understand how we can apply spring\n      physics in Processing.\n      "},{title:"Nature of Code Chapter 5 - Physics Libraries",url:"https://natureofcode.com/book/chapter-5-physics-libraries/",description:"\n      We used this resource to imagine how we could create our cloth/spring\n      system in an object oriented fashion, loosely basing our Spring and Point classes\n      off how we imagined the Verlet Physics library would implement it's classes. This inspired\n      our final implementation of the cloth simulation checkpoint.\n      "}]},D={title:"Project #2 - Cloth Simulation",group:["Tien Dinh (dinh0080@umn.edu)","Rafi Barash (baras015@umn.edu)"],description:"\n      This is our cloth simulation for project #2. In this simulation you can see a cloth, through our \n      3D user controlled camera, free falling from its initial starting position, and having a 1-way collision with a sphere \n      before falling to the floor. The cloth is simulated 20x20 in 3D at 30 FPS. We are currently using \n      1st order Eulerian Integration to update the cloth state (regret not going in to office hours to work through\n      implementing RK4). As you can see, the cloth is textured, although for some reason when the cloth stretches, \n      the texture does not stretch with it. There is also no friction in this simulation, so after the cloth falls\n      it keeps its momentum and moves around the world, colliding with the floor, walls, and sphere in weird ways. \n      You can checkout our second simulation for this project, a fluid simulation, by clicking on the respective left tab.\n      ",code:"https://github.com/rafibarash/csci5611/tree/master/projects/proj2/ClothSphereInteraction",videoLink:"https://www.youtube.com/embed/Vsi1NUXqe5Y",featureList:["0:03 - Realtime rendered cloth starting in initial position","0:04 - Gravity pushes down on cloth","0:05 - Cloth collides with sphere and spreads around it","0:10 - 3D Camera Functionality"],imageList:[{url:i(41),alt:"Cloth at the beginning of free fall"},{url:i(42),alt:"Cloth after colliding with sphere"}],tools:[{title:"Processing",url:"https://processing.org/"}],otherResources:[{title:"Rotation (Spring) Lecture Slides (from class)",url:"https://canvas.umn.edu/courses/158159/modules/items/3572277",description:"\n      We used these lecture slides to first understand the physics behind how a \n      spring works.\n      "},{title:"Cloth Simulation Reference Slides",url:"https://www.cs.umd.edu/class/fall2019/cmsc828X/LEC/Wei_Cloth.pdf",description:"\n      We used these lecture slides to better understand the physics behind springs, and \n      to create our first attempt at a cloth simulation.\n      "},{title:"Sample Camera Code (from class)",url:"https://canvas.umn.edu/courses/158159/modules/items/3578341",description:"\n      We used the sample camera given to us on canvas for our camera library... Realizing now that\n      we did not show our camera functionality in the check-in video... oops\n      "},{title:"Triple Spring Code (from class)",url:"https://canvas.umn.edu/courses/158159/modules/items/3577748",description:"\n      We used the triple spring code given to us on canvas to better understand how we can apply spring\n      physics in Processing.\n      "},{title:"Nature of Code Chapter 5 - Physics Libraries",url:"https://natureofcode.com/book/chapter-5-physics-libraries/",description:"\n      We used this resource to imagine how we could create our cloth/spring\n      system in an object oriented fashion, loosely basing our Spring and Point classes\n      off how we imagined the Verlet Physics library would implement it's classes. This inspired\n      our final implementation of the cloth simulation checkpoint.\n      "}]},B={title:"Project #2 - Fluid Simulation",group:["Tien Dinh (dinh0080@umn.edu)","Rafi Barash (baras015@umn.edu)"],description:"\n      This is our 2D Eulerian fluid simulation for project #2. We were motivated by\n      fluid dynamics and how incompressible fluid flows in a medium. Therefore, we decided\n      to implement this simulation. Our simulation relies heavily on Stam's implementation\n      in his GDC paper Real-Time Fluid Dynamics for Games. \n      ",code:"https://github.com/rafibarash/csci5611/tree/master/projects/proj2/FluidSimulationMain",videoLink:"https://www.youtube.com/embed/hquSqXGp8yg",featureList:["2D Eulerian Fluid Simulation","Mouse-based user interaction","The simulation can be paused with the 'v' button","200x200 grid benchmarking at 30+ FPS"],imageList:[{url:i(43),alt:"Fluid dissipating"}],tools:[{title:"Processing",url:"https://processing.org/"}],otherResources:[{title:"Real-Time Fluid Dynamics for Games",url:"https://pdfs.semanticscholar.org/847f/819a4ea14bd789aca8bc88e85e906cfc657c.pdf",description:"\n      Our implementation relies heavily on Stam's implementation, the only\n      different is his implementation is in C++, and our is in Processing.\n      "},{title:"Fluid Simulation for Dummies",url:"https://www.mikeash.com/pyblog/fluid-simulation-for-dummies.html",description:"\n      We also look at Ash's implementation of Stam's paper, but in 3D.\n      "}]},F=[{title:"Checkpoint #3 - Motion Planning",group:["Rafi Barash (baras015@umn.edu)"],description:"\n      This is my check in for project #3. In this simulation, you can see a triangle\n      agent in the bottom left of the world moving towards the goal in the top left\n      while avoiding the circular obstacle in the middle of the world. A probabilistic\n      roadmap with 10 samples was constructed for path planning from the agent's initial\n      position towards the goal, and path smoothing was utilized to push the agent towards\n      the goal when no obstacles were in the way. The PRM was used to guide the agent's direction,\n      and in each update call a force is applied in that direction. Because of this, when the \n      agent spots the goal, rather than immediately changing direction and heading \n      straight towards the goal, the agent moves towards the goal in a more curved fashion.\n      ",code:"https://github.com/rafibarash/csci5611/tree/master/projects/proj3/SearchCheckpoint",videoLink:"https://www.youtube.com/embed/JdsOns69bRk",featureList:["0:05 - Sampled points for PRM visualized, agent moving towards a random point it shares an edge with","0:09 - Path Smoothing towars goal","0:14 - Agent reaches goal","0:22 - Agent randomly chose point near top of world, able to path smooth straigh to goal","0:33 - Agent randomly chose bad point with no edges other than initial position, had to go back to initial position and try again","0:38 - Agent chooses better point that allows path smoothing towards goal"],imageList:[{url:i(44),alt:"PRM path planning with path smoothing"},{url:i(45),alt:"Lack of intelligent searching in PRM path planning"}],tools:[{title:"Processing",url:"https://processing.org/"}],otherResources:[{title:"Motion Planning Lecture Slides (from class)",url:"https://canvas.umn.edu/courses/158159/modules/items/3629384",description:"\n      I referenced these lecture slides for an initial understanding of how a PRM works.\n      "},{title:"PRM-Sampling 2006 Paper",url:"https://canvas.umn.edu/courses/158159/modules/items/3280791",description:"\n      I skimmed through this paper on PRM Sampling to get a better understanding of how\n      to implement a PRM.\n      "},{title:"Youtube Video on Constructing a PRM",url:"https://www.youtube.com/watch?v=rKe6HO8LDu0",description:"\n      This youtube video explained the psuedocode for constructing a probabilistic roadmap,\n      and my implementation is largely based off this psuedocode.\n      "},{title:"Nature of Code Chapter 6 - Autonomous Agents",url:"https://natureofcode.com/book/chapter-6-autonomous-agents/",description:'\n      I skimmed the beginning of this chapter to get a better idea of how to write my "Agent"\n      class, and how to update my force in the direction of a target vector.\n      '},{title:"Blogpost on how to find equation of a line from two points",url:"https://bobobobo.wordpress.com/2008/01/07/solving-linear-equations-ax-by-c-0/",description:'\n      I followed this blogpost to solve the linear equation "Ax + By + C = 0" from two points, \n      for use inside my "Obstacle.isCollision(vec1, vec2)" function.\n      '},{title:"GeeksforGeeks - Check if a line touches or intersects a circle",url:"https://www.geeksforgeeks.org/check-line-touches-intersects-circle/",description:'\n      I followed this page to implement my check to see if a circle intersects with a line, \n      for use inside my "Obstacle.isCollision(vec1, vec2)" function... Think my implementation\n      has a couple small bugs though.\n      '}]},D,B,W,I,R],O=Object(m.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper,display:"flex"},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}})),A=function(e){return{id:"project-tab-".concat(e),"aria-controls":"project-tabpanel-".concat(e)}},M=function(){var e=O(),t=Object(a.useState)(0),i=Object(d.a)(t,2),o=i[0],r=i[1];return n.a.createElement("div",{className:e.root},n.a.createElement(p.a,{orientation:"vertical",value:o,onChange:function(e,t){r(t)},"aria-label":"Project Tabs",indicatorColor:"primary",className:e.tabs},F.map((function(e,t){return n.a.createElement(g.a,Object.assign({label:e.title},A(t),{key:e.title}))}))),F.map((function(e,t){return n.a.createElement(b,{value:o,index:t,key:e.title},n.a.createElement(j,{project:e}))})))},G=function(){return n.a.createElement(c.a,{maxWidth:"lg"},n.a.createElement(u.a,{my:4,textAlign:"center"},n.a.createElement(h.a,{variant:"h3",component:"h1",gutterBottom:!0},"Rafi Barash's CSCI 5611 Portfolio")),n.a.createElement(M,null))},N=i(23),q=i(90),z=i(22),V=i(24),H=i(95),X=i(46),J=Object(H.a)(Object(X.a)({palette:{primary:{main:N.a[500]},secondary:{main:q.a[300]},error:{main:z.a.A400},success:{main:V.a[400]},background:{default:"#fff"}},overrides:{},typography:{}}));r.a.render(n.a.createElement(l.a,{theme:J},n.a.createElement(s.a,null),n.a.createElement(G,null)),document.querySelector("#root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.1a2d4015.chunk.js.map