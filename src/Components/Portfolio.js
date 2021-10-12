import React, { Component } from "react";
import Fade from "react-reveal";
import { Card, Button } from "react-bootstrap";


let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;


      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
          <a href={projects.url}>
          <img alt={projects.title} src={projectImage} />
                </a> 
            <div style={{ textAlign: "center" }}>{projects.title}</div>
         </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade bottom duration={800}>
        <h2> My Work</h2>
        </Fade>
        <Fade bottom duration={1000}>
          <div class="row">
            <div class="column">
              <div class="card">
                  <img alt="Quiz Game" src="/images/portfolio/quizgame.jpg"></img>
                  <div class="container">
                    <a href="https://moenaan.github.io/QuizGameII/">     
                    <h1> Quiz Game</h1>
                    <p1>This app helps one understand coding better by asking a few simple questions. </p1>
                    </a>
                  </div>
                </div>
              </div>
            <div class="column">
              <div class="card">
                <img alt="Healthy Spoon" src="/images/portfolio/healthy Spoon.png"></img>
                  <div class="container">
                  <a href="https://moenaan.github.io/RestaurantMobileApp/">   
                  <h1> Healthy Spoon</h1>
                    <p1>Created an app that makes it easier for people to make better and healthier choices when ordering food online.   </p1>
                    </a>
                  </div>
                </div>
              </div>  
              <div class="column">
              <div class="card">
              <img alt="Password Generator" src="/images/portfolio/password-generator.jpg"></img>
                  <div class="container">
                  <a href="https://moenaan.github.io/Password-Generator/">  
                  <h1> Password Generator</h1>
                    <p1>How can someone guess your password when its incredibly random and complex. Try this app and forever confuse your hackers!</p1>
                    </a>
                  </div>
                </div>
              </div>
            <div class="column">
            <div class="card">
              <img alt="Day Planner" src="/images/portfolio/Scheduler.jpg"></img>
              <div class="container">
              <a href="https://moenaan.github.io/Day-Planner/">
              <h1>Day Planner</h1>
              <p>Plan your day much better by filling up you day and being productive, don't worry it will save all you stuff.</p>
             </a>
            </div>
            </div>
              </div>
            <div class="column">
            <div class="card">
              <img alt="Note Taker" src="/images/portfolio/note-taker.jpg"></img>
              <div class="container">
              <h1> Note Taker</h1>
              <a href="https://github.com/moenaan/NoteTaker">
              <p>An app to help you remember the important things. Make sure you write it down. </p>
             </a>
            </div>
            </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
