export interface Project {
    id: string,
    title: string,
    tags: string[],
    images: string[],
    description: string[],
}

const projects: Project[] = [
    {
        id: 'fur',
        title: 'Fur 2D',
        tags: ['Game', 'Platformer', 'Vector Art'],
        images: [
            'fur01.png',
            'fur02.png',
            'fur03.png',
            'fur04.png'
        ],
        description: [ 'This is my first attempt at making a game while I was in University. My focus was on creating a simple platformer built around the concept of the player being able to teleport. ',
            'The code is very simple using basic Unity concepts, such as instantiating objects to handle the projectiles and bullets. Whenever the player teleports, it sets the player’s position to where they need to teleport. The game also makes use of singletons to make sure that the players health stays consistent between scenes and to track stats in the Game Manager'
        ],
    },
    {
        id: 'silt',
        title: 'Silt 2D',
        tags: ['Game', 'Platformer', 'Pixel Art'],
        images: [
            'Silt01.png',
            'Silt02.png',
            'Silt03.png',
            'Silt04.png'
        ],
        description: [ 'A platformer designed with a focus on fluid and satisfying controls and movement. The game gives the player the ability to wall jump which could allow for more complex challenges for the player and more interesting levels.',
            'This was a personal project to see if I could make a platformer with a satisfying core gameplay loop. The project focused purely on the mechanics and has very basic visuals. The game doesn’t use Unity’s default gravity as it makes some mechanics feel floaty. So I manually set the player’s gravity which allowed me to decrease it while on a wall, or increase it the longer the player is in the air to create a smooth jump.',
        ],
    },
    {
        id: 'dig',
        title: 'Dig Into Depths',
        tags: ['Game', 'Pixel Art', 'Procedural Generation'],
        images: ['Dig01.png', 'Dig02.png', 'Dig03.png', 'Dig04.png'],
        description: [
            'Simple mining game where the goal is to mine and collect ores in order to repair a spaceship. Players need to upgrade their tools to dig faster and get farther.',
            'This is a simple mining game prototype i have been working on in my free time. its inspired by motherload a simple flash game I played as a kid. The core game loop involves the player digging down into the ground collecting resources. The secondary loop has the player return to the surface to trade the collected resources for money to unlock further upgrades. As the player progresses, they will unlock better tools to allow them to go deeper and find better resources that are worth more and unlock better tools.',
        ],
    },
    {
        id: 'td',
        title: 'Killer Technology',
        tags: ['Game', 'Tower Defense'],
        images: ['Tower01.png', 'Tower02.png', 'Tower03.png', 'Tower04.png'],
        description:[
            'This Project is a tower defense that is player-driven and uses elements of procedural generation. Created for an University Project. This focus of this project was to use procedural generation to handle environment and having the game respond to player input. We were told to create a tower defense and were given a outline of the mechanics and enemy types to create.',
            'The enemies will adjust to players building towers by spawning in the lane with the least number of towers. The less damage the player takes per round and the more enemies the game will spawn and it will determine which enemies take the player the longest to kill and spawn these more frequently if they are doing well. At the end of each round special enemies will spawn with traits from the regular enemies chosen at random. The environment uses cellular automata to procedurally generate a maze like environment to add to the visuals.',
        ]
    },
    {
        id: 'tetris',
        title: 'SFML Tetris Clone',
        tags: ['Game', 'C++', ],
        images: ['Tetris01.png', 'Tetris02.png', 'Tetris03.png', 'Tetris04.png'],
        description:  [
            'A Simple Tetris Clone made with C++ and SFML',
            'This is just a simple Tetris clone. You have hold pieces and it shows you what piece will drop next, as well as where your current block will lock. As the player completes lines, they will level up which causes the blocks to fall faster making the game harder.',
            'I implemented the wall kick system using a table of possible locations for a block to rotate into and use a simple score system that gives more points for soft dropping or hard dropping the piece.',
        ],
    },
    {
        id: 'opengl',
        title: 'Basic OpenGL Game Engine',
        tags: ['Engine'],
        images: ['Engine01.png', 'Engine02.png', 'Engine03.png', 'Engine04.png'],
        description: [
            'A OpenGL implementation that handles basic rendering and lighting. Generates rooms from a json file that can be specified at runtime, applies selected textures, specular, and normal maps, and loads basic fbx models.',
            'This was my last assignment for completing my BCIS Degree. I had to use OpenGl to render out a series of rooms specified by an external file. Json was used as it’s easy to read and write data to. This was my first time using C++ so the code doesn’t use many of the benefits of C++ such as pointers. The json file allows you to specify whether each wall has a door or any wall at all to allow for more complex room shapes. There is also a basic skybox implementation that follows the camera. Most of the textures used were created by me, excluding the skybox and fbx model’s textures. The textures of the rooms also tile as the rooms get bigger to prevent stretched textures.',
        ],
    },
    {
        id: 'powdertoy',
        title: 'Greedy Meshed Pixel Toy',
        tags: ['Prototype'],
        images: ['PowderToy01.png', 'PowderToy02.png', 'PowderToy03.gif', 'PowderToy04.png'],
        description: [
        ],
    },
    {
        id: 'wfc',
        title: 'Unity Wave Function Collapse',
        tags: ['Prototype'],
        images: ['WFC01.png', 'WFC02.png', 'WFC03.png', 'WFC04.gif'],
        description: [
        ],
    },
]


export function GetAllProjects() {
    return projects;
}

export function GetProjectById(id: string) : Project | undefined {
    return projects.find(p => p.id === id)
}