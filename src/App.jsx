import { useEffect, useState } from 'react'
import './App.css'
import CatIMG from "./cat.jsx"

function App() {

  const [imageUrls, setImageUrls] = useState([])
  const [count, setCount] = useState(1)
  const [count2, setCount2] = useState(2)
  const [inputValue, setInputValue] = useState(1)
  const [inputValuePage, setInputValuePage] = useState(1)

  useEffect(() => {
    console.log("test")
    fetch(`https://picsum.photos/v2/list?page=${inputValuePage}&limit=${inputValue}&quot`)
      .then(resp => resp.json())
      .then(data => {
        setImageUrls(
          data.map(pic => pic.download_url)
        )
      })

  }, [inputValue, inputValuePage])


  return (
    <>
      <h1>Vite + React {count} {count2}</h1>

      <input type="number" value={inputValue} onChange={event => {
        setInputValue(event.target.value)
      }}/>

      <input type="number" value={inputValuePage} onChange={event => {
        setInputValuePage(event.target.value)
      }}/>

      <button onClick={() => {
        setCount((value) => value + 1)
        setCount2((value) => value + 2)
        }}>CLICK HERE</button>

      <div className="card">
        {imageUrls.map(pic => <CatIMG linkCat={pic}/>)}
      </div>
    </>
  )
}

const TestApp = () => {
  console.log(App)
  return <App />
} 

export default App