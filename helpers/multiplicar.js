const fs = require('fs');
const color = require('colors');
const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try{
    let salida = '';
    let consola = '';
    for( let i = 1; i <= hasta; i++){
    salida += `${base} x ${ i } = ${ base * i}\n`;
    consola += `${base} ${'x'.green} ${ i } ${'='.green} ${ base * i}\n`;
    }
    if ( listar ){
    console.log('============================='.green);
    console.log('     TABLA DEL:'.green, color.blue (base));
    console.log('============================='.green);
    console.log(consola);
}
    fs.writeFileSync(`./salidas/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt.`;

    } catch (err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}