import React from 'react';
import Layout from "../components/functionals/Layout";
import PropTypes from "prop-types";
import CharacterList from '../components/functionals/CharacterList.jsx';


const Characters = ({ characters }) => {
  return (
    <Layout>
      <div className="home">
        <h1>Rick and Morty - Personajes</h1>
        <CharacterList characters={characters} />
      </div>
    </Layout>
  );
};

Characters.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default Characters;
