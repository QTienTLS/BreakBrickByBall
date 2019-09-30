
var myGameSreen = {
    canvas : document.createElement("canvas"),
    start  : function(){
        document.getElementById("sbID").style.display = "none";
        this.canvas.id = "myGameScreen";
        this.context = this.canvas.getContext("2d");
        this.canvas.width = 500;
        this.canvas.height = 600;
        document.body.insertBefore(this.canvas,document.body.childNodes[0]);
        // this.interval = setInterval(updateMyGame,20);
        
        //ctx.fillRect(90,220,170,1);
        this.ball = new makeBall(120,170,10,"white",1,1);
        //this.drawMenu();  
        this.interval = setInterval(updateMainMenu,15);
        
        //this.canvas.onmousedown = function(){player.mouseDown(event)};
        // this.canvas.onmouseup = function(){player.mouseUp(event)};
        // this.canvas.onmousemove = function(){player.mouseMove(event)};
        
    },
    refresh : function(){
        this.context.clearRect(0,0,500,myGameSreen.canvas.height);
    },
    drawMenu :function(){
        let ctx = this.context;
        ctx.fillStyle = "white";
        ctx.font = "70px Mansalva";
        ctx.fillText("Break Brick",100,270);
        ctx.font = "40px Mansalva";
        ctx.fillText("By Ball",250,320);
        ctx.font='menu';
        ctx.fillText("Make by: QTienTLS",190,400);
        ctx.fillText("Version: 1.0",210,420);
        ctx.fillText("This game make by pure javascript and it lacks some features of the original game",37,440);
        ctx.fillText("Thank for playing !!!",190,460);
        this.ball.moveInMenu();
        this.ball.update();
    }
}
function startGame(){
    myGameSreen.refresh(); 
    clearInterval(myGameSreen.interval);
    gameManager.drawScoreBoard();
    gameManager.ballNum = 10;
    player.x = 250;
    player.y = myGameSreen.canvas.height;
    player.drawPlayer();
    console.log(player.y);
   
    //khai báo sự kiện kéo thả chuột trên khu vực chơi
    document.getElementById("myGameScreen").onmousedown = function(){player.mouseDown(event)};
    document.getElementById("allspace").onmouseup = function(){player.mouseUp(event)};
    document.getElementById("allspace").onmousemove = function(){player.mouseMove(event)};
}
function updateMainMenu(){
    myGameSreen.refresh();
    myGameSreen.drawMenu();
}
