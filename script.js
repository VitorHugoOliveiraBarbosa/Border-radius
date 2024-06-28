let container = document.getElementById("principal");
let tamanho = document.getElementById("tamanho");
let copy = document.getElementById('btnCopy')
let mudar = document.getElementById('btnMudar')

mudar.addEventListener('click',()=>{
    container.style.cssText = tamanho.value;
});

copy.addEventListener('click',() =>{
    tamanho.select();
    navigator.clipboard.writeText(tamanho.value)
    alert('Texto copiado: '+tamanho.value)
}
);

function mostrarTexto(a) {
    a.innerText = "Modifique os valores anterios a % ex: 10% 15% 20% 25%";
}
function ocultarTexto(a) {
    a.innerText = "?";
}
