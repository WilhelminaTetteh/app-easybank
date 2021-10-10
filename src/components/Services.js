import React from "react";
import "../components/Services.css";
import services from "../data/services";

const Services = () => {
  return (
    <section className="services">
      <div className="services__header">
        <h2 className="services__title">Why choose Easybank?</h2>
        <p className="services__subtile">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <ul className="services__cards">
        {services.map((service, id) => {
          return (
            <li className="services__card" key={id}>
              <div
                className="services__card-icon"
                style={{ backgroundImage: `url(${service.icon})` }}
              ></div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-text">{service.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Services;
