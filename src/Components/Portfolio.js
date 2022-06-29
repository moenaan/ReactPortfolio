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
        <h2> My Applications</h2>
        </Fade>
        <Fade bottom duration={1000}>
          <div class="row">
            <div class="column">
              <div class="card">
                  <img alt="Fitness Tracker" src="/images/portfolio/fitnesstracker.jpg"></img>
                  <div class="container">
                    <a href="https://moes-workout-planner.herokuapp.com/">     
                    <h1> Fitness Tracker</h1>
                    <p1>This app helps one track their fitness goals with ease. </p1>
                    </a>
                  </div>
                </div>
              </div>
            <div class="column">
              <div class="card">
                <img alt="Dating Roulette" src="/images/portfolio/DatingRoulette.jpg"></img>
                  <div class="container">
                  <a href="https://dating-roulette.herokuapp.com/">   
                  <h1> Dating Roulette</h1>
                    <p1>There are moments where you may be spending time with your significant other and don't have an idea for a date. Well I've created a date randomizer app that may help your little problem.   </p1>
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
              <a href="https://moes-note-taker-app.herokuapp.com/">
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
