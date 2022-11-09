import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import UsersPage from "./pages/UsersPage"
import { Provider } from "react-redux"
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="signin" element={<SignInPage />} />
            <Route path="profile" element={<UsersPage />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
