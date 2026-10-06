const personagens = [
    {
        nome: "Homer Simpson",
        imagem: "img/homer.png",
        descricao: "Pai da família Simpson, Homer é conhecido por sua preguiça, impulsividade e paixão por rosquinhas. Apesar de suas trapalhadas, demonstra muito carinho pela família."
    },
    {
        nome: "Marge Simpson",
        imagem: "img/marge.png",
        descricao: "Mãe da família, Marge é responsável, carinhosa e costuma ser a voz da razão dentro de casa. Sua característica mais marcante é seu enorme cabelo azul."
    },
    {
        nome: "Bart Simpson",
        imagem: "img/bart.png",
        descricao: "Filho mais velho de Homer e Marge, Bart é rebelde, brincalhão e famoso por suas travessuras. Adora aprontar na escola e provocar os adultos."
    },
    {
        nome: "Lisa Simpson",
        imagem: "img/lisa.png",
        descricao: "Filha do meio, Lisa é extremamente inteligente, dedicada e apaixonada por música e conhecimento. Frequentemente questiona os problemas da sociedade."
    },
    {
        nome: "Maggie Simpson",
        imagem: "img/maggie.png",
        descricao: "A filha mais nova da família. Apesar de quase sempre estar em silêncio, Maggie é observadora, inteligente e ocasionalmente surpreende os outros com suas atitudes."
    }
];

const familias = [
    {
        nome: "Família Simpson",
        imagem: "img/familia_simpsons.png",
        emoji: "🍩",
        cor: "#fff176",
        descricao: "A família mais famosa de Springfield.",
        membros: ["Homer", "Marge", "Bart", "Lisa", "Maggie"]
    },
    {
        nome: "Família Flanders",
        imagem: "img/familia_flanders.png",
        emoji: "🙏",
        cor: "#c8f7c5",
        descricao: "Os vizinhos dos Simpsons.",
        membros: ["Ned", "Maude", "Rod", "Todd"]
    },
    {
        nome: "Família Van Houten",
        imagem: "img/familia_van_houten.png",
        emoji: "🤓",
        cor: "#bfe9ff",
        descricao: "A família do melhor amigo do Bart.",
        membros: ["Kirk", "Luann", "Milhouse"]
    },
    {
        nome: "Família Lovejoy",
        imagem: "img/familia_lovejoy.png",
        emoji: "⛪",
        cor: "#e0d4ff",
        descricao: "O reverendo e sua família, da Igreja de Springfield.",
        membros: ["Timothy", "Helen", "Jessica"]
    },
    {
        nome: "Família Wiggum",
        imagem: "img/familia_wiggum.png",
        emoji: "👮",
        cor: "#ffd9a8",
        descricao: "A família do chefe de polícia de Springfield.",
        membros: ["Clancy", "Sarah", "Ralph"]
    },
    {
        nome: "Família Skinner",
        imagem: "img/familia_skinner.png",
        emoji: "🏫",
        cor: "#ffd1e8",
        descricao: "O diretor da escola e sua mãe.",
        membros: ["Seymour", "Agnes"]
    }
];

const containerCards = document.getElementById("container_cards");

personagens.forEach(function (personagem, indice) {
    const card = document.createElement("div");
    card.classList.add("card");

    // só o primeiro card começa visível
    if (indice === 0) {
        card.classList.add("card_ativo");
    }

    const imagem = document.createElement("img");
    imagem.src = personagem.imagem;
    imagem.alt = personagem.nome;

    const titulo = document.createElement("h2");
    titulo.textContent = personagem.nome;

    const descricao = document.createElement("p");
    descricao.textContent = personagem.descricao;

    card.appendChild(imagem);
    card.appendChild(titulo);
    card.appendChild(descricao);

    containerCards.appendChild(card);
});

const contador = document.getElementById("contador_cards");
const btnVoltar = document.getElementById("arrow_left");
const btnAvancar = document.getElementById("arrow_right");
const cards = document.querySelectorAll(".card");

let cartaoAtual = 0;

function mostrarCard(indice) {
    const cardAtivo = document.querySelector(".card_ativo");
    cardAtivo.classList.remove("card_ativo");

    cards[indice].classList.add("card_ativo");

    contador.textContent = (indice + 1) + " / " + cards.length;
}

mostrarCard(0);

btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cards.length - 1) {
        cartaoAtual = 0;
    } else {
        cartaoAtual++;
    }

    mostrarCard(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) {
        cartaoAtual = cards.length - 1;
    } else {
        cartaoAtual--;
    }

    mostrarCard(cartaoAtual);
});

const containerFamilias = document.getElementById("container_familias");

familias.forEach(function (familia) {
    const card = document.createElement("div");
    card.classList.add("card_familia");

    const titulo = document.createElement("h2");
    titulo.textContent = familia.emoji + " " + familia.nome;

    card.style.backgroundColor = familia.cor;

    const descricao = document.createElement("p");
    descricao.textContent = familia.descricao;

    const dica = document.createElement("span");
    dica.textContent = "Clique para ver os membros";

    let conteudoAberto;

        conteudoAberto = document.createElement("img");
        conteudoAberto.src = familia.imagem;
        conteudoAberto.alt = familia.nome;
        conteudoAberto.classList.add("imagem_familia");

    conteudoAberto.classList.add("conteudo_familia");

    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(dica);
    card.appendChild(conteudoAberto);

    card.addEventListener("click", function () {
        card.classList.toggle("card_aberto");

        // troca o texto da dica
        if (card.classList.contains("card_aberto")) {
            dica.textContent = "Clique para esconder os membros";
        } else {
            dica.textContent = "Clique para ver os membros";
        }
    });

    containerFamilias.appendChild(card);
});

const btnCuriosidade = document.getElementById("btn_curiosidade");
const itensCuriosidades = document.querySelectorAll(".lista_curiosidades li");

btnCuriosidade.addEventListener("click", function () {
    itensCuriosidades.forEach(function (item) {
        item.classList.remove("destaque");
    });

    const sorteado = Math.floor(Math.random() * itensCuriosidades.length);

    itensCuriosidades[sorteado].classList.add("destaque");
});
