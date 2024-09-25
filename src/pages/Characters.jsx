import React from 'react';
import Layout from "../components/basics/Layout";
import PropTypes from "prop-types";
import CharacterList from '../components/functionals/CharacterList.jsx';

const Characters = ({ setRoute, characters }) => {
  return (
    <Layout setRoute={setRoute}>
      <div className="home">
        <h1>Rick and Morty - Personajes</h1>
        <CharacterList characters={characters} />
      </div>
    </Layout>
  );
};

Characters.propTypes = {
  setRoute: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired,
};

export default Characters;
