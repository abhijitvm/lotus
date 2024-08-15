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





function LotusPetals() {
    
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
                  <font color="#ffffff">Signature Women’s Program</font>
                </h1>
                <br />
                <h1>
                  <font color="#ffffff">"For you, With you"</font>
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
                <img src={require ("./assets/img/bg/lotus-petals.jpeg")} alt="" />
              </div>
              <div className="services__details-content">
                <h4 className="">Lotus Petals</h4>
                <p>
                  Lotus Wellness Rehab women’s program, called “Lotus Petals “,
                  is designed to provide a safe, nurturing and healing
                  environment for women struggling with substance abuse, eating
                  disorders, trauma and underlying mental health issues such as
                  anxiety, depression and PTSD. Our commitment to treating
                  co-occurring disorders with equal weight and value sets us
                  apart from other treatment centers.
                </p>
                <p>
                  Through a combination of traditional and innovative
                  modalities, our experienced clinicians and therapists help
                  women find freedom from their addictions and mental health
                  struggles and rebuild the life they deserve. Many women dream
                  of returning to school, the work force, or their family life
                  with clarity, capability, and esteem. We work hand-in-hand
                  with clients to meet these needs and help women to return to
                  school, pursue a career, or return to their families with new
                  skills that allow them to be more present and connected.
                </p>{" "}
              </div>
              <div className="services__details-content">
                <h4 className="">Get Help Today</h4>
                <p>
                  A Peaceful Recovery Environment in picturesque Pollachi at the
                  foothills of the magical Anamalais mountains, Lotus is housed
                  in a beautiful and welcoming stand-alone home . Amidst lush
                  greenery our facility provides a relaxing and serene
                  environment in which to undergo addiction treatment and start
                  a new chapter of life. We encourage our clients to make the
                  most of the beautiful natural surroundings and healing air
                  through periodic outings and recreational activities.
                  Throughout the program, daily life skills are instilled and
                  supported in order for women to leave the treatment experience
                  confidently.
                </p>
                <h4 className="">
                  Comprehensive Addiction Treatment For Women
                </h4>
                <p>
                  The women at Lotus Recovery receive weekly individual
                  psychotherapy, psychiatric services, and case management,
                  augmented by our clinically comprehensive group therapy. Being
                  part of a group therapy environment gives women unique
                  insights into their thought processes and emotions and helps
                  them view their own situation in a new light. Sitting
                  alongside women with long kept struggles and secrets helps
                  many finally feel understood.
                </p>{" "}
              </div>
              <div className="services__details-content">
                <h4 className="">Start Your Recovery</h4>
              </div>
              <div className="services__details-inner">
                <div className="row gutter-24 align-items-center">
                  <div className="col-44">
                    <div className="about__list-box">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-arrow-button" /> Individual
                          Therapy
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" /> Targeted Case
                          Management
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" /> Psychiatric
                          and Medication Management
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" /> Family
                          Counseling
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" /> Yoga
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" /> Spirituality
                          Groups
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" /> Community
                          Meals
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" /> Experiential
                          Outings
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" /> Process Groups
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-56">
                    <div className="services__details-inner-content">
                      <div className="about__list-box">
                        <ul className="list-wrap">
                          <li>
                            <i className="flaticon-arrow-button" />{" "}
                            Psychoeducational Groups
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> Nutritional
                            Counseling
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> Attachment
                            based Therapy
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> Family
                            Workshops
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> Life Skills
                            Education
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> Meditation
                            Groups
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> 12-Step
                            Based Activities
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> Trauma
                            Informed Care
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> Alumni
                            Groups
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="services__details-content">
                <h4 className="">
                  Therapeutic Modalities Utilized by Clinicians at the Women’s
                  Facility Include:
                </h4>
              </div>
              <div className="services__details-inner">
                <div className="row gutter-24 align-items-center">
                  <div className="col-44">
                    <div className="about__list-box">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-arrow-button" /> Cognitive
                          Behavioral Therapy (CBT)
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" /> Dialectical
                          Behavioral Therapy (DBT)
                        </li>
                        <li>
                          <i className="flaticon-arrow-button" /> Somatic
                          Experiencing
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-56">
                    <div className="services__details-inner-content">
                      <div className="about__list-box">
                        <ul className="list-wrap">
                          <li>
                            <i className="flaticon-arrow-button" /> EMDR
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" />{" "}
                            Brainspotting
                          </li>
                          <li>
                            <i className="flaticon-arrow-button" /> Experiential
                            Therapy/Psychodrama
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="services__details-content">
                <p>
                  Our women’s program regularly hosts intensive workshops for
                  clients and their families to work with our team on addiction
                  counseling, conflict resolution and continued empowerment of
                  the family and individual. Families are able to meet with
                  their loved ones’ treatment providers and participate in
                  educational multifamily groups. Addressing the ways addiction
                  affects the entire family system contributes to a more
                  sustainable recovery and also allows family members to begin
                  their own personal healing journey.
                </p>
                <h4 className="">Start Your Recovery Today</h4>
                <p>
                  Our admissions staff are more than happy to answer any
                  questions you may have about our women’s program and walk you
                  through your options for substance use disorder and eating
                  disorder treatment. Give us a call today.
                </p>{" "}
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

export default LotusPetals;