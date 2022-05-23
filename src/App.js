import './App.css';
import TopBar from './mainPageComponents/TopBar';
import SideBar from './mainPageComponents/SideBar';
import DisplayTab from './mainPageComponents/DisplayTab';
import SignIn from './signInComponents/SignIn';
import React from 'react';

function App() {
  let [isSignedIn, setSignedIn] = React.useState(false);// set to false later

  let [currState, setState] = React.useState("Home");
  // At beginning, pull json data, should look like this: (can call this userInfo later) may also add jwt id, last name, etc. as needed
  let input = {"name":"Rahib","email":"rlaghari@gmail.com","country":"USA","state":"Texas","city":"Dallas","sports":["Soccer", "Basketball"], "goals":["18 mph run", "2 ft vertical", "Run 5 miles"], "teams": ["Everton", "Grizzlies", "Shooters"]}
  // ^to add: teams they play on, calendar stuff. (Dont incorporate friends for another iteration)
  // Another piece of data should be teams, but this stays on server. The team a user is on is stored on their info, but all teams and their members/captains should stay on main server, to be pulled if search querries them
  function logIn(){
    if(isSignedIn)
    {  return (
        <div>
          <TopBar />
          <SideBar setState = {setState}/>
          <DisplayTab currState={currState} userInfo={input}/> 
        </div>
      );}
    else{
      return (
        <div className='signIn'>
          <TopBar />
          <SignIn setSignedIn = {setSignedIn}/>
        </div>
      )
    }
  }
  return(
    <>
      {logIn()}
    </>
  )
}

export default App;