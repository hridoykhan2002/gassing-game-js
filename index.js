
let wonNumber =0;
let lostNumber =0;
let attemptAll =5;
let attempts =0;



const cardBody = document.querySelector(".card-body");
const form = document.querySelector("form");
const inputValue = document.querySelector("#input-value");
const button = document.querySelector(".button");
const resulttext = document.querySelector(".result-box");
const remaningAttempt = document.querySelector(".remening-attempt");
const resultMessage = document.createElement("p");


form.addEventListener("submit",function(event){
    event.preventDefault();
    attempts++;
    if(attempts===5){
        inputValue.disabled = true;
        button.disabled = true;
    }if(attempts<6){
        chackResult(inputValue.value);
        remaningAttempt.innerHTML = `Remening Attempts ${attemptAll-attempts}`
    }
    inputValue.value = "";
})
function chackResult(inputValue) {
    const randomnumber = getRandomNumber(5);
    if(inputValue == randomnumber){
        resulttext.innerHTML = `You Have Won`
        wonNumber++;
    }else{
        resulttext.innerHTML = `You Have Lost Random Number Was: ${randomnumber}`
        lostNumber++;
    }
    resultMessage.classList.add("result-message");
    cardBody.appendChild(resultMessage);
    resultMessage.innerHTML =`You Won : ${wonNumber} you lost : ${lostNumber}`
};
function getRandomNumber(limit) {
    return Math.floor(Math.random()*limit)+1;
};