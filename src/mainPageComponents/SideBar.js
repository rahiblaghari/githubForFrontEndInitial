import React from "react";
import Tab from "./Tab";
//todo, less import statements for images (possible, have to look into):
import calendarIcon from "../images/calendar.png"
import goalsIcon from "../images/goals.png"
import homeIcon from "../images/home.png"
import settingsIcon from "../images/settings.png"
import teamsIcon from "../images/teams.png"


export default function SideBar(input){
    
    return(
        <>
            <div className="sideBar">
                {/* make so that tabs have name, image (logo), and a way to click to set the screen to a certain way */}
                {/* also, fix up css*/}
                <div onClick={() => input.setState("Home")}>
                <Tab tabName="Home" tabIcon={homeIcon}/>
                </div>
                <div onClick={() => input.setState("Goals")}>
                <Tab tabName="Goals" tabIcon={goalsIcon}/>
                </div>
                <div onClick={() => input.setState("Teams")}>
                <Tab tabName="Teams" tabIcon={teamsIcon}/>
                </div>
                <div onClick={() => input.setState("Events")}>
                <Tab tabName="Events" tabIcon={calendarIcon}/>
                </div>
                <div onClick={() => input.setState("Settings")}>
                <Tab tabName="Settings" tabIcon={settingsIcon}/>
                </div>
            </div>
        </>
    )
}