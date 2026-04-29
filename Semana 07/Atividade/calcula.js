function chama_a_funcao() {

    // Obtém os campos de entrada de texto
    const campo1 = document.getElementById('nota01');
    const campo2 = document.getElementById('nota02');
    const campo3 = document.getElementById('nota03');

    // Recebe os valores dos campos de entrada em outra variável para realizar as validações
    const valor1 = campo1.value;
    const valor2 = campo2.value;
    const valor3 = campo3.value;

    // Verifica se foi digitado caracteres especiais ou se os campos estão em branco
    if ((valor1 !== '' && isNaN(valor1)) || (valor2 !== '' && isNaN(valor2)) || (valor3 !== '' && isNaN(valor3))) {
        alert('Digite Apenas Números Inteiros ou com Ponto ( ex.: 10 ou 10.5 ),' + '\n' + 'Ou, se for o caso, Deixe o Campo em Branco!');
        return;
    }

    // Converte os valores para números, tratando os campos em branco como zero
    const nt01 = valor1 === '' ? 0 : Number(valor1);
    const nt02 = valor2 === '' ? 0 : Number(valor2);
    const nt03 = valor3 === '' ? 0 : Number(valor3);

    // Atualiza os campos de entrada com os valores convertidos
    campo1.value = nt01;
    campo2.value = nt02;
    campo3.value = nt03;

    // Calcula a média e exibe o resultado
    const media = (nt01 + nt02 + nt03) / 3;
    document.getElementById('resposta').innerHTML = `A média é: ${media}`;
}

// Adiciona um ouvinte de evento ao botão para chamar a função quando clicado
let btn = document.getElementById('botao');
btn.addEventListener('click', chama_a_funcao);