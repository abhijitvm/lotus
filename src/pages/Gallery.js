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





function Gallery() {
    
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
    {/* breadcrumb-area */}
    <section
      className="breadcrumb__area breadcrumb__bg"
      style={{backgroundImage: 'url(' + require('./wp-content/uploads/2021/11/gallery-3.jpg') + ')'}}

    >
      <div className="container">
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-40">
                <span className="sub-title">Lotus wellness Center</span>
                <h1>
                  <font color="#ffffff">Gallery</font>
                </h1>
                <h1>
                  <font color="#ffffff">"Live The Life"</font>
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
      <div className="site-content-contain">
        <div id="content" className="site-content">
          <div className="wrap">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <div
                  data-elementor-type="wp-post"
                  data-elementor-id={294}
                  className="elementor elementor-294"
                >
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-f944c50 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="f944c50"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0347f52"
                        data-id="0347f52"
                        data-element_type="column"
                      >
                        <section className="res__gallery">
                          <div className="product">
                            <div className="row">
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/11/lotuswellnessslider-luxuryrehabintamilnaduindia.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/11/lotuswellnessslider-luxuryrehabintamilnaduindia.jpg")}
                                      alt="lotuswellnessslider-luxuryrehabintamilnaduindia"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/2.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/2.jpg")}
                                      alt="drugaddictiontreatmentinracecourse"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/3.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/3.jpg")}
                                      alt="lotus.jpg"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/bestaddictiontreatmentcentre-lotus-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/bestaddictiontreatmentcentre-lotus-scaled.jpg")}
                                      alt="bestaddictiontreatmentcentre"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/deaddictiontreatmentcentreinpollachi-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/deaddictiontreatmentcentreinpollachi-scaled.jpg")}
                                      alt="deaddictiontreatmentcentreinpollachi"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/bestdeaddictiontreatmentcentreinpollachi-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/bestdeaddictiontreatmentcentreinpollachi-scaled.jpg")}
                                      alt="bestdeaddictiontreatmentcentreinpollachi"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/alcoholdeaddictiontreatmentinpollachi-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/alcoholdeaddictiontreatmentinpollachi-scaled.jpg")}
                                      alt="alcoholdeaddictiontreatmentinpollachi"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/bestalcoholdeaddictiontreatmentinpollachi-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/bestalcoholdeaddictiontreatmentinpollachi-scaled.jpg")}
                                      alt="bestalcoholdeaddictiontreatmentinpollachi"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentincoimbatore-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentincoimbatore-scaled.jpg")}
                                      alt="drugaddictiontreatmentincoimbatore"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinindia-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinindia-scaled.jpg")}
                                      alt="drugaddictiontreatmentinindia"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinooty-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinooty-scaled.jpg")}
                                      alt="drugaddictiontreatmentinooty"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinpollachi-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinpollachi-scaled.jpg")}
                                      alt="drugaddictiontreatmentinpollachi"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinracecourse-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinracecourse-scaled.jpg")}
                                      alt="drugaddictiontreatmentinracecourse"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinsaravanampatti-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinsaravanampatti-scaled.jpg")}
                                      alt="drugaddictiontreatmentinsaravanampatti"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentintamilnadu-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentintamilnadu-scaled.jpg")}
                                      alt="drugaddictiontreatmentintamilnadu"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinthondamuthur-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinthondamuthur-scaled.jpg")}
                                      alt="drugaddictiontreatmentinthondamuthur"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinthudiyalur-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinthudiyalur-scaled.jpg")}
                                      alt="drugaddictiontreatmentinthudiyalur"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentintownhall-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentintownhall-scaled.jpg")}
                                      alt="drugaddictiontreatmentintownhall"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinvadavalli-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/drugaddictiontreatmentinvadavalli-scaled.jpg")}
                                      alt="drugaddictiontreatmentinvadavalli"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/drugdeaadictiontreatmentcentreinindia-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/drugdeaadictiontreatmentcentreinindia-scaled.jpg")}
                                      alt="drugdeaadictiontreatmentcentreinindia"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/alcoholtreatmentcentreinmumbai-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/alcoholtreatmentcentreinmumbai-scaled.jpg")}
                                      alt="alcoholtreatmentcentreinmumbai"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/alcoholtreatmentcentreinindia-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/alcoholtreatmentcentreinindia-scaled.jpg")}
                                      alt="alcoholtreatmentcentreinindia"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/alcoholtreatmentcentreininkerala-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/alcoholtreatmentcentreininkerala-scaled.jpg")}
                                      alt="alcoholtreatmentcentreininkerala"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/alcoholtreatmentcentreintamilnadu-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/alcoholtreatmentcentreintamilnadu-scaled.jpg")}
                                      alt="alcoholtreatmentcentreintamilnadu"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/ayurvedamedicalclinicincoimbatore-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/ayurvedamedicalclinicincoimbatore-scaled.jpg")}
                                      alt="ayurvedamedicalclinicincoimbatore"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/ayurvedamedicalclinicinindia-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/ayurvedamedicalclinicinindia-scaled.jpg")}
                                      alt="ayurvedamedicalclinicinindia"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/ayurvedamedicalclinicinpollachi-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/ayurvedamedicalclinicinpollachi-scaled.jpg")}
                                      alt="ayurvedamedicalclinicinpollachi"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/nalandhabestmeditationtreatmentcentreinindia-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/nalandhabestmeditationtreatmentcentreinindia-scaled.jpg")}
                                      alt="nalandhabestmeditationtreatmentcentreinindia"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/medicalretreatcentreinpollachi-min-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/medicalretreatcentreinpollachi-min-scaled.jpg")}
                                      alt="medicalretreatcentreinpollachi"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/bestdeaadictiontreatmentcentreincoimbatore-min-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/bestdeaadictiontreatmentcentreincoimbatore-min-scaled.jpg")}
                                      alt="bestdeaadictiontreatmentcentreincoimbatore"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/rehabilitationcentreincoimbatore-min-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/rehabilitationcentreincoimbatore-min-scaled.jpg")}
                                      alt="rehabilitationcentreincoimbatore"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/rehabilitationcentreinpollachi-min-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/rehabilitationcentreinpollachi-min-scaled.jpg")}
                                      alt="rehabilitationcentreinpollachi"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/bestrehabilitationcentreintamilnadu-min-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/bestrehabilitationcentreintamilnadu-min-scaled.jpg")}
                                      alt="bestrehabilitationcentreintamilnadu"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/mostcarringrehabincoimbatore-min-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/mostcarringrehabincoimbatore-min-scaled.jpg")}
                                      alt="mostcarringrehabincoimbatore"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/bestmeditationcentreinindia-min-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/bestmeditationcentreinindia-min-scaled.jpg")}
                                      alt="bestmeditationcentreinindia"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/bestwellnesscentreintamilnadu-min-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/bestwellnesscentreintamilnadu-min-scaled.jpg")}
                                      alt="bestwellnesscentreintamilnadu"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/retreatcentreincoimbatore-min-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/retreatcentreincoimbatore-min-scaled.jpg")}
                                      alt="retreatcentreincoimbatore"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/bestrecoverytreatmentcentreincoimbatore-min-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/bestrecoverytreatmentcentreincoimbatore-min-scaled.jpg")}
                                      alt="bestrecoverytreatmentcentreincoimbatore"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/bestrecoverytreatmentcentreinindia-min-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/bestrecoverytreatmentcentreinindia-min-scaled.jpg")}
                                      alt="bestrecoverytreatmentcentreinindia"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/bestrecoverytreatmentcentreinerode-min-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/bestrecoverytreatmentcentreinerode-min-scaled.jpg")}
                                      alt="bestrecoverytreatmentcentreinerode"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/bestrecoverytreatmentcentreinsalem-min-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/bestrecoverytreatmentcentreinsalem-min-scaled.jpg")}
                                      alt="bestrecoverytreatmentcentreinsalem"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/bestrehabinindia-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/bestrehabinindia-scaled.jpg")}
                                      alt="bestrehabinindia"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/bestrehabinkochin-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/bestrehabinkochin-scaled.jpg")}
                                      alt="bestrehabinkochin"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/bestrehabintamilnadu-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/bestrehabintamilnadu-scaled.jpg")}
                                      alt="bestrehabintamilnadu"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-1 grid">
                                <div className="itembox" data-item="category1">
                                  <a
                                    className="fancybox"
                                    index={1}
                                    data-fancybox="category1"
                                    data-caption="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    href={require ("./wp-content/uploads/2022/12/bestluxuryrehabincoimbatore-scaled.jpg")}
                                  >
                                    <img
                                      src={require ("./wp-content/uploads/2022/12/bestluxuryrehabincoimbatore-scaled.jpg")}
                                      alt="bestluxuryrehabincoimbatore"
                                      title="LOTUS - INDIA'S FINEST LUXURY REHAB & WELLNESS CENTER"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </section>
                </div>
              </main>
              {/* #main */}
            </div>
            {/* #primary */}
          </div>
          {/* .wrap */}
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

export default Gallery;