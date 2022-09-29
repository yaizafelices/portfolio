import '../styles/Contact.scss';

const Contact = () => {
    return (
        <main className="main">
            <section className="contact">
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
            </section>
        </main>
    );
}
export default Contact;