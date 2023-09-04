function ordenarArrayPorPrimeraLetra(array, ascendente = true) {
    return array.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      console.log(nameB)
      if (ascendente) {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      } else {
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      }
    });
    
  }
  
  // Ejemplo de uso ascendente
  const arrayDesordenadoAscendente = [
    { name: "Zorro" },
    { name: "Elefante" },
    { name: "Abeja" },
  ];
  
  const arrayOrdenadoAscendente = ordenarArrayPorPrimeraLetra(arrayDesordenadoAscendente);
  
  console.log(arrayOrdenadoAscendente);
  
  
  // Ejemplo de uso descendente
  const arrayDesordenadoDescendente = [
    { name: "Zorro" },
    { name: "Elefante" },
    { name: "Abeja" },
  ];
  
  const arrayOrdenadoDescendente = ordenarArrayPorPrimeraLetra(arrayDesordenadoDescendente, false);
  console.log(arrayOrdenadoDescendente);
  