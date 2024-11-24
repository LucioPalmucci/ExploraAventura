import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import Celular from './Components/Celular';
import Comentarios from './Components/Comentarios';
import Descripcion from './Components/Descripción';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import Preguntas from './Components/Preguntas';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Introduction/>
    <Descripcion/>
    <Celular/>
    <Comentarios/>
    <App/>
    <Preguntas/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
