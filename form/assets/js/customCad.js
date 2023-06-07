const cadForm = document.getElementById("formCadastro");

cadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const dadosForm = new FormData(cadForm);

    const dados = await fetch("./cadastrar.php", {
        method: "POST",
        body: dadosForm 
    });

    const resposta = await dados.json();

    //console.log(resposta);

    if(resposta['erro']){
        msgAlertErroCad.innerHTML = resposta['msg'];
    }else{
        alert('Dados enviados com sucesso!')
        cadForm.reset();
        window.location.replace("./login.html")
    }   
})
