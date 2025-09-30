let mainContainer = document.querySelector('.main-container')
let displayContainer = document.querySelector('#display-container')

let displayUpperHalf = document.createElement('div')
displayUpperHalf.setAttribute('id', 'upper')
let displayLowerHalf = document.createElement('div')
displayLowerHalf.setAttribute('id', 'lower')

let calFunctions = '<,Cl,%,/,7,8,9,x,4,5,6,-,1,2,3,+,+/-,0,.,='
let n1 = ''
let n2 = ''
let operand = ''

function createCalc(){
    const cleanedSymbols = calFunctions.split(',').filter(c => c !== ',')
    createBtns(cleanedSymbols)
}


function createBtns(sym){
    let num = 0
    for(let x = 5; x > 0; x--){
        let btnContainer = document.createElement('div')
        btnContainer.setAttribute('class', 'btn-container')
        mainContainer.append(btnContainer)
        for(let y = 4; y > 0; y--){
            let btn = document.createElement('button')
            btn.innerText = `${sym[num]}`
            num++
            btn.innerText === '=' ? btn.setAttribute('id', 'equal') : btn.setAttribute('class','btn')
            btn.addEventListener('click', (e) => {
                toDisplay(e)
            })
            btnContainer.append(btn)
        }
    }
    let equal = document.querySelector('#equal')
    console.log(equal);
    
}




function toDisplay(e){
    if(e.target.innerText === '='){
        let input = document.querySelector('#upper')
        console.log(input.innerText.split(' '))
    } else {
        displayUpperHalf.append(e.target.innerText)
    }

}


createCalc()

const add = (a,b) => a + b
const subtract = (a,b) => b - a
const multiply = (a,b) => a * b
const divide = (a,b) => b / a

function operate(a,operator,b){
    switch (operator) {
        case '+':
            add(a,b)
            break;
        case '-':
            subtract(a,b)
            break;
        case '*':
            multiply(a,b)
            break;
        case '/':
            divide(a,b)
            break;
            default:
                break;
    }   
}
                    




displayContainer.append(displayUpperHalf)
displayContainer.append(displayLowerHalf)