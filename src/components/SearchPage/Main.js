import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

export const Main = ({content}) => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="image-container">
            {content.length !== 0 && content.map(image => <img className="img-1" onClick={(e) => {
                e.preventDefault()
                navigate("/search/image", {state:{imageId: image.id}})
            }} key={image.id} src={image.webformatURL} />)}
            </div>
        </div>
    )
}
