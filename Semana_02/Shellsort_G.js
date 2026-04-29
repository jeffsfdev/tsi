function gerarVetorSemRepeticao(tamanho, min, max) {
    // Verifica se o intervalo é grande o suficiente para o tamanho pedido
    if (max - min + 1 < tamanho) {
        throw new Error("O intervalo é menor que a quantidade de números pedida.");
    }

    let conjunto = new Set();

    // Continua sorteando até que o conjunto tenha o tamanho desejado
    while (conjunto.size < tamanho) {
        let numAleatorio = (Math.random() * (max - min + 1) + min) | 0;
        conjunto.add(numAleatorio);
    }

    // Converte o Set de volta para um Array
    return [...conjunto];
}

function shellSort(arr) {
    let n = arr.length;
    for (let gap = (n / 2 | 0); gap > 0; gap = (gap / 2 | 0)) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
    return arr;
}

// --- Testando com o Shell Sort ---
const tamanho = 10;
const meuVetorUnico = gerarVetorSemRepeticao(tamanho, 1, 100);

console.log("Vetor Único Gerado:", meuVetorUnico);
shellSort(meuVetorUnico); // Usando a função shellSort definida anteriormente
console.log("Vetor Ordenado:", meuVetorUnico);