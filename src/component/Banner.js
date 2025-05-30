import {Container, Row, Col} from 'react-bootstrap';
import './banner.css';
import { useState, useEffect } from 'react';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/imen.png';
export const Banner = () => {
    const[loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["AI Innovator", "Data Scientist", "Machine Learning Enthusiast"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items">
                    <Col xs={12}md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm `}<span className="wrap"> {text}</span></h1>
                        <p>Turning Data into Smart Decisions 💡<br/>
                        Learning to teach machines how to think 🤖</p>
                        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Let's Connect
                        </button>
                    </Col>
                    <Col xs={12}md={6} xl={5}>
                        <img src={headerImg} alt='headder img' />
                    </Col>
                </Row>
            </Container>
                    
               
        </section>
    )
}