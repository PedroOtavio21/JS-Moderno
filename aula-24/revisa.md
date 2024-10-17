# JS IV - npx e scripts npm

## Oque é npx e como utilizar? 
 - Npx é basicamente um executável de um projeto ou biblioteca que instalarmos como dependência por fora, sendo indentificável dentro do node_modules/.bin/;
 - para executar: npx "string-contida-em-.bin"

## Oque são scripts npm? 
- Já os scripts do npm são uma outra forma de exercutar comando específicos, escolhidos por você, na linha de comando do terminal do projeto.

- São definidos dentro do package.json, onde possui um "nome" em sua chave e uma "valor", que consiste do comando escolhido para ser executado no terminal

- Para executar: npm run "nome" (O mesmo acima, que irá executar o comando em scripts.)

- Podem também serem executas arquivos .js a partir do script, como "start": "node index.js"