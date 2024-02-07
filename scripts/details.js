console.log("READY");
const minusBtn = document.querySelector('.btn__txt.input__minus');
const plusBtn = document.querySelector('.btn__txt.input__plus');
let userInput = document.querySelector('.btn__txt.input__number');


console.log(userInput,minusBtn,plusBtn);

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

