const fs = require('fs');


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = ''
        if (!Number(base)) {
            reject(`El valor de ${base} no es un número`)
            return;
        } else {
            for (let x = 1; x <= limite; x++) {
                data += `${base} * ${x} = ${base*x}\n`;
                console.log(`${base} * ${x} = ${base*x}`);

            }
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Con la tabla del ${base} hasta ${limite}.txt`)
        });
    })
}
let listarTabla = (base, limite) => {
    console.log(`Tabla del ${base} con limite ${limite}`.green);
    for (let x = 1; x <= limite; x++) {
        console.log(`${base} * ${x} = ${base*x}`);

    }
}
module.exports = {
    crearArchivo,
    listarTabla
}