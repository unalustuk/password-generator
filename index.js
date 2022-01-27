const resultEl = document.getElementById("result-el")
const passLengthEl = document.getElementById("passlength-el")
const generateEl = document.getElementById("generate-el")
const numbersEl = document.getElementById("numbers-el")
const lowercaseEl = document.getElementById("lowercase-el")
const uppercaseEl = document.getElementById("uppercase-el")
const symbolsEl = document.getElementById("symbols-el")


const numbers ="0123456789"
const uppercaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseLetters ="abcdefghijklmnopqrstuvwxyz"
const symbols =`!@#$%^&*()_-+=:{[}]|;"'<,>.\?/`


let checked = []
let password =""

function checking() {
    const isUppercase = uppercaseEl.checked 
    const isLowercase = lowercaseEl.checked
    const isNumbers = numbersEl.checked 
    const isSymbols = symbolsEl.checked
 
     if(isUppercase){
         checked.push(uppercaseLetters)
     }
     if(isLowercase){
         checked.push(lowercaseLetters)
     }
     if(isNumbers){
         checked.push(numbers)
     }
     if(isSymbols){
         checked.push(symbols)
     }
 
     console.log(checked)
 
 
}



function generatePassword (){
    checking()
    for(let i =0;i< passLengthEl.value ;i++){
        let rand = (Math.floor(Math.random() * checked.length))
        password += checked[rand].charAt((Math.floor(Math.random() * checked[rand].length)))
    }

    console.log(password)
    resultEl.textContent = password
    password=""
    checked=[]



}



