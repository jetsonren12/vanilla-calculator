let mainContainer = document.querySelector('.main-container')
let display = document.querySelector('#display')


function createCalc(){
    for(let x = 5; x > 0; x--){
        let btnContainer = document.createElement('div')
        mainContainer.append(btnContainer)
        for(let y = 4; y > 0; y--){
            let btn = document.createElement('button')
            btn.innerText = 'button'
            btn.setAttribute('class','btn')
            btnContainer.append(btn)
        }
    }
}

createCalc()

const add = (a,b) => a + b
const subtract = (a,b) => b - a
const multiply = (a,b) => a * b
const divide = (a,b) => b / a

let n1 = 1
let n2 = 31
let operand = '*'


function operate(a,b,operator){
    switch (operator) {
        case '+':
            console.log(add(a,b))
            break;
        case '-':
            console.log(subtract(a,b))
            break;
        case '*':
            console.log(multiply(a,b))
            break;
        case '/':
            console.log(divide(a,b))
            break;
            default:
                break;
            }   
        }
                    
operate(n1,n2,operand)

display.append(n1)