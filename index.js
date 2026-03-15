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
    ".","?","/"]

let generateBtnEl = document.getElementById("generate-btn")
let passwordOneEl = document.getElementById("passwordOne")
let passwordTwoEl = document.getElementById("passwordTwo")
let passwordButtons = document.querySelectorAll(".password-btn")
let editBtnEl = document.getElementById("edit-btn")
let isEditing = false
let originalPasswordOne = ""
let originalPasswordTwo = ""
let announcer = document.getElementById("a11y-announcer")

passwordButtons.forEach(button => {
    button.addEventListener("click", copyPassword)
    button.addEventListener("keydown", editMaxLength)
})

generateBtnEl.addEventListener("click", generatePasswords)
editBtnEl.addEventListener("click", toggleEditMode)

document.addEventListener("click", function(event) {
    if (isEditing === true) {
        let isClickOnEditBtn = (event.target.id === "edit-btn")
        let isClickOnPassword = (event.target.classList.contains("password-btn"))
        if (isClickOnEditBtn === false && isClickOnPassword === false) {
            passwordOneEl.textContent = originalPasswordOne;
            passwordTwoEl.textContent = originalPasswordTwo;
            toggleEditMode()
            announcer.textContent = "Edit cancelled. Original passwords restored."
        }
    }
})

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
    announcer.textContent = "New passwords generated successfully."
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
    announcer.textContent = "Password copied to clipboard!"

    setTimeout(function(){ clickedButton.textContent = password},1500)
}

function toggleEditMode() {
    isEditing = !isEditing 
    if(isEditing === true) {
        originalPasswordOne = passwordOneEl.textContent;
        originalPasswordTwo = passwordTwoEl.textContent;
        editBtnEl.textContent = "Save"
        announcer.textContent = "Edit mode activated. You can now edit your passwords."
        passwordButtons.forEach((button,index) => {
            button.setAttribute("contenteditable", "true") 
            button.classList.add("editable") 
            if(index === 0) {
                 button.setAttribute("aria-label", "Edit first password")
            } else {
                 button.setAttribute("aria-label", "Edit second password")
            }
        })
    }else {
        editBtnEl.textContent = "Edit"
        announcer.textContent = "Passwords saved. Edit mode deactivated."
        passwordButtons.forEach((button, index) => {
            button.removeAttribute("contenteditable")
            button.classList.remove("editable")
            if(index === 0) {
                 button.setAttribute("aria-label", "Copy first password to clipboard")
            } else {
                 button.setAttribute("aria-label", "Copy second password to clipboard")
            }
        })
    }
}

function editMaxLength(event){
    if (event.key === "Enter") {
        event.preventDefault()
        return
    }
    if (event.key === "Backspace" || event.key === "Delete" || event.key.includes("Arrow")) {
        return
    }
    if (event.ctrlKey || event.metaKey) {
        return
    }
    if (event.target.textContent.length >= 15) {
        if (window.getSelection().toString().length === 0) {
            event.preventDefault()
            announcer.textContent = "Maximum length of 15 characters reached." 
        }
    }
}



