const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

openModalButton.addEventListener("click", toggleModal);
closeModalButton.addEventListener("click", toggleModal);
fade.addEventListener("click", toggleModal);

//
//
//
//

// Definição da variável form (formulário)
const form = document.querySelector("#card-form");

// Função para criar um novo card com base nos dados do formulário
const createCard = (title, client, description, date, responsaveis, tags) => {
    // Criação do elemento de card
    const card = document.createElement("div");
    card.classList.add("card");

     // Convertendo a string de tags em um array
     const tagList = tags.split(",").map(tag => tag.trim());

    // Conteúdo do card
    card.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="rodape">
            <div class="tags">
                ${tagList.map(tag => `<span>${tag}</span>`).join("")}
            </div>
            <div class="responsavel">
                <span>${date}</span>
                <span>${responsaveis}</span>
            </div>
        </div>
    `;

    // Seleciona o elemento da coluna usando o ID recebido como argumento
    const column = document.querySelector(`.todo .cards`);
    // Adiciona o card à coluna
    column.appendChild(card);
};

// Adiciona um event listener para o formulário
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const title = form.querySelector("#title").value;
    const client = form.querySelector("#client").value;
    const description = form.querySelector("#description").value;
    const date = form.querySelector("#date").value;
    const responsaveis = form.querySelector("#owners").value;
    const tags = form.querySelector("#tags").value;

    // Cria um novo card com base nos valores do formulário
    createCard(title, client, description, date, responsaveis, tags);

    // Fecha o modal
    modal.classList.add("hide");
    fade.classList.add("hide");

    // Limpa os campos do formulário
    form.reset();
});



// Seleciona todos os cards dentro da seção kanban
const cards = document.querySelectorAll('.kanban .card');

// Função para abrir o modal com as informações do card clicado
const openCardModal = (event) => {
    // Aqui você pode obter as informações do card clicado e exibi-las no modal
    const cardTitle = event.currentTarget.querySelector('h3').textContent;
    const cardDescription = event.currentTarget.querySelector('p').textContent;
    // Adicione mais informações conforme necessário

    // Abre o modal com as informações do card clicado
    // Por exemplo, você pode atualizar o conteúdo do modal com as informações do card clicado e então exibi-lo
    const modalCard = document.querySelector('#modal');
    const fadeCard = document.querySelector('#fade');
    modal.querySelector('.modal-body').innerHTML = `
        <h3>${cardTitle}</h3>
        <p>${cardDescription}</p>
        <!-- Adicione mais informações conforme necessário -->
    `;
    modal.classList.remove('hide');
    fade.classList.remove('hide');
};

// Adiciona o evento de clique a cada card
cards.forEach(card => {
    card.addEventListener('click', (event) => {
        toggleModal(); // Fecha o modal de nova implantação
        openCardModal(event); // Abre o modal do card clicado
    });
});
