const fila = [];

const btnInserir = document.getElementById('btn-inserir');
const btnRemover = document.getElementById('btn-remover');
const filaContainer = document.getElementById('fila-container');

btnInserir.addEventListener('click', async function () {
    
    // Escolhe um ID aleatoriamente entre 1 e 826 (Total de personagens na API)
    const idRandom = Math.floor(Math.random() * 826) + 1;
    const url = `https://rickandmortyapi.com/api/character/${idRandom}`;

    try {

        const resposta = await fetch(url);
        const personagem = await resposta.json();

        fila.push(personagem);

        const card = document.createElement('div');
        card.className = 'person';
        const imagem = document.createElement('img');
        imagem.src = personagem.image;
        imagem.alt = personagem.name;

        const nome = document.createElement('p');
        nome.textContent = `Nome: ${personagem.name}`;

        const especie = document.createElement('p');
        especie.textContent = `Espécie: ${personagem.species}`;

        const status = document.createElement('p');
        status.textContent = `Status: ${personagem.status}`;

        const textDiv = document.createElement('div');
        textDiv.className = 'person-text';
        textDiv.appendChild(nome);
        textDiv.appendChild(especie);
        textDiv.appendChild(status);

        card.appendChild(imagem);
        card.appendChild(textDiv);
        filaContainer.appendChild(card);

    } catch (error) {

        console.error('Erro ao buscar personagem:', error);
        alert('Ocorreu um erro ao buscar o personagem. Tente novamente.');
    }
});

btnRemover.addEventListener('click', function () {
    if (fila.length > 0) {
        fila.shift();

        const firstCard = filaContainer.firstChild;
        filaContainer.removeChild(firstCard);
    } else {
        alert('A fila está vazia. Não há personagens para remover.');
    }
});
