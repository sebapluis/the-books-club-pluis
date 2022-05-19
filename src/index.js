import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyArfe8WF3elM6al3Rnm3T_A22ksMYAiujc",
  authDomain: "the-books-club.firebaseapp.com",
  projectId: "the-books-club",
  storageBucket: "the-books-club.appspot.com",
  messagingSenderId: "992583574631",
  appId: "1:992583574631:web:ff3521f818d4ed279e20c2"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>  
    </BrowserRouter>
  </React.StrictMode>
);


