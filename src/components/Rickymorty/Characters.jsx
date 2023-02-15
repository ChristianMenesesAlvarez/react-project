import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
import { CharacterCreationForm } from "./CharacterCreationForm";

// .characters-page {
//   display: flex;
//   box-sizing: border-box;
//   width: 100%;
//   height: 95%;
//   flex-flow: row wrap;
//   justify-content: space-evenly;
//   align-items: center;
// }

// .characters-cell {
//   display: flex;
//   box-sizing: border-box;
//   width: 20%;
//   flex-flow: column nowrap;
//   box-sizing: border-box;
//   text-align: center;
// }

// .characters-cell img {
//   box-sizing: border-box;
// }

// .button-wrapper {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
// }

// .character-form fieldset {
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: center;
//   align-items: start;
//   gap: 10px;
// }

function Characters() {
  const [createForm, toggleForm] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const getCharacters = async () => {
    try {
      const res = await axios.get('https://api-rick-ymorty-production-59b0.up.railway.app/characters?page=' + page);
      setCharacters(res.data);
    } catch (error) {
      console.log(error.message)
    }
  }

  const deleteCharacter = async (_id) => {
    try {
      const res = await axios.delete('https://api-rick-ymorty-production-59b0.up.railway.app/characters/id/' + _id);
      console.log(res);
      const newData = characters.filter(e => e._id != _id);
      setCharacters(newData);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getCharacters();
  }, [page])

  return (
    <>
      {createForm && <CharacterCreationForm />}
      <div className="button-wrapper">
        <button onClick={() => toggleForm(!createForm)} >Crear personaje</button>
        <button onClick={() => setPage(page - 1 > 0 ? page - 1 : 1)} >Anterior</button>
        <span>{page}</span>
        <button onClick={() => setPage(page + 1)}>Posterior</button>
      </div>
      <div className="characters-page" >
        {characters.map(i =>
          <div key={i._id} className="characters-cell" >
            {i.name}
            <img src={i.image} alt="image" />
            <button onClick={() => deleteCharacter(i._id)}>Eliminar</button>
          </div>)}
      </div>
    </>
  )
}

export { Characters };