import '../styles/AboutMe.scss';
import photoYaiza from '../images/photo-yaiza.jpg';

const AboutMe = () => {
    return (
        <main className="main">
            <section className="aboutme">
                <figure className='aboutme__photo'>
                    <img className='aboutme__photo-yaiza' src={photoYaiza} alt="Yaiza Soria Felices" title='Photo Yaiza'></img>
                </figure>
                <article className='aboutme__text'>
                    <p className='aboutme__text-item'>My name is Yaiza</p>
                    <p className='aboutme__text-item'>I studied Food Engineering, but after working as a quality manager in a vegetable company in Mercamadrid, I realised that it was not my passion and I start watching videos of Javascript and it´s was amazing.</p>
                    <p className='aboutme__text-item'>So in may of this year I start the Bootcampo of web Developer in Adalab, where I learned:</p>
                    <ul className="aboutme__text-list">
                        <li>HTML5, CSS3, Flexbox, CSS Grid, SASS, Bootstrap.</li>
                        <li>JavaScript (ES6) and web services (APIs) from third
                            parties.
                        </li>
                        <li>Version control with Git</li>
                        <li>Create SPAs with React.</li>
                        <li>Basics knowledge APIs and back development:
                            applications with Node JS, Express and SQL.
                        </li>
                        <li>Use of Slack, Github, VS Code, Gulp, Terminal, Linter,
                            Zeplin
                        </li>
                    </ul>
                    <p className='aboutme__text-item'>I am a person with a great capacity for adaptation, autonomy and self-taught, capable of facing challenging situations and overcoming challenges.</p>
                    <p className='aboutme__text-item'>Wishing to have my first opportunity as a junior web programmer, and to be able to continue learning and putting into practice all my knowledge.</p>
                </article>
            </section>
        </main>
    );
}
export default AboutMe;