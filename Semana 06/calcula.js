/* Versão 01

let btn = document.getElementById('botao');
btn.addEventListener('click', function () {
    //alert('O botão foi clicado!');
    let pedro = parseInt(document.getElementById('idadePedro').value);
    let joao = parseInt(document.getElementById('idadeMilton').value);

    //console.log(pedro);
    // console.log(joao);

    if (pedro > joao) {
        resposta.innerHTML = 'Pedro é mais velho que João';
    } else if (pedro < joao) {
        resposta.innerHTML = 'João é mais velho que Pedro';
    } else {
        resposta.innerHTML = 'Pedro e João tem a mesma idade';
    }
});
*/

// Versão 02

function chama_a_funcao() {
    
    let pedro = parseInt(document.getElementById('idadePedro').value);
    let joao = parseInt(document.getElementById('idadeMilton').value);

    //console.log(pedro);
    // console.log(joao);

    if (pedro > joao) {
        resposta.innerHTML = 'Pedro é mais velho que João';
    } else if (pedro < joao) {
        resposta.innerHTML = 'João é mais velho que Pedro';
    } else {
        resposta.innerHTML = 'Pedro e João tem a mesma idade';
    }
}

let btn = document.getElementById('botao');
btn.addEventListener('click', chama_a_funcao);