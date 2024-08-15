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





function TheLotusDifference() {
    
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
                <span className="sub-title">Lotus Wellness Center</span>
                <h1>
                  <font color="#ffffff">The Lotus Difference</font>
                </h1>
                <h1>
                  <font color="#ffffff">"A Quality Rehab"</font>
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
            <h2 className="title mb-15">
              Journeys of discovery, growth and transformation
            </h2>
            <p>
              Lotus is not just any ordinary rehabilitation center , It is
              India’s No 1 Holistic and Luxurious Rehab . It is world renown for
              its life transformation programs. We believe in helping our
              patients overcome their past addictions or mental ailments and
              guiding them on a personal transformative journey, where they
              first ’emerge’ as curious learners, then ‘evolve’ into critical
              thinkers and compassionate individuals, ultimately poised to
              ‘excel’ in both their personal and professional pursuits.
            </p>
            <p>
              Our comprehensive approach ensures that each patients potential is
              not just realized, but maximized, empowering them to become
              accomplished leaders of tomorrow. Join us in this remarkable
              journey of growth, where sobriety is not just a destination, but a
              way of life.
            </p>
          </div>
          <div className="col-lg-7 mb-30 position-relative">
            <img
              src={require ("./assets/img/home6/icon-square.svg")}
              className="shape-top-right"
            />
            <div className="box-video">
              <img src={require ("./assets/img/banner/lotus-difference-banner.jpg")} />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end Marketing */}
    {/* project-details-area */}
    <section className="project__details-area">
      <div className="container">
        <div className="project__details-wrap">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <h2 className="title">
                  The Holistic Addiction Treatment Philosophy At Lotus
                </h2>
                <p>
                  At Lotus , we focus on healing the underlying conditions that
                  are causing you to use drugs and alcohol. We do this by
                  utilizing a highly individualized treatment program with
                  therapists who are experienced in healing the underlying
                  causes of addiction. Our holistic one-on-one approach is a
                  superior version of the 12 Step program and offers
                  state-of-the-art services that will keep you engaged and
                  enthusiastic about healing. During treatment, you will feel
                  empowered, instead of powerless. We do not label you an addict
                  or alcoholic, nor do we believe that you have a disease. We
                  have found that damaging labels, such as addict and alcoholic,
                  rob you of your true identity.
                </p>
                <p>
                  It’s the treatment philosophy at Lotus that sets us apart from
                  all other rehab centers in the world. We choose to empower you
                  and heal your underlying conditions, rather than label you an
                  addict and tell you that you have a disease.
                </p>
              </div>
              <div className="row">
                <h2 className="title">The Lotus Advantage</h2>
                <p>
                  In a medical setting, holistic therapy addresses mental,
                  physical, emotional and spiritual health conditions while
                  considering social and economic issues. The difference between
                  traditional and holistic therapy is that in conventional
                  rehabs only the psychological, behavioral patterns and
                  ramifications of traditional therapy are observed and treated.
                  In holistic therapy, the person’s entire being is looked at
                  and treated at a 360-degrees healing approach. Holistic
                  medicine is used worldwide and incorporates many fundamentals
                  of Indian Ayurveda , Naturopathy , meditation and yoga that
                  have shown positive results in treating various medical
                  issues. Holistic Therapy at Lotus for Addiction Treatment
                  focuses on treating and healing the underlying conditions
                  causing a person to use and abuse drugs and alcohol.
                  Deep-rooted issues are frequently rooted in past trauma that a
                  person has carried around for many years and has yet to
                  realize or heal from. When these underlying conditions are not
                  treated, the individual will likely relapse or have a tough
                  time changing the course of their behavior and cravings.
                </p>
              </div>
              <div>
                <h1 className="title">Lotus Principles Of Holistic Medicine</h1>{" "}
                <div className="row"> .</div>
                <div className="about__list-box">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon-arrow-button" /> Every person has
                      natural healing powers
                    </li>
                    <li>
                      <i className="flaticon-arrow-button" /> A patient is a
                      person, not a disease
                    </li>
                    <li>
                      <i className="flaticon-arrow-button" />
                      Healing takes a team approach involving the patient and
                      doctor. They work together to address all aspects of a
                      person’s life through various non-traditional treatment
                      methods.
                    </li>
                    <li>
                      <i className="flaticon-arrow-button" /> Treatment consists
                      of fixing the cause of the condition, not just alleviating
                      the symptoms.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row"> .</div>
            <div className="row">
              {" "}
              <p>
                Holistic medicine is an attitudinal approach to health care
                rather than a particular set of techniques. It addresses the
                psychological, familial, societal, ethical and spiritual as well
                as biological dimensions of health and illness.
              </p>
            </div>
            <div className="row">
              <h2 className="title">1. Treatment For Mind, Body And Spirit</h2>
              <p>
                A holistic approach to healing centers around the concept that
                the mind, body, and spirit of an individual must all be healthy
                in order for that person to have the most successful life that
                they can possibly experience. Rather than just treating the
                physical effects of addiction, this method combines every
                distinct part of an individual and ensures the health of mind,
                body, and spirit.
              </p>
            </div>
            <div className="row">
              <h2 className="title">
                2. Effective Traditional Therapies Remain The Foundation Of Care
              </h2>
              <p>
                There are many traditional methods that have been used to treat
                addiction for decades. These tried and true methods still form
                the basis of a holistic approach to substance abuse. These
                methods are simply expanded upon to incorporate treatment of all
                components of the person seeking help.
              </p>
            </div>
            <div className="row">
              <h2 className="title">3. Caring And Compassionate Environment</h2>
              <p>
                Treatment professionals who believe in a holistic approach to
                care generally provide a safe, secure, and compassionate
                environment that encourages openness and healing. These
                individuals are trained and experienced in dealing with the
                difficulties brought about by addiction. They provide these
                therapeutic interventions in a way that conveys compassion and
                empathy for the struggles each individual faces.
              </p>
            </div>
            <div className="row">
              <h2 className="title">4. High Rates Of Long - Term Success</h2>
              <p>
                Holistic methods of treating substance abuse tend to have better
                long-term outcomes. A greater percentage of individuals
                experience a complete holistic recovery. In addition, fewer
                people treated by this approach fall back into their old
                patterns of substance abuse and addiction.
              </p>
            </div>
            <div className="row">
              <h2 className="title">
                5. Greater Selection Of Diverse Treatment Options
              </h2>
              <p>
                Holistic treatment facilities utilize a wide array of treatment
                options. While these comforting amenities may be seen as
                non-essential components to some, a holistic approach recognizes
                the importance of treating all body systems equally. Therefore,
                holistic programs often provide nutritional support, massage,
                fitness programs, meditation, outdoor recreational programs, and
                so much more.
              </p>
            </div>
            <div className="row">
              <h2 className="title">
                6. Quality After Care Programs And Follow Up
              </h2>
              <p>
                Holistic treatment programs for alcohol and drug addiction also
                recognize that the individual’s treatment doesn’t end the second
                he leaves the facility. Successful rehabilitation requires a
                great deal of skilled follow-up and aftercare therapies. These
                aftercare programs act as an additional means of support to keep
                each individual from experiencing a devastating relapse.
              </p>
            </div>
            <div>.</div>
            <div className="row">
              <h2 className="title">
                Why Holistic Addiction Treatment Is Very Successful?
              </h2>
              <p>
                We are all complex individuals and the reasons we make specific
                decisions, good or bad, are very complex as well. Holistic
                methods of addiction treatment are successful because they look
                at a person as a whole and make it a point to treat all parts of
                an individual successfully. Holistic approaches recognize that a
                person suffering from addiction is so much more than just his
                substance abuse problem.
              </p>
              <p>
                Lotus Wellness Rehab is a top drug and alcohol rehab that offers
                a holistic approach to substance abuse treatment. Our inpatient
                programming for addiction will look different from person to
                person because we customize our programs and therapies for each
                individual.
              </p>
              <p>
                Addiction impacts so much of our mind and spirit. Therefore,
                it’s imperative to treat the underlying issues that led to
                addiction in the first place. Detox alone will help rid the body
                of substances, but that alone is not enough. Drugs and alcohol
                change the ways your brain works. Therefore, it’s crucial to
                heal the brain and essentially “rewire” to a point of recovery.
                A holistic approach to substance abuse treatment looks at and
                treats a person’s body, mind and spirit. For lasting recovery,
                choose a holistic rehab center, such as Lotus Recovery .
              </p>
            </div>
            <div>.</div>
            <div className="row">
              <h2 className="title">
                The Importance Of Seeking Quality Treatment Promptly
              </h2>
              <p>
                Overcoming addiction and substance abuse is a difficult process.
                It should come as no surprise that the majority of those
                experiencing these issues require additional professional
                support to overcome it and bring about positive change in their
                lives. Seeking help to overcome these problems and regain a
                peaceful life is a sign of courage and strength, not one of
                weakness.
              </p>
              <p>
                No matter how serious your issues may seem, you don’t have to
                face them alone. You can recover from your addiction and
                experience a peaceful life by seeking proper treatment at lotus
                wellness rehab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* choose-area */}
    <section className="choose__area-two">
      <div
        className="choose__bg"
        style={{backgroundImage: 'url(' + require('./assets/img/bg/lotus-difference.jpg') + ')'}}
      />
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-8 col-md-10">
            <div className="choose__content-two">
              <div className="section-title mb-20 tg-heading-subheading animation-style3">
                <span className="sub-title">Why Choose Our Services</span>
                <h2 className="title tg-element-title">The Lotus Speciality</h2>
              </div>
              <div className="choose__tab">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="goal-tab-pane"
                    role="tabpanel"
                    aria-labelledby="goal-tab"
                    tabIndex={0}
                  >
                    <div className="choose__tab-content">
                      <ul className="list-wrap">
                        <li>
                          <i className="fas fa-check" /> 60-80 hours of
                          one-on-one therapy per month
                        </li>
                        <li>
                          <i className="fas fa-check" /> World Class
                          Infrastructure
                        </li>
                        <li>
                          <i className="fas fa-check" /> Pollution free Green
                          Campus
                        </li>
                        <li>
                          <i className="fas fa-check" /> Wide option of Indoor
                          &amp; Outdoor Games
                        </li>
                        <li>
                          <i className="fas fa-check" /> Gym with personal
                          trainer
                        </li>
                        <li>
                          <i className="fas fa-check" /> Yoga &amp; Meditation
                        </li>
                        <li>
                          <i className="fas fa-check" /> Ayurvedic Spa
                        </li>
                        <li>
                          <i className="fas fa-check" /> Naturopathy treatment
                          option
                        </li>
                        <li>
                          <i className="fas fa-check" /> Acupressure &amp;
                          Acupuncture
                        </li>
                        <li>
                          <i className="fas fa-check" /> Aerobics and Zumba
                          Fitness
                        </li>
                        <li>
                          <i className="fas fa-check" /> Art &amp; Music Therapy
                        </li>
                        <li>
                          <i className="fas fa-check" /> You will have your own
                          team of therapists and doctors
                        </li>
                        <li>
                          <i className="fas fa-check" /> Cutting-edge treatment
                          philosophy
                        </li>
                        <li>
                          <i className="fas fa-check" /> Special variant of 12
                          Step Program
                        </li>
                        <li>
                          <i className="fas fa-check" /> We don't believe
                          addiction is a disease
                        </li>
                        <li>
                          <i className="fas fa-check" /> Lotus is a smoke free
                          campus
                        </li>
                        <li>
                          <i className="fas fa-check" /> Patient to Staff ratio
                          is 1:2
                        </li>
                        <li>
                          <i className="fas fa-check" /> We don't use degrading
                          labels like addict or alcoholic to define you
                        </li>
                        <li>
                          <i className="fas fa-check" /> We heal the underlying
                          conditions that cause addiction
                        </li>
                        <li>
                          <i className="fas fa-check" /> Very safe for women’s
                          program
                        </li>
                        <li>
                          <i className="fas fa-check" /> 24/7 caretaker for
                          women
                        </li>
                        <li>
                          <i className="fas fa-check" /> Top-level detox program
                          — 24/7 nursing with medical assistance
                        </li>
                        <li>
                          <i className="fas fa-check" /> Recovery Begins Here
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="operating__box">
                <div></div>
                <div></div>
              </div>
              <br />
              <br />
              <div className="row">
                <p>
                  For Most clients Lotus is one of the best experiences of their
                  life and we feel confident you will feel the same. The healing
                  that takes place here is hard to put into words. Once you
                  arrive, we know you will see what makes this such a special
                  place.We honor the opportunity to care for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choose__shape-wrap-two">
        <img
          src={require ("./assets/img/images/h2_choose_shape01.png")}
          alt=""
          data-parallax='{"x" : -80 , "y" : 80 , "rotateZ":80}'
        />
        <img
          src={require ("./assets/img/images/h2_choose_shape02.png")}
          alt=""
          data-aos="fade-left"
          data-aos-delay={400}
        />
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
    <Foot />
   </div>

  );
}

export default TheLotusDifference;
