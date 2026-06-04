const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateEl = document.getElementById("generate-btn")

const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")
const length = characters.length

function generatePassword(){
    let password1 = ""
    let password2 = ""
    for(let i=0;i<10;i++){
        let randomChar1 = characters[Math.floor(Math.random()*length)]
        let randomChar2 = characters[Math.floor(Math.random()*length)]
        password1 += randomChar1
        password2 += randomChar2
    }
    passwordOne.textContent = password1
    passwordTwo.textContent = password2
}

// From google search function to take the passwrod copied into use clipboard
function save(id){
    if(id=="password-one"){
        navigator.clipboard.writeText(passwordOne.innerText)
        passwordOne.textContent = "Copied!"
    }
    else{
        navigator.clipboard.writeText(passwordTwo.innerText)
        passwordTwo.textContent = "Copied!"
    }
        
}