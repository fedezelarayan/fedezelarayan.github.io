import React, { useState, useRef } from 'react'

import '../styles/Home.css'

import TypeWriterEffect from 'react-typewriter-effect';
import { animateScroll } from 'react-scroll';
import { saveAs } from "file-saver";
import { Link } from 'react-scroll';

const Home = () => {
  const [number, setNumber] = useState(0);
  const arrayOfWords = ['Toca de nuevo', 'Hola!', 'Me encontraste', 'Agregué esto...', 'por que se ve genial', `asi que, aqui te va un dato`, 'sabías que...', 'pasamos mas tiempo leyendo código...', '...que escribiéndolo?',]
  const textContent = useRef();
  const handleDownload = () => {
    saveAs(
      "https://drive.google.com/file/d/1TLn0n9hFZnXPSwgtciyZ4u95PQ47z7Fz/view?usp=drive_link",
      "CV Federico Zelarayan - Fullstack.pdf"
    )
  }

  const handleChange = () => {
    textContent.current.style.display = 'inline-block';
    textContent.current.innerText = arrayOfWords[number]
    if ((arrayOfWords.length - 1) !== number) {
      setNumber(number + 1)
    }
    if ((arrayOfWords.length - 1) === number) {
      // something will be here soon
      setTimeout(() => {
        textContent.current.style.display = 'none'
        animateScroll.scrollTo(350)
        setNumber(1)
      }, 1000);
    }
  }


  return (
    <div className='home' id='home'>
      <div className="home-text">
        <h1>
          <span className='gradientText'>
            Hola, soy Federico!
          </span>
          <span>
            <span onClick={handleChange}>
              👋🏾
            </span>
            <span ref={textContent} style={{ display: 'none' }}>
              Tap again
            </span>
          </span>
        </h1>
        <TypeWriterEffect
          cursorColor="#1da1f2"
          multiText={[
            'Desarrollador Web Fullstack',
            "No olvides scrollear!"
          ]}
          multiTextLoop={true}
          multiTextDelay={1500}
          typeSpeed={35}
        />
        <div className="btns">
          <Link className='btn1' activeClass="active" to="mail" spy={true} smooth={true} offset={0} duration={500}>
            Contrátame
          </Link>

          <div onClick={handleDownload} className='btn2'>Curriculum Vitae</div>
        </div>
      </div>

    </div >
  )
}

export default Home;
