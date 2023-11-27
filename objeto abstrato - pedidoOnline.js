 //objeto abstrato

class PedidoOnline {
    constructor(numeroPedido) {
      this.numeroPedido = numeroPedido;
      this.itens = [];
      this.valorTotal = 0;
    }
  
    adicionarItem(item, valor) {
      this.itens.push({ item, valor });
      console.log(`Item "${item}" adicionado ao pedido.`);
      this.calcularValorTotal();
    }
  
    removerItem(index) {
      if (index >= 0 && index < this.itens.length) {
        const removido = this.itens.splice(index, 1);
        console.log(`Item "${removido[0].item}" removido do pedido.`);
        this.calcularValorTotal();
      } else {
        console.log('Índice inválido.');
      }
    }
  
    calcularValorTotal() {
      this.valorTotal = this.itens.reduce((total, item) => total + item.valor, 0);
      console.log(`Valor total do pedido: ${this.valorTotal}`);
    }
  }
  
  const meuPedido = new PedidoOnline('123456');
  meuPedido.adicionarItem('Camiseta', 30);
  meuPedido.adicionarItem('Calça', 50);
  meuPedido.removerItem(0);
  