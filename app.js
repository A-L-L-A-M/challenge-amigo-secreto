let amigos = [];

function adicionarAmigo() {
    let sorteado = document.getElementById('amigo');
    let resultado = document.getElementById('resultado');

    if (sorteado.value.trim() == '') {
        alert ('Campo vazio. Por favor insira um amigo.');
        sorteado.focus();
        return;
    }

    if (amigos.includes(sorteado.value.trim())) {
        alert ('Esse amigo já foi adicionado. Insira outro amigo');
        sorteado.focus();
        return;
    }

    amigos.push(sorteado.value.trim());
    document.getElementById('listaAmigos').innerHTML += `<li>${sorteado.value.trim()}</li>`;
    sorteado.value = '';
    sorteado.focus();
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigos.length < 4) {
        resultado.innerHTML = 'Mínimo de 4 amigos para sortear.';
        return;
    }


    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `Amigo sorteado é:${amigoSorteado}`;
}
