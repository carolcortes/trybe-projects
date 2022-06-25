# Projeto ES6 e Testes Unitários
- Maio de 2022.

### Projeto desenvolvido no Bloco 7 - Introdução à JavaScript ES6 e Testes Unitários, no módulo de Fundamentos do Desenvolvimento Web

#### Conteúdos abordados:
  - JavaScript ES6 - let, const, arrow functions e template literals;
  - JavaScript ES6 - Fluxo de exceção e Objetos
  - Primeiros passos em Jest.

<details>
  <summary><strong>O que foi desenvolvido</strong></summary><br />
  Implementação de funções na resolução dos requisitos propostos e/ou testes unitários, de acordo com o que está sendo solicitado em cada enunciado.
</details>

<details>
  <summary><strong>Habilidades</strong></summary>

  - Escrever testes unitários utilizando o módulo Jest do NodeJS para verificar o correto funcionamento das funções;

  - Escrever funções de forma que elas atendam a testes já implementados;
  
  - Escrever testes e funções utilizando uma abordagem de desenvolvimento orientado a testes.
</details>

# Requisitos Obrigatórios

### 1. Implemente a função `average`
A função average recebe um array de tamanho variável e retorna a média dos valores recebidos. Caso a função receba algum valor não numérico ou um array vazio, o valor `undefined` deve ser retornado. Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1. O arquivo `average.spec.js` contém os testes para `average` já implementados. Implemente a função no arquivo `src/average.js` de forma que ela atenda aos testes propostos.

### 2. Implemente os casos de teste para a função `numbers`
A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário. Essa função já está implementada no arquivo `src/numbers.js`. Escreva pelo menos quatro testes para essa função para garantir que a implementação de `numbers` está correta.

### 3. Implemente a função `vqv`
Use template literals para escrever uma função que recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  ```javascript
  `Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!`
  ```

  Caso a função seja chamada sem nenhum parâmetro, o valor `undefined` deve ser retornado. O arquivo `vqv.spec.js` contém os testes para `vqv` já implementados. Implemente a função no arquivo `src/vqv.js` de forma que ela atenda aos testes propostos.

### 4. Implemente os casos de teste para a função `circle`
A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência. Se não for especificado um raio, a função retorna `undefined`. Essa função já está implementada no arquivo `src/circle.js`. Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

### 5. Implemente a função `createStudent`
A função `createStudent` recebe como parâmetro um **nome**, e retorna um objeto contendo duas chaves:

  1. **name**, contendo o nome passado como parâmetro;
  2. **feedback**, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  O arquivo `createStudent.spec.js` contém os testes para `createStudent` já implementados. Implemente a função no arquivo `src/createStudent.js` de forma que ela atenda aos testes propostos.

### 6. Implemente os casos de teste para a função `productDetails`
A função `productDetails` recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos:

  ```javascript
  productDetails('Alcool gel', 'Máscara');
  ```

  **Retorna:**

  ```js
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
  ```

  Essa função já está implementada no arquivo `src/productDetails.js`. Escreva pelo menos cinco testes para essa função no arquivo `tests/productDetails.js` para garantir que a implementação de `productDetails` está correta.

### 7. Implemente as funções `calculator` e `arrayGenerator`
A função `calculator` recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
  - sum;
  - mult;
  - div;
  - sub.

  Para cada chave atribua como valor a operação correspondente à sua chave:
  - `sum:` retorna o resultado da soma dos dois números;
  - `mult:` retorna o resultado da multiplicação dos dois números;
  - `div:` retorna o resultado da divisão dos dois números;
  - `sub:` retorna o resultado da subtração dos dois números.

  Os resultados das divisões devem sempre ser arredondados para baixo.

  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  ```javascript
  calculator(1, 2); // { sum: 3, mult: 2, div: 0, sub: -1 }
  ```

  Já a função `arrayGenerator` converte objetos em arrays, de chaves, valores ou ambos. Ela deve receber dois parâmetros:

  - o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
  - o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

  Comportamento:
  ```javascript
  arrayGenerator('keys', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 3, 2, 1, 0 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 1 ], [ 'sub', 0 ] ]
  ```
  O arquivo `objPlayground.spec.js` contém os testes para `calculator` e `arrayGenerator` já implementados. Implemente as funções no arquivo `src/objPlayground.js` de forma que ela atenda aos testes propostos.

### 8. Implemente a função `myCounter`
A função myCounter possui dois loops aninhados que inserem valores dentro de um array. Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.

   Corrija a função `myCounter`, sem eliminar nenhum dos loops de repetição, para que a função retorne o array correto. O arquivo `myCounter.spec.js` contém os testes para `myCounter` já implementados. Implemente a função no arquivo `src/myCounter.js` de forma que ela atenda aos testes propostos.

### 9. Implemente os casos de teste para a função `getCharacter`
A função `getCharacter` recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.

  ```javascript
  getCharacter('Arya');
  ```

  **Retorna:**

  ```javascript
  {
    name: 'Arya Stark',
    class: 'Rogue',
    phrases: ['Not today', 'A girl has no name.']
  }
  ```

  Essa função já está implementada no arquivo `src/getCharacter.js`. Escreva pelo menos seis testes para essa função no arquivo `tests/getCharacter.spec.js` para garantir que a implementação de `getCharacter` está correta.

### 10. Implemente a função `createMenu`, bem como seus casos de teste
Esse último requisito vai te guiar por um rico processo de Desenvolvimento Orientado a Testes ou TDD - Test Driven Development

  Imagine a seguinte situação: você é responsável por escrever o código do sistema de pedidos de um restaurante através do qual será possível cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto que permite:

  - Ler o menu cadastrado;
  - Fazer pedidos;
  - Verificar o que foi pedido;
  - Somar o valor da conta.

  A estrutura deste código e deste objeto já está definida e você precisa implementá-la. Você encontrará mais detalhes sobre a estrutura a ser seguida e exemplos do retorno da função no arquivo `src/restaurant.js`.

  **IMPORTANTE - BOAS PRÁTICAS TDD: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js`** 