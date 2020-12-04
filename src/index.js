import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose} from 'redux';
import App from './routes/App';
import reducer from './reducers';

const initialState = {
  cart: [],
  products: [
    {
      "id": "1",
      "image": "https://arepa.s3.amazonaws.com/camiseta.png",
      "title": "Camiseta",
      "price": 25,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "3",
      "image": "https://arepa.s3.amazonaws.com/mug.png",
      "title": "Mug",
      "price": 10,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "4",
      "image": "https://arepa.s3.amazonaws.com/pin.png",
      "title": "Pin",
      "price": 4,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "5",
      "image": "https://arepa.s3.amazonaws.com/stickers1.png",
      "title": "Stickers",
      "price": 2,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "6",
      "image": "https://arepa.s3.amazonaws.com/stickers2.png",
      "title": "Stickers",
      "price": 2,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "7",
      "image": "https://arepa.s3.amazonaws.com/hoodie.png",
      "title": "Hoodie",
      "price": 35,
      "description": "bla bla bla bla bla"
    },

  ]
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);