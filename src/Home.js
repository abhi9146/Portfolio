import React, { useState } from "react";
import "./Home.css";
import Typical from 'react-typical'

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
  const [show, setShow] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
        

          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15 __hover">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15 __hover">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15 __hover">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15 __hover">Projects</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15 __hover">Contact</li>
              </a>
            </ul>
          </div>

          {/* Toogle Menu */}
          <div className="toggle__menu hide_menu" >
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="0"
              height="0"

              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#Home" ><span className="__hover">Home</span> </a>
                </li>
                <li className="sideNavbar">
                  <a href="#About"> <span className="__hover">About</span></a>
                </li>
                <li className="sideNavbar">
                  <a href="#Services"> <span className="__hover">Services</span></a>
                </li>
                <li className="sideNavbar">
                  <a href="#Portfolio"><span className="__hover">Projects </span></a>
                </li>
                <li className="sideNavbar">
                  <a href="#Contact"><span className="__hover">Contact </span></a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h5 className="home__text pz__10">WELCOME TO MY WORLD</h5>
              <h2 className="home__text pz__10">Hi, I’m <strong>Abhishek Sunkarwad</strong> </h2>
              <span className='primary-text'>
                            <h1 className="mainHead">
                            <h1 style={{fontSize:40}}>
                                <span  style={{color: "#F9004D"}  } >
                                  
                                <Typical 
                                     loop={Infinity}
                                    steps={[
                                        "Frontend Developer 😎",
                                        1000,
                                        "Competetive Programmer 💻",
                                        1000,
                                        "React JS  👨‍💻",
                                        1000,
                                    ]}
                                />
                                </span>
                            </h1>
                            </h1>
                            <span className='profile-role-tagline' >
                                Passionate Competetive Programmer and Frontend Developer.
                                <br/>
                            </span>
                            </span>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
