function adjust () {
  var target = document.getElementById('header__text');
  var h4 = document.getElementsByTagName('h4');
  target.style.fontSize = 3*(window.innerWidth/1440) + 'em';
  [].forEach.call(h4, function (el) {
    el.style.fontSize = (1 + Math.log(1440/window.innerWidth)) + 'em'
  })
}

function drawCube () {
  var target = document.getElementById('cube-wireframe');
  var x = target.width/100;
  var y = target.height/100;
  var ctx = target.getContext('2d');

  ctx.moveTo(100*x,100*y);
  ctx.lineTo(30*x, 100*y);
  ctx.ellipse(30*x, 85*y, 15*x, 30*y, Math.PI/2, 0, Math.PI/2, false);

  ctx.lineTo(0, 40*y);

  ctx.stroke();

  var grad1 = ctx.createLinearGradient(0, 40*y, 3*x, 25*y);
  grad1.addColorStop(0, "black");
  grad1.addColorStop(1, "transparent");

  ctx.strokeStyle = grad1;
  ctx.lineTo(3*x, 25*y);

  ctx.stroke();

  ctx.moveTo(100*x,98*y);
  ctx.lineTo(30*x, 98*y);
  ctx.ellipse(30*x, 83*y, 15*x, 30*y, Math.PI/2, 0, Math.PI/2, false);

  ctx.moveTo(100*x, 100*y);
  ctx.lineTo(100*x, 54*y);
  ctx.lineTo(30*x, 54*y);
  ctx.ellipse(30*x, 39*y, 15*x, 30*y, Math.PI/2, 0, Math.PI/2, false);

  ctx.stroke();

  var grad2 = ctx.createLinearGradient(100*x, 54*y, 80*x, 25*y);
  grad2.addColorStop(0, "black");
  grad2.addColorStop(1, "transparent");

  ctx.strokeStyle = grad2;
  ctx.moveTo(100*x, 54*y);
  ctx.lineTo(80*x, 25*y);

  ctx.stroke();
}

adjust();
drawCube();

window.addEventListener('resize', adjust);


