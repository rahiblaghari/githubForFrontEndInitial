import React from "react";
export default function TopBar(input){
    function validateSignIn(){
        if(document.getElementById("username").value==="Rahib" && document.getElementById("password").value==="Laghari")
            return input.setSignedIn(true);
        //get server request
    }
    return(
        <div>
            <div>Enter UserName: </div>
            <input type="username" id="username" maxlength="32" autocomplete="off">                
            </input>
            <div>Enter Password: </div>
            <input type="password" id="password" maxlength="32" autocomplete="off">                
            </input>
            <br />
            <button onClick={() => validateSignIn()}>Click to sign in</button>
        </div>
    )
}