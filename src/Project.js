import React from 'react'
import './Project.css'
import Project1 from './img/Project1.jpg';
import Project3 from './img/Project3.png';
import Project5 from './img/Project5.png';

function Project() {
    return (
        <div className="project component__space" id="Portfolio">
            <div className="heading">
                <h1 className="heading">My Latest Project</h1>
                <p className="heading p__color">
                   There are some of my small projects
                </p>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project5} alt="" className="project__img" />
                                  </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text centre " >News-Website</h5>
                                <h4 className="project__text" >It is a online platform that delivers up-to-date news and information
              from various sources around the world</h4>
                                <a href="https://github.com/abhi9146/NewsApp" target="_blank" className="project__btn">Github Link</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">crypto</h5>
                                <h4 className="project__text">Project CryptoInsight is a Reactjs project that utilizes a api to collect information of crypto. It allows users to get the current price and information about the crypto currency.</h4>
                                <a href="https://github.com/abhi9146/CryptoInsight" target="_blank" className="project__btn">Github Link</a>
                            </div>
                        </div>
                    </div>





                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">CodeVault</h5>
                                <h4 className="project__text">I have Designed and developed a powerful password generator
              website using React.js, offering users the ability to effortlessly
              generate highly secure passwords according to their preferences.</h4>
                                <a href="https://github.com/abhi9146/CodeVault" target="_blank" className="project__btn">Github Link</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project



