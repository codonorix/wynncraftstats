import React, {useEffect, useState} from "react";

import "./homepage.css"
import {GenerateStats} from "../stats/GenerateStats";

export const HomePage = () => {
    const [username, setUsername] = useState("");
    const [code, setCode] = useState(0)
    const [data, setData] = useState([])


    const searchUser = () => {
        fetch(`https://api.wynncraft.com/v2/player/${username}/stats`)
            .then(query => query.json())
            .then(respone => {
                if(respone.code === 400) {
                    setCode(respone.code)
                }else{
                    setCode(respone.code)
                    setData(respone)
                }
            })
    }

    const FourOFour = () => {
        return(
            <>
                <h1>404: Player not found</h1>
            </>
        )
    }

    const checkInfo = () => {
        if(code === 0) {
            return(
                <></>
            )
        }else{
            console.log(data)
            return (
                <GenerateStats info={data}/>
            )
        }
    }
    return (
        <div className={"center background"}>
            <input placeholder={"Username"} className={"userInput"}
                   onChange={event => setUsername(event.target.value)}/>
            <br/>
            <br/>
            <button className={"searchButton"} onClick={searchUser}>Search For User</button>
            {code === 400 ? <FourOFour /> : checkInfo()}
        </div>
    )
}