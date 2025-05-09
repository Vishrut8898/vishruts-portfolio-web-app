import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className='footer__title'>Vishrut</h1>
                {/* <img src={Logo} className="footer__title" alt="Vishrut" /> */}

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="#" className="footer__social-link" target='_blank'
                    >
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a
                        href="https://github.com/Vishrut8898" className="footer__social-link" target='_blank'
                    >
                        <i className="bx bxl-github"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/vishrutmargam/" className="footer__social-link" target='_blank'
                    >
                        <i className='bx bxl-linkedin-square' ></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Vishrut Margam. All rigths reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer
