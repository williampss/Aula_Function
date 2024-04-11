//Função deletar: VAI OBVIAMENTE DELETAR POR QUE ESTA LENDO AINDA?!
function Delete(){
  let id = document.querySelector('#delete').value;
  let url = `https://api.sheety.co/ddf3af588b1d31b5f456b34f4faefd35/2Dn/aluno/${id}`;

  fetch(url, {
    method: 'DELETE',
  })
  .then((response) => response.json())
  .then(() => {
    console.log('Object deleted');
  });
}