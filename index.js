
const btnEncriptar = document.getElementById(`encriptar`);
const btnDesencriptar = document.getElementById(`desencriptar`);

const textarea = document.getElementById(`text`);
const textresult = document.getElementById(`textarearesult`);
const keyList = Object.entries({
    "a": 'ai',
    "e": 'enter',
    "i": 'imes',
    "o": 'ober',
    "u": 'ufat',
});
text.addEventListener('keyup', function (event) {
    if (event.getModifierState('CapsLock')) {
        alert("Bloq Mayús esta activado");
    }
});
function encriptar() {
    let mensaje = text.value;
    let caracter = mensaje.split("");
    var cripto = {
        'a': "ai",
        'e': "enter",
        'i': "imes",
        'o': "ober",
        'u': "ufat"
    };
    var encriptado = "";
    for (var i = 0; i < caracter.length; i++) {
        if (cripto[caracter[i]] === undefined) {
            encriptado = encriptado + caracter[i];
        } else {
            encriptado = encriptado + cripto[caracter[i]];
        }
    }
    resultadohtml(encriptado)
}

btnEncriptar.addEventListener('click', encriptar);

function resultadohtml(encriptado) {
    textresult.innerHTML = '<textarea>${encriptado} </textarea><button class="btnCopiar">Copiar</button>'
};


