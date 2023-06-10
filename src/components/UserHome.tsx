import {useState, useContext, useEffect} from 'react'
import { UserContext } from '../contexts/UserContext'


export default function UserHome() {
    const { user, setUserInfo, lang } : any = useContext(UserContext)

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{textAlign: "left"}}>

            Hello {user.name}... 👋 🚧👷<br />
            User page currently under construction, <br />
            please check back soon.
            </div>
        </div>
    )
}
