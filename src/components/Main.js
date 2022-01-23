import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style.css'

export const Main = ({images, setImages}) => {

    

    async function searchImage(s) {
        try {
            const response = await axios.get("https://pixabay.com/api/?key=13929370-f08bdd17313ad0729d7a16f85", {
                params: {
                    q: s
                }
            })
           setImages(response.data.hits)
            
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        searchImage("nature")
        
    }, [])
    
   
    

   
        
    return (
        <div>
            {/* <h1>{axios.get("https://pixabay.com/api/?key=13929370-f08bdd17313ad0729d7a16f85&q=yellow+flower").then(res=> res.data).catch(err => err.message)}</h1> */}
            
            {/* <button onClick={submit}>Button</button> <br/> */}
            
            <div className="image-container">
            {images.length !== 0 && images.map(image => <img className="img-1" key={image.id} src={image.webformatURL} />)}
            </div>
        </div>
    )
}
