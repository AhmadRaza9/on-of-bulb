'use strict';
const img = document.getElementById('img');
const OnBtn = document.getElementById('on');
const OfBtn = document.getElementById('of');

let onBulb = 'on.png';
let ofBulb = 'of.png';


OnBtn.addEventListener('click',function(){
    img.src = onBulb;

});

OfBtn.addEventListener('click',function(){
    
    img.src = ofBulb;

})