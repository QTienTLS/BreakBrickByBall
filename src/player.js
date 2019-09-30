var player = {
    trigger: Boolean = false,
    xstart: Int16Array,
    ystart: Int16Array,
    xend: Int16Array,
    yend: Int16Array,
    x: Int16Array,
    y: Int16Array,
    mouseDown: function(event){
        this.trigger = true;
        document.getElementById("allspace").style.display = "block";
        this.xstart = event.clientX;
        this.ystart = event.clientY;
        // console.log(this.xstart);
        // console.log(this.ystart);
   
        
    },
    mouseUp: function(){
        
        document.getElementById("allspace").style.display = "none";
        if(this.trigger)
            fireBall();
        this.trigger = false;
        
    },
    mouseMove: function(event){
        if(this.trigger)
        {
            //gameLogic.calStepBall();
            //console.log(gameLogic.stepx);
        
        
        this.xend = event.clientX;
        this.yend = event.clientY;
        if(this.yend - this.ystart>100)
            gameLogic.calFireDirection();
        else if(this.yend < this.ystart)
        {
            myGameSreen.refresh();
            this.trigger =false;
        }
    }

    },
    drawPlayer:function(){
        ctx = myGameSreen.context;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x,myGameSreen.canvas.height,7,0,Math.PI,true);
        ctx.closePath();
        ctx.fill();
        ctx.fillText("x"+gameManager.ballNum,this.x+8,myGameSreen.canvas.height-5);
    }
    
}
