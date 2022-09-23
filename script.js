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
const end = document.querySelector(".end");

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
    choice1 = 0;
    choice2 = 0;
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
    {Ename:"Kopi", Cname:"咖啡", image:"./img/kopi.png"},
    {number: "2",image:"./img/milk.png"},
    {number: "1",image:"./img/blackKopi.png"}
]

let Q2 = [
    {Ename:"Kopi O", Cname:"咖啡乌", image:"./img/kopiO.png"},
    {number: "1",image:"./img/blackKopi.png"},
    {number: "3",image:"./img/sugar.png"}
]

let Q3 = [
    {Ename:"Kopi Gao", Cname:"咖啡厚", image:"./img/kopiGao.png"},
    {number: "1",image:"./img/blackKopi.png"},
    {number: "6",image:"./img/kopiI.png"}
]

let Q4 = [
    {Ename:"Kopi C", Cname:"咖啡加淡奶", image:"./img/kopiC.png"},
    {number: "4",image:"./img/evaporatedMilk.png"},
    {number: "1",image:"./img/blackKopi.png"}
]

let Q5 = [
    {Ename:"Kopi Peng", Cname:"咖啡冰", image:"./img/kopiPeng.png"},
    {number: "6",image:"./img/kopiI.png"},
    {number: "5",image:"./img/ice.png"}
]

input()

function input(){
    for (let i = 0; i < 6; i ++){
        let currentClass = "btn" + (i + 1)

        let currentBtn = document.getElementById(currentClass)
        
        currentBtn.addEventListener("click", () => {
            let data = currentBtn.getAttribute("data")
            if(choice1 == data){
                currentBtn.style.border = "transparent"
                choice1 = 0
                console.log("r1")
                return
            }
            if(choice2 == data){
                currentBtn.style.border = "transparent"
                choice2 = 0
                console.log("r2")
                return
            }
            if(choice1 == 0){
                currentBtn.style.border = "5px solid black"
                choice1 = data
                console.log(choice1)
            }
            else if(choice2 == 0){
                currentBtn.style.border = "5px solid black"
                choice2 = data
                console.log(choice2)
            }
            else{
                return
            }
        })
    }
}

submit.addEventListener("click", () => {
    if(choice1 == 0 || choice2 == 0){
        return
    }
    choosenAnswer1 = false
    choosenAnswer2 = false
    console.log(correctAnswer1)
    console.log(correctAnswer2)
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
        <img class="next" src="./img/correct.png">`
    }
    else{
        popUp.classList.remove("hide")
        /*pop.innerHTML = `
        <img class="next" src="./img/keepItUp.png">`*/
        pop.innerHTML = `
        <img class="next" src="./img/keepItUpV2.png">
        <p style="z-index: 1;">正确答案是</p>
        <p style="z-index: 1;">The correct answer is</p>
        <div class="right" style="z-index: 1;" >
            <img src="${correctImg1}">
            <img class="resize" src="./img/plus.png">
            <img src="${correctImg2}">
        </div>`
    }
    let next = document.querySelector(".next")
    next.addEventListener("click", () => {
        choice1 = 0;
        choice2 = 0;
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
            end.src="./img/100.png"
        }
        else if(score == 2){
            end.src="./img/66.png"
        }
        else if(score == 1){
            end.src="./img/33.png"
        }
        else if(score == 0){
            end.src="./img/0.png"
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
    <div class="container">
            <div class="product">
                <img class="coffee" src="${newQuestion[0].image}">
                <div class="name">${newQuestion[0].Cname}</div>
                <div class="name">${newQuestion[0].Ename}</div>
            </div>
            <div class="ingredients">
                <div class="coffee-content"> Ingredients:</div>
                <img class="in" src="${newQuestion[1].image}">
                <img class="in" src="${newQuestion[2].image}">
            </div>
        </div>
    <div class="coffee-content">${newQuestion[0].Cname}是由以下哪两个材料组成？<br>${newQuestion[0].Ename} is formed by which 2 ingredients below?</div>`

    correctAnswer1 = newQuestion[1].number
    correctAnswer2 = newQuestion[2].number
    correctImg1 = newQuestion[1].image
    correctImg2 = newQuestion[2].image

    for (let i = 0; i < 6; i ++){
        let currentClass = "btn" + (i + 1)

        let currentBtn = document.getElementById(currentClass)
        currentBtn.style.border = "transparent"
    }
}


