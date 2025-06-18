// Mensagem de inicializacao
console.log(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Seja Bem-vindo(a) ao SCA - Sistema de Cadastro de Alunos
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
`)


// Objeto -> Aluno, com todas as informacoes
const aluno = {
  nome: "Felipe",
  idade: 17,
  curso: "Ensino Medio",
  notas: [10, 9, 8]
};


// Mostra na tela as informacoes sobre o(a) aluno(a)
console.log(`Informacoes Cadastrais:

Nome:  ${aluno.nome}
Idade: ${aluno.idade}
Curso: ${aluno.curso}
Notas: ${aluno.notas.join(" | ")}

`);


// Funcao que calcula e mostra na tela a media do(a) aluno(a) e indica se passou ou nao
function calculoMedia (media) {
  media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3 ;                      // Calculo da Media

  let resultado = media >= 7 ? "APROVADO(A)" : "REPROVADO(A)";                          // Verifica aprov. (Com Oper. Tern.)

  console.log(`Resultado:

O(a) aluno(a) ${aluno.nome}, atingiu a media anual de ${media} pontos, portanto foi 

--------------------------- ${resultado} ---------------------------
`)

  if (resultado = "Aprovado(a)") {
    console.log(`
*A equipe SCA parabeniza o estudante pela sua conquista!`)
  } else {
    console.log(`
*A equipe SCA lamenta a reprovacao do(a) estudante`)
  }
}

calculoMedia()