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
function createBrick(){
    var brick = new makeBrick(33,10,10);
    var brick1 = new makeBrick(33,10,70);
    var brick2 = new makeBrick(33,10,130);
    var brick3 = new makeBrick(33,10,190);
    var brick4 = new makeBrick(33,10,250);
    var brick5 = new makeBrick(33,10,310);
    var brick6 = new makeBrick(33,10,370);
    var brick7 = new makeBrick(33,10,430);
    var brick8 = new makeBrick(33,10,490);
    var brick9 = new makeBrick(33,10,550);
    var brick10 = new makeBrick(33,10,610);
    brick.update();
    brick1.update();
    brick2.update();
    brick3.update();
    brick4.update();
    brick5.update();
    brick6.update();
    brick7.update();
    brick8.update();
    brick9.update();
    brick10.update();
}