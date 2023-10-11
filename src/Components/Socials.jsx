import React from 'react'

import {  AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'

import '../styles/Socials.css';

const Socials = () => {
  return (
    <div className='socials'>
      <h2>Encuéntrame en mis redes!</h2>
      <div className="social">
        <div className='git'>
          <AiFillGithub />
          <p>Github</p>
          <a href="https://github.com/fedezelarayan" target='_blank' rel='noreferrer'>Conectemos!</a>
        </div>
        <div className='twit'>
          <AiFillTwitterCircle />
          <p>Twitter</p>
          <a href="https://twitter.com/Fedezela" target='_blank' rel='noreferrer'>Conectemos!</a>
        </div>
        <div className='link'>
          <AiFillLinkedin />
          <p>LinkedIn</p>
          <a href="https://www.linkedin.com/in/federico-zelarayan-med/" target='_blank' rel='noreferrer'>Conectemos!</a>
        </div>
      </div>
    </div>
  )
}

export default Socials