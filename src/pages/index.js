import React from 'react';
import Layout from '../components/Layout';

import softsearchlogo from '../assets/images/softsearchlogo.png';
import eltacologo from '../assets/images/eltacologo.png';
import shortlyLogo from '../assets/images/shortlyLogo.svg';
import marvelLogo from '../assets/images/marvelLogo.png';
/* import crown from '../assets/images/crown.png';
import logo from '../assets/images/logo.png'; */
import aboutpic from '../assets/images/aboutpic.jpg';
import MBResume from '../assets/images/MBResume.pdf';
import MBPSM from '../assets/images/MBPSM.pdf';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-code"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.secondHeading}</p>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a
            href="https://sad-lichterman-9c45d5.netlify.app/"
            target="blank"
            className="image"
          >
            <img src={shortlyLogo} alt="Shortly Logo" />
          </a>
          <div className="content">
            <h2 className="major">Shortly</h2>
            <h5>&lt; Link Shortener Application /&gt;</h5>

            <p>
              The application provides the user with a free platform to shorten
              links and save them for future use. Users can click on the "copy"
              button for easy copy/paste.
            </p>

            <a
              href="https://github.com/mj305/LinkShortener"
              target="blank"
              className="special"
            >
              GitHub Repo
            </a>

            <a
              href="https://sad-lichterman-9c45d5.netlify.app/"
              target="blank"
              className="special"
            >
              Go To App
            </a>
          </div>
        </div>
      </section>
      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a
            href="https://s0ft-search.herokuapp.com/"
            target="blank"
            className="image"
          >
            <img src={softsearchlogo} alt="Soft Search Logo" />
          </a>
          <div className="content">
            <h2 className="major">Soft Search</h2>
            <h5>
              &lt; Job Search Web Application for Developers by Developers /&gt;
            </h5>

            <p>
              The application is a personalized job platform that provides the
              user a career opportunity feed that most approaches the user’s
              skill set. Users can find career opportunities based on location
              by displaying the job postings on a map.
            </p>

            <a
              href="https://github.com/mj305/SoftSearchCopy"
              target="blank"
              className="special"
            >
              GitHub Repo
            </a>

            <a
              href="https://s0ft-search.herokuapp.com/"
              target="blank"
              className="special"
            >
              Go To App
            </a>
          </div>
        </div>
      </section>

      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a
            href="https://marvel-react-api-app.netlify.app/"
            target="blank"
            className="image"
          >
            <img src={marvelLogo} alt="Marvel Logo" />
          </a>
          <div className="content">
            <h2 className="major">Marvel React App</h2>
            <h5>&lt; Marvel Comic Character App /&gt;</h5>

            <p>
              With this simple Marvel Comic React App you can sign up and
              checkout your favorite characters and learn more aboutpic Marve'ls
              heroes and villans.
            </p>

            <a
              href="https://github.com/mj305/Marvel"
              target="blank"
              className="special"
            >
              GitHub Repo
            </a>

            <a
              href="https://marvel-react-api-app.netlify.app/"
              target="blank"
              className="special"
            >
              Go To App
            </a>
          </div>
        </div>
      </section>
      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a
            href="https://eltaco.herokuapp.com/"
            target="blank"
            className="image"
          >
            <img src={eltacologo} alt="El Taco Logo " />
          </a>
          <div className="content">
            <h2 className="major">El Taco</h2>
            <h5>&lt; Taco Recipe Search Web Application /&gt;</h5>

            <p>
              Simple Search of Taco recipes displayed on homepage. Recipe page
              displays image, description, ingredient list, and cooking
              instructions.
            </p>

            <a
              href="https://github.com/mj305/ElTacoCopy"
              target="blank"
              className="special"
            >
              GitHub Repo
            </a>

            <a
              href="https://eltaco.herokuapp.com/"
              target="blank"
              className="special"
            >
              Go To App
            </a>
          </div>
        </div>
      </section>
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <div className="content">
            <h2 className="major">About Me</h2>
            <p>
              <span className="image left">
                <img src={aboutpic} alt="" />
              </span>
              I'm a multicultural leader and process improvement professional
              with over 16 years of experience in management, operations,
              recruitment, project management, and more. I’m a people-person
              with deep emotions and empathy; I’m able to inspire and be at my
              best when I’m collaborating with others.
            </p>

            <p>
              I don’t like to define myself by the work I’ve done. I define
              myself by the work I want to do. Skills can be taught, personality
              is inherent. I prefer to keep learning, continue challenging
              myself, and do interesting things that matter. Fueled by high
              energy levels and boundless enthusiasm, I’m easily inspired and
              willing to follow my fascinations wherever they take me. I'm a
              passionate, expressive, multi-talented spirit with a natural
              ability to entertain and inspire. I’m never satisfied to just come
              up with ideas. Instead I have an almost impulsive need to act on
              them.
            </p>

            <p>
              My abundant energy fuels me in the pursuit of many interests,
              hobbies, areas of study and artistic endeavors. I’m a fast
              learner, able to pick up new skills and juggle different projects
              and roles with relative ease. I like to develop expertise in a
              number of areas over the course of my life and career.
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper">
        <div className="inner">
          <ul className="actions">
            <li>
              <a
                href={MBResume}
                target="blank"
                className="button primary icon fa-download"
              >
                Resume
              </a>
            </li>

            <li>
              <a
                href={MBPSM}
                target="blank"
                className="button icon fa-download"
              >
                PSM Certificate
              </a>
            </li>

            <li>
              <a
                href="https://github.com/mj305"
                target="blank"
                className="button primary icon fa-download"
              >
                GitHub
              </a>
            </li>
          </ul>

          <a
            href="https://www.codewars.com/users/mj305"
            target="blank"
            style={{ border: 'none' }}
          >
            <h3>Code Wars Badge</h3>
            <img
              src="https://www.codewars.com/users/mj305/badges/large"
              alt="achievement badge"
            ></img>
          </a>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
