var player = {
    trigger: Boolean = false,
    mouseDown: function(){
        this.trigger = true;
    },
    mouseUp: function(){
        this.trigger = false;
    },
    mouseMove: function(){
        if(this.trigger)
        console.log("mouse moving");
    },
    x: Int16Array,
    drawPlayer:function(){
        ctx = myGameSreen.context;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x,myGameSreen.canvas.height,7,0,Math.PI,true);
        ctx.closePath();
        ctx.fill();
        ctx.fillText("x"+gameManager.ballNum,this.x+8,595);
    }
    
}
