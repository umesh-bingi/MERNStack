import { createRoot } from 'react-dom/client'
// import './index.css'

//importing default
// import App from './App.jsx'
// createRoot(document.getElementById('root')).render(
//     <App />
// )

//improting modules
// import {App} from './App.jsx'
// createRoot(document.getElementById('root')).render(
//     <App />
// )
// import {App2} from './App.jsx'
// createRoot(document.getElementById('root')).render(
//     <App2 />
// )

//trying to improt the both modules at same time
import App from './App.jsx'
import './assets/css/style.css'
createRoot(document.getElementById('root')).render(
    <App />
)

