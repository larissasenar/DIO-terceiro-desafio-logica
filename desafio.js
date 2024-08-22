let triunfo = 72;
let derrotas = 5;
let saldoRankeadas = calcularSaldoRankeadas( triunfo, derrotas);

function calcularSaldoRankeadas( triunfo, derrotas) {
    let saldo =  triunfo - derrotas;
    return saldo;
}

switch (true) {
    case (saldoRankeadas <= 10):
        nivel = "Ferro";
        break;
    case (saldoRankeadas <= 20):
        nivel = "Bronze";
        break;
    case (saldoRankeadas <= 50):
        nivel = "Prata";
        break;
    case (saldoRankeadas <= 80):
        nivel = "Ouro";
        break;
    case (saldoRankeadas <= 90):
        nivel = "Diamante";
        break;
    case (saldoRankeadas <= 100):
        nivel = "Lendário";
        break;
    case (saldoRankeadas > 101):
        nivel = "Imortal";
        break;
}

console.log("O Herói tem de saldo de ", saldoRankeadas , "está no nível de", nivel);









