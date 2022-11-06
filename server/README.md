# API/Back-end do projeto, desenvolvido em Node.js

### Informações importantes

- MERMAID - geração de diagramas através de código

- CORS - é um mecanismo de segurança para definir quais aplicações estão autorizadas a acessar os dados do nosso backend. Precisamos configurar o cors se não nosso frontend não vai conseguir consumir os dados futuramente.

- SEED-BD: É um arquivo que popula o BD com alguns dados fictícios, princialmente para trabalhar em ambiente de desenvolvimento

- Zod - biblioteca de validação

- JWT - Json Web Token -> é um padrão para autenticação e troca de informações

### Extras que podem deixar a aplicação ainda melhor:

- Na Web a pessoa precisa fazer login primeiro para ser dona do bolão e aí no banco de dados não vai permitir mais ownerId nulo(?) (Pesquisar como fazer autenticação social na web)

##
### Anotações

 - new Date().toISOString()
 - Refresh Token -> Para deixar o usuário sempre logado na aplicação
 - trocar  Pool para Poll  -> Era para ser Bolão, mas a tradução está errada (risos)

### Diagrama ERD



![index_imagem](https://github.com/Samuelloliiveira/nlw-copa/blob/main/image/diagrama-ERD.png?raw=true)
