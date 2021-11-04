
const sBtn = document.getElementById('startBtn').addEventListener('click', function drawSquare () {
  const getSpeed = prompt('Enter a Number wich will represent the drawing speed, e.g  1000 - 1sec , 10000 - 10sec');
      if (getSpeed === '' || getSpeed === false) {
                    var ctx = document.getElementById('canvas').getContext('2d');
                    ctx.font = '48px serif';
                    ctx.fillText('ERROR 9119', 80, 50);
                    ctx.fillText('Make sure to type a number into the text field', 10, 130);
                  } else {
        var speed = getSpeed * 1;
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var i = 0;
        var theSpeed = document.getElementById('currentSpeed');
        var quantity = document.getElementById('count');
        var sizes = document.getElementById('rectSizes');
        var rectColors = document.getElementById('rectColors');

            setInterval(function draw () {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            var x = Math.floor(Math.random() * 300);
            var y = Math.floor(Math.random() * 200);
            var shade = Math.random();
            var randomPlace = Math.floor(Math.random() * 100);
              ctx.beginPath();
              ctx.rect(x, y, randomPlace, randomPlace);
              ctx.fillStyle = `rgb(${r}, ${g}, ${b}, ${shade})`;
              ctx.fill();
            theSpeed.innerText = `${getSpeed}`;
            count.innerText = i++;
            sizes.innerText = `${x}, ${y}`;
            rectColors.innerText = `${r}, ${g}, ${b}, ${shade}`;
            }, speed);
              
        }
      });
const rBtn = document.getElementById('startBtn').addEventListener('click', function resetCanvas () {

});



