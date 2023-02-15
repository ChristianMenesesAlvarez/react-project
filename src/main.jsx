import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Grid from './components/Grid'
import Calc from './components/Calc'
import { App } from './RoutesApp'
import { CharacterCreationForm } from './components/Rickymorty/CharacterCreationForm.jsx'
import { Characters } from './components/Rickymorty/Characters.jsx'
import { Counter } from './components/Counter'
import { Greeting } from './components/Greeting'
import { Restaurant } from './components/Restaurant'
import { DogApi } from './components/DogApi'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Grid columns={7} rows={6} token1={'X'} token2={'O'} repeatTimes={4} /> */}
    {/* <Calc /> */}
    {/* <App /> */}
    {/* <CharacterCreationForm /> */}
    {/* <Characters /> */}
    {/* <Counter /> */}
    {/* <Greeting>Hola Euralio!</Greeting> */}
    {/* <Restaurant /> */}
    <DogApi />
  </React.StrictMode>,
)
