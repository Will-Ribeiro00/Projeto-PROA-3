# 🍩 Os Simpsons — Landing Page

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📋 Sobre o projeto

Landing page (_single page_) sobre a série **Os Simpsons**, feita para a **Atividade 4 — Landing Page com HTML, CSS e DOM (JS)**.

A página apresenta os personagens em um carrossel, conta um pouco sobre a cidade de Springfield, mostra as famílias que vivem por lá e traz algumas curiosidades sobre a série.

O projeto foi desenvolvido com foco em:

- **Manipulação do DOM** com JavaScript: os cards de personagens e de famílias são **criados dinamicamente** a partir de arrays de objetos;
- **HTML semântico** (`header`, `nav`, `main`, `section`, `footer`);
- **Interatividade** com eventos de clique (carrossel, cards de famílias e botão de curiosidade);
- **Layout responsivo** com Flexbox, CSS Grid e `@media`.

---

## ✨ Funcionalidades

- 🧭 **Menu de navegação** com links para cada seção e o logo da série no centro
- 🎯 **Rolagem suave** entre as seções (`scroll-behavior: smooth`)
- 🎠 **Carrossel de personagens** (Homer, Marge, Bart, Lisa e Maggie) com setas para voltar e avançar, navegação circular e contador de posição (ex.: `1 / 5`)
- 🏘️ **Cards de famílias** coloridos, com emoji e animação ao passar o mouse; ao clicar, o card **mostra ou esconde a imagem da família**
- 🎲 **Curiosidade aleatória**: todas as curiosidades começam escondidas e o botão sorteia e exibe apenas uma por vez
- 📱 **Layout responsivo**: o menu e o carrossel se reorganizam em telas de até 800px
- 🍩 **Favicon** personalizado de rosquinha

---

## 🗂️ Seções da página

| Seção        | ID              | Conteúdo                                                     |
| ------------ | --------------- | ------------------------------------------------------------ |
| Personagens  | `#personagens`  | Apresentação da série e carrossel com os 5 personagens       |
| Mundo        | `#mundo`        | Texto sobre Springfield e seus principais lugares            |
| Famílias     | `#familias`     | Cards clicáveis das 6 famílias de Springfield                |
| Curiosidades | `#curiosidades` | Botão que sorteia uma das 12 curiosidades sobre a série      |

---

## 🧠 DOM utilizado no JavaScript

| Recurso                                                          | Onde é usado                                              |
| ---------------------------------------------------------------- | --------------------------------------------------------- |
| `getElementById`, `querySelector`, `querySelectorAll`            | Selecionar containers, botões e itens da página           |
| `createElement`, `appendChild`                                   | Criar os cards de personagens e de famílias               |
| `textContent`, `src`, `alt`, `style.backgroundColor`             | Preencher texto, imagem e cor de cada card                |
| `classList.add`, `remove`, `toggle`, `contains`                  | Trocar o card ativo, abrir/fechar famílias e destacar curiosidade |
| `addEventListener("click")`                                      | Setas do carrossel, cards de famílias e botão de curiosidade |
| `forEach` + arrays de objetos                                    | Gerar vários cards a partir de uma única lista de dados   |
| `Math.random` + `Math.floor`                                     | Sortear a curiosidade aleatória                           |

---

## 📁 Estrutura do projeto

```text
Os Simpsons/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── icone_rosquinha.png
    ├── logo.png
    ├── flecha.svg
    ├── arrow.png
    ├── homer.png
    ├── marge.png
    ├── bart.png
    ├── lisa.png
    ├── maggie.png
    ├── familia_van_houten.png
    ├── familia_lovejoy.png
    ├── familia_wiggum.png
    └── familia_skinner.png
```

---

## 🚀 Como executar

1. Clone ou baixe este repositório.
2. Mantenha a estrutura de pastas original.
3. Abra o arquivo `index.html` em qualquer navegador moderno.

Não é necessário instalar nada nem rodar servidor.

> 💡 Os títulos usam a fonte **Lilita One**, carregada do Google Fonts. Sem internet, a página continua funcionando e usa a fonte Arial no lugar.

---

## ✏️ Como adicionar conteúdo

Os personagens e as famílias ficam em arrays no início do `js/script.js`. Para adicionar um novo item, basta incluir um objeto na lista e o card é criado automaticamente.

Exemplo — adicionando a imagem de uma família:

```js
{
    nome: "Família Simpson",
    emoji: "🍩",
    cor: "#fff176",
    imagem: "img/familia_simpson.png",   // basta incluir esta linha
    descricao: "A família mais famosa de Springfield.",
    membros: ["Homer", "Marge", "Bart", "Lisa", "Maggie"]
}
```

---

## ⚠️ Limitações atuais

- As famílias **Simpson** e **Flanders** ainda não têm imagem, então ao clicar elas mostram a lista com o nome dos membros.
- As curiosidades estão escritas direto no HTML (não vêm de um array como os cards).
- O carrossel **não avança sozinho**: é preciso clicar nas setas.
- Algumas imagens (`logo.png` e `icone_rosquinha.png`) ainda não estão otimizadas e pesam mais de 1 MB.

---

## 👨‍💻 Autor

Feito com ❤️ por **Will**.

---

> ℹ️ Projeto com fins exclusivamente educacionais e sem fins lucrativos. _Os Simpsons_ e suas imagens pertencem aos seus respectivos detentores de direitos (Fox / Disney).
