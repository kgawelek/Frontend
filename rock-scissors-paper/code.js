const choices = Array.from(document.querySelectorAll('.user_choice'));
const result = document.querySelector('#result');
let randomChoice = document.querySelector('#random_choice');


function checkTheWinner(i, rand){
    if(i == 0){
        if(rand == 2 | rand == 3){
            result.textContent = 'You won!';
        }
        else  result.textContent = 'You lost!';
    }
    else if(i == 1){
        if(rand == 0 | rand == 4){
            result.textContent = 'You won!';
        }
        else  result.textContent = 'You lost!';
    }
    else if(i == 2){
        if(rand == 1 | rand == 3){
            result.textContent = 'You won!';
        }
        else  result.textContent = 'You lost!';
    }
    else if(i == 3){
        if(rand == 1 | rand == 4){
            result.textContent = 'You won!';
        }
        else  result.textContent = 'You lost!';
    }
    else if(i == 4){
        if(rand == 0 | rand == 2){
            result.textContent = 'You won!';
        }
        else  result.textContent = 'You lost!';
    }

}

function addIcon(rand){
    if(rand == 0){
        randomChoice.innerHTML = '<i class="far fa-hand-rock"></i>';
    }
    else if(rand == 1){
        randomChoice.innerHTML = '<i class="far fa-hand-paper"></i>';
    }
    else if(rand == 2){
        randomChoice.innerHTML = '<i class="far fa-hand-scissors"></i>';
    }
    else if(rand == 3){
        randomChoice.innerHTML = '<i class="far fa-hand-lizard"></i>';
    }
    else if(rand == 4){
        randomChoice.innerHTML = '<i class="far fa-hand-spock"></i>';
    }
}

for(let i = 0; i < 5; i++){
    choices[i].addEventListener('click', function(e){
        let computerChoice = Math.floor((Math.random() * 5));
        console.log(computerChoice);
        
        addIcon(computerChoice);

        if(i == computerChoice){
            result.textContent = 'Draw!';
            console.log('draw');
        }
        else checkTheWinner(i, computerChoice);
        
    })
}