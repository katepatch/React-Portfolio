import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'


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
                
            </div>

            
        </div>        
    )
}

export default Resume