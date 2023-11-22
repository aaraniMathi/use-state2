import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  
  const [signIn,setSignIn]=useState(false)
  const [signOut,setSignOut]=useState(false)


  function login(){
    setSignIn(signIn ? false : true);
    setSignOut(signOut ? false : true);
  }
 
  return (
    <div className="App">
        
        <div className="storeData">
                
                <button onClick={login}>{signIn ? "Sign out" : "Sign in"}</button>
                <h3>{signOut ? "You are Welcome" : "Please Sign in"}</h3>
          </div> 
      </div>
  );
}

export default App;