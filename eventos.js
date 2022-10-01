fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes`)
  .then((resposta) => resposta.json())
  .then((regioes) => {
    regioes.forEach((cadaRegiao) => {
      document.getElementById("regiao").innerHTML += `<option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>`;
    });
  });

function procurarEstados() {
  let idregiao = document.getElementById("regiao").value;
  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${idregiao}/estados`)
    .then((resposta) => resposta.json())
    .then((estados) => {
      estados.forEach((cadaEstado) => {
        document.getElementById("uf").innerHTML += `<option value="${cadaEstado.id}">${cadaEstado.nome}</option>`;
      });
    });
}

function procurarCidades() {
  let idCidade = document.getElementById("uf").value;
  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idCidade}/microrregioes`)
    .then((resposta) => resposta.json())
    .then((municipios) => {
      municipios.forEach((cadaMunicipio) => {
        document.getElementById(
          "cidade"
        ).innerHTML += `<option value="${cadaMunicipio.id}">${cadaMunicipio.nome}</option>`;
      });
    });
}


