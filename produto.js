let pesquisa = document.getElementById("pesquisa");
let barra = document.querySelector(".barradepesquisa")
let sair = document.getElementById("sair")
let corpo = document.getElementById("main")
let search = document.getElementById("search-input")
let myImg = document.getElementById("myimg")
let searchContainer = document.querySelector(".search")
let body = document.body;
let miniImagens = document.querySelectorAll(".imgz")
let imagemPrincipal = document.querySelector(".img-principal")
let favoritar = document.querySelectorAll(".favoritar")
let tamanho = document.querySelectorAll('.tamanho')
let imgProduto = document.querySelectorAll(".img-produto")
let favoritar2 = document.querySelectorAll(".favoritar2")
let carrinho = document.querySelectorAll(".carrinho_suge")
let imgComent = document.querySelectorAll(".img-coment")
let imgUser = document.getElementById("imgs_usuario")
pesquisa.addEventListener("click", function(){
    barra.classList.add("active")
    corpo.style = "opacity: 70%; cursor:default;";    
})

search.addEventListener("click", function(){
    searchContainer.style = "outline:hsla(202, 80%, 45%, 0.800) 4px solid"
})





sair.addEventListener("click", function(){
    barra.classList.remove("active")
    console.log("CUUUUU")
    corpo.style = "";    
    
})

conta.addEventListener("mouseover", function(){
    containerConta.classList.add("active")
})

conta.addEventListener("mouseout", function(){
containerConta.classList.remove("active")
})


miniImagens.forEach((o, op) => {
    o.addEventListener("mouseover", function(){
        imagemPrincipal.innerHTML = `<img src="${miniImagens[op].getAttribute('src')}">`
        console.log("Oi")
        console.log(o)
        console.log(op)
        console.log(sic)
    })
    
}
    
)

favoritar.forEach((fav, favpo) =>{
    fav.addEventListener("click", function(){
        fav.classList.toggle("active")
    })
})

tamanho.forEach((tam, tampo) =>{
    tam.addEventListener("click", function(){
        tam.classList.toggle("active")

        
    } )
})

imgProduto.forEach((favorito, indiceFav) => {
    favorito.addEventListener("mouseover", () => {
        favoritar2[indiceFav].classList.add("active");
    }
    )
  

    

    favorito.addEventListener("mouseleave", () => {
        favoritar2[indiceFav].classList.remove("active");
    }
    )

    favoritar2[indiceFav].addEventListener("click", () =>{
        favoritar2[indiceFav].classList.toggle("clock");
        favNoti.classList.add("active")
        
    })
    


    
})


carrinho.forEach((botao) => {
    botao.addEventListener('click', function() {
        console.log("oi")
        if(botao.classList.contains("active")){
            botao.classList.remove("active")
            botao.innerHTML =`<span class="material-symbols-outlined">
            shopping_bag
            </span>
            </span> <h3>Add no carrinho</h3>` 
            botao.style = "background-color: transparent;color:black;outline:black 2px solid; transition:0.3s;";
        }else{

            botao.innerHTML = ` <h3>Adicionado</h3> <span class="material-symbols-outlined">
            done
            </span>` 
            botao.style = "background-color: #4EA331;color:white;outline:none; transition:0.3s;";
            botao.classList.add("active")
        };

        
    });
});

imgComent.forEach((img)=>{
    img.addEventListener("click", function(){
        imgUser.innerHTML = `<img src="${img.getAttribute("src")}">`
    })
})