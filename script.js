'use strict';

//selecting the elements for manipulation
const left = document.querySelector('#left');
const middle = document.querySelector('#middle');
const right = document.querySelector('#right');



//selecting the outputs
const sum = document.querySelector('#box');
const btn = document.querySelector('.btn');


//syntax : <element name>.addEventListener(click,function()
// {
//     //function body
// })

btn.addEventListener('click',function () {
    //Random function for number between x1 and x2
//1 to 100
// Math.floor(Math.random()*(x2) + x1)

const random1 = Math.floor(Math.random()*(6)+1);
const random2 = Math.floor(Math.random()*(6)+1);
const random3 = Math.floor(Math.random()*(6)+1);
//left.src = `dice/dice-${random1}.png`;

//left.textContent=random1;
//middle.textContent=random2;
//right.textContent=random3;
//console.log(`/dice/dice-${random1}.png`);
//const onedice = document.querySelector('.one-dice');
document.querySelector('.one-dice').src=`dice-${random1}.jpg`;
document.querySelector('.two-dice').src=`dice-${random2}.jpg`;
document.querySelector('.three-dice').src=`dice-${random3}.jpg`;
const total=random1+random2+random3;
sum.textContent=`Sum : ${total}`;

//concept of backticks
//js -> " "
//js -> ` `    ----------------------------------------------------------------
//syntax : ` ${total}`




})


// radome1 -> 2
// dice-${random1}.jpg