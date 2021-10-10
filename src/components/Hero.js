import React from 'react'
import Button from './Button'
import './Hero.css'
// import mobilePhones from '../images/image-mockups.png';

const Hero = () => {
    return (
        <section className='Hero'>
        <div className='hero__details'>
          <div className='hero__info'>
            <h3 className='hero__title'>Next generation digital banking</h3>
            <p className='hero__text'>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <Button />
          </div>
        </div>

        <div className='hero__image'>
          {/* <img className='hero__mockups' src={mobilePhones} alt="phone mockups" /> */}
        </div>
      </section>
    )
}

export default Hero
