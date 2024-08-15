import {Helmet} from "react-helmet";
import React,{useEffect,useRef, useState} from "react";
import slider from './assets/img/slider/lotuswellnessslider-luxuryrehabintamilnaduindia.jpg';
import bg from "./assets/img/bg/services_bg.jpg"
import './App.css';
import './assets/css/main.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// import Swiper styles
import 'swiper/css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Nav from './Nav';
import Foot from './Footer';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Outlet, Link } from "react-router-dom";
import ReactCurvedText from 'react-curved-text'; // You can also use <link> for styles




function Home() {
    
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
    
    <script src="./assets/js/ajax-form.js" type="text/jsx"/>
    <script src="./assets/js/wow.min.js" type="text/jsx"/>
    <script src="./assets/js/aos.js" type="text/jsx"/> 
    <script src="./assets/js/main.js" type="text/jsx" />
    </Helmet>
    <Nav />
    
    <main class="fix">
    
    

<section className="slider__area">
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
       
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
    
      
        <SwiperSlide>
        <img src={require('./assets/img/slider/lotuswellnessslider-luxuryrehabintamilnaduindia.jpg')}
                        />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('./assets/img/slider/buddha.jpeg')}
        />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('./assets/img/slider/enjoy-everyday.jpeg')}
        />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('./assets/img/slider/feellike-home.jpeg')}
        />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('./assets/img/slider/just-perfect.jpeg')}
        />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('./assets/img/slider/you-belong-here.jpeg')}
        />
        </SwiperSlide>
                
      </Swiper>
</section>	
   

<section id="about" className="about-area pt-120 pb-120">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="about-img-wrap">
          <div className="mask-img-wrap">
            
          </div>
          <div className="shape">
            <img
              src={ require("./assets/img/logo/lotuswellnessindiasfinestluxuryrehab.jpg")}
              alt=""
            />
          </div>
          <div className="experience-year">
            <div className="icon">
              <i className="flaticon-trophy" />
            </div>
            <div className="content">
              <h6 className="circle rotateme">Lotus - Wellness Center -</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-content">
          <div className="section-title mb-35 tg-heading-subheading animation-style3">
            <span className="sub-title">
              India's Finest Luxury Rehab &amp; Wellness Center
            </span>
            <h2 className="title tg-element-title">Who We Are </h2>
          </div>
          <p>
            Welcome to Lotus Wellness and Rehabilitation center. Lotus is a
            Holistic Luxury Rehab synonymous with style and impeccable love,
            care and support. Lotus Wellness is the top-rated Rehabilitation and
            De-Addiction treatment center in India.
          </p>
          <p>
            Sophisticated, yet cool, with Timeless style, it is the ideal place
            to recover. Recovery begins Here…
          </p>
          <p>
            Lotus is created to be a safe heaven where you can find recovery,
            peace, rest and happiness. We are committed to providing you the
            quality of treatment and care that we would want for our very own
            loved ones. We call this our “loved one standard of care.”
          </p>
          <p>
            Lotus is nestled amidst lush greenery in the picturesque town of
            Pollachi near Coimbatore at the foot hills of the magnificent
            Anamalais mountains in India. The Greenery, climate and pollution
            free environment are ideal for healing, recovery and wellness.
          </p>
          <div className="services-bottom-content">
           <Link to="/ourstory"> Read More</Link> 
          </div>
          <div className="about-shape-wrap">
            <img src="assets/img/images/about_shape03.png" alt="" />
            <img
              src={require ("./assets/img/images/about_shape04.png")}
              alt=""
              className="ribbonRotate"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="about-left-shape">
    <img src={ require ("./assets/img/images/about_shape02.png")} alt="" />
  </div>
</section>

  <section class="services-area services-bg" style={{backgroundImage: 'url(' + require('./assets/img/bg/services_bg.jpg') + ')'}}>
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-8">
                  <div class="section-title text-center mb-40 tg-heading-subheading animation-style3">
                      <span class="sub-title animate__pulse">ENCHANTING POLLACHI</span>
                      <h2 class="title tg-element-title animate__pulse">Home of Lotus</h2>
                  </div>
              </div>
          </div>
  
  
          <div class="services-item-wrap">
              <div class="row justify-content-center">
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                      <div class="services-item shine-animate-item">
                          <div class="services-thumb">
                              <a href="services-details" class="shine-animate">
                                <img src={require ("./assets/img/pollachi/1.jpg")} alt=""/>
                                </a>
                          </div>
                          <div class="services-content">
                              <div class="icon">
                                  <i class="flaticon-profit"></i>
              
                              </div>
                            <h4 class="title"><a href="services-details">Pollachi</a></h4>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                      <div class="services-item shine-animate-item">
                          <div class="services-thumb">
                              <a href="services-details" class="shine-animate"> <img src={require ("./assets/img/pollachi/2.jpg")} alt="" /></a>
                          </div>
                          <div class="services-content">
                              <div class="icon">
                                  <i class="flaticon-investment-1"></i>
                              </div>
                              <h4 class="title"><a href="services-details">Pollachi</a></h4>
                              
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                      <div class="services-item shine-animate-item">
                          <div class="services-thumb">
                              <a href="services-details" class="shine-animate"><img src={require ("./assets/img/pollachi/3.jpg")} alt="" /></a>
                          </div>
                          <div class="services-content">
                              <div class="icon">
                                  <i class="flaticon-pie-chart"></i>
                              </div>
                                <h4 class="title"><a href="services-details">Pollachi</a></h4>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                      <div class="services-item shine-animate-item">
                          <div class="services-thumb">
                              <a href="services-details" class="shine-animate">
                                <img src={require ("./assets/img/pollachi/4.jpg")} alt="" /></a>
                          </div>
                          <div class="services-content">
                              <div class="icon">
                                  <i class="flaticon-light-bulb"></i>
                              </div>
                              <h4 class="title"><a href="services-details">Pollachi</a></h4>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="services-bottom-content">
              <p>Empowering Businesses through Strategic Consulting With Us</p>
              <a href="services" class="btn">See All Services</a>
          </div>
      </div>
  </section>
  

  <section class="faqs__area-six" data-aos="fade-up" data-aos-duration="3000">
      <div class="circle animate__bounce animate__rotateOutDownLeft" data-parallax='{"x" : 100 , "y" : 100 }'>.</div>
      <div class="container">

 <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-8">
                  <div class="section-title text-center mb-40 tg-heading-subheading animation-style3">
       <h2 class="title tg-element-title">Addiction ends here @ Lotus</h2><br/>
                     <h1 class="sub-title"><span>A UNIQUE METHOD</span></h1>
         <h3>successful and proven concept focusing on underlying causes</h3>
                  </div>
              </div>
          </div>
          <div class="row align-items-center">
              <div class="col-lg-6 mb-30">
                  <div class="box-need-help">
                      <div class="block-faqs">
                          <div class="accordion wow fadeInUp" id="accordionFAQ">
                              <div class="accordion-item">
                                  <h5 class="accordion-header" id="headingOne">
                                      <button class="accordion-button text-heading-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          INDIVIDUAL CARE
                                      </button>
                                  </h5>
                                  <div class="accordion-collapse collapse" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
                                      <div class="accordion-body">Our rehabilitation programs are designed to treat clients with individual care and attention.</div>
                                  </div>
                              </div>
                              <div class="accordion-item">
                                  <h5 class="accordion-header" id="headingTwo">
                                      <button class="accordion-button text-heading-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          PRIVACY & DISCRETION
                                      </button>
                                  </h5>
                                  <div class="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
                                      <div class="accordion-body">We know that full recovery requires a connection as well as privacy. That is why we provide a space that is solely yours, in which you can unwind and connect with yourself.</div>
                                  </div>
                              </div>
                              <div class="accordion-item">
                                  <h5 class="accordion-header" id="headingThree">
                                      <button class="accordion-button text-heading-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                          COMPREHENSIVE CHECK-UP
                                      </button>
                                  </h5>
                                  <div class="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ">
                                      <div class="accordion-body">Your treatment begins with an extensive assessment and diagnosis of your presenting issues, which consists of a full-body medical check-up including laboratory, psychiatric, orthomolecular as well as a nutritional assessment.</div>
                                  </div>
                              </div>
            <div class="accordion-item">
                                  <h5 class="accordion-header" id="heading4">
                                      <button class="accordion-button text-heading-5 collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                          TAILORED PROGRAM TREATING ROOT CAUSES
                                      </button>
                                  </h5>
                                  <div class="accordion-collapse collapse" id="collapse4" aria-labelledby="heading4" data-bs-parent="#accordionFAQ">
                                      <div class="accordion-body">Your program is designed based on your personal needs. The team will exchange daily information and adjust the schedule as we go. Our therapists will work with you treating the root causes and not just the symptoms.</div>
                                  </div>
                              </div>
            <div class="accordion-item">
                                  <h5 class="accordion-header" id="heading5">
                                      <button class="accordion-button text-heading-5 collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                           BIOCHEMICAL RESTORATION
                                      </button>
                                  </h5>
                                  <div class="accordion-collapse collapse" id="collapse5" aria-labelledby="heading5" data-bs-parent="#accordionFAQ">
                                      <div class="accordion-body">Our biochemical imbalance can be affected by diet and stressful life events, but it often goes back to genetics and epigenetics. Our de-addiction centre does the specific biochemical laboratory testing to determine an individual’s biochemical imbalance. Combining the results of the lab tests with anamnestic information and clinical tests, we prescribe an individualized and compounded vitamin, mineral, nutrient protocol to help recover from various disease states.</div>
                                  </div>
                              </div>
            </div>
                          </div>
                      </div>
                  </div>

    
              <div class="col-lg-6 mb-30">
                  <div class="box-faq-right">
                      <div class="block-faqs">
                          <div class="accordion wow fadeInUp" id="accordionFAQ">
                              <div class="accordion-item">
                                  <h5 class="accordion-header" id="heading6">
                 <button class="accordion-button text-heading-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                                          HOLISTIC APPROACH
                                      </button>
                                  </h5>
                                  <div class="accordion-collapse collapse" id="collapse6" aria-labelledby="heading6" data-bs-parent="#accordionFAQ">
                                      <div class="accordion-body">The medical experts in our rehabilitation centre combine the best from general and alternative medicine to support you individually and provide complementary therapies enabling you to address problem areas and build a healthier lifestyle.</div>
                                  </div>
                              </div>
                              <div class="accordion-item">
                                  <h5 class="accordion-header" id="heading7">
                                      <button class="accordion-button text-heading-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                          LATEST TECHNOLOGY-BASED THERAPIES
                                      </button>
                                  </h5>
                                  <div class="accordion-collapse collapse" id="collapse7" aria-labelledby="heading7" data-bs-parent="#accordionFAQ">
                                      <div class="accordion-body">We use the latest cutting-edge technology-based therapies in our rehabilitation centre. Using therapies such as Neurofeedback and tDCS, we can track the biological patterns of your body, giving us valuable insight into your health and well-being as well support your brain and body performance and recovery.</div>
                                  </div>
                              </div>
                              <div class="accordion-item">
                                  <h5 class="accordion-header" id="heading8">
                                      <button class="accordion-button text-heading-5 collapsed text-heading-5 type=" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                          24/7 LIVE-IN COUNSELOR
                                      </button>
                                  </h5>
                                  <div class="accordion-collapse collapse" id="collapse8" aria-labelledby="heading8" data-bs-parent="#accordionFAQ">
                                      <div class="accordion-body">A private live-in counselor will be living with you and accompanying you 24/7 during your stay, which makes the treatment very efficient.</div>
                                  </div>
                              </div>
             <div class="accordion-item">
                                  <h5 class="accordion-header" id="heading9">
                                      <button class="accordion-button text-heading-5 collapsed text-heading-5 type=" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                          PRIVATE LUXURY FACILITY
                                      </button>
                                  </h5>
                                  <div class="accordion-collapse collapse" id="collapse9" aria-labelledby="heading9" data-bs-parent="#accordionFAQ">
                                      <div class="accordion-body">While living in your private luxury facility, you will be receiving first-class service and experience supreme hospitality by the whole team. You will experience true calmness and feel safe in our rehabilitation centre.</div>
                                  </div>
                              </div>
             <div class="accordion-item">
                                  <h5 class="accordion-header" id="heading10">
                                      <button class="accordion-button text-heading-5 collapsed text-heading-5 type=" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                          PERSONAL CHEF & DIET PLAN
                                      </button>
                                  </h5>
                                  <div class="accordion-collapse collapse" id="collapse10" aria-labelledby="heading10" data-bs-parent="#accordionFAQ">
                                      <div class="accordion-body">Our chef and nutrition specialist will design your personalized diet plan supporting your body & mind recovery as well as helping with weight management. Use of the gym, a personal trainer, yoga, other fitness workshops, and nutrition workshops will help you to maintain a healthy lifestyle.</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
   </div>
  </section>
  


  <section class="services__area-six services__bg-six" style = {{ background: "#1a4833" }}>
      <div class="container" data-aos="fade-up" data-aos-duration="3000">
          <div class="row align-items-center">
              <div class="col-lg-6">
                  <div class="section-title white-title mb-40">
                     
                      <h2 class="title">Why choose lotus wellness as your de-addiction centre in India?</h2>
                  </div>
              </div>
              
          </div>
          
          <div class="row mt-30">
              <div class="col-lg-4 mb-40">
                  <div class="card-step">
                      <div class="card-icon">
                          <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M31.6616 24.4826C31.628 24.4631 26.8757 22.2065 17.4046 17.7066V2.53256C17.4046 2.21509 17.1472 1.95764 16.8296 1.95764C7.86149 1.95764 0.584563 9.08816 0.329912 17.9806C0.320827 18.0385 0.320128 18.0817 0.326278 18.1356C0.145072 27.447 7.632 34.9723 16.8296 34.9723C23.294 34.9723 29.1835 31.1776 31.8603 25.2974C32.0463 25.0123 31.9447 24.642 31.6616 24.4826ZM16.2547 3.11936V17.4951H1.50366C1.99402 9.66679 8.37499 3.41091 16.2547 3.11936ZM16.8296 33.8225C8.4216 33.8225 1.5713 27.0304 1.47438 18.6449H16.7L30.6093 25.2534C28.032 30.4774 22.684 33.8225 16.8296 33.8225ZM19.5948 0.311768C19.2773 0.311768 19.0198 0.569145 19.0198 0.88669C19.0198 17.4945 19.004 16.4706 19.0505 16.6082C19.0971 16.746 19.1965 16.8668 19.337 16.9374C19.3921 16.965 33.9128 23.863 33.9032 23.8587C34.2424 24.0109 34.6103 23.8204 34.6999 23.4844C35.5864 21.4787 36.056 19.3475 36.0979 17.1431C36.0982 17.1334 36.0985 17.1237 36.0983 17.114C36.2599 7.78171 28.7408 0.311768 19.5948 0.311768ZM20.1697 1.47342C21.1893 1.51116 22.184 1.64834 23.1439 1.8763L20.1697 4.85056V1.47342ZM20.1697 6.47666L24.4105 2.23584C25.1046 2.46561 25.7767 2.74375 26.4232 3.06604L20.1696 9.31962L20.1697 6.47666ZM20.1697 10.9456L27.4737 3.64167C28.0594 3.99317 28.6198 4.3827 29.1516 4.80668L20.1697 13.7885V10.9456ZM20.1697 16.0607V15.4146L30.0257 5.55861C30.5179 6.0148 30.9805 6.50237 31.4096 7.01887L21.6598 16.7687L20.1697 16.0607ZM22.7621 17.2924L32.1171 7.93748C32.5157 8.49787 32.8768 9.08649 33.1986 9.69894L24.6894 18.2081L22.7621 17.2924ZM25.7917 18.7318L33.7231 10.8004C34.0146 11.4822 34.258 12.1892 34.4494 12.9171L27.719 19.6475L25.7917 18.7318ZM33.8433 22.5572L31.8509 21.6106L34.8482 18.6133C34.6913 19.9694 34.3553 21.2889 33.8433 22.5572ZM34.9514 16.884L30.7486 21.0868L28.8213 20.1712L34.7371 14.2553C34.8848 15.1303 34.955 15.9953 34.9514 16.884Z" fill="#F7A400" />
                          </svg>
                      </div>
                      <div class="card-info">
                         
                          <p>We do not label you an addict or alcoholic, nor do we believe that you have a disease. We have found that damaging labels, such as addict and alcoholic, rob you of your true identity. It’s the treatment philosophy at Lotus that sets us apart from all other rehab centers in the world.</p>
                         
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 mb-40">
                  <div class="card-step">
                      <div class="card-icon">
                          <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.3003 5.87795C11.2255 5.87795 6.28327 10.7938 6.28327 16.836C6.28327 18.7691 6.79636 20.6696 7.76697 22.3321C8.70847 23.9447 10.0575 25.3016 11.6683 26.2562C12.1404 26.5361 12.4004 26.9911 12.4004 27.5375V30.0613C12.4004 30.9693 13.0028 31.7399 13.8309 31.9987V32.0455C13.8309 33.5379 15.0515 34.7521 16.5519 34.7521H18.0486C19.5491 34.7521 20.7698 33.538 20.7698 32.0455V31.9987C21.5978 31.7398 22.2002 30.9692 22.2002 30.0613V27.5375C22.2002 26.991 22.4602 26.536 22.9324 26.2562C24.5431 25.3016 25.8922 23.9447 26.8337 22.3321C27.8044 20.6696 28.3174 18.7691 28.3174 16.836C28.3175 10.7937 23.3752 5.87795 17.3003 5.87795V5.87795ZM18.0487 33.5371H16.552C15.7407 33.5371 15.0783 32.8928 15.0536 32.0916H19.5472C19.5225 32.8928 18.86 33.5371 18.0487 33.5371ZM20.1591 30.8766H14.4417C13.9896 30.8766 13.6219 30.5108 13.6219 30.0612V29.6291H20.9787V30.0612C20.9787 30.5108 20.611 30.8766 20.1591 30.8766ZM22.3072 25.2124C21.463 25.7127 20.9787 26.5602 20.9787 27.5374V28.4141H13.6219V27.5374C13.6219 26.5602 13.1377 25.7127 12.2935 25.2124C9.33977 23.4618 7.50483 20.2522 7.50483 16.836C7.50483 11.4636 11.8991 7.09284 17.3004 7.09284C22.7017 7.09284 27.096 11.4636 27.096 16.836C27.096 20.2522 25.261 23.4618 22.3072 25.2124V25.2124ZM3.11621 8.60864C3.28478 8.31813 3.65815 8.21851 3.95049 8.38631L6.28768 9.72843C6.57982 9.89617 6.67984 10.2677 6.51121 10.5583C6.39809 10.7531 6.19281 10.8621 5.98169 10.8621C5.87814 10.8621 5.77316 10.8358 5.67693 10.7806L3.33975 9.43846C3.04761 9.27073 2.94751 8.89915 3.11621 8.60864V8.60864ZM4.23143 17.3615H1.53262C1.19529 17.3615 0.921875 17.0896 0.921875 16.754C0.921875 16.4185 1.19529 16.1465 1.53262 16.1465H4.23143C4.56877 16.1465 4.84218 16.4185 4.84218 16.754C4.84218 17.0896 4.56877 17.3615 4.23143 17.3615ZM6.51121 22.9499C6.67984 23.2404 6.57982 23.6119 6.28768 23.7797L3.95049 25.1219C3.85433 25.1771 3.74929 25.2033 3.64573 25.2033C3.43462 25.2033 3.22934 25.0945 3.11621 24.8995C2.94758 24.6089 3.04761 24.2374 3.33975 24.0697L5.67693 22.7275C5.96921 22.5598 6.34265 22.6593 6.51121 22.9499ZM24.0864 15.1023H23.4305C23.2963 14.6308 23.1079 14.1788 22.8673 13.7508L23.3313 13.2894C23.5698 13.0522 23.5699 12.6676 23.3313 12.4303L21.73 10.8374C21.6154 10.7234 21.4601 10.6594 21.2981 10.6594C21.1361 10.6594 20.9808 10.7234 20.8663 10.8374L20.4022 11.2989C19.9716 11.0594 19.5173 10.8721 19.0435 10.7386V10.0864C19.0435 9.75084 18.7701 9.47889 18.4328 9.47889H16.168C15.8307 9.47889 15.5573 9.75084 15.5573 10.0864V10.7386C15.0833 10.8721 14.6288 11.0594 14.1985 11.2988L13.7346 10.8374C13.496 10.6002 13.1094 10.6002 12.8708 10.8374L11.2693 12.4304C11.0307 12.6676 11.0307 13.0522 11.2693 13.2895L11.7332 13.7509C11.4924 14.1792 11.3041 14.6311 11.1699 15.1024H10.5144C10.177 15.1024 9.90363 15.3744 9.90363 15.7099V17.9626C9.90363 18.2982 10.177 18.5701 10.5144 18.5701H11.17C11.3042 19.0415 11.4925 19.4935 11.7332 19.9216L11.2693 20.383C11.0307 20.6204 11.0308 21.005 11.2693 21.2422L12.8708 22.8352C12.9853 22.9491 13.1407 23.0131 13.3026 23.0131C13.4645 23.0131 13.62 22.9491 13.7345 22.8351L14.1984 22.3737C14.629 22.6132 15.0834 22.8005 15.5572 22.9339V23.5861C15.5572 23.9216 15.8306 24.1936 16.168 24.1936H18.4327C18.77 24.1936 19.0434 23.9216 19.0434 23.5861V22.9339C19.5173 22.8003 19.9718 22.613 20.4022 22.3736L20.8662 22.8351C21.1048 23.0723 21.4914 23.0724 21.73 22.835L23.3313 21.2422C23.5698 21.005 23.5699 20.6204 23.3313 20.383L22.8674 19.9216C23.1081 19.4933 23.2964 19.0413 23.4306 18.5701H24.0864C24.4237 18.5701 24.6971 18.2982 24.6971 17.9626V15.7099C24.6971 15.3743 24.4237 15.1023 24.0864 15.1023V15.1023ZM23.4756 17.355H22.95C22.6587 17.355 22.408 17.5596 22.351 17.8437C22.2194 18.5004 21.9625 19.1168 21.5876 19.6757C21.4259 19.9166 21.4578 20.2376 21.6637 20.4424L22.0357 20.8125L21.298 21.5462L20.9259 21.1762C20.72 20.9714 20.3972 20.9396 20.1551 21.1005C19.5935 21.4733 18.9738 21.7289 18.3133 21.8598C18.0277 21.9165 17.822 22.1659 17.822 22.4556V22.9784H16.7788V22.4556C16.7788 22.1658 16.573 21.9164 16.2873 21.8598C15.6271 21.729 15.0075 21.4735 14.4455 21.1005C14.2034 20.9396 13.8806 20.9714 13.6746 21.1763L13.3027 21.5463L12.5649 20.8125L12.9369 20.4424C13.1428 20.2375 13.1747 19.9166 13.013 19.6757C12.6382 19.1171 12.3813 18.5008 12.2496 17.8437C12.1927 17.5596 11.942 17.355 11.6507 17.355H11.1252V16.3172H11.6507C11.942 16.3172 12.1928 16.1126 12.2496 15.8284C12.3811 15.1718 12.638 14.5555 13.013 13.9966C13.1747 13.7557 13.1428 13.4347 12.9369 13.2298L12.5649 12.8598L13.3027 12.126L13.6746 12.496C13.8807 12.7008 14.2033 12.7325 14.4455 12.5717C15.007 12.1989 15.6267 11.9434 16.2875 11.8124C16.5732 11.7557 16.7788 11.5063 16.7788 11.2166V10.6938H17.822V11.2166C17.822 11.5063 18.0277 11.7557 18.3133 11.8124C18.9735 11.9432 19.5932 12.1988 20.1551 12.5717C20.3975 12.7326 20.7201 12.7008 20.9259 12.496L21.298 12.1259L22.0357 12.8597L21.6637 13.2298C21.4576 13.4347 21.4258 13.7558 21.5876 13.9967C21.9622 14.5549 22.2192 15.1712 22.351 15.8286C22.408 16.1127 22.6588 16.3172 22.95 16.3172H23.4756V17.355ZM17.3002 12.7188C15.0177 12.7188 13.1608 14.5659 13.1608 16.8362C13.1608 19.1065 15.0177 20.9535 17.3002 20.9535C19.5827 20.9535 21.4397 19.1065 21.4397 16.8362C21.4397 14.5659 19.5827 12.7188 17.3002 12.7188V12.7188ZM17.3002 19.7385C15.6913 19.7385 14.3823 18.4365 14.3823 16.8362C14.3823 15.2358 15.6913 13.9338 17.3002 13.9338C18.9091 13.9338 20.2182 15.2358 20.2182 16.8362C20.2182 18.4365 18.9091 19.7385 17.3002 19.7385ZM28.0896 10.5583C27.9209 10.2677 28.021 9.89617 28.3131 9.72843L30.6502 8.38631C30.9424 8.21851 31.3159 8.3182 31.4844 8.60864C31.6531 8.89922 31.553 9.27073 31.2609 9.43846L28.9239 10.7806C28.8277 10.8358 28.7227 10.8621 28.6191 10.8621C28.4079 10.8621 28.2027 10.7531 28.0896 10.5583ZM33.72 16.7651C33.72 17.1006 33.4466 17.3726 33.1093 17.3726H30.4105C30.0731 17.3726 29.7997 17.1006 29.7997 16.7651C29.7997 16.4296 30.0731 16.1576 30.4105 16.1576H33.1093C33.4466 16.1576 33.72 16.4296 33.72 16.7651ZM31.4844 24.8995C31.3713 25.0945 31.166 25.2033 30.9549 25.2033C30.8514 25.2033 30.7463 25.1771 30.6502 25.1219L28.3131 23.7797C28.021 23.6119 27.9209 23.2404 28.0896 22.9499C28.2581 22.6593 28.6317 22.5597 28.9239 22.7275L31.2609 24.0697C31.553 24.2375 31.6531 24.609 31.4844 24.8995ZM16.6895 3.75494V1.07062C16.6895 0.735084 16.963 0.463135 17.3003 0.463135C17.6376 0.463135 17.911 0.735084 17.911 1.07062V3.75494C17.911 4.09047 17.6376 4.36242 17.3003 4.36242C16.963 4.36242 16.6895 4.0904 16.6895 3.75494ZM8.88755 3.47557C8.71892 3.18499 8.81894 2.81348 9.11108 2.64575C9.40309 2.47795 9.77666 2.57757 9.94536 2.86802L11.2949 5.19264C11.4635 5.48322 11.3635 5.85473 11.0714 6.02246C10.9752 6.07768 10.8702 6.104 10.7666 6.104C10.5556 6.104 10.3502 5.99506 10.2371 5.80019L8.88755 3.47557ZM23.306 5.19278L24.6553 2.86815C24.8239 2.57764 25.1972 2.47801 25.4896 2.64575C25.7817 2.81348 25.8817 3.18499 25.7131 3.47557L24.3638 5.80019C24.2507 5.99506 24.0454 6.10407 23.8343 6.10407C23.7308 6.10407 23.6258 6.07781 23.5296 6.0226C23.2375 5.8548 23.1374 5.48329 23.306 5.19278Z" fill="#F7A400" />
                          </svg>
                      </div>
                      <div class="card-info">
                          
                          <p>At Lotus , we focus on healing the underlying conditions that are causing you to use drugs and alcohol. We do this by utilizing a highly individualized treatment program with therapists who are experienced in healing the underlying causes of addiction.</p>
                         
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 mb-40">
                  <div class="card-step">
                      <div class="card-icon">
                          <svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.3208 18.8793C14.0668 18.8793 14.7959 18.6481 15.4161 18.2149C16.0364 17.7817 16.5198 17.166 16.8052 16.4457C17.0907 15.7253 17.1653 14.9327 17.0198 14.1679C16.8743 13.4032 16.5151 12.7008 15.9877 12.1494C15.4602 11.5981 14.7882 11.2227 14.0566 11.0705C13.325 10.9184 12.5667 10.9965 11.8776 11.2949C11.1884 11.5933 10.5994 12.0985 10.185 12.7468C9.77059 13.3951 9.5494 14.1573 9.5494 14.937C9.55068 15.9822 9.94844 16.9841 10.6554 17.7231C11.3625 18.4622 12.321 18.8779 13.3208 18.8793ZM13.3208 12.1211C13.8536 12.1211 14.3745 12.2863 14.8175 12.5957C15.2605 12.9051 15.6058 13.3449 15.8097 13.8594C16.0136 14.374 16.0669 14.9402 15.963 15.4864C15.859 16.0326 15.6025 16.5344 15.2257 16.9282C14.849 17.322 14.369 17.5902 13.8464 17.6988C13.3238 17.8075 12.7822 17.7517 12.2899 17.5386C11.7977 17.3254 11.377 16.9645 11.081 16.5015C10.7849 16.0384 10.627 15.494 10.627 14.937C10.6278 14.1905 10.9119 13.4748 11.4169 12.9469C11.9219 12.419 12.6066 12.122 13.3208 12.1211Z" fill="#F7A400" />
                              <path d="M1.07226 33.7764C1.13392 34.0097 1.26234 34.2177 1.4403 34.3725C1.61827 34.5274 1.83727 34.6216 2.06793 34.6426C2.10373 34.6464 2.13969 34.6483 2.17568 34.6482C2.38906 34.6484 2.59819 34.5859 2.7792 34.4678C2.96021 34.3497 3.1058 34.1808 3.19936 33.9803C4.04644 32.0337 5.35043 30.3425 6.9902 29.0638C7.19346 29.2841 7.45032 29.4424 7.73318 29.5216L8.17929 30.9611C8.30495 31.3781 8.5548 31.7422 8.89239 32.0002C9.22998 32.2582 9.63763 32.3968 10.0558 32.3955H11.6781C12.01 33.6846 12.5288 34.6482 13.3208 34.6482C14.1128 34.6482 14.6317 33.6846 14.9636 32.3955H16.5858C17.0035 32.397 17.4108 32.259 17.7481 32.0016C18.0855 31.7441 18.3354 31.3808 18.4613 30.9645L18.9085 29.5216C19.1912 29.4423 19.4478 29.284 19.6509 29.0638C21.2911 30.3423 22.5953 32.0336 23.4423 33.9803C23.5359 34.1809 23.6816 34.3498 23.8627 34.468C24.0438 34.5861 24.2531 34.6485 24.4665 34.6482C24.5025 34.6483 24.5385 34.6464 24.5743 34.6426C24.8048 34.6216 25.0237 34.5275 25.2016 34.3729C25.3795 34.2183 25.5081 34.0106 25.57 33.7776C26.3587 30.8935 27.5392 23.9434 21.8589 20.8194C21.9084 20.1509 21.9418 19.4762 21.9418 18.7954C21.9814 15.4424 21.3065 12.1222 19.9663 9.07569C18.6261 6.02914 16.654 3.33253 14.1931 1.18143C13.9473 0.971111 13.6393 0.856201 13.3217 0.856201C13.004 0.856201 12.696 0.971111 12.4502 1.18143C9.98907 3.3324 8.01678 6.02895 6.67635 9.07551C5.33592 12.1221 4.66095 15.4423 4.7004 18.7954C4.7004 19.4762 4.7338 20.1509 4.78337 20.8194C-0.896969 23.9434 0.282416 30.8935 1.07226 33.7764ZM10.0558 31.2692C9.86603 31.2696 9.68107 31.2065 9.52801 31.0892C9.37494 30.9718 9.2618 30.8064 9.20512 30.617L8.88401 29.5796H11.2455C11.2897 30.1428 11.3532 30.7161 11.4459 31.2692H10.0558ZM13.3208 33.5089C12.9787 33.2611 12.2433 31.348 12.2433 27.6085C12.2433 23.869 12.9787 21.9559 13.3208 21.7081C13.663 21.9559 14.3984 23.869 14.3984 27.6085C14.3984 31.348 13.663 33.2611 13.3208 33.5089ZM16.5858 31.2692H15.1958C15.2863 30.7161 15.352 30.1428 15.3962 29.5796H17.7577L17.4344 30.6204C17.3775 30.8089 17.2645 30.9735 17.1119 31.0902C16.9592 31.2069 16.7749 31.2696 16.5858 31.2692ZM24.5334 33.4695C24.5309 33.4842 24.5236 33.4976 24.5126 33.5072C24.5017 33.5168 24.4878 33.522 24.4735 33.5219C24.4665 33.524 24.4592 33.5246 24.452 33.5237C24.4447 33.5227 24.4377 33.5203 24.4315 33.5164C24.4252 33.5126 24.4197 33.5074 24.4153 33.5013C24.411 33.4952 24.4079 33.4882 24.4062 33.4808C23.4674 31.3309 22.0131 29.4711 20.1843 28.0816C20.9802 26.1576 21.5038 24.1227 21.7387 22.041C26.1174 24.7729 25.3965 30.3118 24.5334 33.4695ZM13.1263 2.05717C13.1815 2.0101 13.2505 1.98438 13.3217 1.98438C13.3928 1.98438 13.4618 2.0101 13.517 2.05717C15.1589 3.47459 16.5693 5.16174 17.693 7.05255H8.94866C10.0729 5.16171 11.4839 3.47456 13.1263 2.05717ZM8.31667 8.17891H18.325C20.0186 11.4355 20.8922 15.0888 20.8637 18.7954C20.9074 22.0086 20.2679 25.1919 18.9915 28.1154C18.9478 28.2143 18.8785 28.2984 18.7913 28.3582C18.7042 28.4179 18.6027 28.4509 18.4985 28.4533H15.4598C15.47 28.1587 15.476 27.8727 15.476 27.6085C15.476 24.9937 15.0218 20.5688 13.3208 20.5688C11.6199 20.5688 11.1657 24.9937 11.1657 27.6085C11.1657 27.8727 11.1717 28.1587 11.1819 28.4533H8.14319C8.03994 28.4513 7.93928 28.4191 7.85256 28.3605C7.76584 28.3019 7.6965 28.2192 7.65236 28.1216C6.3744 25.1963 5.73417 22.0109 5.77795 18.7954C5.74945 15.0888 6.62306 11.4355 8.31667 8.17891ZM4.9019 22.0404C5.13711 24.1221 5.66072 26.1569 6.45627 28.081C4.62751 29.4705 3.17322 31.3304 2.23441 33.4802C2.22633 33.496 2.21986 33.5332 2.16706 33.5213C2.1528 33.5211 2.13908 33.5156 2.12833 33.5058C2.11758 33.496 2.1105 33.4826 2.10833 33.4678C1.24521 30.3118 0.524327 24.7729 4.9019 22.0404Z" fill="#F7A400" />
                          </svg>
                      </div>
                      <div class="card-info">
                          
                          <p>Our holistic one-on-one approach is superior version of the 12 Step program and offers state-of-the-art services that will keep you engaged and enthusiastic about healing. During treatment, you will feel empowered, instead of powerless.</p>
                          
                      </div>
                  </div>
              </div>
          </div>
  
  
   <div class="row mt-30">
              <div class="col-lg-4 mb-40">
                  <div class="card-step">
                      <div class="card-icon">
                          <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M31.6616 24.4826C31.628 24.4631 26.8757 22.2065 17.4046 17.7066V2.53256C17.4046 2.21509 17.1472 1.95764 16.8296 1.95764C7.86149 1.95764 0.584563 9.08816 0.329912 17.9806C0.320827 18.0385 0.320128 18.0817 0.326278 18.1356C0.145072 27.447 7.632 34.9723 16.8296 34.9723C23.294 34.9723 29.1835 31.1776 31.8603 25.2974C32.0463 25.0123 31.9447 24.642 31.6616 24.4826ZM16.2547 3.11936V17.4951H1.50366C1.99402 9.66679 8.37499 3.41091 16.2547 3.11936ZM16.8296 33.8225C8.4216 33.8225 1.5713 27.0304 1.47438 18.6449H16.7L30.6093 25.2534C28.032 30.4774 22.684 33.8225 16.8296 33.8225ZM19.5948 0.311768C19.2773 0.311768 19.0198 0.569145 19.0198 0.88669C19.0198 17.4945 19.004 16.4706 19.0505 16.6082C19.0971 16.746 19.1965 16.8668 19.337 16.9374C19.3921 16.965 33.9128 23.863 33.9032 23.8587C34.2424 24.0109 34.6103 23.8204 34.6999 23.4844C35.5864 21.4787 36.056 19.3475 36.0979 17.1431C36.0982 17.1334 36.0985 17.1237 36.0983 17.114C36.2599 7.78171 28.7408 0.311768 19.5948 0.311768ZM20.1697 1.47342C21.1893 1.51116 22.184 1.64834 23.1439 1.8763L20.1697 4.85056V1.47342ZM20.1697 6.47666L24.4105 2.23584C25.1046 2.46561 25.7767 2.74375 26.4232 3.06604L20.1696 9.31962L20.1697 6.47666ZM20.1697 10.9456L27.4737 3.64167C28.0594 3.99317 28.6198 4.3827 29.1516 4.80668L20.1697 13.7885V10.9456ZM20.1697 16.0607V15.4146L30.0257 5.55861C30.5179 6.0148 30.9805 6.50237 31.4096 7.01887L21.6598 16.7687L20.1697 16.0607ZM22.7621 17.2924L32.1171 7.93748C32.5157 8.49787 32.8768 9.08649 33.1986 9.69894L24.6894 18.2081L22.7621 17.2924ZM25.7917 18.7318L33.7231 10.8004C34.0146 11.4822 34.258 12.1892 34.4494 12.9171L27.719 19.6475L25.7917 18.7318ZM33.8433 22.5572L31.8509 21.6106L34.8482 18.6133C34.6913 19.9694 34.3553 21.2889 33.8433 22.5572ZM34.9514 16.884L30.7486 21.0868L28.8213 20.1712L34.7371 14.2553C34.8848 15.1303 34.955 15.9953 34.9514 16.884Z" fill="#F7A400" />
                          </svg>
                      </div>
                      <div class="card-info">
                         
                          <p>At Lotus, our treatment programmes for addiction, mental health and well being are based on our core principles of empathy, care and pragmatism. We ensure each of our guests are given 60-80 hours of one-on-one therapy per month.</p>
                         
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 mb-40">
                  <div class="card-step">
                      <div class="card-icon">
                          <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.3003 5.87795C11.2255 5.87795 6.28327 10.7938 6.28327 16.836C6.28327 18.7691 6.79636 20.6696 7.76697 22.3321C8.70847 23.9447 10.0575 25.3016 11.6683 26.2562C12.1404 26.5361 12.4004 26.9911 12.4004 27.5375V30.0613C12.4004 30.9693 13.0028 31.7399 13.8309 31.9987V32.0455C13.8309 33.5379 15.0515 34.7521 16.5519 34.7521H18.0486C19.5491 34.7521 20.7698 33.538 20.7698 32.0455V31.9987C21.5978 31.7398 22.2002 30.9692 22.2002 30.0613V27.5375C22.2002 26.991 22.4602 26.536 22.9324 26.2562C24.5431 25.3016 25.8922 23.9447 26.8337 22.3321C27.8044 20.6696 28.3174 18.7691 28.3174 16.836C28.3175 10.7937 23.3752 5.87795 17.3003 5.87795V5.87795ZM18.0487 33.5371H16.552C15.7407 33.5371 15.0783 32.8928 15.0536 32.0916H19.5472C19.5225 32.8928 18.86 33.5371 18.0487 33.5371ZM20.1591 30.8766H14.4417C13.9896 30.8766 13.6219 30.5108 13.6219 30.0612V29.6291H20.9787V30.0612C20.9787 30.5108 20.611 30.8766 20.1591 30.8766ZM22.3072 25.2124C21.463 25.7127 20.9787 26.5602 20.9787 27.5374V28.4141H13.6219V27.5374C13.6219 26.5602 13.1377 25.7127 12.2935 25.2124C9.33977 23.4618 7.50483 20.2522 7.50483 16.836C7.50483 11.4636 11.8991 7.09284 17.3004 7.09284C22.7017 7.09284 27.096 11.4636 27.096 16.836C27.096 20.2522 25.261 23.4618 22.3072 25.2124V25.2124ZM3.11621 8.60864C3.28478 8.31813 3.65815 8.21851 3.95049 8.38631L6.28768 9.72843C6.57982 9.89617 6.67984 10.2677 6.51121 10.5583C6.39809 10.7531 6.19281 10.8621 5.98169 10.8621C5.87814 10.8621 5.77316 10.8358 5.67693 10.7806L3.33975 9.43846C3.04761 9.27073 2.94751 8.89915 3.11621 8.60864V8.60864ZM4.23143 17.3615H1.53262C1.19529 17.3615 0.921875 17.0896 0.921875 16.754C0.921875 16.4185 1.19529 16.1465 1.53262 16.1465H4.23143C4.56877 16.1465 4.84218 16.4185 4.84218 16.754C4.84218 17.0896 4.56877 17.3615 4.23143 17.3615ZM6.51121 22.9499C6.67984 23.2404 6.57982 23.6119 6.28768 23.7797L3.95049 25.1219C3.85433 25.1771 3.74929 25.2033 3.64573 25.2033C3.43462 25.2033 3.22934 25.0945 3.11621 24.8995C2.94758 24.6089 3.04761 24.2374 3.33975 24.0697L5.67693 22.7275C5.96921 22.5598 6.34265 22.6593 6.51121 22.9499ZM24.0864 15.1023H23.4305C23.2963 14.6308 23.1079 14.1788 22.8673 13.7508L23.3313 13.2894C23.5698 13.0522 23.5699 12.6676 23.3313 12.4303L21.73 10.8374C21.6154 10.7234 21.4601 10.6594 21.2981 10.6594C21.1361 10.6594 20.9808 10.7234 20.8663 10.8374L20.4022 11.2989C19.9716 11.0594 19.5173 10.8721 19.0435 10.7386V10.0864C19.0435 9.75084 18.7701 9.47889 18.4328 9.47889H16.168C15.8307 9.47889 15.5573 9.75084 15.5573 10.0864V10.7386C15.0833 10.8721 14.6288 11.0594 14.1985 11.2988L13.7346 10.8374C13.496 10.6002 13.1094 10.6002 12.8708 10.8374L11.2693 12.4304C11.0307 12.6676 11.0307 13.0522 11.2693 13.2895L11.7332 13.7509C11.4924 14.1792 11.3041 14.6311 11.1699 15.1024H10.5144C10.177 15.1024 9.90363 15.3744 9.90363 15.7099V17.9626C9.90363 18.2982 10.177 18.5701 10.5144 18.5701H11.17C11.3042 19.0415 11.4925 19.4935 11.7332 19.9216L11.2693 20.383C11.0307 20.6204 11.0308 21.005 11.2693 21.2422L12.8708 22.8352C12.9853 22.9491 13.1407 23.0131 13.3026 23.0131C13.4645 23.0131 13.62 22.9491 13.7345 22.8351L14.1984 22.3737C14.629 22.6132 15.0834 22.8005 15.5572 22.9339V23.5861C15.5572 23.9216 15.8306 24.1936 16.168 24.1936H18.4327C18.77 24.1936 19.0434 23.9216 19.0434 23.5861V22.9339C19.5173 22.8003 19.9718 22.613 20.4022 22.3736L20.8662 22.8351C21.1048 23.0723 21.4914 23.0724 21.73 22.835L23.3313 21.2422C23.5698 21.005 23.5699 20.6204 23.3313 20.383L22.8674 19.9216C23.1081 19.4933 23.2964 19.0413 23.4306 18.5701H24.0864C24.4237 18.5701 24.6971 18.2982 24.6971 17.9626V15.7099C24.6971 15.3743 24.4237 15.1023 24.0864 15.1023V15.1023ZM23.4756 17.355H22.95C22.6587 17.355 22.408 17.5596 22.351 17.8437C22.2194 18.5004 21.9625 19.1168 21.5876 19.6757C21.4259 19.9166 21.4578 20.2376 21.6637 20.4424L22.0357 20.8125L21.298 21.5462L20.9259 21.1762C20.72 20.9714 20.3972 20.9396 20.1551 21.1005C19.5935 21.4733 18.9738 21.7289 18.3133 21.8598C18.0277 21.9165 17.822 22.1659 17.822 22.4556V22.9784H16.7788V22.4556C16.7788 22.1658 16.573 21.9164 16.2873 21.8598C15.6271 21.729 15.0075 21.4735 14.4455 21.1005C14.2034 20.9396 13.8806 20.9714 13.6746 21.1763L13.3027 21.5463L12.5649 20.8125L12.9369 20.4424C13.1428 20.2375 13.1747 19.9166 13.013 19.6757C12.6382 19.1171 12.3813 18.5008 12.2496 17.8437C12.1927 17.5596 11.942 17.355 11.6507 17.355H11.1252V16.3172H11.6507C11.942 16.3172 12.1928 16.1126 12.2496 15.8284C12.3811 15.1718 12.638 14.5555 13.013 13.9966C13.1747 13.7557 13.1428 13.4347 12.9369 13.2298L12.5649 12.8598L13.3027 12.126L13.6746 12.496C13.8807 12.7008 14.2033 12.7325 14.4455 12.5717C15.007 12.1989 15.6267 11.9434 16.2875 11.8124C16.5732 11.7557 16.7788 11.5063 16.7788 11.2166V10.6938H17.822V11.2166C17.822 11.5063 18.0277 11.7557 18.3133 11.8124C18.9735 11.9432 19.5932 12.1988 20.1551 12.5717C20.3975 12.7326 20.7201 12.7008 20.9259 12.496L21.298 12.1259L22.0357 12.8597L21.6637 13.2298C21.4576 13.4347 21.4258 13.7558 21.5876 13.9967C21.9622 14.5549 22.2192 15.1712 22.351 15.8286C22.408 16.1127 22.6588 16.3172 22.95 16.3172H23.4756V17.355ZM17.3002 12.7188C15.0177 12.7188 13.1608 14.5659 13.1608 16.8362C13.1608 19.1065 15.0177 20.9535 17.3002 20.9535C19.5827 20.9535 21.4397 19.1065 21.4397 16.8362C21.4397 14.5659 19.5827 12.7188 17.3002 12.7188V12.7188ZM17.3002 19.7385C15.6913 19.7385 14.3823 18.4365 14.3823 16.8362C14.3823 15.2358 15.6913 13.9338 17.3002 13.9338C18.9091 13.9338 20.2182 15.2358 20.2182 16.8362C20.2182 18.4365 18.9091 19.7385 17.3002 19.7385ZM28.0896 10.5583C27.9209 10.2677 28.021 9.89617 28.3131 9.72843L30.6502 8.38631C30.9424 8.21851 31.3159 8.3182 31.4844 8.60864C31.6531 8.89922 31.553 9.27073 31.2609 9.43846L28.9239 10.7806C28.8277 10.8358 28.7227 10.8621 28.6191 10.8621C28.4079 10.8621 28.2027 10.7531 28.0896 10.5583ZM33.72 16.7651C33.72 17.1006 33.4466 17.3726 33.1093 17.3726H30.4105C30.0731 17.3726 29.7997 17.1006 29.7997 16.7651C29.7997 16.4296 30.0731 16.1576 30.4105 16.1576H33.1093C33.4466 16.1576 33.72 16.4296 33.72 16.7651ZM31.4844 24.8995C31.3713 25.0945 31.166 25.2033 30.9549 25.2033C30.8514 25.2033 30.7463 25.1771 30.6502 25.1219L28.3131 23.7797C28.021 23.6119 27.9209 23.2404 28.0896 22.9499C28.2581 22.6593 28.6317 22.5597 28.9239 22.7275L31.2609 24.0697C31.553 24.2375 31.6531 24.609 31.4844 24.8995ZM16.6895 3.75494V1.07062C16.6895 0.735084 16.963 0.463135 17.3003 0.463135C17.6376 0.463135 17.911 0.735084 17.911 1.07062V3.75494C17.911 4.09047 17.6376 4.36242 17.3003 4.36242C16.963 4.36242 16.6895 4.0904 16.6895 3.75494ZM8.88755 3.47557C8.71892 3.18499 8.81894 2.81348 9.11108 2.64575C9.40309 2.47795 9.77666 2.57757 9.94536 2.86802L11.2949 5.19264C11.4635 5.48322 11.3635 5.85473 11.0714 6.02246C10.9752 6.07768 10.8702 6.104 10.7666 6.104C10.5556 6.104 10.3502 5.99506 10.2371 5.80019L8.88755 3.47557ZM23.306 5.19278L24.6553 2.86815C24.8239 2.57764 25.1972 2.47801 25.4896 2.64575C25.7817 2.81348 25.8817 3.18499 25.7131 3.47557L24.3638 5.80019C24.2507 5.99506 24.0454 6.10407 23.8343 6.10407C23.7308 6.10407 23.6258 6.07781 23.5296 6.0226C23.2375 5.8548 23.1374 5.48329 23.306 5.19278Z" fill="#F7A400" />
                          </svg>
                      </div>
                      <div class="card-info">
                          
                          <p>In an exclusive and caring environment, working with one client at a time, we offer the most comprehensive and intensive treatment programmes available. We make sure every one is given premium care with a personal touch.</p>
                         
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 mb-40">
                  <div class="card-step">
                      <div class="card-icon">
                          <svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.3208 18.8793C14.0668 18.8793 14.7959 18.6481 15.4161 18.2149C16.0364 17.7817 16.5198 17.166 16.8052 16.4457C17.0907 15.7253 17.1653 14.9327 17.0198 14.1679C16.8743 13.4032 16.5151 12.7008 15.9877 12.1494C15.4602 11.5981 14.7882 11.2227 14.0566 11.0705C13.325 10.9184 12.5667 10.9965 11.8776 11.2949C11.1884 11.5933 10.5994 12.0985 10.185 12.7468C9.77059 13.3951 9.5494 14.1573 9.5494 14.937C9.55068 15.9822 9.94844 16.9841 10.6554 17.7231C11.3625 18.4622 12.321 18.8779 13.3208 18.8793ZM13.3208 12.1211C13.8536 12.1211 14.3745 12.2863 14.8175 12.5957C15.2605 12.9051 15.6058 13.3449 15.8097 13.8594C16.0136 14.374 16.0669 14.9402 15.963 15.4864C15.859 16.0326 15.6025 16.5344 15.2257 16.9282C14.849 17.322 14.369 17.5902 13.8464 17.6988C13.3238 17.8075 12.7822 17.7517 12.2899 17.5386C11.7977 17.3254 11.377 16.9645 11.081 16.5015C10.7849 16.0384 10.627 15.494 10.627 14.937C10.6278 14.1905 10.9119 13.4748 11.4169 12.9469C11.9219 12.419 12.6066 12.122 13.3208 12.1211Z" fill="#F7A400" />
                              <path d="M1.07226 33.7764C1.13392 34.0097 1.26234 34.2177 1.4403 34.3725C1.61827 34.5274 1.83727 34.6216 2.06793 34.6426C2.10373 34.6464 2.13969 34.6483 2.17568 34.6482C2.38906 34.6484 2.59819 34.5859 2.7792 34.4678C2.96021 34.3497 3.1058 34.1808 3.19936 33.9803C4.04644 32.0337 5.35043 30.3425 6.9902 29.0638C7.19346 29.2841 7.45032 29.4424 7.73318 29.5216L8.17929 30.9611C8.30495 31.3781 8.5548 31.7422 8.89239 32.0002C9.22998 32.2582 9.63763 32.3968 10.0558 32.3955H11.6781C12.01 33.6846 12.5288 34.6482 13.3208 34.6482C14.1128 34.6482 14.6317 33.6846 14.9636 32.3955H16.5858C17.0035 32.397 17.4108 32.259 17.7481 32.0016C18.0855 31.7441 18.3354 31.3808 18.4613 30.9645L18.9085 29.5216C19.1912 29.4423 19.4478 29.284 19.6509 29.0638C21.2911 30.3423 22.5953 32.0336 23.4423 33.9803C23.5359 34.1809 23.6816 34.3498 23.8627 34.468C24.0438 34.5861 24.2531 34.6485 24.4665 34.6482C24.5025 34.6483 24.5385 34.6464 24.5743 34.6426C24.8048 34.6216 25.0237 34.5275 25.2016 34.3729C25.3795 34.2183 25.5081 34.0106 25.57 33.7776C26.3587 30.8935 27.5392 23.9434 21.8589 20.8194C21.9084 20.1509 21.9418 19.4762 21.9418 18.7954C21.9814 15.4424 21.3065 12.1222 19.9663 9.07569C18.6261 6.02914 16.654 3.33253 14.1931 1.18143C13.9473 0.971111 13.6393 0.856201 13.3217 0.856201C13.004 0.856201 12.696 0.971111 12.4502 1.18143C9.98907 3.3324 8.01678 6.02895 6.67635 9.07551C5.33592 12.1221 4.66095 15.4423 4.7004 18.7954C4.7004 19.4762 4.7338 20.1509 4.78337 20.8194C-0.896969 23.9434 0.282416 30.8935 1.07226 33.7764ZM10.0558 31.2692C9.86603 31.2696 9.68107 31.2065 9.52801 31.0892C9.37494 30.9718 9.2618 30.8064 9.20512 30.617L8.88401 29.5796H11.2455C11.2897 30.1428 11.3532 30.7161 11.4459 31.2692H10.0558ZM13.3208 33.5089C12.9787 33.2611 12.2433 31.348 12.2433 27.6085C12.2433 23.869 12.9787 21.9559 13.3208 21.7081C13.663 21.9559 14.3984 23.869 14.3984 27.6085C14.3984 31.348 13.663 33.2611 13.3208 33.5089ZM16.5858 31.2692H15.1958C15.2863 30.7161 15.352 30.1428 15.3962 29.5796H17.7577L17.4344 30.6204C17.3775 30.8089 17.2645 30.9735 17.1119 31.0902C16.9592 31.2069 16.7749 31.2696 16.5858 31.2692ZM24.5334 33.4695C24.5309 33.4842 24.5236 33.4976 24.5126 33.5072C24.5017 33.5168 24.4878 33.522 24.4735 33.5219C24.4665 33.524 24.4592 33.5246 24.452 33.5237C24.4447 33.5227 24.4377 33.5203 24.4315 33.5164C24.4252 33.5126 24.4197 33.5074 24.4153 33.5013C24.411 33.4952 24.4079 33.4882 24.4062 33.4808C23.4674 31.3309 22.0131 29.4711 20.1843 28.0816C20.9802 26.1576 21.5038 24.1227 21.7387 22.041C26.1174 24.7729 25.3965 30.3118 24.5334 33.4695ZM13.1263 2.05717C13.1815 2.0101 13.2505 1.98438 13.3217 1.98438C13.3928 1.98438 13.4618 2.0101 13.517 2.05717C15.1589 3.47459 16.5693 5.16174 17.693 7.05255H8.94866C10.0729 5.16171 11.4839 3.47456 13.1263 2.05717ZM8.31667 8.17891H18.325C20.0186 11.4355 20.8922 15.0888 20.8637 18.7954C20.9074 22.0086 20.2679 25.1919 18.9915 28.1154C18.9478 28.2143 18.8785 28.2984 18.7913 28.3582C18.7042 28.4179 18.6027 28.4509 18.4985 28.4533H15.4598C15.47 28.1587 15.476 27.8727 15.476 27.6085C15.476 24.9937 15.0218 20.5688 13.3208 20.5688C11.6199 20.5688 11.1657 24.9937 11.1657 27.6085C11.1657 27.8727 11.1717 28.1587 11.1819 28.4533H8.14319C8.03994 28.4513 7.93928 28.4191 7.85256 28.3605C7.76584 28.3019 7.6965 28.2192 7.65236 28.1216C6.3744 25.1963 5.73417 22.0109 5.77795 18.7954C5.74945 15.0888 6.62306 11.4355 8.31667 8.17891ZM4.9019 22.0404C5.13711 24.1221 5.66072 26.1569 6.45627 28.081C4.62751 29.4705 3.17322 31.3304 2.23441 33.4802C2.22633 33.496 2.21986 33.5332 2.16706 33.5213C2.1528 33.5211 2.13908 33.5156 2.12833 33.5058C2.11758 33.496 2.1105 33.4826 2.10833 33.4678C1.24521 30.3118 0.524327 24.7729 4.9019 22.0404Z" fill="#F7A400" />
                          </svg>
                      </div>
                      <div class="card-info">
                          
                          <p>For Most clients Lotus is one of the best experiences of their life and we feel confident you will feel the same. The healing that takes place here is hard to put into words. Our goal is to provide you with the therapy and tools needed to ensure long-term recovery.</p>
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>


<section class="team__area-three marketing__area-home8" data-aos="fade-up" data-aos-duration="3000">
      <div class="shape"><img src={require ("./assets/img/home8/triangle.png")} class="rightToLeft" /></div>
      <div class="shape-2"><img src={require ("./assets/img/home8/circle.png")} class="alltuchtopdown" /></div>
      <div class="container">
        
          <div class="row gutter-24">
              <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="card-services-type-01">
                      <div class="card-icon">
                          <svg width="67" height="68" viewBox="0 0 67 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_131_3995)">
                                  <path d="M16.9917 7.20557C14.7034 7.20557 12.8418 9.06721 12.8418 11.3555C12.8418 13.6438 14.7034 15.5056 16.9917 15.5056C19.28 15.5056 21.1418 13.6438 21.1418 11.3555C21.1418 9.06721 19.28 7.20557 16.9917 7.20557ZM16.9917 13.5425C15.7859 13.5425 14.8049 12.5615 14.8049 11.3555C14.8049 10.1497 15.7859 9.16864 16.9917 9.16864C18.1977 9.16864 19.1787 10.1497 19.1787 11.3555C19.1786 12.5615 18.1976 13.5425 16.9917 13.5425Z" fill="#F7A400" />
                                  <path d="M21.1415 29.9441V26.15C21.1415 25.6078 20.7022 25.1685 20.16 25.1685H10.1622C9.62 25.1685 9.18066 25.6078 9.18066 26.15V29.9441C9.18066 30.4863 9.62 30.9256 10.1622 30.9256H20.1601C20.7022 30.9256 21.1415 30.4863 21.1415 29.9441ZM19.1785 28.9626H11.1437V27.1315H19.1786L19.1785 28.9626Z" fill="#F7A400" />
                                  <path d="M62.518 8.88071H56.2876C55.2025 8.88071 54.2562 9.48455 53.7659 10.3736H27.6143V9.75127C27.6143 9.28706 27.2892 8.88647 26.8349 8.7908L24.4431 8.28721C24.4388 8.27674 24.4345 8.26627 24.43 8.2558L25.7653 6.20844C26.0189 5.81962 25.9654 5.30635 25.6372 4.97825L23.3691 2.70999C23.0408 2.38176 22.5277 2.3281 22.1387 2.58186L20.0913 3.91728C20.0808 3.91296 20.0704 3.90864 20.06 3.90419L19.5564 1.51225C19.4608 1.05799 19.0601 0.73291 18.5959 0.73291H15.3881C14.9239 0.73291 14.5233 1.05799 14.4277 1.51225L13.9241 3.90419C13.9136 3.90851 13.9033 3.91283 13.8928 3.91728L11.8454 2.58186C11.4566 2.32823 10.9433 2.38202 10.6151 2.70999L8.34684 4.97812C8.01862 5.30648 7.96522 5.81975 8.21872 6.20844L9.55413 8.25593C9.54981 8.2664 9.54549 8.27674 9.54104 8.28721L7.14911 8.7908C6.69485 8.88634 6.36977 9.28706 6.36977 9.75127V10.3736H6.34372C3.73977 10.3736 1.62109 12.4921 1.62109 15.0962V45.6289C1.62109 48.2329 3.73964 50.3515 6.34372 50.3515H10.0623C10.5368 53.7716 13.5406 56.3682 16.9917 56.3682C18.0093 56.3682 18.9758 56.1481 19.849 55.756L17.629 64.4425C16.7475 67.8912 22.2421 69.0628 23.089 65.7512L27.0248 50.3518H30.2203V65.0968C30.2203 66.5339 31.4258 67.7393 32.8627 67.7393C34.3 67.7393 35.5052 66.5339 35.5052 65.0968V50.3515H38.7009L42.6366 65.7508C43.4827 69.0617 48.9784 67.8921 48.0966 64.4422L44.4955 50.3515H59.3821C61.9861 50.3515 64.1048 48.233 64.1048 45.6289V24.4207C64.1048 23.8785 63.6654 23.4391 63.1232 23.4391C62.581 23.4391 62.1417 23.8785 62.1417 24.4207V45.6289C62.1417 47.1505 60.9038 48.3885 59.3821 48.3885L23.9206 48.3886C23.4417 44.993 20.5178 42.3719 16.9918 42.3719C13.5406 42.3719 10.537 44.968 10.0624 48.3885H6.34372C4.82208 48.3885 3.58417 47.1505 3.58417 45.6289V17.1205H8.06416C8.08314 17.3452 8.17789 17.5632 8.34684 17.7322L10.6151 20.0003C10.9432 20.3283 11.4562 20.3821 11.8453 20.1285L13.8927 18.793C13.9031 18.7974 13.9136 18.8017 13.9241 18.8061L14.4277 21.1981C14.5232 21.6523 14.9239 21.9774 15.3881 21.9774H18.5959C19.0601 21.9774 19.4607 21.6523 19.5564 21.1981L20.06 18.8061C20.0704 18.8018 20.0809 18.7975 20.0914 18.793L22.1387 20.1285C22.5278 20.3822 23.0411 20.3284 23.3691 20.0003L25.6372 17.7322C25.8061 17.5632 25.9008 17.3452 25.9197 17.1205H53.0583L43.9082 26.2707L39.2083 21.5721C38.4767 20.8374 37.2613 20.8378 36.5287 21.5707L33.4776 24.6217C33.0941 25.005 33.0941 25.6265 33.4774 26.0097C33.8608 26.3929 34.4823 26.3931 34.8655 26.0098L37.8678 23.0078L42.5691 27.7079C43.301 28.4393 44.5159 28.4415 45.2474 27.7078L58.6052 14.3498C58.8859 14.069 58.9698 13.6469 58.8178 13.2801C58.666 12.9133 58.308 12.6742 57.911 12.6742H56.2873C55.1068 12.6742 55.108 10.8438 56.2873 10.8438H62.5177C63.0081 10.8438 63.4071 11.2422 63.4071 11.7317V17.9621C63.4071 18.4619 62.9908 18.8781 62.4911 18.8781C61.9862 18.8781 61.5753 18.4672 61.5753 17.9621V16.3399C61.5753 15.9429 61.3362 15.5849 60.9694 15.4331C60.6025 15.2808 60.1805 15.365 59.8997 15.6457L43.9088 31.6353L39.207 26.9347C38.4697 26.1976 37.2689 26.1972 36.5286 26.9348L28.473 34.9917C27.6484 35.8176 26.3429 34.5332 27.179 33.6964L31.5943 29.2814C31.9777 28.8979 31.9777 28.2765 31.5943 27.8932C31.211 27.5101 30.5895 27.5099 30.2063 27.8932L25.791 32.3083C24.6473 33.4522 24.6943 35.3605 25.8752 36.457C26.9933 37.4952 28.7837 37.4594 29.862 36.3792L37.8679 28.3721L42.5692 33.072C43.298 33.8034 44.5176 33.806 45.2474 33.0734L59.6907 18.6312C59.9931 19.8972 61.134 20.8414 62.4913 20.8414C64.0594 20.8414 65.3703 19.5309 65.3703 17.9624V11.7317C65.3704 10.1596 64.0908 8.88071 62.518 8.88071ZM21.187 65.2647C20.9694 66.1163 19.2836 65.8959 19.5311 64.9285L22.362 53.8518C23.1792 52.8745 23.7342 51.6718 23.9204 50.3517H24.9987L21.187 65.2647ZM33.5422 65.0967C33.5422 65.9708 32.1834 65.9722 32.1834 65.0967V50.3515H33.5422V65.0967ZM46.1948 64.9284C46.4416 65.8936 44.7563 66.1155 44.5388 65.2647L40.7273 50.3515H42.4694L46.1948 64.9284ZM15.8553 44.4632C16.2265 44.3782 16.6089 44.335 16.9918 44.335C19.7681 44.335 22.0267 46.5928 22.0276 49.3683L22.0275 49.37L22.0276 49.3717C22.0267 52.1472 19.768 54.405 16.9918 54.405C14.237 54.405 11.9568 52.1225 11.9568 49.3699C11.9568 47.0099 13.5604 44.9921 15.8553 44.4632ZM3.58417 15.0962C3.58417 13.5745 4.82208 12.3366 6.34372 12.3366H6.36977V12.9591C6.36977 13.4233 6.69485 13.8239 7.14911 13.9195L9.54104 14.4231C9.54536 14.4336 9.54968 14.4439 9.55413 14.4544L9.09556 15.1574H3.58417V15.0962ZM22.544 18.0489L20.7104 16.8529C20.0445 16.4189 18.4119 17.1039 18.2503 17.8724L17.7994 20.0141H16.1846L15.7338 17.8724C15.5702 17.0945 13.9313 16.424 13.2736 16.8529L11.44 18.0489L10.298 16.9071L11.494 15.0734C11.9279 14.4077 11.2432 12.7749 10.4747 12.6133L8.33284 12.1624V10.5477L10.4747 10.0969C11.2527 9.93331 11.9226 8.2944 11.494 7.63677L10.298 5.80313L11.44 4.66115L13.2736 5.85718C13.9394 6.29115 15.5721 5.6063 15.7338 4.83783L16.1847 2.69598H17.7996L18.2504 4.83783C18.414 5.61573 20.0529 6.28592 20.7105 5.85718L22.5442 4.66115L23.686 5.80313L22.49 7.63677C22.0559 8.30239 22.7411 9.9354 23.5095 10.0969L25.6512 10.5477V12.1626L23.5095 12.6134C22.7317 12.7769 22.0611 14.416 22.49 15.0735L23.686 16.9072L22.544 18.0489ZM55.6192 14.5596L55.0215 15.1573H24.8885L24.43 14.4544C24.4344 14.4439 24.4387 14.4335 24.4431 14.423L26.8349 13.9194C27.2892 13.8239 27.6143 13.4231 27.6143 12.9589V12.3365H53.4681C53.6874 13.4192 54.544 14.3053 55.6192 14.5596Z" fill="#F7A400" />
                                  <path d="M57.1475 41.8291H38.545C38.0028 41.8291 37.5635 42.2684 37.5635 42.8106C37.5635 43.3528 38.0028 43.7922 38.545 43.7922H57.1475C57.6897 43.7922 58.129 43.3528 58.129 42.8106C58.129 42.2684 57.6896 41.8291 57.1475 41.8291Z" fill="#F7A400" />
                                  <path d="M57.1479 37.5225H46.1192C45.577 37.5225 45.1377 37.9618 45.1377 38.504C45.1377 39.0462 45.577 39.4855 46.1192 39.4855H57.1479C57.6901 39.4855 58.1294 39.0462 58.1294 38.504C58.1294 37.9618 57.69 37.5225 57.1479 37.5225Z" fill="#F7A400" />
                                  <path d="M10.1622 32.6899C9.62 32.6899 9.18066 33.1293 9.18066 33.6715C9.18066 34.2137 9.62 34.653 10.1622 34.653H16.9916C17.5338 34.653 17.9731 34.2137 17.9731 33.6715C17.9731 33.1293 17.5338 32.6899 16.9916 32.6899H10.1622Z" fill="#F7A400" />
                                  <path d="M16.9933 51.6753C17.5355 51.6753 17.9748 51.2359 17.9748 50.6937V48.0465C17.9748 47.5043 17.5355 47.0649 16.9933 47.0649C16.4511 47.0649 16.0117 47.5043 16.0117 48.0465V50.6937C16.0117 51.2358 16.4511 51.6753 16.9933 51.6753Z" fill="#F7A400" />
                              </g>
                              <defs>
                                  <clipPath id="clip0_131_3995">
                                      <rect width="67.0062" height="67.0062" fill="white" transform="translate(-0.00683594 0.73291)" />
                                  </clipPath>
                              </defs>
                          </svg>
                      </div>
                      <div class="card-info">
                          <h5>APPROACH</h5>
                          <p>All Encompassing Holistic Wellness.</p>
                      </div>
                  </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="card-services-type-01">
                      <div class="card-icon">
                          <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.683 34.256H31.5444C32.0324 34.256 32.4286 33.8599 32.4286 33.3718C32.4286 32.8838 32.0324 32.4877 31.5444 32.4877H19.683C19.195 32.4877 18.7988 32.8838 18.7988 33.3718C18.7988 33.8599 19.1949 34.256 19.683 34.256Z" fill="#F7A400" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M27.1475 33.3717V54.6593C27.1475 55.1475 27.5436 55.5435 28.0316 55.5435C28.5191 55.5435 28.9158 55.1474 28.9158 54.6593V33.3717C28.9158 32.8836 28.5191 32.4875 28.0316 32.4875C27.5436 32.4875 27.1475 32.8837 27.1475 33.3717Z" fill="#F7A400" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.21162 0.456177C4.77029 0.456177 1.97559 3.25088 1.97559 6.69276C1.97559 10.1346 4.77029 12.9288 8.21162 12.9288C11.6536 12.9288 14.4483 10.1347 14.4483 6.69276C14.4483 3.25079 11.6536 0.456177 8.21162 0.456177ZM8.21162 2.2246C10.678 2.2246 12.6799 4.2265 12.6799 6.69276C12.6799 9.15856 10.678 11.1604 8.21162 11.1604C5.74581 11.1604 3.74401 9.15856 3.74401 6.69276C3.74401 4.2264 5.74591 2.2246 8.21162 2.2246Z" fill="#F7A400" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M48.7875 0.456177C45.3455 0.456177 42.5508 3.25088 42.5508 6.69276C42.5508 10.1346 45.3455 12.9288 48.7875 12.9288C52.2288 12.9288 55.0235 10.1347 55.0235 6.69276C55.0235 3.25079 52.2288 0.456177 48.7875 0.456177ZM48.7875 2.2246C51.2533 2.2246 53.2551 4.2265 53.2551 6.69276C53.2551 9.15856 51.2533 11.1604 48.7875 11.1604C46.3211 11.1604 44.3192 9.15856 44.3192 6.69276C44.3192 4.2264 46.3211 2.2246 48.7875 2.2246Z" fill="#F7A400" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0859 25.6167C13.2321 25.9115 13.5351 26.1077 13.8776 26.1077L14.2059 26.044L22.3477 22.7895C23.6009 22.2891 25.0245 22.8992 25.5256 24.1524C26.026 25.405 25.4154 26.8286 24.1627 27.3296L13.4102 31.6275C12.3827 32.0383 11.2191 31.7059 10.5606 30.8429C10.3308 30.5416 9.93398 30.4202 9.57447 30.5416C9.21552 30.663 8.97381 31.0003 8.97381 31.3793V35.8198C8.97381 36.269 9.31039 36.6463 9.75608 36.6981L16.9129 37.5246C18.6041 37.7197 19.8809 39.1521 19.8809 40.8551V54.6595C19.8809 55.1476 20.277 55.5436 20.765 55.5436C21.2532 55.5436 21.6492 55.1475 21.6492 54.6595V40.8551C21.6492 38.2538 19.6993 36.0662 17.1156 35.768L10.7421 35.0318V33.1855C11.762 33.6541 12.9598 33.7119 14.0662 33.2698L24.8194 28.972C26.978 28.1085 28.0303 25.655 27.1673 23.4958C26.3043 21.3365 23.8509 20.2843 21.6917 21.1473L14.2431 24.1247L9.96413 17.1212C9.35995 16.1321 8.37491 15.4359 7.24136 15.196C7.20659 15.1889 7.17183 15.1813 7.13641 15.1742C5.94859 14.923 4.71009 15.1965 3.73864 15.9245C2.76719 16.6532 2.15709 17.7649 2.06509 18.9756C1.54515 25.817 0.502404 39.5283 0.502404 39.5283C0.500555 39.5506 0.5 39.573 0.5 39.5955C0.5 42.1939 2.44586 44.3796 5.02596 44.6814L11.407 45.5055V54.6594C11.407 55.1475 11.8031 55.5435 12.2911 55.5435C12.7792 55.5435 13.1753 55.1474 13.1753 54.6594V44.728C13.1753 44.283 12.8452 43.908 12.4042 43.8509L5.23622 42.926C3.55685 42.7321 2.28645 41.3185 2.26824 39.6314C2.26824 39.6267 3.82796 19.1095 3.82796 19.1095C3.88159 18.4074 4.23528 17.762 4.79886 17.3399C5.363 16.9172 6.081 16.7587 6.77061 16.9043L6.87492 16.9261C7.53281 17.0653 8.10398 17.4696 8.4547 18.0432C9.79223 20.2325 12.5032 24.6701 13.032 25.536C13.0499 25.5642 13.0676 25.5913 13.0859 25.6167Z" fill="#F7A400" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.06622 26.9028L8.90753 31.5544C9.97856 33.3074 12.1585 34.0325 14.0666 33.2697C14.5199 33.0887 14.741 32.5735 14.5594 32.1208C14.3785 31.6675 13.8633 31.4465 13.4106 31.6274C12.3035 32.0701 11.0385 31.6498 10.4166 30.6324L7.57536 25.9809C7.32071 25.5647 6.77599 25.4333 6.35989 25.6873C5.94361 25.942 5.81156 26.4866 6.06622 26.9028Z" fill="#F7A400" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M41.939 25.4646L33.3774 26.6754C31.0749 27.0008 29.4704 29.1346 29.7958 31.4371C30.1212 33.739 32.2551 35.3441 34.5576 35.0187L45.0874 33.5291C45.4971 33.4713 45.8908 33.3546 46.2581 33.1854V35.0316L39.8847 35.7678C37.301 36.0661 35.351 38.2535 35.351 40.8549V54.6592C35.351 55.1474 35.7471 55.5434 36.2352 55.5434C36.7232 55.5434 37.1194 55.1473 37.1194 54.6592V40.8549C37.1194 39.152 38.3961 37.7195 40.0873 37.5244L47.2417 36.6979H47.24C47.6827 36.6495 48.0263 36.2747 48.0263 35.8196V31.3785C48.0263 30.9995 47.7846 30.6629 47.4257 30.5415C47.0667 30.4194 46.6699 30.5409 46.4395 30.8421C46.0523 31.3491 45.4787 31.688 44.8397 31.7782L34.3099 33.2672C32.9735 33.4564 31.7356 32.5251 31.547 31.1887C31.3578 29.853 32.2891 28.6151 33.6249 28.4258L42.5972 27.1573L42.4758 27.1655L43.2304 26.7423L48.0145 18.9111C48.6263 17.9102 49.7469 17.3355 50.9171 17.4239C50.9337 17.4251 50.9496 17.4262 50.966 17.4274C52.5423 17.5465 53.7819 18.8233 53.8538 20.4019L54.7315 39.614C54.7221 41.3082 53.4488 42.7306 51.7635 42.9257L44.7447 43.7363C44.3032 43.7869 43.9683 44.1577 43.9624 44.6022L43.8245 54.6468C43.818 55.135 44.2088 55.5364 44.6963 55.5434C45.1845 55.5499 45.5859 55.1591 45.5929 54.671L45.7197 45.4032L51.9663 44.6823C54.55 44.384 56.4999 42.1959 56.4999 39.5951C56.4999 39.5816 56.4994 39.5681 56.4987 39.5545C56.4987 39.5545 55.9128 26.7252 55.6204 20.3212C55.5072 17.8489 53.5667 15.85 51.0992 15.6643C51.0826 15.6631 51.0662 15.6613 51.0503 15.6601C49.2182 15.5221 47.4633 16.4217 46.5054 17.9892L41.939 25.4646Z" fill="#F7A400" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M36.8522 3.10876C36.8522 2.40555 36.5727 1.73055 36.0752 1.23308C35.5777 0.735518 34.9034 0.456177 34.1996 0.456177H21.8636C20.3982 0.456177 19.2109 1.644 19.2109 3.10876V14.3465C19.2109 14.9241 19.5481 15.4488 20.0739 15.6881C20.5997 15.9274 21.2169 15.8372 21.6525 15.4576C22.5031 14.7166 23.7016 13.672 24.3694 13.0897C24.5309 12.9494 24.7372 12.8722 24.9506 12.8722H34.1995C34.9033 12.8722 35.5777 12.5928 36.0752 12.0953C36.5726 11.5977 36.8521 10.9228 36.8521 10.2196V3.10876H36.8522ZM20.9794 13.6987V3.10876C20.9794 2.62072 21.3749 2.2246 21.8635 2.2246H34.1995C34.4341 2.2246 34.6592 2.31771 34.8249 2.48397C34.9905 2.64957 35.0837 2.87417 35.0837 3.10876V10.2196C35.0837 10.4542 34.9906 10.6788 34.8249 10.8444C34.6593 11.0107 34.4341 11.1038 34.1995 11.1038H24.9507C24.3099 11.1038 23.691 11.3354 23.2076 11.7563L20.9794 13.6987Z" fill="#F7A400" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0922 5.93349H32.1043C32.5924 5.93349 32.9885 5.53736 32.9885 5.04933C32.9885 4.56129 32.5923 4.16516 32.1043 4.16516H24.0922C23.6041 4.16516 23.208 4.56129 23.208 5.04933C23.208 5.53736 23.604 5.93349 24.0922 5.93349Z" fill="#F7A400" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0922 9.15798H28.0316C28.5191 9.15798 28.9158 8.76185 28.9158 8.27381C28.9158 7.78568 28.5191 7.38965 28.0316 7.38965H24.0922C23.6041 7.38965 23.208 7.78578 23.208 8.27381C23.2079 8.76185 23.604 9.15798 24.0922 9.15798Z" fill="#F7A400" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.4305 33.9053L45.0873 33.5293C46.334 33.353 47.4363 32.6286 48.093 31.5546L50.9342 26.903C51.1888 26.4868 51.0568 25.9422 50.6406 25.6876C50.2244 25.4335 49.6798 25.5649 49.4251 25.9811L46.5839 30.6327C46.2031 31.2557 45.5629 31.6761 44.8396 31.7786L42.1829 32.1541C41.6995 32.2225 41.3623 32.6705 41.4307 33.1539C41.4991 33.6365 41.9471 33.9737 42.4305 33.9053Z" fill="#F7A400" />
                          </svg>
                      </div>
                      <div class="card-info">
                          <h5>CUSTOM MADE</h5>
                          <p>Individual tailored program. Programs & Services, Custom Made for You.</p>
                      </div>
                  </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="card-services-type-01">
                      <div class="card-icon">
                          <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_158_3084)">
                                  <path d="M56.5 28C56.5 12.5612 43.9388 0 28.5 0C23.6596 0 18.9439 1.25368 14.7628 3.6129H11.3387V0H5.91935V11.4592C2.37871 16.2825 0.5 21.9908 0.5 28C0.5 43.4397 13.0612 56 28.5 56C31.9404 56 35.2986 55.3813 38.4824 54.1655C40.2997 55.3208 42.4494 56 44.7581 56C47.5743 56 50.2985 54.9875 52.4283 53.1494L51.2477 51.7819C49.4458 53.3373 47.1417 54.1935 44.7581 54.1935C39.28 54.1935 34.8226 49.7361 34.8226 44.2581C34.8226 38.78 39.28 34.3226 44.7581 34.3226C50.2361 34.3226 54.6935 38.78 54.6935 44.2581C54.6935 46.5477 53.9366 48.7001 52.5032 50.4822L53.9114 51.6148C55.5805 49.5383 56.5 46.9262 56.5 44.2581C56.5 41.9476 55.8199 39.7979 54.6637 37.9797C55.8786 34.795 56.5 31.4404 56.5 28ZM14.9516 9.03226H16.7581V10.8387V21.6774H14.9516V9.03226ZM11.3387 5.41935H13.1452V7.22581V21.6774H11.3387V5.41935ZM7.72581 1.80645H9.53226V3.6129V21.6774H7.72581V1.80645ZM27.5968 54.171C13.8714 53.7022 2.79781 42.6286 2.32903 28.9032H27.5968V54.171ZM27.5968 27.0968H2.34258C2.48981 22.6999 3.71097 18.4981 5.91935 14.7524V23.4839H9.53226H11.3387H13.1452H14.9516H16.7581H18.5645H20.371H22.1774H25.7903V14.4516H22.1774V10.8387H18.5645V7.22581H14.9516V5.59277C18.7732 3.2769 23.1159 1.99161 27.5968 1.83806V27.0968ZM18.5645 21.6774V12.6452H20.371V14.4516V21.6774H18.5645ZM22.1774 21.6774V16.2581H23.9839V21.6774H22.1774ZM54.671 27.0968H46.9385L53.5808 20.4545C54.2185 22.5689 54.5924 24.7954 54.671 27.0968ZM50.1196 13.2323L40.0315 23.3204L41.3086 24.5975L51.1086 14.7975C51.8095 15.9934 52.4174 17.2489 52.925 18.5559L44.3841 27.0968H38.8094L39.9773 25.9289L38.7001 24.6517L36.2551 27.0968H30.6804L47.6366 10.1405C48.5381 11.107 49.3699 12.1385 50.1196 13.2323ZM29.4032 1.82903C31.7046 1.90761 33.9311 2.28155 36.0455 2.91923L29.4032 9.56155V1.82903ZM29.4032 20.2449L40.3801 9.268L39.103 7.99084L29.4032 17.6906V12.1159L37.9441 3.57497C39.2511 4.08168 40.5066 4.68955 41.7025 5.39135L40.2474 6.84645L41.5245 8.12361L43.2677 6.38039C44.3615 7.13006 45.393 7.96103 46.3595 8.86335L29.4032 25.8196V20.2449ZM44.7581 32.5161C38.2837 32.5161 33.0161 37.7837 33.0161 44.2581C33.0161 47.6551 34.4748 50.7098 36.788 52.8559C34.408 53.6498 31.9323 54.0879 29.4032 54.1728V28.9032H54.6728C54.5879 31.4314 54.1462 33.9053 53.3532 36.2853C51.2071 33.973 48.1533 32.5161 44.7581 32.5161Z" fill="#F7A400" />
                                  <path d="M22.4462 32.7805L11.6074 43.6193L12.8848 44.8966L23.7236 34.0578L22.4462 32.7805Z" fill="#F7A400" />
                                  <path d="M21.2741 39.7419C19.7802 39.7419 18.5645 40.9577 18.5645 42.4516C18.5645 43.9456 19.7802 45.1613 21.2741 45.1613C22.7681 45.1613 23.9838 43.9456 23.9838 42.4516C23.9838 40.9577 22.7681 39.7419 21.2741 39.7419ZM21.2741 43.3548C20.7765 43.3548 20.3709 42.9502 20.3709 42.4516C20.3709 41.953 20.7765 41.5484 21.2741 41.5484C21.7718 41.5484 22.1774 41.953 22.1774 42.4516C22.1774 42.9502 21.7718 43.3548 21.2741 43.3548Z" fill="#F7A400" />
                                  <path d="M14.0485 32.5161C12.5546 32.5161 11.3389 33.7319 11.3389 35.2258C11.3389 36.7197 12.5546 37.9355 14.0485 37.9355C15.5425 37.9355 16.7582 36.7197 16.7582 35.2258C16.7582 33.7319 15.5425 32.5161 14.0485 32.5161ZM14.0485 36.129C13.5509 36.129 13.1453 35.7244 13.1453 35.2258C13.1453 34.7272 13.5509 34.3226 14.0485 34.3226C14.5462 34.3226 14.9518 34.7272 14.9518 35.2258C14.9518 35.7244 14.5462 36.129 14.0485 36.129Z" fill="#F7A400" />
                                  <path d="M44.7584 43.3548C43.7622 43.3548 42.952 42.5446 42.952 41.5484C42.952 40.5521 43.7622 39.7419 44.7584 39.7419C45.7547 39.7419 46.5649 40.5521 46.5649 41.5484H48.3713C48.3713 39.8693 47.2152 38.4675 45.6616 38.0637V36.129H43.8552V38.0637C42.3016 38.4675 41.1455 39.8693 41.1455 41.5484C41.1455 43.5409 42.7659 45.1613 44.7584 45.1613C45.7547 45.1613 46.5649 45.9715 46.5649 46.9677C46.5649 47.964 45.7547 48.7742 44.7584 48.7742C43.7622 48.7742 42.952 47.964 42.952 46.9677H41.1455C41.1455 48.6468 42.3016 50.0486 43.8552 50.4524V52.3871H45.6616V50.4524C47.2152 50.0486 48.3713 48.6468 48.3713 46.9677C48.3713 44.9752 46.7509 43.3548 44.7584 43.3548Z" fill="#F7A400" />
                                  <path d="M52.8875 43.3549H51.0811V45.1613H52.8875V43.3549Z" fill="#F7A400" />
                                  <path d="M38.4354 43.3549H36.6289V45.1613H38.4354V43.3549Z" fill="#F7A400" />
                              </g>
                              <defs>
                                  <clipPath id="clip0_158_3084">
                                      <rect width="56" height="56" fill="white" transform="translate(0.5)" />
                                  </clipPath>
                              </defs>
                          </svg>
                      </div>
                      <div class="card-info">
                          <h5>ASSISTANCE</h5>
                          <p>24/7 Support, Continuum Care & Love.</p>
                      </div>
                  </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="card-services-type-01">
                      <div class="card-icon">
                          <svg width="51" height="56" viewBox="0 0 51 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M50.4935 9.73729C50.3669 8.317 49.196 7.24593 47.7701 7.24593H40.696V6.20341H40.8336C41.8438 6.20341 42.6656 5.3816 42.6656 4.37156V1.83185C42.6656 0.821813 41.8438 0 40.8336 0H20.0127C19.5597 0 19.1924 0.367158 19.1924 0.820282C19.1924 1.27341 19.5597 1.64056 20.0127 1.64056H40.8336C40.9392 1.64056 41.025 1.72631 41.025 1.83185V4.37156C41.025 4.4771 40.9392 4.56285 40.8336 4.56285H10.1654C10.0598 4.56285 9.97398 4.4771 9.97398 4.37156V1.83185C9.97398 1.72631 10.0598 1.64056 10.1654 1.64056H16.1667C16.6197 1.64056 16.987 1.27341 16.987 0.820282C16.987 0.367158 16.6197 0 16.1667 0H10.1654C9.15523 0 8.33342 0.821813 8.33342 1.83185V4.37156C8.33342 5.3816 9.15523 6.20341 10.1654 6.20341H10.3031V7.24593H3.22897C1.80299 7.24593 0.632173 8.317 0.505521 9.73729C0.488897 9.92301 0.120317 14.3441 1.93073 19.2406C3.58716 23.7207 7.38736 29.441 16.0944 31.686C17.4961 32.7934 19.0966 33.6601 20.8331 34.2217L21.246 34.9032C22.0263 36.1915 22.4388 37.7145 22.4388 39.3075C22.4388 40.2805 22.2837 41.2312 21.9779 42.1327L21.4046 43.8223H19.497C17.5395 43.8223 15.9468 45.415 15.9468 47.3726V49.0909H12.9614C12.119 49.0909 11.4335 49.7765 11.4335 50.6189V54.4721C11.4335 55.3146 12.119 56 12.9614 56H38.0377C38.8802 56 39.5656 55.3146 39.5656 54.4721V50.6189C39.5656 49.7765 38.8802 49.0909 38.0377 49.0909H35.0523V47.3726C35.0523 45.415 33.4596 43.8223 31.5021 43.8223H29.5946L29.0213 42.1327C28.7154 41.2313 28.5603 40.2807 28.5603 39.3075C28.5603 37.7146 28.9727 36.1916 29.7531 34.9032L30.1659 34.2217C31.9024 33.6601 33.5028 32.7936 34.9047 31.686C43.6117 29.441 47.4119 23.7207 49.0683 19.2406C50.8787 14.3441 50.5101 9.92311 50.4935 9.73729ZM10.6068 22.7879C9.07736 21.356 7.90567 19.5797 7.10431 17.4626C6.5475 15.9916 6.18308 14.3944 6.02088 12.7145H10.3031V19.7593C10.3031 20.7961 10.408 21.8089 10.6068 22.7879ZM3.46958 18.6718C1.78582 14.1178 2.12443 10.0538 2.13963 9.88308C2.19027 9.31501 2.6586 8.88661 3.22897 8.88661H10.3031V11.074H5.95296C5.50979 11.074 5.08455 11.2618 4.78619 11.5893C4.4875 11.9172 4.33985 12.3586 4.38108 12.8004C4.55378 14.6513 4.95375 16.4154 5.56994 18.0435C6.78691 21.2588 8.75679 23.7694 11.4532 25.5567C11.9838 26.8372 12.6845 28.03 13.5273 29.1068C7.58434 26.6434 4.78543 22.2305 3.46958 18.6718ZM37.925 50.7315V54.3594H13.074V50.7315H37.925ZM31.5021 45.4629C32.555 45.4629 33.4117 46.3196 33.4117 47.3726V49.0909H17.5874V47.3726C17.5874 46.3196 18.4441 45.4629 19.497 45.4629H31.5021ZM27.4678 42.6599L27.8621 43.8223H23.1368L23.5313 42.6598C23.8948 41.5881 24.0792 40.4602 24.0792 39.3075C24.0792 37.6939 23.7186 36.1362 23.0329 34.7545C23.836 34.8862 24.6597 34.9557 25.4995 34.9557C26.3393 34.9557 27.163 34.8862 27.966 34.7545C27.2803 36.1362 26.9197 37.6939 26.9197 39.3075C26.9198 40.4604 27.1041 41.5882 27.4678 42.6599ZM25.4995 33.315C18.0248 33.315 11.9436 27.2339 11.9436 19.7593V6.20341H39.0554V19.7593C39.0554 27.234 32.9743 33.315 25.4995 33.315ZM47.5296 18.6718C46.2137 22.2306 43.4147 26.644 37.4714 29.1073C38.3157 28.0286 39.0175 26.8335 39.5485 25.5504C41.8638 24.0129 43.6469 21.9423 44.8747 19.3496C45.0686 18.9402 44.8938 18.451 44.4845 18.2572C44.0752 18.0634 43.5861 18.2379 43.3921 18.6474C42.6319 20.2527 41.6294 21.6356 40.3916 22.7929C40.5911 21.8124 40.6962 20.798 40.6962 19.7594V12.7146H44.9784C44.8968 13.5586 44.7612 14.3956 44.5751 15.2037C44.4735 15.6452 44.749 16.0855 45.1905 16.187C45.6316 16.2892 46.0723 16.0132 46.1739 15.5717C46.3811 14.6717 46.5305 13.7393 46.6182 12.8004C46.6594 12.3586 46.5118 11.9172 46.2131 11.5893C45.9147 11.2618 45.4895 11.074 45.0463 11.074H40.6962V8.88661H47.7703C48.3407 8.88661 48.809 9.31501 48.8596 9.88319C48.8746 10.0538 49.2132 14.1178 47.5296 18.6718Z" fill="#F7A400" />
                              <path d="M30.8936 15.9313L28.5414 15.5895C28.439 15.5745 28.3505 15.5102 28.3047 15.4175L27.2527 13.2861C26.921 12.6139 26.2493 12.1963 25.4996 12.1963C24.75 12.1963 24.0782 12.6139 23.7465 13.2861L22.6946 15.4175C22.6488 15.5103 22.5603 15.5746 22.4578 15.5895L20.1057 15.9313C19.3638 16.039 18.7591 16.5488 18.5274 17.2618C18.2958 17.9748 18.4853 18.7427 19.0221 19.266L20.7242 20.925C20.7983 20.9972 20.8321 21.1013 20.8146 21.2034L20.4128 23.5461C20.286 24.2849 20.5841 25.0175 21.1905 25.4582C21.7969 25.8986 22.5859 25.9558 23.2495 25.607L25.3533 24.5009C25.4449 24.4527 25.5543 24.4527 25.646 24.5009L27.7498 25.607C28.0385 25.7587 28.3507 25.8336 28.6613 25.8336C29.065 25.8336 29.4661 25.7071 29.8087 25.4581C30.4152 25.0174 30.7132 24.2847 30.5865 23.546L30.1846 21.2033C30.1671 21.1012 30.2009 20.9971 30.2751 20.925L31.9772 19.2658C32.514 18.7426 32.7036 17.9746 32.4719 17.2617C32.2403 16.5488 31.6353 16.039 30.8936 15.9313ZM30.832 18.0912L29.1299 19.7503C28.6691 20.1995 28.4589 20.8463 28.5676 21.4807L28.9694 23.8234C28.9982 23.9911 28.9034 24.0881 28.8443 24.1311C28.7853 24.174 28.6637 24.2344 28.5131 24.155L26.4093 23.0489C26.1245 22.8992 25.812 22.8243 25.4995 22.8243C25.187 22.8243 24.8746 22.8992 24.5898 23.0489L22.486 24.155C22.3355 24.2343 22.2139 24.1739 22.1547 24.1311C22.0957 24.0881 22.001 23.9912 22.0296 23.8234L22.4314 21.4807C22.5403 20.8463 22.3301 20.1995 21.8692 19.7502L20.1671 18.0913C20.0453 17.9725 20.0649 17.8383 20.0875 17.7688C20.11 17.6994 20.173 17.5793 20.3414 17.5548L22.6935 17.213C23.3305 17.1204 23.8807 16.7206 24.1655 16.1436L25.2174 14.0122C25.2927 13.8596 25.4265 13.8368 25.4994 13.8368C25.5724 13.8368 25.7061 13.8596 25.7814 14.0122L26.8333 16.1436C27.1181 16.7206 27.6683 17.1205 28.3053 17.213L30.6576 17.5548C30.8259 17.5793 30.8889 17.6994 30.9114 17.7688C30.9342 17.8383 30.9537 17.9725 30.832 18.0912Z" fill="#F7A400" />
                          </svg>
                      </div>
                      <div class="card-info">
                          <h5>COMPETENCE</h5>
                          <p>Highly Qualified Multidisciplinary Team.</p>
                      </div>
                  </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="card-services-type-01">
                      <div class="card-icon">
                          <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M49.551 38.7063C49.4985 38.6759 42.0606 35.1439 27.237 28.101V4.35168C27.237 3.85479 26.8341 3.45185 26.3371 3.45185C12.3008 3.45185 0.911506 14.612 0.512943 28.5298C0.498725 28.6205 0.497631 28.6881 0.507256 28.7725C0.223647 43.3459 11.9416 55.1241 26.3371 55.1241C36.4547 55.1241 45.6725 49.1848 49.8621 39.9816C50.1532 39.5354 49.9942 38.9557 49.551 38.7063ZM25.4373 5.2701V27.77H2.35001C3.11749 15.5177 13.1045 5.72642 25.4373 5.2701ZM26.3371 53.3244C13.1775 53.3244 2.45588 42.694 2.30418 29.5695H26.1343L47.9041 39.9127C43.8703 48.089 35.4999 53.3244 26.3371 53.3244ZM30.6649 0.875854C30.168 0.875854 29.7651 1.27868 29.7651 1.77568C29.7651 27.769 29.7402 26.1665 29.8131 26.3819C29.886 26.5976 30.0416 26.7866 30.2615 26.8972C30.3477 26.9404 53.0744 37.7365 53.0594 37.7299C53.5903 37.9681 54.1662 37.6698 54.3064 37.1441C55.6938 34.0049 56.4288 30.6693 56.4945 27.219C56.4949 27.2038 56.4953 27.1886 56.495 27.1734C56.748 12.5673 44.9796 0.875854 30.6649 0.875854ZM31.5647 2.694C33.1606 2.75306 34.7173 2.96776 36.2198 3.32454L31.5647 7.97965V2.694ZM31.5647 10.5247L38.2021 3.88728C39.2885 4.2469 40.3404 4.68221 41.3523 5.18665L31.5646 14.9743L31.5647 10.5247ZM31.5647 17.5192L42.9964 6.08757C43.9132 6.63773 44.7902 7.24739 45.6226 7.91096L31.5647 21.9687V17.5192ZM31.5647 25.5249V24.5137L46.9906 9.08784C47.761 9.80184 48.485 10.5649 49.1567 11.3733L33.8969 26.633L31.5647 25.5249ZM35.6222 27.4528L50.2639 12.8111C50.8878 13.6881 51.4529 14.6094 51.9566 15.568L38.6387 28.8859L35.6222 27.4528ZM40.3639 29.7056L52.7776 17.2919C53.2339 18.359 53.6148 19.4656 53.9143 20.6048L43.3804 31.1387L40.3639 29.7056ZM52.9657 35.6929L49.8473 34.2113L54.5385 29.5201C54.293 31.6426 53.767 33.7078 52.9657 35.6929ZM54.7001 26.8135L48.122 33.3915L45.1056 31.9584L54.3646 22.6993C54.5957 24.0687 54.7056 25.4226 54.7001 26.8135Z" fill="#F7A400" />
                          </svg>
                      </div>
                      <div class="card-info">
                          <h5>LOCATION</h5>
                          <p>Picturesque Pollachi, Coimbatore</p>
                      </div>
                  </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="card-services-type-01">
                      <div class="card-icon">
                          <svg width="49" height="56" viewBox="0 0 49 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M48.348 6.79602L42.9642 1.41236C42.6129 1.06094 42.1645 0.875 41.6674 0.875H12.2724C11.2612 0.875 10.4385 1.69761 10.4385 2.709V22.8218C9.71992 23.1001 9.15019 23.7103 8.9485 24.4806C8.00044 23.9257 6.7715 24.0781 5.99024 24.8596C5.53086 25.319 5.27788 25.9314 5.27788 26.584C5.27788 27.2367 5.53086 27.849 5.99024 28.3084L7.1227 29.4408C6.18897 29.7685 5.51752 30.6583 5.51752 31.7025C5.51752 32.4983 5.90777 33.2044 6.50659 33.6405C4.17428 36.2191 2.57052 38.3214 1.50531 40.1915C-0.313264 43.3846 -0.34903 46.9157 1.4072 49.8792C3.33264 53.1282 7.03695 55.1253 11.1124 55.125C11.1773 55.125 11.243 55.1246 11.3082 55.1235C11.3737 55.1246 11.4386 55.125 11.5039 55.125C15.4487 55.125 19.046 53.2538 21.0187 50.1873H47.0514C48.0625 50.1873 48.8853 49.3647 48.8853 48.3534V8.09287C48.8851 7.59587 48.6994 7.14744 48.348 6.79602ZM42.9396 3.86258L45.8977 6.82052H42.9396V3.86258ZM7.2277 26.097C7.45488 25.8698 7.81658 25.8312 8.08794 26.0052C8.55158 26.3028 9.13127 26.3547 9.63811 26.1447C10.145 25.9347 10.5177 25.4881 10.6351 24.9502C10.7038 24.6352 10.9869 24.4066 11.3082 24.4066C11.6295 24.4066 11.9126 24.6352 11.9814 24.9501C12.0988 25.4882 12.4716 25.9348 12.9786 26.1448C13.4856 26.3549 14.0651 26.3025 14.5287 26.0051C14.7997 25.8311 15.1615 25.8699 15.3887 26.0969C15.5176 26.2258 15.5885 26.3987 15.5885 26.5839C15.5885 26.769 15.5177 26.9419 15.3887 27.0707L13.1536 29.3058H9.46267L7.2276 27.0707C7.09875 26.9419 7.02777 26.769 7.02777 26.5839C7.02777 26.3989 7.09875 26.2259 7.2277 26.097ZM17.0989 31.7025C17.0989 31.5818 17.0897 31.4633 17.0724 31.3473H18.5721V36.524C17.8599 35.6287 17.0438 34.673 16.1098 33.6404C16.7087 33.2043 17.0989 32.4983 17.0989 31.7025ZM14.7023 32.349H7.91414C7.55758 32.349 7.26752 32.0589 7.26752 31.7023C7.26752 31.3458 7.55758 31.0558 7.91414 31.0558H14.7023C15.0588 31.0558 15.3489 31.3459 15.3489 31.7025C15.3489 32.059 15.0587 32.349 14.7023 32.349ZM19.7037 48.9869C18.065 51.7521 14.8555 53.4371 11.3229 53.3734C11.3131 53.3731 11.3032 53.3731 11.2934 53.3734C7.76025 53.4331 4.5513 51.752 2.91264 48.9869C1.46484 46.5439 1.5051 43.7278 3.02595 41.0574C4.12211 39.1327 5.85461 36.9143 8.45916 34.099H14.1572C16.7617 36.9143 18.4942 39.1327 19.5904 41.0574C21.1112 43.7278 21.1515 46.5439 19.7037 48.9869ZM47.0513 48.4373H21.9065C22.9095 45.8095 22.6427 42.8807 21.1111 40.1914C20.8754 39.7776 20.6125 39.352 20.3222 38.913V30.4723C20.3222 29.9891 19.9304 29.5973 19.4472 29.5973H15.8469C15.7343 29.5358 15.6162 29.4837 15.4937 29.4407L16.6261 28.3082C17.0565 27.8778 17.3027 27.3128 17.3325 26.7066C17.4799 26.6863 17.624 26.6296 17.7498 26.5318L25.6836 20.354L33.5422 22.901C33.8563 23.003 34.2009 22.9192 34.4333 22.6847L40.9628 16.0995L40.9408 16.2963C40.8871 16.7766 41.2328 17.2095 41.7132 17.2631C41.7462 17.2668 41.779 17.2687 41.8114 17.2687C42.2511 17.2687 42.6299 16.938 42.6799 16.4908L42.9812 13.7954C43.0104 13.5346 42.921 13.2745 42.7377 13.0868C42.5544 12.899 42.2961 12.8033 42.0352 12.8264L39.3334 13.0633C38.8521 13.1056 38.4959 13.5301 38.5382 14.0115C38.5803 14.4927 39.0044 14.8478 39.4862 14.8068L39.8081 14.7785L33.5697 21.0703L25.7819 18.5463C25.5061 18.457 25.2036 18.51 24.9746 18.6882L16.7998 25.0537C16.7455 24.9865 16.6881 24.9214 16.6262 24.8595C15.8449 24.0784 14.616 23.926 13.6681 24.4805C13.4674 23.714 12.9023 23.1061 12.1887 22.8259V2.709C12.1887 2.66427 12.2279 2.625 12.2726 2.625H41.1898V7.21623C41.1898 7.96305 41.7974 8.57063 42.5442 8.57063H47.1354V48.3535C47.1351 48.3981 47.096 48.4373 47.0513 48.4373ZM27.7469 24.0632H23.2771C22.7938 24.0632 22.4021 24.4549 22.4021 24.9382V39.2051C22.4021 39.6884 22.7938 40.0801 23.2771 40.0801H27.7469C28.2301 40.0801 28.6219 39.6884 28.6219 39.2051V24.9382C28.6219 24.4549 28.2302 24.0632 27.7469 24.0632ZM26.8719 38.3302H24.1521V25.8132H26.8719V38.3302ZM36.0467 25.9262H31.5769C31.0937 25.9262 30.7019 26.318 30.7019 26.8012V39.2052C30.7019 39.6885 31.0937 40.0802 31.5769 40.0802H36.0467C36.5299 40.0802 36.9217 39.6885 36.9217 39.2052V26.8012C36.9217 26.318 36.53 25.9262 36.0467 25.9262ZM35.1717 38.3302H32.4519V27.6762H35.1717V38.3302ZM44.3464 18.1999H39.8766C39.3934 18.1999 39.0016 18.5917 39.0016 19.0749V39.2051C39.0016 39.6884 39.3934 40.0801 39.8766 40.0801H44.3464C44.8296 40.0801 45.2214 39.6884 45.2214 39.2051V19.0749C45.2214 18.5917 44.8296 18.1999 44.3464 18.1999ZM43.4714 38.3301H40.7516V19.9499H43.4714V38.3301ZM17.4129 12.8738C17.4129 13.357 17.0211 13.7488 16.5379 13.7488H14.9773C14.494 13.7488 14.1023 13.357 14.1023 12.8738C14.1023 12.3905 14.494 11.9988 14.9773 11.9988H16.5379C17.0211 11.9988 17.4129 12.3905 17.4129 12.8738ZM32.8024 12.8738C32.8024 13.357 32.4106 13.7488 31.9274 13.7488H19.7834C19.3002 13.7488 18.9084 13.357 18.9084 12.8738C18.9084 12.3905 19.3002 11.9988 19.7834 11.9988H31.9274C32.4108 11.9988 32.8024 12.3905 32.8024 12.8738ZM17.4129 8.54208C17.4129 9.0253 17.0211 9.41708 16.5379 9.41708H14.9773C14.494 9.41708 14.1023 9.0253 14.1023 8.54208C14.1023 8.05886 14.494 7.66708 14.9773 7.66708H16.5379C17.0211 7.66708 17.4129 8.05886 17.4129 8.54208ZM32.8024 8.54208C32.8024 9.0253 32.4106 9.41708 31.9274 9.41708H19.7834C19.3002 9.41708 18.9084 9.0253 18.9084 8.54208C18.9084 8.05886 19.3002 7.66708 19.7834 7.66708H31.9274C32.4108 7.66708 32.8024 8.05886 32.8024 8.54208ZM14.7745 45.5582C14.8636 46.2924 14.6652 46.9643 14.2007 47.5015C13.7328 48.0425 12.9973 48.424 12.1542 48.5797V48.9463C12.1542 49.4295 11.7624 49.8213 11.2792 49.8213C10.796 49.8213 10.4042 49.4295 10.4042 48.9463V48.5652C9.09725 48.2863 8.09658 47.3966 7.78891 46.1628C7.67199 45.6939 7.95735 45.219 8.42624 45.1021C8.89502 44.9852 9.37003 45.2706 9.48684 45.7394C9.70013 46.5947 10.5669 46.9008 11.2806 46.9077C11.2889 46.9078 11.297 46.9079 11.3052 46.9078C11.3255 46.9078 11.3458 46.9075 11.3658 46.907C11.9982 46.8919 12.6055 46.6709 12.8771 46.3567C13.0176 46.1945 13.0669 46.0132 13.0373 45.7692C12.986 45.3473 12.7247 44.8296 11.1449 44.5702C8.66719 44.1634 8.08805 42.8622 8.03861 41.8423C7.97091 40.45 8.9193 39.2833 10.4042 38.9227V38.5266C10.4042 38.0434 10.796 37.6516 11.2792 37.6516C11.7624 37.6516 12.1542 38.0434 12.1542 38.5266V38.9149C13.117 39.1374 14.0302 39.7545 14.5098 40.8967C14.6968 41.3422 14.4874 41.8552 14.0418 42.0422C13.5961 42.2295 13.0833 42.0198 12.8963 41.5742C12.5965 40.8603 11.9506 40.5684 11.3226 40.5645C11.2998 40.5657 11.2768 40.5658 11.2542 40.5652C11.1162 40.5688 10.9797 40.5862 10.8487 40.6161C10.664 40.658 9.74552 40.9097 9.78675 41.7576C9.79769 41.9828 9.82667 42.5806 11.4286 42.8436C13.4707 43.1785 14.5964 44.0919 14.7745 45.5582Z" fill="#F7A400" />
                          </svg>
                      </div>
                      <div class="card-info">
                          <h5>RECREATION</h5>
                          <p>Variety Of Indoor & Outdoor Activities.</p>
                      </div>
                  </div>
              </div>
          </div>
          
      </div>
  </section>
  

  <section class="choose-area">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-lg-6 order-0 order-lg-2">
                         <div class="col-44">
                                      <div class="services__details-inner-img">
                                          <img src={require("./assets/img/images/drugaddictiontreatmentincoimbatore-700x467.jpg")} alt="" />
                                          <a href="https://www.youtube.com/watch?v=sxkFym1UYx0&ab_channel=LotusWellnessandRehabilitationCenter" class="play-btn popup-video"><i class="fas fa-play"></i></a>
                                      </div>
                                  </div>
              </div>
              <div class="col-lg-6">
                  <div class="choose-content">
                      <div class="section-title white-title mb-30 tg-heading-subheading animation-style3">
                          <span class="sub-title">Recover at the best</span>
                          <h2 class="title tg-element-title animate__animated animate__fadeInLeft">How much does Lotus Rehab Cost ?</h2>
                      </div>
                      <p>Lotus offers a wide variety of accommodation options for your selection. We believe our environment and people around you can contribute towards your overall Health and Well-Being.</p>
     <div class="row justify-content-center">
                  <div class="col-12">
                      <div class="project-content-bottom">

                          <a href="project-details" class="btn">See All Projects</a>
                      </div>
                  </div>
              </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="choose-shape-wrap">
          <img src={ require("./assets/img/images/choose_shape01.png")} alt="" data-aos="fade-right" data-aos-delay="400"/>
          <img src={ require("./assets/img/images/choose_shape02.png")} alt="" data-aos="fade-left" data-aos-delay="400"/>
      </div>
  </section>

<section class="counter-area" data-aos="fade-up" data-aos-duration="3000">
      <div class="container">
                <div class="elementor-container elementor-column-gap-no">
                   <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-620c652" data-id="620c652" data-element_type="column">
                      <div class="elementor-widget-wrap elementor-element-populated">
                         <div class="elementor-element elementor-element-f49e9db elementor-align-center elementor-widget elementor-widget-heading" data-id="f49e9db" data-element_type="widget" data-widget_type="heading.default">
                            <div class="elementor-widget-container">
                               <h4 class="elementor-heading-title elementor-size-default">LASTING APPROACH</h4><br/><br/>
                            </div>
                         </div>
           </div>
           
                         <div class="elementor-element elementor-element-b80f1d8 elementor-widget elementor-widget-html" data-id="b80f1d8" data-element_type="widget" data-widget_type="html.default">
                            <div class="elementor-widget-container">
                               
                               <div class="container _big">
                                  <div class="steps__items-list">
                                     <div class="steps__item elementor-column">
                                        <h3 class="steps__step">
                                           <span class="wrap">
                                           <span class="num">0</span>
                                           <span class="label">Before</span>
                                           </span>
                                        </h3>
                                        <div class="steps__description">
                                           <h3>Send Admission Request</h3>
                                        </div>
                                     </div>
                                     <div class="steps__item elementor-column">
                                        <h3 class="steps__step">
                                           <span class="wrap">
                                           <span class="num">0</span>
                                           <span class="label">Before</span>
                                           </span>
                                        </h3>
                                        <div class="steps__description">
                                           <h3>Define Treatment Goals</h3>
                                        </div>
                                     </div>
                                     <div class="steps__item elementor-column">
                                        <h3 class="steps__step">
                                           <span class="wrap">
                                           <span class="num">1</span>
                                           <span class="label">week</span>
                                           </span>
                                        </h3>
                                        <div class="steps__description">
                                           <h3>Comprehensive Assessments &amp; Detox</h3>
                                        </div>
                                     </div>
                                     <div class="steps__item elementor-column">
                                        <h3 class="steps__step">
                                           <span class="wrap">
                                           <span class="num">1-4</span>
                                           <span class="label">week</span>
                                           </span>
                                        </h3>
                                        <div class="steps__description">
                                           <h3>Ongoing Physical &amp; Mental Therapy</h3>
                                        </div>
                                     </div>
                                     <div class="steps__item elementor-column">
                                        <h3 class="steps__step">
                                           <span class="wrap">
                                           <span class="num">4</span>
                                           <span class="label">week</span>
                                           </span>
                                        </h3>
                                        <div class="steps__description">
                                           <h3>Family Therapy &amp; Aftercare Preperation</h3>
                                        </div>
                                     </div>
                                     <div class="steps__item elementor-column">
                                        <h3 class="steps__step">
                                           <span class="wrap">
                                           <span class="num">5+</span>
                                           <span class="label">week</span>
                                           </span>
                                        </h3>
                                        <div class="steps__description">
                                           <h3>Individual Aftercare</h3>
                                        </div>
                                     </div>
                                     <div class="steps__item elementor-column" id="mediaQuery">
                                        <h3 class="steps__step">
                                           <span class="wrap">
                                           <span class="num">12</span>
                                           <span class="label">week</span>
                                           </span>
                                        </h3>
                                        <div class="steps__description">
                                           <h3>Refresher Visit</h3>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      </div>
                      </div>
             </section>
 
  <section class="marketing_expert__area_six" data-aos="fade-up" data-aos-duration="3000">
      <div class="container">
                        <h1 class="title">Treatments We Cover In Our Rehabilitation Centre</h1>
          <div class="row align-items-center">
              <div class="col-lg-5 mb-30">

                  <div class="about__list-box mb-35">
                      <ul class="list-wrap"><br/>
                          <li><i class="flaticon-arrow-button"></i>ALCOHOL ADDICTION</li>
                          <li><i class="flaticon-arrow-button"></i>TOBACCO ADDICTION</li>
                          <li><i class="flaticon-arrow-button"></i>DEPRESSION</li>
            <li><i class="flaticon-arrow-button"></i>POST TRAUMATIC STRESS DISORDER </li>
                          <li><i class="flaticon-arrow-button"></i>DRUG ADDICTION</li>
                          <li><i class="flaticon-arrow-button"></i>ANXIETY</li>
                      </ul>
                  </div>
                  <a href="#" class="btn btn-two">Read More</a>
              </div>
              <div class="col-lg-7 mb-30 position-relative">
                                          <div class="about__list-box mb-35">
                      <ul class="list-wrap">
                          <li><i class="flaticon-arrow-button"></i>OBSESSIVE COMPULSIVE DISORDER</li>
                          <li><i class="flaticon-arrow-button"></i>SCHIZOPHRENIA</li>
                          <li><i class="flaticon-arrow-button"></i>BIPOLAR DISORDER</li>
            <li><i class="flaticon-arrow-button"></i>PERSONALITY DISORDER</li>
                          <li><i class="flaticon-arrow-button"></i>GAMBLING ADDICTION</li>
                          <li><i class="flaticon-arrow-button"></i>DETOXIFICATION</li>
                      </ul>
                  </div>
              </div>
          </div>
         
      </div>
  </section>

  <section class="testimonial-area" data-aos="fade-up" data-aos-duration="3000">
      <div class="container">
                <div class="row justify-content-center">
              <div class="col-xl-6">
                  <div class="section-title text-center mb-40 tg-heading-subheading animation-style3">
                      <span class="sub-title">Testimonials</span>
                      <h2 class="title tg-element-title">Google Reviews</h2>
                  </div>
              </div>
          </div>
          <div class="row align-items-center justify-content-center">
              <div class="col-lg-6 order-0 order-lg-2">
    
                  <div class="swiper-container testimonial-active">
                      <div class="swiper-wrapper">
                          <div class="swiper-slide">
                              <div class="testimonial-item">
                                  <div class="testimonial-info">
                                      <h4 class="title">Mr.Robey Alexa</h4>
                                      <span>CEO, Apexa Agency</span>
                                  </div>
                                  <div class="testimonial__rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                  </div>
                                  <div class="testimonial-content">
                                      <p>“ Morem ipsum dolor sit amet, consectetur adipisc awing elita florai sum dolor sit amet, consectetur area Borem ipsum dolor sit amet, consectetur.”</p>
                                      <div class="icon"><i class="fas fa-quote-right"></i></div>
                                  </div>
                              </div>
                          </div>
                          <div class="swiper-slide">
                              <div class="testimonial-item">
                                  <div class="testimonial-info">
                                      <h4 class="title">Mr.Robey Alexa</h4>
                                      <span>CEO, Apexa Agency</span>
                                  </div>
                                  <div class="testimonial__rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                  </div>
                                  <div class="testimonial-content">
                                      <p>“ Morem ipsum dolor sit amet, consectetur adipisc awing elita florai sum dolor sit amet, consectetur area Borem ipsum dolor sit amet, consectetur.”</p>
                                      <div class="icon"><i class="fas fa-quote-right"></i></div>
                                  </div>
                              </div>
                          </div>
                          <div class="swiper-slide">
                              <div class="testimonial-item">
                                  <div class="testimonial-info">
                                      <h4 class="title">Mr.Robey Alexa</h4>
                                      <span>CEO, Apexa Agency</span>
                                  </div>
                                  <div class="testimonial__rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                  </div>
                                  <div class="testimonial-content">
                                      <p>“ Morem ipsum dolor sit amet, consectetur adipisc awing elita florai sum dolor sit amet, consectetur area Borem ipsum dolor sit amet, consectetur.”</p>
                                      <div class="icon"><i class="fas fa-quote-right"></i></div>
                                  </div>
                              </div>
                          </div>
                          <div class="swiper-slide">
                              <div class="testimonial-item">
                                  <div class="testimonial-info">
                                      <h4 class="title">Mr.Robey Alexa</h4>
                                      <span>CEO, Apexa Agency</span>
                                  </div>
                                  <div class="testimonial__rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                  </div>
                                  <div class="testimonial-content">
                                      <p>“ Morem ipsum dolor sit amet, consectetur adipisc awing elita florai sum dolor sit amet, consectetur area Borem ipsum dolor sit amet, consectetur.”</p>
                                      <div class="icon"><i class="fas fa-quote-right"></i></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="testimonial-slider-dot" data-aos="fade-up" data-aos-duration="3000">
                      <div class="swiper testimonial-nav">
                          <div class="swiper-wrapper">
                              <div class="swiper-slide">
                                  <button><img src={ require("./assets/img/images/testi_avatar01.png")} alt="" /></button>
                              </div>
                              <div class="swiper-slide">
                                  <button><img src={ require("./assets/img/images/testi_avatar02.png")} alt="" /></button>
                              </div>
                              <div class="swiper-slide">
                                  <button><img src={ require("./assets/img/images/testi_avatar03.png")} alt="" /></button>
                              </div>
                              <div class="swiper-slide">
                                  <button><img src={ require("./assets/img/images/testi_avatar04.png")} alt="" /></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-md-8">
                  <div class="testimonial-img-wrap">
                      <img src={ require("./assets/img/images/testimonial_img.png")} alt=""/>
                      <div class="img-shape">
                          <img src={ require("./assets/img/images/testimonial_shape01.png")} alt=""/>
                          <img src={ require("./assets/img/images/testimonial_shape02.png")} alt="" class="alltuchtopdown"/>
                          <img src={ require("./assets/img/images/testimonial_shape03.png")} alt="" data-parallax='{"y" : 80 }'/>
                          <img src={ require("./assets/img/images/testimonial_shape04.png")} alt="" class="rightToLeft"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="testimonial-shape-wrap">
          <img src={ require("./assets/img/images/testimonial_shape05.png")} alt="" data-aos="fade-up" data-aos-delay="400" />
          <img src={ require("./assets/img/images/testimonial_shape06.png")} alt="" data-aos="fade-left" data-aos-delay="400" />
      </div>
  </section>
 
  <section class="blog-post-area blog-post-bg" data-background="././././././././assets/img/bg/blog_post_bg.jpg">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-xl-6">
                  <div class="section-title text-center mb-40 tg-heading-subheading animation-style3">
                      <span class="sub-title">OUR BLOG UPDATE</span>
                      <h2 class="title tg-element-title">Featured News And Insights</h2>
                  </div>
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="col-xl-4 col-lg-6 col-md-10">
                  <div class="blog-post-item shine-animate-item">
                      <div class="blog-post-thumb">
                          <a href="blog-details" class="shine-animate"><img src={ require("./assets/img/blog/blog_post01.jpg")} alt=""/></a>
                          <a href="blog" class="post-tag">Business</a>
                      </div>
                      <div class="blog-post-content">
                          <h2 class="title"><a href="blog-details">Marketing your are business downturn now a days</a></h2>
                          <div class="blog-avatar">
                              <div class="avatar-thumb">
                                  <img src={ require("./assets/img/blog/blog_avatar01.png")} alt="" />
                              </div>
                              <div class="avatar-content">
                                  <p>By <a href="blog-details">Doman Smith</a></p>
                              </div>
                          </div>
                          <div class="blog-post-meta">
                              <ul class="list-wrap">
                                  <li>
                                      <a href="blog-details" class="btn">Read More</a>
                                  </li>
                                  <li><i class="fas fa-calendar-alt"></i>Oct 21, 2024</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-10">
                  <div class="blog-post-item shine-animate-item">
                      <div class="blog-post-thumb">
                          <a href="blog-details" class="shine-animate">
                            <img src={ require ("./assets/img/blog/blog_post02.jpg")} alt=""/></a>
                          <a href="blog" class="post-tag">Audit</a>
                      </div>
                      <div class="blog-post-content">
                          <h2 class="title"><a href="blog-details">Marketing your are business downturn now a days</a></h2>
                          <div class="blog-avatar">
                              <div class="avatar-thumb">
                                  <img src="./assets/img/blog/blog_avatar01.png" alt="" />
                              </div>
                              <div class="avatar-content">
                                  <p>By <a href="blog-details">Doman Smith</a></p>
                              </div>
                          </div>
                          <div class="blog-post-meta">
                              <ul class="list-wrap">
                                  <li>
                                      <a href="blog-details" class="btn">Read More</a>
                                  </li>
                                  <li><i class="fas fa-calendar-alt"></i>Oct 21, 2024</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-10">
                  <div class="blog-post-item shine-animate-item">
                      <div class="blog-post-thumb">
                          <a href="blog-details" class="shine-animate">
                            <img src={ require("./assets/img/blog/blog_post03.jpg")} alt=""/></a>
                          <a href="blog" class="post-tag">Investment</a>
                      </div>
                      <div class="blog-post-content">
                          <h2 class="title"><a href="blog-details">Marketing your are business downturn now a days</a></h2>
                          <div class="blog-avatar">
                              <div class="avatar-thumb">
                                  <img src={ require("./assets/img/blog/blog_avatar01.png")} alt=""/>
                              </div>
                              <div class="avatar-content">
                                  <p>By <a href="blog-details">Doman Smith</a></p>
                              </div>
                          </div>
                          <div class="blog-post-meta">
                              <ul class="list-wrap">
                                  <li>
                                      <a href="blog-details" class="btn">Read More</a>
                                  </li>
                                  <li><i class="fas fa-calendar-alt"></i>Oct 21, 2024</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="blog-shape-wrap">
          <img src={ require("./assets/img/images/blog_shape01.png")} alt="" data-aos="fade-right" data-aos-delay="400" />
          <img src={ require("./assets/img/images/blog_shape02.png")} alt="" data-aos="fade-left" data-aos-delay="400"/>
      </div>
  </section>
 
  <div class="brand__area-four">
      <div class="container">
                <div class="row justify-content-center">
              <div class="col-xl-6">
                  <div class="section-title text-center mb-40 tg-heading-subheading animation-style3">
                      <span class="sub-title">Lotus Wellness Center</span>
                      <h2 class="title tg-element-title">Certifications & Accreditations</h2>
                  </div>
              </div>
          </div>
          <div class="swiper-container brand-active">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                      <div class="brand-item">
                          <img src={ require("./assets/img/brand/brand_img01.png")} alt=""/>
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="brand-item">
                          <img src={ require("./assets/img/brand/brand_img02.png")} alt=""/>
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="brand-item">
                          <img src={ require("./assets/img/brand/brand_img03.png")} alt=""/>
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="brand-item">
                          <img src={ require("./assets/img/brand/iso-14001.svg")} alt="" />
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="brand-item">
                          <img src={ require("./assets/img/brand/iso-45001.svg")} alt="" />
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="brand-item">
                          <img src={ require("./assets/img/brand/TN-Medical-Council.svg")} alt="" />
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="brand-item">
                          <img src={require ("./assets/img/brand/TN-Mental-Health.svg")} alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  
  <section class="call-back-area" data-aos="fade-up" data-aos-duration="3000">
      <div class="container">
          <div class="row">
              <div class="col-lg-6">
                  <div class="call-back-content">
                      <div class="section-title white-title mb-10 tg-heading-subheading animation-style3">
                          <h2 class="title tg-element-title">Reclaim Your Life</h2>
                      </div>
                      <p>Freedom From Addiction To Drugs And Alcohol Begins Here.<br/>Call confidentially 24/7 (+91 7339062555)</p>
                    
                  </div>
              </div>
              <div class="col-lg-6">
                                            <button type="submit" class="btn">Send Now</button>
                  
              </div>
          </div>
      </div>
  </section>

<div>.</div>
</main>
<Foot />
    </div>
  );
}

export default Home;
