import kaboom from "kaboom" //Cargar librería de el juego


kaboom() //Iniciar libreria


loadSprite("voto_petro", "sprites/voto_petro.png"); //Cargar sprite 1
//Añadir sprite
const player = add([
    sprite("voto_petro"),
    pos(0, 0),
    area(),
    scale(1),
    body(),
    origin("bot"),
  ])

//Evento click ()null
  onKeyDown("right", () => {
    player.move(MOVE_SPEED, 0)
  })


  onKeyPress("up", () => {

    if (player.isGrounded()) {
      player.jump(JUMP_FORCE)
    }
  })

onClick(() => {
	addKaboom(mousePos())
})

//On kay press evento
onKeyPress("b", burp)



onKeyPress("w"), () => {
  player.move(-MOVE_SPEED, 23)
};


onKeyPress("v", burp)
onKeyPress("s"), () => { player.move(-MOVE_SPEED, 23) };
