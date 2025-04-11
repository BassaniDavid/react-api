import { useState, useEffect } from 'react'
import axios from "axios"

function App() {


  const [actress, SetActress] = useState([])
  function fetchActress() {
    //https://jsonplaceholder.typicode.com/posts
    axios.get("https://www.freetestapi.com/api/v1/actresses")
      .then((res) => console.log(res.data))
  }

  useEffect(fetchActress, [])


  return (
    <>


    </>
  )
}

export default App
