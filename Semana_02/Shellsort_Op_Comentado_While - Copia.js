// ==========================================
// FUNÇÃO: GERAR VETOR COM VALORES ÚNICOS
// ==========================================
function gerarVetorUnico(tamanho, maxValor) {

    // Cria um vetor vazio que será preenchido
    let vt = [];

    // Preenche o vetor com números sequenciais de 0 até (maxValor - 1)
    // Ex: se maxValor = 5 → [0, 1, 2, 3, 4]
    for (let i = 0; i < maxValor; i++) {
        vt.push(i);
    }

    // ==========================================
    // EMBARALHAMENTO (FISHER-YATES)
    // ==========================================

    // Começa do final do vetor e vai até o índice 1
    for (let i = vt.length - 1; i > 0; i--) {

        // Gera um índice aleatório entre 0 e i (inclusive)
        let j = Math.floor(Math.random() * (i + 1));

        // Troca os elementos das posições i e j
        // Ex: vt[i] ↔ vt[j]
        // Isso embaralha o vetor progressivamente
        [vt[i], vt[j]] = [vt[j], vt[i]];
    }

    // Retorna apenas os primeiros "tamanho" elementos do vetor embaralhado
    // Ex: pega os 5 primeiros números aleatórios
    return vt.slice(0, tamanho);
}


// ==========================================
// FUNÇÃO: SHELL SORT (ORDENAÇÃO)
// ==========================================
function shellSort(arr) {

    // Armazena o tamanho do vetor
    let n = arr.length;

    // Define o GAP inicial como metade do tamanho do vetor
    // O GAP é o intervalo entre os elementos que serão comparados
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {

        // Percorre o vetor começando do índice = gap
        for (let i = gap; i < n; i++) {

            // Guarda o valor atual que será reposicionado corretamente
            let temp = arr[i];

            // Variável auxiliar para percorrer posições anteriores
            let j;
            j = i;

            // Move os elementos maiores para frente
            // Funciona como um Insertion Sort com intervalo (gap)
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            // Insere o valor (temp) na posição correta encontrada
            arr[j] = temp;
        }
    }

    // Retorna o vetor ordenado
    return arr;
}


// ==========================================
// TESTE DO CÓDIGO
// ==========================================

// Gera um vetor com 5 números únicos entre 0 e 25
let vetor = gerarVetorUnico(5, 25);

// Exibe o vetor original (embaralhado)
console.log("Vetor original:");
console.log(vetor);

// Ordena o vetor usando Shell Sort e exibe o resultado
console.log("Vetor ordenado:");
console.log(shellSort(vetor));