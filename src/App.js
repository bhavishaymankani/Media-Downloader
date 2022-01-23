import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchPage } from './components/SearchPage/SearchPage';
import { IndividualPage } from './components/SearchPage/IndividualPage';

function App() {

  const [images, setImages] = useState([])
  const [searchState, setSearchState] = useState("")
  const [imageType, setImageType] = useState("")
  const [navChange, setNavChange] = useState(false)
  const [content, setContent] = useState([])

  
  
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <div>
          <header className="" style={{width: "100%"}}>
            <Header content={content} setContent={setContent} navChange={navChange} setNavChange={setNavChange} searchState={searchState} setSearchState={setSearchState} imageType={imageType} setImageType={setImageType}/>
          </header>
          <main>
            <Main images={images} setImages={setImages}/>
          </main>
        </div>} />

        <Route path="/search" element={<SearchPage />}/>
        <Route path="/search/image" element={<IndividualPage />}/>
        </Routes>
      </BrowserRouter>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
