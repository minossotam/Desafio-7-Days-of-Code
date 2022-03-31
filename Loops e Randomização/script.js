let acertou = false;
let chute = "";

const numero = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
console.log(numero)

for (let i = 0; i <3; i++){
   chute = prompt(`Advinhe qual o número que estou pensando:`);
  
  if (chute == numero) {
    alert(`Você acertou! O número é ${numero}`);
    acertou = true;
    break;
  }
  alert(`Errado!`);
} if (!acertou) {
  alert(`Infelizmente você não acerou. O úmero era ${numero}`);
}


