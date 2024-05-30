function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   let indiceAleatorio = Math.floor(Math.random() * array.length);

   return array[indiceAleatorio];
}

module.exports = obtenerElementoAleatorio;
