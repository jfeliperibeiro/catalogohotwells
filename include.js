function incluirCabecalhoRodape() {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
    });

  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
}

document.addEventListener('DOMContentLoaded', incluirCabecalhoRodape);


document.getElementById('cep').addEventListener('blur', function () {
  const cep = this.value.replace(/\D/g, '');

  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          document.getElementById('rua').value = data.logradouro;
          document.getElementById('bairro').value = data.bairro;
          document.getElementById('cidade').value = data.localidade;
          document.getElementById('estado').value = data.uf;
        } else {
          alert('CEP não encontrado.');
        }
      })
      .catch(() => {
        alert('Erro ao buscar o CEP.');
      });
  } else {
    alert('CEP inválido.');
  }
});

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault(); // evita envio tradicional

  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const radios = document.getElementsByName("genero");
let generoSelecionado = "";
const genero = document.querySelector('input[name="genero"]:checked')?.value || "";
for (let i = 0; i < radios.length; i++) {
  if (radios[i].checked) {
    generoSelecionado = radios[i].value;
    break;
  }
}
console.log("Gênero selecionado:", generoSelecionado);
  const telefone = document.getElementById("telefone").value;
  const dt_nasc = document.getElementById("dt_nasc").value
  const rua = document.getElementById('rua').value;
  const nr = document.getElementById('numero').value;
  const complemeto = document.getElementById('complemento').value;
  const bairro = document.getElementById('bairro').value;
  const cidade = document.getElementById('cidade').value;
  const estado = document.getElementById('estado').value;




  const texto = `Olá! Eu tenho interesse em me cadastrar na loja.%0A%0AMeu nome é ${nome}%0ACPF: ${cpf}%0AEmail: ${email}%0ASenha: ${senha}%0AGênero: ${generoSelecionado}%0ATelefone: ${telefone}%0AData de Nascimento: ${dt_nasc}%0ARua: ${rua}%0ANúmero: ${nr}%0AComplemento: ${complemeto}%0ABairro: ${bairro}%0ACidade: ${cidade}%0AEstado: ${estado}`;
  
  
  
  const numero = "5511976561347"; // coloque aqui o número com DDI e DDD

  const link = `https://wa.me/${numero}?text=${texto}`;
  window.open(link, "_blank");
});
