import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import KateResume1 from '../../assets/images/resume1.png';
import KateResume2 from '../../assets/images/resume2.png';


const Resume = () => {

    const [letterClass, setLetterClass] = useState('text-animate') 
    const aboutArray = ['R', 'e', 's', 'u', 'm', 'e']
    
    useEffect(() => {
        return setLetterClass(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container resume-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={aboutArray}
                        idx={15}
                    />
                </h1>
                <p>To view and download please click <a href="https://docs.google.com/document/d/1chRlXkkhFl-xwNDFsVGinbXnnm9ZQPCs6u15crC1RJ4/edit?usp=sharing" target="_blank" rel="noopner noreferrer">here</a> </p>
                
                
            </div>
            <div className='resume-container'>
                <img
                    className='resume-pic'
                    src={KateResume1}
                    alt="Web Developer Resume"
                />
                <img
                className='resume-pic'
                src={KateResume2}
                alt="Web Developer Resume"
                />
            </div>
            
        </div>        
    )
}

export default Resume