import React from 'react'
import './About.css'
import aboutImg from './img/about.jpg'

function About() {
    // up to top buttom 
    window.addEventListener('scroll', function () {
        const UpToTop = document.querySelector('a.bottom__to__top');
        //console.log(UpToTop);
        UpToTop.classList.toggle('active', window.scrollY > 0)
    })
    return (
        <div className='about component__space' id='About'>
            <div className='container' >
                <div className='row'>
                    <div className='col__2'>
                        <img src={aboutImg} className='about__img' />
                    </div>
                    <div className='col__2'>
                        <h1 className='about__heading'>
                            About Me
                            <div className='about__meta'>
                                <p className='about__text p__color'>
                                     competitive coder | Enthusiastic Learner | Frontend Developer
                                </p>
                                <p className='about__text p__color'>
                                Abhishek Sunkarwad is a dedicated competitive programmer specializing in C++, with a Leetcode rating of 1767 and ranking among the top 11% of Leetcode users. I have demonstrated my ability to excel in competitive programming challenges. Having successfully solved over 1000 problems, I have honed my problem-solving skills to a remarkable level.

                                In addition to my expertise in competitive programming, I have a strong command of HTMl , CSS , Javascript and React development . My proficiency extends to SQL and database management, ensuring seamless and reliable handling of data.

                                With a deep passion for innovation and a commitment to continuous learning, I am always seeking opportunities to expand my skill set and contribute to the field of software development.

                                </p>
                                <div className='about__button d__flex align__items__center cv'>
                                    <a href='abhishek.pdf' download='abhishek.pdf' ><button className='about btn pointer cv'>Download CV</button> </a>
                                    <a href='mailto:abhisunkarwad2002@gmail.com'><button className='about btn pointer'> Hire Me</button> </a>
                                    <a></a>
                                </div>

                            </div>

                        </h1>

                    </div>

                </div>

            </div>
            {/* up yo top button */}
            <div className="up__to__top__btn">
                <a href="#" className="bottom__to__top">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-up white"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                    </svg>
                </a>
            </div>



            {/* <div id='Services'></div> */}
        </div>
    )
}

export default About
