Val = ()  => {
    let valor_1 = 0;
    let valor_2 = 0;
    let operacao = "";
    let elementoVal_1 = document.getElementById("Val1");
    let elementoVal_2 = document.getElementById("Val2");
    let elementoOpera = document.getElementById("Operacao");
    if (elementoVal_1 && elementoVal_2 && elementoOpera) {
      valor_1  = elementoVal_1.value;
      valor_2  = elementoVal_2.value;
      operacao = elementoOpera.value;
  
      console.log(
        "Valor_1: " +
          valor_1 +
          " - Valor_2: " +
          valor_2 +
          " - Operação: " +
          operacao,
      );
      let resultado = calcularOperacao(valor_1, valor_2, operacao);
      //let resultado = calcularOperacaoSwitch(valor_1, valor_2, operacao);
      console.log("Resultado: " + resultado);
      let elementoResultado = document.getElementById("resultado");
      if (resultado) {
        elementoResultado.innerText = "Resultado: " + resultado;
      }
    }
    else 
      {
        elementoMsgErro = document.getElementById("mensagemErro");
        if (elementoMsgErro)
        {
          let mensagemErro = "";
           if (!elementoVal_1)
              mensagemErro = "Não encontrado o valor 1";
           if (!elementoVal_2)
              mensagemErro += "Não encontrado o valor 2";
       }
      } 
  }