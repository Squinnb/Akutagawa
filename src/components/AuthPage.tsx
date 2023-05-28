import { useState, useContext,  useEffect } from 'react'
import { router } from './AkutagawaApp';


import '../App.css'
import { UserContext } from '../contexts/UserContext';
interface AuthInfo {
    username: string;
    password: string;
}

function AuthPage() {
    const setUserInfo : (s: string) => void = useContext(UserContext).setUserInfo
    const {lang}: any = useContext(UserContext)

    let [hasAccount, setHasAccount] = useState(false)
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [passwordConfirmation, setPasswordConfirmation] = useState("")


    useEffect(()=>{
        if(localStorage.getItem("username")) {
            setHasAccount(true)
        }
        return () => {
            console.log("auth unmount...")
        }
    }, [])




    const signIn = (e:any) => {
        e.preventDefault()
        const un =localStorage.getItem("username")
        const pass = localStorage.getItem("password")
        if(un === username && password === pass) {
            setUserInfo(un)
            router.navigate("/Akutagawa/")
        }

    }
    const signUp = (e:any) => {
        e.preventDefault()
        if(password !== passwordConfirmation) return;
        if(username.length < 2 || password.length < 2) return;
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
        setPassword("")
        setHasAccount(true)
    }

    const handleChange = (e: any) => {
        if(e.target.name === "username"){
            setUsername(e.target.value)
        }
        else if(e.target.name === "password") {
            setPassword(e.target.value)
        }
        else if(e.target.name === "passwordConfirmation") {
            setPasswordConfirmation(e.target.value)
        }
    }
    const toggleBtn = () => {
        setHasAccount((p) => {return !p})
    }

    const authText = {
        "en": {"un": "Username", "pass": "Password", "passConf": "Confirm Password","si":"Sign In", "createAcc": "Create Account", "hasAcc": "Already have an account?", "noAcc": "Need to create an account?"},
        "ja": {"un": "ユーザーネーム", "pass": "パスワード", "passConf": "パスワード確認","si":"サインイン", "createAcc": "アカウント作成", "hasAcc": "アカウントお持ちの方", "noAcc": "アカウント無しの方へ"}
    }


    return (
        <div className="authContainer ">
            <form className="authForm" >
                <input className="authItem" type="text" name="username" value={username} onChange={(e) => {handleChange(e)}} placeholder={authText[lang].un} />
                <input className="authItem" type="password" name="password" value={password} onChange={(e) => {handleChange(e)}} placeholder={authText[lang].pass} />
                { !hasAccount &&
                    <input className="authItem" type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={(e) => {handleChange(e)}} placeholder={authText[lang].passConf} />
                }
                    
                
                <button className='authItem authBtn'
                        onClick={hasAccount ? (e) => {signIn(e)} : (e) => {signUp(e)}}
                       
                >{hasAccount ? authText[lang].si : authText[lang].createAcc}</button>
                <button 
                        className="toggleSignInUp"
                        type="button" 
                        onClick={toggleBtn}>{hasAccount ? authText[lang].noAcc : authText[lang].hasAcc}
                </button>
            </form>
        </div>
    )
}

export default AuthPage

