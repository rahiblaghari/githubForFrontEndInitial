import React from "react";
///
import axios from 'axios';

let api = axios.create({
  baseURL: "http://localhost:5000/validate",
})
/// create validate route in backend
export default function TopBar(input){
    function validateSignIn(){
        if(document.getElementById("username").value==="Rahib" && document.getElementById("password").value==="Laghari")
            return input.setSignedIn(true);// implement by posting to server rather than checking vals in if statement, then depending on response decide what to do
        //get server request, should return a user info json object (such as name, info, etc) to be used in displayTabs
    }
    return(
        <div className="signInPage">
            <div>Enter UserName: </div>
            <input type="username" id="username" maxLength="32" autoComplete="off">                
            </input>
            <div>Enter Password: </div>
            <input type="password" id="password" maxLength="32" autoComplete="off">                
            </input>
            <br />
            <button onClick={() => validateSignIn()}>Click to sign in</button>
        </div>
    )
}