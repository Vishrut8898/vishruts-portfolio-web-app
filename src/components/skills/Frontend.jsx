import React from 'react'

//motion
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../../variants'

const Frontend = () => {
    return (
        <motion.div 
        variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.7}}
        className="skills__content">
            
            <h3 className="skills__title">Frontend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Advance</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Javascript</h3>
                            <span className="skills__level">Advance</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">ReactJS</h3>
                            <span className="skills__level">Advance</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Sass</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">TailwindCSS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Jquery</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Typescript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Frontend
