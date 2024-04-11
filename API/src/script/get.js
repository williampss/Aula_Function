// let url = 'https://api.sheety.co/ddf3af588b1d31b5f456b34f4faefd35/2Dn/aluno';
// fetch(url) primeira forma //////
// .then((response) => response.json())
// .then(json=>{

//   console.log(json.aluno);
// })
// .catch(() =>{
//   console.log("errou")
// })
let url = 'https://api.sheety.co/ddf3af588b1d31b5f456b34f4faefd35/2Dn/aluno';
fetch(url)
.then((response) => response.json())
      

.then(json=>{
  console.log(json.aluno[2].matricula);
  console.log(json.aluno);
  document.querySelector("#aluno").value = json.aluno [1].nome;
  document.querySelector("#matricula").value = json.aluno [1].matricula;
  document.querySelector("#turno").value = json.aluno [1].turno;
})

let body= {
  aluno: {

  }
}
fetch(url,{
  method: 'Post',
  body: json.stringify(body)
})
 

// .catch(() =>{
//   console.log("errou")
// })