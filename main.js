const questionTitle = document.getElementById("theQuestion");
const answer1 = document.getElementById("a1");
const answer2 = document.getElementById("a2");
const answer3 = document.getElementById("a3");
const answer4 = document.getElementById("a4");
const centralBox = document.getElementById("box");
const startBox = document.getElementById("start-box");

answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer); 

document.getElementById("start").addEventListener("click", () => {
    startBox.style.display = "none";
    centralBox.style.display = "block";

    chooseQuestions();

});



let current = 0; // the number of current question (0-9)
let score = 0;      // total score
let randomQuestions = []; // an array with the random selected questions
var numberQuestion = 0; // the current question from the list of Questions

/* ------- Choose 10 random questions from the list ----------------*/ 
function chooseQuestions() {

    while(randomQuestions.length < 10){
        var r = Math.floor(Math.random() * 25);
        if(randomQuestions.indexOf(r) === -1) {
            randomQuestions.push(r);
        }
    }
    loadQuiz(current);    
}



/* -------- load the question and the answers -------------------- */
function loadQuiz(current) {
    
    numberQuestion = randomQuestions[current];
  
    questionTitle.innerHTML = quizData[numberQuestion].question;
    answer1.innerHTML = quizData[numberQuestion].answers.a1;
    answer2.innerHTML = quizData[numberQuestion].answers.a2;
    answer3.innerHTML = quizData[numberQuestion].answers.a3;
    answer4.innerHTML = quizData[numberQuestion].answers.a4;
}

    
     
/* ----- Check the answer and load the next question or finish the quiz ----- */
function checkAnswer() {

    if (quizData[numberQuestion].correct === this.id) {
        score ++;   
        this.style.backgroundColor = "#388E3C";             
    }
    else {
        this.style.backgroundColor = "#EF5350"; 
        document.getElementById(quizData[numberQuestion].correct).style.backgroundColor = "#388E3C";
    }
    
    current++;
    
    if (current < randomQuestions.length) {         // load next question

        setTimeout(() => {
            answer1.style.backgroundColor = "#000";
            answer2.style.backgroundColor = "#000";
            answer3.style.backgroundColor = "#000";
            answer4.style.backgroundColor = "#000";
            loadQuiz(current);
        }, 1000);
          
    } 
    else {                                          // finish the quiz

        let scoreResult = "";
        if (score > 8) {
            scoreResult += "Perfect !<br>You are a football legend !";
        }
        else if (score > 4) {
            scoreResult += "Not bad !"; 
        }
        else {
            scoreResult += "Obviously, football is not your favorite sport !";  
        }


        setTimeout(() => {
            centralBox.innerHTML = `<p>Correct Answers: ` + score + `/${randomQuestions.length}` + `</p>` + scoreResult +`<p></p><br><button onclick="location.reload()">Play again</button>`;
        }, 1000);

    }          

}
