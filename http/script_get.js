//Get dados da tabela

let url = 'https://api.sheety.co/9d92e891538b64858a9b0a1f2a3fe7d3/baseAlunos/dadosAlunos';

function encontrarDados(){
  return fetch(url)
}

function buscar(){
  const nome_input = document.querySelector("#nome").value

  encontrarDados()
    .then(resposta =>  resposta.json())
    .then(dado => {
      for(let x in dado.dadosAlunos){
        // console.log(dado.dadosAlunos[x]['nome'])
        if(dado.dadosAlunos[x]['nome'] === nome_input) {
          document.querySelector("#email").innerHTML = dado.dadosAlunos[x]['email']
        }
      }
    });

}
