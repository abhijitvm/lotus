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





function Detoxification() {
    
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
                  <font color="#ffffff">Detoxification Treatment</font>
                </h1>
                <h1>
                  <font color="#ffffff">"Recharge Your Life"</font>
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
                  src={require ("./assets/img/bg/detoxificationtreatmentincoimbatore-1536x864.jpg")}
                  alt=""
                />
              </div>
              <div className="services__details-content">
                <h4 className="">
                  What is the best definition of detoxification?
                </h4>
                <p>
                  Detoxification is a treatment that is intended to remove
                  poisonous or harmful substances from your body.
                </p>
                <h4 className="">What are the 3 methods of detoxification?</h4>
                <p>
                  The detoxification system is defined by three phase pathways:
                  Phase I: Bioactivation. Phase II: Conjugation. Phase III:
                  Transport.
                </p>
                <h4 className="">What is the process of detoxification?</h4>
                <p>
                  Although promoted as a weight loss program, as you can see,
                  detox is so much more. This full-body reset helps boost
                  energy, improve mental clarity, reduce hunger and cravings,
                  minimize aches and pain, rebalance hormones, restore sleep
                  cycles, support digestion and strengthen the immune system.
                </p>
                <h4 className="">How Does Detoxification Work?</h4>
                <p>
                  Basically, detoxification means cleansing the blood. This is
                  done by removing impurities from the blood in the liver, where
                  toxins are processed for elimination. The body also eliminates
                  toxins through the kidneys, intestines, lungs, lymphatic
                  system, and skin during a body detox.
                </p>
                <h4 className="">
                  What is Detoxification and why it is important?
                </h4>
                <p>
                  Detoxification is a process to get your body rid of various
                  toxins. It aids in strengthening the immune system, rejuvenate
                  skin and boost mental health, amongst many other health
                  benefits. Detoxifying brings balance back to your life and
                  helps your system function correctly.
                </p>{" "}
              </div>
              <div className="services__details-thumb">
                <h4 className="">
                  Which organ is responsible for detoxification?
                </h4>
              </div>
              <div className="services__details-inner">
                <div className="row gutter-24 align-items-center">
                  <div className="col-44">
                    <div className="services__details-inner-img">
                      <img
                        src="assets/img/bg/detoxtreatmentincoimbatore-3-300x300.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-56">
                    <div className="services__details-inner-content">
                      <h4 className="">The liver</h4>
                      <p>
                        For example, the liver is mainly responsible for the
                        biotransformation/detoxification of xenobiotics and
                        endogenous toxic substances, while the kidney is mainly
                        responsible for the elimination of toxic substances.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="services__details-content">
                <h4 className="">
                  What is the detoxification system in the human body?
                </h4>
                <p>
                  Digestive System can detoxify by eliminating toxic foods, by
                  either vomiting or diarrhea. Kidneys detoxify by secreting
                  toxins or filtering toxins out of the blood into urine. Liver
                  detoxifies by changing the chemical nature of many toxins.
                  Kidney and liver are especially important.
                </p>
                <h4 className="">What are examples of detox?</h4>
                <p>
                  These include:
                  <br />
                  • Fasting.
                  <br />
                  • Drinking only juices or similar beverages.
                  <br />
                  • Eating only certain foods.
                  <br />
                  • Using dietary supplements or other commercial products.
                  <br />
                  • Using herbs.
                  <br />• Cleansing the colon (lower intestinal tract) with
                  enemas, laxatives, or colon hydrotherapy (also called “colonic
                  irrigation” or “colonics”
                </p>
                <h4 className="">What is the best detoxing method?</h4>
                <p>
                  The Most Common Ways to Detox Drinking fresh fruit and
                  vegetable juices, smoothies, water, and tea. Drinking only
                  specific liquids, such as salted water or lemon juice.
                  Eliminating foods high in heavy metals, contaminants, and
                  allergens. Taking supplements or herbs.
                </p>
                <h4 className="">What are the benefits of detoxification?</h4>
                <p>
                  Although promoted as a weight loss program, as you can see,
                  detox is so much more. This full-body reset helps boost
                  energy, improve mental clarity, reduce hunger and cravings,
                  minimize aches and pain, rebalance hormones, restore sleep
                  cycles, support digestion and strengthen the immune system
                </p>
                <h4 className="">What are the effects of detoxing?</h4>
                <p>
                  The diverse list of detox symptoms includes — but isn’t
                  limited to! — fatigue, headaches, body aches, nausea, brain
                  fog and irritability. You may also experience acne or skin
                  irritation because your skin is a large exit pathway for
                  toxins
                </p>
                <h4 className="">What are the 5 Detox organs?</h4>
                <p>
                  The 5 organs in charge of the elimination of toxins are also
                  called organs of detox, or emunctory, or filter organs
                  including the liver, intestines, lungs, kidneys and skin
                </p>
                <h4 className="">How many days can you Detox the body body?</h4>
                <p>
                  Detoxing from alcohol or drugs involves removing toxic
                  substances from the body while managing the withdrawal
                  symptoms that occur simultaneously. Detoxing typically takes
                  three to ten days. However, a more severe addiction can extend
                  detox by several weeks or even months.
                </p>
                <h4 className="">What is Ayurvedic detox ?</h4>
                <p>
                  The traditional Ayurvedic detox involves herbs, supplements,
                  purges, enemas, bloodletting, and a dietary regimen, as well
                  as stress-relieving lifestyle practices like meditation and
                  massage
                </p>
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

export default Detoxification;
