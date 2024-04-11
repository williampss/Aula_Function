//Chamada cliente: inserir noome 
// let url = 'https://api.sheety.co/ddf3af588b1d31b5f456b34f4faefd35/2Dn/aluno/2';
// let body = {
//   aluno: {
//     'nome' : '',
//     'matricula' : '',
//     'turno' : ''
//   }
// }
// function action{
//   body.luno.nome = document.querySelector('#nome').value;
 
// }
// console.log(body.aluno)
// fetch( {
//   method: 'POST',
//   body: JSON.stringify(body),
//   headers:{
//     'Content-Type' : 'application/json'
//   }
// })
// .then((response) => response.json())
// .then(json => {
//   // Do something with object
//   console.log(json.aluno);
// });

///////////////////////////////////////////////////////////////////////////
let url = 'https://api.sheety.co/ddf3af588b1d31b5f456b34f4faefd35/2Dn/aluno';
let body = {
  aluno: {
    'nome' : '',
    'matricula' : 0,
    'turno' : ''
  }
}
function addAluno(){
  body.aluno.nome = document.querySelector('#nome').value;
  body.aluno.matricula = document.querySelector('#matricula').value;
  body.aluno.turno = document.querySelector('#turno').value;
 

console.log(body.aluno)
fetch(url, {
  method: 'POST',
  body: JSON.stringify(body),
  headers:{
    'Content-Type' : 'application/json'
  }
})
.then((response) => response.json())
.then(json => {
  // Do something with object
  console.log(json.aluno);
});
}