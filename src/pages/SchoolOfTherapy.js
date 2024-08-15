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





function SchoolOfTherapy() {
    
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
                  <font color="#ffffff">School of Theraphy</font>
                </h1>
                <h1>
                  <font color="#ffffff">"Inspire Growth"</font>
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
            <span className="sub-title">Lotus Rehabilitation Centre</span>
            <h1 className="title mb-15">Road To Recovery</h1>
            <p>
              Recovery has been identified as a primary goal for behavioral
              health care at lotus . We believe recovery is a process of change
              through which individuals improve their health and wellness, live
              a self- directed life, and strive to reach their full potential.
              Through the Recovery Support Strategic Initiative, LOTUS has
              delineated four major dimensions that support a life in recovery:
            </p>
            <h1 className="title mb-15">Purpose</h1>
            <p>
              Meaningful daily activities, such as a job, school, volunteerism,
              family caretaking, or creative endeavors, and the independence,
              income and resources to participate in society
            </p>
          </div>
          <div className="col-lg-7 mb-30 position-relative">
            <h1 className="title mb-15">Health</h1>
            <p>
              Overcoming or managing one’s disease(s) or symptoms—for example,
              abstaining from use of alcohol, illicit drugs, and non-prescribed
              medications if one has an addiction problem— and for everyone in
              recovery, making informed, healthy choices that support physical
              and emotional wellbeing.
            </p>
            <h1 className="title mb-15">Home</h1>
            <p>A stable and safe place to live</p>
            <h1 className="title mb-15">Community</h1>
            <p>
              Relationships and social networks that provide support,
              friendship, love, and hope.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* end Marketing */}
    {/* about-area */}
    <section className="about__area-eight">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <div className="about__img-wrap-seven">
              <img
                src={require ("./assets/img/images/Behavioural_Therapy_Lotuswellnessrehab-700x394.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow">Behavioural Therapy</h2>
              </div>
              <p>
                Behavior Therapy refers to a range of treatments and techniques
                which are used to change an individual’s maladaptive responses
                to specific situations. Altering the maladaptive responses can
                often alleviate psychological distress and psychiatric problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about-area-end */}
    {/* choose-area */}
    <section className="choose__area-five">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="choose__img-wrap-five">
              <img
                src={require ("./assets/img/images/Cognitive_Behavioral_Therapy_Lotuswellness-1.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">
                  Cognitive-Behavioral Therapy
                </h2>
              </div>
              <p>
                (CBT) is a type of psychotherapeutic treatment that helps people
                learn how to identify and change the destructive or disturbing
                thought patterns that have a negative influence on one’s
                behavior and emotions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* choose-area-end */}
    {/* about-area */}
    <section className="about__area-eight">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <div className="about__img-wrap-seven">
              <img
                src={require ("./assets/img/images/Cognitive_Behavioral_Therapy_Lotuswellness-1.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow"> Contingency Management</h2>
              </div>
              <p>
                In Recovery medicine, a treatment plan that gives immediate
                rewards for desired changes in behavior. It is based on the
                principle that if a good behavior is rewarded, it is more likely
                to be repeated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about-area-end */}
    {/* choose-area */}
    <section className="choose__area-five">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="choose__img-wrap-five">
              <img
                src={require ("./assets/img/images/Rational_emotive_Behaviour_Therapy_-REBT-_Lotuswellnessrehab-1.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">
                  Rational emotive Behaviour Therapy ( REBT )
                </h2>
              </div>
              <p>
                (REBT) is a type of therapy introduced by Albert Ellis in the
                1950s. It’s an approach that helps you identify irrational
                beliefs and negative thought patterns that may lead to emotional
                or behavioral issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* choose-area-end */}
    {/* about-area */}
    <section className="about__area-eight">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <div className="about__img-wrap-seven">
              <img
                src={require ("./assets/img/images/Motivational_Enhancement_Therapy_Lotusrehabcoimbatore-1.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow"> Motivational Enhancement Therapy</h2>
              </div>
              <p>
                (MET) is a therapeutic approach aimed at helping individuals
                identify and resolve ambivalence regarding alcohol and other
                drug use. Also referred to as motivational interviewing, MET
                focuses on increasing motivation and setting goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about-area-end */}
    {/* choose-area */}
    <section className="choose__area-five">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="choose__img-wrap-five">
              <img
                src={require ("./assets/img/images/Dialectical_behaviour_therapy_Lotusrehabcoimbatore-1.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">
                  Dialectical Behaviour Therapy
                </h2>
              </div>
              <p>
                (DBT) is a type of talking therapy. It’s based on cognitive
                behavioural therapy (CBT), but it’s specially adapted for people
                who feel emotions very intensely. The aim of DBT is to help you
                Understand and accept your difficult feelings and help you learn
                skills to manage them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* choose-area-end */}
    {/* about-area */}
    <section className="about__area-eight">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <div className="about__img-wrap-seven">
              <img
                src={require ("./assets/img/images/MultiDimensional_Family_Therapy_Lotusrehabcoimbatore-1.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow">MultiDimensional Family Therapy</h2>
              </div>
              <p>
                ( MDFT ) is a comprehensive family and community-based therapy
                for adolescents with drug abuse problems. The model focuses on
                the relevant social and emotional needs at different stages in
                adolescent development. It is designed to treat both addictive
                and antisocial behaviour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about-area-end */}
    {/* choose-area */}
    <section className="choose__area-five">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="choose__img-wrap-five">
              <img
                src={require ("./assets/img/images/Integrative_Therapy_Lotuswellnessrehabcoimbatore-1.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">Integrative Therapy</h2>
              </div>
              <p>
                Integrative therapy is an individualized, holistic approach to
                therapy that combines ideas and techniques from different
                therapeutic schools of thought depending on the unique needs of
                a given client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* choose-area-end */}
    {/* about-area */}
    <section className="about__area-eight">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <div className="about__img-wrap-seven">
              <img
                src={require ("./assets/img/images/Person_Centred_Therapy_Lotuswellnessrehab-1.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow">Person Centred Therapy</h2>
              </div>
              <p>
                Client centered therapy is a non-directive approach to talk
                therapy. It requires the client to actively take the reins
                during each therapy session, while the therapist acts mainly as
                a guide or a source of support for the client. “Person centered
                therapy allows the client to steer the ship.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about-area-end */}
    {/* choose-area */}
    <section className="choose__area-five">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="choose__img-wrap-five">
              <img src={require ("./assets/img/images/dancemovementtherapy.jpg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">
                  Dance Movement Therapy
                </h2>
              </div>
              <p>
                Dance/movement therapy (DMT) is defined as the psychotherapeutic
                use of movement to promote emotional, social, cognitive, and
                physical integration of the individual, for the purpose of
                improving health and well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* choose-area-end */}
    {/* about-area */}
    <section className="about__area-eight">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <div className="about__img-wrap-seven">
              <img src={require ("./assets/img/images/pranicpsychotherapy.jpg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow"> Pranic Psychotherapy</h2>
              </div>
              <p>
                Pranic Psychotherapy is valuable in treating psychological
                issues such as anxiety, fear, trauma, stress, phobias, obsessive
                and compulsive reactions, depression and suicidal tendencies, as
                well as drug addiction and alcoholism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about-area-end */}
    {/* choose-area */}
    <section className="choose__area-five">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="choose__img-wrap-five">
              <img src={require ("./assets/img/images/music-therapy.jpg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title"> Music Therapy</h2>
              </div>
              <p>
                Music therapy at Lotus is a therapeutic approach that uses the
                natural mood-lifting properties of music to help people improve
                their mental health and overall well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* choose-area-end */}
    {/* about-area */}
    <section className="about__area-eight">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <div className="about__img-wrap-seven">
              <img src={require ("./assets/img/images/93944692.jpg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow">
                  {" "}
                  Pure Bliss - Aromatherapy Enhancing well-being through
                  essential oils
                </h2>
              </div>
              <p>
                Aromatherapy uses aromatic essential oils to enhance physical
                and emotional health. It may help manage pain, ease digestion,
                boost relaxation, improve mood, and relieve menstrual symptoms,
                among other benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about-area-end */}
    {/* choose-area */}
    <section className="choose__area-five">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="choose__img-wrap-five">
              <img src={require ("./assets/img/images/pressure.jpg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">
                  {" "}
                  Acupuncture - A Healing Art
                </h2>
              </div>
              <p>
                Acupuncture points are believed to stimulate the central nervous
                system. This, in turn, releases chemicals into the muscles,
                spinal cord, and brain. These biochemical changes stimulate the
                body's natural healing abilities and promote physical and
                emotional well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* choose-area-end */}
    {/* about-area */}
    <section className="about__area-eight">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <div className="about__img-wrap-seven">
              <img
                src={require ("./assets/img/images/Relapse_Management_Program_Lotusrehab-1.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow"> Relapse Management Program</h2>
              </div>
              <p>
                The relapse prevention program at lotus essentially covers four
                major areas: stabilization, insight into the pattern of relapse,
                developing a recovery plan, and strengthening social support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about-area-end */}
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
</>


    </main>
    <Foot />
   </div>

  );
}

export default SchoolOfTherapy;
