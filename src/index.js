console.log("Hello World!!!");

import * as sdk from 'phenix-web-sdk';
import "./style.css";

console.log("1 WWWWWWWW",sdk);

console.log("1 WWWWWWWW",sdk);

console.log("2 WWWWWWWW",sdk);

const audioButton = document.getElementById('audioButton');

audioButton.addEventListener("click", clickEvent);

function clickEvent(){
    console.log("click bouton")
}

var isIphoneIpad = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
console.log(isIphoneIpad);