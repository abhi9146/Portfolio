import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contact component__space' id='Contact'>
            <div className='row'>
                <div className='col__2'>
                    <div className='contact__box'>
                        <div className='contact__meta'>
                            <h1 className='hire__text'>Hire Me</h1>
                            <p className="hire__text white">I am available for work. </p>
                            <p className="hire__text white">  Email <strong>abhisunkarwad2002@gmail.com</strong></p>
                            <div className="input__box">
                                <input type="text" className="contact name" placeholder="Your name *" />
                                <input type="text" className="contact email" placeholder="Your Email *" />
                                <input type="text" className="contact subject" placeholder="Write a Subject" />
                                <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                                <button className="btn contact pointer" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contact
