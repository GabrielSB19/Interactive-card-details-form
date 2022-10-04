"use strict";

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

//Get EXP Date
let cardMonth = document.querySelector(".card__details-month");
let cardYear = document.querySelector(".card__details-year");
let inputMonth = document.querySelector("#cardmonth");
let inputYear = document.querySelector("#cardyear");
let errorMonth = document.querySelector(".form__input-mm--error");
let errorYear = document.querySelector(".form__input-yy--error");

inputMonth.addEventListener('input', (e)=>{
    if(inputMonth.value == ""){
        cardMonth.innerText = "00"
    } else {
        if(inputMonth.value <= 12 || inputMonth > 0){
            cardMonth.innerText = splitMonth(inputMonth.value); 
            styleInputMonth("", "hsl(270, 3%, 87%)");
        } else {
            styleInputMonth("month no valid", "hsl(0, 100%, 66%)")
        }
    }
})

const styleInputMonth = (msg, style)=>{
    errorMonth.innerText = msg;
    inputMonth.style.border = `1px solid ${style}`
}

const splitMonth = e =>{
    if(e.length == 1){
        return "0"+e
    } else {
        return e
    }
}

inputYear.addEventListener('input', (e)=>{
    if(inputYear.value == ""){
        cardYear.innerText = "00"
        styleInputYear("", "hsl(270, 3%, 87%)");
    } else {
        if(inputYear.value <= 2050 && inputYear.value > 2022){
            cardYear.innerText = inputYear.value 
            styleInputYear("", "hsl(270, 3%, 87%)");
        } else {
            styleInputYear("year no valid", "hsl(0, 100%, 66%)")
        }
    }
})

const styleInputYear = (msg, style)=>{
    errorYear.innerText = msg;
    inputYear.style.border = `1px solid ${style}`
}

//Get CVC

let cardCVC = document.querySelector(".card-back__cvc");
let inputCVC = document.querySelector("#cardcvc");

inputCVC.addEventListener('input', e => {
    if(inputCVC.value == ""){
        cardCVC.innerText = "000";
    } else {
        cardCVC.innerText = splitCVC(inputCVC.value);
    }
})

const splitCVC = e =>{
    let str = ""
    for (let i = 0; i < 3-e.length; i++) {
        str += "0";
    }

    return str += e
}