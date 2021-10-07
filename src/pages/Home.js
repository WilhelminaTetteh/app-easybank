import React from 'react';
import Button from '../components/Button'
import './Home.css';
// import mobilePhones from '../images/image-mockups.png';
const Home = () => {
  return (
    <>
      <header className='Hero'>
        <div className='hero__image'>
           {/* <img className='hero__mockups' src={mobilePhones} alt="phone mockups" /> */}
        </div>
        <div className='hero__info'>
          <h3 className='hero__title'>Next generation digital banking</h3>
          <p className='hero__text'>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button />
        </div>
      </header>
    </>
  );
}

export default Home
