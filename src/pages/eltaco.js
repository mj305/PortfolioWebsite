import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>El Taco</h2>
          <p>&lt; Taco Recipe Finder Web Application / &gt;</p>
        </div>
        
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">EL TACO</h3>
          <p>PROBLEM</p>

          <p>THIS IS THE SOLUTION</p>


         
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
