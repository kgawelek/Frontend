const choices = Array.from(document.querySelectorAll('.user_choice'));
const result = document.querySelector('#result');
let randomChoice = document.querySelector('#random_choice');


function checkTheWinner(i, rand){

}

function addIcon(rand){
    if(rand == 0){
        randomChoice.innerHTML = '<i class="far fa-hand-rock"></i>';
    }
}

for(let i = 0; i < 4; i++){
    choices[i].addEventListener('click', function(e){
        let computerChoice = Math.floor((Math.random() * 4));
        console.log(computerChoice);
        
        addIcon(computerChoice);

        if(i == computerChoice){
            result.textContent = 'Draw!';
            console.log('draw');
        }
        

    })
}