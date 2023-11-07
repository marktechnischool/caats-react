import { Link } from 'react-router-dom'
import './cat.css'

const catIMG = (props) => {
    const encodedImgLink = encodeURIComponent(btoa(props.linkCat))
    return <Link to={`/images/${encodedImgLink}`}><img className="image" src={props.linkCat} /></Link> 
}

export default catIMG