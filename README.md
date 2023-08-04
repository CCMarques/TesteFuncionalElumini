<h1>Teste Funcional E2E</h1>

> Descrição:

+ Este projeto contém testes funcionais automatizados utilizando a biblioteca Cypress
  para realizar interações com o site da VR (Vale Refeição),
   O teste visa verificar e visualizar o mapa com as localidades que são aceitos o beneficio.

> Pré-requisitos

+ Certifique-se de ter o Node.js instalado em sua máquina.

> Instalação

1. Clone este repositório ou faça o download dos arquivos do projeto.
2. Abra o terminal e navegue até o diretório raiz do projeto.
3. Execute o seguinte comando para instalar as dependências do projeto: 
   + npm install

> Executando os Testes

1. Após a instalação das dependências, execute o seguinte comando no terminal para abrir a interface do Cypres:
   + npx cypress open

2. Isso abrirá a interface do Cypress, onde você verá uma lista de arquivos de teste.
   Clique no arquivo "NomeDoArquivo.spec.js" para executar o teste.

3. O teste automatizado será executado no navegador e você poderá ver
   cada etapa sendo executada e visualizar o resultado.

> Sobre o Teste

O teste automatizado segue as seguintes etapas:
- Acessar o site www.vr.com.br
- Navegar até a seção “Pra Você̂” (onde-aceita.htm).
- Clicar no botão “Onde usar meu cartão VR”.
- Validar que o mapa do Google abriu em tela.
