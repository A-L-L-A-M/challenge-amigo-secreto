let amigo = [];

function adicionarAmigo() {

    let nomeDoAmigo = document.getElementById('amigo').value.trim();
  

    if (nomeDoAmigo == ''){
        alert ('Este campo está vazio. Por favor preencha este campo.');
        return;
    }    

    if (amigo.includes(nomeDoAmigo)){
        alert(`Nome do amigo ${nomeDoAmigo} já foi incuido.`);
        limparCampo();
         return;
    }
     amigo.push(nomeDoAmigo);
        resultado.innerHTML = `Nome do amigo <strong>${nomeDoAmigo}</strong> adicionado a lista`;
        limparCampo();
        document.getElementById('listaAmigos').innerHTML = amigo.map (a=>`<li>${a}<li>`).join('');
}
 
function sortearAmigo() {

    if (amigo.length < 1){
        alert('precisa-se adicionar pelo menos 1 amigo');
        return;
    }
    
    let sorteador = Math.floor(Math.random() * amigo.length);
    let sorteio = amigo[sorteador];
    
    amigo.splice(sorteador, 1);

    document.getElementById('listaAmigos').innerHTML = amigo.map(a => `<li>${a}</li>`).join('');
    resultado.innerHTML = `<li> O amigo sorteado é: <strong>${sorteio}</strong></li>`;
    
}

function limparCampo(){
    nomeDoAmigo = document.querySelector('input');
    nomeDoAmigo.value = '';
}
