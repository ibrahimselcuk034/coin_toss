const buttons = document.querySelectorAll('.buttons');
const againButton = document.getElementById('again');

let heads = 1;
let tails = 0;
let userScore = 0;
let computerScore = 0;

function displaySelections(user, computer){
    const playerSelection = document.querySelector('#player-selection');
    const computerSelection = document.querySelector('#computer-selection');
    if (user === 'heads'){
        playerSelection.style.color = 'orangered';
        playerSelection.style.backgroundColor = 'white';
        playerSelection.style.borderRadius= '10%';
    }
    if (user === 'tails'){
        playerSelection.style.color = 'blue';
        playerSelection.style.backgroundColor = 'white';
        playerSelection.style.borderRadius= '10%';
    }
    if (computer === 'heads'){
        computerSelection.style.color = 'orangered';
        computerSelection.style.backgroundColor = 'white';
        computerSelection.style.borderRadius= '10%';
    }
    if (computer === 'tails'){
        computerSelection.style.color = 'blue';
        computerSelection.style.backgroundColor = 'white';
        computerSelection.style.borderRadius= '10%';
    }
    playerSelection.innerHTML = `${user}`;
    computerSelection.innerHTML = `${computer}`
}

function displayRandom(random){
    const displayResult = document.querySelector('#image');
    console.log(random);
    
        if (random === 1){
            displayResult.style.backgroundImage =  "url('./heads.png')";
            
        } else {
            displayResult.style.backgroundImage =  "url('./tails.png')";
        }    
}

function tallyScore(random, userPick, computerPick) {
    
    const playerDisplay = document.querySelector('#player-score');
    const computerDisplay = document.querySelector('#computer-score');
    const winner = document.querySelector('#winner');

    if (userPick === random){
        userScore++;
    }
    if (computerPick === random){
        computerScore++;
    }
    playerDisplay.textContent = `${userScore}`;
    computerDisplay.textContent = `${computerScore}`;
    
    if (userScore === 5 && computerScore === 5){
        winner.innerHTML = `<h1>Draw Game</h1>`;
        document.getElementById('button').style.display = 'none';
        document.getElementById('playAgain').style.display = 'inline-block';
        document.getElementById('playAgain').style.margin = 'auto';
    } else if (userScore === 5){
        winner.innerHTML = `<h1>You Win!</h1>`;
        document.getElementById('button').style.display = 'none';
        document.getElementById('playAgain').style.display = 'inline-block';
        document.getElementById('playAgain').style.margin = 'auto';
    } else if (computerScore === 5){
        winner.innerHTML = `<h1>Computer Wins!</h1>`;
        document.getElementById('button').style.display = 'none';
        document.getElementById('playAgain').style.display = 'inline-block';
        document.getElementById('playAgain').style.margin = 'auto';
    }

    winner.style.color = 'orangered';
    winner.style.backgroundColor = 'white';
    winner.style.borderRadius = '10%';
}


buttons.forEach(function(button){
    button.addEventListener('click', function(e){

        const random = Math.round(Math.random());

        const computerPick = Math.round(Math.random());

        let computerSelection;
        if (computerPick === 1){
            computerSelection = 'heads';
        } else {
            computerSelection = 'tails';
        }
        

        const spin = document.querySelector('#image');
        spin.classList.add('animate');


        const userSelection = e.target.id;
        let userPick;

        if (userSelection === 'heads'){
            userPick = 1;
        } else if (userSelection === 'tails'){
            userPick = 0;
        }


        displaySelections(userSelection, computerSelection);
        displayRandom(random);

        
        setTimeout(function(){
            tallyScore(random, userPick, computerPick);
            document.querySelector('#image').classList.remove('animate');
        }, 2500);
    })
})

const again = () => {
    location.reload();
} 

againButton.addEventListener('click', again);
