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





function GamblingAddiction() {
    
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
  <>
  {/* main-area */}
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
                  <font color="#ffffff">Centre for Gambling Addiction</font>
                </h1>
                <br />
                <h1>
                  <font color="#ffffff">"Conquer From Within"</font>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* breadcrumb-area-end */}
    <section className="services__details-area">
      <div className="container">
        <div className="services__details-wrap">
          <div className="row">
            <div className="col-70 order-0 order-lg-2">
              <div className="services__details-thumb">
                <img
                  src={require ("./assets/img/bg/gamblingdeaddictiontreatmentincoimbatore-lotusrehab.jpg")}
                  alt=""
                />
              </div>
              <div className="services__details-content">
                <h4 className="">Treatment Centre Gambling Addiction</h4>
                <p>
                  For many people, gambling is harmless fun, but it can become a
                  problem. This type of compulsive behavior is often called
                  “problem gambling.”
                </p>
                <p>
                  A gambling addiction is a progressive addiction that can have
                  many negative psychological, physical, and social
                  repercussions. It is classed as an impulse-control disorder.
                </p>
                <p>
                  Problem gambling is harmful to psychological and physical
                  health. People who live with this addiction may experience
                  depression, migraine, distress, intestinal disorders, and
                  other anxiety-related problems.
                </p>
                <p>
                  As with other addictions, the consequences of gambling can
                  lead to feelings of despondency and helplessness. In some
                  cases, this can lead to attempts at suicide.
                </p>
                <h4 className="">Treatment For Gambling Addiction</h4>
                <p>
                  At Lotus Wellness, Tamilnadu we customize the treatment plan
                  as per each individual’s requirement. Gambling Addiction
                  Treatment offered by us is Top rated in India. Our Approach is
                  holistic and evidence based. We use a combination of physical,
                  mental, emotional and spiritual processes along with various
                  therapies to bring an individual out of a habit. We have a
                  Residential 30 Days Gambling De Addiction program that would
                  help one break free from his or her Addiction and live a life
                  full of Bliss.
                </p>
              </div>
              <div className="services__details-inner">
                <div className="row gutter-24 align-items-center">
                  <div className="col-56">
                    <div className="services__details-inner-content">
                      <h4 className="">The Lotus Difference </h4>
                      <p>
                        • 60-80 hours of one-on-one therapy per month.
                        <br />
                        • You will have your own team of therapists and doctors.
                        <br />
                        • Cutting-edge treatment philosophy.
                        <br />
                        • Special variant of 12 Step Program.
                        <br />
                        • We don’t believe addiction is a disease.
                        <br />
                        • We don’t use degrading labels like addict or alcoholic
                        to define you.
                        <br />
                        • We heal the underlying conditions that cause
                        addiction.
                        <br />
                        • Top-level detox program — 24/7 nursing with medical
                        assistance.
                        <br />
                        • Recovery Begins Here.
                        <br />
                        • Highly Confidential Rehab In India.
                        <br />
                      </p>
                      <p>
                        For Most clients Lotus is one of the best experiences of
                        their life and we feel confident you will feel the same.
                        The healing that takes place here is hard to put into
                        words. Once you arrive, we know you will see what makes
                        this such a special place. We honor the opportunity to
                        care for you.
                      </p>
                    </div>
                  </div>
                  <div className="col-44">
                    <div className="services__details-inner-img">
                      <img
                        src={require ("./assets/img/bg/gamblingaddiction-lotuswellness.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-30">
              <aside className="services__sidebar">
                <div className="sidebar__widget sidebar__widget-two">
                  <div className="sidebar__cat-list-two">
                    <ul className="list-wrap">
                      <li>
                        <a href="services-details">
                          Detoxification Treatment{" "}
                          <i className="flaticon-arrow-button" />
                        </a>
                      </li>
                      <li>
                        <a href="services-details">
                          Alcohol Addiction{" "}
                          <i className="flaticon-arrow-button" />
                        </a>
                      </li>
                      <li>
                        <a href="services-details">
                          Drug Addiction
                          <i className="flaticon-arrow-button" />
                        </a>
                      </li>
                      <li>
                        <a href="services-details">
                          {" "}
                          Tobacco Addiction{" "}
                          <i className="flaticon-arrow-button" />
                        </a>
                      </li>
                      <li>
                        <a href="services-details">
                          Gambling Addiction{" "}
                          <i className="flaticon-arrow-button" />
                        </a>
                      </li>
                      <li>
                        <a href="services-details">
                          Other Addictions
                          <i className="flaticon-arrow-button" />
                        </a>
                      </li>
                      <li>
                        <a href="services-details">
                          Prevention Program
                          <i className="flaticon-arrow-button" />
                        </a>
                      </li>
                      <li>
                        <a href="services-details">
                          Lotus Wellness Centre
                          <i className="flaticon-arrow-button" />
                        </a>
                      </li>
                      <li>
                        <a href="services-details">
                          {" "}
                          Lotus Petals <i className="flaticon-arrow-button" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar__widget sidebar__widget-two">
                  <div className="sidebar__contact">
                    <h2 className="title">
                      If You Need Any Help Contact With Us
                    </h2>
                    <a href="tel:7339062555" className="btn">
                      <i className="flaticon-phone-call" />
                      (+91)73390 62555
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* services-details-area-end */}
  </main>
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
                src={require ("./assets/img/images/call_back_shape.png")}
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
  <div>.</div>
  {/* main-area-end */}
</>


  </main>
  <div>.</div>
</>

    </main>
    <Foot />
   </div>

  );
}

export default GamblingAddiction;
