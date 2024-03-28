//POST nova linha na tabela

let url = 'https://api.sheety.co/9d92e891538b64858a9b0a1f2a3fe7d3/baseAlunos/dadosAlunos/5';

fetch(url, {
  method: 'DELETE',
})
.then((response) => response.json())
.catch(() => {
  console.log('Object deleted');
});