import * as readline from 'readline';

interface Equipo {
  nombre: string;
  marcador: number;
}

const equipos: Equipo[] = [];

async function ingresarResultado() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  for (let i = 0; i < 3; i++) {
    const equipo1Nombre = await pregunta("Ingrese el nombre del primer equipo en la fecha " + (i + 1) + ": ");
    const equipo1Marcador = parseInt(await pregunta("Ingrese el marcador del primer equipo en la fecha " + (i + 1) + ": "));

    const equipo2Nombre = await pregunta("Ingrese el nombre del segundo equipo en la fecha " + (i + 1) + ": ");
    const equipo2Marcador = parseInt(await pregunta("Ingrese el marcador del segundo equipo en la fecha " + (i + 1) + ": "));

    equipos.push({ nombre: equipo1Nombre, marcador: equipo1Marcador });
    equipos.push({ nombre: equipo2Nombre, marcador: equipo2Marcador });
  }

  rl.close();
}

function pregunta(pregunta: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question(pregunta, (respuesta) => {
      resolve(respuesta);
      rl.close();
    });
  });
}

function mostrarResultados() {
  const equiposOrdenados = equipos.sort((a, b) => b.marcador - a.marcador);

  console.log("Resultados de la Champions League:");

  equiposOrdenados.forEach((equipo, index) => {
    console.log(`${index + 1}. ${equipo.nombre}: ${equipo.marcador} puntos`);
  });
}

(async () => {
  await ingresarResultado();
  mostrarResultados();
})();
