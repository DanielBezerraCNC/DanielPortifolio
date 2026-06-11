// ===== script.js =====
// Este arquivo e usado por todas as paginas.

// Recurso 1 em JavaScript: trocar entre tema claro e escuro
var botaoTema = document.getElementById("botao-tema");

if (botaoTema) {
  botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
      botaoTema.textContent = "Tema claro";
    } else {
      botaoTema.textContent = "Tema escuro";
    }
  });
}

// Recurso 2 em JavaScript: validar o formulario (so roda na pagina de contato)
var formulario = document.getElementById("form-contato");

if (formulario) {
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // impede o recarregamento da pagina

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
    var aviso = document.getElementById("mensagem-form");

    if (nome === "" || email === "" || mensagem === "") {
      aviso.style.color = "red";
      aviso.textContent = "Por favor, preencha todos os campos.";
    } else {
      aviso.style.color = "green";
      aviso.textContent = "Mensagem enviada com sucesso, " + nome + "!";
      formulario.reset();
    }
  });
}