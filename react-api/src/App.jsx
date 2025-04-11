import { useState, useEffect } from 'react'
import axios from "axios"
import Card from './components/CardElement'

function App() {


  const [DataActress, setDataActress] = useState([])
  function fetchActress() {
    //https://jsonplaceholder.typicode.com/posts
    axios.get("https://www.freetestapi.com/api/v1/actresses")
      .then((res) => setDataActress(res.data))
  }

  const [DataActors, setDataActors] = useState([])
  function fetchActors() {
    //https://jsonplaceholder.typicode.com/posts
    axios.get("https://www.freetestapi.com/api/v1/actors")
      .then((res) => setDataActors(res.data))
  }

  useEffect(fetchActress, [])
  useEffect(fetchActors, [])


  return (
    <>
      <h2>attrici</h2>
      <Card actress={DataActress} />

      <h2>attori</h2>
      <Card actress={DataActors} />

    </>

  )
}

export default App
