import { useParams } from "react-router"
import './image.css' 

const HAKUNA_MATATA = "PZW is awesome"


const Image = () => {
    const { imgId } = useParams()
    const decodedImgLink = atob(decodeURIComponent(imgId))
    return <img className="image-tak" src={decodedImgLink}></img>
}

export { HAKUNA_MATATA }
export default Image