import { useEffect, useState } from 'react'
import './ImagesPage.css'
import CatIMG from "./cat.jsx"
import { useDispatch, useSelector } from 'react-redux'
import { updateLimit, updatePage } from './imagesInputReducerSlice'

function ImagesPage() {
  const dispatch = useDispatch()
  const [imageUrls, setImageUrls] = useState([])

  const inputValueLimit = useSelector(state => state.images.limit)
  const inputValuePage = useSelector(state => state.images.page)

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
        dispatch(updateLimit(event.target.value))
      }}/>

      <input type="number" value={inputValuePage} onChange={event => {
        dispatch(updatePage(event.target.value))
      }}/>

      <div className="card">
        {imageUrls.map((img) => <CatIMG key={img.id} linkCat={img.download_url} />)}
      </div>
    </>
  )
}

export default ImagesPage