function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 2 !== 0) {
    return true; // Devuelve true si el número es par
  } else {
    return false; // Devuelve false si el número no es par
  }
}

module.exports = esImpar;