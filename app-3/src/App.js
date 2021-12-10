import React, { useState, useEffect } from 'react'
import Pokemon from './components/Pokemon.js'
import PokemonList from './components/PokemonList.js'
import './App.css'

function App() {
  const [list, setList] = useState([])
  return (
    <div className="App">
      <Pokemon />
      <PokemonList />
    </div>
  )
}

export default App
