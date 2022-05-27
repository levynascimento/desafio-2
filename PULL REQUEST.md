Este arquivo é pra explica como eu criei a aplicação web que consumiu uma API para gerenciar o CRUD de veículos.

Eu fiz o front-end usando o Reactjs junto com o Nextjs pra dar uma otimizada. E no back-end eu também usei o Nextjs pra fazer essa comunicação com o Nodejs. Além disso, usei o Banco de Dados MongoDB e a ORM mongoose pra armazenar dados.

Primeiramente, baixei o starter kit do Nextjs e criei a pasta do Desafio.

Instalei o styled components(npm i styled-components@5.3.3), que possiblita trabalhar o CSS dentro do Javascript, também instalei a biblioteca do babel (npm i babel-plugin-styled-components@2.0.6 --save-dev)e ela foi instalada apenas no ambiente de desenvolvimento e não no de produção, pra conseguir usar o styled components dentro do Nextjs. O Babel traduz o javascript pra ser compatível com o navegador.

Logo em seguida, importei o styled components pra dentro da page/app.jsx e aí eu fiz o component GlobalStyle e fiz ele estilizar todas as páginas que eu criasse, globalmente, passando ele dentro da função App. Depois eu criei a pasta src que é a pasta onde coloquei todos os componentes criados. Fiz um arquivo chamado theme.js e coloquei cores ali que podem ser usadas onde eu quiser, basta apenas passar
${props => props.theme.(nome que dei as cores)}. Depois passei o comando ThemeProvider na page app.jsx e fiz esse theme.js ser compartilhado globalmente.

## Explicando a página index.jsx ##

Na página index temos dois componentes importados. É o Container e o CreatePage. No caso eu fiz a página mesmo nesse componente CreatePage. Esse container tem 2 componentes dentro dele: o StyledContainer e o StyledChildren. O StyledContainer eu fiz pra centralizar o conteúdo no meio da página e o StyledChildren eu fiz pra setar o tamanho dele que é de 900px. Depois passei o children dentro do StyledChildren, porque não pode ficar sem o filho dele.
 
Agora nessa CreatePage temos muito mais items e funções dentro dela. Tem o styled components importado lá pra poder usá-lo. Importei o ícone BsSliders que é o filtro. Importei o useRouter do next pra poder redirecionar as pessoas pra outro link. Importei o Button que é o botão de Adicionar da página. O Search que é a barra de pesquisa. O PageContainer que é o que pinta essa área do Container de 900px de branco e seta a altura da página em min-height de 100vh, ou seja, vai pegar toda a tela. Por fim, o ButtonContainer pra cuidar do botão. Nele eu coloquei display: flex e justify-content: center pra ele ficar no meio, além de dar um padding-top de 20px pra distanciar o botão da barra de pesquisa.

No Button.jsx foi colocado um font-weight: bold, pra deixa a letra em negrito. Um background-color usando o tema que falei anteriormente, pra mudar a cor do fundo do botão. Um color usando tema também, pra mudar a cor da letra dentro do botão. Retirei a borda do botão usando o border: none. Passei um padding do botão onde teve 15px em cima, 15 embaixo, 100px na direita e esquerda, aumentando assim o componente tanto pra cima e pra baixo, como pra direita e esquerda. Border-radius de 35px pra arrendondar as bordas do botão. Font-size de 20px pra alterar o tamanho da letra. Passei o tipo de letra que a letra do botão teria. Cursor pointer pra quando o usuário passasse o mouse em cima do botão, aparecesse a mãozinha pra clicar. Um hover que é a mudança de cor do botão quando o usuária passa o mouse em cima e a transição da cor do botão pra esse hover, coloquei em 0.5 segundos.

No Search eu importei o styled component e o ícone da lupa. Depois criei o StyledSearch com o styled.input pra fazer um input. Coloquei um resize none pra o usuário não conseguir alterar o tamanho do input. Coloquei a largura dele de 600px. Padding de altura em cima e embaixo de 10px e 50px na direita e esquerda. Box-sizing: border-box pra ele pegar toda a largura dos 600px. Uma cor de fundo no input com background-color. Uma borda sólida de 1 px. Um border-radius de 35px pra arredondar as bordas do input. Border none pra tirar a borda dele. Font-family pra ele ter a familia Roboto, se não for essa sans-serif. Font-size pra setar o tamanho do placeholder do input. Outline none pra a linha que fica ao redor do input quando a pessoa clica nele, não aparecer. E aí, eu fiz um hover também pra mudar a cor do input quando a pessoa passa o mouse por cima. Depois criei esse ContainerStyledSearch pra ser o position relative do icone da lupa, que é o position absolute, para assim conseguir colocar o ícone da lupa ao lado do placeholder do input. Com o useRouter eu faço a lógica de quando a pessoa clicar no botão o onClick pega esse clique e coloca nas funções handleClickFiltro e handleClickForm e essas funções fazem um router.push pra mandar pra outro link o usuário.

## Explicando a página pageanuncio.jsx ##

Essa é a maior página talvez. Importei o styled components, o ícone de filtro, o ícone da seta apontando pra esquerda. O useRouter que teve a sua função explicada acima. O axios que pega os dados do back-end e traz pro front-end. O useSWR que posibilita o axios ir no link da api pegar os dados. A partir daí eu importei novamente o Button, Search, Slider e o Container que tiveram suas funções e detalhes explicados acima. Depois importei o Card que é o componente responsável por aparecer o post que o usuária criou. Dentro desse Card eu importei o styled components, o axios e o useSWRConfig, que é responsável por recarregar a página até que a função que lhe foi passada aconteça, o que torna as ações do site quase instantâneas. 

Importei dentro do Card também o Menu que o componente que é responsável pelo menu de editar, deletar e favoritar. Dentro desse Menu eu importei o styled components. Depois eu criei 3 styled. div com o cursor pointer que são responsáveis pelo ícone de Deletar, Heart e Edit, respectivamente. Depois fiz um ContainerMenu que dava um padding-top e right de 10px, um display: flex e justify-content: center e um gap de 7px entre eles. Dentro do ContainerMenu eu coloquei os ícones e dentro dos ícones a altura deles como 30px. No ícone de Deletar coloquei um onClick pra pegar o clique nesse ícone.

Continuando o componente Card, eu criei um CardContainer com styled.div, que vai fazer o post em si, com um background com uma cor tema, width e height que são largura e altura, respectivamente, em 250px e uma margin-bottom, ou seja, uma margem em relação ao que tem embaixo de 15px. Depois criei o TesteContainer  com styled.div também que iria ficar responsável por ajustar o conteúdo do post. Então, coloquei um display: block pra pegar toda a linha, flex-direction: column pra deixar os itens em forma de coluna, um embaixo do outro, font-size de 18px pra o texto ter o tamanho de 18px e um padding de 80px de distância de cima, 0 na esquerda, 0 embaixo e 15px na direita. Depois coloquei o ContainerMenu pra ser styled.div e fiz um float: right nele pra o item que tiver dentro dele flutue na direita do post, que no caso vai ser o menu.

A partir daí vou explicar de novo a pageanuncio. Criei um ArrowContainer styled.div pra o ícone de seta, onde ele tem um padding: 40px 0 30px 130px pra distanciar ele do topo, bottom, direita e esquerda e um cursor pointer. Fiz um DivContainer styled.div com um display: flex, flex-direction: column, justify-content: center, padding: 0 20px pra os itens dentro dela ficarem em coluna e no centro com um padding nas laterais de 20px. Coloquei um ButtonContainer deixar no meio. Criei um CardContainer styled.div que tem um display flex, um flex-direction: wrap pra os itens ficarem em linha e quebrar a linha quando ultrapassar o limite da página, justify-content: center pra ficar no meio, um gap de 30 px pra distanciar os posts uns dos outros uma margin-top pra dar uma margem de distância em relação ao conteúdo em cima e um padding de 10px nas laterais. Criei um MeuAnuncio styled.h1 que é um texto e esse texto é negrito e com 25px de tamanho. Criei um MeuAnuncioContainer styled.div pra deixar o conteúdo no meio e alinhado no meio sem pegar toda a largura e uma margem de distância do topo de 100px. Criei também um SearchContainer styled.div pra setar o que tiver dentro dele no meio  com padding de 20px de distância pro que tiver embaixo e um gap de 10px entre os itens dele. E o PageContainer que eu já expliquei antes.

A lógica dessa página se resume em: 
- Quando o usuário criar o formulário, os dados que estiverem nele serão enviados para o banco de dados mongodb. O axios vai lá e pega esses dados através do verbo GET e ele responde mandando um res.data. Esse data é pegado no useSWR que vai buscar no link da API esses dados do post. Ao fazer isso, eu dei um data.map no CardContainer, chamei a API que vai mandar esses dados pra dentro do Card. Daí eu criei parâmetros:
1º a key do map que seria o id do post, depois eu peguei todos os outros dados dando vehicle.(o dado que eu queria da API). Então, eu mando esses dados como parâmetros para dentro da função Card lá no componente Card e  depois eu crio um parágrafo dentro do ContentContainer pra cada parâmetro desse ser exibido de acordo com o id do post. 

- E dentro do Card ainda tem uma função chamda handleDelete pra tratar o delete do Post. Eu disse que tinha um onClick lá no botão Delete do Menu. Quando a pessoa clica nesse botão o Menu pega esse clique e chama a função handleDelete, aí o axios vai lá na API, olha o id do post que a pessoa que clicou e exclui esse post através do verbo GET. Depois eu passo 
if(response.status === 200) 
mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicles`)

pra que chame isso denovo. Dessa forma, o post é excluído muito rápido.

Além disso, temos 2 onClicks que mandam as pessoas pra página de filtro e pra através das funções chamadas e do router.push dentro delas.

## Explicando a página pagebusca.jsx ##

Não preciso explicar o imports, componentes e styleds dessa página, porque são todos iguais a pageanuncio.

Eu não consegui fazer a lógica do filtro no input, infelizmente :/. Além disso, a rota do handleClickIndex está errada, pois eu não consegui colocar duas rotas pra o mesmo ícone. 

O CardAnuncios é igual o Card. 

## Explicando a página pagefavorito.jsx ##

Não preciso explicar o imports, componentes, styleds e lógica dessa página, porque são todos iguais a pageanuncio.

Não consegui criar a lógica de clicar no ícone de coração e o post ficar favoritado :/

## Explicando a página pageform.jsx ##

Nessa página eu comecei importando o styled components, depois o ícone da seta pra esquerda BsArrowLeft, depois o useRouter, depois o useForm que é um hook do react pra criar formulários com menos código e mais performance. Importei o joiResolver pra ele validar o postSchema antes de mandar o dado pra função do handleForm. Importei o axios e já falei a função dele acima. Importei também o postSchema que é lá do back-end, onde ele valida cada input da maneira que eu setei lá e se a pessoa escrever algo errado ele mostra o erro. O resto dos componentes são todos iguais as das outras páginas, com exceção do Input. 

O Input é o componente que eu fiz pra ser o formulário. Importei o styled components e o useController que vem do control do useForm. Dentro desse componente eu fiz um InputContainer com styled.div vazio só pra setar. Fiz um StyledLabel com styled.p de parágrafo com fonte em negrito e tamanho de 25px. Depois fiz o StyledInput com styled.input pra fazer um input. Dentro dele eu coloquei display: block pra o itens ficarem em blocos, uma largura de 350px, background-color com uma cor de tema, um padding de 15px pra cima e pra baixo, 20px pra direito e esquerda, box-sizing border-box que eu já expliquei, border-radius de 40px pra arrendodar a borda, uma borda de 1px solido com uma cor tema e o tamanho da fonte desse label vai ser de 20px. Coloquei um  ${ props => props.error && `border: 2px solid ${props.theme.error};`}, pra quando ele der erro mudar a borda dele pra cor vermelha e coloquei que quando a pessoa clicasse que é o focus, tirasse o outline que é uma borda que fica. Fiz um ErrorLabel pra quando der erro, a mensagem do erro ser vermelha. Criei também um const errorMessage que pega o tipo de erro que dá lá no objeto, aí eu digo que esse tipo vai ser igual a string que eu colocar. 'string.empty' é pra erros do tipo string. 'number.base' é pra erros do tipo number. duplicated é pra quando já tiver uma placa existente igual a que a pessoa está colocando no formulário, então ele avisa até que ela coloque uma diferente. 

Na função Input eu passo os parâmetros vindos lá do useForm, fora esse label também. Esse label é um parâmetro que passo pra que o label possa aparecer em cima do input. Então eles meio que viram um componente só. O control é lá do useForm e ele controla basicamente tudo o que é passado pra dentro do form, até os erros. Dessa forma, o Input se torna controlável pro react-hook-form. O value é o valor do campo e o onChange é a função que vai alterar esse valor. O name é o nome do campo. E o defaultValue é um valor padrão vazio. E aí eu passei tudo isso pra dentro do StyledInput.

Voltando pra pageform...

Assim que abre a função Pageform, já temos o useForm. O control éu já expliquei. A função handleSubmit vai alterar o form e ela vai ser alterada pela handleForm. O formState vai pegar o estado do erro e o setError vai alterar esse erro. Dentro da função useForm temos a validação do joiResolver que pega o postSchema e valida os dados que o usuário colocou no input pra ver se bate. Se estiver tudo certo ele prossegue. Aí se tiver tudo certo o axios manda um verbo POST pra api e cria esse post e se der o código 201 que é o de Created, ele redireciona pra página que vai ficar o anúncio da pessoa lá salvo. No catch é o erro de duplicação, se der ele o form vai avisar até a pessoa alterar.

## Explicando a página pagefiltro.jsx ##

Os import, componentes e styleds dessa página são praticamente iguais as outras. Só muda que nessa página eu criei um PageFormContainer pra setar o tamanho da area cinza em 600px e o PageFormContainerFiltro pra pintar essa área de cinza.





## Back-end ##

A API se chama vehicles e ela tem 3 verbos lá, o POST, GET e DELETE. O post é pra criar o post, ou seja, a pessoa mandou o form, ele salva o post lá no Banco de Dados. O get é o verbo que traz esse post pro front-end pra que ele seja manipulado e o delete, basicamente, deleta o post criado. No início de cada função sempre vai ter essa createHandler que é o middleware, que faz a conexão com o Banco de Dados e antes disso o nextconnect conecta no verbo certo, se for o errado ele nem entra no middleware. Sempre que esse dado é gerado e está certo ele manda um código de resposta 2xx, 4xx ou 5xx. 200 pra os que deram certo ou foram criados. 400 pra os que deram erro da parte do usuário e 500 pros que deram erro do servidor. Esse erro com code = 11000 é o código do erro do tipo duplicated, que é o erro da placa duplicada. 

O arquivo vehicles.model é a verificação que o mongoose faz se o tipo dos dados que as pessoas mandaram estão certo. Se estiverem ele guarda no Banco de Dados

O arquivo vehicles.schema é o validador. Antes que a função do service seja chamada, ele vai pegar todos os dados, ver se estão certos, se tem algo faltando. Se tiver errado, ele nem entra na função do service e mostra logo o erro para o usuário. O postSchema é pra verificar o dados do form, se é string ou número, o dado é obrigatório com aquele .required e o max(50) é a quantidade de caracteres máximos que aceita e também tem o min(). Na placa, por exemplo, eu preciso que sejam 7 caracteres, se não é errado, por isso coloco .max(7).min(7). 

O arquivo vehicles.service são as funções que são chamadas pra executar o que é pedido. No postCreate ele pega o body que é o corpo e cria o post. Na função getPosts, ele vai encontrar esses posts e mandar pro front-end. Na função deletePost, ele vai encontrar e deletar o post.

O arquivo mongoose é a ORM responsável conectar o BD com o back-end. Primeiro importa ela, depois temos a senha desse BD em MONGODB_URI. O mongoose tem uma função global de conexão, então se ela não estiver feita eu mando fazer essa conexão, o resto são os erros que expliquei. 

O arquivo validation verifica se o joi que é o validador deu erro. Se sim, ele responde com o erro 400