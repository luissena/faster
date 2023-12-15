# Desafio técnico - Faster Drinks

Olá, amigo avaliador!

Vou começar contando um pouco sobre a minha experiência ao fazer esse desafio.

Inicialmente eu pensei em fazer uma tela inicial com todos os drinks e apartir disso seguir nos requisitos para não iniciarmos a aplicação com uma tela vazia, porém a primeira coisa que nós devs pensamos quando vem as palavras "requisição" e "todos" é:

> "Legal, isso vai ser tranquilo numa POC ou num testezinho local, mas isso em uma aplicação gigante vai pesaaarrr..."

Então eu já tava em mente com a ideia de colocar uma paginação, logo o fluxo incial da aplicação seria:

1. Abrir a tela com todas as bebidas (com paginação).
2. Poder selecionar uma categoria para filtrar as bebidas por categoria.
3. Poder pequisar uma bebida especifica por um nome através de um campo de busca.
4. Qualquer bebida listada poderia também ser clicada para abrir um modal de detalhes.

Até ai tranquilo, comecei a fazer uns desenho no figma para ter uma ideia mais concreta, fiz umas anotações no bloco de notas e "vamboraa codar", porémmmm, infelizmente, a API disponibilizada não tem paginação :c. Então me veio uma segunda ideia:

> "E se de alguma forma eu conseguisse iniciar uma tela que não fosse em branco até escolher uma categoria e buscar uma bebida específica e que também não pesasse tanto (mesmo sem paginação)"

Então eu cheguei a conclusão de explorar as rotas e coloquei a minha aplicação para selecionar uma categoria de acordo com os params da rota, pois dessa forma eu conseguiria mandar um link para um amiguinho e já cair direto na categoria que ele queria compartilhar ou algo do tipo.

Comecei a codar e tentei seguir com uma aplicação que resolvesse o desafio da forma mais enxuta possivel, porém demonstrando alguns conhecimentos (hihi), baseado nisso eu não usei uma lib de componentes, fiz tudo na mão utilizando o hypadissimo TailwindCSS (imagino que mesmo utilizando essa lib eu ainda consiga demonstrar meus conhecimentos de CSS puro).

Foi tranquilo de codar, nada muito diferente do que faço no meu dia a dia, consumindo API, utilizando props, emits e etc.

### Observações

- Acho que talvez devem ter ficado com dúvida do por quê eu utilizei o NuxtImage, eu percebi que o core da minha UX/UI eram as imagens no card, então eu precisava que elas fossem otimizadas de alguma forma, e o que eu encontrei de pronto para não perder muito tempo foi esse modulo.
- Nos requisitos do desafio fala em tratar os erros da API como 400 e 500, eu pensei em usar o toaster para isso, porém como está documentado os erros da API fornecida eu achei que seria mais agradável ao usuário, só aparecer que não tem os dados mesmo.
- Quando falam em "tratamento para rotas que não existem" eu interpretei como uma tela personalizada de "Not Found", porém eu entendo que caberia também talvez um redirect automático para outra página.
- Eu acho que esse é o que passou mais dúvida aos candidatos, eu não entendi essa parte de "Criar nome para aplicação", se é so um nome de repositório mesmo ou um nome criativo kkk, então lá vai o meu nome "Faster Drinks - Um drink faster para o seu "dia faster", acho que merecia passar na vaga só por esse nome, pode falar 😅

Obrigado pela atenção, caríssimo avaliador. Segue abaixo alguns links importantes e uma instrução de como rodar a aplicação localmente e seus devidos testes

## Links

- Aplicação em produção: https://faster-test.vercel.app

- Figma que tinha comentado anteriormente: https://www.figma.com/file/BJFYjKgL3hFzfbzithzziu/Desafio-T%C3%A9cnico---Faster?type=design&node-id=44%3A121&mode=design&t=FmBpEh92n8Elsro9-1

## Como rodar a aplicação

1. Clone o projeto

```sh
git clone git@github.com:luissena/faster-test.git
```

2. Entre na pasta

```sh
cd faster-test
```

3. Instale as dependências

```sh
npm i
```

4. Rode o projeto

```sh
npm run dev
```

## Como testar

```sh
npm run test
```
