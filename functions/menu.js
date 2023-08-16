require('colors');

const mostrarMenu = () => {

    return new Promise( resolve => {
        
        console.clear();
        console.log('==========================='.green);
        console.log('   Seleccione una opción'.green);
        console.log('===========================\n'.green);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);

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
