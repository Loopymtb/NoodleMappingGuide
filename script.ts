import { Difficulty, ModelScene, Geometry, Environment, ENV} from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

const map = new Difficulty("ExpertPlusLawless.dat", "ExpertPlusStandard.dat");
const scene = new ModelScene(new Geometry()); // This creates a new envrionment using geometry


// What all of these functions do is take the material of an object in Blender and applies the stated properties to all objects with that material

// Use this one for an example...

scene.addPrimaryGroups(
  "Cube", // Material Name
  new Geometry("Cube", { // What geometry object type we want to use 
    _shader: "Standard", // The shader of the material ---> "Standard" "OpaqueLight" or "TransparentLight"
    _color: [0, 0, 0], // The color of the material --> [R,G,B]
    // Other properties can also go here
  }),
);

// Use this function for your lasers only!

scene.addPrimaryGroups(
    "Laser",
    new Environment(ENV.BTS.SOLID_LASER.ID, "Regex"),
    ENV.BTS.SOLID_LASER.SCALE,
    ENV.BTS.SOLID_LASER.ANCHOR,
  );

/*
To learn how to use other shapes in blender make sure to chack out nasafrasa's tutorial

Here we have whats telling the game when to spawn the model ----> ["ModelFileName", time, duration]

There are 2 different types of models, .static and or .animate, static should only be used if you have 1 environment and no animation and .animate
should be used if you either have an animation or multible models.

              scene.animate([                                           
.animate ->       ["ModelFileName", time, duration],     .static ---->    scene.static("ModelName");
              ]);                                                        

*/
scene.animate([
    ["Example", 0],
]);


map.save();
