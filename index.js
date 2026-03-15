const characters = [
    "A","B","C","D",
    "E","F","G","H",
    "I","J","K","L",
    "M","N","O","P",
    "Q","R","S","T",
    "U","V","W","X",
    "Y","Z","a","b",
    "c","d","e","f",
    "g","h","i","j",
    "k","l","m","n",
    "o","p","q","r",
    "s","t","u","v",
    "w","x","y","z",
    "0","1","2","3",
    "4","5","6","7",
    "8","9","~","`",
    "!","@","#","$",
    "%","^","&","*",
    "(",")","_","-",
    "+","=","{","[",
    "}","]",",","|",
    ":",";","<",">",
    ".","?","/"];

let generateBtnEl = document.getElementById("generate-btn")
let passwordOneEl = document.getElementById("passwordOne")
let passwordTwoEl = document.getElementById("passwordTwo")
let passwordButtons = document.querySelectorAll(".password-btn")
let editBtnEl = document.getElementById("edit-btn");
let isEditing = false; 

passwordButtons.forEach(button => {
    button.addEventListener("click", copyPassword)
})

generateBtnEl.addEventListener("click", generatePasswords)
editBtnEl.addEventListener("click", toggleEditMode)

function generatePasswords() {
    if(isEditing){return}
    let password_one = ""
    let password_two = ""
    for(let i=0;i<15;i++){
        password_one += characters[getRandomNum()]
        password_two += characters[getRandomNum()]
    }
    passwordOneEl.textContent = password_one
    passwordTwoEl.textContent = password_two
}

function getRandomNum(){
    return Math.floor(Math.random() * characters.length) 
}

function copyPassword(event){
    if(isEditing === true) { return}
    let clickedButton = event.target
    let password = clickedButton.textContent
    if(password === "" || password === "Copied to clipboard!"){return}
    navigator.clipboard.writeText(password)
    clickedButton.textContent = "Copied to clipboard!"

    setTimeout(function(){ clickedButton.textContent = password},2000)
}

function toggleEditMode() {
    isEditing = !isEditing 
    if (isEditing === true) {
        editBtnEl.textContent = "Save"
        passwordButtons.forEach(button => {
            button.setAttribute("contenteditable", "true") 
            button.classList.add("editable") 
        })
    } else {
        editBtnEl.textContent = "Edit";
        passwordButtons.forEach(button => {
            button.removeAttribute("contenteditable")
            button.classList.remove("editable")
        })
    }
}

//TODO: add responsive design, accessibility, border animation