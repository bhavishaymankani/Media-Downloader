import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Main } from './Main'

export const SearchPage = () => {
    const location = useLocation()
    const {searchState, imageType, content} = location.state
    const [images, setImages] = useState(content)
    return (
        <div>
            <header>
                <Header searchState={searchState} imageType={imageType} images={images} setImages={setImages}/>
            </header>
            <main>
                <Main content={images}/>
            </main>
        </div>
    )
}
