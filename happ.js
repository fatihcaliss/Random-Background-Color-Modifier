const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const man = document.getElementById("bg-change");
let colorcode = document.getElementById("color-code");
let inner = document.getElementsByClassName('inner-content')[0];

btn.addEventListener('click', () => {
    let hexColor  = '#';
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
        }
        man.style.backgroundColor = hexColor;
        colorcode.innerHTML = hexColor;
        colorcode.style.fontWeight = 800;

})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}