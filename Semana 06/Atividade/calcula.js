function chama_a_funcao() {

    if (isNaN(document.getElementById('nota01').value) || isNaN(document.getElementById('nota02').value)) {
        alert('Digite apenas números!');
        return;

    } else if (document.getElementById('nota01').value == '' || document.getElementById('nota02').value == '') {
        alert('Preencha os campos!');
        return;
        
    } else {


        let nt01 = parseFloat(document.getElementById('nota01').value);
        let nt02 = parseFloat(document.getElementById('nota02').value);
        let media = (nt01 + nt02) / 2;

        document.getElementById('resposta').innerHTML = `A média é: ${media}`;
    }
}

let btn = document.getElementById('botao');
btn.addEventListener('click', chama_a_funcao);