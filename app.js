let amigos = [];

function adicionarAmigo() {
    let campoAmigo = document.getElementById('amigo');
    let resultado = document.getElementById('resultado');

    if (campoAmigo.value.trim() == '') {
        resultado.innerHTML = 'Campo vazio. Por favor insira um amigo.';
        campoAmigo.focus();
        return;
    }

    if (amigos.includes(campoAmigo.value.trim())) {
        alert('Esse amigo já foi adicionado. Insira outro amigo');
        campoAmigo.focus();
        return;
    }

    amigos.push(campoAmigo.value.trim());
    document.getElementById('listaAmigos').innerHTML += `<li>${campoAmigo.value.trim()}</li>`;
    campoAmigo.value = '';
    campoAmigo.focus();
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigos.length < 4) {
        resultado.innerHTML = 'Mínimo de 4 amigos para sortear.';
        return;
    }

    let sortearAmigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `Amigo sorteado é:${sortearAmigoSecreto}`;
}
