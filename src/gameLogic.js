var gameLogic = {
    xvector: Int16Array,
    yvector: Int16Array,
    //tính toán đường bay
    calFireDirection: function(){
        var x1 = player.xstart;
        var x2 = player.xend;
        var y1 = player.ystart;
        var y2 = player.yend;
        this.xvector = x1 -x2;
        this.yvector = y1 -y2;
        //phương trình tham số của đường thẳng chỉ hướng đi qua player là
        // x = player.x + xvector*t
        // y = player.y + yvector*t
        //lấy t = 1 có điểm nối
        var reX = player.x + this.xvector;
        var reY = player.y + this.yvector;
        //vẽ đường chỉ hướng
        var ctx = myGameSreen.context;
        ctx.clearRect(0,0,myGameSreen.canvas.width,myGameSreen.canvas.height);
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.setLineDash([1,(this.xvector*this.xvector + this.yvector*this.yvector)/10000]);
        ctx.moveTo(player.x,player.y);
        ctx.lineTo(reX,reY);
        ctx.stroke();
        player.drawPlayer();
        // console.log(this.xvector/this.yvector);
    },
    ballSpeed: Int16Array = 20,
    stepx: Int16Array,
    stepy: Int16Array,
    calStepBall: function(){
        var t = this.xvector/this.yvector;
        this.stepx=-(this.ballSpeed*t)/Math.sqrt(t*t+1);
        this.stepy=this.stepx/t;
        this.stepx = Math.round(this.stepx);
        this.stepy = Math.round(this.stepy);
    }

}