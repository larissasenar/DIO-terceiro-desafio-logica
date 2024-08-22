class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let mago = new heroi('Gandalf', 150, 'mago');
mago.atacar(); 

let guerreiro = new heroi('Arthur', 35, 'guerreiro');
guerreiro.atacar(); 

let monge = new heroi('Bodhidharma', 88, 'monge');
monge.atacar(); 

let ninja = new heroi('Hanzo', 28, 'ninja');
ninja.atacar(); 
