// Con Fetch Sin Axios
export const getRandomCharacters = async (count = 3) => {
  try {
  // Generar un número aleatorio entre 1 y 42 (las páginas que tiene la API)
    const randomPage = Math.floor(Math.random() * 42) + 1;
 
    // Hacer una petición a la API con la página aleatoria
    const allCharacters = await fetch(`https://rickandmortyapi.com/api/character?page=${randomPage}`);
    if (!allCharacters.ok) {
      throw new Error('La respuesta de la red no fue exitosa.');
    }
    const allData = await allCharacters.json();

    // Extrae los resultados de todos los personajes
    const allResults = allData.results;

    // Mezcla aleatoriamente los personajes
    const shuffled = allResults.sort(() => Math.random() - 0.5);

    // Selecciona los primeros tres dentro del 'count'
    return shuffled.slice(0, count);
  } catch (error) {
    console.error('Error al obtener los personajes.', error);
    return [];
  }
};