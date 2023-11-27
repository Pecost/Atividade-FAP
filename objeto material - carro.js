 //objeto material
 
 class Carro {
    constructor(modelo, cor, anoFabricacao) {
      this.modelo = modelo;
      this.cor = cor;
      this.anoFabricacao = anoFabricacao;
      this.ligado = false;
      this.velocidade = 0;
    }
  
    ligar() {
      this.ligado = true;
      console.log(`${this.modelo} ligado.`);
    }
  
    desligar() {
      this.ligado = false;
      this.velocidade = 0;
      console.log(`${this.modelo} desligado.`);
    }
  
    acelerar() {
      if (this.ligado) {
        this.velocidade += 10;
        console.log(`${this.modelo} acelerando. Velocidade: ${this.velocidade} km/h`);
      } else {
        console.log(`É necessário ligar o ${this.modelo} para acelerar.`);
      }
    }
  }
  
  const meuCarro = new Carro('Toyota Corolla', 'Prata', 2022);
  meuCarro.ligar();
  meuCarro.acelerar();
  meuCarro.acelerar();
  meuCarro.desligar();