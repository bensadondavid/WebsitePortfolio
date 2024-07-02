import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ki28qr2', 'template_xg1esdj', form.current, {
        publicKey: '_USelSI55RyJtjg88',
      })
      .then(
        () => {
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

          <input type="text" name="user_name" placeholder='Your name' />

          <input type="email" name="user_email" placeholder='Your E-mail' />

          <textarea name="message" placeholder='Your message' />

          <button type="submit" value="Send">Send</button>

        </form>
    </div>
    </>
  );
};

export default ContactUs