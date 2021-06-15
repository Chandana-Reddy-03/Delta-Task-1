//document.getElementById("g1-2").style.backgroundColor = "Blue";
var color,id,box2,points,count,gt1,gt2,gt3,gt4,gt5,gt6,gt7,gt8,gt9,gf1,gf2,gf3,gf4,gf5,gf6,gf7,gf8,gf9;
function Initial(){
 color = ["Blue","Red","Purple","Yellow","Green","orange"];
 id = [
  "g1-1",
  "g1-2",
  "g1-3",
  "g1-4",
  "g1-5",
  "g1-6",
  "g1-7",
  "g1-8",
  "g1-9",
];
 box2 = [
  "g2-1",
  "g2-2",
  "g2-3",
  "g2-4",
  "g2-5",
  "g2-6",
  "g2-7",
  "g2-8",
  "g2-9",
  "g2-10",
  "g2-11",
  "g2-12",
  "g2-13",
  "g2-14",
  "g2-15",
  "g2-16",
  "g2-17",
  "g2-18",
  "g2-19",
  "g2-20",
  "g2-21",
  "g2-22",
  "g2-23",
  "g2-24",
  "g2-25",
];
 points = 0;
 count = 0;
 gt1 = document.getElementById(id[0]);
 gt2 = document.getElementById(id[1]);
 gt3 = document.getElementById(id[2]);
 gt4 = document.getElementById(id[3]);
 gt5 = document.getElementById(id[4]);
 gt6 = document.getElementById(id[5]);
 gt7 = document.getElementById(id[6]);
 gt8 = document.getElementById(id[7]);
 gt9 = document.getElementById(id[8]);
 gf1 = document.getElementById(box2[6]);
 gf2 = document.getElementById(box2[7]);
 gf3 = document.getElementById(box2[8]);
 gf4 = document.getElementById(box2[11]);
 gf5 = document.getElementById(box2[12]);
 gf6 = document.getElementById(box2[13]);
 gf7 = document.getElementById(box2[16]);
 gf8 = document.getElementById(box2[17]);
 gf9 = document.getElementById(box2[18]);
 var temp=1;
 if(temp++==1)
 Randit();
}
function g2_1() {
  var y = document.getElementById("g2-1");

  var y1 = document.getElementById("g2-2");
  var y2 = document.getElementById("g2-6");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_2() {
  var y = document.getElementById("g2-2");

  var y1 = document.getElementById("g2-1");
  var y2 = document.getElementById("g2-3");
  var y3 = document.getElementById("g2-7");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_3() {
  var y = document.getElementById("g2-3");

  var y1 = document.getElementById("g2-2");
  var y2 = document.getElementById("g2-4");
  var y3 = document.getElementById("g2-8");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_4() {
  var y = document.getElementById("g2-4");

  var y1 = document.getElementById("g2-3");
  var y2 = document.getElementById("g2-5");
  var y3 = document.getElementById("g2-9");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_5() {
  var y = document.getElementById("g2-5");

  var y1 = document.getElementById("g2-4");
  var y2 = document.getElementById("g2-10");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_6() {
  var y = document.getElementById("g2-6");

  var y1 = document.getElementById("g2-1");
  var y2 = document.getElementById("g2-7");
  var y3 = document.getElementById("g2-11");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_7() {
  var y = document.getElementById("g2-7");

  var y1 = document.getElementById("g2-2");
  var y2 = document.getElementById("g2-6");
  var y3 = document.getElementById("g2-8");
  var y4 = document.getElementById("g2-12");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y4.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y4.className;
    y.className = cls2;
    y4.className = cls1;
    var bg1 = y4.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y4.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_8() {
  var y = document.getElementById("g2-8");

  var y1 = document.getElementById("g2-3");
  var y2 = document.getElementById("g2-7");
  var y3 = document.getElementById("g2-9");
  var y4 = document.getElementById("g2-13");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y4.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y4.className;
    y.className = cls2;
    y4.className = cls1;
    var bg1 = y4.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y4.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_9() {
  var y = document.getElementById("g2-9");

  var y1 = document.getElementById("g2-4");
  var y2 = document.getElementById("g2-8");
  var y3 = document.getElementById("g2-10");
  var y4 = document.getElementById("g2-14");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y4.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y4.className;
    y.className = cls2;
    y4.className = cls1;
    var bg1 = y4.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y4.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_10() {
  var y = document.getElementById("g2-10");

  var y1 = document.getElementById("g2-5");
  var y2 = document.getElementById("g2-9");
  var y3 = document.getElementById("g2-15");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_11() {
  var y = document.getElementById("g2-11");

  var y1 = document.getElementById("g2-6");
  var y2 = document.getElementById("g2-16");
  var y3 = document.getElementById("g2-12");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_12() {
  var y = document.getElementById("g2-12");

  var y1 = document.getElementById("g2-7");
  var y2 = document.getElementById("g2-13");
  var y3 = document.getElementById("g2-11");
  var y4 = document.getElementById("g2-17");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y4.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y4.className;
    y.className = cls2;
    y4.className = cls1;
    var bg1 = y4.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y4.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_13() {
  var y = document.getElementById("g2-13");

  var y1 = document.getElementById("g2-12");
  var y2 = document.getElementById("g2-14");
  var y3 = document.getElementById("g2-8");
  var y4 = document.getElementById("g2-18");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y4.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y4.className;
    y.className = cls2;
    y4.className = cls1;
    var bg1 = y4.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y4.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_14() {
  var y = document.getElementById("g2-14");

  var y1 = document.getElementById("g2-13");
  var y2 = document.getElementById("g2-15");
  var y3 = document.getElementById("g2-19");
  var y4 = document.getElementById("g2-9");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y4.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y4.className;
    y.className = cls2;
    y4.className = cls1;
    var bg1 = y4.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y4.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_15() {
  var y = document.getElementById("g2-15");

  var y1 = document.getElementById("g2-14");
  var y2 = document.getElementById("g2-10");
  var y3 = document.getElementById("g2-20");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_16() {
  var y = document.getElementById("g2-16");

  var y1 = document.getElementById("g2-11");
  var y2 = document.getElementById("g2-17");
  var y3 = document.getElementById("g2-21");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_17() {
  var y = document.getElementById("g2-17");

  var y1 = document.getElementById("g2-16");
  var y2 = document.getElementById("g2-18");
  var y3 = document.getElementById("g2-12");
  var y4 = document.getElementById("g2-22");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y4.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y4.className;
    y.className = cls2;
    y4.className = cls1;
    var bg1 = y4.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y4.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_18() {
  var y = document.getElementById("g2-18");

  var y1 = document.getElementById("g2-17");
  var y2 = document.getElementById("g2-19");
  var y3 = document.getElementById("g2-23");
  var y4 = document.getElementById("g2-13");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y4.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y4.className;
    y.className = cls2;
    y4.className = cls1;
    var bg1 = y4.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y4.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_19() {
  var y = document.getElementById("g2-19");

  var y1 = document.getElementById("g2-18");
  var y2 = document.getElementById("g2-20");
  var y3 = document.getElementById("g2-14");
  var y4 = document.getElementById("g2-24");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y4.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y4.className;
    y.className = cls2;
    y4.className = cls1;
    var bg1 = y4.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y4.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_20() {
  var y = document.getElementById("g2-20");

  var y1 = document.getElementById("g2-15");
  var y2 = document.getElementById("g2-25");
  var y3 = document.getElementById("g2-19");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_21() {
  var y = document.getElementById("g2-21");

  var y1 = document.getElementById("g2-22");
  var y2 = document.getElementById("g2-16");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_22() {
  var y = document.getElementById("g2-22");

  var y1 = document.getElementById("g2-21");
  var y2 = document.getElementById("g2-17");
  var y3 = document.getElementById("g2-23");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_23() {
  var y = document.getElementById("g2-23");
  var y1 = document.getElementById("g2-22");
  var y2 = document.getElementById("g2-18");
  var y3 = document.getElementById("g2-24");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_24() {
  var y = document.getElementById("g2-24");
  var y1 = document.getElementById("g2-23");
  var y2 = document.getElementById("g2-19");
  var y3 = document.getElementById("g2-25");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y3.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y3.className;
    y.className = cls2;
    y3.className = cls1;
    var bg1 = y3.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y3.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function g2_25() {
  var y = document.getElementById("g2-25");

  var y1 = document.getElementById("g2-24");
  var y2 = document.getElementById("g2-20");

  if (y1.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y1.className;
    y.className = cls2;
    y1.className = cls1;
    var bg1 = y1.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y1.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }

  if (y2.className == "griditem g2-25") {
    var cls1 = y.className;
    var cls2 = y2.className;
    y.className = cls2;
    y2.className = cls1;
    var bg1 = y2.style.backgroundColor;
    var bg2 = y.style.backgroundColor;
    y2.style.backgroundColor = bg2;
    y.style.backgroundColor = bg1;
  }
  count = count + 1;
  document.getElementById("ct").innerText = count;
  Check_Game();
}

function Randit() {
    var str="griditem";
    var grid2item=document.getElementsByClassName("griditem");
    for(var k=0;k<25;k++){
        grid2item[k].className=str+" "+box2[k];
    }   
    var c;
    var n = [0, 0, 0, 0, 0, 0];
    var i = 0;
    start: while (i < 9) {
      c = Math.floor(Math.random() * 6);
      if (n[c] >= 4) {
        continue start;
      }
      n[c]++;
      document.getElementById(id[i]).style.backgroundColor = color[c];
      i++;
    }
    var a;
    var x = [0, 0, 0, 0, 0, 0];
    var j = 0;
    start_2: while (j < 24) {
      a = Math.floor(Math.random() * 6);
      if (x[a] >= 4) {
        continue start_2;
      }
      x[a]++;
      document.getElementById(box2[j]).style.backgroundColor = color[a];
      j++;
    }
    document.getElementById(box2[24]).style.backgroundColor = "transparent";
    points = 0;
    count = 0;
    document.getElementById("sb").innerText = points;

    
  }
function Check_Game() {
     gt1 = document.getElementById("g1-1");
     gt2 = document.getElementById("g1-2");
     gt3 = document.getElementById("g1-3");
     gt4 = document.getElementById("g1-4");
     gt5 = document.getElementById("g1-5");
     gt6 = document.getElementById("g1-6");
     gt7 = document.getElementById("g1-7");
     gt8 = document.getElementById("g1-8");
     gt9 = document.getElementById("g1-9");
     gf1 = document.getElementById("g2-7");
     gf2 = document.getElementById("g2-8");
     gf3 = document.getElementById("g2-9");
     gf4 = document.getElementById("g2-12");
     gf5 = document.getElementById("g2-13");
     gf6 = document.getElementById("g2-14");
     gf7 = document.getElementById("g2-17");
     gf8 = document.getElementById("g2-18");
     gf9 = document.getElementById("g2-19");
  if (gt1.style.backgroundColor === gf1.style.backgroundColor)
   { if (gt2.style.backgroundColor === gf2.style.backgroundColor)
      if (gt3.style.backgroundColor === gf3.style.backgroundColor)
        if (gt4.style.backgroundColor === gf4.style.backgroundColor)
          if (gt5.style.backgroundColor === gf5.style.backgroundColor)
            if (gt6.style.backgroundColor === gf6.style.backgroundColor)
              if (gt7.style.backgroundColor === gf7.style.backgroundColor)
                if (gt8.style.backgroundColor === gf8.style.backgroundColor)
                  if (gt9.style.backgroundColor === gf9.style.backgroundColor) {
                    points = 1000 - count * 2;
                    document.getElementById("sb").innerText = points;
            
                    alert("Congratulations!! Match over!! POINTS = " + points);
                  } 
    }else {
                    document.getElementById("sb").innerText = "0";
    }
}
var timeoutHandle;

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes

    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = mins - 1
        seconds--;
        counter.innerHTML =
            current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
         if(document.getElementById("timer").innerText=="0:00"){
           alert("Time is Up!! Better Luck next time :)");
         }
            if (seconds > 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else {

            if (mins > 1) {

                // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                setTimeout(function() { countdown(mins - 1); }, 1000);

            }
        }
    }
    tick();
}
countdown(3);