//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome

var leiaScore = 0;
var lukeScore = 0;
var darthvaderScore = 0;
var yodaScore = 0;
var questionPosition = 0;

//Part 2 - Step 2
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

q1a1.addEventListener("click", leia);
q1a2.addEventListener("click", luke);
q1a3.addEventListener("click", darthvader);
q1a4.addEventListener("click", yoda);

// Part 2 - Step 3
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

q2a1.addEventListener("click", leia);
q2a2.addEventListener("click", luke);
q2a3.addEventListener("click", darthvader);
q2a4.addEventListener("click", yoda);

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

q3a1.addEventListener("click", leia);
q3a2.addEventListener("click", luke);
q3a3.addEventListener("click", darthvader);
q3a4.addEventListener("click", yoda);

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

q4a1.addEventListener("click", leia);
q4a2.addEventListener("click", luke);
q4a3.addEventListener("click", darthvader);
q4a4.addEventListener("click", yoda);


//#TODO: Use the DOM to create variables for the first quiz question.

// First Question:




function leia() {
    leiaScore += 1;
    questionPosition += 1;
    if (questionPosition >=4) {
      updateResult();
    }
}


function luke() {
    lukeScore += 1;
    questionPosition += 1;
    if (questionPosition >=4) {
      updateResult();
    }
} 

function darthvader() {
    darthvaderScore += 1;
    questionPosition += 1;
    if (questionPosition >=4) {
      updateResult();
    }
  }

function yoda() {
    yodaScore += 1;
    questionPosition += 1;
    if (questionPosition >=4) {
      updateResult();
    }
  }


var result = document.getElementById("result");
 
function updateResult() {
  if (leiaScore >= 2) {
    result.innerHTML = "Leia! You're strong outside and inside.";
  } else if(lukeScore >= 2) {
     result.innerHTML = "Luke! I am a Jedi. ";
  } else if(darthvaderScore >= 2) {
    result.innerHTML = "Darth Vader! No, I am your father. ";
  } else if(yodaScore >= 2) {
    result.innerHTML = "Yoda! Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.";
  } else {
   result.innerHTML = "I'm not sure.....";
  }
}





var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);
                                  
function restartQuiz() {
  result.innerHTML = "Your result is..."; 
  questionPosition = 0; 
  leiaScore = 0;
  lukeScore = 0;
  darthvaderScore = 0;
  yodaScore = 0;
  enableQuestions(); 
}

// Extension 5 - Disable Buttons
function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

function disableQ4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
}

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
}



//original code
//#TODO: Define quiz functions here
//function leiaResponse() {
  //q1a1.className = "selected";
  //if (question1 >=3) {
    //  updateResult();
    //}
//}

//function lukeResponse() {
  //q1a2.className = "selected";
//}

//function darthvaderResponse() {
  //q1a3.className = "selected";
//}

//function yodaResponse( ) {
  //q1a4.className = "selected";
//}




//function leiaResponse() {
  //q2a1.className = "selected";
  //if (questionPosition >=3) {
    //  updateResult();
    //}
//}

//function lukeResponse() {
  //q2a2.className = "selected";
//}

//function darthvaderResponse() {
  //q2a3.className = "selected";
//}

///function yodaResponse( ) {
  //q2a4.className = "selected";
//}




//function leiaResponse() {
  //q3a1.className = "selected";
//}

//function lukeResponse() {
  //q3a2.className = "selected";
//}

//function darthvaderResponse() {
  //q3a3.className = "selected";
//}

//function yodaResponse( ) {
  //q3a4.className = "selected";
//}




//function leiaResponse() {
  //q4a1.className = "selected";
//}

//function lukeResponse() {
  //q4a2.className = "selected";
//}

//function darthvaderResponse() {
  //q4a3.className = "selected";
//}

//function yodaResponse( ) {
  //q4a4.className = "selected";
//}
