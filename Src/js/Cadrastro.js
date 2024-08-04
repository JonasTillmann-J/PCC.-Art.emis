let password = document.getElementById("inputSenha")
let password2 = document.getElementById("inputSenha2")
let imgeye = document.getElementById("eyes")

function eyeopen(){
    if (password.type == "password"){
        password.type = "text"
        password2.type = "text"
        imgeye.src = "/imgs/eye-open.png"
    }else{
        password.type = "password"
        password2.type = "password"
        imgeye.src = "/imgs/eye-close.png"
    }
}