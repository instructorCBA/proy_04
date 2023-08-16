require('colors');

const mostrarMenu = () => {

    return new Promise( resolve => {
        
        console.clear();
        console.log('==========================='.green);
        console.log('   Seleccione una opción!'.green);
        console.log('===========================\n'.green);

        console.log('============================================================'.cyan);
        console.log(`=  `.cyan + `${'1.'.green} Crear tarea` + `                =`.cyan);
        console.log(`=  `.cyan + `${'2.'.green} Listar tareas` + `              =`.cyan);
        console.log(`=  `.cyan + `${'3.'.green} Listar tareas completadas` + `  =`.cyan);
        console.log(`=  `.cyan + `${'4.'.green} Listar tareas pendientes` + `   =`.cyan);
        console.log(`=  `.cyan + `${'5.'.green} Completar tarea(s)` + `         =`.cyan);
        console.log(`=  `.cyan + `${'6.'.green} Borrar tarea` + `               =`.cyan);
        console.log(`=  `.cyan + `${'0.'.green} Salir` + `                      =`.cyan);
        console.log('============================================================'.cyan);

        //Define la interfaz que utiliza el usuario
        const readLine = require('readline').createInterface({
            input: process.stdin, //Node espera lo que digita el usuario
            output: process.stdout //Node muestra en consola un mensaje
        });

        readLine.question('Seleccione una opción: ', (opt) => {
            //console.log({opt}); // solo para verificar el valor digitado
            readLine.close();
            resolve(opt);
        })
    })

 
}

const pausa = () => {

    return new Promise( resolve =>{
        //Define la interfaz que utiliza el usuario
        const readLine = require('readline').createInterface({
            input: process.stdin, //Node espera lo que digita el usuario
            output: process.stdout //Node muestra en consola un mensaje
        });

        readLine.question(`\nPresione ${'ENTER'.yellow} para continuar\n`, (opt) => {
            readLine.close();
            resolve();
        })
    })
    
}

module.exports = {
    mostrarMenu,
    pausa
}
