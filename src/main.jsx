import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"
import Body from "./Body"
function GithubProfile()
{
  return(
    <>
      <Header></Header>
      <Body></Body>
    </>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile></GithubProfile>)
