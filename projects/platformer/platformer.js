$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    /**for (let i = 100; i < canvas.width; i += 100) {
    createPlatform(i, canvas.height, -1, -canvas.height);
    }
    for (let i = 100; i < canvas.height; i += 100) {
    createPlatform(canvas.width, i, -canvas.width, -1);
    }
**/
    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(80, 129, 2, 1500);

    createPlatform(0, 167, 82, 1);
    createPlatform(73, 400, 10, 1);
    createPlatform(73, 400, 10, 1);
    
    createPlatform(115,129,60,1);
    createPlatform(195, 106, 64, 2);
    createPlatform(290, 116, 45, 2);
    createPlatform(370, 115, 60, 2);
    createPlatform(450,200.5,75,2)
    createPlatform(195,233,120,2)
    createPlatform(330,260,250,1)
    createCollectable("database", 190,180,.09,1)

    createPlatform(600,230,60,1)
    createPlatform(683,234,58,1)
    createPlatform(770,266,95,2)
    createPlatform(861,257.5,50,1)
    createPlatform(935,220,4,2)
    createPlatform(849,173,30,1)
    createPlatform(940,129,1,129)
    createPlatform(765,109,65,1)
    createPlatform(686,109,50,1)
    createPlatform(600,127,70,1)
    createPlatform(596,110,1,30)

    createPlatform(1100,445,55,1)
    createCollectable("database",1107, 390,.09, 1)

    createPlatform(885,555,60,2)



    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("database", 605, 50, .09, 1);



    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("right", 800, 100, 10, 10);


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
