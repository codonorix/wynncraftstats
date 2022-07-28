import React, {useState} from "react";
import "./generatestats.css"

import championRank from "../images/ranks/champion.png"

export const GenerateStats = (props) => {
    const [skin, setSkin] = useState("")
    const uuid = props.info.data[0].uuid
    const info = props.info.data[0]

    const onlineStatus = () => {
        if (info.meta.location['online']) {
            return (
                <span className={'online'}></span>
            )
        } else {
            return (
                <span className={'offline'}></span>
            )
        }
    }

    const rankStatus = () => {
        const rank = info.meta.tag['value']
        console.log(rank)
        if (rank === 'VIP') {
            return (
                <span id={'VIP'}>{rank}</span>
            )
        } else if (rank === 'CHAMPION') {
            return (
                <>
                    <img className={'smallerImg'} src={championRank} width={150} height={200}/>
                    <h2 id={'CHAMPION'}>{rank}</h2>
                </>
            )
        }
    }
    return (
        <div className={'container justify'}>
            <div className={'border'}>
                <div className={'row'}>
                    <h1 className={'username center'}>{JSON.stringify(info.username).replace(/"/g, '')}</h1>
                    <div className={'col-md-3 center'}>
                        <img src={`https://crafatar.com/renders/body/${uuid}`} className={'character'}/>
                    </div>
                    <div className={'col-md'}>
                        <h2>First Join: {(info.meta.firstJoin).slice(0, info.meta.firstJoin.lastIndexOf('T'))}</h2>
                        <h2>Last Online: {(info.meta.lastJoin).slice(0, info.meta.firstJoin.lastIndexOf('T'))}</h2>
                        <h2>Online Status: {onlineStatus()}</h2>
                        <h2>Play time: {info.meta.playtime / 24} days</h2>
                    </div>
                    <div className={'col-md'}>
                        {rankStatus()}
                    </div>
                </div>
            </div>
//120
            <p className={'username backgroundBlack'}>{JSON.stringify((info.classes[0].quests)).replace(/"/g, '')}</p>

            {/*{fetchSkin()}*/}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {/*<p>{JSON.stringify(props.info.data)}</p>*/}
        </div>
    )
}