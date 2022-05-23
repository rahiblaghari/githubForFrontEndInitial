import React from "react";
import Home from "./differentDisplays/Home"
import Goals from "./differentDisplays/Goals"
import Teams from "./differentDisplays/Teams"
import Calendar from "./differentDisplays/Calendar"
import Settings from "./differentDisplays/Settings"

export default function DisplayTab(currTab){
    // delegate display to show
    // make css, such as the content tab's css, and css for individual tabs
    function show (currState){
        switch(currState){
            case "Home": 
                return <Home userinfo={currTab.userInfo}/>
            case "Goals": 
                return <Goals userinfo={currTab.userInfo}/>
            case "Teams": 
                return <Teams userinfo={currTab.userInfo}/>
            case "Calendar": 
                return <Calendar userinfo={currTab.userInfo}/>
            case "Settings": 
                return <Settings userinfo={currTab.userInfo}/>
            default: return "Error in displaying tab"
        }
    }
    return(
        <div className="mainDisplay"> 
            {show(currTab.currState)}
        </div>
    )
}