function valida_formulario(form){
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var tel = document.getElementById("tel");
    var email = document.getElementById("email");

    var caixa_nome = document.querySelector('.msg-nome');
    caixa_nome.style.display = 'none';
   
    if(nome.value==""){

        caixa_nome.innerHTML = "Nome é obrigatório";
        caixa_nome.style.display = 'block';
        /*alert("Nome é obrigatório")*/
        nome.focus();
        return false;
    }
  
    if(idade.value==""){
        /*alert("Idade é obrigatório")*/
        caixa_nome.innerHTML = "Sua idade é obrigatório";
        caixa_nome.style.display = 'block';
        idade.focus();
        return false;
    }
    if(tel.value==""){
        caixa_nome.innerHTML = "Tel é obrigatório";
        caixa_nome.style.display = 'block';
        /*alert("Tel é obrigatório")*/
        tel.focus();
        return false;
    }
 
    if(email.value==""){

        /*alert("E-mail é obrigatório")*/
        caixa_nome.innerHTML = "E-mail é obrigatório";
        caixa_nome.style.display = 'block';
        email.focus();
        return false;
    }
    if (invalid.test(email.value)==false){
      alert("E-mail informado incorretamente!")
      return false;
    }
    

    return true;
}