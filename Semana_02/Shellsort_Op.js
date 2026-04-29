function gerarVetorUnico(tamanho, maxValor) {
    let vt = [];
    for (let i = 0; i < maxValor; i++) {
        vt.push(i);
    }

    for (let i = vt.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [vt[i], vt[j]] = [vt[j], vt[i]];
    }

    return vt.slice(0, tamanho);
}

function shellSort(arr) {
    let n = arr.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
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

// Teste
let vetor = gerarVetorUnico(10, 100);

console.log("Vetor original:");
console.log(vetor);

console.log("Vetor ordenado:");
console.log(shellSort(vetor));