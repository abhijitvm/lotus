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





function WellnessCentre() {
    
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
                  <font color="#ffffff">Lotus Wellness Centre</font>
                </h1>
                <br />
                <h1>
                  <font color="#ffffff">"Discover Wellness"</font>
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
                  src={require ("./assets/img/bg/wellnessretreatincoimbatore-lotuswellness.jpg")}
                  alt=""
                />
              </div>
              <div className="services__details-inner">
                <div className="row gutter-24 align-items-center">
                  <div className="col-56">
                    <div className="services__details-inner-content">
                      <h4 className="">LOTUS WELLNESS CENTRE</h4>
                      <p>
                        Our holistic wellness offerings strengthen your
                        addiction treatment plan by teaching you ways to
                        cultivate total wellness ⎼ mind, body, and spirit. A
                        variety of evidence-based, alternative treatments help
                        you manage withdrawal, tackle your doubts and fears, and
                        embrace change, so you can begin to redefine what it
                        truly means to live a healthy life free from drugs and
                        alcohol.
                      </p>
                      <p>
                        Lotus plays a key role in promoting holistic wellness
                        which encompasses five major dimensions of complete
                        well-being – Mental, Physical, Spiritual, Social and
                        Lifestyle.
                      </p>
                    </div>
                  </div>
                  <div className="col-44">
                    <div className="services__details-inner-img">
                      <img
                        src={require ("./assets/img/bg/bestrecoverytreatmentcentreinpollachi-1536x790.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="services__details-content">
                <h4 className="">At Thamarai , Our Spa</h4>
                <p>
                  {" "}
                  * We have developed novel methods of assessing health by
                  combining the concepts of traditional knowledge of Ayurveda
                  and the present day biomedicine in a scientific way.
                  <br />
                  * We offer multitude physical treatments/therapies from an
                  array of holistic healthcare streams such as Ayurveda, Yoga
                  and Naturopathy.
                  <br />
                  * All therapies are designed based on individual specific,
                  ailment specific and seasonal specific that adheres to the
                  classical methods of treatment suitably innovated for ultimate
                  efficacy as well as comfort.
                  <br />
                  * Along with Customized and professional service we offer
                  specialized satwik diet. The menu is recommended considering
                  the health conditions monitored and designed by doctors.
                  <br />* Strict adherence to scientific Ayurvedic principles
                  and Yoga practice.
                </p>
              </div>
              <div className="services__details-inner">
                <div className="row gutter-24 align-items-center">
                  <div className="col-56">
                    <div className="services__details-inner-content">
                      <img
                        src={require ("./assets/img/bg/ayurvedamedicalclinicinindia-700x391.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-44">
                    <div className="services__details-inner-img">
                      <img
                        src={require ("./assets/img/bg/ayurvedamedicalclinicincoimbatore-700x391.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="services__details-content">
                <h4 className="">Thamarai Spa Special</h4>
                <h2 className="">Ayurvedic Treatment at Lotus</h2>
                <p>
                  {" "}
                  Lotus Wellness is One Of A Kind Center in India where
                  Ayurvedic Treatments are used in Addition to Allopathic De
                  Addiction Treatment so that they compliment one and another.
                  The Chance of Recovery from addiction have been found to be
                  Very high here.
                </p>
              </div>
              <div className="services__details-inner">
                <div className="row gutter-24 align-items-center">
                  <div className="col-44">
                    <div className="about__list-box">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-arrow-button" /> Naturopathy
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" />
                          Shirodhara
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" />
                          Acupressure
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" /> Local &amp;
                          Full Body Compress
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" />
                          Nasya
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" /> Heal chronic
                          ailments with natural remedies
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" /> Colon Hydro
                          Therapy
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" />
                          Massage
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" />
                          Reflexology
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-56">
                    <div className="services__details-inner-content">
                      <div className="about__list-box">
                        <ul className="list-wrap">
                          <li>
                            <i className="flaticon-arrow-button" /> Jal Neti
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> Cupping
                            Therapy
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> Yoga
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> Enema
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> Acupuncture
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> Mud Therapy
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> Eye Wash
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> Rejuvenate
                            with effective therapies
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" />
                            Detox
                          </li>
                        </ul>
                      </div>
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

export default WellnessCentre;