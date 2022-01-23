import React, { useState } from 'react'
import { SearchBar } from './SearchBar'

export const Header = ({navChange, setNavChange, searchState, setSearchState, imageType, setImageType, content, setContent}) => {
    
    const onNavbarChange = () => {
        if (window.scrollY >= 320) {
            setNavChange(true)
        } else {
            setNavChange(false)
        }
    }


    window.addEventListener('scroll', onNavbarChange)
    return (
        <div>
            
            {/* <nav className="navbar navbar-expand-lg navbar-light shadow-5-strong fixed-top navbar-scroll mb-5" style={navChange ? {background: "aliceblue"}: {}}>
            
            <div className="container-fluid">
                
                <a className="navbar-brand" href="#">Brand</a>

                
                <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i className="fas fa-bars"></i>
                </button>

                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Photos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Illustrations</a>
                    </li>
                    
            
                    <li className="nav-item">
                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true"
                        >Vectors</a
                    >
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Videos</a>
                    </li>
                </ul>
                <div style={!navChange ? {visibility: "hidden"}: {}}>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
                
                
                </div>
            
            </div>
            
            </nav> */}
            <nav className="navbar navbar-expand-lg navbar-light shadow-5-strong fixed-top navbar-scroll mb-5" style={navChange ? {background: "aliceblue"}: {}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Photos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Illustrations</a>
                        </li>
                        
                        <li className="nav-item">
                        <a className="nav-link">Vectors</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">Videos</a>
                        </li>
                    </ul>
                    <div style={!navChange ? {visibility: "hidden"}: {}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>    
                    </div>
                </div>
            </nav>
            <SearchBar content={content} setContent={setContent} searchState={searchState} setSearchState={setSearchState} imageType={imageType} setImageType={setImageType} />    

        </div>
    )
}
