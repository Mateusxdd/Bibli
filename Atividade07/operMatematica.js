function calcularOperacao (val_1, val_2, oper) {
  let resultado = 0;
  let valor_1 = parseInt (val_1, 10);
  let valor_2 = parseInt (val_2, 10);
  if (oper == '+') {
    resultado = valor_1 + valor_2;
  } else if (oper == '-') {
    resultado = valor_1 - valor_2;
  } else if (oper == '/' && valor_2 > 0) {
    resultado = (valor_1 / valor_2).toFixed (2);
  } else if (oper == '*') {
    resultado = valor_1 * valor_2;
  }
  return resultado;
}

function calcularOperacaoSwitch (val_1, val_2, oper) {
  let resultado = 0;
  let valor_1 = parseInt (val_1, 10);
  let valor_2 = parseInt (val_2, 10);
  switch (oper) {
    case '+':
      resultado = valor_1 + valor_2;
      break;
    case '-':
      resultado = valor_1 - valor_2;
      break;
    case '/' && valor_2 > 0:
      resultado = (valor_1 / valor_2).toFixed (2);
      break;
    case '*':
      resultado = valor_1 * valor_2;
      break;
    default:
      resultado = 0;  
  }
  return resultado;
}
