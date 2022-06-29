// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arr =Object.entries(objeto);
  return arr;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  let obj = {};
  
  for(let i = 0; i < string.length; i++){
    if(!obj[string[i]]){
      obj[string[i]] = 0;
    }  
    obj[string[i]] += 1;
  }
  return obj;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas = []
  var minusculas =[]
  
  var result=null;
  for (let i = 0; i < s.length; i++) {
    
    if (s[i].toUpperCase()===s[i]) {
   
      mayusculas.push(s[i])
    }
    if (s[i]==s[i].toLowerCase()) {
     
      minusculas.push(s[i])
    }
  
  result=mayusculas.join('') + minusculas.join('');
  }
  return result

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var espejo = '';
  for(let i = str.length -1; i >= 0; i--) {
    espejo += str[i];
  };
 return espejo.split(' ').reverse().join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var capicua = []
var r=null;
r =numero.toString()
var re=null

for (let i = 0; i < r.length; i++) {
  
  if (r[i]===r[i]) {
 
    capicua.unshift(r[i])
  }
 
re=capicua.join('') ;
}

if (parseInt(re) === numero) {
  return "Es capicua"
} else {
  return "No es capicua"
}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var del =[];
  var n =null;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i]!=="a" && cadena[i]!=="b" && cadena[i]!=="c" ) {
      del.push(cadena[i])
    }
  
  }
   n=del.join('') 
  return n
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort().reverse()
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglo =""
  var nuevoa=[]
 if (arreglo1.length<=arreglo2.length) {
  for (let i = 0; i < arreglo2.length; i++) {
    arreglo = arreglo1.filter(e=>e == arreglo2[i]) 
    var n=arreglo.join('')
    nuevoa.push(n)
    }
 }else{
  for (let i = 0; i < arreglo1.length; i++) {
    arreglo = arreglo2.filter(e=>e == arreglo1[i]) 
    var n=arreglo.join('')
    nuevoa.push(n)
    }
 }
var result= nuevoa.filter(e=>e !== '')
var fin=result.map(e=> parseInt(e) )
return fin
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

