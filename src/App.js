import React from 'react'
import { PrimeReactProvider } from 'primereact/api'
import './App.css'
import { Button } from 'primereact/button' // Importando o componente Button

const App = () => {
  return (
    <PrimeReactProvider>
      <div className="app">
        <Button label="Clique-me" />
      </div>
    </PrimeReactProvider>
  )
}

export default App
