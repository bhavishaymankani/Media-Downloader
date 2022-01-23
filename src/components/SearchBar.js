import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../App.css'
import pixabayApi from '../pixabayApi'
import {useNavigate} from 'react-router-dom'

export const SearchBar = ({searchState, setSearchState, imageType, setImageType, content, setContent}) => {
    
    const navigate = useNavigate()
    
    const searchImage = async (s, imageType) => {
        try {
            const response = await axios.get(`${pixabayApi.url}?key=${pixabayApi.key}`, {
                params: {
                    q: s,
                    image_type: imageType
                }
            })
            setContent(response.data.hits)
            console.log(content)
        } catch (error) {
            return error.message
        }
    }
    const submit = (e) => {
        e.preventDefault()

        console.log(searchState, imageType)
        imageType = imageType === "" ? "all": imageType
        searchImage(searchState, imageType)

        navigate("/search", {state: {searchState, imageType, content}})
    }
    return (
        <div>
            <div
                id="intro"
                className="search-bar"
                style={{
                        backgroundImage: "url(https://cdn.pixabay.com/index/2022/01/10/17-03-33-886_1920x550.jpg)",
                        height: "80vh",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        flexFlow: "column",
                        justifyContent: "center",
                        alignItems: "center"

                    }}
                >
                    <div className="text-white px-2 col-lg-6 col-xs-12 col-sm-12" >
                        <form action="" onSubmit={submit}>
                            <h1 className="mb-4" style={{textShadow: "0 0 3px #0000, 0 0 5px #000000", textAlign: "center"}}>Stunning free images & royalty free stock</h1>
                            <div className="input-group">
                                    <input type="text" className="form-control" onChange={(e) => setSearchState(e.target.value)}
                                    style={{height:"55px", borderRadius: "10px 0px 0px 10px"}} aria-label="Text input with dropdown button" placeholder="Search images, vectors and videos"/>
                                
                                    <select className="orm-select form-select-lg dropdown-toggle" onChange={(e) => setImageType(e.target.value)} style={{borderRadius: "0px 10px 10px 0px"}} data-bs-toggle="dropdown" aria-expanded="false">
                                        <option className="dropdown-item" value="all" selected>Images</option>
                                        <option className="dropdown-item" value="photo">Photos</option>
                                        <option className="dropdown-item" value="vector">Vector graphics</option>
                                        <option className="dropdown-item" value="illustration">Illustrations</option>
                                        <hr className="dropdown-divider"/>
                                        <option className="dropdown-item" value="video">Videos</option>
                                    </select>
                                    {/* <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" href="#">Photos</a></li>
                                        <li><a className="dropdown-item" href="#">Vector graphics</a></li>
                                        <li><a className="dropdown-item" href="#">Illustrations</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#">Videos</a></li>
                                    </ul> */}
                                    
                                    
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}
