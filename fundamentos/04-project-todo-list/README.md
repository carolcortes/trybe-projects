# Projeto Lista de Tarefas
##### `(Projeto Bônus)`

  - Abril de 2022.

### Projeto desenvolvido no Bloco 5 - JavaScript: DOM, Eventos e Web Storage, no módulo de Fundamentos do Desenvolvimento Web

#### Conteúdos abordados:
  - JavaScript - DOM e seletores;
  - JavaScript - Trabalhando com elementos;
  - JavaScript - Eventos;
  - JavaScript - Web Storage.

## Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
- [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
- [Desenvolvimento](#desenvolvimento)
- [Data de Entrega](#data-de-entrega)
- [Requisitos do projeto](#requisitos-do-projeto)

    `Requisitos obrigatórios:`
    - [1 - Adicone à sua lista o título "Minha Lista de Tarefas" em uma tag <header>](#1---adicone-à-sua-lista-o-título-minha-lista-de-tarefas-em-uma-tag-)
    - [2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"](#2---adicione-abaixo-do-título-um-pequeno-e-discreto-parágrafo-com-idfuncionamento-e-com-o-texto-clique-duas-vezes-em-um-item-para-marcá-lo-como-completo)
    - [3 - Adicione um input com o id="texto-tarefa" onde o usuário poderá digitar o nome do item que deseja adicionar à lista](#3---adicione-um-input-com-o-idtexto-tarefa-onde-o-usuário-poderá-digitar-o-nome-do-item-que-deseja-adicionar-à-lista)
    - [4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"](#4---adicione-uma-lista-ordenada-de-tarefas-com-o-idlista-tarefas)
    - [5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo](#5---adicione-um-botão-com-idcriar-tarefa-e-ao-clicar-nesse-botão-um-novo-item-deverá-ser-criado-ao-final-da-lista-e-o-texto-do-input-deve-ser-limpo)
    - [6 - Ordene os itens da lista de tarefas por ordem de criação](#6---ordene-os-itens-da-lista-de-tarefas-por-ordem-de-criação)
    - [7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza](#7---clicar-em-um-item-da-lista-deve-alterar-a-cor-de-fundo-do-item-para-cinza)
    - [8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo](#8---não-deve-ser-possível-selecionar-mais-de-um-elemento-da-lista-ao-mesmo-tempo)
    - [9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item](#9---clicar-duas-vezes-em-um-item-ele-deverá-ser-riscado-indicando-que-foi-completo-deve-ser-possível-desfazer-essa-ação-clicando-novamente-duas-vezes-no-item)
    - [10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista](#10---adicione-um-botão-com-idapaga-tudo-que-quando-clicado-deve-apagar-todos-os-itens-da-lista)
    - [11 - Adicione um botão com id="remover-finalizados" que quando clicado remove **somente** os elementos finalizados da sua lista](#11---adicione-um-botão-com-idremover-finalizados-que-quando-clicado-remove-somente-os-elementos-finalizados-da-sua-lista)

    `Requisitos bônus:`
    - [12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava](#12---adicione-um-botão-com-idsalvar-tarefas-que-salve-o-conteúdo-da-lista-se-você-fechar-e-reabrir-a-página-a-lista-deve-continuar-no-estado-em-que-estava)
    - [13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas](#13---adicione-dois-botões-um-com-idmover-cima-e-outro-com-idmover-baixo-que-permitam-mover-o-item-selecionado-para-cima-ou-para-baixo-na-lista-de-tarefas)
    - [14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado](#14---adicione-um-botão-com-idremover-selecionado-que-quando-clicado-remove-o-item-selecionado)

# Habilidades

- Manipular CSS

- Manipular Javascript

## O que deverá ser desenvolvido

- Será desenvolvido uma lista de tarefas usando `HTML`, `CSS` e `JavaScript`.

## Data de Entrega

  - Serão `2` dias de projeto.
  - Data de entrega para avaliação final do projeto: `04/05/2022 14:00`.

## Requisitos do projeto

### 💡Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ~~e deve~~ ir além para deixar o projeto com a sua cara e impressionar todas as pessoas!

![exemplo de uma todo list](./todo-list-example.gif)

## Requisitos Obrigatórios:

### 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag <header>

### 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"

### 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista

### 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"

### 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

### 6 - Ordene os itens da lista de tarefas por ordem de criação

### 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza

### 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

### 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item

    Pontos importantes sobre este requisito:

    * Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

    * Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.

### 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

### 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove **somente** os elementos finalizados da sua lista

## BÔNUS

### 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava

### 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas

    Pontos importantes sobre este requisito bônus:

    * Antes de começar a desenvolver essa funcionalidade, pare e pense. O que significa mover um item de uma lista para cima ou para baixo no **_DOM_**? Você já possui todas as habilidades necessárias para fazer isso.

    * Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?

### 14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado
