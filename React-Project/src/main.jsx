import React from "react"
import ReactDOM from "react-dom/client"

//* components
import App from "./App"
import "./index.css"
const Root = ReactDOM.createRoot(document.getElementById('root'))
Root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )