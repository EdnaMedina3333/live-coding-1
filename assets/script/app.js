// Construye una función que reciba por parámetros un string y un array de strings. La función debe retornar un arreglo de strings con los strings que sean de mayor longitud que el string recibido por parámetros.

function bigWords (inputString, inputArray) {
 const result=[];
for (let wordPosition=0; wordPosition<inputArray.length; wordPosition++) {
    if (inputArray[wordPosition].length > inputString.length) {
        result.push(inputArray[wordPosition]);
    }
} return result;

}


//Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista (<ul></ul>) en el index.html. La función debe mostrar la lista en el HTML manipulando el DOM, cada string del arreglo debe imprimirse en un elemento **<li></li>**. El array que se recibe por parámetros debe ser un array resultante de utilizar la función anterior.

function showArray (inputArray) {
    const ulDocument = document.getElementById('ul');
    inputArray.forEach(word => {
        const liDocument = document.createElement('li');
        liDocument.textContent = word;
        ulDocument.appendChild(liDocument); 
    });
    document.body.appendChild(ulDocument);
}



const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
const resultArray = bigWords('bocina', myArray);
showArray(resultArray);