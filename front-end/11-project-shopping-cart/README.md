# Projeto Carrinho de Compras

- Junho de 2022

### Projeto desenvolvido no Bloco 9 - JavaScript e Testes Assíncronos, no módulo de Desenvolvimento Front-end

#### Conteúdos abordados:
  - Introdução - Front-end;
  - JavaScript Assíncrono e Callbacks;
  - JavaScript Assíncrono - Fetch API e async/await;
  - Testes Assíncronos.

<details>
  <summary><strong>🛒 O que foi desenvolvido</strong></summary><br />

- Desenvolvimento de um **carrinho de compras** totalmente dinâmico, consumindo dados diretamente de uma **API**.
- TDD (Desenvolvimento orientado a testes).
</details>

<details>
<summary><strong>⚙️ API do Mercado Livre</strong></summary><br />

O [manual da API do Mercado Livre](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas) contém todas as informações acerca da API (retorno, estrutura). 
</details>

# Requisitos Obrigatórios

## 1. (TDD) Desenvolva testes de no mínimo 25% de cobertura total e 100% da função `fetchProducts`
<details>
  <summary>
    Implemente os testes necessários na função <code>fetchProducts</code>
  </summary> <br />

O arquivo para implementar o teste já está criado, se chama `fetchProducts.test.js` e se encontra dentro da pasta `tests`.

</details>

## 2. Crie uma listagem de produtos
<details>
  <summary>
    Utilize a função <code>fetchProducts</code> para criar uma listagem de produtos através da API do Mercado Livre.
  </summary> <br />

O arquivo da função `fetchProducts` já está criado e se encontra dentro da pasta `helpers` e está importado dentro do arquivo HTML.

- Implemente a função `fetchProducts` para retornar a listagem de produtos;
</details>

## 3. (TDD) Desenvolva testes de no mínimo 50% de cobertura total e 100% da função `fetchItem`
<details>
  <summary>
    Implemente os testes necessários na função <code>fetchItem</code>
  </summary> <br />

**O que você deve testar:**

- Teste se `fetchItem` é uma função;

- Execute a função `fetchItem` com o argumento do item "MLB1615760527" e teste se `fetch` foi chamada;

- Teste se, ao chamar a função `fetchItem` com o argumento do item "MLB1615760527", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";

- Teste se o retorno da função `fetchItem` com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto `item` que já está importado no arquivo.

- Teste se, ao chamar a função `fetchItem` sem argumento, retorna um erro com a mensagem: `'You must provide an url'`.

> **De olho na dica 👀:** Lembre-se de usar o `new Error('mensagem esperada aqui')` para comparar com o objeto retornado da API.
> Leia com bastante atenção o que está sendo solicitado e implemente um teste de cada vez!
</details>

## 4. Adicione o produto ao carrinho de compras
<details>
  <summary>
    Implemente a função <code>fetchItems</code> para retornar dados de um produto e adicioná-lo ao carrinho.
  </summary> <br />

Cada produto na página _HTML_ possui um botão com o nome `Adicionar ao carrinho` e, ao clicar nesse botão, você deve realizar uma requisição que vai retornar todos os detalhes de um produto.

</details>

## 5. Remova o item do carrinho de compras ao clicar nele
<details>
  <summary>
    Ao clicar no <strong>produto no carrinho de compra</strong>, ele deve ser removido da lista.
  </summary> <br />

Ao clicar em um dos itens do carrinho de compras, esse item deve ser removido da lista. Para isso:

- Utilize a função `cartItemClickListener(event)` para implementar a lógica necessária para remover o item do carrinho.

</details>

## 6. (TDD) Desenvolva testes de no mínimo 75% de cobertura total e 100% da função `saveCartItems`
<details>
  <summary>
    Implemente os testes necessários na função <code>saveCartItems</code>
  </summary> <br />

O arquivo para implementar o teste já está criado, se chama `saveCartItems.test.js` e se encontra dentro da pasta `tests`.

**O que você deve testar:**

- Teste se, ao executar `saveCartItems` com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` é chamado;

- Teste se, ao executar `saveCartItems` com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` é chamado com dois parâmetros, sendo o primeiro 'cartItems' e o segundo sendo o valor passado como argumento para `saveCartItems`.

</details>

## 7. (TDD) Desenvolva testes para atingir 100% de cobertura total e 100% da função `getSavedCartItems`
<details>
  <summary>
    Implemente os testes necessários na função <code>getSavedCartItems</code>
  </summary> <br />

O arquivo para implementar o teste já está criado, se chama `getSavedCartItems.test.js` e se encontra dentro da pasta `tests`.

**O que você testar:**

- Teste se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado;

- Teste se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado com o 'cartItems' como parâmetro.

</details>

## 8. Carregue o carrinho de compras ao iniciar a página
<details>
  <summary>
    Salve os itens adicionados no carrinho de compras no <code>localStorage</code>
  </summary> <br />

Ao carregar a página, o estado atual do carrinho de compras deve ser carregado do **LocalStorage**. Para que isso funcione, os itens do carrinho de compras devem ser salvos no **LocalStorage**, ou seja, a **adição** e **remoção** de um produto devem ser abordadas para que a lista esteja sempre atualizada.

Para isso, você terá de implementar as funções `saveCartItems` e `getSavedCartItems` que já estão criadas com o nome `saveCartItems.js` e `getSavedCartItems.js`, respectivamente, dentro da pasta `helpers`.

- Implemente a função `saveCartItems` que deve possuir a lógica para apenas **adicionar** o item no `localStorage` em uma chave chamada `cartItems`;

- Implemente a função `getSavedCartItems` que deve possuir a lógica para apenas **retornar** o item do `localStorage`.

⚠️ A função `saveCartItems` **não** deve recuperar os itens do `localStorage`. A função `getSavedCartItems` **não** deve adicionar um item no `localStorage`.
</details>

## 9. Calcule o valor total dos itens do carrinho de compras
<details>
  <summary>
    O elemento com o valor <strong>total</strong> dos produtos deve possuir a classe <code>total-price</code>
  </summary> <br />

Cada vez que o carrinho de compras é modificado, será necessário calcular o valor total dos produtos e apresentá-los na página principal do projeto. Para isso:

- Implemente uma lógica para somar todos os produtos do carrinho;

</details>

## 10. Limpe o carrinho de compras
<details>
  <summary>
    Implemente a lógica no botão <code>Esvaziar carrinho</code> para limpar o carrinho de compras
  </summary> <br />

O botão para esvaziar o carrinho já está implementado, mas ele ainda não cumpre seu objetivo. Para isso:

- Certifique-se que o botão possui **obrigatoriamente** a classe `empty-cart`;

- Implemente a lógica para remover **todos** os itens do carrinho de compras;
</details>

## 11. Adicione um texto de `carregando` durante uma requisição à API
<details>
  <summary>
    Adicione um elemento com o texto <code>carregando...</code> durante a requisição à API
  </summary> <br />

Uma requisição à API gasta um certo tempo e durante esse processo a pessoa que está utilizando a página não tem como saber se a requisição deu certo ou não. Por isso, normalmente é utilizada alguma forma para mostrar que a requisição ainda está em andamento. Para isso:

- Crie um elemento que contenha o texto `carregando...`, que deve ser exibido em algum lugar da página;

- Exiba esse elemento apenas **durante** a requisição à API.

</details>
