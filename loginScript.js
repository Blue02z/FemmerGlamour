let email = document.getElementById("email")
let senha = document.getElementById("senha")
let form = document.querySelector("form")
let content = document.querySelector(".content")
let content2 = document.querySelector(".content2")
let senhaConfirmar = document.getElementById("senhaConfirmar")
let emailRegistrado = document.getElementById("email-registrado")
let visibilidade = document.getElementById("visibilidade")
let visibilidade2 = document.getElementById("visibilidade2")
let inputs = document.querySelectorAll(".inputs")
let erro = document.getElementById("error")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(email.value !== "" && senha.value !== ""){
        console.log("insira valores")
        if(senhaConfirmar.value == senha.value){
            console.log("certo")
            content.classList.remove("active")
            content2.classList.add("active")
            emailRegistrado.innerHTML = `${email.value}`
        }
    }else{
        console.log("nada")
    }
   
    

    
})


visibilidade.addEventListener("click", function(){
    if(senha.type === "password"){
        senha.setAttribute("type", "text")
        visibilidade.innerHTML = "visibility_off "

    }else{
        senha.setAttribute("type", "password")
        visibilidade.innerHTML = "visibility"
    }
    

})

visibilidade2.addEventListener("click", function(){
    if(senhaConfirmar.type === "password"){
        senhaConfirmar.setAttribute("type", "text")
    }else{
        senhaConfirmar.setAttribute("type", "password")
    }
    

})

console.log(inputs[1])
let lista = ["1", "a", "9", "o", "4", "f"]
form.addEventListener("submit", (i) => {
    i.preventDefault()
    
    for(o = 0; o <= 6; o++){
        if(inputs[o].value === ""){
            console.log("Você não digitou nada")
        }else{
            if(inputs[o].value === lista[o]){
                console.log("oiiiii")
            }else{
                console.log("insira um valor valido")
                error.innerHTML = `<h2 style="color: red; text-decoration: none;">insira um valor válido</h2>`
            }
        }
    }
    
})

