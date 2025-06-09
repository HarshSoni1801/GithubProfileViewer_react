import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"
import Body from "./Body"
import UserDetails from "./UserDetails"
import {BrowserRouter, Routes, Route} from "react-router"
function App()
{
  return(
    <BrowserRouter basename="/GithubProfileViewer_react">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Body/>}></Route>
        <Route path="/user/:userName" element={<UserDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
