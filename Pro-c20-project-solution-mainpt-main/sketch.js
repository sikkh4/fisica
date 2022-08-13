// const é tipo uma variavel, porém ela nunca muda e não pode ser utilizada com qualquer coisa não exista
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var fisica; 
var mundo;
var floor;

// na linha 18, estamos criando um motor da física, não usamos "createSprite" pois estamos criando os corpos e não sprites 
function preload()

{
	
}

function setup() {
	createCanvas(800, 700);

	fisica = Engine.create();
	mundo = fisica.mundo;
    // caracteristicas do chão (floor)
    var floor_options = {
		isStatic:true
	}
	//Crie os Corpos Aqui.
    floor = Bodies.rectangle(300, 700, 800, 100, floor_options);
    World.add(mundo, floor);
	Engine.run(fisica);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(fisica);
  rect(floor.position.x, floor.position.y, 800);
 
}




