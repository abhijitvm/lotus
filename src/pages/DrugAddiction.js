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





function DrugAddiction() {
    
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
                  <font color="#ffffff">Centre for Drug Addiction</font>
                </h1>
                <br />
                <h1>
                  <font color="#ffffff">"Be The Change "</font>
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
                  src={ require ("./assets/img/bg/drugaddictiontreatmentincoimbatore-lotusrehab.jpg")}
                  alt=""
                />
              </div>
              <div className="services__details-content">
                <h4 className="">Treatment Centre Drug Addiction</h4>
                <p>
                  At Lotus Wellness , Tamilnadu our drug addiction treatment
                  program is Holistic and 100% individualized. We apply an
                  advanced version of the 12 step recovery program . While we
                  will help you find ways to overcome the symptoms, our priority
                  is to treat the root-causes of your addiction and ensure
                  long-lasting recovery. In exclusive surroundings with Serenity
                  and cared for by a team of passionate and very experienced
                  therapists and doctors, we provide an ideal atmosphere for
                  drug addiction recovery. Lotus Wellness is a Serenity De
                  addiction home.
                </p>
                <h4 className="">Drug Addiction</h4>
                <p>
                  Drug addiction also called substance use disorder, is a
                  disease that affects a person’s brain and behaviour and leads
                  to an inability to control the use of a legal or illegal drug
                  or medication.Substances such as Cannabis, Opioids,Heroin ,
                  Cocaine are considered drugs.
                </p>
                <h4 className="">Opioids Addiction</h4>
                <p>
                  Opioids, sometimes called Narcotics are medicines prescribed
                  by Doctors to treat persistent or severe pain. There are many
                  types of prescribed opioids that are known by several names
                  such as Codeine, Fentanyl Hydrocodone , Oxycodone, Oxymorphone
                  and Morphine. It is generally taken orally, but abused
                  commonly through injections by an addict. Side effects of
                  these drugs are Sleepiness, Constipation, Nausea, Shallow
                  breathing , Slow heart rate and Loss of consciousness.
                </p>
                <h4 className="">Heroin Addiction</h4>
                <p>
                  Heroin is an opioid drug made from morphine , a natural
                  substance obtained from opium poppy plant. It can be a white
                  or brown powder or a black sticky substance known as black tar
                  Heroin . Other common names are Hairy , Horse , Helldust and
                  smack . People usually inject, sniff, snort or smoke Heroin.
                  It is highly addictive. Side effects are Insomnia, collapsed
                  veins for people who inject the drug, damaged tissue inside
                  the nose for people who sniff or snort it . Infection of Heart
                  lining and valves, Abscesses ( swollen tissue filled with pus
                  ), constipation and stomach cramping, liver and kidney
                  disease, lung complications including pneumonia, Mental
                  disorders such as depression and anti social personality
                  disorder, Sexual dysfunction for men and irregular menstrual
                  cycles for women.
                </p>
                <h4 className="">Cocaine Addiction</h4>
                <p>
                  Cocaine is a drug made from leaves of the coco plant native to
                  South America. It is a white powdery substance that reacts
                  with the body’s central nervous system producing energy and
                  euphoria. It can be smoked, snorted or taken as an injection.
                  Cocaine is also known as coke , Blow or powder. It is highly
                  addictive. Side effects are permanent damage to brain, lungs,
                  liver, kidney and heart. It is known to cause sudden death due
                  to cardiac arrest.
                </p>
                <h4 className="">Hallucinogen Addiction</h4>
                <p>
                  For hundreds of years, people have been using Psychoactive
                  substances to alter their reality. These substances, which
                  include peyote, LSD, PCP and ketamine(special k) to name a few
                  can be consumed in a tablet form, as a straight liquid, as a
                  brewed tea, as a powder that is snorted, as an inhalant , via
                  injection or dissolvable substance on one’s tongue. People
                  consuming these hallucinogens start living in their own
                  imaginary world changing one’s pattern of thinking, acting and
                  reacting to various situations. Side effects include
                  hallucinations, paranoia, anxiety, panic or fear, Depression
                  and Psychosis.
                </p>
              </div>
              <div className="services__details-inner">
                <div className="row gutter-24 align-items-center">
                  <div className="col-44">
                    <div className="services__details-inner-img">
                      <img
                        src="assets/img/bg/tretament-for-drug-300x300.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-56">
                    <div className="services__details-inner-content">
                      <h4 className="">Hallucinogen Addiction</h4>
                      <h4 className="">
                        Treatment For Opioids Addiction,heroin Addiction,cocaine
                        Addiction, Hallucinogen Abuse{" "}
                      </h4>
                      <p>
                        • At Lotus we customise the treatment plan as per each
                        individual’s requirement.
                        <br />
                        • Our Approach is holistic and evidence based..
                        <br />
                        • We use a combination of physical, mental, emotional
                        and spiritual processes along with various therapies to
                        bring an individual out of a habit.
                        <br />
                        • Lotus Wellness And Rehabilitation Center is
                        Coimbatore’s Best Drug De Addiction Centre.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
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
                        src="assets/img/bg/lotuswellness-motivation.jpg"
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
  <div>.</div>
</>

  

    </main>
    <Foot />
   </div>

  );
}

export default DrugAddiction;
