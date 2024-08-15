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





function Collaboration() {
    
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
                <font color="#ffffff">Collaboration</font>
              </h1>
              <h1>
                <font color="#ffffff">
                  "One Team - One Dream - Recovery @ Lotus"
                </font>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* breadcrumb-area-end */}
  <div>
    <br />
  </div>
  {/* about-area */}
  <section className="about__area-eight">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 col-md-9 order-0 order-lg-2">
          <div className="about__img-wrap-seven">
            <img src="assets/img/bg/ramakrishna-300x225.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__content-seven">
            <div className="section-title mb-25">
              <span className="sub-title">
                "This is our idea of collaboration at Lotus"
              </span>
              <h2 className="title wow">Sri Ramakrishna Hospital</h2>
            </div>
            <p>
              Sri Ramakrishna Hospital is the Best Multispeciality Hospital In
              Coimbatore that has attained an iconic reputation since its
              inception in 1975.
            </p>
            <p>
              It is a 1000 bedded Tertiary care centre . Situated on 18 acres of
              land right in the heart of Coimbatore city, this hospital has in
              many ways become a part of medical history. In fact, it has been
              an integral part of the healthcare revolution of modern India.
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
            <img src="assets/img/bg/lotus-300x225.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="choose__content-five">
            <div className="section-title mb-30 tg-heading-subheading animation-style3">
              <h2 className="title tg-element-title">Pollachi Itineraries</h2>
            </div>
            <p>
              The Perfect travel partner to explore new landscapes and indulge
              in authentic ways to experience the rich , bio-cultural diversity
              of Pollachi and the Anamalais.
            </p>
            <p>
              Their Itineraries knit together Arts, Crafts, Culture, History,
              Nature and Adventure that are best experienced at an unhurried
              pace. You’re welcome to Collect your clues, unravel the mysteries
              and weave your own narrative.
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
            <img src="assets/img/bg/Lotus-Life.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__content-seven">
            <div className="section-title mb-25">
              <span className="sub-title" />
              <h2 className="title wow"> Lotus Life </h2>
            </div>
            <p>
              Lotus life is a national foundation dedicated to advancing the
              mental, social and spiritual health of our nation. Led by
              clinical, community, and policy innovators, the organisation
              brings an ecosystem approach to prevention, treatment, and
              recovery for mental health and substance misuse issues, while
              prioritizing an upstream focus on resilience and well-being in
              communities.
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
            <img src="assets/img/bg/ann-300x200.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="choose__content-five">
            <div className="section-title mb-30 tg-heading-subheading animation-style3">
              <span className="sub-title" />
              <h2 className="title tg-element-title">Anamalais Tea Trails</h2>
            </div>
            <p>
              Valparai dubbed ‘7th Heaven’ ,is a Beautiful hill station located
              3500 feet above sea level amidst mist shrouded mountains and
              terraced tea plantations Known for its cool climate and
              colonial-era bungalows. Each bungalow is unique and offers guests
              the non-hotel, private house ambience. This is the ideal setting
              for trekking and biking against the breathtaking backdrop of
              mountains, lakes, winding roads and waterfalls. If you prefer to
              unwind, observe life on a working tea estate while being pampered
              by your own butler this is the place to be..
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
              src="assets/img/bg/emeraldgreenspollachi-300x300.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__content-seven">
            <div className="section-title mb-25">
              <span className="sub-title" />
              <h2 className="title wow"> Emerald Greens</h2>
            </div>
            <p>
              Lotus Wellness is a proud member of Emerald Greens an initiative
              of Emerald group of Companies, Pollachi . Our aim is saving the
              planet , one tree at a time. We plant trees, educate our community
              on sustainable forestry and children on the environment. We have
              planted thousands of trees in and around pollachi under this
              initiative. “Each One , Plant One “ is our motto .
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
            <img src="assets/img/bg/Lotus-Health-Building.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="choose__content-five">
            <div className="section-title mb-30 tg-heading-subheading animation-style3">
              <span className="sub-title">The Heart Of Health Care</span>
              <h2 className="title tg-element-title">Lotus Health</h2>
            </div>
            <p>
              “Health is Wealth” . According to our Founder CEO Mrs Om Priya , A
              healthy community is a wealthy community. Lotus health is a pet
              project of hers that was born out of pure love to see a healthier
              Pollachi . Our flagship facility offers a complete range of
              products and services. We couple these offerings with a strong
              team of experienced Doctors, Pharmacists, Laboratory staff and
              field health workers who will deliver personalised services with a
              holistic approach to wellness for our patients.
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
            <img src="assets/img/bg/Lotus-lifeline.jpeg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__content-seven">
            <div className="section-title mb-25">
              <span className="sub-title">
                Air | Train | Road | Ambulance Services
              </span>
              <h2 className="title wow">Lotus Lifeline</h2>
            </div>
            <p>
              Provides the fastest and safest mode of transferring patients from
              their home to Lotus Wellness. Works with a mission to provide
              competent, innovative and accessible emergency medical services
              with ardent compassion.
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
            <img src="assets/img/bg/emrald-coconut.jpeg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="choose__content-five">
            <div className="section-title mb-30 tg-heading-subheading animation-style3">
              <span className="sub-title">Where Goodness grows </span>
              <h2 className="title tg-element-title">
                Emerald Coconut Gardens
              </h2>
            </div>
            <p>
              ECG is well known for its organic tasty Tender Coconuts that are
              nurtured and grown by nature. At lotus we make organic and natural
              food products a part of your life . Afterall , Healthy living
              starts with healthy eating.
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
            <img src="assets/img/bg/Lotus-foundation.jpeg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__content-seven">
            <div className="section-title mb-25">
              <span className="sub-title">
                Art | Culture | Heritage Conservation
              </span>
              <h2 className="title wow">Lotus Foundation</h2>
            </div>
            <p>
              India is a land of diverse cultures. It is of utmost importance to
              protect and promote its rich art, culture and heritage. Lotus
              Foundation strives to maintain the glorious heritage and composite
              culture of India. It works towards the protection, conservation
              and preservation of the country's tangible and intangible
              heritage.
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
            <img src="assets/img/bg/Emerald-Organic-Milk-Diary.jpeg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="choose__content-five">
            <div className="section-title mb-30 tg-heading-subheading animation-style3">
              <span className="sub-title">
                Happy Cow | Happy Milk | Happier You
              </span>
              <h2 className="title tg-element-title">
                Emerald Organic Milk Diary
              </h2>
            </div>
            <p>
              Our secret to great delicious and creamy milk is to get it out by
              nature’s own way. Our calves stay with their mothers and drink all
              the milk they want, before we milk what’s left. That means waiting
              until after the calves have had their fill before we start
              milking. Our Approach is low intensity, pasture-based farming that
              is kinder to mother earth and sustainable long-term. Maybe it’s
              knowing all this, that makes Lotus Milk taste so good.
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
            <img src="assets/img/bg/lotus-cricket.jpeg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__content-seven">
            <div className="section-title mb-25">
              <span className="sub-title">Elevate Your Game</span>
              <h2 className="title wow">Lotus Royals</h2>
            </div>
            <p>
              Lotus Royals is a professional cricket team based in Pollachi,
              India. The team competes in the Pollachi Premier League and other
              significant league tournaments. It is owned by Lotus Wellness
              &amp; Health.
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

export default Collaboration;
