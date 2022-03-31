let soma = function (a, b) {
    return a + b; 
};

let subtracao = function (a, b) {
    return a - b;
};

let multiplicacao = function (a, b) {
    return a * b;
};

let divisao = function (a, b) {
    return a / b;
};


do {
    let qualOperacao = prompt(`Que operação você deseja realizar? Somar, subtrair, multiplicar ou dividir? Digite 'sair' caso não queira usar a calculadora`);
while (qualOperacao != 'somar' && qualOperacao != 'subtrair' && qualOperacao != 'multiplicar' && qualOperacao != 'dividir' && qualOperacao != 'sair') {
    alert(`Operação não reconhecida`);
    qualOperacao = prompt(`Que operação você deseja realizar? Somar, subtrair, multiplicar ou dividir? Digite 'sair' caso não queira usar a calculadora`);
} 
    if (qualOperacao == 'sair') {
      break;
  }  
    let numeroOperacao1 = prompt(`Qual o primeiro número você gostaria de ${qualOperacao}? `);
    let numeroOperacao2 = prompt(`Qual o segundo número você gostaria de ${qualOperacao}? `);    

    switch (qualOperacao) {
        case 'somar':
            alert(soma(parseInt(numeroOperacao1), parseInt(numeroOperacao2)));
            break;
        case 'subtrair':
            alert(subtracao(numeroOperacao1, numeroOperacao2));
            break;
        case 'multiplicar':
            alert(multiplicacao(numeroOperacao1, numeroOperacao2));
            break;
        case 'dividir':
            alert(divisao(numeroOperacao1, numeroOperacao2));
            break;           
    }
} while (qualOperacao == 'somar' || qualOperacao == 'subtrair' || qualOperacao == 'multiplicar' || qualOperacao == 'dividir')
    alert(`Até a próxima! `)







