var myGameSreen = {
    canvas : document.createElement("canvas"),
    start  : function(){
        this.canvas.id = "myGameScreen";
        this.context = this.canvas.getContext("2d");
        this.canvas.width = 500;
        this.canvas.height = 600;
        document.body.insertBefore(this.canvas,document.body.childNodes[0]);
        this.interval = setInterval(updateMyGame,20);
    },
    refresh : function(){
        this.context.clearRect(0,0,500,600);
    }
}
//tạo bóng và điều khiển các chuyển động của bóng
function makeBall(x,y,r,color,stepx,stepy){
    this.x = x;
    this.y = y;
    this.r = r;
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
        else if(dy + this.y + this.r > 600)
        {
            dy = 600 - this.y - this.r;
        }
        //sự kiện xóa bóng khi đi xuống biên dưới
        if(this.y + this.r == 600)
            this.r = 0;
    this.x +=dx;
    this.y+=dy;
    }
 
}
//tạo các khối gạch
function makeBrick(value,x,y)
{
    randomNum = Math.floor((Math.random()*4)+1);
    if(randomNum==4)
    {
        this.type = "tamgiac";
        //biến triType biểu diễn loại tam giác sẽ được vẽ. nó nằm trong khoảng từ 1 tới 4 ứng với mỗi góc hình vuông k được vẽ
        this.triType = Math.floor((Math.random()*4)+1);
    }
    else 
    this.type = "hinhvuong";
    this.value = value;
    this.x = x;
    this.y =y;
    this.toughness = this.value;
//biến toughness đặc trưng cho độ cứng của mỗi brick, khi nó xuống 0 thì khối brick sẽ vỡ
//hàm vẽ khối brick
    this.update = function(){
        //chỉ vẽ khi chỉ số tougness của brick vẫn còn
        if(this.toughness > 0)
        {
            // rEd = 255;
            // gReen =255;
            // bLue =255;
            this.toughness = 50;
            //hiệu ứng đổi màu mỗi khi khối brick bị đập trúng
            rEd = Math.floor((this.toughness/this.value)*255);
            gReen =  Math.floor(((this.value-this.toughness)/this.value)*255);
            bLue = Math.floor(((this.value-this.toughness)/this.value)*150);
            color = "rgb(" + rEd + "," + gReen + "," + bLue + ")";
            ctx = myGameSreen.context;
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            ctx.lineWidth =   5;
            if(this.type == "hinhvuong")
            //vẽ hình vuông
            {
                ctx.beginPath();
                ctx.rect(this.x,this.y,50,50);
                ctx.stroke();
                ctx.closePath();
                ctx.font = "12px Verdana";
                ctx.fillText(this.toughness,this.x+15,this.y+30);
            }
            //vẽ tam giác
            else
                switch(this.triType)
                {
                    case 1:
                        ctx.beginPath();
                        ctx.moveTo(this.x+50,this.y);
                        ctx.lineTo(this.x+50,this.y+50);
                        ctx.lineTo(this.x,this.y+50);
                        ctx.lineTo(this.x+50,this.y);
                        ctx.stroke();
                        ctx.closePath();
                        ctx.font = "12px Verdana";
                        ctx.fillText(this.toughness,this.x+25,this.y+40);
                        break;
                    case 2:
                        ctx.beginPath();
                        ctx.moveTo(this.x,this.y);
                        ctx.lineTo(this.x+50,this.y+50);
                        ctx.lineTo(this.x,this.y+50);
                        ctx.lineTo(this.x,this.y);
                        ctx.stroke();
                        ctx.closePath();
                        ctx.font = "12px Verdana";
                        ctx.fillText(this.toughness,this.x+5,this.y+40);                            break;
                    case 3:
                        ctx.beginPath();
                        ctx.moveTo(this.x,this.y);
                        ctx.lineTo(this.x+50,this.y);
                        ctx.lineTo(this.x+50,this.y+50);
                        ctx.lineTo(this.x,this.y);
                        ctx.stroke();
                        ctx.closePath();                            
                        ctx.font = "12px Verdana";
                        ctx.fillText(this.toughness,this.x+23,this.y+16);
                        break;
                    default:
                        ctx.beginPath();
                        ctx.moveTo(this.x,this.y);
                        ctx.lineTo(this.x+50,this.y);
                        ctx.lineTo(this.x,this.y+50);
                        ctx.lineTo(this.x,this.y);
                        ctx.stroke();
                        ctx.closePath();
                        ctx.font = "12px Verdana";
                        ctx.fillText(this.toughness,this.x+5,this.y+16);
                }
        }
    }

}
var brick,brick2,brick3,brick4;
function startGame(){
    myGameSreen.start();
}
function updateMyGame(){
    myGameSreen.refresh();
}