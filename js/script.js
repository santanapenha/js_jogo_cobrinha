// Criar elemento que irá rodar o jogo
let canvas = document.getElementById("snake")
let context = canvas.getConext("2d");
let box = 32;

//Criar cobrinha como vetor, já que lea vai ser uma série de coordenadas, que quando pintadas, criam os quadrinhos
let snake = [];

//Inicio da cobrinha 
snake[0] ={
    x: 8 * box,
    y: 8 * box
}

//Direção
let direction = "right";

//Comida
let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}

//Função para criar o Background
function criarBG (){
    context.fillStyle = "lightgreen";
    //Desenha retângulos iusando x e y e a largura e altura setadas
    context.fillRect(0, 0, 16 * box, 16 * box);
}
//Função para criar a cobrinha
function criarCobrinha (){
    for(i = 0; i < snake.lentgth; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

// Quando um evento acontece, detecta e chama a fnção update 
document.addEventListener('keydown', update)

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left'
    if(event.keyCode == 38 && direction != 'down') direction = 'up'
    if(event.keyCode == 39 && direction != 'left') direction = 'right'
    if(event.keyCode == 40 && direction != 'up') direction = 'down'
}

//Função principal
function iniciarJogo(){
    if(snake[0].x > 15*box && direction == "right"){
       snake[0].x = 0;
    }
    if(snake[0].x < 0 && direction == "left"){
       snake[0].x = 16 * box;
    }
    if(snake[0].y > 15*box && direction == "down"){
       snake[0].y = 0;
    }
    if(snake[0].y < 0 && direction == "up"){
       snake[0].y = 16 * box;
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].X;
    let snakeY = sanke[0].Y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if (snakeX != food.x || snakeY != food.y){
        snake.pop(); //pop tira o último elemento da lista 
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }

    let newHead ={
        x: snakeX,
        y: snakeY
    }
    //Método unshift adiciona como primeiro quadradinho da cobrinha
    snake.unshift(newHead);
}

