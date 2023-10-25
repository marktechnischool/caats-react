import { useEffect, useState } from 'react'
import './App.css'
import CatIMG from "./cat.jsx"

function App() {
  const [imageUrls, setImageUrls] = useState([])

  const [inputValueLimit, setInputValueLimit] = useState(100)
  const [inputValuePage, setInputValuePage] = useState(1)

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${inputValuePage}&limit=${inputValueLimit}&quot`)
      .then(resp => resp.json())
      .then(data => {
        setImageUrls(
          data
        )
      })

  }, [inputValueLimit, inputValuePage])


  return (
    <>
      <h1>Vite + React</h1>

      <input type="number" value={inputValueLimit} onChange={event => {
        setInputValueLimit(event.target.value)
      }}/>

      <input type="number" value={inputValuePage} onChange={event => {
        setInputValuePage(event.target.value)
      }}/>

      <div className="card">
        {imageUrls.map((img) => <CatIMG key={img.id} linkCat={img.download_url} />)}
      </div>
    </>
  )
}

const TestApp = () => {
  console.log(App)
  return <App />
} 

export default App