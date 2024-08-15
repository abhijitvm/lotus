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





function Contact() {
    
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
                <font color="#ffffff">Contact Us</font>
              </h1>
              <h1>
                <font color="#ffffff">"Recovery Begins Here"</font>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* breadcrumb-area-end */}
  {/* breadcrumb-area-end */}
  {/* contact-area */}
  <section className="contact__area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="contact-map">
            <iframe src="https://maps.google.com/maps?q=Lotus+rehab+pollachi&t=&z=13&ie=UTF8&iwloc=&output=embed" />
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="contact__content">
            <div className="section-title mb-35">
              <h2 className="title">Contact Lotus Wellness</h2>
              <p>
                Lotus has set the standard for holistic, Advanced 12 step &amp;
                one-on-one addiction treatment. We are standing by and ready to
                customize a treatment program just for you. Call us anytime or
                fill out the form below to get started.
              </p>{" "}
            </div>
            <div className="contact__info">
              <ul className="list-wrap">
                <li>
                  <div className="icon">
                    <i className="flaticon-pin" />
                  </div>
                  <div className="content">
                    <h4 className="title">Address</h4>
                    <p>
                      Lotus (Wellness And Rehabilitation Center) #141/1b ,
                      142/1b, Sai Ram Nagar, Zamin Uthukuli, Pollachi,
                      Coimbatore – 642004.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="flaticon-phone-call" />
                  </div>
                  <div className="content">
                    <h4 className="title">Phone</h4>
                    <a href="tel:7339062555">(+91)7339062555</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="flaticon-mail" />
                  </div>
                  <div className="content">
                    <h4 className="title">E-mail</h4>
                    <a href="mailto:info@lotuswellness.life">
                      info@lotuswellness.life
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="contact__form-wrap">
            <h2 className="title">Give Us a Message</h2>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form id="contact-form" action="#.php" method="POST">
              <div className="form-grp">
                <textarea
                  name="message"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-grp">
                    <input type="text" name="name" placeholder="Name" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-grp">
                    <input type="email" name="email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-grp">
                    <input type="number" name="phone" placeholder="Phone" />
                  </div>
                </div>
              </div>
              <div className="form-grp checkbox-grp">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <button type="submit" className="btn">
                Submit post
              </button>
            </form>
            <p className="ajax-response mb-0" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* contact-area-end */}
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

export default Contact;
