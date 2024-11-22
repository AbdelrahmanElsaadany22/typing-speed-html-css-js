let level;
let start=document.querySelector('.start')
let spans = document.querySelectorAll('.big-container .container .level span');
let firstll = spans[0]; // First span (Level)
let secondll = spans[1]; // Second span (Time)
let mainButton=document.querySelector('.container .button')
let wordsArea=document.querySelector('.words')
let word=document.querySelector('.container .myWord')
let time=document.querySelector('.container .data .time span')
let input=document.querySelector('.big-container .container .input')
let scoreSpan=document.querySelector('.container .data .score span')
let randomWord ;
let score=0;
time.textContent=0;
scoreSpan.textContent=score;
let finishMessage = document.querySelector(".container .finish");
document.querySelector('.three-buttons').addEventListener('click', function (event) {
    if (event.target.classList.contains('b1') || 
        event.target.classList.contains('b2') || 
        event.target.classList.contains('b3')) {
      level = event.target.textContent; 
      console.log(level)
      start.classList.add('hidden'); 
      firstll.innerHTML=`[${level}]`;
      let time=lvls[`${level}`]
      secondll.innerHTML=`[${time}]`
    }
});
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];
const lvls = {
    "EASY": 10,
    "NORMAL": 5,
    "HARD": 2
};

mainButton.onclick=function(){
    input.focus();
    //remove the main buuton
    this.remove()
    //function to delete this button and get one word from the list
    appendWord();
    //function to write all words in its area
    writeWords();
    //start the game
    startGame();
}

function writeWords(){
    wordsArea.innerHTML="";
    for(let i=0;i<words.length;i++){
        let s=document.createElement("div")
        s.textContent=words[i]
        wordsArea.appendChild(s);
    }
}

function appendWord(){
 // Get Random Word From Array
  randomWord = words[Math.floor(Math.random() * words.length)];
  // Get Word Index
  let wordIndex = words.indexOf(randomWord);
  // Remove WordFrom Array
  words.splice(wordIndex, 1);
  // Show The Random Word
  word.innerHTML = randomWord;
  word.classList.add("show")
}

function startGame(){
    let timeInmille=lvls[`${level}`]*1000;
    time.innerHTML=lvls[`${level}`];
    let s=setInterval(()=>{
        time.innerHTML--;
        if(time.innerHTML === "0")
        {
        clearInterval(s);
        if(input.value.length>0){
            if(input.value.toLowerCase()===randomWord.toLowerCase()){
                input.value="";
                writeWords();
                appendWord();
                score++;
                scoreSpan.textContent=score;
            if (words.length > -1) {
                startGame();
              } 
              else
               {
                let span = document.createElement("span");
                span.className = 'good';
                let spanText = document.createTextNode("Congratz");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
                word.remove();
                // Remove Upcoming Words Box
                wordsArea.remove();
              }
        }
        else 
        {
            finish()
       }
    }
    else{
        finish();
    }
        }
    },1000)
}
function finish(){
    let span = document.createElement("span");
    span.className = 'bad';
    let spanText = document.createTextNode("Game Over");
    span.appendChild(spanText);
    finishMessage.appendChild(span);
}