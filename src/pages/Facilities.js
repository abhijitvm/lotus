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





function Facilities() {
    
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
    <section
      className="breadcrumb__area breadcrumb__bg"
       style={{backgroundImage: 'url(' + require('./wp-content/uploads/2023/02/lotusrehabfacilities.jpg') + ')'}}
    >
      <div className="container">
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-40">
                <span className="sub-title">Lotus wellness Center</span>
                <h1>
                  <font color="#ffffff">Facilities</font>
                </h1>
                <h1>
                  <font color="#ffffff">"Facilities That Inspire"</font>
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
              <img
                src={require ("./wp-content/uploads/2023/01/lotuswellnessannapoornakitchen.jpg") }
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow">Annapurna- God’s own kitchen</h2>
              </div>
              <p>
                Named after the Hindu Goddess of Food &amp; Nourishment, ‘Farm
                to Table’ and ‘Ingredients driven’ is how you describe our
                homely kitchen at Lotus. It flaunts a casual yet chic setting;
                it’s easy going and friendly vibe is unmistakable. The Market
                Fresh, Healthy &amp; Tasty menu, changes daily and does
                everything in its power to satisfy your cravings.
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
                <span className="sub-title">
                  Where every flavor tells a story
                </span>
                <h2 className="title tg-element-title">
                  Divine Dines - Lotus Dining
                </h2>
              </div>
              <p>
                In our bid to deliver authentic, undiluted experiences, Devine
                Dines is curated to offer a unique regional home style dining
                experience. Always prepared with a local touch, the home-style
                cooking ensures that you maintain good health throughout your
                stay. And at the same time it gives you the opportunity to
                dabble in the local delicacies that are so very tasty and
                healthy
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
              <img src={require ("./assets/img/images/lotus-thamarai-spa.jpeg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow"> Thamarai – The Spa </h2>
              </div>
              <p>
                Thamarai in Tamil language means Lotus flower, The pure and
                lovely. It is a traditional Ayurvedic Therapy Center where all
                our guests can unwind both Body and mind . Our Therapists will
                help you Recover, Rejuvenate and Revive.
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
              <img src={require ("./assets/img/images/lotusplan.jpg") } alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">
                  Nalanda – Interactive Learning Center
                </h2>
              </div>
              <p>
                Named after the ancient undisputed seat of learning, Nalanda was
                known for Diversity, a knowledge ecosystem thriving on shared
                creation of new knowledge and an International outlook . It’s a
                perfect LearningScape for learning, collaboration and play .
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
                src={require ("./assets/img/images/rehabinindia-lotuswellness-700x343.png")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow">
                  {" "}
                  Nine Rivers- Bespoke Designed Guest Suites
                </h2>
              </div>
              <p>
                Have the ultimate experience at our Eco friendly boutique
                Rehab’s suites! Our Nine suites named after the Nine sacred life
                giving rivers of India exemplify sustainable Luxury Recovery.
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
              <img src={require ("./assets/img/images/lotus-recreation.jpeg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">
                  {" "}
                  Champions – The Recreation Center
                </h2>
              </div>
              <p>
                “Champions are not born. They’re made.” Our Recreation Center
                has been aptly named “Champions” , so as to remind and bring out
                the champion residing within each of our clients.
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
                src={require ("./assets/img/images/mostcarringrehabincoimbatore-min-700x469.jpg") }
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow">Fitness Hub – The Gym</h2>
              </div>
              <p>
                ‘Look Fit , Feel Fit ‘ is what we strive for at Fitness Hub.
                Complete with a Spa , Massage Therapists and Personal Trainers ,
                you’re practically treated like royalty. It’s Ambience is sure
                to keep your energy levels up and increase your stamina .
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
                src={require ("./assets/img/images/bestrehabintamilnadu-700x394.jpg") }
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">
                  {" "}
                  Arts, Entertainment &amp; Recreation
                </h2>
              </div>
              <p>
                We offer a wide range of Indoor and Outdoor Games and Activities
                to meet the varied cultural, Entertainment and Recreational
                interests of our Guests so as to help them stay motivated and
                make them mentally and physically strong . They have the option
                of Gyming , reading , gardening, meditating, performing yoga and
                watching movies . These activities would help foster bonding
                among fellow inmates, put them at ease and help them in their
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
              <img
                src={require ("./assets/img/images/security-guard-lotuswellness-700x419.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow">
                  Master Security – 24/7 Total Protection
                </h2>
              </div>
              <p>
                Remaining safe is the number one priority for any of our family
                members. Lotus is a Safe house for all. We ensure all guests are
                100% safe physically , mentally and emotionally with 24/7 camera
                surveillance and highly trained Security Personnel.
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
                src={require ("./assets/img/images/bestluxuryrehabincoimbatore-700x389.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">
                  Round The Clock Support, Care &amp; Love
                </h2>
              </div>
              <p>
                Love All, Love is all in Lotus . We are a home like set up where
                every client is treated like Family . We only take a selected
                number of clients so as not to compromise on the personalised
                care . Our team of qualified experts are happy to offer their
                helpful hand and support 24/7 to help all heal and get back to a
                normal life .
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
              <img src={require ("./assets/img/images/lotus-wellness-library.jpeg") } alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow">
                  {" "}
                  The Lotus Library - Words That Transform
                </h2>
              </div>
              <p>
                Elegant and Charming, The Lotus Library is among our centre’s
                most popular spaces. It has a large collection of books and
                magazines that would help transform the lives of our guests.
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
                <h2 className="title tg-element-title">
                  Find Your Calm @ Lotus Garden
                </h2>
              </div>
              <p>
                It’s all about finding the calm in the chaos. Lotus is the ideal
                place for you to set peace of mind as ur highest goal and
                organise ur life around it .
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
                <span className="sub-title">
                  Love life, love water, the fountain of wellness is calling
                </span>
                <h2 className="title wow"> Fountain of Wellness</h2>
              </div>
              <p>
                The Fountain of Wellness sits behind Medicine Buddha at Lotus.
                It strives to create harmony and, through that, wellness for our
                guests who come here.
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
                  Pyramid of Hope @ Lotus
                </h2>
              </div>
              <p>
                Everything that is done in the world is done by hope . Once you
                choose hope anything is possible. The pyramid of hope at Lotus
                has been placed to create a positive vibe in you.
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
                <span className="sub-title">Unlock your wings</span>
                <h2 className="title wow"> Birds Corner @ Lotus</h2>
              </div>
              <p>
                The birds at Lotus inspire us in many ways. Freedom they say is
                actually a state of mind . They also say that If you want to fly
                , we should give up everything that weighs you down. It’s the
                perfect place for introspection and retrospection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about-area-end */}
    {/* about-area */}
    <section className="about__area-eight">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <div className="about__img-wrap-seven">
              <img
                src={require ("./assets/img/images/rehabinindia-lotuswellness-700x343.png")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow"> Pond of abundance @ Lotus</h2>
              </div>
              <p>
                True abundance isn’t based on our net worth, it’s based on our
                self worth . Abundance is not something we acquire. It is
                something we can tune into . The pond of abundance @ Lotus is
                the perfect place for you to tune yourself into abundance.
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
              <img src={require ("./assets/img/images/lotus-recreation.jpeg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">
                  Elegant Corners... Just 4 U
                </h2>
              </div>
              <p>
                The Elegant spaces at Lotus are perfect for one to come, sit,
                relax , think &amp; slow down the world for a second. U r
                welcome to live the life !
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
                src={require ("./assets/img/images/mostcarringrehabincoimbatore-min-700x469.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title">Perfect Your Serve</span>
                <h2 className="title wow">Table Tennis @ Lotus</h2>
              </div>
              <p>
                At Lotus , Happiness sometimes is no words at all. Just the
                sound of the TT ball. A Perfect Setting to Perfect your Serve .
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
                src={require ("./assets/img/images/bestrehabintamilnadu-700x394.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title">Practice makes</span>
                <h2 className="title tg-element-title"> Billiards @ Lotus</h2>
              </div>
              <p>
                Don't limit your challenges. Challenge your limits... This is an
                important learning by the pool table @ Lotus .
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
                src={require ("./assets/img/images/security-guard-lotuswellness-700x419.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title">Move must have a purpose</span>
                <h2 className="title wow">Chess @ Lotus</h2>
              </div>
              <p>
                Playing chess at lotus is all about learning strategies for
                professional or personal life . Having a purpose is the
                difference between making a living and making a life .
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
                src={require ("./assets/img/images/bestluxuryrehabincoimbatore-700x389.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">Path to Wellness</h2>
              </div>
              <p>
                The path to wellness at Lotus is Designed to educate and support
                you achieve Absolute Wellness. It Includes nutrition, body/mind
                stress reduction, goal setting exercises, and a daily plan to
                help you shift your habits to a more healthy and conscious
                lifestyle.
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
              <img src={require ("./assets/img/images/lotus-wellness-library.jpeg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title">Become competitive</span>
                <h2 className="title wow"> Baddy @ Lotus</h2>
              </div>
              <p>
                Baddy at Lotus is all about putting the bad in badminton. It’s
                about learning that if we dare to win, we should also dare to
                lose and much more .
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
                <span className="sub-title">Trust yourself</span>
                <h2 className="title tg-element-title">Carrom @ Lotus</h2>
              </div>
              <p>
                Playing carrom at Lotus , can be an important learning . It
                teaches us to trust ourself And , If life is carrom , then queen
                becomes aim. We must be Be focused like a striker and start the
                game of life .
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
                <h2 className="title wow">Experience Yoga @ Lotus</h2>
              </div>
              <p>
                Yoga is a mirror to look at ourselves from within. When you
                listen to yourself, everything comes naturally. It comes from
                inside, like a kind of will to do something. Try to be
                sensitive. That is yoga@Lotus
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
                <h2 className="title tg-element-title">Pebble walk @ Lotus</h2>
              </div>
              <p>
                Life is like walking on pebbles. There is no comfort. But it
                will strengthen you physically and mentally to manage life.
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
                <span className="sub-title">Lotus Cinema Club</span>
                <h2 className="title wow"> The ultimate movie night is here</h2>
              </div>
              <p>
                Lotus Cinema Club, promising a transformative cinematic affair
                with open-air screenings, discussions, and vibrant settings,
                redefining movie-watching with immersive experiences.
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

export default Facilities;
