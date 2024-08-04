let password = document.getElementById("inputSenha")
let imgeye = document.getElementById("eyes")

function eyeopen(){
    if (password.type == "password"){
        password.type = "text"
        imgeye.src = "/imgs/eye-open.png"
    }else{
        password.type = "password"
        imgeye.src = "/imgs/eye-close.png"
    }
}

/*
function btnentrar() {
    alert("funfo o botão de entrar")
}*/
