import React, { useState, useContext, memo } from 'react'


import '../App.css'
interface AuthInfo {
    username: string;
    password: string;
}

function AuthPage() {
    let [hasAccount, setHasAccount] = useState(false)
 

    return (
        <div className="authContainer ">
            Please authenticate yourself...
        </div>
    )
}

export default AuthPage

