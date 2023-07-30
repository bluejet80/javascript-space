
//inputs
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const num3 = document.getElementById('num3')
const num4 = document.getElementById('num4')


// buttons
const btnOne = document.getElementById('btn-one')
const btnTwo = document.getElementById('btn-two')

// outputs
const resultOne = document.getElementById('result-one')
const resultTwo = document.getElementById('result-two')


// main part

// multiply

const multiplyNum = (num1,num2) => num1 * num2

const printNum = function(num3,num4) {
    const numArray = []
    for(let i = 0; i < num4; i++){
        numArray.push(num3)
    }
    return numArray.join('')
}

const buttonOnePush = function() {
    const result = multiplyNum(num1.value, num2.value)
    const html = `
        <h2 class='return-result'>${result}</h2>
    `
    resultOne.insertAdjacentHTML('beforeend',html)
}

btnOne.addEventListener('click',buttonOnePush)