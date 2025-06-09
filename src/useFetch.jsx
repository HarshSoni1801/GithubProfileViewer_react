import {useState,useEffect} from "react"

export default function useFetch()
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

   
   function formatDate(dateString) {
      const date = new Date(dateString);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
   }
   return {generateProfile, formatDate, Profile, Name, setName}
}