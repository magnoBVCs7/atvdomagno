class Mercado {
    constructor(caixa, funcionario) {
        this.funcionario = funcionario;
        this.caixa = caixa;
    }
    falar() {
        return `Olá eu sou a funcionaria${this.nome}.`
    }
}

class FuncioUm extends Mercado {
    constructor(conversa, caixa, funcionario) {
        super(funcionario, caixa, conversa)
        this.conversa = conversa;
       
    }
    conversa() {
    return `cliente inicia uma convrsa com a funcionaria... conversa...`
}
}


class FuncioDois extends Mercado {
    constructor(conversa, caixa, funcionario) {
        super(caixa, funcionario)
        this.conversa = conversa;
    }
    con(){
        return `funcionario comprimenta a cliente... conversa...`
    }
}

const mercado = [new FuncioUm("Rex" , "Marrom" , "Pastor Alemão"),
new FuncioDois("Mia," , "Preto" , "Siamês")];

for(const Mercado of mercado){
    console.log(`Animal "${Mercado.funcionario}" é ${Mercado.caixa}`);
}

for(const Mercado of mercado){
console.log(Mercado.falar());
}

const cachorro = mercado[0];
console.log(FuncioUm.conversa());

const gato = mercado[1];
console.log(FuncioDois.con());