import React from 'react';
import Home from './components/Home.js';
import ItemPage from './components/ItemPage.js';
import Layout from './Layout.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyCartPage from './components/MyCartPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="" element={< Home/>} />
          <Route path='item/:id' element={<ItemPage/>}/>
          <Route path='mycart' element={<MyCartPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
