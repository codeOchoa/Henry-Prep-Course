function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   let letras = texto.split("");
   let letrasInvertidas = letras.reverse();
   let palabraInvertida = letrasInvertidas.join("");

   return palabraInvertida;
}

module.exports = invertirTexto;
