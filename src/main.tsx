import 'antd/dist/antd.css'
import 'styles/app.css'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)
