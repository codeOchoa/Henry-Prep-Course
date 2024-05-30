function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let filtro = array.filter(elemento => elemento > 10);

  return filtro.length;
}

module.exports = contarElementosMayoresA10;
