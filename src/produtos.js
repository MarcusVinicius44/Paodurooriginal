import React from 'react';
import pães from './imagens/paes.jpeg';
import polvilho from './imagens/polvilho.jpeg';
import cafezes from './imagens/cafezes.jpeg';
import torrada from './imagens/torrada_de_alho_03.jpeg';
import carros from './imagens/carrinho.png'
import fundo from './imagens/fundoprodutos.jpeg'


const Imagem1 = () => (
  <div className="container">
      <div className="row justify-content-center aa">
        <div className="col-sm-3">
          <div className="card" style={{height: '22rem',width: '18rem'}}>
            <img src={pães} alt="Pães" className="card-img" style={{width: '16rem', padding: '20px', position: 'relative', left: '17px'}}/>
            <div className="card-body">
              <h5 className="card-title">Pães</h5>
              <div class="circulo"></div>
              <img src={carros} alt='.' className='carro'></img>
          </div>
        </div>
        </div>
        <div className="col-sm-3">
          <div className="card" style={{height: '22rem',width: '18rem'}}>
            <img src={polvilho} alt="Doces" className="card-img" style={{width: '16rem', padding: '20px', position: 'relative', left: '17px'}}/>
            <div className="card-body">
              <h5 className="card-title">Polvilho</h5>
              <div class="circulo"></div>
              <img src={carros} alt='.' className='carro'></img>
          </div>
        </div>
        </div>
        <div className="col-sm-3">
          <div className="card" style={{ height: '22rem',width: '18rem'}}>
            <img src={cafezes} alt="Cafés" className="card-img" style={{width: '16rem', padding: '20px', position: 'relative', left: '17px'}}/>
            <div className="card-body">
              <h5 className="card-title">Cafézes</h5>
              <div class="circulo"></div>
              <img src={carros} alt='.' className='carro'></img>
          </div>
        </div>
        </div>
        <div className="col-sm-3">
          <div className="card" style={{height: '22rem',width: '18rem'}}>
            <img src={torrada} alt="Biscoitos" className="card-img" style={{width: '16rem', padding: '20px', position: 'relative', left: '17px'}}/>
            <div className="card-body">
              <h5 className="card-title">Torradas</h5>
              <div class="circulo"></div>
              <img src={carros} alt='.' className='carro'></img>
            </div>
          </div>
        </div>
        </div>
        </div>

)
export default Imagem1;