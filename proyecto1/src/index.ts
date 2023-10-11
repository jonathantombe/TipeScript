function generarSalida(): void {
  const n = 5; // Número de asteriscos en cada línea
  const m = 10; // Número de líneas

  for (let i = 1; i <= m; i++) {
    let linea = "";

    for (let j = 1; j <= n; j++) {
      linea += "* ";
    }

    if (i % 2 === 0) {
      linea += "==================================";
    }

    console.log(linea);
  }
}

generarSalida();