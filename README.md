# Atividade 6 MaisPraTi - Mini Loja Virtual

O desafio 6 da formação Desenvolvedor Full-Stack Jr. da MaisPraTi foi criar uma mini loja com 6 produtos, em 4 tipos de estilização diferentes. O projeto foi desenvolvido com React e contou com as seguintes estilizações: 
- CSS Global;
- CSS Modules;
- Tailwind CSS;
- Styled Components.


<h3>Para executar este projeto React:</h3>

```
- Clonar o repositório:

git clone git@github.com:barbaramsilveira/atividade5MaisPraTi.git

- Entrar na pasta do projeto:

cd nome-do-repositorio:

- Instalar dependências


npm install

- ou, se você usa yarn:


yarn


- Executar a aplicação:


npm start

ou com yarn:


yarn start

Abrir no navegador:

O React iniciará o projeto em uma porta determinada automaticamente (geralmente http://localhost:5173 ou 3000).

```
<h3>Segue enunciado da tarefa: </h3>

```
Tarefa: Implemente a mesma tela em 4 versões ou telas diferentes para cada uma das versões:

1. CSS Global · 2) CSS Modules · 3) Tailwind CSS · 4) styled-components.

Exemplo de Tela a construir:

- Navbar (fixa): logo, toggle de tema (claro/escuro com persistência) e badge do carrinho.

- Grid de produtos (cards) responsivo: ≤480px: 1 col · 481–768px: 2 cols · 769–1024px: 3 cols · ≥1025px: 4 cols.

- Card de produto: imagem 1:1 com espaço reservado, título 2 linhas com ellipsis, preço, rating (★), tag (“Novo”/“Promo”), botão “Adicionar” com variantes solid/outline/ghost.

Estados/Interações obrigatórios:

- Hover (elevação/sombra), focus visível, disabled, loading com skeleton (simule atraso).

- Dark mode aplicado a cores/sombras/bordas.

Acessibilidade:

- Navegação por teclado, `aria-*` onde fizer sentido, contraste ≥ 4.5:1.

Animações:

- Transições de 150–250ms (usar transform/opacity).

Dados:

- Exibir 6 produtos (id, título, preço, rating, tag, imagem placeholder). Imagens com lazy loading.

Entregáveis:

- Quatro pastas: `01-css-global/`, `02-css-modules/`, `03-tailwind/`, `04-styled-components/`.
- Cada pasta com os componentes (`Navbar`, `ProductCard`, `Button`, `Skeleton`) e um README curto.

Restrições:

- Em cada versão, use apenas a técnica indicada (global, modules, utilitários, CSS-in-JS com `ThemeProvider` e props).

Critérios de aceite:

- Breakpoints exatamente como descritos.
- Dark mode com persistência.
- Focus ring visível.
- Skeleton sem layout shift.
- Variantes do botão consistentes nos dois temas.
- Organização clara de pastas e uso de tokens (cores, espaçamentos, raio, sombras).
```