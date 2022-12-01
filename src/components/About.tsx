import React, { useContext } from 'react';
import '../App.css';
import photoOne from "../aboutPhotos/akuta1.jpg"
import photoTwo from "../aboutPhotos/akuta2.jpg"
import photoThree from "../aboutPhotos/akuta3.jpg"
import { UserContext } from '../contexts/UserContext';

export default function About() {
    const { lang } : any = useContext(UserContext)
    const aboutText = {
        "en": {"name": "Ryunosuke Akutagawa", "bday": "Born 3/1/1892", "dday": "Died 7/24/1927",
            "works": ["Well known works: ", "'Rashomon'","'The Nose'","'Hell Screen'","'Kappa'", "'Spinning Gears'"],
            "prize": "The Akutagawa Prize", "prizeExp": "The Akutagawa Prize is a Japanese literary award presented biannually. Because of its prestige and the considerable attention the winner receives from the media, it is, along with the Naoki Prize, one of Japan's most sought after literary prizes."},
        "ja": {"name": "龍之介芥川", "bday": "誕生：1892年３月１日", "dday": "死没：1927年７月24日",
            "works": ["代表作：", "『羅生門』","『鼻』","『地獄変』","『河童』", "『歯車』"],
            "prize": "芥川賞", "prizeExp": "芥川龍之介賞（あくたがわりゅうのすけしょう）、通称芥川賞は、純文学の新人に与えられる文学賞である。文藝春秋社内の日本文学振興会によって選考が行われ、賞が授与される"}
    }

    return (

        <div className="About">
            <div className="winnersDisp">
                <h1>{aboutText[lang].name}</h1>
                <div className="aboutPicBox">
                    <img alt="Loading..." src={photoOne} className="aboutPic"/>
                    <img alt="Loading..." src={photoTwo} className="aboutPic"/>
                    <img alt="Loading..." src={photoThree} className="aboutPic"/>
                </div>
                <div className="flex">
                    <p >
                    {aboutText[lang].bday}<br/>
                        {aboutText[lang].dday}<br/>
                    </p>    
                        <ul className="slRight">
                        {aboutText[lang].works[0]}
                            <li>{aboutText[lang].works[1]}</li>
                            <li>{aboutText[lang].works[2]}</li>
                            <li>{aboutText[lang].works[3]}</li>
                            <li>{aboutText[lang].works[4]}</li>
                            <li>{aboutText[lang].works[5]}</li>

                        </ul>
                    
                </div>
                
            </div>
            
            <div>
                <h2>{aboutText[lang].prize}</h2>
                <p>{aboutText[lang].prizeExp}</p>

            </div>
                
        </div>
    )
}