const loginForm = document.getElementById("formLogin");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (document.getElementById("email").value === "") {
        alert("Necessário preencher o Email!")
    } else if (document.getElementById("senha").value === "") {
        alert("Necessário preencher a Senha!")
    } else {
        const dadosForm = new FormData(loginForm);

        const dados = await fetch("./validar.php", {
            method: "POST",
            body: dadosForm
        });

        const resposta = await dados.json();

        if(resposta['erro']){
            console.log(resposta['msg'])
        }else{
            loginForm.reset();
            window.location.replace("../index.php")
        }
    }
})

