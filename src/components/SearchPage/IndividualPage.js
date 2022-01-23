import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import pixabayApi from '../../pixabayApi'
import { Header } from './Header'

export const IndividualPage = () => {
    const location = useLocation()
    const [image, setImage] = useState([])
    const {imageId} = location.state

    const getImage = async () => {
        try {
            const response = await axios.get(`${pixabayApi.url}?key=${pixabayApi.key}`, {
                params:{
                    id: imageId
                }
            })
            setImage(response.data.hits)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(image)
    useEffect(() => {
        getImage()
    }, [])
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <img src={image[0].previewURL} alt="" />
            </main>
        </div>
    )
}
