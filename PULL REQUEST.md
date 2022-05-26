Este arquivo é pra explica como eu criei a aplicação web que consumiu uma API para gerenciar o CRUD de veículos.

Eu fiz o front-end usando o Reactjs junto com o Nextjs pra dar uma otimizada. E no back-end eu também usei o Nextjs pra fazer essa comunicação com o Nodejs. Além disso, usei o Banco de Dados MongoDB e a ORM mongoose pra armazenar dados.

Primeiramente, baixei o starter kit do Nextjs e criei a pasta do Desafio.

Instalei o styled components(npm i styled-components@5.3.3), que possiblita trabalhar o CSS dentro do Javascript, também instalei a biblioteca do babel (npm i babel-plugin-styled-components@2.0.6 --save-dev)e ela foi instalada apenas no ambiente de desenvolvimento e não no de produção, pra conseguir usar o styled components dentro do Nextjs. O Babel traduz o javascript pra ser compatível com o navegador.

Logo em seguida, importei o styled components pra dentro da page/app.jsx e aí eu fiz o component GlobalStyle e fiz ele estilizar todas as páginas que eu criasse, globalmente, passando ele dentro da função App. Depois eu criei a pasta src que é a pasta onde coloquei todos os componentes criados. Fiz um arquivo chamado theme.js e coloquei cores ali que podem ser usadas onde eu quiser, basta apenas passar
${props => props.theme.(nome que dei as cores)}. Depois passei o comando ThemeProvider na page app.jsx e fiz esse theme.js ser compartilhado globalmente.

## Explicando a primeira página ##






