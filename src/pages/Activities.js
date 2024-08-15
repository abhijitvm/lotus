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





function Activities() {
    
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
    <main className="fix">
  {/* breadcrumb-area */}
  <section
    className="breadcrumb__area breadcrumb__bg"
    style={{backgroundImage: 'url(' + require('./assets/img/banner/buddha.jpeg') + ')'}}
  >
    <div className="container">
      <div className="row">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-40">
              <span className="sub-title">Lotus wellness Center</span>
              <h1>
                <font color="#ffffff">Activities</font>
              </h1>
              <h1>
                <font color="#ffffff">"Be A Motivation"</font>
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
          <h1 className="title mb-15">Wellness Offerings At Lotus</h1>
          <p>“ANCIENT WISDOM FOR MODERN WELLNESS”</p>
          <p>
            The Vedas, meaning “knowledge,” are the oldest texts of Hinduism.
            They are derived from the ancient Indo-Aryan culture of the Indian
            Subcontinent and began as an oral tradition that was passed down
            through generations before finally being written in Vedic Sanskrit
            between 1500 and 500 BCE (Before Common Era). We at lotus use this
            ancient knowledge towards attaining Modern Wellness. Lotus is a kind
            of Veda Wellness World . We offer an extensive variety of therapies
            to help you discover the mix that works best to keep you healthy and
            sober. We believe a life free of your addictions is a Bliss. And
            because supportive relationships are important, we also help you
            develop a strong recovery…
          </p>
        </div>
        <div className="col-lg-7 mb-30 position-relative">
          <img
            src="assets/img/home6/icon-square.svg"
            className="shape-top-right"
          />
          <div className="box-video">
            <img src={ require("./assets/img/banner/buddha.jpeg")} />
            <a
              href="https://www.youtube.com/watch?v=eFpLDDgE76s&ab_channel=LotusWellnessandRehabilitationCenter"
              className="popup-youtube bnt-play"
            >
              <img src="assets/img/home6/play.svg" />
            </a>
          </div>
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
            <img src="assets/img/images/wellness-700x460.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__content-seven">
            <div className="section-title mb-25">
              <span className="sub-title" />
              <h2 className="title wow">Wellness</h2>
            </div>
            <p>
              Our holistic wellness offerings strengthen your addiction
              treatment plan by teaching you ways to cultivate total wellness ⎼
              mind, body, and spirit. A variety of evidence-based, alternative
              treatments help you manage withdrawal, tackle your doubts and
              fears, and embrace change, so you can begin to redefine what it
              truly means to live a healthy life free from drugs and alcohol.
              Lotus serves as The Dawn Rehab for those seeking a new dawn in
              their lives.
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
            <img src="assets/img/images/pressure.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="choose__content-five">
            <div className="section-title mb-30 tg-heading-subheading animation-style3">
              <span className="sub-title" />
              <h2 className="title tg-element-title">Acupressure</h2>
            </div>
            <p>
              Our acupressure team has often had the pleasure of witnessing
              clients’ healing process through the use of acupuncture. Even
              clients who initially expressed doubts as to its efficiency have
              noted the many benefits, such as alleviation of anxiety,
              depression, and withdrawal symptoms. Acupressure has helped
              clients to get the most out of their Addiction treatment plan and
              recovery.
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
            <img src="assets/img/images/trekking-700x394.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__content-seven">
            <div className="section-title mb-25">
              <span className="sub-title" />
              <h2 className="title wow">Adventure Therapy</h2>
            </div>
            <p>
              Addressing certain feelings or traumas of the past in a
              traditional therapy setting can be challenging. Through
              experiential activities at Lotus, you stretch beyond your comfort
              zone and build confidence in your abilities to surmount any
              challenges that may arise in your recovery journey. Freedom from
              your Alcohol and Drug Addiction begins here…
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
            <img src="assets/img/images/fitness-700x394.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="choose__content-five">
            <div className="section-title mb-30 tg-heading-subheading animation-style3">
              <span className="sub-title" />
              <h2 className="title tg-element-title">
                Exercise &amp; Movement
              </h2>
            </div>
            <p>
              Regular physical activity can help alleviate the impact Alcohol or
              Drug Addiction have had on your mind and body by improving
              cardio-vascular health, stimulating your immune system, and
              lessening feelings of depression. Our exercise and movement
              therapies will not only help you get back in shape but help to
              release endorphins, positively altering your brain chemistry and
              giving you a more positive outlook on life.
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
            <img src="assets/img/images/cardio-700x525.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__content-seven">
            <div className="section-title mb-25">
              <span className="sub-title" />
              <h2 className="title wow"> Cardio And Weight Training</h2>
            </div>
            <p>
              At Fitness Hub, our gym at Lotus a Series of endurance workouts
              and muscle-building exercises to help strengthen your body and
              improve your overall physical health are provided.
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
            <img src="assets/img/images/yoga-700x466.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="choose__content-five">
            <div className="section-title mb-30 tg-heading-subheading animation-style3">
              <span className="sub-title" />
              <h2 className="title tg-element-title">Yoga &amp; Meditation</h2>
            </div>
            <p>
              At Lotus, utmost importance is given for Yoga and Meditation.
              Sequence of postures and breathing exercises to unite your
              physical, mental, and spiritual self in order to strengthen total
              wellness is given every morning. All guests are encouraged to
              participate in Abhasa. Abhasa in Sanskrit means “Constant
              Exercise”. It is a practice that brings stillness to one’s mind
              and which when practiced helps everybody recover from any form of
              addiction and mental health disorders.
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
            <img src="assets/img/images/expresthr-700x525.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__content-seven">
            <div className="section-title mb-25">
              <span className="sub-title" />
              <h2 className="title wow"> Expressive Therapies</h2>
            </div>
            <p>
              Often, painful feelings and trauma associated with Alcoholism,
              Drug Abuse and Addiction are repressed, preventing you to progress
              in your recovery. Our expressive therapies help you tap into
              subconscious emotions, allowing you to more easily process your
              thoughts and gain deeper self-awareness.
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
            <img src="assets/img/images/art-700x465.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="choose__content-five">
            <div className="section-title mb-30 tg-heading-subheading animation-style3">
              <span className="sub-title" />
              <h2 className="title tg-element-title">Art Therapy</h2>
            </div>
            <p>
              At lotus, Art Therapy for your Addiction Recovery and Mental
              Health issues is provided. It involves Emotional exploration and
              personal fulfillment through art therapy techniques including
              drawing, collages, and hands-on crafts. People suffering from
              Depression are known to Benefit immencely.
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
            <img src="assets/img/images/pranic_healing.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__content-seven">
            <div className="section-title mb-25">
              <span className="sub-title" />
              <h2 className="title wow"> Pranic Healing</h2>
            </div>
            <p>
              Pranic Healing is an energy “no-touch” healing system based on the
              fundamental principle that the body has the innate ability to heal
              itself. Pranic Healing utilizes “life force,” “energy,” or prana
              to accelerate the body’s inborn ability to heal itself.
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
            <img src="assets/img/images/healthyliving-700x461.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="choose__content-five">
            <div className="section-title mb-30 tg-heading-subheading animation-style3">
              <span className="sub-title" />
              <h2 className="title tg-element-title">Healthy Living</h2>
            </div>
            <p>
              During active addiction, self-care suffers tremendously.
              Relearning to make your physical health and mental well-being a
              priority is essential to sustainable recovery. At Lotus, Our
              healthy living workshops provide you with knowledge and tools to
              develop holistic wellness and create healthy lifestyle routines.
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
            <img src="assets/img/images/sleep-700x394.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__content-seven">
            <div className="section-title mb-25">
              <span className="sub-title" />
              <h2 className="title wow"> Sleep Education</h2>
            </div>
            <p>
              The Idea of Sleep Education at Lotus is to help one achieve The
              Alpha state of Mind. By this , we mean a state of mind where you
              reach a very relaxed state while awake. Your brain begins to emit
              alpha waves instead of beta, which is what you emit when you’re
              fully awake. Lotus is a kind of Alpha Healing Centre where Tips
              and practices to promote deep relaxation and enhance sound sleep
              are provided allowing you to sleep better and longer while in
              addiction treatment and there after.
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
              src="assets/img/images/nutritionphilosophy_detailfeature-700x400.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="choose__content-five">
            <div className="section-title mb-30 tg-heading-subheading animation-style3">
              <span className="sub-title" />
              <h2 className="title tg-element-title">Nutrition Education</h2>
            </div>
            <p>
              At Lotus we Emphasize the importance of Healthy Nutrition. Food
              From Annapurna, Our kitchen mainly consists of vegetables, fruits,
              whole grains, and fat-free or low-fat dairy products. It Includes
              lean meats, poultry, fish, beans, eggs, and nuts. And Limits
              saturated and trans fats, sodium, and added sugars. We believe, we
              are what we eat. And we ought to Eat Healthy to stay Healthy…
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* choose-area-end */}
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


   </main>
   <Foot />
   </div>

  );
}

export default Activities;
