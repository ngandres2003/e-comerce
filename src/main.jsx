import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App"
import Home from "./Home"
import Artists from "./Artists"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="artists" element={<Artists />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)

