const letraRegex = /^[a-zA-Z]$/;
const numeroEnteroRegex = /^-?\d+$/;
export function validarMatriculaNueva(mat) {
    const matricula = [...mat];
    let esValido = true;
    matricula.forEach((element, index) => {
        if (index <= 1 || (index >= 5 && index < 7)) {
            esValido = esValido && letraRegex.test(element);
        } else if (index >= 2 && index < 5) {
            esValido = esValido && numeroEnteroRegex.test(element);
        }
    });
    return esValido;
}
export function validarMatriculaVieja(mat) {
    const matricula = [...mat];
    let esValido = true;
    matricula.forEach((element, index) => {
        if (index <= 2) {
            esValido = esValido && letraRegex.test(element);
        } else if (index >= 3 && index <= 5) {
            esValido = esValido && numeroEnteroRegex.test(element);
        }else{
            esValido = false
        }
    });
    return esValido;
}