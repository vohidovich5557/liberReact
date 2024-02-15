import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Aos from 'aos'
import "aos/dist/aos.css"
import './main.scss'

ReactDOM.createRoot(document.getElementById('root'), Aos.init()).render(<App />)
