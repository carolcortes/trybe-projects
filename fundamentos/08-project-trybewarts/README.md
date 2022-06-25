# Projeto Trybewarts Wizarding School :mage:
#### Desenvolvido com [Graciele Sampaio](https://github.com/graciele-sampaio)
- Maio de 2022.

### Projeto desenvolvido no Bloco 6 - HTML e CSS: Forms, Flexbox e Responsivo,  no módulo de Fundamentos do Desenvolvimento Web

#### Conteúdos abordados:
  - HTML & CSS - Forms;
  - Bibliotecas JavaScript e Frameworks CSS;
  - Introdução - CSS Flexbox;
  - CSS Flexbox;
  - CSS Responsivo - Mobile First.

# Habilidades
* Criar formulários em HTML;
* Utilizar CSS Flexbox para criar layouts flexíveis;
* Criar regras CSS específicas para serem aplicadas a dispositivos móveis;
* Construir páginas que alteram o seu layout de acordo com a orientação da tela;

## O que foi desenvolvido
Neste projeto, foi desenvolvido uma página de formulário da Escola de Magia de Trybewarts, em que as pessoas estudantes poderão enviar seus feedbacks sobre ela. O tema desse projeto é baseado na obra 'Harry Potter', de J. K. Rowling, já que programar é o mais próximo que podemos chegar de algo **verdadeiramente mágico**!

# Requisitos do projeto

## Lista de requisitos obrigatórios:
### 1. Crie uma barra verde na parte superior da página
* Esta barra deve possuir a classe `header`
* A classe `header` deve determinar que o elemento é um **flex container**
* A classe `header` deve possuir a propriedade `background-color: rgb(50, 167, 145)`

### 2. Adicione o logotipo da Trybewarts com a classe `trybewarts-header-logo` na barra superior
* Deve existir um elemento img com a classe `trybewarts-header-logo`
* O atributo `src` do logotipo deve apontar para `images/trybewarts-header-logo.svg`

### 3. Acrescente um formulário de login no canto direito da barra superior contendo os inputs de email, senha e um botão de login
* O formulário deve ter a classe `trybewarts-login`
* O input de **email** deverá ter o atributo `name` igual a **email** e o `placeholder` igual a **Email**
* O input de **senha** deverá ter o atributo `name` igual a **password** e o `placeholder` igual a **Senha**
* O botão deverá ter o texto **"Entrar"**
* O formulário deve ser um **flex container**
* O formulário deve estar a direita da logo
  * **Dica:** adicione a propriedade flex que faz os elementos terem o espaçamento máximo **entre eles** no **header**
* Ao preencher o formulário e clicar no botão, será validado que:
  * Caso o email seja **"tryber@teste.com"** e a senha seja **"123456"** será emitido um alerta contendo o texto **"Olá, Tryber!"** 
  * Em todos os outro casos deverá ser emitido um alerta contendo o texto **"Email ou senha inválidos."**

### 4. Crie um título com o texto `Trybewarts` centralizado dentro do `Header`
* Deve existir um elemento `<h1>` com o **id** `trybewarts-header-title` e com o texto **"Trybewarts"**
* O título deverá estar centralizado na barra verde
  * O header deve ter exatamente três elementos filhos
  * O filho do meio deve ser o título

### 5. Adicione um formulário no corpo da página
* Deve existir um formulário com o id `evaluation-form`
* O formulário deve estar inserido dentro de uma tag `main`
* Tanto o formulário quanto o `main` devem ser flex containers
* O formulário deve ter uma largura de 675px

### 6. Faça com que o eixo principal do formulário seja vertical
* Mude o eixo principal do formulário com id `evaluation-form` para vertical

### 7. Adicione a logo da Trybewarts no lado direito da página
* Crie um elemento `img` com o id `trybewarts-forms-logo`
* O atributo `src` deve apontar para `images/trybewarts-colored.svg`
* A imagem deve possuir o estilo css `height` de `500px`

### 8. Acrescente ao formulário com id `evaluation-form` os inputs de `nome, sobrenome e email`
* Deverá haver um input com o id **input-name** e placeholder **Nome**
* Deverá haver um input com o id **input-lastname** e placeholder **Sobrenome**
* Deverá haver um input com o id **input-email** e placeholder **Email**

### 9. Acrescente ao formulário um select com o id `house` contendo as opções `Gitnória`, `Reactpuff`, `Corvinode` e `Pytherina`
* Deverá conter a opção com `text` e `value` igual a `Gitnória` e com o `id` igual a `gitnoria-house`
* Deverá conter a opção com `text` e `value` igual a `Reactpuff` e com o `id` igual a `reactpuff-house`
* Deverá conter a opção com `text` e `value` igual a `Corvinode` e com o `id` igual a `corvinode-house`
* Deverá conter a opção com `text` e `value` igual a `Pytherina` e com o `id` igual a `pytherina-house`

### 10. Posicione os campos de `Nome` e `Sobrenome` para que fiquem em linha
* Os campos de `Nome` e `Sobrenome` devem estar lado a lado

### 11. Posicione os campos de `Email` e `house` para que fiquem em linha
* Os campos de `Email` e `house` devem estar lado a lado

### 12. Acrescente ao formulário um campo de entrada para qual família a pessoa estudante se identifica
* Crie um elemento com o id `label-family` e o texto **"Qual sua família?"** deverá ser criado
* Crie um `input` do tipo `radio` com o atributo `name` igual a **family** e `value` igual a **Frontend**
* Crie um `input` do tipo `radio` com o atributo `name` igual a **family** e `value` igual a **Backend**
* Crie um `input` do tipo `radio` com o atributo `name` igual a **family** e `value` igual a **FullStack**
* Posicione os radio buttons para ficar abaixo um do outro, na sequência **Frontend**, **Backend** e **Fullstack**
* Posicione os radio buttons abaixo do label

### 13. Crie campos de entrada do tipo `checkbox` contendo seis opções
* Crie um elemento com o `id` **label-content** e o texto **"Qual conteúdo você está com mais vontade de aprender?"**
* Crie um input do tipo `checkbox` com o value igual a **HoFs**
* Crie um input do tipo `checkbox` com o value igual a **Jest**
* Crie um input do tipo `checkbox` com o value igual a **Promises**
* Crie um input do tipo `checkbox` com o value igual a **React**
* Crie um input do tipo `checkbox` com o value igual a **SQL**
* Crie um input do tipo `checkbox` com o value igual a **Python**
* Posicione as checkboxes abaixo do label

### 14. Crie campo de entrada para avaliar de 1 a 10 o nível de satisfação com a Trybewarts
* Um elemento com o `id` **label-rate** e o texto **"Como você avalia a Trybewarts?"** deverá ser criado
* O campo deve ser formado por dez radio buttons, contendo as opções de 1 a 10
* Os radio buttons devem ter o atributo `value` com o valor de suas opções de 1 a 10.
* Os radio buttons devem ter o atributo `name` com o valor **"rate"**
* Posicione os radio buttons para ficar lado a lado

### 15. Crie uma textarea com o id `textarea` e uma label com a classe `textarea` contendo o número máximo de caracteres igual à 500
* Uma label com a classe `textarea` e o texto **"Deixe seu comentário:"** deverá ser criado
* O campo `textarea` deverá ter o máximo de 500 caracteres

### 16. Crie um campo de entrada do tipo `checkbox` com o id `agreement` para validar as informações
* Um rótulo (label) com o id `label-infos` e o texto **"Você concorda com o uso das informações acima?"** deverá ser criado
* O campo deve ser formado por um checkbox
* O campo de 'checkbox' deve possuir o ID `agreement`
* Posicione a checkbox ao lado da label

### 17. Crie um botão de Enviar para submeter o formulário
* Um botão do tipo `submit` deverá ser criado
* O botão deve possuir o ID `submit-btn`
* Deverá conter o texto **"Enviar"**

### 18. Faça com que o botão `Enviar` seja habilitado somente após a checkbox do requisito 16 ser selecionada
* O botão deverá estar desabilitado caso a checkbox não esteja selecionada
* O botão deverá ser habilitado caso a checkbox seja selecionada

### 19. Crie um rodapé no final da página
* O rodapé deverá conter o texto **"Direitos reservados à Trybewarts©"**

## Lista de requisitos bônus:

### 20. Crie um contador com o ID `counter` contendo o número de caracteres disponíveis no textarea, variando de 500 até 0, que deverá ser atualizado a medida que algo for digitado na textarea
* O contador deverá possuir o ID `counter`
* O contador inicialmente deve possuir o valor `500`
* O contador deverá decrementar a medida que algo for escrito no campo `textarea`
* O contador deverá incrementar a medida que algo for deletado no campo `textarea`
* O elemento `textarea` deverá possuir `id="textarea"`

### 21. Faça com que, ao clicar no botão `Enviar`, o conteúdo dentro da tag `<form>` seja substituído pelas informações preenchidas pela pessoa usuária
* Todos os campos do formulário devem ser substituídos pelas informações da pessoa usuária.
* Deve haver um campo com o formato "Nome: Alguem Aqui"
* Deve haver um campo com o formato "Email: email@mail.com"
* Deve haver um campo com o formato "Casa: Casa Escolhida"
* Deve haver um campo com o formato "Família: Família Escolhida"
* Deve haver um campo com o formato "Matérias: Matérias, Marcadas, Aqui"
* Deve haver um campo com o formato "Avaliação: NotaAqui"
* Deve haver um campo com o formato "Observações: Observações aqui"
