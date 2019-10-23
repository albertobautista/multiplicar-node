const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        console.log('listar');
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(`${archivo}`)))
            .catch(error => console.log(error))
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

/**/