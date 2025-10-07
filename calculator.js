let calculator = document.querySelector('.main-container')
let displayContainer = document.querySelector('#display-container')

let displayUpperHalf = document.createElement('div')
displayUpperHalf.setAttribute('id', 'upper')
let displayLowerHalf = document.createElement('div')
displayLowerHalf.setAttribute('id', 'lower')


let calFunctions = ['<<','Cl','%','/',7,8,9,'x',4,5,6,'-',1,2,3,'+','+/-',0,'.','=']

function createCalc(){
    const cleanedSym = calFunctions.filter(c => c !== ',')
    addBtns(cleanedSym)
}

function addBtns(sym){
    let num = 0

    for(let x = 5; x > 0; x--){
        let btnContainer = document.createElement('div')
        btnContainer.setAttribute('class', 'btn-container')
        calculator.append(btnContainer)
        for(let y = 4; y > 0; y--){
            const btn = document.createElement('button')
            btn.innerText = `${sym[num]}`
            if( btn.innerText === '='){
                 btn.setAttribute('id', 'equal')
            } else if(btn.innerText === 'Cl'){
                btn.setAttribute('id','clear')
            } else {
                btn.setAttribute('class','btn')
            }  
            btn.addEventListener('click', (e) => e.target.innerText === '=' ? operate(e) : displayUpperHalf.append(e.target.innerText))
            btnContainer.append(btn)
            num++
        }
    }    
}

const add = (a,b) => a + b
const subtract = (a,b) => b - a
const multiply = (a,b) => a * b
const divide = (a,b) => b / a



function postResults(){
    displayLowerHalf.innerText = `${one}`
    displayUpperHalf.innerText = ''
}


function operate(e){
    let operation = 
    document.querySelector('#upper').innerText
    .split('')
    .filter(e => calFunctions.includes(e))
    .join('')

    let equation = document.querySelector('#upper').innerText

    let numbers = equation.split(operation).filter(Boolean).map(n => parseInt(n))

    switch (operation) {
        case '+':
            if(numbers.length < 2){
                let result = parseInt(document.querySelector('#lower').innerText)
                let one = add(result,numbers[0])
                displayLowerHalf.innerText = `${one}`
                displayUpperHalf.innerText = ''
                postResults()
            } else {
                let two = add(numbers[0],numbers[1])
                displayLowerHalf.innerText = two
                displayUpperHalf.innerText = ''
            }
            break;
        case '-':
            if(numbers.length < 2){
                let result = parseInt(document.querySelector('#lower').innerText)
                let one = subtract(numbers[0],result)
                displayLowerHalf.innerText = `${one}`
                displayUpperHalf.innerText = ''
            } else {
                let two = subtract(numbers[1],numbers[0])
                displayLowerHalf.innerText = two
                displayUpperHalf.innerText = ''
            }
            break;
        case '/':
            if(numbers.length < 2){
                let result = parseInt(document.querySelector('#lower').innerText)
                let one = divide(numbers[0],result)
                displayLowerHalf.innerText = `${one}`
                displayUpperHalf.innerText = ''
            } else {
                let two = divide(numbers[1],numbers[0])
                displayLowerHalf.innerText = two
                displayUpperHalf.innerText = ''
            }
            break;
        case 'x':
            if(numbers.length < 2){
                let result = parseInt(document.querySelector('#lower').innerText)
                let one = multiply(numbers[0],result)
                displayLowerHalf.innerText = `${one}`
                displayUpperHalf.innerText = ''
            } else {
                let two = multiply(numbers[1],numbers[0])
                displayLowerHalf.innerText = two
                displayUpperHalf.innerText = ''
            }
            default:
                break;
            }      
            
    operation = ''
}



createCalc()


displayContainer.append(displayUpperHalf)
displayContainer.append(displayLowerHalf)