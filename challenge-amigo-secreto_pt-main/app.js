let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    amigos.push(amigos);
    if (nome == '') {
        alert('Por favor, insira um nome.');
        return;
    }
}
amigos.push(novoAmigo);

let lista = Document.getElementById('listaAmigos');
let item = document.createElement('li');
item.textContent = nome;
lista.appendChild(item);
limparCampo();

function limparCampo() {
    nome = document.querySelector('amigo');
    nome.value = '';
}

