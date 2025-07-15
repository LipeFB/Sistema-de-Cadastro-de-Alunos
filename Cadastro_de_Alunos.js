// Desafio - Sistema de Cadastro de Aluno

// Mensagem de boas-vindas
console.log(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Seja Bem-vindo(a) ao SCA - Sistema de Cadastro de Alunos
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
`);



// Objeto aluno com as propriedades
const aluno = {
  nome: "Felipe",
  idade: 17,
  curso: "Ensino Médio",
  notas: [10, 9.5, 8]
};


// Mostra os dados do aluno
console.log(`Informações Cadastrais:

Nome:  ${aluno.nome}
Idade: ${aluno.idade}
Curso: ${aluno.curso}
Notas: ${aluno.notas.join(" | ")}

`);


// Funcao que calcula a media e mostra o resultado
function calculoMedia () {
  media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3 ;

  let resultado = media >= 7 ? "APROVADO(A)" : "REPROVADO(A)";
  
  mediaFormatada = media.toFixed(1);

  console.log(`Resultado:

O(a) aluno(a) ${aluno.nome}, atingiu a média anual de ${mediaFormatada} pontos, portanto foi 

--------------------------- ${resultado} ---------------------------
`);

  if (resultado === "APROVADO(A)") {
    console.log(`
*A equipe SCA parabeniza o(a) estudante por sua conquista!`);
  } else {
    console.log(`
*A equipe SCA lamenta a reprovação do(a) estudante`);
  }
}

// Executar função
calculoMedia();