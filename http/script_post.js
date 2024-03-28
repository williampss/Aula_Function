//POST nova linha na tabela

let url = 'https://api.sheety.co/9d92e891538b64858a9b0a1f2a3fe7d3/baseAlunos/dadosAlunos';
let body = {
  dadosAluno: {
    'id':'5',
    'nome':'Jerry',
    'email':'tom.jerry@email.com'
    }
}
fetch(url, {
  method: 'POST',
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