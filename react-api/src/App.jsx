// senza importarli da React, usestate e useEffect non funzionano
import { useState, useEffect } from 'react'

// importo axios per poter effettuare chiamate APi
import axios from "axios"

// importo il componente Card
import Card from './components/CardElement'


function App() {

  // attivo useState per la lista di attrici
  const [DataActress, setDataActress] = useState([])

  // faccio la chiamata all API
  function fetchActress() {
    axios.get("https://www.freetestapi.com/api/v1/actresses")
      .then((res) =>
        // attivo useState resistuendo la lista
        setDataActress(res.data)
      )
  }

  // attivo useState per la lista di attori
  const [DataActors, setDataActors] = useState([])

  // faccio la chiamata all API
  function fetchActors() {
    axios.get("https://www.freetestapi.com/api/v1/actors")
      .then((res) =>
        // attivo useState resistuendo la lista
        setDataActors(res.data)
      )
  }

  // useEffect si attiva sempre al caricare della pagina
  useEffect(fetchActress, [])
  useEffect(fetchActors, [])

  // concateno i dati di attrici e attori nello stesso array
  const list = DataActress.concat(DataActors)

  return (
    <>
      <h2>attrici e attori</h2>
      {/* passo come props l array con entrambe le liste */}
      <Card act={list} />

      {/* <h2>attori</h2>
      <Card actress={DataActors} /> */}
    </>
  )
}

export default App
