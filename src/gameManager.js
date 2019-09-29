var gameManager= {
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
    }
}
    
// // }
// function showAlert(){
//     return "You'll lose all progress if you exit ";
// }