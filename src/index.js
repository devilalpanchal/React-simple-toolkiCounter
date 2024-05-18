import React from 'react'
import ReactDOM from 'react-dom/client'  // Updated import statement for React 18
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <Provider store={store}>
    <App />
  </Provider>
)
