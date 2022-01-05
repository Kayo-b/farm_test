// const btn = document.querySelector("#cow");
// const btn2 = document.querySelector("#chicken")
// const btn3 = document.querySelector("#pig");

// function play(){
//     // var audio = new Audio("frishycow.wav")
//     alert("test");
// }

var buttons = document.querySelectorAll("button");



for(let x in buttons){
    buttons[x].addEventListener('click', () => {
    var audio = document.querySelectorAll("audio");
    audio[x].play();
    });
}
// buttons[1].addEventListener('click', () => {
//     var audio = document.querySelectorAll("audio");
//     audio[1].play();
// });
