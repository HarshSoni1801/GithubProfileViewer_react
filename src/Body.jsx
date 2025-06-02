import { useState,useEffect } from "react"
function Body()
{
   const [Profile,setProfile]=useState([]);
   const [Name,setName]=useState("");
   async function generateProfile(Name)
   {
      try{
         const response = await fetch(`https://api.github.com/search/users?q=${Name}`);
         const data=await response.json();
         const profiles=await Promise.all(
            data.items.map(async (user)=>{
               const userResponse=await fetch(user.url)
               const userDetails=await userResponse.json();
               return(
                  {
                     id:user.id,
                     login:user.login,
                     avatar_url:user.avatar_url,
                     html_url:user.html_url,
                     public_repo:userDetails.public_repos,
                     updated_at:userDetails.updated_at
                  }
               )
            })
         )
         setProfile(profiles||{});
      }
      catch{
         console.log('Error');
      }
   }
   useEffect(()=>{
      generateProfile("");
   },[]);

   function formatDate(dateString) {
      const date = new Date(dateString);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
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
                     <h2>{value.login}</h2>
                     <h3>No. of public Repos: {value.public_repo}</h3>
                     <h3>Last Active at: {formatDate(value.updated_at)}</h3>
                     <a href={value.html_url} target="blank">Go to Github Profile</a>
                  </div>
                  )
               })
            }
         </div>
      </>
   )
}
export default Body