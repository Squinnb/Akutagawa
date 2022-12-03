import {useState, useContext, useEffect} from 'react'
import { UserContext } from '../contexts/UserContext'


export default function UserHome() {
    const { user, setUserInfo, lang } : any = useContext(UserContext)

    return (
        <div>
            hello {user.name}... <br />
            under construction
        </div>
    )
}
