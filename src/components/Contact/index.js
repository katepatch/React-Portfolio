import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const contactArray =['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']

    useEffect(() => {
        return setLetterClass(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={contactArray}
                        idx={15} 
                        />
                    </h1>
                </div>

            </div>
        </>
    )
}


export default Contact