// lets start with selecting elements
// lets create Array
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
// lets select button
const hexBtn = document.querySelector('.hexBtn');
// let say what needs to happend after press click-background needs to change
const bodyBgc = document.querySelector('body');
// let select span
const hex = document.querySelector('.hex');

hexBtn.addEventListener('click',getHex);

function getHex(){
    let hexCol = "#";

for(let i = 0; i<6; i++){
    let random = Math.floor(Math.random()*hexNumbers.length);
    hexCol += hexNumbers[random];
}

bodyBgc.style.backgroundColor = hexCol;
hex.innerHTML = hexCol;

}