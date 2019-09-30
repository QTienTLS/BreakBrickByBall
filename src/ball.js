//tạo bóng và điều khiển các chuyển động của bóng
function makeBall(x,y,r,color,stepx,stepy){
    this.x = x;
    this.stt = "alive";
    this.y = y;
    this.r = r;
    this.interval = null;
    this.stepx = stepx;
    this.stepy = stepy;
    //vẽ bóng mỗi frame
    this.update = function()
    {
        if(this.r > 0){
    ctx = myGameSreen.context;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI,true);
    ctx.fill();
    ctx.closePath();}
    }
    this.moveController = function(){
        // if(this.r > 0){
        //     ctx = myGameSreen.context;
        //     ctx.beginPath();
        //     ctx.fillStyle = color;
        //     ctx.arc(this.x,this.y,this.r,0,2*Math.PI,true);
        //     ctx.fill();
        //     ctx.closePath();}
        //console.log(this.stepx);
        dx = this.stepx;
        dy = this.stepy;
        //xử lí va chạm thành phải
        if(this.x + dx >500 - this.r || this.x+dx<this.r)
        {
            this.stepx =  -this.stepx;
            dx=this.stepx;
        }
       else if(dx>0 && dx+this.x+this.r > 500)
    {
        dx = this.stepx - ( this.x +this.r + this.stepx -500);
    }
        //xử lí va chạm thành trái
        else if(dx<0 && this.x-this.r == 0)
        {
            this.stepx = - this.stepx;
            dx = this.stepx;
        }
        else if(dx<0 && dx + this.x-this.r < 0)
        {
            dx = -this.x + this.r;
        }
        //xử lí va chạm thành trên
        if(this.y-this.r==0)
        {
            this.stepy=-this.stepy;
            dy= this.stepy;
        }
        if(dy + this.y - this.r < 0)
        {
            dy = this.r - this.y;
        }
        else if(dy + this.y + this.r > myGameSreen.canvas.height)
        {
            dy = myGameSreen.canvas.height - this.y - this.r;
        }
        //sự kiện xóa bóng khi đi xuống biên dưới
        if(this.y + this.r == myGameSreen.canvas.height)
        {
            this.stepy=-this.stepy;
            dy = this.stepy;
            this.stt = "deleted";
            //this.r = 0;
        }
    this.x +=dx;
    this.y+=dy;
    //console.log(this.x);
    }
    this.moveInMenu = function(){
        if(this.y == 210 && this.stepy > 0)
            this.stepy = -1;
        else if(this.y == 170 && this.stepy < 0)
            this.stepy = 1;
        this.y+=this.stepy;  
    }
    
}
function makeItMove(ball){
    ball.moveController();
    ball.update();
}