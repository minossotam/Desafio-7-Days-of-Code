const nome = prompt("Qual o seu nome?");
const idade = prompt(`Agora me diz qual a sua idade: `);
const linguagemProg = prompt(`E qual linguagem de programação você está estudando? `);

const mensagem = `Legal, ${nome}! Você tem ${idade} anos, e está aprendendo ${linguagemProg}`;
alert(mensagem);

const simNao = prompt(`Você gosta de estudar ${linguagemProg}? Responda 1 para SIM ou 2 para NÃO:`)

let resp = function() {
    
    if (simNao == 1) {
       return alert(`Muito bem! Continue estudando e você terá muito sucesso!`)
    } else alert(`Ah, que pena! Já tentou aprender outras linguagens? `)
}

resp()