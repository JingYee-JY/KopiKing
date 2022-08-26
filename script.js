const startButton = document.querySelector(".startButton")
const start = document.querySelector(".start")
const game = document.querySelector(".game")
const question = document.querySelector(".question")
const questionNumber = document.querySelector(".QuestionNumber")
const ans1 = document.getElementById("btn1");
const ans2 = document.getElementById("btn2");
const ans3 = document.getElementById("btn3");
const popUp = document.querySelector(".popUp");
const pop = document.querySelector(".pop");
const submit = document.querySelector(".submit");
const final = document.querySelector(".final");

let current;
let totalQuestion = 3;

let btn1Answer;
let btn2Answer;
let btn3Answer;
let btn1Image;
let btn2Image;
let btn3Image;
let chosenBtn1;
let chosenBtn2;
let chosenBtn3;
let choice1cliked;
let choice2cliked;

let randomQuestionIndex;
let correctAnswer1;
let correctAnswer2;
let choosenAnswer1;
let choosenAnswer2;
let score;
let choice1;
let choice2;

let overwrite;

startButton.addEventListener("click", () => {
    start.classList.add("hide")
    game.classList.remove("hide")
    current = 0;
    totalQuestion = 3;
    score = 0;
    choice1 = null;
    choice2 = null;
    chosenBtn1 = false;
    chosenBtn2 = false;
    chosenBtn3 = false;
    Question()
})

let ingredients = [
    {number: "1",image:"./img/blackKopi.png"},
    {number: "2",image:"./img/milk.png"},
    {number: "3",image:"./img/sugar.png"},
    {number: "4",image:"./img/evaporatedMilk.png"},
    {number: "5",image:"./img/ice.png"},
    {number: "6",image:"./img/kopiI.png"}
]

let Q1 = [
    {image:"./img/kopi.png"},
    {number: "2",image:"./img/milk.png"},
    {number: "1",image:"./img/blackKopi.png"}
]

let Q2 = [
    {image:"./img/kopiO.png"},
    {number: "1",image:"./img/blackKopi.png"},
    {number: "3",image:"./img/sugar.png"}
]

let Q3 = [
    {image:"./img/kopiGao.png"},
    {number: "1",image:"./img/blackKopi.png"},
    {number: "1",image:"./img/blackKopi.png"}
]

let Q4 = [
    {image:"./img/kopiC.png"},
    {number: "4",image:"./img/evaporatedMilk.png"},
    {number: "1",image:"./img/blackKopi.png"}
]

let Q5 = [
    {image:"./img/kopiPeng.png"},
    {number: "6",image:"./img/kopiI.png"},
    {number: "5",image:"./img/ice.png"}
]

ans1.addEventListener("click", () => {
    if(choice1 == null && chosenBtn1 == false){
        let answer1 = document.querySelector(".answer1");
        console.log(btn1Image)
        answer1.style.backgroundImage = "url('" + btn1Image + "')"
        answer1.style.backgroundSize = "contain"
        answer1.style.backgroundPosition = "center center"
        answer1.style.backgroundRepeat = "no-repeat"
        choice1 = btn1Answer
        chosenBtn1 = true
        choice1cliked = 1
    }
    else if(choice2 == null&& chosenBtn1 == false){
        let answer2 = document.querySelector(".answer2");
        answer2.style.backgroundImage = "url('" + btn1Image + "')"
        answer2.style.backgroundSize = "contain"
        answer2.style.backgroundPosition = "center center"
        answer2.style.backgroundRepeat = "no-repeat"
        choice2 = btn1Answer
        chosenBtn1 = true
        choice2cliked = 1
    }
    else{
        return
    }
})

ans2.addEventListener("click", () => {
    if(choice1 == null && chosenBtn2 == false){
        let answer1 = document.querySelector(".answer1");
        console.log(btn1Image)
        answer1.style.backgroundImage = "url('" + btn2Image + "')"
        answer1.style.backgroundSize = "contain"
        answer1.style.backgroundPosition = "center center"
        answer1.style.backgroundRepeat = "no-repeat"
        choice1 = btn2Answer
        chosenBtn2 = true
        choice1cliked = 2
    }
    else if(choice2 == null && chosenBtn2 == false){
        let answer2 = document.querySelector(".answer2");
        answer2.style.backgroundImage = "url('" + btn2Image + "')"
        answer2.style.backgroundSize = "contain"
        answer2.style.backgroundPosition = "center center"
        answer2.style.backgroundRepeat = "no-repeat"
        choice2 = btn2Answer
        chosenBtn2 = true
        choice2cliked = 2
    }
    else{
        return
    }
})

ans3.addEventListener("click", () => {
    if(choice1 == null && chosenBtn3 == false){
        let answer1 = document.querySelector(".answer1");
        answer1.style.backgroundImage = "url('" + btn3Image + "')"
        answer1.style.backgroundSize = "contain"
        answer1.style.backgroundPosition = "center center"
        answer1.style.backgroundRepeat = "no-repeat"
        choice1 = btn3Answer
        chosenBtn3 = true
        choice1cliked = 3
    }
    else if(choice2 == null && chosenBtn3 == false){
        let answer2 = document.querySelector(".answer2");
        answer2.style.backgroundImage = "url('" + btn3Image + "')"
        answer2.style.backgroundSize = "contain"
        answer2.style.backgroundPosition = "center center"
        answer2.style.backgroundRepeat = "no-repeat"
        choice2 = btn3Answer
        chosenBtn3 = true
        choice1cliked = 2
    }
    else{
        return
    }
})

submit.addEventListener("click", () => {
    if(choice1 == null || choice2 == null){
        return
    }
    choosenAnswer1 = false
    choosenAnswer2 = false
    if(choice1 == correctAnswer1 && choosenAnswer1 == false){
        console.log("r1")
        choice1 = 0
        choosenAnswer1 = true
    }
    if(choice2 == correctAnswer1 && choosenAnswer1 == false){
        console.log("r1")
        choice2 = 0
        choosenAnswer1 = true
    }
    if(choice1 == correctAnswer2 && choosenAnswer2 == false){
        console.log("r2")
        choice1 = 0
        choosenAnswer2 = true
    }
    if(choice2 == correctAnswer2 && choosenAnswer2 == false){
        console.log("r2")
        choice2 = 0
        choosenAnswer2 = true
    }

    console.log(choosenAnswer1, choosenAnswer2)

    if(choosenAnswer1 == true && choosenAnswer2 == true){
        score += 1;
        popUp.classList.remove("hide")
        pop.innerHTML = `
        <img class="correct" src="./img/correct.png">
            <button class="next">
                <img class="nextbtn" src="./img/next.png">
            </button>`
    }
    else{
        popUp.classList.remove("hide")
        pop.innerHTML = `
        <img class="correct" src="./img/keepItUp.png">
            <button class="next">
                <img class="nextbtn" src="./img/next.png">
            </button>`
    }
    let next = document.querySelector(".next")
    next.addEventListener("click", () => {
        choice1 = null;
        choice2 = null;
        chosenBtn1 = false;
        chosenBtn2 = false;
        chosenBtn3 = false;
        popUp.classList.add("hide")
        Question()
    })
})

function Question(){
    if(current == totalQuestion){
        console.log(score)
        game.classList.add('hide')
        final.classList.remove("hide")
        if(score == totalQuestion){
            final.innerHTML = `
            <div class="top">
                <img class="logo" src="./img/logo.png">
                <img class="zone" src="./img/zone3.png">
            </div>
            <div class="top"></div>
            <img class="title" src="./img/title.png">
            <img class="end" src="./img/100.png">
            <button class="playAgain">
                <img class="btn" src="./img/playAgain.png">
            </button>`
        }
        else if(score == 2){
            final.innerHTML = `
            <div class="top">
                <img class="logo" src="./img/logo.png">
                <img class="zone" src="./img/zone3.png">
            </div>
            <img class="title" src="./img/title.png">
            <img class="end" src="./img/66.png">
            <button class="playAgain">
            <img class="btn" src="./img/playAgain.png">
            </button>`
        }
        else if(score == 1){
            final.innerHTML = `
            <div class="top">
                <img class="logo" src="./img/logo.png">
                <img class="zone" src="./img/zone3.png">
            </div>
            <img class="title" src="./img/title.png">
            <img class="end" src="./img/33.png">
            <button class="playAgain">
                <img class="btn" src="./img/playAgain.png">
            </button>`
        }
        else if(score == 0){
            final.innerHTML = `
            <div class="top"></div>
            <img class="title" src="./img/title.png">
            <img class="end" src="./img/0.png">
            <button class="playAgain">
                <img class="btn" src="./img/playAgain.png">
            </button>`
        }
        let playAgain = document.querySelector(".playAgain")
        playAgain.addEventListener("click", () => {
            final.classList.add("hide")
            game.classList.remove("hide")
            current = 0;
            totalQuestion = 3;
            score = 0;
            Question()
    })

        return
    }

    current += 1;
    questionNumber.innerHTML = current + "/" + totalQuestion;

    let newQuestion;

    randomQuestionIndex = Math.floor(Math.random() * 5);

    if(randomQuestionIndex == 0){
        newQuestion = Q1
    }
    if(randomQuestionIndex == 1){
        newQuestion = Q2
    }
    if(randomQuestionIndex == 2){
        newQuestion = Q3
    }
    if(randomQuestionIndex == 3){
        newQuestion = Q4
    }
    if(randomQuestionIndex == 4){
        newQuestion = Q5
    }
    question.innerHTML = `
    <img class="product" src="${newQuestion[0].image}">
    <div class="equation">
        <button class="answer1"></button>
        <img class="sign" src="./img/plus.png">
        <button class="answer2"></button>
    </div>`

    let answer1 = document.querySelector(".answer1")
    let answer2 = document.querySelector(".answer2")

    answer1.addEventListener("click", () => {
        choice1 = null;
        answer1.style.backgroundImage = "none"
        if(choice1cliked = 1){
            chosenBtn1 = false
        }
        if(choice1cliked = 2){
            chosenBtn2 = false
        }
        if(choice1cliked = 3){
            chosenBtn2 = false
        }
})

answer2.addEventListener("click", () => {
    choice2 = null;
    answer2.style.backgroundImage = "none"
    if(choice1cliked = 1){
        chosenBtn1 = false
    }
    if(choice1cliked = 2){
        chosenBtn2 = false
    }
    if(choice1cliked = 3){
        chosenBtn3 = false
    }
})

    let randomwrong1Index = Math.floor(Math.random() * 5);
    let randomwrong2Index = Math.floor(Math.random() * 5);
    let randomwrong3Index = Math.floor(Math.random() * 5);

    correctAnswer1 = newQuestion[1].number
    correctAnswer2 = newQuestion[2].number
    btn1Answer = ingredients[randomwrong1Index].number
    btn2Answer = ingredients[randomwrong2Index].number
    btn3Answer = ingredients[randomwrong3Index].number

    for (let i = 0; i < 40; i++) {
        if(btn1Answer == btn2Answer || btn1Answer == btn3Answer 
            || btn2Answer == btn3Answer || correctAnswer1 == btn1Answer ||
            correctAnswer1 == btn2Answer || correctAnswer1 == btn3Answer ||
            correctAnswer2 == btn1Answer || correctAnswer2 == btn2Answer || 
            correctAnswer2 == btn3Answer){
            randomwrong1Index = Math.floor(Math.random() * 5);
            randomwrong2Index = Math.floor(Math.random() * 5);
            randomwrong3Index = Math.floor(Math.random() * 5);
            btn1Answer = ingredients[randomwrong1Index].number
            btn2Answer = ingredients[randomwrong2Index].number
            btn3Answer = ingredients[randomwrong3Index].number
        }
    }

    ans1.innerHTML = `<img class="options" src="${ingredients[randomwrong1Index].image}">`
    ans2.innerHTML = `<img class="options" src="${ingredients[randomwrong2Index].image}">`
    ans3.innerHTML = `<img class="options" src="${ingredients[randomwrong3Index].image}">`

    btn1Image = ingredients[randomwrong1Index].image
    btn2Image = ingredients[randomwrong2Index].image
    btn3Image = ingredients[randomwrong3Index].image
    
    overwrite = 0;

    for(let i = 1; i < 3; i++){
        let correctAnswerIndex = Math.floor(Math.random() * 3)+1;
        
        for (let j = 0; j < 10; j++) {
            if(overwrite == correctAnswerIndex){
                correctAnswerIndex = Math.floor(Math.random() * 3)+1;
            }
        }
        let correctAnswerId = "btn" + correctAnswerIndex;
        document.getElementById(correctAnswerId).innerHTML = `<img class="options" src="${newQuestion[i].image}"/>`

        if(correctAnswerIndex == 1){
            overwrite = 1;
            btn1Answer = newQuestion[i].number
            btn1Image = newQuestion[i].image
            console.log("C"+btn1Answer)
        }
        if(correctAnswerIndex == 2){
            overwrite = 2;
            btn2Answer = newQuestion[i].number
            btn2Image = newQuestion[i].image
            console.log("C"+btn2Answer)
        }
        if(correctAnswerIndex == 3){
            overwrite = 3;
            btn3Answer = newQuestion[i].number
            btn3Image = newQuestion[i].image
            console.log("C"+btn3Answer)
        }  
        
    }
}


