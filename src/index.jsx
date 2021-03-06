import React from "react";
import { render } from 'react-dom';
import App from "./components/App.jsx";
import { Provider } from 'react-redux';//contextAPI with Store
import { store } from './reducers';


render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
)