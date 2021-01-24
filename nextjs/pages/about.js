import Nav from './nav';
import Header from "./Header";

const About = props => {
    return (
        <div>
            <Header>
                <Nav />
            </Header>
            <h1>About Next.js</h1>
            <p>Next.js - Server-side rendering for React.</p>
        </div>
    )
}

export default About;