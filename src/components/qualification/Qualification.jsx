import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id='qualifications'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1 ?
                            "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                        Experience
                    </div>
                    <div
                        className={
                            toggleState === 2 ?
                                "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active" : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Development Engineer-1</h3>
                                <span className="qualification__subtitle">Programming-FYND</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    June 2024 - Jan 2025
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">AXIONED</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    Oct 2021 - April 2024
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={
                        toggleState === 2
                            ? "qualification__content qualification__content-active" : "qualification__content"
                    }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">MCA</h3>
                                <span className="qualification__subtitle">Lovely Professional University (Online)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - Ongoing
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">B.Sc Computer Science</h3>
                                <span className="qualification__subtitle">Mumbai University<br />
                                    CGPA - 7.50
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Web Developer</h3>
                                <span className="qualification__subtitle">Stay Vibez</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    Nov 2020 - Jan 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification
