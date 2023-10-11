import * as readline from 'readline';

interface Pregunta {
  enunciado: string;
  respuestaCorrecta: boolean;
}

const preguntas: Pregunta[] = [
  {
    enunciado: "¿Es TypeScript un lenguaje de programación?",
    respuestaCorrecta: true,
  },
  {
    enunciado: "¿JavaScript es un lenguaje de marcado?",
    respuestaCorrecta: false,
  },
  {
    enunciado: "¿Node.js es un entorno de tiempo de ejecución de JavaScript?",
    respuestaCorrecta: true,
  },
  {
    enunciado: "¿TypeScript es un superset de JavaScript?",
    respuestaCorrecta: true,
  },
  {
    enunciado: "¿HTML es un lenguaje de programación?",
    respuestaCorrecta: false,
  },
];

function presentarExamen(): void {
  let puntajeTotal = 0;
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  for (let i = 0; i < preguntas.length; i++) {
    rl.question(preguntas[i].enunciado + " (Verdadero o Falso) ", (respuesta) => {
      if (
        (respuesta.toLowerCase() === "verdadero" && preguntas[i].respuestaCorrecta) ||
        (respuesta.toLowerCase() === "falso" && !preguntas[i].respuestaCorrecta)
      ) {
        puntajeTotal += 10;
        console.log(`Pregunta ${i + 1}: ¡Correcta!`);
      } else {
        console.log(`Pregunta ${i + 1}: Incorrecta`);
      }
      
      if (i === preguntas.length - 1) {
        rl.close();
        console.log(`Puntaje total: ${puntajeTotal}`);
      }
    });
  }
}

presentarExamen();
