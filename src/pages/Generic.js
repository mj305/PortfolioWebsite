import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import aboutpic from '../assets/images/aboutpic.jpg';
import profilepic from '../assets/images/profilepic.jpg';
import MariaBecklesWebDevelopmentResume from '../assets/images/MariaBecklesWebDevelopmentResume.pdf'


const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>About Me</h2>
          <p>&lt; THIS IS THE ABOUT ME / &gt;</p>
          
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">PROFESSIONAL VALUE</h3>

						<p>
              <span className="image left">
                <img src={aboutpic} alt="" />
                </span>
                
                Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. 
                Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. 
                Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, 
                id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus 
                sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. 
                Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada 
                fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. 
                Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non 
                velit accumsan cursus. Etiam ut gravida sapien. Morbi mattis mi consectetur tortor elementum, varius 
                pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum 
                tempor.
            </p>

						<p>
              <span className="image right">
                <img src={profilepic} alt="" />
                </span>
                Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. 
                Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, 
                eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. 
                Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna, sagittis at facilisis vitae, 
                pellentesque at etiam.Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. 
                Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, 
                eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. 
                Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna, sagittis at facilisis vitae, 
                pellentesque at etiam.
            </p>

            <ul className="actions">
							<li><a href={MariaBecklesWebDevelopmentResume} target="blank" className="button primary icon fa-download">Resume</a></li>
              <li><a href="https://github.com/mj305" target="blank" className="button icon fa-download">GitHub</a></li>

						</ul>
					
            


         
         {/*

         //CARDS LAYOUT 

          <h3 className="major">Vitae phasellus</h3>

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
          </section>
          */}


        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
