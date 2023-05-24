import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './component/Home';
import Getdata from './component/Getdata';
import Nav from './component/Nav';
import Search from './component/Search';
import Update from './component/Update';

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Add" element={<Getdata />} />
    <Route path="/search" element ={<Search/>}/>
    <Route path="/update/:id" element ={<Update/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App