//Função para validação de acesso
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
     
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
    }
    else{
        // alert("Campos preenchidos com sucesso");
        window.location.href = 'cadastro.html'
    };
    }
     
    //Funçaõ para armazenamento de nomes em array
    var dadosLista = [];
    function salvarUser(){
    }