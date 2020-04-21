const pola = Array.from(document.querySelectorAll('.plansza div.pola'));
console.log('pola :', pola);


let nazwaGracza = document.querySelector('#gracz');
let gracz = 0; // 0 -> runda gracza A, 1 -> runda gracza B
let wygrany = 'Remis'

mozliwosciWygranych = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

function wypiszZwyciezce(wygrany){
    console.log(wygrany);

    poleWygranego = document.querySelector('#zwyciezca');

    poleWygranego.textContent = wygrany + '!';
}

let iloscSprawdzen = 0;

function sprawdzWygranego(gracz){
    
    for(let i = 0; i < mozliwosciWygranych.length; i++){
        
        if(gracz % 2 == 1){ // po zagraniu gracza A, sprawdzamy X
            if( pola[mozliwosciWygranych[i][0]].innerText == 'X'
                && pola[mozliwosciWygranych[i][1]].innerText == 'X'
                && pola[mozliwosciWygranych[i][2]].innerText == 'X'
                ){
                    wygrany = 'Wygrał Gracz A';
                    wypiszZwyciezce(wygrany);
                }
        }

        else{
            // po zagraniu gracza B, sprawdzam O
            if( pola[mozliwosciWygranych[i][0]].innerText == 'O'
                && pola[mozliwosciWygranych[i][1]].innerText == 'O'
                && pola[mozliwosciWygranych[i][2]].innerText == 'O'
                ){
                    wygrany = 'Wygrał Gracz B';
                    wypiszZwyciezce(wygrany);
                }

        }
    }
    iloscSprawdzen++;
    if(iloscSprawdzen == 9){
        wypiszZwyciezce(wygrany);
    }
}

for(let j = 0; j < 9; j++){
    pola[j].addEventListener('click', function(e){
        if(gracz % 2 == 0 && pola[j].innerText == '' && wygrany == 'Remis'){
            pola[j].textContent = 'X';
            gracz++;
            nazwaGracza.textContent = 'Gracz B';
        }
        else if (pola[j].innerText == '' && wygrany == 'Remis'){
            pola[j].textContent = 'O';
            gracz++;
            nazwaGracza.textContent = 'Gracz A';
        }

        sprawdzWygranego(gracz);
    });
}





