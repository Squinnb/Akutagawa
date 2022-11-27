import React, { useState, useContext, memo } from 'react'
import {AuthContext} from "./contexts/AuthContext"

import '../App.css'
interface AuthInfo {
    username: string;
    password: string;
}

function AuthPage() {
    let [hasAccount, setHasAccount] = useState(false)
 

    return (
        <div className="authContainer ">
            hello user.
        </div>
    )
}

export default AuthPage

















    // let [exaggerate, setExaggerate] = useState(true)
    // onMouseDown={() => {toggleBtn(); setExaggerate(true)}}
    // onMouseUp={() => {setExaggerate(false)}
    // className={(exaggerate ? 'authBtnExaggerate authItem authBtn' : 'authItem authBtn')}