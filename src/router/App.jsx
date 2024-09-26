import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

//páginas
import Team from "../pages/Team";
import New from "../pages/New";
import Characters from "../pages/Characters";
import NotFound from "../components/functionals/NotFound";

//datos de la api
import { getRandomCharacters } from '../service/api';


export default function App() {

  //estado lista de personajes
  const [characters, setCharacters] = useState([]);


//llamado a la api 
  useEffect(() => {
    const fetchCharacters = async () => {
      const randomCharacters = await getRandomCharacters();
      console.log('Personajes aleatorios obtenidos:', randomCharacters);
      setCharacters(randomCharacters);
    };
    fetchCharacters();
  }, []);

  //función para agregar personaje al incio de la lista
  const addCharacter = (character) => {
    setCharacters((prev) => [character, ...prev]);
    console.log('Personaje agregado:', character); 
  };

  return (
    <BrowserRouter>
        <Routes>
             <Route path="/" element={<Team></Team>}></Route>
             <Route path="/new" element={<New addCharacter={addCharacter}/>}></Route>
             <Route path="/characters" element={<Characters characters={characters} />}></Route>
             <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
