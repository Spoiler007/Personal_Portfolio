import React ,{useRef} from 'react'
import './contact.css'
import {ImMail2,ImLinkedin,ImWhatsapp} from 'react-icons/im'
import emailjs from 'emailjs-com'
// import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault(); 
      emailjs.sendForm('service_ipz177z', 'template_hp5ymmk', form.current, 'R-e5SEmQuOnHlroTX')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    
    };
  

  return (
    <section id='contact'>
    <h2> <span> Get In Touch </span>With Me </h2>
    <hr/>
<div className='contact_container'>
<div className='contact_options'>

<article className='contact_option'>
<ImLinkedin/>
<h4>LinkedIN</h4>
<h5>Ujjwal Ghosh</h5>
<a href='https://www.linkedin.com/in/ujjwal-ghosh-07495720a' target='_blank'>Send a Message</a>
</article>

<article className='contact_option'>
<ImWhatsapp/>
<h4>Whatsapp</h4>
<h5>+91 7584945367</h5>
<a href='https://api.whatsapp.com/send?phone=7584945367' target='_blank'>Send a Message</a>
</article>

<article className='contact_option'>
<ImMail2/>
<h4>Email</h4>
<h5>ghoshujjwal196@gmail.com</h5>
<a href='mailto:ghoshujjwal196@gmail.com' target='_blank'>Send a Message</a>
</article>

</div>
<div className='form'>
<form action='https://formspree.io/f/mvojvbwo' method='POST' >
    <input type='text' name='name' placeholder='Your Full Name' required />
    <input type='email' name='email' placeholder='Your Email' required />
    <textarea name='message' rows='7' placeholder='Your Message' required />
    <input type='submit' className='btn btn-primary' value="Send Message" />
    {/* ref={form} onSubmit={sendEmail} */}
</form>
</div>
</div>
    </section>
  )
}

export default Contact;