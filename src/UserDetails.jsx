import {useParams} from "react-router"
import { useEffect, useState } from "react";
export default function UserDetails()
{
   const [user,setUser]=useState(null);
   const {userName} = useParams();
   useEffect(()=>{
      async function fetchUserData() {
         const response=await fetch(`https://api.github.com/users/${userName}`);
         const data=await response.json();
         setUser(data);
      }
      fetchUserData();
   },[userName]);
   if (!user) return <p style={{ color: "white", textAlign: "center" }}>Loading...</p>;

   return (
      <div style={{ color: "white", textAlign: "center", padding: "50px" }}>
      <img src={user.avatar_url} alt="avatar" style={{ borderRadius: "50%", height: "200px" }} />
     <h1>{user.name || user.login}</h1>
     <p><strong>Username:</strong> {user.login}</p>
     <p><strong>Bio:</strong> {user.bio || "No bio available"}</p>
     <p><strong>Location:</strong> {user.location || "Not specified"}</p>
     <p><strong>Public Repos:</strong> {user.public_repos}</p>
     <p><strong>Followers:</strong> {user.followers}</p>
     <p><strong>Following:</strong> {user.following}</p>
     <p><a href={user.html_url} target="_blank" style={{ color: "lightgreen" }}>View on GitHub</a></p>
   </div>
 );
}