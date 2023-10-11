// Importamos la librería readline para obtener la entrada del usuario.
import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function calcularCostoServicio(servicio: string, tipoLavado: number, cantidadPrendas: number) {
    let costoTotal: number;

    if (servicio === 'lavado') {
        if (tipoLavado === 1) {
            costoTotal = cantidadPrendas * 2000;
        } else if (tipoLavado === 2) {
            costoTotal = cantidadPrendas * 1500;
        } else {
            console.log('Tipo de lavado no válido.');
            return;
        }
    } else if (servicio === 'planchado') {
        costoTotal = cantidadPrendas * 1800 + 3000;
    } else {
        console.log('Servicio no válido.');
        return;
    }

    console.log(`Costo total del servicio de ${servicio}: $${costoTotal}`);
}


rl.question('Seleccione el tipo de servicio (lavado/planchado): ', (servicio) => {
    if (servicio === 'lavado' || servicio === 'planchado') {
        if (servicio === 'lavado') {
            rl.question('Seleccione el tipo de lavado (1. En seco / 2. Normal): ', (tipoLavado) => {
                rl.question('Ingrese la cantidad de prendas: ', (cantidadPrendas) => {
                    calcularCostoServicio(servicio, parseInt(tipoLavado), parseInt(cantidadPrendas));
                    rl.close();
                });
            });
        } else {
            rl.question('Ingrese la cantidad de prendas: ', (cantidadPrendas) => {
                calcularCostoServicio(servicio, 0, parseInt(cantidadPrendas));
                rl.close();
            });
        }
    } else {
        console.log('Servicio no válido.');
        rl.close();
    }
});
