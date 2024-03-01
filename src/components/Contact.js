import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/Contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_ajkw1ou', 'template_41me6m1', form.current, { publicKey: '_7TxCDyhlV6s48UFu' })
        .then(
            () => {
                alert("Thank you for reaching out. I will get back to you as soon as possible");

                e.target.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDescription">Use the form below to contact me directly.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input className="name" type="text" placeholder="Your Name" name="from_name" required />
                <input className="email" type="email" placeholder="Your Email" name="from_email" required />
                <textarea className="message" rows="5" placeholder="Your Message" name="message" required />
                <ReCAPTCHA className="captcha" sitekey="6LeKvoYpAAAAABJPIdoeYtv-bky42KKMnOADAHIu" aria-required />
                <button className="submitButton" type="submit" value="Send">Submit</button>
            </form>
        </div>
    )
}

export default Contact;