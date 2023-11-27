 //objeto material

class Casa {
    constructor(endereco, numQuartos, area) {
      this.endereco = endereco;
      this.numQuartos = numQuartos;
      this.area = area;
      this.portaAberta = false;
      this.janelasFechadas = true;
    }
  
    abrirPorta() {
      this.portaAberta = true;
      console.log('Porta aberta.');
    }
  
    fecharJanelas() {
      this.janelasFechadas = true;
      console.log('Janelas fechadas.');
    }
  
    calcularAreaTerreno() {
      console.log(`Área total do terreno: ${this.area} metros quadrados.`);
    }
  }
  
  const minhaCasa = new Casa('Rua ABC, 123', 3, 200);
  minhaCasa.abrirPorta();
  minhaCasa.fecharJanelas();
  minhaCasa.calcularAreaTerreno();
  