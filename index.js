let log = document.querySelector('#log')
const input = document.querySelector('#answer');
const button = document.querySelector('#output');
const firstBlank = document.querySelector('#firstNumber');
const secondBlank = document.querySelector('#secondNumber');

// function 난수생성() {
//   let firstRandomNumber = Math.floor(Math.random() * 20);
//   let secondRandomNumber = Math.floor(Math.random() * 20);
  
//   firstBlank.value = firstRandomNumber;
//   secondBlank.value = secondRandomNumber;
//   let answerNumber = firstRandomNumber * secondRandomNumber;  
//   console.log(answerNumber)  
// }
// 난수생성();
let firstRandomNumber = Math.floor(Math.random() * 20);
let secondRandomNumber = Math.floor(Math.random() * 20);

firstBlank.value = firstRandomNumber;
secondBlank.value = secondRandomNumber;
let answerNumber = firstRandomNumber * secondRandomNumber;  

console.log(answerNumber)  

button.addEventListener('click', () => {
  if (input.value) {
    let inputNumber = Number(input.value);
    if (inputNumber === answerNumber) {
      log.textContent = `correct ! ${answerNumber} !`
      input.value = '';
    } else {
      log.textContent = `wrong!`
    }
  }
})