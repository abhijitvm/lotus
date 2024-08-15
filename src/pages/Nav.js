import logo from './assets/img/logo/logo.png';
import './assets/css/main.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavLink } from "react-router-dom";



function Nav() {
    return (
    <div className="Nav">
    <>
  {/* Hello world */}
  <button className="scroll__top scroll-to-target" data-target="html">
    <i className="fas fa-angle-up" />
  </button>
  <header className="tg-header__style-five">
    <div className="tg-header__top">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-6">
            <ul className="tg-header__top-info left-side list-wrap">
              <li>
                <i className="flaticon-phone-call" />
                <NavLink
                            to="tel:0123456789"
                             className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                              }
                          >
                   +91 7339062555
                  </NavLink>
              </li>
              <li>
                <i className="flaticon-pin" />
                Sai Ram Nagar,zamin Uthukuli,pollachi,coimbatore
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="tg-header__top-right list-wrap">
              <li>
                <i className="flaticon-envelope" />
                <NavLink
                            to="mailto:info@lotuswellness.life"
                             className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                              }
                          >
                   info@lotuswellness.life
                  </NavLink>
              </li>
              <li>
                <i className="flaticon-time" />
                Mon-Fri: 10:00am - 09:00pm
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      id="sticky-header"
      className="tg-header__area tg-header__area-five"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tgmenu__wrap">
              <nav className="tgmenu__nav">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
                <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                  <ul className="navigation">
                    <li className="active">
                    <NavLink
                            to="/"
                             className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                              }
                          >
                     Home
                  </NavLink> 
                    </li>
                    <li>
                    <NavLink
                            to="/ourstory"
                             className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                              }
                          >
                   OurStory
                  </NavLink> 
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink
                            to="#"
                             className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                              }
                          >
                   Treatment
                  </NavLink> 
                      <ul className="sub-menu">
                        <li>
                          <a href="/activities"> Activities</a>
                        </li>
                        <li>
                          <a href="/schooloftherapy">School of Therapy</a>
                        </li>
                        <li>
                          <a href="/dayatlotus">A Day at Lotus</a>
                        </li>
                        <li>
                          <a href="thelotusdifference">The Lotus Difference</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Programs</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="/detoxification">Detoxification</a>
                          {" "}
                        </li>
                        <li>
                          <a href="/alcoholaddiction">Alcohol Addiction</a>
                        </li>
                        <li>
                          <a href="/drugaddiction">Drug Addiction Treatment</a>
                        </li>
                        <li>
                          <a href="tobaccoaddiction">Tobacco Addiction Treatment</a>
                        </li>
                        <li>
                          <a href="gamblingaddiction">Gambling Addiction Treatment</a>
                        </li>
                        <li>
                          <a href="otheraddiction">Other Addictions We Treat</a>
                        </li>
                        <li>
                          <a href="relapse">Relapse Prevention Program</a>
                        </li>
                        <li>
                          <a href="wellnesscentre">Lotus Wellness Centre</a>
                        </li>
                        <li>
                          <a href="lotuspetals">Lotus Petals</a>
                        </li>
                      </ul>
                    </li>
                    <li className="active">
                    <NavLink
                            to="/"
                             className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                              }
                          >
                     Blogs
                  </NavLink> 
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Facilities</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="/collaboration">Collaboration</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact">Gallery</a>
                    </li>
                    <li>
                    <NavLink
                            to="/contact"
                             className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                              }
                          >
                     contact
                  </NavLink>
                      
                    </li>
                  </ul>
                </div>
                <div className="tgmenu__action d-none d-md-block">
                  <ul className="list-wrap">
                    <li className="offCanvas-menu">
                      <a href="javascript:void(0)" className="menu-tigger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M0 9C0 7.89543 0.895431 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.895431 11 0 10.1046 0 9Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M0 16C0 14.8954 0.895431 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.895431 18 0 17.1046 0 16Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M7 16C7 14.8954 7.89543 14 9 14C10.1046 14 11 14.8954 11 16C11 17.1046 10.1046 18 9 18C7.89543 18 7 17.1046 7 16Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M14 2C14 0.895431 14.8954 0 16 0C17.1046 0 18 0.895431 18 2C18 3.10457 17.1046 4 16 4C14.8954 4 14 3.10457 14 2Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="header-btn">
                      <a href="contact" className="btn">
                        let’s Talk
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mobile-nav-toggler">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M0 9C0 7.89543 0.895431 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.895431 11 0 10.1046 0 9Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M0 16C0 14.8954 0.895431 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.895431 18 0 17.1046 0 16Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M7 16C7 14.8954 7.89543 14 9 14C10.1046 14 11 14.8954 11 16C11 17.1046 10.1046 18 9 18C7.89543 18 7 17.1046 7 16Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M14 2C14 0.895431 14.8954 0 16 0C17.1046 0 18 0.895431 18 2C18 3.10457 17.1046 4 16 4C14.8954 4 14 3.10457 14 2Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
              </nav>
            </div>
            <div className="tgmobile__menu">
              <nav className="tgmobile__menu-box">
                <div className="close-btn">
                  <i className="fas fa-times" />
                </div>
                <div className="nav-logo">
                  <a href="index.html">
                    <img
                      src={require("./assets/img/logo/logo.png")}
                      alt="Logo"
                    />
                  </a>
                </div>
                <div className="tgmobile__search">
                  <form action="#">
                    <input type="text" placeholder="Search here..." />
                    <button>
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
                <div className="tgmobile__menu-outer"></div>
                <div className="tgmobile__menu-bottom">
                  <div className="contact-info">
                    <ul className="list-wrap">
                      <li>
                        <a href="mailto:info@lotuswellness.life">
                          info@lotuswellness.life
                        </a>
                      </li>
                      <li>
                        <a href="tel:07339062555">+91 7339062555</a>
                      </li>
                    </ul>
                  </div>
                  <div className="social-links">
                    <ul className="list-wrap">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="tgmobile__menu-backdrop" />
          </div>
        </div>
      </div>
    </div>
    <div className="search__popup">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="search__wrapper">
              <div className="search__close">
                <button type="button" className="search-close-btn">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 1L1 17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1L17 17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="search__form">
                <form action="#">
                  <div className="search__input">
                    <input
                      className="search-input-field"
                      type="text"
                      placeholder="Type keywords here"
                    />
                    <span className="search-focus-border" />
                    <button>
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.0002 19.0002L17.2002 17.2002"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="search-popup-overlay" />
    <div className="offCanvas__info">
      <div className="offCanvas__close-icon menu-close">
        <button>
          <i className="far fa-window-close" />
        </button>
      </div>
      <div className="offCanvas__logo mb-30">
        <a href="index.html">
          <img src="assets/img/logo/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="offCanvas__side-info mb-30">
        <div className="contact-list mb-30">
          <h4>Office Address</h4>
          <p>
            Sai Ram Nagar,Zamin Uthukuli, <br /> Pollachi,Coimbatore
          </p>
        </div>
        <div className="contact-list mb-30">
          <h4>Phone Number</h4>
          <p>+91 7339062555</p>
        </div>
        <div className="contact-list mb-30">
          <h4>Email Address</h4>
          <p>info@lotuswellness.life</p>
        </div>
      </div>
      <div className="offCanvas__social-icon mt-30">
        <a href="javascript:void(0)">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="javascript:void(0)">
          <i className="fab fa-twitter" />
        </a>
        <a href="javascript:void(0)">
          <i className="fab fa-google-plus-g" />
        </a>
        <a href="javascript:void(0)">
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
    <div className="offCanvas__overly" />
  </header>


</>

    </div> 
      
    );
  }
  
  export default Nav;