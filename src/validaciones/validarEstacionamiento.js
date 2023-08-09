const letraRegex = /^[a-zA-Z]$/;
const numeroEnteroRegex = /^-?\d+$/;
export function validarMatriculaNueva(mat) {
    if(mat !== ""){
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
    }else{
        return false
    }
}
export function validarMatriculaVieja(mat) {
    if(mat !== ""){
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
    }else{
        return false
    }
}
export function validarHora(hora){
    const hor = [...hora]
    console.log("🚀 ~ file: validarEstacionamiento.js:39 ~ validarHora ~ hor:", hor)
    if(hor[2]==":"){
        return true
    }else{
        return false
    }
}