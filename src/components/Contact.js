import '../styles/Contact.scss';

import cvEnglish from '../assets/CV-english.pdf';
import cvSpanish from '../assets/CV-spanish.pdf';

const Contact = () => {
    return (
        <main className="main">
            <section className="contact">
                <h3 className="contact__text">You can contact with me in the email: yaizafelices@gmail</h3>
                <h3 className="contact__text">Also you can contact me in one of my social media</h3>
                <nav>
                    <ul className="contact__list">
                        <li className="contact__list-icon" >
                            <a className="contact__list-icon-a"  href="https://www.linkedin.com/in/yaiza-soria-felices/"
                            target="_blank" rel="noreferrer"
                            >
                                <i className="fa-brands fa-linkedin-in icon "></i>
                            </a>
                        </li>
                        <li className="contact__list-icon">
                            <a className="contact__list-icon-a" href="mailto:yaizafelices@gmail.com" target="_blank" rel="noreferrer">
                                <i className="fa-solid fa-envelope icon"></i>
                            </a>
                        </li>
                        <li className="contact__list-icon">
                            <a className="contact__list-icon-a" href="tel:+34628298845" target="_blank" rel="noreferrer">
                                <i className="fa-solid fa-phone icon"></i>
                            </a>
                        </li>
                        <li className="contact__list-icon">
                            <a className="contact__list-icon-a"  href="https://github.com/yaizafelices" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-github icon"></i>
                            </a>
                        </li>
                        <li className="contact__list-icon">
                            <a className="contact__list-icon-a" href="https://twitter.com/yaizafelices" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-twitter icon"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                <h3 className="contact__text">Here you can download my CV in english or in spanish</h3>
                <div className="contact__cv">
                    <a className="contact__cv-item" href={cvEnglish} target="_blank" rel="noopener noreferrer" download="CV-YaizaSoriaFelicesEnglish.pdf" title="Download CV">CV English</a>
                    <a className="contact__cv-item" href={cvSpanish} target="_blank" rel="noopener noreferrer" download="CV-YaizaSoriaFelices.pdf" title="Descargar CV">CV Spanish</a>
                </div>
            </section>
        </main>
    );
}
export default Contact;