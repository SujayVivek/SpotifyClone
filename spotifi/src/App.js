import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import { getTokenFromURL } from './components/Spotify';

const App = () => {
  const [token,setToken]= useState(0);

  useEffect(()=>{
    const hash = getTokenFromURL();
    window.location.hash="";    //this is done so that the access token is not revealed to the user..access token is seen only to the code now!
    const _token = hash.access_token;

    if(_token){
      setToken(_token);
    }    
  },[])
  return (
    <>
    <div className='App'>
      {token && <Login/>}
      
    </div>
    </>
    
  )
}

export default App