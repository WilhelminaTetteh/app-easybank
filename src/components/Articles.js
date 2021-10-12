import React from "react";
import "./Articles.css";
import articles from "../data/articles";
const Articles = () => {
  return (
    <section className="articles">
      <h3 className="articles__heading">Latest Articles</h3>
      <ul className="articles__container">
        {articles.map((article, id) => {
          return (
            <li className="article" key={id}>
              <div
                className="article__image"
                style={{ backgroundImage: `url(${article.url})` }}
              ></div>
              <div className="article__info">
                <address className="article__author">{article.author}</address>
                <h4 className="article__title">{article.title}</h4>
                <p className="article__text">{article.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Articles;
