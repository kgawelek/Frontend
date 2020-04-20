const tekst = document.getElementById('main');
const arr = Array.from(document.getElementsByClassName('tekst'));
const linki = Array.from(document.getElementsByTagName('a'));

console.log('linki :', linki);
console.log(arr);
console.log(Array.isArray(arr));

const nawigacja = Array.from(document.querySelectorAll('.nawigacja div.przycisk'));
console.log('nawigacja :', nawigacja);
for(let i = 0; i < nawigacja.length; i++){
    if((nawigacja[i].innerText).toString() == "Kontakt"){
        nawigacja[i].textContent = "Facebook" 
    }
}

const podtytul = document.querySelector("#podtytul");
const temp = document.createElement('p');
const doDodania = document.createTextNode("!");

podtytul.appendChild(temp.appendChild(doDodania));

const szukaj = document.querySelector("#szukaj");
szukaj.addEventListener('click', function(e){
    console.log(e);
});

const formularz = document.forms['szukanie'];

formularz.addEventListener('submit', function(e){
    e.preventDefault();
    const szukane = formularz.querySelector('input[type="text"]').value;
    console.log('szukane :', szukane);
    formularz.querySelector('input[type="text"]').value = '';

    const nawigacja = Array.from(document.querySelectorAll('.nawigacja div.przycisk'));
    for(let i = 0; i < nawigacja.length; i++){
        if((nawigacja[i].innerText).toLowerCase() == szukane.toLowerCase()){
           console.log('znaleziono');
        }
    }
});