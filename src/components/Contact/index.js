import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const contactArray =['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']
    const form = useRef()

    useEffect(() => {
        return setLetterClass(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_lpps49i', 'template_086uepo', form.current, '5fEMi4NL5hYTVnWMv')
        .then((result) => {
            console.log(result.text);
            window.location.reload(false)
        }, (error) => {
            console.log(error.text);
        });
    };

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
                    
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input placeholder='Name' type="text" name='name' required></input>
                            </li>
                            <li className='half'>
                                <input placeholder='Email' type="email" name='email' required></input>
                            </li> 
                            <li className='half'>
                                <input placeholder='Subject' type="text" name='subject' required></input>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <input type="submit" className='flat-button' value="SEND"></input>
                        </ul>
                        </form>
                    </div>
                </div>

                <div className="info-map">
                    Kate Patch
                    <br />
                    NSL, UT
                    <br />
                    <span>kate.patch@gmail.com</span>
                    </div>
                    <div className="map-wrap">
                    <MapContainer center={[40.8486, -111.9069]} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[40.8486, -111.9069]}>
                            <Popup>
                            Hi There!
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

            </div>
        </>
    )
}


export default Contact