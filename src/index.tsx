import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './App.scss'
import { Provider } from "react-redux"
import { store } from "./store"
import 'material-design-icons-iconfont'
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
