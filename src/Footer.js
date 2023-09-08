import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10 background"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <div className='colz'>
        <div className='colz-icon'>
          <a href='mailto:abhisunkarwad2002@gmail.com' target='_blank'>
            <i className='fa fa-envelope-o icons'></i>
          </a>
          <a href='https://www.linkedin.com/in/sunkarwad-abhishek-16744b226/' target='_blank'>
            <i className='fa fa-linkedin-square icons'></i>
          </a>
          <a href='https://github.com/abhi9146' target='_blank'>
            <i className='fa fa-github icons'></i>
          </a>
          

        </div>
      </div>

      <img alt="" className="footer__img pointer" />
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.80" }}
      >
        Copyright © 2023 &nbsp; Abhishek Sunkarwad
      </span>
    </div>
  )
}

export default Footer
