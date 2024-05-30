function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  function esPar(num)  {
    return num % 2 === 0;
  }
  return array.filter(esPar);
}

module.exports = filtrarNumerosPares;
