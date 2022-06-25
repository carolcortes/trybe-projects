# Projeto Zoo Functions
- Maio de 2022

### Projeto desenvolvido no Bloco 8 - Higher Order Functions e JavaScript ES6, no módulo de Fundamentos do Desenvolvimento Web

#### Conteúdos abordados:
  - JavaScript ES6 - Introdução a Higher Order Functions;
  - JavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort;
  - JavaScript ES6 - Higher Order Functions - map e filter;
  - JavaScript ES6 - Higher Order Functions - reduce;
  - JavaScript ES6 - spread operator, parâmetro rest, destructuring e mais.
	
<details>
<summary><strong>O que foi desenvolvido</strong></summary><br />
  
  Desenvolvimento de funções que organizam e buscam informações sobre os animais do zoológico como: espécie e local de origem. 🧑‍🌾🐘

 Implementação de testes que contribuem para a escrita de códigos mais confiáveis e com boa performance.
<br />
</details>

# Requisitos Obrigatórios

## 1. Implemente a função `getSpeciesByIds`
<details>
  <summary>
  Busque as espécies dos animais por meio de um <code>id</code> e retorne um array contendo todos os animais dessa espécie.
  </summary> <br />

- Faça com que a função `getSpeciesByIds` possa receber vários parâmetros;

- Retorne um array vazio se a função não receber um `id`;

- Retorne as seguintes informações do arquivo `data`:

  - Se a função receber apenas um `id`, retorne a espécie do animal referente a este `id`;

  - Se a função receber vários `ids`, retorne todas as espécies referente a esses `ids`.

</details>

## 2. Implemente a função `getAnimalsOlderThan`
<details>
  <summary>
  Ao receber uma espécie e uma idade como parâmetro, retorne se todos os animais dessa espécie possuem essa idade ou são mais velhos.
  </summary> <br />

- Verifique se todos os animais da espécie passada como parâmetro possuem a idade mínima:
  - Os animais devem ter essa idade ou serem mais velhos.

- Retorne um valor booleano.
</details>

## 3. Implemente a função `getEmployeeByName`
<details>
  <summary>
    Busque as pessoas colaboradoras pelo primeiro ou último nome delas
  </summary> <br />

- Retorne um objeto vazio caso a função não receba parâmetros;

- Retorne as informações da pessoa colaboradora caso o parâmetro seja igual ao nome **ou** igual ao último nome no seguinte formato:

```javascript
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    firstName: 'Nigel',
    lastName: 'Nelson',
    managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83', 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
    responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'],
  }
```
</details>

## 4. Implemente a função `getRelatedEmployees`
<details>
  <summary>
    Verifique se uma pessoa colaboradora é gerente e quais pessoas ela lidera
  </summary> <br />

Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções:

1. `isManager` que será responsável por verificar se uma pessoa colaboradora é gerente:
    - Retorne `true` se o `id` passado for de uma pessoa gerente;
    - Retorne `false` se o `id` passado não for de uma pessoa gerente.

2. `getRelatedEmployees` que retorna as pessoas lideradas pela gerência:
      - Utilize a função `isManager` para verificar se a pessoa é gerente ou não e faça as seguintes verificações:

        - Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa.

        Exemplo de output:

        ```javascript

        [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];

        ```

        - Caso a pessoa não seja gerente, dispare um erro com a mensagem: **'O id inserido não é de uma pessoa colaboradora gerente!'**.
  
        Para lançar o erro, você vai utilizar a função construtora **Error** da biblioteca padrão do JavaScript.

        Exemplo:

        ```javascript

        throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');

        ```

        Você pode ler mais sobre a [função construtora **Error**, neste link.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

</details>

## 5. Implemente a função `countAnimals`
<details>
  <summary>
    Contabilize a quantidade de espécies de animais residentes no zoológico
  </summary> <br />

A função `countAnimals` é responsável por contar a quantidade e animais que residem no zoológico.
  
- Retorne a quantidade de animais residentes por espécie, caso a função não receba parâmetro. O retorno deverá ser um objeto cujo o nome de cada espécie é a chave e o total de animais (residentes) dessa espécie é o valor. Por exemplo:

```javascript
  {
    lions: 4,
    // [...]
  }
```

- Retorne a quantidade de animais residentes no zoológico da espécie passada por parâmetro. Por exemplo:

  - ao receber o argumento `{ specie: 'penguins' }`, retorna apenas a quantidade (número) de pinguins que residem no zoológico;

  - ao passar o argumento `{ specie: 'giraffes', sex: 'female' }`, retorna apenas a quantidade (número) de girafas fêmeas que residem no zoológico.

</details>

## 6. Obtenha ao menos 80% de cobertura de testes na função `handlerElephants`
<details>
  <summary>
    Implemente os testes da função <code>handlerElephants</code> para obter ao menos 80% de cobertura
  </summary> <br />

Essa função retorna informações referentes aos elefantes conforme o argumento passado:

| Argumento | Informação |
| --------- | ---------- |
| `count` | retorna a quantidade de elefantes |
| `names` | retorna um array com a relação dos nomes de todos os elefantes |
| `averageAge` | retorna a média de idade dos elefantes |
| `location` | retorna a localização dos elefantes dentro do Zoológico |
| `popularity` | retorna a popularidade dos elefantes |
| `availability` | retorna um array com a relação de dias em que é possível visitar os elefantes |

</details>

## 7. Obtenha ao menos 90% de cobertura de testes na função `handlerElephants`
<details>
  <summary>
    Implemente os testes da função <code>handlerElephants</code> para obter ao menos 90% de cobertura
  </summary> <br />

</details>

## 8. Implemente a função `calculateEntry`
<details>
  <summary>
    Calcule o valor <strong>total</strong> da entrada dos visitantes do zoológico
  </summary> <br />

O valor das entradas do zoológico é calculado a partir da faixa etária, onde:

  - `child`: são pessoas **menores** de 18 anos;

  - `adult`: são pessoas com idade **maior ou igual** a 18 anos **e menor** que 50 anos;

  - `senior`: são pessoas com idade **maior ou igual** a 50 anos.

Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções, chamadas de `countEntrants` e `calculateEntry`. 

As duas funções recebem um array no seguinte formato:

```javascript
const entrants = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
];
```

1. `countEntrants` será responsável por calcular a quantidade de visitantes por faixa etária: 

  Ela recebe um array e deve retornar um **objeto**. Para isso:

  - Realize a soma da quantidade de visitantes por faixa etária;

  - Retorne um objeto em um formato como esse: `{ child: 3, adult: 2, senior: 1 }`.

2. `calculateEntry` será responsável por somar o valor da entrada das pessoas no zoológico:

  Ela recebe um array e deve retornar a soma **total** dos valores do ingresso. Para isso:

  - Retorne `0` se nenhum parâmetro for passado ou seja um array vazio;

  - Utilize a função `countEntrants` para ter a quantidade total de pessoas por faixa etária;

  - Realize a soma dos valores dos ingressos por faixa etária. Seu retorno deve ser parecido com esse: `187.94`.

> **De olho na dica 👀:** O valor a ser cobrado pela faixa de idades também consta no arquivo de dados.

**Exemplo de uso da função `calculateEntry`:**

```javascript
calculateEntry(entrants);
```

**Saída:**

```javascript
187.94
```
</details>

## 9. Implemente a função `getSchedule`
<details>
  <summary>
    Crie um cronograma com os horários de visita disponíveis para cada espécie de animal
  </summary> <br />

As informações dos horários dos animais devem ser disponibilizadas em uma consulta para as pessoas que estão visitando o zoológico, que podem querer ter acesso ao cronograma da semana, de um dia ou de um animal específico.

- Retorne um array com os dias da semana em que um animal está disponível para visitação caso o parâmetro da função seja um animal. Por exemplo: `[ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ]`;

- Retorne todos os horários disponíveis para cada dia da semana caso a função:

  - não receba parâmetro;

  - o parâmetro passado para a função não seja um animal ou um dia;

  Para isso:

  - Crie um objeto e adicione todos os dias da semana como chave;

  - Os valores de cada dia da semana deve ser um objeto, possuindo as chaves `officeHour` e `exhibition`:

    - `officeHour` deve possuir o texto com o horário que o zoológico abre e fecha naquele dia da semana;

    - `exhibition` deve possuir um array com o nome de todos os animais disponíveis para visitação naquele dia da semana.

<details>
  <summary>
    O retorno deve ser parecido com esse:
  </summary> <br />

  ```javascript
  {
    Tuesday: { // Dia da semana
      officeHour: 'Open from 8am until 6pm', // n
      exhibition: [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
    },
    Wednesday: {
      officeHour: 'Open from 8am until 6pm',
      exhibition: [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
    },
    // [...]
  }
  ```

</details>
- Retorne os animais disponíveis no dia, caso o parâmetro da função seja apenas um dia da semana;

</details>

## 10. Implemente a função `getOldestFromFirstSpecies`
<details>
  <summary>
    Encontre o animal mais velho de uma espécie que é gerenciado por uma pessoa colaboradora
  </summary> <br />

A função recebe um parâmetro `id` referente à pessoa colaboradora e a partir desse `id`:

- Encontre a pessoa colaboradora que possui o `id` passado por parâmetro;

- Encontre a **primeira** espécie de animal que a pessoa colaboradora é responsável;

- Encontre o animal mais velho daquela espécie;

- Retorne um array com as informações do animal mais velho daquela espécie.
</details>

## 11. Implemente a função `getEmployeesCoverage`
<details>
  <summary>
    Busque as informações sobre a pessoa colaboradora e por quais espécies ela é responsável
  </summary> <br />

A função vai receber um objeto como parâmetro que vai determinar o seu comportamento, sendo:

  - `name`: o nome **ou** sobrenome da pessoa a ser buscada;

  -  `id`: o id da pessoa a ser buscada.

E deve retornar um objeto no seguinte formato:

```javascript
{
	id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
	fullName: "Sharonda Spry", // nome completo: firstName + lastName
	species: [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
	locations: [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
}
```

Para isso:

  - Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade `name`:
    - a propriedade `name` pode possuir como valor o primeiro ou último nome da pessoa colaboradora, portanto garanta que seu código funciona das duas maneiras. 

  - Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade `id`;

  - Retorne um array com as informações de **todas** as pessoas colaboradoras caso a função não receba parâmetro;

  - Lance um erro caso o `id` seja inválido.


**Exemplos de uso da função `getEmployeesCoverage`:**

  <details>
    <summary>
      Caso o parâmetro seja um objeto com nome e id, retorne as informações da pessoa colaboradora 
    </summary> <br />

**ENTRADA:**

```javascript
getEmployeesCoverage({ name:  'Sharonda' }); // name recebe o primeiro nome como parâmetro ou
getEmployeesCoverage({ name:  'Spry' }); // name recebe o último nome como parâmetro ou
getEmployeesCoverage({ id:  '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }); // recebe um id como parâmetro
```

**SAÍDA:**

```json
{
	"id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
	"fullName": "Sharonda Spry",
	"species": [ "otters", "frogs" ],
	"locations": [ "SE", "SW" ]
}
```

</details>

  <details>
    <summary>
      Caso a função não receba parâmetros, retorne um array com a informação de <strong>todas</strong> as pessoas colaboradoras
    </summary> <br />

**ENTRADA:**

```javascript
getEmployeesCoverage();
```

**SAÍDA:**

```javascript
[
	{
		"id":  "c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1",
		"fullName":  "Nigel Nelson",
		"species": [ "lions", "tigers" ],
		"locations": [ "NE", "NW" ],
	},
	{
		"id":  "0e7b460e-acf4-4e17-bcb3-ee472265db83",
		"fullName":  "Burl Bethea",
		"species": [ "lions", "tigers", "bears", "penguins" ],
		"locations": [ "NE", "NW", "NW", "SE" ],
	},
	{
		"id":  "fdb2543b-5662-46a7-badc-93d960fdc0a8",
		"fullName":  "Ola Orloff",
		"species": [ "otters", "frogs", "snakes", "elephants" ],
		"locations": [ "SE", "SW", "SW", "NW" ],
	},
	//[...]
];
```

</details>

<details>
  <summary>
    Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, lance um erro
  </summary> <br />

Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, deverá ser lançado um erro gerado com a função construtora **Error** da biblioteca padrão do JavaScript com a mensagem **"Informações inválidas"**.
</details> 
<br />
</details>

## 12. Obtenha ao menos 85% de cobertura de testes na função `getOpeningHours`
<details>
  <summary>
    Implemente os testes da função <code>getOpeningHours</code> para obter ao menos 85% de cobertura
  </summary> <br />

Esta função recebe como argumentos um dia da semana e um horário, e retorna uma mensagem informando se o zoológico está aberto ou não naquela data e hora.

- Implemente os testes nos arquivos da pasta `test` que está na raiz do projeto;

- A função `getOpeningHours` já está implementada, sendo necessário apenas criar os testes;

- Use o comando `npm test getOpeningHours` para verificar se seus testes estão passando;

- Use o comando `npm run test:coverage` para testar a cobertura;

- O nome do dia da semana passado como argumento tem que ser em inglês;

- O horário precisa ter a seguinte formatação `'XX:XX-XM'`;

- As horas serão validadas na nomenclatura `'AM'` e `'PM'`;

- A função não faz diferenciação entre maiúsculas e minúsculas;

**A cobertura irá checar apenas as funções destacadas e não toda a aplicação!**

⚠️ **Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.

</details>

## 13. Obtenha ao menos 95% de cobertura de testes na função `getOpeningHours`
<details>
  <summary>
    Implemente os testes da função <code>getOpeningHours</code> para obter 95% de cobertura
  </summary> <br />

## 14. Implemente a função `getAnimalMap`
<details>
  <summary>
    Faça o mapeamento geográfico dos animais de cada espécie e realize filtros de localização, nome em ordem alfabética e sexo.
  </summary> <br />

  A função `getAnimalMap` é responsável por categorizar os animais por localização, além de filtrá-los por região, nome e sexo a partir de um parâmetro. A estrutura do retorno da função é baseada na localização das espécies:

```javascript
  {
    NE: [ /* dados aqui */],
    NW: [/* dados aqui */],
    SE: [/* dados aqui */],
    SW: [/* dados aqui */],
  }
```
  
   Os parâmetros da função podem ser:

   <details>
     <summary>
      <code>includeNames: true</code>, que retorna o nome dos animais no seguinte formato:
     </summary> <br />

```javascript
  NE: [
    { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
    { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
  ],
  // [...]
```
   </details>

<details>
  <summary>
    <code>sorted: true</code> que retorna o nome dos animais por ordem alfabética no seguinte formato:
  </summary> <br />

  ```javascript
  NE: [
    { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
    { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] },
  ],
  // [...]
```
</details>

<details>
  <summary>
    <code>sex: male</code> ou <code>sex: female</code> retorna o <strong>nome</strong> dos animais que são machos ou fêmeas no seguinte formato:
  </summary><br />

```javascript
  NE: [
    { lions: ['Zena', 'Dee'] },
    { giraffes: ['Gracia', 'Vicky'] },
  ],
  // [...]
```

⚠️ **Atenção:** Se o parâmetro for `{ sex: male }`, retorne apenas o nome dos animais machos e se o parâmetro for `{ sex: female }` retorne apenas o nome dos animais fêmeas.

</details>

<details>
  <summary>
  Caso a função não receba parâmetro, as espécies dos animais devem ser categorizadas por localização e deve retornar um objeto no seguinte formato:
  </summary> <br />

  ```javascript
  {
    NE: ['lions', 'giraffes'],
    NW: ['tigers', 'bears', 'elephants'],
    SE: ['penguins', 'otters'],
    SW: ['frogs', 'snakes'],
  }
  ```

</details>

Para isso:

  - Retorne a espécie de todos os animais categorizados por localização caso a função:

    - não receba parâmetro;

    - não receba o parâmetro `{includesName: true}` e receba apenas o parâmetro `{sex: female}`;

    - não receba o parâmetro `{includesName: true}` e receba apenas o parâmetro `{sex: female, sorted: true}`.

  - Retorne a espécie e o nome dos animais caso a função receba apenas o parâmetro `{includesName: true}`;

  - Retorne a espécie e o nome dos animais em ordem alfabética caso a função receba o parâmetro `{includesName: true, sorted: true}`;

  - Retorne a espécie e o nome dos animais filtrado por sexo:

    - Retorne a espécie e o nome dos animais fêmeas, caso o parâmetro da função seja `{includesName: true, sex: female}`;

    - Retorne a espécie e o nome dos animais machos, caso o parâmetro da função seja `{includesName: true, sex: male}`;

  - Retorne a espécie e o nome dos animais filtrado por sexo e por ordem alfabética:

    - Retorne a espécie e o nome dos animais fêmeas em ordem alfabética, caso o parâmetro da função seja `{includesName: true, sex: female, sorted: true}`;

    - Retorne a espécie e o nome dos animais machos em ordem alfabética, caso o parâmetro da função seja `{includesName: true, sex: male, sorted: true}`;
  
> **De olho na dica 👀:** Você não precisa diferenciar os filtros de sexo entre `female` ou `male`, apenas por `sex`.

</details>

# Requisitos Bônus

## 15. Obtenha 100% de cobertura de testes na função `handlerElephants`
<details>
  <summary>
    Implemente os testes da função <code>handlerElephants</code> para obter 100% de cobertura
  </summary> <br />

</details>

## 16. Obtenha ao menos 100% de cobertura de testes na função `getOpeningHours`
<details>
  <summary>
    Implemente os testes da função <code>getOpeningHours</code> para obter 100% de cobertura
  </summary> <br />
</details>
