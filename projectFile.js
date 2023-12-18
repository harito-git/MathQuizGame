var game;
var strikes = 0;
var num1 = 0;
var num2 = 0;
var string;
var score = 0;
let highScore = 0;
function gameon(string){
  //var clickedButton = buttonclicked();
  document.getElementById("menu").style.display = "none";
  document.getElementById("question-container").style.display = "inline";
  document.getElementById("answer").style.display = "inline";
  document.getElementById("scores").style.display = "inline";

  num1 = Math.floor(Math.random() * 100);
  num2 = Math.floor(Math.random() * 100);
  game=string;
  if(string == "multi"){
    question.innerHTML = "What does " + num1 + "x" + num2 + "  = ?";
    document.body.style.backgroundColor = "blue";
  }
  if(string == "divi"){
    if(num1 > num2){
      question.innerHTML = "What does "+ num1 + "÷" + num2 + " = ?"+"<br />"+"Please enter your answer to two decimal places!!!";
      document.body.style.backgroundColor = "yellow";
    }
    if(num2 > num1){
      question.innerHTML = "What does "+ num2 + "÷" + num1 + " = ?"+"<br />"+"Please enter your answer to two decimal places!!!";
      document.body.style.backgroundColor = "yellow";
    }
  
  }
  if(string == "add"){
    question.innerHTML = "What does " + num1 + "+" + num2 + "  = ?";
    document.body.style.backgroundColor = "green";

  }
  if(string == "subtract"){
    question.innerHTML = "What does " + num1 + "-" + num2 + "  = ?"; 
    document.body.style.backgroundColor = "red";

  }


}
 
function gameoff(){
  //var p = document.getElementById("question");
  document.getElementById("menu").style.display = "block";
  document.getElementById("question-container").style.display = "none";
  if(score >= 0){
    document.getElementById("scores").innerHTML = "Score: "+ 0 + "<br>" + "Strikes: "+ 0;
  }
  //strikes = 0;
  //score = 0;
  document.getElementById("scores").style.display = "none";
  document.getElementById("question").innerHTML = "";
  document.getElementById("answer").value = "";
  document.getElementById("answer").style.display = "inline";
  document.body.style.backgroundColor = "bisque";
}    




//answer = document.getElementById("answer");
function submitAnswer(){
  if(game=="multi"){
    //alert(game);
    multiplication();
  }
  else if(game=="divi"){
    division();
  }
  else if(game == "add"){
    addition();
  }
  else if(game== "subtract"){
    subtraction();
  }
}

function multiplication(){
  document.body.style.backgroundColor = "blue";

  //alert("Strikes: " + strikes);
  
  userAnswer = document.getElementById("answer").value;
  if(strikes <= 3){
   var question = document.getElementById("question");
   getUserAnswer = document.getElementById("submitAnswer");
   //outPut1 = document.getElementById("output1");
   //outPut1.innerHTML = userAnswer.value;
   //getUserAnswer.innerHTML = userAnswer;
   //submitAnswer.addEventListener('click', p2);
    if(num1*num2 == userAnswer){
      score += 1;
      document.getElementById("scores").innerHTML = "Score: "+ score + "<br>" + "Strikes: "+ strikes;
       alert("correct");
       //alert("score:" + score);
       gameon('multi');
       clear();
     }
     else if(num1*num2 != userAnswer){
     strikes += 1;
     document.getElementById("scores").innerHTML = "Score: "+ score + "<br>" + "Strikes: "+ strikes;
     alert("incorrect");
     gameon('multi');
     clear();
    }  
  
   }
   if(strikes >= 3) {
    strikes = 0;
    score = 0;
    alert("Strikes: 3" + " Game Over!!!!");
    gameoff();
  }
   //else if(strikes > 3){
   // gameoff();
 // }
   //else{
    //alert("Strikes: " + strikes);
   //}
  
}
function division(){
  document.body.style.backgroundColor = "yellow";

  //alert("Strikes: " + strikes);

  userAnswer = document.getElementById("answer").value;
  if(strikes <= 3){
   var question = document.getElementById("question");
   getUserAnswer = document.getElementById("submitAnswer");
   //outPut1 = document.getElementById("output1");
   //outPut1.innerHTML = userAnswer.value;
   //getUserAnswer.innerHTML = userAnswer;
   //submitAnswer.addEventListener('click', p2);
    var result1 = num1/num2;
    var result2 = result1.toFixed(2);
    var result3 = num2/num1;
    var result4 = result3.toFixed(2);
    if((result2 == userAnswer && num1 > num2) || (result4) == userAnswer && num2 > num1){
      score += 1;
      document.getElementById("scores").innerHTML = "Score: "+ score + "<br>" + "Strikes: "+ strikes;
      alert("correct");
      //alert("score:" + score);
       gameon('divi');
       clear();
     }
  
     else if ((result2 != userAnswer && num1 > num2) || (result4) != userAnswer && num2 > num1){
     strikes += 1;
     document.getElementById("scores").innerHTML = "Score: "+ score + "<br>" + "Strikes: "+ strikes;
     alert("incorrect");
     gameon('divi');
     clear();
    }

     
  
   }
   if(strikes >= 3) {
    strikes = 0;
    score = 0;
    alert("Strikes: 3" + " Game Over!!!!");
    gameoff();
  }
  
}
function addition(){
  document.body.style.backgroundColor = "green";

  //alert("Strikes: " + strikes);

  userAnswer = document.getElementById("answer").value;
  if(strikes <= 3){
   var question = document.getElementById("question");
   getUserAnswer = document.getElementById("submitAnswer");
   //outPut1 = document.getElementById("output1");
   //outPut1.innerHTML = userAnswer.value;
   //getUserAnswer.innerHTML = userAnswer;
   //submitAnswer.addEventListener('click', p2);
  
    if(num1+num2 == userAnswer){
      score += 1;
      document.getElementById("scores").innerHTML = "Score: "+ score + "<br>" + "Strikes: "+ strikes;
      alert("correct");
      //alert("score:" + score);
       gameon('add');
       clear();
     }

     else if(num1+num2 != userAnswer){
     strikes += 1;
     document.getElementById("scores").innerHTML = "Score: "+ score + "<br>" + "Strikes: "+ strikes;
     alert("incorrect");
     gameon('add');
     clear();
    }

     
  
   }
   if(strikes >= 3) {
    strikes = 0;
    score = 0;
    alert("Strikes: 3" + " Game Over!!!!");
    gameoff();
  }
  
}
function subtraction(){
  document.body.style.backgroundColor = "red";

  alert("Strikes: " + strikes);

  userAnswer = document.getElementById("answer").value;
  if(strikes <= 3){
   var question = document.getElementById("question");
   getUserAnswer = document.getElementById("submitAnswer");
   //outPut1 = document.getElementById("output1");
   //outPut1.innerHTML = userAnswer.value;
   //getUserAnswer.innerHTML = userAnswer;
   //submitAnswer.addEventListener('click', p2);
  
    if(num1-num2 == userAnswer){
      score += 1;
      document.getElementById("scores").innerHTML = "Score: "+ score + "<br>" + "Strikes: "+ strikes;
      alert("correct");
      //alert("score:" + score);
       gameon('subtract');
       clear();
     }
     else if(num1-num2 != userAnswer){
     strikes += 1;
     document.getElementById("scores").innerHTML = "Score: "+ score + "<br>" + "Strikes: "+ strikes;
     alert("incorrect");
     gameon('subtract');
     clear();
    }

     
  
   }
  if(strikes >= 3) {
    strikes = 0;
    score = 0;
    alert("Strikes: 3" + " Game Over!!!!");
    gameoff();
  }
  
}
  
function clear(){
  document.getElementById("answer").value = "";
}
function aboutUs(){
  window.location.href = "file:///Applications/Downloads/2_OOlordsHarit/About_Us.html";
  
}
