

# 💻 Gerenciador de Usuários

### Visão Geral

Este é um sistema web para gerenciamento de usuários que permite adicionar, editar e remover nomes de uma lista. Implementado com HTML e JavaScript.

<br>
------------------------------------------------------------------------------------------------------------------

<br>

## Funcionalidades

- **Validação de Login:** Verifica se os campos de e-mail e senha estão preenchidos. Redireciona para a página de cadastro se tudo estiver correto.
- **Cadastro de Nomes:** Adiciona nomes a uma lista e os exibe em uma tabela.
- **Visualização da Lista:** Mostra todos os nomes cadastrados com opções para editar ou excluir.
- **Edição e Exclusão:** Permite modificar ou remover nomes da lista.

<br>

## Código

### Validação de Login
```javascript
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
 
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
    }else{
        window.location.href = 'cadastro.html';
    }
}
```

### Cadastro de Nomes
```javascript
var dadosLista = [];
 
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
    if(nomeUser){
        dadosLista.push(nomeUser);
        criaLista();
        document.getElementById('nomeUser').value = "";
    }else{
        alert("Favor informe um nome para cadastro");
    }
}
```

### Criação da Lista
```javascript
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i=0;i<=(dadosLista.length - 1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr

>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}
```

### Edição de Nome
```javascript
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
}
```

### Exclusão de Nome
```javascript
function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}
```

<br>

## Tecnologias

- **HTML5:** Marcação
- **JavaScript:** Programação

<br>

## Como Testar

1. Crie um arquivo HTML com o código JavaScript.
2. Abra o arquivo em um navegador para interagir com o sistema.

<br>

## Métodos Chave

- `getElementById()`
- `value`
- `alert()`
- `window.location.href`
- `push()`
- `innerHTML`
- `splice()`
- `deleteRow()`

<br>

# Desenvolvedor

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/160857477?v=4" width=95><br><sub>Lucas Henrique da Silva Carvalho</sub>](https://github.com/lucashenrique233)
| :---: |

# Orientador

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/86802310?v=4" width=95><br><sub>Leonardo Rocha</sub>](https://github.com/LeonardoRochaMarista)
| :---: |

