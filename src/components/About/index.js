import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate') 
    
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Well, my name is Kate and I am a full stack junior web developer.  I am looking for a role in an established IT company where I can grow my skills and take on new challenges.</p>
                <p>I have a strong work ethic, a drive to solve problems, and enjoy working in team settings as well as on my own.  I like to challenge myself but I'm not afraid to ask questions or ask for help when I need it.</p>
                <p>What do I like outside of web development?  Well for one thing, dinosaurs.  I'm sure you spotted the t-rex skull up in the upper left hand corner.  But I also love spending time with my husband and two kids.  I love movies, true crime, puzzles, house plants, and LEGO, along with a whole bunch of other stuff.</p>
            </div>

        </div>
    )
}

export default About