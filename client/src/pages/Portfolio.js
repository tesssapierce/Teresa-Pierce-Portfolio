import React, { useState, useEffect } from "react";
import * as ReactBootstrap from "react-bootstrap";
import {DiBootstrap, DiHeroku, DiJavascript1, DiMongodb, DiJqueryUiLogo, DiMysql, DiNodejsSmall, DiNpm, DiReact } from "react-icons/di"
import "../index.css"
import shakeitupgif from "../images/shakeitup_gif_1.gif"
import bookshelfgif from "../images/bookshelf_gif_1.gif"
import mealmatchergif from "../images/mealmatcher_gif_1.gif"

function Portfolio() {


  return (
    <>
    <h3 className="portfolioHeader">check out my work</h3>
      {/* This is the first row of cards */}
        <ReactBootstrap.CardDeck className="portfolioDeck">
          <ReactBootstrap.Card className="portfolioCard">
            <ReactBootstrap.Card.Img variant="top" src={shakeitupgif} />
            <ReactBootstrap.Card.Body>
              <ReactBootstrap.Card.Title>Shake It Up</ReactBootstrap.Card.Title>
              <ReactBootstrap.Card.Text>
              Shake It Up is a full stack (MERN) application that allows users to randomly select an item from different categories. The user can also decide to shake again if they draw an item they do not like. Additional features include creating a custom category, adding new activities, delete and update activities, and login with a secure authentication.  This application uses React, MongoDB and Mongoose, Node JS, and Express Routers.
              </ReactBootstrap.Card.Text>
              <ReactBootstrap.Card.Link rel="noopener noreferrer" target="_blank" href="https://github.com/Kanilionis/MasonJar">repository</ReactBootstrap.Card.Link>
              <ReactBootstrap.Card.Link rel="noopener noreferrer" target="_blank" href="https://shake-it-up.herokuapp.com/">live</ReactBootstrap.Card.Link>
            </ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Footer>
              <>
              <DiReact className="techImg"/>
              <DiJavascript1 className="techImg"/>
              <DiBootstrap className="techImg"/>
              <DiHeroku className="techImg"/>
              <DiMongodb className="techImg"/>
              <DiNodejsSmall className="techImg"/>
              <DiNpm className="techImg"/>
              </>
            </ReactBootstrap.Card.Footer>
          </ReactBootstrap.Card>
          <ReactBootstrap.Card className="portfolioCard">
            <ReactBootstrap.Card.Img variant="top" src={bookshelfgif} />
            <ReactBootstrap.Card.Body>
              <ReactBootstrap.Card.Title>BookShelf</ReactBootstrap.Card.Title>
              <ReactBootstrap.Card.Text>
                BookShelf is a full stack application that allows users to exchange books online.  The user can add books to their library to allow others to borrow, as well as view all available books and borrow from another user.  This application uses webhooks, SQL and Sequelize, Node JS, Express Routers, and Javascript.
              </ReactBootstrap.Card.Text>
              <ReactBootstrap.Card.Link rel="noopener noreferrer" target="_blank" href="https://github.com/tesssapierce/BookShelf-Public-Library-Online-Rental-System-Javascript-Express-MySQL-Sequelize">repository</ReactBootstrap.Card.Link>
              <ReactBootstrap.Card.Link rel="noopener noreferrer" target="_blank" href="https://bookshelf-borrow-books.herokuapp.com/">live</ReactBootstrap.Card.Link>
            </ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Footer>
              <>
              <DiJavascript1 className="techImg"/>
              <DiBootstrap className="techImg"/>
              <DiHeroku className="techImg"/>
              <DiMysql className="techImg"/>
              <DiNodejsSmall className="techImg"/>
              <DiNpm className="techImg"/>
              <DiJqueryUiLogo className="techImg"/>
              </>
            </ReactBootstrap.Card.Footer>
          </ReactBootstrap.Card>
          <ReactBootstrap.Card className="portfolioCard">
            <ReactBootstrap.Card.Img variant="top" src={mealmatchergif}/>
            <ReactBootstrap.Card.Body>
              <ReactBootstrap.Card.Title>Meal Matchers</ReactBootstrap.Card.Title>
              <ReactBootstrap.Card.Text>
                Meal Matcher is a front end application that allows users to search an API, <a href="https://www.themealdb.com/">The Meal DB</a>, to find different recipes by ingredient.  After finding a recipe the user likes, they can add the recipe to their recipe book, which ulitizes local storage.  This application uses HTML, CSS, Javascript, and AJAX/API Functionality.
              </ReactBootstrap.Card.Text>
              <ReactBootstrap.Card.Link href="https://github.com/tesssapierce/Meal-Matcher-Recipe-Book-JS-HTML-CSS-AJAX">repository</ReactBootstrap.Card.Link>
              <ReactBootstrap.Card.Link href="https://jessicaano92.github.io/meal_matcher_javascript_ajax/">live</ReactBootstrap.Card.Link>
            </ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Footer>
            <>
              <DiJavascript1 className="techImg"/>
              <DiBootstrap className="techImg"/>
              <DiJqueryUiLogo className="techImg"/>
              </>
            </ReactBootstrap.Card.Footer>
          </ReactBootstrap.Card>
        </ReactBootstrap.CardDeck>

        {/* This is the second row of cards */}
        <ReactBootstrap.CardDeck className="portfolioDeck">
          <ReactBootstrap.Card className="portfolioCard">
            <ReactBootstrap.Card.Img variant="top" src="holder.js/100px160" />
            <ReactBootstrap.Card.Body>
              <ReactBootstrap.Card.Title>Weather Dashboard</ReactBootstrap.Card.Title>
              <ReactBootstrap.Card.Text>
                This weather dashboard utilizes the <a href="https://openweathermap.org/api">Open Weather Map API</a> to display the current weather in any United States zip code.  After the user searches, the application uses local storage to display past search history.
              </ReactBootstrap.Card.Text>
              <ReactBootstrap.Card.Link href="https://github.com/tesssapierce/Weather-Dashboard-API">repository</ReactBootstrap.Card.Link>
              <ReactBootstrap.Card.Link href="https://tesssapierce.github.io/Weather-Dashboard-API/">live</ReactBootstrap.Card.Link>
            </ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Footer>
            <>
              <DiJavascript1 className="techImg"/>
              <DiBootstrap className="techImg"/>
              <DiJqueryUiLogo className="techImg"/>
              </>
            </ReactBootstrap.Card.Footer>
          </ReactBootstrap.Card>
          <ReactBootstrap.Card className="portfolioCard">
            <ReactBootstrap.Card.Img variant="top" src="holder.js/100px160" />
            <ReactBootstrap.Card.Body>
              <ReactBootstrap.Card.Title>Employee Directory</ReactBootstrap.Card.Title>
              <ReactBootstrap.Card.Text>
                This Employee Directory is a front end application that utilizes React JS and JSON to allow a user to search a list of employees.  This application will render all users on search in a seamless experience.
              </ReactBootstrap.Card.Text>
              <ReactBootstrap.Card.Link href="https://github.com/tesssapierce/Employee-Directory-React-JS">repository</ReactBootstrap.Card.Link>
              <ReactBootstrap.Card.Link href="https://rocky-gorge-76644.herokuapp.com/">live</ReactBootstrap.Card.Link>
            </ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Footer>
            <>
              <DiReact className="techImg"/>
              <DiJavascript1 className="techImg"/>
              <DiBootstrap className="techImg"/>
              <DiHeroku className="techImg"/>
              </>
            </ReactBootstrap.Card.Footer>
          </ReactBootstrap.Card>
          <ReactBootstrap.Card className="portfolioCard">
            <ReactBootstrap.Card.Img variant="top" src="holder.js/100px160" />
            <ReactBootstrap.Card.Body>
              <ReactBootstrap.Card.Title>Employee Management System</ReactBootstrap.Card.Title>
              <ReactBootstrap.Card.Text>
                This back end application utilizes Node JS for a user to add, delete, or update employees.
              </ReactBootstrap.Card.Text>
              <ReactBootstrap.Card.Link href="https://github.com/tesssapierce/Employee-Tracker-Node-JS-mySQL">repository</ReactBootstrap.Card.Link>
            </ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Footer>
            <>
              <DiJavascript1 className="techImg"/>
              <DiNodejsSmall className="techImg"/>
              </>
            </ReactBootstrap.Card.Footer>
          </ReactBootstrap.Card>
        </ReactBootstrap.CardDeck>
      </>
    );
}


export default Portfolio;
