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





function OurStory() {
    
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
    <><Nav />
  <main className="fix">
    {/* breadcrumb-area */}
    <section
      className="breadcrumb__area breadcrumb__bg"
      style={{backgroundImage: 'url(' + require('./assets/img/bg/lotusourstory.jpg') + ')'}}
    >
      <div className="container" >
      
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-40">
                <span className="sub-title">Lotus wellness Center</span>
                <h1>
                  <font color="#ffffff">Our Story</font>
                </h1>
                <h1>
                  <font color="#ffffff">"Inspired By Life"</font>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb__shape">
        <img src="./assets/img/images/breadcrumb_shape01.png" alt="" />
        <img
          src="./assets/img/images/breadcrumb_shape02.png"
          alt=""
          className="rightToLeft"
        />
        <img src="./assets/img/images/breadcrumb_shape03.png" alt="" />
        <img src="./assets/img/images/breadcrumb_shape04.png" alt="" />
        <img
          src="./assets/img/images/breadcrumb_shape05.png"
          alt=""
          className="alltuchtopdown"
        />
      </div>
    </section>
    {/* breadcrumb-area-end */}
    {/* about-area */}
    <section className="about__area-four">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="about__img-wrap-four">
              <br />
              <br />
              <br />
              <img
                src={require ("./assets/img/images/lotusrehabbestrehabilitationcentreintamilnadu.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-four">
              <div className="section-title mb-30">
                <span className="sub-title">welcome To Lotus Wellness</span>
                <h2 className="title">Who We Are</h2>
              </div>
              <p>
                Lotus is a World class , Luxurious Alcohol and Drug Addiction
                Treatment center with a Holistic approach to Wellness. We are
                committed to providing you the quality of treatment and care
                that we would want for our very own loved ones.
              </p>
              <p>We call this our “loved one standard of care.”</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about-area-end */}
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="section-title text-center mb-40">
          <span className="sub-title">MEET OUR TEAM</span>
          <h2 className="title">ABOUT THE FOUNDERS</h2>
        </div>
      </div>
    </div>
    <section className="team__details-area">
      <div className="container">
        <div className="team__details-inner">
          <div className="row align-items-center">
            <div className="col-36">
              <div className="team__details-img">
              <img src={ require ("./assets/img/team/oh.jpg")} alt="" />
              </div>
            </div>
            <div className="col-64">
              <div className="team__details-content">
                <h2 className="title">Mrs Om Priyadarshini B.Com</h2>
                <span className="position">
                  Founder-CEO Lotus Wellness &amp; Lotus Health
                </span>
                <span className="position">
                  Chairperson-Emerald Group Of Companies
                </span>
                <p>
                  Entrepreneurship is all about giving wings to your dreams. The
                  aspiration to disrupt an existing model and innovate something
                  “EXTRAORDINARY “ from the shack is what this exciting journey
                  is all about. Mrs. Om Priya is a dynamic and progressive
                  entrepreneur turned philanthropist and Wellness Advocate.
                  Lotus is her creation. Just like a lotus flower that struggles
                  through the mud to emerge beautiful and whole, she believes
                  everybody can bloom out of any form of addiction or past
                  challenges. Unlike conventional rehabilitation centers that
                  rely on punishment culture and the use of brute force or
                  suppression, she felt a holistic approach with Counselling,
                  motivation, and therapies would be more effective in
                  facilitating recovery. All programs at Lotus have been
                  designed to make every client mentally, physically,
                  emotionally, and spiritually healthy.
                </p>
                <div className="team__details-info">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon-mail" />
                      <a href="mailto:ceo@lotuswellness.life">
                        ceo@lotuswellness.life
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-share-alt" />
                      <ul className="list-wrap team__details-social">
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row align-items-center">
            <div className="col-64">
              <div className="team__details-content">
                <h2 className="title">
                  Dr G Om Prakasham M.B.B.S,
                  <br /> MS, MCh, FACS (Singapore)
                </h2>
                <span className="position">
                  Chairman , Lotus Wellness &amp; Lotus Health
                </span>
                <span className="position">
                  Senior Consultant Cardiac surgeon
                </span>
                <p>
                  A leader is the one who knows the way, goes the way and shows
                  the way . This statement stands true for Dr Om who is an
                  entrepreneur and eminent heart surgeon . He is a coronary
                  bypass and Valvular heart surgery expert and a veteran of more
                  than 6000 plus heart surgeries. He is very passionate about
                  life.This very passion has been instrumental for him crafting
                  Lotus with a commitment to provide all the quality of
                  treatment and care that we would want for our very own loved
                  ones. He calls this our “loved one standard of care’.
                </p>
                <div className="team__details-info">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon-mail" />
                      <a href="mailto:md@lotuswellness.life">
                        md@lotuswellness.life
                      </a>
                    </li>
                    <li>
                      <i className="flaticon-mail" />
                      <a href="www.dromprakash.in">www.dromprakash.in</a>
                    </li>
                    <li>
                      <i className="fas fa-share-alt" />
                      <ul className="list-wrap team__details-social">
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-36">
              <div className="team__details-img">
                <img src={ require ("./assets/img/team/om.jpg")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* choose-area */}
    <section className="choose-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="choose-img-wrap">
              <img src={ require ("./assets/img/images/1520224157804.jpg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose-content">
              <div className="section-title white-title mb-30">
                <span className="sub-title">Lotus wellness Center</span>
                <h2 className="title">Inspiration From Lotus Flower</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* choose-area-end */}
    {/* about-area */}
    <section
      className="about__area-three about__bg-two"
      data-background={ require ("./assets/img/bg/h3_about_bg.jpg")}
    >
      <div className="container">
        <h2 className="title tg-element-title">
          Why Is Our Wellness Center Named Lotus ?
        </h2>
        <p>
          The lotus appears across many spiritual traditions and is widely
          regarded as a symbol of enlightenment. But, the lotus also represents
          personal transformation. It offers hope that something beautiful can
          blossom out of suffering, that we too will eventually bloom. No matter
          where you are on your journey, let the lotus remind you to always
          trust in the unseen path that leads up to the SUN. Just like the lotus
          flower, which rises from the mud, we too have the ability to rise and
          get away from our addictions, past challenges and keep growing.
        </p>
        <br />
        <br />
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="about__img-wrap-three">
              <img
                src="assets/img/images/bestwellnesscentreintamilnaduindia.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-three">
              <div className="section-title mb-25 tg-heading-subheading animation-style3">
                <span className="sub-title" />
              </div>
              <h2 className="title tg-element-title">WHY CHOOSE LOTUS?</h2>
              <p>
                Lotus is a World Class, Luxurious Wellness and Rehabilitation
                Center specialising in Wellness, Deaddiction and Mental Health.
              </p>
              <p>
                Our team of highly skilled and competent Healthcare
                professionals are here to provide a lending hand to each and
                everyone who is wanting to step out of any form of addiction
                using a lotus version of 12 Step Facilitation Therapy and
                holistic approach that is customised for every individual after
                understanding their mindset along with the root cause of their
                problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Marketing Expert */}
    <section className="marketing_expert__area_six">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-30">
            <h1 className="title mb-15">Want to talk to a Expert?</h1>
          </div>
          <div className="col-lg-7 mb-30 position-relative">
            <img
              src={require ("./assets/img/home6/icon-square.svg")}
              className="shape-top-right"
            />
            <div className="box-video">
              <img src={ require ("./assets/img/banner/buddha.jpeg")} />
              <a
                href="https://www.youtube.com/watch?v=gJWfaWWkN1I&ab_channel=LotusWellnessandRehabilitationCenter"
                className="popup-youtube bnt-play"
              >
                <img src={ require ("./assets/img/home6/play.svg")} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end Marketing */}
    {/* choose-area */}
    <section className="choose__area-four">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="choose__content-four">
              <div className="section-title white-title mb-20">
                <span className="sub-title">EXPERT TEAM</span>
                <h2 className="title">Team Work Makes Recovery Work</h2>
              </div>
              <div className="about__list-box mb-35">
                <ul className="list-wrap">
                  <li>
                    <i className="flaticon-arrow-button" />
                    The strength of the Team is each Individual member
                  </li>
                  <li>
                    <i className="flaticon-arrow-button" />
                    The strength of each member is the Team
                  </li>
                  <li>
                    <i className="flaticon-arrow-button" />
                    This is the credo of our Team at Lotus.
                  </li>
                  <li>
                    <i className="flaticon-arrow-button" />
                    Our Multidisciplinary Team of renowned Highly qualified
                    Professionals are dedicated to Health and Wellbeing.
                  </li>
                </ul>
              </div>{" "}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="choose__list-two">
              <ul className="list-wrap">
                <li>
                  <div className="choose__list-box-two">
                    <div className="choose__list-icon-two">
                      <i className="flaticon-investment" />
                    </div>
                    <div className="choose__list-content-two">
                      <h4 className="title">OUR MISSION</h4>
                      <p>
                        Our mission at Lotus is to raise the standard in
                        comprehensive wellness and addiction treatment and
                        provide an unsurpassed treatment experience for all our
                        clients.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="choose__list-box-two">
                    <div className="choose__list-icon-two">
                      <i className="flaticon-financial-profit" />
                    </div>
                    <div className="choose__list-content-two">
                      <h4 className="title">OUR VISION</h4>
                      <p>
                        Our vision at Lotus is to help all our clients find a
                        better, happier and healthier life. “Putting clients
                        first “ is our primary value and we make sure all that
                        we think and do are client centric.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="choose__shape-wrap-four">
        <img
          src={ require ("./assets/img/images/inner_choose_shape01.png")}
          alt=""
          data-aos="fade-right"
          data-aos-delay={400}
        />
        <img
          src={ require ("./assets/img/images/inner_choose_shape02.png")}
          alt=""
          data-aos="fade-left"
          data-aos-delay={400}
        />
      </div>
    </section>
    {/* choose-area-end */}
    {/* team-area */}
    <section className="team__area-four">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-40">
              <span className="sub-title">MEET OUR TEAM</span>
              <h2 className="title">
                Our Expertise Is Here <br /> For You Can Trust
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="team__item-four shine-animate-item">
              <div className="team__thumb-four shine-animate">
                <img src={require ("./assets/img/team/team1.jpg")} alt="" />
              </div>
              <div className="team__content-four">
                <h2 className="title">
                  <a href="team-details">Dr Paranthaman Sethupathi</a>
                </h2>
                <span>MRCPsych (UK) , MBA </span>
                <span>Senior Consultant Psychiatrist</span>
                <div className="team__social-four">
                  <ul className="list-wrap">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="team__item-four shine-animate-item">
              <div className="team__thumb-four shine-animate">
                <img src= { require ("./assets/img/team/team2.jpg")} alt="" />
              </div>
              <div className="team__content-four">
                <h2 className="title">
                  <a href="team-details">Dr.Dhananjaya.S </a>
                </h2>
                <span>MBBS, DPM(Psy), MD(Psy), FIPS</span>
                <span>Senior Consultant Psychiatrist</span>
                <div className="team__social-four">
                  <ul className="list-wrap">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="team__item-four shine-animate-item">
              <div className="team__thumb-four shine-animate">
                <img src={ require ("./assets/img/team/team9.jpg")} alt="" />
              </div>
              <div className="team__content-four">
                <h2 className="title">
                  <a href="team-details">Dr G Om Prakasham</a>
                </h2>
                <span>M.B.B.S , MS, MCH , FACS(Singapore)</span>
                <span> Senior Consultant Cardiac Surgeon</span>
                <div className="team__social-four">
                  <ul className="list-wrap">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="team__item-four shine-animate-item">
              <div className="team__thumb-four shine-animate">
                <img src={ require ("./assets/img/team/team3.jpg")} alt="" />
              </div>
              <div className="team__content-four">
                <h2 className="title">
                  <a href="team-details">Dr. Nancy Kurian</a>
                </h2>
                <span>Counselling Psychologist-</span>
                <span>Corporate and Educational Institutions</span>
                <div className="team__social-four">
                  <ul className="list-wrap">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="team__item-four shine-animate-item">
              <div className="team__thumb-four shine-animate">
                <img src= { require ("./assets/img/team/team4.jpg")} alt="" />
              </div>
              <div className="team__content-four">
                <h2 className="title">
                  <a href="team-details">Dr Nagarajan R</a>
                </h2>
                <span>M.B.B.S , MS ,MCh </span>
                <span>Consultant Endocrine Surgeon</span>
                <div className="team__social-four">
                  <ul className="list-wrap">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="team__item-four shine-animate-item">
              <div className="team__thumb-four shine-animate">
                <img src= { require ("./assets/img/team/team5.jpg")} alt="" />
              </div>
              <div className="team__content-four">
                <h2 className="title">
                  <a href="team-details">Dr Vijaidarshan </a>
                </h2>
                <span>M.B.B.S, MD (General Medicine)</span>
                <span>Consultant Physician</span>
                <div className="team__social-four">
                  <ul className="list-wrap">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="team__item-four shine-animate-item">
              <div className="team__thumb-four shine-animate">
                <img src={ require ("./assets/img/team/team6.jpg")} alt="" />
              </div>
              <div className="team__content-four">
                <h2 className="title">
                  <a href="team-details">Dr Sreeja Devi </a>
                </h2>
                <span>BAMS</span>
                <span>Consultant Ayurvedic Physician</span>
                <div className="team__social-four">
                  <ul className="list-wrap">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="team__item-four shine-animate-item">
              <div className="team__thumb-four shine-animate">
                <img src={ require ("./assets/img/team/team7.jpg")} alt="" />
              </div>
              <div className="team__content-four">
                <h2 className="title">
                  <a href="team-details">Mr Shanmugasundaram</a>
                </h2>
                <span>General Manager Operations &amp; Client Relations</span>
                <span>Senior Psychologist &amp; Mental Health Advocate</span>
                <div className="team__social-four">
                  <ul className="list-wrap">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* team-area-end */}
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
                  src={ require ("./assets/img/images/call_back_shape.png")}
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

export default OurStory;
