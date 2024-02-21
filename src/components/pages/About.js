import '../../style/about.css';
import {Link} from 'react-router-dom';

function About(){
    return(
        <section className="flex flex-col justify-ecnetr items-center flex-wrap lg:mt-7 md:mt-9 sm:mt-9 sm:mx-5 xs:mx-5 xs:mt-9 font-sans text-[18px]">
            <h3>About the app:</h3>
            <p>the app aim to help beginner chefs find different food recipes (using <a href="http://https://www.edamam.com/terms/api/" className="aboutLinks">Edamam API</a>)
            <br /> and to know most important chefs tools.</p>
            <p>
            Start <Link to={'/search'} className='aboutLinks'>Searching</Link> and check out the <Link to={'/tools'} className='aboutLinks'>Tools</Link>.
            </p>
            <h3>About app developer:</h3>
            <p>App developer is <a href="http://https://github.com/almahamans" className="aboutLinks">Almaha Altamimi</a> a front-end developer and loves fine dining.</p>
        </section>
    )
}

export default About;