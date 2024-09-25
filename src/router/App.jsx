import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Team from "../pages/Team";
import New from "../pages/New";
import Characters from "../pages/Characters";
import NotFound from "../components/functionals/NotFound";
import Characters from "../pages/Characters";
import { getRandomCharacters } from '../services/api';

export default function App() {
  const [route, setRoute] = useState("team");
  const [characters, setCharacters] = useState([]);

//
  useEffect(() => {
    const fetchCharacters = async () => {
      const randomCharacters = await getRandomCharacters();
      console.log('Personajes aleatorios obtenidos:', randomCharacters);
      setCharacters(randomCharacters);
    };
    fetchCharacters();
  }, []);


  const addCharacter = (character) => {
    setCharacters((prev) => [character, ...prev]);
    console.log('Personaje agregado:', character);
    setRoute("characters");
  };

  return (
    <BrowserRouter>
        <Routes>
             <Route path="/" element={<Team></Team>}></Route>
             <Route path="/new" element={<New addCharacter={addCharacter} setRoute={setRoute} />}></Route>
             <Route path="/characters" element={<Characters setRoute={setRoute} characters={characters} />}></Route>
             <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
