import React from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import MovieClub from '../../assets/images/projects/MovieClub.png';

const Portfolio = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate') 
    const portArray = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']

    useEffect(() => {
        return setLetterClass(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    const projects = [
        {
            id: 0,
            cover: MovieClub,
            title: 'Movie Club',
            description: 'MySQL, Handlebars, Sequelize',
            github: 'https://github.com/Firm-Tofu10/MovieClub',
            url: 'https://movieclub3.herokuapp.com/login'
        }
    ]

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    projects.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <a href={port.github} target='_blank' rel="noreferrer" className="btn">
                                        <FontAwesomeIcon icon={faGithub} color="#d62828" />
                                    </a>
                                    <a href={port.url} target='_blank' rel="noreferrer" className="btn">
                                        <FontAwesomeIcon icon={faDesktop} color="#d62828" />
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
    
    return (
    <div className='container portfolio-page'>
        <h1 className="page-title">
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={portArray}
                idx={15}
            />    
        </h1>
        <div>{renderPortfolio(projects.portfolio)}</div>
    </div>
    );  
}

export default Portfolio;