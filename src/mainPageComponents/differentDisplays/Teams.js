import React from "react";
export default function Teams(input){
    function getTeams(teamsArray){
        if(!teamsArray || !teamsArray.length)
            return "No Teams Found"
        else{
            return teamsArray.map(team => <div>{team}</div>)
        }
    }
    return(
        <div>
            <div className="titleText">
                Teams:
            </div>
            <div className="contentText">
                {getTeams(input.userinfo.teams)}
            </div>
        </div>
    )
}