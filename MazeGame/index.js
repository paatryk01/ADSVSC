// const { 
//     Engine,
//     Render,
//     Runner,
//     World,
//     Bodies,
//     MouseConstraint,
//     Mouse
// } = Matter;

// const width = 800;
// const height = 600;

// const engine = Engine.create();
// const { world } = engine;
// const render = Render.create({
//     element: document.body,
//     engine: engine,
//     options: {
//         wireframes: false,
//         width: width,
//         height: height
//     }
// });
// Render.run(render);
// Runner.run(Runner.create(), engine);

// World.add(world, MouseConstraint.create(engine, {
//     mouse: Mouse.create(render.canvas)
// }));

// // Walls 

// const walls = [
//     Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
//     Bodies.rectangle(400, 600, 800, 40, { isStatic: true}),
//     Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
//     Bodies.rectangle(800, 300, 40, 600, { isStatic: true })
// ];

// World.add(world, walls);

// // Random Shapes

// function getRandomShape() {
//     const randX = Math.floor(Math.random() * width);
//     const randY = Math.floor(Math.random() * height);
//     const randH = Math.floor(Math.random() * 100);
//     const randW = Math.floor(Math.random() * 100);
// }

// for(let i = 0; i < 40; i++){
//     getRandomShape();
//     World.add(world, Bodies.rectangle(randX, randY, randH, randW));
// }


// MAZE

const {
    Engine,
    Render,
    Runner,
    World,
    Bodies
} = Matter;

const width = 600;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: true,
        width: width,
        height: height
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls 

const walls = [
    Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
    Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
    Bodies.rectangle(width, height / 2, 40, height, { isStatic: true })
];

World.add(world, walls);
