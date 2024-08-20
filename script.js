let pesquisa = document.getElementById("pesquisa");
let barra = document.querySelector(".barradepesquisa")
let sair = document.getElementById("sair")
let botao_mais = document.querySelector(".more-categoria")
let categoria_container = document.querySelector(".categoria-container")
let categoria_container2 = document.querySelector(".categoria-container2")
let categoria_container3 = document.querySelector(".categoria-container3")
let corpo = document.getElementById("main")
let search = document.getElementById("search-input")
let searchContainer = document.querySelector(".search")
let body = document.body;
let imgProduto = document.querySelectorAll(".img-produto")
let favoritar = document.querySelectorAll(".favoritar")
let carrinho = document.querySelector(".carrinho")
let popUp = document.getElementById("pop-up")
let containerConta = document.querySelector(".container-conta")
let conta = document.getElementById("conta")
let favNoti = document.getElementById("popUpNoti")
let mostrarMenos = document.getElementById("mostrar_menos")


pesquisa.addEventListener("click", function(){
    barra.classList.add("active")
    console.log("oiiiii")
    corpo.style = "opacity: 70%; cursor:default;";    
})

search.addEventListener("click", function(){
    searchContainer.style = "outline:hsla(202, 80%, 45%, 0.800) 4px solid"
})

corpo.addEventListener("click", function(){
    barra.classList.remove("active")
    corpo.style = "";    
    searchContainer.style = "";
})



sair.addEventListener("click", function(){
    barra.classList.remove("active")
    console.log("oiiiii")
    corpo.style = "";    
    
})

botao_mais.addEventListener("click", function(){
    categoria_container2.classList.add("active")
    categoria_container.style = "display:none"
    botao_mais.classList.remove("active")
})

mostrarMenos.addEventListener("click", function(){
    categoria_container2.classList.remove("active")
    categoria_container.style = "display:flex"
    botao_mais.classList.add("active")
})


conta.addEventListener("mouseover", function(){
        containerConta.classList.add("active")
})

conta.addEventListener("mouseout", function(){
    containerConta.classList.remove("active")
})


const carrinhoo = document.querySelectorAll('.carrinho');
let i = 1;

carrinhoo.forEach((botao) => {
    botao.addEventListener('click', function() {
        if(botao.classList.contains("active")){
            botao.classList.remove("active")
            botao.innerHTML =`<span class="material-symbols-outlined">
            shopping_bag
            </span>
            </span> <h3>Add no carrinho</h3>` 
            botao.style = "background-color: transparent;color:black;outline:black 2px solid; transition:0.3s;";
            popUp.innerHTML = ` <p>${i - 1}</p>`;

        }else{
            popUp.innerHTML = ` <p>${i++}</p>`;
            popUp.classList.add("active")
            botao.innerHTML = ` <h3>Adicionado</h3> <span class="material-symbols-outlined">
            done
            </span>` 
            botao.style = "background-color: #4EA331;color:white;outline:none; transition:0.3s;";
            botao.classList.add("active")
        };

        
    });
});


imgProduto.forEach((favorito, indiceFav) => {
    favorito.addEventListener("mouseover", () => {
        favoritar[indiceFav].classList.add("active");
    }
    )
  

    

    favorito.addEventListener("mouseleave", () => {
        favoritar[indiceFav].classList.remove("active");
    }
    )

    favoritar[indiceFav].addEventListener("click", () =>{
        favoritar[indiceFav].classList.toggle("clock");
        favNoti.classList.add("active")
        
    })
    


    
})

