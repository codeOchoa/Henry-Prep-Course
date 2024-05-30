function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  const resultados = [];

  for (let i = 1; i <= 10; i++) {
    num += 2;
    if (num === i) {
      resultados.push("Se interrumpió la ejecución");
      break;
    }
    resultados.push(num);
  }
  if (resultados.includes("Se interrumpió la ejecución")) {
    return "Se interrumpió la ejecución";
  }
  
  return resultados;
}

module.exports = breakStatement;
