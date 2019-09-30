var gameManager= {
    interval: null,
    itvBall: null,
    level : Int16Array = 1,
    ballNum: Int16Array = 1,
    score: Int32Array = 0,
    scoreBoard : document.getElementById("sbID"),
    sbContext: document.getElementById("sbID").getContext("2d"),
    drawScoreBoard : function(){
        this.scoreBoard.style.display = "block";
        let ctx = this.sbContext;
        ctx.fillStyle = "white";
        ctx.font = "40px Arial";
        ctx.fillText("Score:",10,45);
        ctx.font = "60px Arial";
        ctx.fillText(this.score,130,120);
    },
    listBall: [],
    drawOneFrame: function(){
        var j;
        for(j=1;j<=this.listBall.length;j++)
        {
            if(this.listBall[j-1].stt=="alive"){
                this.listBall[j-1].update();
                
                this.listBall[j-1].moveController();
            }
           else if(this.listBall[j-1].stt == "deleted"){
                this.listBall.splice(j-1,1);
                this.ballNum -=1;
                this.i--;
            }
            console.log(this.i);
        }
    },
    i:Int16Array,
    ballCreated: Int16Array

}
//var listBall=[];
function fireBall(){
    
    gameManager.i = 0;
    gameManager.ballCreated = 0;
    gameLogic.calStepBall();
    gameManager.itvBall= setInterval(addABall,100);
    // for(i=0;i<gameManager.ballNum;i++)
    // gameManager.listBall[i] = new makeBall(player.x+i*10,player.y-10*i,8,"white",gameLogic.stepx,gameLogic.stepy);
    gameManager.interval = setInterval(drawFrame,21);
}
function addABall(){
    gameManager.listBall[gameManager.i] = new makeBall(player.x,player.y-10,8,"white",gameLogic.stepx,gameLogic.stepy);
    gameManager.i++;
    gameManager.ballCreated++;
}
function drawFrame(){
    myGameSreen.refresh();  
    gameManager.drawOneFrame();
    if(gameManager.ballNum==0){
        clearInterval(gameManager.interval);
        console.log("interval ended");
    }
    if(gameManager.ballCreated == gameManager.ballNum)
        clearInterval(gameManager.itvBall);
}