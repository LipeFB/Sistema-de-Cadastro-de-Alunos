const aluno = {
  nome: "Felipe",
  idade: 17,
  curso: "Ensino Medio",
  notas: [10, 9, 8]
};
aluno.notas.join(" / ")

function calculoMedia (media) {
  media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3
  console.log(media);
  if( media >= 8) {
  console.log("Passou")
}
}


calculoMedia()