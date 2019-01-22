(function(){
    var MyCanvas = document.getElementById('canvas');    
    MyCanvas.width = window.innerWidth;
    var context = MyCanvas.getContext('2d');

    var initialX = 20;
    var width = 50;
    var finalX = window.innerWidth - 70;
    var currentX = initialX;
    var m = 5;
    var width2 = width+10;
    
    function draw(){
        context.clearRect(0, 0, finalX+width2, finalX+width2);
        
        context.fillRect(currentX,20, 50 ,50);

        currentX = currentX+m;

        if(currentX >= finalX){
            m = m*-1;
        }else if(currentX <= initialX){
            m = m*-1;
        }
        requestAnimationFrame(draw);
    }
    draw()
})();

(function(){
    var MyCanvas = document.getElementById('canvas2');    
    MyCanvas.width = window.innerWidth;
    MyCanvas.height = 500;
    var context = MyCanvas.getContext('2d');

    var img = document.createElement('img');
    img.src = "muybridge.jpg";

    img.onload = draw;

    var row = 0, col = 0;
    var fps = 15;
    var frameDuration = 1000/fps;
    var width = 158;
    var height = 130;

    var posX = MyCanvas.width/2 - width/2;
    var posY = MyCanvas.height/2 - height/2;
    var clipRegion = new Path2D();
    clipRegion.rect(posX, posY, width, height);

    context.clip(clipRegion);

    function draw(){
        col = col+1;

        if(col>3){
            col = 0;
            row +=1;
        }

        if(col==3 && row == 3){
            col = 0;
            row = 0;

        }
        context.drawImage(img, posX-(width)*col, posY-(height)*row);

        setTimeout(draw, frameDuration);
    }

})();
