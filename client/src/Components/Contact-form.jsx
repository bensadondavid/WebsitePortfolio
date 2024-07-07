import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const HandleName = (e)=>{
      setName(e.target.value)
  }

  const HandleEmail = (e)=>{
    setEmail(e.target.value)
}

const HandleMessage = (e)=>{
  setMessage(e.target.value)
}

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ki28qr2', 'template_xg1esdj', form.current, '_USelSI55RyJtjg88')
      .then(
        () => {
          setName('')
          setEmail('')
          setMessage('')
          console.log('SUCCESS!');
          alert('Message successfully sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <div className='form-container'>

      <h2>Send me a message !</h2>

        <form className='contactform' ref={form} onSubmit={sendEmail}>

          <input type="text" name="user_name" placeholder='Your name' value={name} onChange={HandleName} required/>

          <input type="email" name="user_email" placeholder='Your E-mail' value={email} onChange={HandleEmail} required/>

          <textarea name="message" placeholder='Your message' value={message} onChange={HandleMessage} required/>

          <button type="submit" value="Send">Send</button>

        </form>
    </div>
    </>
  );
};

export default ContactUs