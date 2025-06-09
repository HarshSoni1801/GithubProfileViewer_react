import { useState,useEffect } from "react"
import useFetch from "./useFetch";
import {Link} from "react-router"

function Body()
{
   const {generateProfile, formatDate, Profile, Name, setName}=useFetch();
   return(
      <>
         <div>
            <form action="" className="Form" onSubmit={(e) => e.preventDefault()}>
               <input type="text" value={Name} placeholder="Enter Github Id" className="SearchBar" onChange={(e)=>{setName(e.target.value)}} />
               <button onClick={(e)=>{
                  e.preventDefault();
                  generateProfile(Name)}
                  }>Search</button>
            </form>
         </div>
         <div className="Profiles">
            {
               Profile.map((value)=>{ return(
                  <div key={value.id} className="Card">
                     <img src={value.avatar_url} alt="img"/>
                     <Link to={`/user/${value.login}`}>
                        <h2>{value.login}</h2>
                     </Link>
                     <h3>No. of public Repos: {value.public_repo}</h3>
                     <h3>Last Active at: {formatDate(value.updated_at)}</h3>
                     <a href={value.html_url} target="_blank">Go to Github Profile</a>
                  </div>
                  )
               })
            }
         </div>
      </>
   )
}
export default Body