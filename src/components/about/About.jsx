import React from 'react'
import "./about.css"
import AboutImg from "../../assets/about.jpeg"
import CV from "../../assets/vishrut_resume.pdf"
import Info from './Info'

//motion
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../../variants'

const About = () => {
    return (
        <section className="about section" id="about">
            
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}

                className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />
                    <p className="about__description">I'm Vishrut Margam, a passionate web developer dedicated to creating engaging and intuitive web experiences. With a strong foundation in React.js and an ever-growing skill set, I strive to build innovative and efficient solutions. Let's craft something extraordinary together!
                    </p>

                    <a download="" href={CV} className="download-button button--flex">
                        <div className="docs">
                            <svg
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="css-i6dzq1"
                            >
                                <path
                                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                ></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            Download CV
                        </div>
                        <div className="download">
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="css-i6dzq1"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </div>
                    </a>
                </div>
            </motion.div>
        </section>
    )
}

export default About
