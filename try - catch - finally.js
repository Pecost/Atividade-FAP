try {
    const numero1 = parseFloat(prompt("Digite o número a ser dividido:"));
    const numero2 = parseFloat(prompt("Digite o número divisor:"));
  
    const resultado = numero1 / numero2;
  
    if (!isFinite(resultado)) {
      console.log("Resultado indefinido ou infinito.");
    }
  
    console.log(`Resultado da divisão: ${resultado}`);
  } catch (error) {
    console.error(`Erro: ${error.message}`);
  } finally {
    console.log("Operação concluída.");
  }