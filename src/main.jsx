import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TaskContext from './Contexts/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TaskContext>
    <App />
  </TaskContext>
)
