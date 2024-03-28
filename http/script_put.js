//PUT edita uma linha da tabela

let url = 'https://api.sheety.co/9d92e891538b64858a9b0a1f2a3fe7d3/baseAlunos/dadosAlunos/5';
let body = {
  dadosAluno: {
    'nome':'tom',
    }
}
fetch(url, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers:{
    'Content-Type':'application/json'
  }
})
  .then((response) => response.json())
  .then(json => {
    // Do something with object
    console.log(json.dadosAluno);
  });