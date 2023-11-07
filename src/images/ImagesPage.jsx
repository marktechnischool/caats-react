import { useEffect, useState } from 'react'
import './ImagesPage.css'
import CatIMG from "./cat.jsx"

function ImagesPage() {
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

export default ImagesPage