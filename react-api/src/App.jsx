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

  useEffect(fetchActress, [])


  return (
    <Card actress={DataActress} />
  )
}

export default App
