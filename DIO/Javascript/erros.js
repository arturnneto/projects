
function getArray(arr, num) {
    try {
    if (!arr && !num) 
        throw new ReferenceError('Envie os Parâmetros.');
    
    if (typeof arr !== 'object') 
        throw new TypeError('O array precisa ser um object.');

    if (typeof num !== 'number') 
        throw new TypeError('O num precisa ser um número.');

    if (arr.length !== num) 
        throw new RangeError('O tamanho é invalido.');

    return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError.")
            console.log(e.message)}

        else if(e instanceof TypeError) {
            console.log("Este erro é um TypeError.")
            console.log(e.message)}

        else if(e instanceof RangeError) {
            console.log("Este erro é um RangeError.")
            console.log(e.message)}

        else {
            console.log("Tipo de erro desconhecido." + e)}
    }
}

console.log(getArray([5,4,3,2,1], 5));
