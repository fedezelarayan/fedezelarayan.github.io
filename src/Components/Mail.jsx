import React, { useState, useRef, useEffect } from 'react'
import '../styles/Mail.css'
import emailjs from '@emailjs/browser';
const serviceID = process.env.REACT_APP_EMAILJS_SERVICEID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATEID;

const Mail = () => {
  const radio = useRef();
  const [toSend, setToSend] = useState({
    name: '',
    message: '',
    subject: '',
    email: ''
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const valid = {
    email: false,
    rest: false
  }
  const error = useRef()
  const formResMsg = useRef()

  const validation = (email, name, message, subject) => {
    const acceptedEmail = ['gmail.com', 'yahoo.com', 'yahoo.co.in', 'outlook.com', 'protonmail.com', 'aol.com', 'icloud.com', 'me.com', 'mac.com', 'gmx.com', 'hotmail.com']
    if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      acceptedEmail.includes(email.split('@')[1]) ?
        valid.email = true : valid.email = false
    } else {
      valid.email = false;
    }

    if (name !== '' && subject !== '' && message.length > 20) {
      valid.rest = true;
      console.log('here')
    } else {
      valid.rest = false;
    }
  }

  const reset = () => {
    setToSend({
      name: '',
      message: '',
      subject: '',
      email: ''
    })
  }

  const handleClick = () => {
    validation(toSend.email, toSend.name, toSend.message, toSend.subject);
    const condition = Object.values(valid).every((value) => value === true)
    if (!condition) {
      error.current.style.display = 'block'
    } else {
       emailjs.send(serviceID, templateID, toSend, "nS0UEigurJL2P8B2K")
         .then((response) => {
           formResMsg.current.innerText = "Message sent..."
           reset();
         }, (err) => {
           formResMsg.current.innerText = "Failed... " + err.text
       });
       error.current.style.display = 'none' 
    }
  }


  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const arrayOfSub = ['work', 'chat', 'collaboration']
    if (toSend.subject === '') {
      setIsDisabled(false)
    } else {
      if (!(arrayOfSub.includes(toSend.subject))) {
        radio.current.checked = false;
        setIsDisabled(true)
      }
    }
  }, [toSend.subject])

  return (
    <div className='mail' id='mail'>
      <h2>Ponte en contacto</h2>
      <div>
        <div className='entry'>
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" autoComplete='off' value={toSend.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" autoComplete='off' value={toSend.email} onChange={handleChange} />
          </div>
          <div className='options'>
            <div>
              <input
                type="radio"
                name="subject"
                value='work'
                id="work"
                checked={toSend.subject === 'work'}
                onChange={handleChange}
                ref={radio}
                disabled={isDisabled}
              />
              <label htmlFor="work">Trabajo</label>
            </div>
            <div>
              <input
                type="radio"
                name="subject"
                value="collaboration"
                id="collaboration"
                checked={toSend.subject === 'collaboration'}
                onChange={handleChange}
                ref={radio}
                disabled={isDisabled}
              />
              <label htmlFor="collaboration">Colaboración</label>
            </div>
            <div>
              <input
                type="radio"
                name="subject"
                value="chat"
                id='chat'
                checked={toSend.subject === 'chat'}
                onChange={handleChange}
                ref={radio}
                disabled={isDisabled}
              />
              <label htmlFor="chat">Conversemos!</label>
            </div>
            <div>
              <input type="text" name="subject" id='other' placeholder='Otro' autoComplete='off' onChange={handleChange} />
            </div>
          </div>
          <div>
            <label htmlFor="message">Mensaje</label>
            <textarea name="message" cols="30" rows="10" value={toSend.message} onChange={handleChange}></textarea>
          </div>
          <p style={{ color: 'red !important', display: 'none' }} ref={error}>Something is missing</p>
          <p style={{ color: 'red !important' }} ref={formResMsg}></p>
          <div className='btn' onClick={handleClick}>Enviar!</div>
        </div>
      </div>
    </div>
  )
}

export default Mail
