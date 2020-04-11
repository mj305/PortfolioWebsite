import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import softsearchlogo from '../assets/images/softsearchlogo.png';
import eltacologo from '../assets/images/eltacologo.png';


import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-code"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">

          <a href="https://s0ft-search.herokuapp.com/" target="blank" className="image">
            <img src={softsearchlogo} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Soft Search</h2>
            <p>Job Search Web Application for Developers by Developers.</p>
            <a href="https://github.com/mj305/Soft_Search" target="blank" className="special">
              GitHub Repo
            </a>

            <a href="https://s0ft-search.herokuapp.com/" target="blank" className="special">
              Go To App
            </a>

            {/*
            <a href="/softsearch" className="special">
              View Project
            </a>
            */}

          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">

          <a href="https://eltaco.herokuapp.com/" target="blank" className="image">
            <img src={eltacologo} alt="" />
          </a>
          <div className="content">
            <h2 className="major">El Taco</h2>
            <p>Taco Resipe Search Web Application.</p>

            <a href="https://github.com/mj305/El_Taco" target="blank" className="special">
              GitHub Repo
            </a>

            <a href="https://eltaco.herokuapp.com/" target="blank" className="special">
              Go To App
            </a>

            {/*
            <a href="/eltaco" className="special">
              View Project
            </a>
            */}

          </div>
        </div>
      </section>


      {/* 
       // Cards Layout    
      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Vitae phasellus</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>*/}


    </section>
      
  </Layout>
);

export default IndexPage;
