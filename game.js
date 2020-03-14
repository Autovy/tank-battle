//红坦数据
var redtank = document.querySelector(" .rtank").style;
var biu = document.querySelector(".biu");
var redy = 410;
var redx = 61;
var xmax = 1392;
var ymax = 668;
var rspeed = 3;
var redhp = 350;
var bluehp = 350;
var a = false;
var b = false;
var c = false;
var d = false;
var f = false;
var diect = "right";
redtank.top = redy + "px";
redtank.left = redx + "px";

//蓝坦数据
var bluetank = document.querySelector(".btank").style;
var bluey = 410;
var bluex = 1400;
var bspeed = 6;
var q = false;
var w = false;
var ex = false;
var r = false;
var t = false;
var bdiect = "left";
bluetank.top = bluey + "px";
bluetank.left = bluex + "px";

//音效数据
var move = new Audio("music/移动.mp3");
var biubiu = new Audio("music/发射.mp3");
var vin = new Audio("music/胜利.mp3");
var bgm = new Audio("music/bgm.mp3")

//初始化数据
//开始游戏界面
function start() {
  document.querySelector(".start").style.display = "none";
  var drawjing = document.querySelector(".jingdu");
  var cxj = drawjing.getContext("2d");
  var value = 0;
  bgm.play();
  var jingdutiao = setInterval(function() {
    cxj.fillStyle = "dodgerblue";
    cxj.fillRect(0, 0, value, 200);
    value++;
    if (value == 400) {
      document.querySelector(".hidebg").style.display = "none";
      drawjing.style.display = "none";
      clearInterval(jingdutiao);
    }
  }, 10);
}

//血条绘制
function draw() {
  var drawred = document.querySelector(".redtiao");
  var drawblue = document.querySelector(".bluetiao");
  var cxr = drawred.getContext("2d");
  var cxb = drawblue.getContext("2d");
  cxr.fillStyle = "chartreuse";
  cxb.fillStyle = "chartreuse";
  //红坦血条
  cxr.clearRect(0, 0, 350, 150);
  cxr.fillRect(0, 0, redhp, 150);
  cxb.clearRect(0, 0, 350, 150);
  cxb.fillRect(0, 0, bluehp, 150);
  gameover();
}

draw();

//游戏结束机制
function gameover() {
  if (redhp <= 0) {
    document.querySelector(".bg").style.display = "block";
    var over = document.querySelector(".gameover").style;
    over.backgroundImage = "url(images/守护者.jpg)";
    over.display = "block";
    redtank.display = "none";
    bgm.pause();
    vin.play();
  }
  if (bluehp <= 0) {
    document.querySelector(".bg").style.display = "block";
    var over = document.querySelector(".gameover").style;
    over.backgroundImage = "url(images/铁锤.jpg)";
    over.display = "block";
    bluetank.display = "none";
    bgm.pause();
    vin.play();
  }
}

//移动方法
set = setInterval(function() {
  //计算x，y轴的变化
  if (a) {
    redy -= rspeed;
    redtank.transform = "rotate(-90deg)";
    diect = "up";
    move.play();
  }
  if (b) {
    redx += rspeed;
    redtank.transform = "rotate(360deg)";
    diect = "right";
    move.play();
  }
  if (c) {
    redy += rspeed;
    redtank.transform = "rotate(90deg)";
    diect = "dowm";
    move.play();
  }
  if (d) {
    redx -= rspeed;
    redtank.transform = "rotate(180deg)";
    diect = "left";
    move.play();
  }
  if (f) {
    var x = redx / 5;
    var y = redy / 5;
    var diection = diect;
    biubiu.play();
    shoot(x, y, diection);
  }
  if (q) {
    bluey -= bspeed;
    bluetank.transform = "rotate(90deg)";
    bdiect = "up";
    move.play();
  }
  if (w) {
    bluex += bspeed;
    bluetank.transform = "rotate(180deg)";
    bdiect = "right";
    move.play();
  }
  if (ex) {
    bluey += bspeed;
    bluetank.transform = "rotate(-90deg)";
    bdiect = "dowm";
    move.play();
  }
  if (r) {
    bluex -= bspeed;
    bluetank.transform = "rotate(360deg)";
    bdiect = "left";
    move.play();
  }
  if (t) {
    var bx = bluex / 5;
    var by = bluey / 5;
    var bdiection = bdiect;
    biubiu.play();
    bshoot(bx, by, bdiection);
  }

  //规定界限
  if (redy >= ymax) {
    redy = ymax;
  }
  if (redy <= 78) {
    redy = 78;
  }
  if (redx >= xmax) {
    redx = xmax;
  }
  if (redx <= 63) {
    redx = 63;
  }
  if (bluey >= ymax) {
    bluey = ymax;
  }
  if (bluey <= 78) {
    bluey = 78;
  }
  if (bluex >= xmax) {
    bluex = xmax;
  }
  if (bluex <= 63) {
    bluex = 63;
  }
  bluetank.top = bluey + "px";
  bluetank.left = bluex + "px";
  redtank.top = redy + "px";
  redtank.left = redx + "px";
}, 50);

//按键响应
document.onkeydown = function(e) {
  var e = e || window.event;
  if (e.keyCode == 87) {
    a = true;
  }
  if (e.keyCode == 68) {
    b = true;
  }
  if (e.keyCode == 83) {
    c = true;
  }
  if (e.keyCode == 65) {
    d = true;
  }
  if (e.keyCode == 69) {
    f = true;
  }
  if (e.keyCode == 38) {
    q = true;
  }
  if (e.keyCode == 39) {
    w = true;
  }
  if (e.keyCode == 40) {
    ex = true;
  }
  if (e.keyCode == 37) {
    r = true;
  }
  if (e.keyCode == 96) {
    t = true;
  }
};

document.onkeyup = function(e) {
  var e = e || window.event;
  if (e.keyCode == 87) {
    a = false;
    move.pause();
  }
  if (e.keyCode == 68) {
    b = false;
    move.pause();
  }
  if (e.keyCode == 83) {
    c = false;
    move.pause();
  }
  if (e.keyCode == 65) {
    d = false;
  }
  if (e.keyCode == 69) {
    f = false;
  }
  if (e.keyCode == 38) {
    q = false;
    move.pause();
  }
  if (e.keyCode == 39) {
    w = false;
    move.pause();
  }
  if (e.keyCode == 40) {
    ex = false;
    move.pause();
  }
  if (e.keyCode == 37) {
    r = false;
    move.pause();
  }
  if (e.keyCode == 96) {
    t = false;
  }
};

//红子弹机制
function shoot(x, y, diection) {
  var i = 0;
  var redtime = setInterval(function() {
    if (diection === "up" && y >= 0) {
      y--;
    }

    if (diection === "right" && x <= 300) {
      x++;
    }

    if (diection === "dowm" && y <= 150) {
      y++;
    }

    if (diection === "left" && x >= 0) {
      x--;
    }
    var cxt = biu.getContext("2d");
    cxt.beginPath();
    cxt.fillStyle = "red";
    i++;
    cxt.fillRect(x, y, 2, 2);
    cxt.closePath();

    if (i == 50) {
      i = 0;
      cxt.clearRect(0, 0, 300, 150);
    }

    //红子弹击中蓝坦克
    if (
      5 * x <= bluex + 25 &&
      5 * y <= bluey + 25 &&
      5 * x >= bluex - 25 &&
      5 * y >= bluey - 25
    ) {
      clearInterval(redtime);
      var bluehurt = 1;
      var atime = 0;
      bluehp -= 25;
      draw();
      var buleblood = setInterval(function() {
        if (bluehurt == 1) {
          bluetank.display = "block";
          bluehurt = 0;
        } else {
          bluetank.display = "none";
          bluehurt = 1;
          atime++;
          if (atime == 3) {
            clearInterval(buleblood);
            bluetank.display = "block";
          }
        }
      }, 100);
    }
  }, 5);
}

//蓝子弹机制
function bshoot(bx, by, bdiection) {
  var bi = 0;
  var bluetime = setInterval(function() {
    if (bdiection === "up" && by >= 0) {
      by--;
    }
    if (bdiection === "right" && bx <= 300) {
      bx++;
    }
    if (bdiection === "dowm" && by <= 150) {
      by++;
    }
    if (bdiection === "left" && bx >= 0) {
      bx--;
    }
    var cxt = biu.getContext("2d");
    cxt.beginPath();
    cxt.fillStyle = "blue";
    bi++;
    cxt.fillRect(bx, by, 2, 2);
    cxt.closePath();

    if (bi == 50) {
      bi = 0;
      cxt.clearRect(0, 0, 300, 150);
    }

    //蓝子弹击中红坦克
    if (
      5 * bx <= redx + 25 &&
      5 * by <= redy + 25 &&
      5 * bx >= redx - 25 &&
      5 * by >= redy - 25
    ) {
      clearInterval(bluetime);
      var redhurt = 1;
      var btime = 0;
      redhp -= 20;
      draw();
      var redblood = setInterval(function() {
        if (redhurt == 1) {
          redtank.display = "block";
          redhurt = 0;
        } else {
          redtank.display = "none";
          redhurt = 1;
          btime++;
          if (btime == 3) {
            clearInterval(redblood);
            redtank.display = "block";
          }
        }
      }, 100);
    }
  }, 5);
}
