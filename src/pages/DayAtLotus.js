import {Helmet} from "react-helmet";
import React,{useEffect} from "react";
import slider from './assets/img/slider/lotuswellnessslider-luxuryrehabintamilnaduindia.jpg';
import './App.css';
import './assets/css/main.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Nav from "./Nav";
import Foot from "./Footer"
import lotusourstory from './assets/img/bg/lotusourstory.jpg';





function DayAtLotus() {
    
    useEffect(() => {
        AOS.init();
        const text = document.querySelector('.circle');
    if (text) {
      text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
      const elements = document.querySelectorAll('.circle span');
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.transform = `rotate(${i * 17}deg)`;
      }
    } 
      }, [])
  return (  
    <div className="App">
      <Helmet>
    <script src="./assets/js/vendor/jquery-3.6.0.min.js" type="text/jsx" />
    <script src="./assets/js/bootstrap.bundle.min.js" type="text/jsx" />
    <script src="./assets/js/jquery.magnific-popup.min.js" type="text/jsx" />
    <script src="./assets/js/jquery.odometer.min.js" type="text/jsx" />
    <script src="./assets/js/jquery.appear.js" type="text/jsx" />
    <script src="./assets/js/gsap.js" type="text/jsx" />
    <script src="./assets/js/ScrollTrigger.js" type="text/jsx" />
    <script src="./assets/js/SplitText.js" type="text/jsx"/>
    <script src="./assets/js/gsap-animation.js" type="text/jsx"/>
    <script src="./assets/js/jquery.parallaxScroll.min.js"type="text/jsx" />
    <script src="./assets/js/swiper-bundle.js" type="text/jsx"/>
    <script src="./assets/js/ajax-form.js" type="text/jsx"/>
    <script src="./assets/js/wow.min.js" type="text/jsx"/>
    <script src="./assets/js/aos.js" type="text/jsx"/> 
    <script src="./assets/js/main.js" type="text/jsx" />
    </Helmet>
    <main class="fix">	
    <Nav />
    <>
  <main className="fix">
    {/* breadcrumb-area */}
    <section
      className="breadcrumb__area breadcrumb__bg"
      style={{backgroundImage: 'url(' + require('./assets/img/bg/lotus-petals.jpg') + ')'}}
    >
      <div className="container">
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-40">
                <span className="sub-title">Lotus wellness Center</span>
                <h1>
                  <font color="#ffffff">A Day at Lotus</font>
                </h1>
                <h1>
                  <font color="#ffffff">"A Better Life Starts Here"</font>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* breadcrumb-area-end */}
    {/* Marketing Expert */}
    <section className="marketing_expert__area_six">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-30">
            <h1 className="title mb-15">A Day at Lotus</h1>
            <p>
              Setting goals gives your life direction, and boosts your
              motivation and self confidence. Setting goals and working to
              achieving them helps us define what we truly want in life. It
              focuses your acquisition of knowledge, and helps you to organize
              your time and your resources so that you can make the most of your
              life.
            </p>
            <p>
              RISE AND SHINE is a daily schedule at lotus which would help you
              keep track of and manage your progress more easily. You will feel
              more obligated to complete them . You’ll feel satisfied because
              you’re accomplishing something each day . They help build momentum
              and motivation for larger goals .
            </p>
            <p>
              Our Schedule Provides a well-rounded and comprehensive holistic
              approach to Addiction and Mental Health. Your Recovery Begins
              Here....
            </p>
          </div>
          <div className="col-lg-7 mb-30 position-relative">
            <img
              src="assets/img/home6/icon-square.svg"
              className="shape-top-right"
            />
            <div className="box-video">
              <img src="assets/img/banner/Rise-Shine.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end Marketing */}
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-fcdd317 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="fcdd317"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4fc84f1"
          data-id="4fc84f1"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-ded8d20 elementor-widget elementor-widget-spacer"
              data-id="ded8d20"
              data-element_type="widget"
              data-widget_type="spacer.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-spacer">
                  <div className="elementor-spacer-inner">
                    <h4 className="text-center">
                      <i>
                        <q>
                          Early to bed early to rise, Makes a man Healthy,
                          Wealthy, &amp; Wise
                        </q>
                      </i>
                    </h4>
                    <br />
                    <table>
                      <thead>
                        <tr style={{ background: "#00b33c" }}>
                          <th className="text-center">TIME</th>
                          <th className="text-center">LOTUS SCHEDULE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">5:45AM </td>
                          <td className="text-center">WAKE UP TIME </td>
                        </tr>
                        <tr>
                          <td className="text-center">6:30AM TO 7:30AM </td>
                          <td className="text-center">YOGA/ MEDITATION </td>
                        </tr>
                        <tr>
                          <td className="text-center">7:30AM TO 8.00AM </td>
                          <td className="text-center">
                            FRESH UP / DETOX DRINK
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">8:00AM TO 8:30AM </td>
                          <td className="text-center">BREAKFAST</td>
                        </tr>
                        <tr>
                          <td className="text-center">09.30AM TO 10.00AM</td>
                          <td className="text-center">
                            DAILY NEWSPAPER/MAGAZINE READING
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">10.00AM TO 10.30AM</td>
                          <td className="text-center">
                            MEDITATION &amp; PRAYER/ AYURVEDA MASSAGE
                            /NATUROPATHY CONSULTATION
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">10.30AM TO 11.00AM</td>
                          <td className="text-center">GROUP ACTIVITY</td>
                        </tr>
                        <tr>
                          <td className="text-center">11.00AM TO 11.30AM</td>
                          <td className="text-center">TEA BREAK</td>
                        </tr>
                        <tr>
                          <td className="text-center">11.30AM TO 01.00PM</td>
                          <td className="text-center">
                            MUSIC THERAPY/PPT/ART THERAPY/DANCE THERAPY
                            /ZUMBA-AEROBICS /QUIZ/DEBATE/ACCUPUNCTURE{" "}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">01.00PM TO 01.30PM</td>
                          <td className="text-center">LUNCH BREAK</td>
                        </tr>
                        <tr>
                          <td className="text-center">01.30PM TO 02.00PM</td>
                          <td className="text-center">AFTERNOON MEDICATION</td>
                        </tr>
                        <tr>
                          <td className="text-center">02.00PM TO 04.00PM</td>
                          <td className="text-center">
                            ACCUPRESSURE /RECREATIONAL ACTIVITIES/COUNSELLING
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">04.00PM TO 04.30PM</td>
                          <td className="text-center">TEA BREAK/SNACKS TIME</td>
                        </tr>
                        <tr>
                          <td className="text-center">04.30PM TO 06.00PM</td>
                          <td className="text-center">
                            GYM/OUTDOOR GAMES/PEBBLE WALK
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">06.00PM TO 06.30PM</td>
                          <td className="text-center">MOBILE TIME</td>
                        </tr>
                        <tr>
                          <td className="text-center">06.00PM TO 09.00PM</td>
                          <td className="text-center">TV/RELAXATION TIME</td>
                        </tr>
                        <tr>
                          <td className="text-center">06.30PM TO 07.00PM</td>
                          <td className="text-center">NIGHT MEDICATION</td>
                        </tr>
                        <tr>
                          <td className="text-center">07.00PM TO 07.30PM</td>
                          <td className="text-center">DINNER</td>
                        </tr>
                        <tr>
                          <td className="text-center">09.00PM</td>
                          <td className="text-center">CLIENTS RETIRE TO BED</td>
                        </tr>
                        <tr>
                          <td className="text-center">SATURDAY</td>
                          <td className="text-center">
                            PSYCHIATRIC CONSULTATION/KINDERING AND TENDERING
                            YOUR TALENT (SONG/DANCE/ACTING)/BEST DAY OF THE
                            WEEK-TALENT CLUB
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">SUNDAY</td>
                          <td className="text-center">
                            MORNING WALK/ T.V,MOVIE/RECREATIONAL
                            ACTIVITIES/OUTDOOR GAMES
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* call-back-area */}
    <section className="call-back-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="call-back-content">
              <div className="section-title white-title mb-10">
                <h2 className="title">Request A Call Back</h2>
              </div>
              <p>
                Ever find yourself staring at your computer screen a good
                consulting slogan to come to mind? Oftentimes.
              </p>
              <div className="shape">
                <img
                  src="assets/img/images/call_back_shape.png"
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={400}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="call-back-form">
              <form action="#">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input type="text" placeholder="Name *" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input type="email" placeholder="E-mail *" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input type="number" placeholder="Phone *" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <button type="submit" className="btn">
                      Send Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* call-back-area-end */}
  </main>
  <div>.</div>
</>

    </main>
    <Foot />
   </div>

  );
}

export default DayAtLotus;
