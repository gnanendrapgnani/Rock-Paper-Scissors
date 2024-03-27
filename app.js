let userScore=0;
let compScore=0;

const choices = document.querySelectorAll('.choice')
const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#computer-score")

const drawGame=()=>{
    msg.innerText="Game is Draw, Play Game"
    msg.style.backgroundColor="#081b31"
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win Your ${userChoice} beats ${compChoice} `
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Loose ${compChoice} beats Your ${userChoice} `
        msg.style.backgroundColor="red"
    }
};

const genCompChoice=()=>{
    const option=["rock", "paper", "scissor"]
    // rock, paper, scissor
    /* "Math.floor (Math.random()*10)" here if use the Math.random() 
    method it will generate in the decimal form the Math.floor() is used to get the single 
    number  or whole number 
    */
   const randIndx=Math.floor(Math.random()*3);
   return option[randIndx];
};

const playGame = (userChoice)=>{
    // to Genrate the computer choice
    const compChoice=genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice="rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice="paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// here we will get the sperate id with its id name
choices.forEach((choice) => {
    choice.addEventListener('click', ()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    } )
    
});