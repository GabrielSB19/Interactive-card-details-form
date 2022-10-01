"use strict";

//Get Information in the Card
let cardMonth = document.querySelector(".card__details-month");
let cardYear = document.querySelector(".card__details-year");
let cardCVC = document.querySelector(".card-back__cvc");

//Add Name Input
let cardName = document.querySelector(".card__details-name");
let inputName = document.querySelector("#cardholder");

inputName.addEventListener('input', ()=>{
    cardName.innerText = inputName.value;
    if(inputName.value == ""){
        cardName.innerText = "Jane Appleseed";
    }    
})

//Add Number Input
let cardNumber = document.querySelector(".card__number");
let inputNumber = document.querySelector("#cardnumber");
let errorNumber = document.querySelector(".form__cardnumber-error");

inputNumber.addEventListener('input', (e)=>{
    if(inputNumber.value == ""){
        cardNumber.innerText = "0000 0000 0000 0000";
        styleInputNumber("", "hsl(270, 3%, 87%)");
    } else {
        splitNumber(inputNumber.value);
        validateNumber(inputNumber.value);
    }
})

const validateNumber = number =>{
    let size = number.length;
    let count = 0;
    for (let i = 0; i < size; i++) {
        if((number.charAt(i) >= 48 || number.charAt(i) <= 57) && number.charAt(i).charCodeAt() != 32){
            count++;
        }
    }
    count == size ? styleInputNumber("", "hsl(270, 3%, 87%)") :  styleInputNumber("No letters or space allowed", "hsl(0, 100%, 66%)");
}

const styleInputNumber = (msg, style) =>{
    errorNumber.innerText = msg;
    inputNumber.style.border = `1px solid ${style}`;
}

const splitNumber = n =>{
    let str = "";
    for (let i = 0; i < (16-n.length); i++) {
        str += "0";        
    }
    str += n
    str = str.substring(0,4) + " " + str.substring(4,8)+ " "+ str.substring(8,12) + " " + str.substring(12,16);
    cardNumber.innerText = str;
}
