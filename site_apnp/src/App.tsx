import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Row, Col, Image} from 'antd';
import imagem from './Images/goncalves-crespo.png';

function App() {
  return (
    <div className="App">
    <header>
      <Col>
        <Row>
          <h1>A Importância da Literatura na Comunicação</h1>
        </Row>

        <Row>
          <h2>Parnasianismo e Simbolismo</h2>
        </Row>
      </Col>
    </header>
    
      <body>
        <div id='image_1'>
        <h1>Biografia do Autor Parnasianista:</h1>
        <h2>Antônio Gonçalves Crespo</h2>
        <img src={imagem} />
        </div>

        <div id="audio">
          <Col>
            <Row>
              <h1>Ouça também:</h1>
            </Row>
            <Row>
              <h2>Podcast sobre o autor Simbolista ...</h2>
            </Row>
            <Row>
              audio aqui
            </Row>
          </Col>
        </div>
      </body>

  <footer>

  </footer>

    </div>
  );
}

export default App;
