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





function Relapse() {
    
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
                  <font color="#ffffff">Relapse Prevention Program</font>
                </h1>
                <br />
                <h1>
                  <font color="#ffffff">""Never Give Up""</font>
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
                  src={require ("./assets/img/bg/relapsepreventionprogram-lotuswellness.jpg")}
                  alt=""
                />
              </div>
              <div className="services__details-content">
                <h4 className="">Relapse Prevention Program</h4>
                <p>
                  Relapse prevention programs are addiction treatment services
                  designed to help people avoid falling back into drugs and
                  alcohol. Even among people dedicated to long-term recovery,
                  relapse is a common occurrence. But people in recovery are not
                  helpless in the face of potential relapse. Avoiding this kind
                  of setback is possible with proper education, planning, and
                  support. Addiction relapse programs in Lotus Wellness Rehab
                  work hard to make sure long-term treatment provides the type
                  of life transformation people deserve.
                </p>
                <h4 className="">
                  How Can A Relapse Prevention Program Benefit Me ?
                </h4>
                <p>
                  Relapse prevention programs prioritize aftercare planning as a
                  crucial component. Aftercare planning involves developing a
                  comprehensive guidebook that outlines strategies for
                  successfully navigating life post-treatment. This transition
                  from inpatient or outpatient care to a more typical routine
                  requires careful consideration.
                </p>
                <p>
                  Relapse prevention programs offer extensive education,
                  valuable resources, and unwavering support, aiming to empower
                  individuals with the necessary tools and skills to lead a
                  fulfilling and sober life beyond the treatment phase. By
                  providing a comprehensive aftercare plan, these programs
                  ensure ongoing success and sustained recovery.
                </p>
                <p>
                  Relapse prevention programs at Lotus typically rely on the
                  following services: community housing, addiction recovery
                  resources, support groups, and continued therapy. All of these
                  can play a role in an aftercare plan that extends support
                  following a round of intentional treatment.
                </p>
                <h4 className="">Community Hosting</h4>
                <p>
                  Also referred to as sober housing, community housing provides
                  a sober living environment for people in recovery. This living
                  arrangement are separate from those just entering or in the
                  middle of formal treatment. Community housing often requires
                  residents to take regular drug tests, contribute to community
                  upkeep, and uphold other conduct standards.
                </p>
              </div>
              <div className="services__details-inner">
                <div className="row gutter-24 align-items-center">
                  <div className="col-56">
                    <div className="services__details-inner-content">
                      <h4 className="">Addiction Recovery Resources </h4>
                      <p>
                        Addiction recovery is a comprehensive process that
                        entails both mental and physical improvement. However,
                        in addition to these vital aspects, relapse prevention
                        plans at Lotus also considers the importance of
                        supporting individuals in rebuilding their lives. Upon
                        completing addiction treatment, many individuals may
                        find themselves without a job or stable housing, which
                        can be daunting. Moreover, they may have a strong desire
                        to pursue further education to kickstart their career
                        and create a more promising future.
                      </p>
                      <p>
                        To address these challenges, our relapse prevention
                        programs play a crucial role in connecting participants
                        with a wide range of resources and support networks that
                        can assist them in getting back on their feet. These
                        resources may include:
                      </p>
                      <p>
                        * Job placement services
                        <br />
                        * Housing assistance programs
                        <br />* Educational opportunities, and more
                      </p>
                      <p>
                        By providing comprehensive support, relapse prevention
                        programs aim to empower individuals in their journey
                        toward sustained recovery and a healthier, more
                        fulfilling life.
                      </p>
                    </div>
                  </div>
                  <div className="col-44">
                    <div className="services__details-inner-img">
                      <img
                        src={require ("./assets/img/bg/recovery-is-hard-recrect-is-harder.jpeg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="">Support Groups</h4>
              <p>
                Support groups provide mutual aid, mentorship, and
                accountability. These may officially be 12-step programs or
                other less formal types of support groups. People in recovery
                need sober avenues of socialization. Thus, support groups are a
                great method for connecting people who collectively pursue
                recovery and invest in sober activities together.
              </p>
              <h4 className="">Continued Therapy</h4>
              <p>
                Therapy doesn’t always stop when formal treatment ends. For many
                people, individual or group therapy is a vital and integral
                component of their comprehensive aftercare plan. This could
                involve continued engagement in evidence-based
                cognitive-behavioral therapy or other effective modes of
                therapeutic intervention, tailored to meet their specific needs
                and goals. By incorporating ongoing therapy into their
                post-treatment journey, individuals can further enhance their
                well-being and reinforce the skills and insights gained during
                their formal treatment.
              </p>
              <h4 className="">
                Find Relapse Prevention Programs For You At Lotus
              </h4>
              <p>
                You’ve invested a lot of time, energy, and likely money into
                achieving sobriety and healing your life from addiction. Don’t
                let those investments go to waste by not equipping yourself with
                the knowledge and skills necessary to prevent relapse. Safeguard
                your recovery from relapse by getting in touch with us .
              </p>
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

export default Relapse;