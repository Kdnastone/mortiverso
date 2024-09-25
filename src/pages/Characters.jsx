import React, { useState, useEffect } from 'react';
import Layout from "../components/functionals/Layout";
import PropTypes from "prop-types";
import CharacterList from '../components/functionals/CharacterList.jsx';
import { getRandomCharacters } from '../service/api.js';


const Characters = () => {
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
      const randomCharacters = await getRandomCharacters();
      console.log('Nuevos personajes obtenidos:', randomCharacters);
      setCharacters(randomCharacters);
    };

    useEffect(() => {
      fetchCharacters();
    }, []);

    return (
      <Layout>
        <div className="home">
          <h1>Rick and Morty - Tres Personajes aleatorios</h1>
          <CharacterList characters={characters} />
        </div>
      </Layout>
    );
};

Characters.propTypes = {

};

export default Characters;

