import React from 'react';
import Hero from '../components/Hero';
import './Home.css';
const Home = () => {
  return (
    <>
      <Hero/>
      <section className="services">
        <div className="services__header">
        <h3 className='services__title'>Why choose Easybank?</h3>
        <p className='services__subtile'>
        We leverage Open Banking to turn your bank account into your 
        financial hub. Control your finances like never before.
        </p>
        </div>
        <ul className='services__cards'>
           <li className='services__card'>
             <div className='services__card-icon'></div>
             <h4 className='services__card-title'> Online Banking</h4>
             <p className='services__card-text'>
               Our modern web and mobile applications allow you 
             to keep track of your finances wherever you are in the world.
             </p>
           </li>
           <li className='services__card'>
             <div className='services__card-icon'></div>
             <h4 className='services__card-title'> Online Banking</h4>
             <p className='services__card-text'>
               Our modern web and mobile applications allow you 
             to keep track of your finances wherever you are in the world.
             </p>
           </li>
           <li className='services__card'>
             <div className='services__card-icon'></div>
             <h4 className='services__card-title'> Online Banking</h4>
             <p className='services__card-text'>
               Our modern web and mobile applications allow you 
             to keep track of your finances wherever you are in the world.
             </p>
           </li>
           <li className='services__card'>
             <div className='services__card-icon'></div>
             <h4 className='services__card-title'> Online Banking</h4>
             <p className='services__card-text'>
               Our modern web and mobile applications allow you 
             to keep track of your finances wherever you are in the world.
             </p>
           </li>
        </ul>
  

       
      </section>
    </>
  );
}

export default Home
