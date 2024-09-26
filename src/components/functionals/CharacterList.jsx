import React from 'react';
import './characterList.css';

const CharacterList = ({ characters }) => {
  return (
    <div className="characterList">
      {characters.map(character => (
        <div key={character.id} className="card">
          <div>
            <figure>
              <img 
                src={`${character.image}?${new Date().getTime()}`}
              />
            </figure>
            <p>{character.id}</p>
            <h3>{character.name}</h3>
            <p>Estado: {character.status}</p>
            <p>Especie: {character.species}</p>
            <p>Género: {character.gender}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
