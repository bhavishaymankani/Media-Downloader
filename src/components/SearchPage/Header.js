import axios from 'axios'
import React, { useState } from 'react'
import pixabayApi from '../../pixabayApi'
import './style.css'

export const Header = ({searchState, imageType, setImages}) => {
    const [search, setSearch] = useState(searchState)
    const [imgType, setImgType] = useState(imageType)
    const [order, setOrder] = useState("")
    const [category, setCategory] = useState("")
    const [orientation, setOrientation] = useState("")
    const submit = (e) => {
        e.preventDefault()
        axios.get(`${pixabayApi.url}?key=${pixabayApi.key}`, {
            params: {
                q: search,
                image_type: imgType,
                per_page: 50,
                order: order,
                category: category,
                orientation: orientation
            }
        }).then((res) => setImages(res.data.hits))
        .catch(err => err.message)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-5-strong  navbar-scroll mb-5">
            <form onSubmit={submit}>
                <div className="navbar-grid px-2">
                
                    <div className="d-flex mb-2">
                       
                            <input className="form-control me-2" defaultValue={searchState} onChange={(e) => setSearch(e.target.value) } type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success"  type="submit">Search</button>
                        
                    </div>  
                    <div className="navbar-controls text-dark" style={{minHeight: "20%"}}>
                        <div className="me-2">
                            <label htmlFor="formGroupExampleInput" class="form-label">Order</label>
                            <select className="form-select" aria-label="Default select example" onChange={e => setOrder(e.target.value)}>
                                
                                <option value="popular" selected>Popular</option>
                                <option value="latest">Latest</option>
                                
                            </select>
                        </div>
                        <div className="me-2">
                            <label htmlFor="formGroupExampleInput" class="form-label">Image Type</label>
                            <select className="form-select" aria-label="Default select example" onChange={e => setImgType(e.target.value)}>
                                <option value="all" selected>All</option>
                                <option value="photo">Photo</option>
                                <option value="illustration">Illustration</option>
                                <option value="vector">Vector</option>
                            </select>
                        </div>
                        
                        <div className="me-2">
                            <label htmlFor="formGroupExampleInput" class="form-label">Category</label>
                            <select className="form-select" aria-label="Default select example" onChange={e => setCategory(e.target.value)}>
                                <option selected>Open this select category</option>
                                <option value="backgrounds">Backgrounds</option>
                                <option value="fashion">Fashion</option>
                                <option value="nature">Nature</option>
                                <option value="science">Science</option>
                                <option value="education">Education</option>
                                <option value="feelings">Feelings</option>
                                <option value="health">Health</option>
                                <option value="people">People</option>
                                <option value="religion">Religion</option>
                                <option value="places">Places</option>
                                <option value="animals">Animals</option>
                                <option value="industry">Industry</option>
                                <option value="computer">Computer</option>
                                <option value="food">Food</option>
                                <option value="sports">Sports</option>
                                <option value="transportation">Transportation</option>
                                <option value="travel">Travel</option>
                                <option value="buildings">Buildings</option>
                                <option value="business">Business</option>
                                <option value="music">Music</option>
                                
                            </select>
                        </div>

                        <div className="me-2">
                            <label htmlFor="formGroupExampleInput" class="form-label">Orientation</label>
                            <select className="form-select" aria-label="Default select example" onChange={e=> setOrientation(e.target.value)}>
                                
                                <option value="all" selected>Any Orientation</option>
                                <option value="horizontal">Horizontal</option>
                                <option value="vertical">Vertical</option>
                            </select>
                        </div>
                        
                    </div> 
                   
                </div>
                </form>
                
            </nav>
            
        </div>
    )
}
