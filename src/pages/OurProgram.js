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
import OtherAddiction from "./OtherAddiction";





function OurProgram() {
    
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
                  <font color="#ffffff">Our Programs</font>
                </h1>
                <h1>
                  <font color="#ffffff">"Recover At the Best"</font>
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
            <h1 className="title mb-15">
              Have you decided to change your life ?
            </h1>
            <h3 className="title mb-15">
              Do you want to free yourself from addiction and take control of
              your future?
            </h3>
            <p>
              Well, if you want to change , We can help you move forward in your
              recovery journey. Whatever your needs are, we can help you find
              the right combination of counselling and therapeutic activities to
              support your healing process and help lay the foundation for a
              happier and healthier life you deserve.
            </p>
          </div>
          <div className="col-lg-7 mb-30 position-relative">
            <img
              src={require ("./assets/img/home6/icon-square.svg")}
              className="shape-top-right"
            />
            <div className="box-video">
              <img src={require ("./assets/img/bg/alcoholdeaddictiontreatment-lotus-1536x752.png")} />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end Marketing */}
    {/* about-area */}
    <section className="about__area-eight">
      <div className="container">
        <div className="box-yellow-about">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9 order-0 order-lg-2">
              <div className="about__img-wrap-seven">
                <img src={require ("./assets/img/bg/bestrehalotuswellness.jpg")} alt="" />
                <div className="shape">
                  <img
                    src={require ("./assets/img/images/h5_about_shape.png")}
                    alt=""
                    className="ribbonRotate"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__content-seven">
                <div className="section-title mb-25">
                  <span className="sub-title" />
                  <h2 className="title wow">Programs At Lotus</h2>
                </div>
                <p>
                  At Lotus, our treatment programmes for addiction, mental
                  health and wellbeing are based on our core principles of
                  empathy, care and pragmatism. In an exclusive and caring
                  environment, working with one client at a time, we offer the
                  most comprehensive and intensive treatment programmes
                  available. Our goal is to provide you with the therapy and
                  tools needed to ensure long-term recovery.
                </p>
                <div className="about__content-inner-five">
                  <div className="about__list-box">
                    <ul className="list-wrap">
                      <li>
                        <i className="flaticon-arrow-button" />
                        Detox
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Residential
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Extended Care
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Outpatient Services
                      </li>
                    </ul>
                  </div>
                  <div className="about__list-box">
                    <ul className="list-wrap">
                      <li>
                        <i className="flaticon-arrow-button" />
                        Recovery Coaching
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Family Recovery Coaching
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Adolescent Services
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about-area-end */}
    {/* about-area */}
    <section className="about__area-eight">
      <div className="container">
        <div className="box-yellow-about">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9 order-0 order-lg-2">
              <div className="about__content-seven">
                <div className="section-title mb-25">
                  <span className="sub-title" />
                  <h2 className="title wow">Offerings At Lotus</h2>
                  <p>
                    “ At Lotus, we take only limited number of clients at a
                    time, so as not to compromise on quality of care “
                  </p>
                </div>
                <div className="about__content-inner-five">
                  <div className="about__list-box">
                    <ul className="list-wrap">
                      <li>
                        <i className="flaticon-arrow-button" />
                        Medical &amp; Psychiatric Services
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Medication – Assisted Treatment
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Clinical{" "}
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Wellness
                      </li>
                    </ul>
                  </div>
                  <div className="about__list-box">
                    <ul className="list-wrap">
                      <li>
                        <i className="flaticon-arrow-button" />
                        Family Wellness{" "}
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Continuing Care
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Alumni Services
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="about__img-wrap-seven">
                <img
                  src={require ("./assets/img/bg/medicalretreatcentreinpollachi-min-1536x858.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about-area-end */}
    {/* about-area */}
    <section className="about__area-eight">
      <div className="container">
        <div className="box-yellow-about">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9 order-0 order-lg-2">
              <div className="about__img-wrap-seven">
                <img src={require ("./assets/img/bg/wellnesscentrerehablotus.jpg")} alt="" />
                <div className="shape">
                  <img
                    src={require ("./assets/img/images/h5_about_shape.png")}
                    alt=""
                    className="ribbonRotate"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__content-seven">
                <div className="section-title mb-25">
                  <span className="sub-title" />
                  <h2 className="title wow">Holistic Wellness Offerings</h2>
                </div>
                <div className="about__content-inner-five">
                  <div className="about__list-box">
                    <ul className="list-wrap">
                      <li>
                        <i className="flaticon-arrow-button" />
                        Meducation
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Acupuncture
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Adventure Therapy{" "}
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Exercise &amp; Movement
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Cardio &amp; Weight Training
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Yoga
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Expressive Therapy{" "}
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Therapeutic Art
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Recovery through Writing
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Healthy Living
                      </li>
                    </ul>
                  </div>
                  <div className="about__list-box">
                    <ul className="list-wrap">
                      <li>
                        <i className="flaticon-arrow-button" />
                        Sleep Education
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Nutrition Education{" "}
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Personal Empowerment
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Mindfulness{" "}
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Horticultural Therapy
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Meditation{" "}
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Spirituality{" "}
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Hikes &amp; Walks
                      </li>
                      <li>
                        <i className="flaticon-arrow-button" />
                        Ayurvedic Massage Therapy{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about-area-end */}
    {/* about-area video */}
    <section className="about__area-four">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 mb-35">
            <div className="about__content-four">
              <div className="section-title mb-30">
                <span className="sub-title">Residential Programs</span>
                <h2 className="title">
                  4‑Week Residential Treatment Programme
                </h2>
              </div>
              <p>
                We complete a comprehensive medical and physical check,
                including extensive laboratory tests, before starting a range of
                assessments and tests which include a psychiatric assessment,
                functional medicine assessment, nutritional and lifestyle
                assessments.
              </p>
              <p>
                Based on the results of these assessments, our lead doctors
                create a detailed treatment plan in collaboration with the rest
                of the multidisciplinary team that is 100% tailored to your
                individual situation and needs.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-9 col-sm-10 text-end mb-35">
            <div className="about__img-wrap3-home8">
              <img
                src={require ("./assets/img/bg/wellnessretreatmentlotus-1-700x394.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* call-back-area */}
    {/* about-area video */}
    <section className="about__area-four">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 col-sm-10 text-end mb-35">
            <div className="about__img-wrap3-home8">
              <img
                src={require ("./assets/img/bg/wellnesstreatmentlotus-700x393.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 mb-35">
            <div className="about__content-four">
              <div className="section-title mb-30">
                <span className="sub-title">Residential Programs</span>
                <h2 className="title">7‑10 Day Executive Detox Program</h2>
              </div>
              <p>
                This intensive programme is designed for anyone who has been
                consuming high quantities of alcohol or drugs or whose busy
                lifestyle has left them feeling unwell, unhealthy and physically
                depleted. This is also a good option for people who cannot
                devote the time or are not yet motivated to engage in
                longer-term treatment or recovery.
              </p>
              <p>
                Excessive consumption of alcohol and drugs will negatively
                affect your physical and psychological health. Amongst many
                other side effects, they deplete the body and brain of essential
                nutrients, fuel inflammatory processes, contribute to liver and
                blood vessel problems and age the body far quicker than normal.
                Drug and alcohol abuse will influence mental activity,
                alertness, overall brain function and sexual function, which
                will negatively impact our mental health, our relationships and
                our lives.
              </p>
              <p>
                At Lotus, we understand that taking a month or more out of one’s
                life for treatment is unrealistic for many people. We also
                recognise that some individuals battling a substance abuse
                dependency may not be ready to stop using the substance. Instead
                of allowing these realities to stop you seeking help altogether,
                we have created this unique executive detox programme.
              </p>
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
  </main>
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

export default OurProgram;