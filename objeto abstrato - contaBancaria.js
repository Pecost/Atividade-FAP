 //objeto abstrato

class ContaBancaria {
    constructor(numeroConta, saldoInicial, titularConta) {
      this.numeroConta = numeroConta;
      this.saldo = saldoInicial;
      this.titular = titularConta;
    }
  
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
      } else {
        console.log('Saldo insuficiente para saque.');
      }
    }
  
    verificarSaldo() {
      console.log(`Saldo atual: ${this.saldo}`);
    }
  }
  
  const minhaConta = new ContaBancaria('123456', 1999, 'Ana');
  minhaConta.depositar(500);
  minhaConta.sacar(200);
  minhaConta.verificarSaldo();
  