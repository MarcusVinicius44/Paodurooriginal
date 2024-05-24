// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import Menu from './menu.js';
import Imagem from './imagemfundo.js';
import Header1 from './cabecalho1.js';
import Section from './section.js';
import Imagem1 from './produtos.js'
import Imagemsobre from './pagesobre.js';
import Imagemsobre2 from './pagesobre2.js';
import Imagemconheça from './conheça.js';
import fundo from './imagens/fundoprodutos.jpeg'


const App = () => {
  return (
    <div className="App">
      
      <div className="header1">
      <Imagem/>
      </div>
      <Menu />
      <Header1/>
      <Section/>
      <div className='rectangle'></div>
      <Imagem1/>
      <div className='rectangle1'></div>
      <Imagemsobre/>
      <Imagemsobre2/>
      <Imagemconheça/>
      <div className='rectangle2'></div>
      </div>
  );
};


export default App;