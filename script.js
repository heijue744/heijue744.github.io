var answers = ["园丁","杰克","黄衣之主","金翼之球","空军"]
var score = 0

function enterAnswer1(){
  var response = prompt("请写下你的答案");
  if (response === answers[0]){
    alert("回答正确");
    score++
  document.getElementById('puzzle2').style.display="block";
  document.getElementById('puzzle1').style.display="none";
  }
  else{
    alert("回答错误");
  }
}

function help1(){
  alert("你以为躲起来就找不到你么？没用的。你是那样拉风的女人，不管身在何处都如同漆黑中的萤火虫一般，你脸上的雀斑，你稻田色的草帽，你的绿色的背带裙，都深深让我着迷。虽然你如此优秀，但是行有行规，你当着我的面拆光我的椅子，是几个意思啊？");
}

function correctAnswer1(){
  alert("园丁");
}

function pass1(){
  document.getElementById('puzzle2').style.display="block";
  document.getElementById('puzzle1').style.display="none";
}

function enterAnswer2(){
  var response = prompt("请写下你的答案");
  if (response === answers[1]){
    alert("回答正确");
    score++
  document.getElementById('puzzle3').style.display="block";
  document.getElementById('puzzle2').style.display="none";
  }
  else{
    alert("回答错误");
  }
}

function help2(){
  alert("杰克的翻窗动作，俗称泼妇跨栏。");
}

function correctAnswer2(){
  alert("杰克");
}

function pass2(){
  document.getElementById('puzzle3').style.display="block";
  document.getElementById('puzzle2').style.display="none";
}

function enterAnswer3(){
  var response = prompt("请写下你的答案");
  if (response === answers[2]){
    alert("回答正确");
    score++
  document.getElementById('puzzle4').style.display="block";
  document.getElementById('puzzle3').style.display="none";
  }
  else{
    alert("回答错误");
  }
}

function help3(){
  alert("黄衣之主早期服饰的轮盘");
}

function correctAnswer3(){
  alert("黄衣之主");
}

function pass3(){
  document.getElementById('puzzle4').style.display="block";
  document.getElementById('puzzle3').style.display="none";
}

function enterAnswer4(){
  var response = prompt("请写下你的答案");
  if (response === answers[3]){
    alert("回答正确");
    score++
  document.getElementById('puzzle5').style.display="block";
  document.getElementById('puzzle4').style.display="none";
  }
  else{
    alert("回答错误");
  }
}

function help4(){
  alert("这是一个国家队长驻队员的紫色挂件，此角色硬控能力第一，能以一己之力决定求生者整个团队的胜负；此紫挂是世界杯限定物品，当时只需要3888碎片，特效非常华丽，可惜现已绝版。");
}

function correctAnswer4(){
  alert("金翼之球");
}

function pass4(){
  document.getElementById('puzzle5').style.display="block";
  document.getElementById('puzzle4').style.display="none";
}

function enterAnswer5(){
  var response = prompt("请写下你的答案");
  if (response === answers[4]){
    alert("回答正确");
    score++
  }
  else{
    alert("回答错误");
  }
}

function help5(){
  alert("这个图片对应的是一个很常见的角色，此人也是国家队长驻队员，很传统的救人位。这个角色非常便宜，但是，此人却是第一赛季和第五赛季的主要救人位担当。随着版本的更迭，此人已经渐渐淡出，在大地图已经渐渐看不到此人的身影，但此人的硬控能力很强，在小地图里，依然是非常强势的救人位。");
}

function correctAnswer5(){
  alert("空军");
}

function pass5(){
  document.getElementById('end').style.display="block";
  document.getElementById('puzzle5').style.display="none";
  document.getElementById('start').style.display="none";
}

function getScore(){
  alert("你的得分是 " + score)
}
