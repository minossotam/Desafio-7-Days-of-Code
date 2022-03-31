const areaTec = prompt(`Você deseja seguir em qual área tec? Responda 'Front' para Front-End ou 'Back' para Back-End`);

respAreaTec = function() {
    if (areaTec == 'Front') {
        const frontAreaTec = prompt(`E você tem vontade de aprender React ou Vue?`);
        return alert(`${frontAreaTec} é uma ótima escolha! parabéns!`);
    } else if (areaTec == 'Back') {
        const backAreaTecc = prompt(`E você tem vontade de aprender C# ou Java?`);
        return alert(`${backAreaTecc} é uma ótima escolha! parabéns!`);
    };
};
respAreaTec();


const especializacao = prompt(`Você gostaria de continuar se especializando ou tem mais interesse em se tornar Full-Stack Developer? Responda "1" para continuar se especializando ou "2" para se tornar full-stack`);

respEspecializacao = function() {
    if (especializacao == 1) {
        return alert(`Que bom! o mercado está relamente precisando de mão de obra especializa!`);
    } else if (especializacao == 2) {
        return alert(`Full-Stack é sem dúvidas uma grande escolha!`);
    };
};
respEspecializacao();


let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}

/* let quaisTec = prompt(`Gostaria de aprender outras tecnologias? Responda "SIM" ou "NÃO" `);

respQuaisTec = function() {
    let quaisTec = prompt(`Gostaria de aprender outras tecnologias? Responda "SIM" ou "NÃO" `);
    while (quaisTec == "SIM") {
    let novaTec = prompt(`Qual?`);
    alert(`${novaTec} é muito legal!`);
    let quaisTec = prompt(`Tem alguma outra que gostaria de aprender? Responda "SIM" ou "NÃO"`)
    }
};

respQuaisTec();*/






