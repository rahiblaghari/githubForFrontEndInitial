import React from "react";
export default function Settings(input){
    return(
        <div className="contentText">
            Name: {input.userinfo.name}
            <p>Email: {input.userinfo.email}</p>
            <p>Country: {input.userinfo.country}</p>
            <p>State/County/Providance: {input.userinfo.state}</p>
            <p>City: {input.userinfo.city}</p>
            <p>Sports you play: {input.userinfo.sports.join(', ')}</p>
        </div>
    )
}