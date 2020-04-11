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
          <h3>&lt; Maria Beckles/ &gt;</h3>
          <p>&lt; Certified Scrum Master and Product Owner / &gt;</p>
          <p>&lt; Aspiring Web Developer / &gt;</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">

						<p>
              <span className="image left">
                <img src={aboutpic} alt="Maria Beckles"/>
                </span>
                
                I don’t like to define myself by the work I’ve done. 
                I define myself by the work I want to do. Skills can 
                be taught, personality is inherent. I prefer to keep 
                learning, continue challenging myself, and do 
                interesting things that matter.
                </p>

            <p>
                Fueled by high energy levels and boundless enthusiasm, 
                I’m easily inspired and more then willing to follow my 
                fascinations wherever they take me. I’m passionate, 
                expressive, multi-talented spirit with a natural ability 
                to entertain and inspire. I’m never satisfied to just come 
                up with ideas. Instead I have an almost impulsive need 
                to act on them.
            </p>
            
            <p>
                My abundant energy fuels me in the pursuit of many interests, 
                hobbies, areas of study and artistic endeavors. I’m a fast 
                learner, able to pick up new skills and juggle different 
                projects and roles with relative ease. I like to develop 
                expertise in a number of areas over the course of my life 
                and career.
            </p>

            <p>
                I'm also a multi-cultural leader and process improvement with 
                over 16 years of experiences management, operations, recruiter, 
                project manager, aspiring developer, music enthusiast, 
                traveler, and more I’m a people-person with 
                deep emotions and empathy; I’m able to inspire and be at 
                my best when I’m colaborating  with others. 
            </p>



            <ul className="actions">
							<li>
                <a href={MariaBecklesWebDevelopmentResume} target="blank" className="button primary icon fa-download">
                  Resume
                  </a>
              </li>

              <li>
                <a href="https://github.com/mj305" target="blank" className="button icon fa-download">
                  GitHub
                </a>
              </li>
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
