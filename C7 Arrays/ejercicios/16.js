function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  const newArray = [];
  
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * i);
  }
  return newArray;
}

module.exports = multiplicarElementosPorIndice;
