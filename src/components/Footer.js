import React from 'react';
import config from '../../config';

//Contact Form 
export default function Footer() {
  return (

    <section id="footer">

      <div className="inner">
        <h2 className="major">Get in touch</h2>

        

        <form action="https://getform.io/f/8abb7a3a-0396-408a-8f02-0ca038f245f1" method="POST">

          <div className="fields">

            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>

          </div>

          <div className="actions">
              <button type="submit">Send Message</button>
          </div>
        </form>

        


        <ul className="contact">
          <li className="fa-home">{config.address}</li>

          <li className="fa-phone">{config.phone}</li>

          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url} target='blank'>{url}</a>
              </li>
            );
          })}
        </ul>
        
        <ul className="copyright">
          <li>&copy; Maria Beckles, 2020.</li>
        </ul>
        
      </div>
    </section>
  );
}



