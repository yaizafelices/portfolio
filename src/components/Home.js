import '../styles/Home.scss';
import html5 from '../images/html5.png';
import css3 from '../images/css.png';
import sass from '../images/sass.png';
import javascript from '../images/js.png';
import react from '../images/react.png';
import node from '../images/nodejs.jpg';
import slack from '../images/slack.png';
import zepplin from '../images/zepplin.png';
import github from '../images/github.jpg';
import workInProgress from '../images/work-in-progress.png';


const Home = () => {
    return (
        <main className="main">
            <section className="home">
                <h1 className="home__hi">Hi there</h1>
                <h2 className="home__name">I´m Yaiza a junior Front-End Developer</h2>
                <h3 className="home__portfolio">And here you can see all about me, my personal projects and my contact</h3>
                <figure>
                <img src={html5} className="home__icon" alt="Icon of HTML5" title='Icon of HTML5'></img>
                <img src={css3} className="home__icon" alt="Icon of CSS3" title='Icon of CSS3'></img>
                <img src={sass} className="home__icon" alt="Icon of Sass" title='Icon of Sass'></img>
                <img src={javascript} className="home__icon" alt="Icon of JavaScript" title='Icon of JavaScript'></img>
                <img src={react} className="home__icon" alt="Icon of React Js" title='Icon of React Js'></img>
                <img src={node} className="home__icon" alt="Icon of Node Js" title='Icon of Node Js'></img>
                <img src={slack} className="home__icon" alt="Icon of Slack" title='Icon of Slack'></img>
                <img src={zepplin} className="home__icon" alt="Icon of Zepplin" title='Icon of Zepplin'></img>
                <img src={github} className="home__icon" alt="Icon of Github" title='Icon of Github'></img>
                </figure>
                <figure className='progress'>
              <img className='' src={workInProgress} alt="Work in progres" title='Work in progress'></img>
            </figure>
            </section>
        </main>
    );
}
export default Home;