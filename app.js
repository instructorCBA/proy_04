//Importación de paquetes de terceros
require('colors');

//Importación paquetes desarrollados para App
const { mostrarMenu, pausa } = require('./functions/menu');

console.clear();

const main = async() => {
    console.log('    Menu Ficha 2798618\n'.red);

    let opt = '';

    do {
        opt = await mostrarMenu();
        console.log({ opt });
        if (opt !== '0'){
            await pausa();
        }       
    } while (opt !== '0');
}

main();
