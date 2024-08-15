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





function OtherAddiction() {
    
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
      style={{backgroundImage: 'url(' + require('./assets/img/banner/buddha.jpeg') + ')'}}
    >
      <div className="container">
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-40">
                <span className="sub-title">Lotus wellness Center</span>
                <h1>
                  <font color="#ffffff">Other Addictions We Treat</font>
                </h1>
                <br />
                <h1>
                  <font color="#ffffff">"Organise Your Life"</font>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* breadcrumb-area-end */}
    <div>.</div>
    {/* about-area */}
    <section className="about__area-eight">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <div className="about__img-wrap-seven">
              <img src={require ("./assets/img/bg/gambling-addiction.jpg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow">Gambling Addiction</h2>
              </div>
              <p>
                Compulsive gambling is the uncontrollable desire to gamble
                despite negative financial, emotional and interpersonal
                consequences. Activities that fall under the umbrella of
                gambling include playing casino slot machines and card tables,
                playing the lottery, betting on horses and entering raffles.
                Today, there is also a wide range of gambling games available
                online.Symptoms of gambling addiction include a fixating on
                gambling, experiencing financial debt or hardship related to
                gambling and making lifestyle accommodations to perpetuate
                gambling. Gambling addiction may begin when a person feels that
                they can quickly solve financial problems by gambling a small
                amount of money to win a large amount of money. Inevitably, a
                person loses money and feels that they have to win their losses
                back, initiating a vicious cycle.
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
                src={require ("./assets/img/bg/Sex_and_love_addiction-700x467.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">
                  Sex and Love Addiction
                </h2>
              </div>
              <p>
                Sex addiction and love addiction are disorders related to
                intimacy. Sex addiction is the compulsive desire to obtain
                sexual arousal and characterized by a fixation on sexual
                activities that may be used to alleviate stress or heighten
                mood. A person with sex addiction cannot control their desires,
                may engage in unsafe sex practices and has extreme thoughts
                about partners of interest and sexual activity. Love addiction
                is a dysfunctional compulsion to pursue romantic love and
                romantic satisfaction. A person with love addiction believes
                that love will solve everything and seeks romantic fulfillment
                to bolster their self-worth and sense of security. Often, this
                leads people to engage in unhealthy, self-defeating relationship
                dynamics. Lotus Rehabilitation Centre offers a Highly
                Confidential love and Sex De Addiction program which is very
                effective.
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
                src={require ("./assets/img/bg/Addictions_internet-addiction-01.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow"> Internet Addiction</h2>
              </div>
              <p>
                Internet addiction is classified as extreme internet use that
                gets in the way of a person’s daily functioning. Internet
                addiction disrupts effective time management and can result in
                health and mental health consequences, including obesity, loss
                of sleep, depression and impaired social skills. Internet
                addiction was noted in the DSM-5 as a disorder that needs more
                research before it can be officially classified as a mental
                health condition. Lotus Luxury Rehab offers a 30 days
                Residential Internet De Addiction Treatment program that would
                help one overcome his or her Mobile or Internet Addiction.
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
              <img src={require ("./assets/img/bg/exercise-addiction-700x467.jpg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">Exercise Addiction</h2>
              </div>
              <p>
                Exercise addiction is a detrimental obsession with health,
                fitness, and exercise. Exercise addiction can result from eating
                or body image disorders. Exercise addiction may be related to a
                dependency on the pleasure response people experience after
                exercising as the body releases feel-good endorphins. Excessive
                weight loss, injury, and poor mental health are potential
                outcomes of exercise addiction. Lotus Wellness, Coimbatore is
                India’s Best Ultra Luxurious Rehab. The Exercise De Addiction
                offered here is Top rated in India.
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
              <img src={require ("./assets/img/bg/shopping-addiction-700x460.jpg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow"> Shopping Addiction</h2>
              </div>
              <p>
                Shopping Addiction is a compulsive spending problem that is
                impulsive, excessive and out of control. Shopping addiction can
                cause significant impairment in a person’s life, family, and
                finances. Individuals with a shopping addiction experience a
                euphoric high from shopping, which serves to reinforce and
                encourage the behavior. However, because they usually feel
                remorseful and uncomfortable after a spree, people with shopping
                addiction tend to be secretive about their shopping habits.
                People with shopping addictions may shop to boost their
                self-esteem or combat other mental health conditions, such as
                anxiety or depression. Lotus Wellness, Coimbatore is a World
                class Addiction Treatment Centre . The De Addiction program
                offered here for Shopping Addiction is most sort After. And, it
                is highly effective.
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
                src={require ("./assets/img/bg/Screenshot-2019-06-07-at-12.17.33-700x420.png")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">Work Addiction</h2>
              </div>
              <p>
                Work addiction occurs when a person works compulsively to reduce
                apprehension and feelings of guilt they experience when they are
                not working. Work addiction is characterized by extreme loyalty
                and excessive devotion to work, often to the detriment of an
                individual’s personal life and physical and emotional
                well-being. Risk factors that can lead to work addiction include
                financial stress, fear of being laid off, or personal motivation
                to achieve a certain level of achievement or success. Lotus De
                Addiction Centre, Coimbatore is known to offer the best
                Work-Life Balance Workshops that would help one attain the Right
                Balance between one’s Professional ,Personal, Social and Family
                life.
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
                src={require ("./assets/img/bg/porn-addiction-980x711-1-700x508.jpeg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow"> Porn Addiction</h2>
              </div>
              <p>
                Porn Addiction is another compulsive behavior where an undue
                amount of time is spent watching pornography instead of
                socializing with others or completing daily activities. People
                with porn addiction often feel embarrassed and ashamed about
                their habit, but continue to view porn despite any negative
                consequences that it has on their life. Lotus is a Inpatient
                Addiction Treatment Rehab that offers a 30 Days De Addiction
                program for Porn Addiction.
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
                src={require ("./assets/img/bg/5e1e2d0468ece.image_-700x467.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content-five">
              <div className="section-title mb-30 tg-heading-subheading animation-style3">
                <span className="sub-title" />
                <h2 className="title tg-element-title">Food addiction</h2>
              </div>
              <p>
                Food addiction can be classified as a process addiction, as well
                as an eating disorder. Food addiction occurs when a person
                cannot stop eating despite negative consequences such as
                unhealthy weight gain or other health problems. An eating
                addiction can result in cravings, tolerance, and withdrawal.
                People with an eating addiction may use food to alleviate
                negative emotions and feelings of stress. Lotus has got a in
                house spa by the name Thamarai, Which in Tamil Language means
                Lotus. There are very effective Weight Loss programs offered For
                guests with Food Addiction here. There is also a World Class Gym
                by the name “Fitness Hub”. Along with the right guidance
                available at the Center, One Could easily Loose the Extra
                Weight.
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
                src={require ("./assets/img/bg/video-game-addiction-700x467.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow"> Video game addiction</h2>
              </div>
              <p>
                Video game addiction is a pattern of gaming habits that involve
                a lack of impulse control and continuance of gaming despite dire
                consequences on mental, physical or emotional health. In other
                words, video game addiction involves compulsive game playing.
                Lotus Wellness Rehab offers a 30 Days Residential Video game De
                Addiction program that is very rewarding.
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
              <img src={require ("./assets/img/bg/wellnessrehabincovai-lotus.jpg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-seven">
              <div className="section-title mb-25">
                <span className="sub-title" />
                <h2 className="title wow">The Lotus Difference </h2>
              </div>
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
                • We don’t use degrading labels like addict or alcoholic to
                define you.
                <br />
                • We heal the underlying conditions that cause addiction.
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
                For Most clients Lotus is one of the best experiences of their
                life and we feel confident you will feel the same. The healing
                that takes place here is hard to put into words. Once you
                arrive, we know you will see what makes this such a special
                place. We honor the opportunity to care for you.
              </p>
            </div>
          </div>
        </div>
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
  <div>.</div>
</>

    </main>
    <Foot />
   </div>

  );
}

export default OtherAddiction;