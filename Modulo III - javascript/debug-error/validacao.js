
function validacao(array, numero) {
    try {
        if (!array || !numero) {
            throw new ReferenceError('Envie todos os parâmetros.'); 
        }
    
        if (typeof array != 'object') {
            throw new TypeError('O primeiro parâmetro deve ser uma array.');
        }
    
        if (typeof numero != 'number') {
            throw new TypeError('O segundo parâmetro deve ser um numero.');
        }
    
        if (array.length != numero) {
            throw new RangeError('O tamanho da array é inválido.');
        }
    }
    catch (error) {
        if (error instanceof ReferenceError) {
            console.log('ReferenceError');
        }
        else if (error instanceof TypeError) {
            console.log('TypeError');
        }
        else if (error instanceof RangeError) {
            console.log('RangeError');
        }
        else {
            console.log('Erro inesperado');
        }

        console.log(error.message);
    }

    return array;
}
