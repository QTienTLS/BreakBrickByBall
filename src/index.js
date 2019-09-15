var myGameSreen = {
    canvas : document.createElement("canvas"),
    start  : function(){
        this.canvas.id = "myGameScreen";
        this.canvas.context = this.canvas.getContext("2d");
        this.canvas.width = 500;
        this.canvas.height = 600;
        document.body.insertBefore(this.canvas,document.body.childNodes[0]);
    }
}

//hàm khởi tạo game
function startGame(){
    myGameSreen.start();
}