const btn = document.getElementById('btn');
const man = document.getElementById("bg-change");
let colorcode = document.getElementById("color-code");

btn.addEventListener('click', () => {
        let rgb = `rgb(${x()},${x()},${x()})`;
        man.style.backgroundColor = rgb;
        colorcode.innerHTML = rgb;
        colorcode.style.fontWeight = 800;

})

let x = function getRandomNumber(){
    return Math.floor(Math.random() * 256);
}