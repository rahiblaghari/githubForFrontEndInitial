import React from "react";
export default function TopBar(input){
    function validateSignIn(){
        if(document.getElementById("username").value==="Rahib" && document.getElementById("password").value==="Laghari")
            return input.setSignedIn(true);
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