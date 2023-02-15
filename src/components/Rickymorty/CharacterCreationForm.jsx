import { useState } from "react";
import React from 'react';
import axios from "axios";

function CharacterCreationForm() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    status: '',
    image: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://api-rick-ymorty-production-59b0.up.railway.app/characters', formData);
      console.log(res.data);
    } catch (e) {
      console.log(e.message);
    }
    setFormData({
      name: '',
      gender: '',
      status: '',
      image: ''
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='character-form'>
        <fieldset>
          <legend>Datos del personaje</legend>

          <label>Nombre:
            <input type="text" name="name" value={formData.name || ""} onChange={handleChange} />
          </label>

          <span>Sexo:
            <label>
              <input type="radio" name="gender" value="Male" onChange={handleChange} />♂
            </label>
            <label>
              <input type="radio" name="gender" value="Female" onChange={handleChange} />♀
            </label>
          </span>

          <label>Estado:
            <select name="status" value={formData.status || ""} onChange={handleChange}>
              <option value="alive">Vivo</option>
              <option value="dead">Muerto</option>
            </select>
          </label>

          <label>Imagen:
            <input type="text" name="image" value={formData.status || ""} onChange={handleChange} />
          </label>

          <button type="submit" >Crear</button>
        </fieldset>
      </form>
    </>
  )
}

export { CharacterCreationForm };