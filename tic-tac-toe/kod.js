const pola = Array.from(document.querySelectorAll('.plansza div.pola'));
console.log('pola :', pola);

let nazwaGracza = document.querySelector('#gracz');
let gracz = 0;
for(let j = 0; j < 9; j++){
    pola[j].addEventListener('click', function(e){
        if(gracz % 2 == 0){
            pola[j].textContent = 'X';
            gracz++;
            nazwaGracza.textContent = 'Gracz B';
        }
        else{
            pola[j].textContent = 'O';
            gracz++;
            nazwaGracza.textContent = 'Gracz A';
        }
    });
}




