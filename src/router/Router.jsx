import { useState, useEffect } from "react";
import New from "../pages/New";
import Characters from "../pages/Characters";
import Team from "../pages/Team";
import { getRandomCharacters } from '../services/api';

const Router = () => {
  const [route, setRoute] = useState("team");
  const [characters, setCharacters] = useState([]);


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

  switch (route) {
    case "team":
      return <Team setRoute={setRoute} />;

    case "characters":
      return <Characters setRoute={setRoute} characters={characters} />;

    case "new":
      return <New addCharacter={addCharacter} setRoute={setRoute} />;

    default:
      return null;
  }
};

export default Router;
