function criptografar() {
    let texto = document.getElementById('inputText').value;
    let textoCriptografado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById('outputText').value = textoCriptografado
}

function descriptografar() {
    let texto = document.getElementById('inputText').value;
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('outputText').value = textoDescriptografado;
}

function copiarTexto() {
    let textoCopiar = document.getElementById('outputText');
    textoCopiar.select();
    textoCopiar.setSelectionRange(0, 99999); //para dispositivos moveis
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}