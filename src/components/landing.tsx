import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import { LoremIpsum } from 'lorem-ipsum';
import { useState } from 'react';

import Image from "next/image";
import PImg from "../../public/PImage.png";
import Arrow from "../../public/Arrow.png";

import QUOTES from '../components/quotes.json';
import Like from '../../public/Like.png';
import Flower from '../../public/Flower.jpg';

import styles from '../components/landing.module.css';

function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}

function LandingPage() {

  const lorem = new LoremIpsum();
  const [text, setText] = useState('');

  function generateText() {
    const newText = QUOTES[getRandomInt(QUOTES.length)].quotes;
    setText(newText);
  }

  return (
    <div>
      <section className="py-5 bg-light">
        <section className="py-5 bg-light">
          <Container>
            <Row>
              <Col md={6}>
                <h1 style={{ marginBottom: "2em" }}>Life can be tough...</h1>
                <p className="lead">
                  ...whether it's dealing with stress, anxiety, depression, or
                  any other mental health challenges, it can often feel like
                  we're carrying the weight of the world on our shoulders.
                  <br />
                  <br />
                  We know that seeking help can be intimidating, but it's
                  important to remember that you're not alone. There are many
                  resources available to support you on your mental health
                  journey.
                </p>
              </Col>
              <Col md={6}>
                <Image src={PImg} alt="Principal Image" className="img-fluid" />
              </Col>
            </Row>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <p className="text-center">Scroll Down</p>
              <Button variant="" as={Link} to="section2" smooth={true} duration={250}>
                <Image src={Arrow} alt="Arrow" />
              </Button>
            </div>
          </Container>
        </section>
      </section>
      <section id="section2">
        <Row>
          <Col className="py-5 bg-white"><Image src={Like} alt="Like" className="img-fluid" /></Col>
          <Col className="py-5 bg-white">
            <br/><br/>
            <div className="text-center">
              <Button onClick={generateText} className={styles.qbut}>Generate a quote</Button>
            </div>
            <p className={styles.qtext}>{text}</p>
          </Col>
        </Row>
      </section>
    </div>
  );
}
export default LandingPage;
