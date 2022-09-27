import React from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useEffect, useState } from "react";

const Portfolio = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate') 
    const portArray = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']

    useEffect(() => {
        return setLetterClass(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    
    return (
    <div className='container portfolio-page'>
        <h1 className="page-title">
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={portArray}
                idx={15}
            />    
        </h1>
        {/* <div>{renderPortfolio()}</div> */}
    </div>
    );  
}

export default Portfolio;