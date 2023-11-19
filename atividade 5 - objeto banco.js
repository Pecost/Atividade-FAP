const banco = {
    conta: "122333",
    saldo: 5000.00,
    tipoDeConta: "Corrente",
    agencia: "1999",

    buscarSaldo: function() {
        return this.saldo;
    },

    deposito: function(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return `Depósito de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`;
        } else {
            return "Valor de depósito inválido.";
        }
    },

    saque: function(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return `Saque de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`;
        } else if (valor > this.saldo) {
            return "Saldo insuficiente para realizar o saque.";
        } else {
            return "Valor de saque inválido.";
        }
    },

    numeroDaConta: function() {
        return this.conta;
    }
};

console.log(banco.buscarSaldo());
console.log(banco.deposito(500));
console.log(banco.saque(250));
console.log("Conta: " + banco.numeroDaConta());