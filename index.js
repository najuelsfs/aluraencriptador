

const btnEncriptar = document.getElementById(`encriptar`);
const btnDesencriptar = document.getElementById(`desencriptar`);

const textarea = document.querySelector(".text");
const textresult = document.querySelector(".textarearesult");
const mensajealert = document.querySelector(".alerta2");
const copybtn = document.querySelector(".copy");

/*text.addEventListener('keyup', function (event) {
    if (event.getModifierState('CapsLock')) {
        alert("Bloq Mayús esta activado");
    }
})*/
function btnencript() {
    const encriptresult = encriptar(textarea.value)
    textresult.value = encriptresult;
    textarea.value = "";
    textresult.style.backgroundImage = "none"
    mensajealert.style.color ="white"
    copybtn.style.display ="block"
    

}
function encriptar(stringencript) {
    let matriz = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"],["a", "ai"]];
   

    for (let i = 0; i < matriz.length; i++){
        if(stringencript.includes(matriz[i][0])){
            stringencript = stringencript.replaceAll(matriz[i][0], matriz[i][1])
        } 
    }
    return stringencript

}
function btndesencript() {
    const encriptresult = desencriptar(textarea.value)
    textresult.value = encriptresult;
    textarea.value = "";
    textresult.style.backgroundImage = "none"
    mensajealert.style.color ="white"
    copybtn.style.display ="block"
}
function desencriptar(stringdesencript) {
    let matriz = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"],["a", "ai"]];
   

    for (let i = 0; i < matriz.length; i++){
        if(stringdesencript.includes(matriz[i][0])){
            stringdesencript = stringdesencript.replaceAll(matriz[i][1], matriz[i][0])
        } 
    }
    return stringdesencript

}

const copy=( )=> {
   let text = textresult.value
   navigator.clipboard.writeText(text)
   alert("texto copiado")
}
btnEncriptar.addEventListener('click', btnencript)
btnDesencriptar.addEventListener('click', btndesencript)
copybtn.addEventListener('click',copy)

