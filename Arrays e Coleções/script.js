let arrayLista = {
    laticinios: [],
    carnes: [],
    frutas: []
};

let finalizar = 1;

while (finalizar != 2) {
    let adicionar = prompt(`O que você deseja adicionar na lista de compras?`);
    let categoria = prompt(`Em qual categoria esse ítem está? Responda 1 para laticinios - 2 para carnes - 3 para frutas`);
    let finalizar = prompt(`Gostaria de adicionar mais alguma coisa na lista? Responda 1 para SIM ou 2 para NÃO`);
    
    const criarLista = function () {
    if (categoria == 1) {
        return arrayLista['laticinios'].push([adicionar]);
    } else if (categoria == 2) {
        return arrayLista['carnes'].push([adicionar]);
    } else if (categoria == 3) {
        return arrayLista['frutas'].push([adicionar]);
    };
};    
    criarLista();
    
    if (finalizar == 2) {
        break;
    };

};

alert(`${arrayLista.laticinios} ${arrayLista.carnes} ${arrayLista.frutas}`);
