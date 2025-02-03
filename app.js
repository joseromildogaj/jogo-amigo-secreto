let amigos = [];

function adicionarAmigo() {
    let entrada = lerEntrada();
    limparEntrada();
    if (!validarEntrada(entrada)) {
        alert('Por favor, insira um nome válido.');
        return;
    }
    amigos.push(entrada);

}

function sortearAmigo() {

}

//----------------- Funções Auxiliares -----------------

function lerEntrada() {
    const entrada = document.querySelector('input');
    let nome = entrada.value.trim();
    return nome;
}

function limparEntrada() {
    const entrada = document.querySelector('input');
    if (entrada.value.length > 0) {
        entrada.value = '';
    }
    entrada.focus();
}

function validarEntrada(entrada) {
    const regex = /^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$/;
    return (entrada === '' || !regex.test(entrada)) ? false : true;
}

function limparLista(tag) {
    const lista = document.getElementById(tag);
    if (lista.length != 0) {
        lista.innerHTML = '';
    }
}






