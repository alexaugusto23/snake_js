let canvas = document.getElementById("snake");
let botaoIniciar = document.getElementById("iniciar");
botaoIniciar = false;
let context = canvas.getContext("2d");
let pontos = 0;
let box = 32;
let snake = [];
snake [0] = 
{
    x: 8 * box,
    y: 8 * box
} 

let direction = "right";

let food = 
{
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG()
{
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
    text('Score: ' + pontos,'30px Cosmic Sans MS', 20, 40, 'white');
}

function criarCobrinha() 
{
    for(i = 0; i < snake.length; i++)
    {
        context.fillStyle =  "rgb(0, 122, 0)";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function text(txt, fnt, x, y, c)
{
    context.fillStyle = c;
    context.font = fnt;
    context.fillText(txt, x , y);
}


function drawFood()
{
    context.fillStyle = "red"
    context.fillRect(food.x, food.y, box, box)
}

document.addEventListener('keydown', update);

function update (event)
{
    if(event.keyCode == 37 && direction != "right") {direction = "left";} 
    if(event.keyCode == 38 && direction != "down")  {direction = "up";} 
    if(event.keyCode == 39 && direction != "left")  {direction = "right";} 
    if(event.keyCode == 40 && direction != "up")    {direction = "down";} 
}

function iniciarJogo()
{   
    if(snake[0].x > 15 * box && direction == "right") {snake[0].x = 0;}
    if(snake[0].x < 0 * box && direction == "left") {snake[0].x = 16 * box;}
    if(snake[0].y > 15 * box && direction == "down") {snake[0].y = 0;}
    if(snake[0].y < 0 * box && direction == "up") {snake[0].y = 16 * box;}

    for(i = 1; i < snake.length; i++)
    {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y)
        {
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();
    //score();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") {snakeX += box;}
    if(direction == "left")  {snakeX -= box;}
    if(direction == "up")    {snakeY -= box;}
    if(direction == "down")  {snakeY += box;}

    if(snakeX != food.x || snakeY != food.y)
    {
        snake.pop();
    }
    else
    {
        food.x = Math.floor(Math.random() * 15 + 1) * box,
        food.y = Math.floor(Math.random() * 15 + 1) * box,
        pontos += 1
    }

    let newHead =
    {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

function iniciar(botaoIniciar)
{
    if(botaoIniciar == true)
    {
        let jogo = setInterval(iniciarJogo, 100);
    }
    else{criarBG();}
}


iniciar();

//let jogo = setInterval(iniciarJogo, 100);