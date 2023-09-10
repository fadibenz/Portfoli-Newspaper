import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClear, MdOutlineArrowForwardIos } from "react-icons/md";
import facebook from "./Icons/facebook.svg";
import instagram from "./Icons/instagram.svg";
import linkedin from "./Icons/linkedin.svg";
import twitter from "./Icons/twitter.svg";

import Esi from "./Resources/Esi-sba.jpg";
import Web from "./Resources/Web.png";

function App() {
  const [explore, setExplore] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      if (now.getDate() !== currentDate.getDate()) {
        setCurrentDate(now);
      }
    }, 1000 * 60 * 60 * 24);

    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    document.body.classList.toggle("Overflow", explore);
  }, [explore]);

  const reviews = [
    {
      id: 1,
      name: "Meriem Hamada",
      title: "App devoleper",
      desc: "Building my portfolio, Fadi gave me more than i asked for, as an app devoleper i needed a place to display my work, Fadi didn't only give me a good looking website to do that but a whole new identity.",
    },
    {
      id: 2,
      name: "I. saidi",
      title: "Doctor at ESI.",
      desc: "As Fadi's supervisor for his final year project, he displayed Immaculate talent in project managment, writing clean code, design originality and moreover technologies oversight.",
    },
    {
      id: 3,
      name: "Haderbach djamel",
      title: "Client",
      desc: "Having a website for your store is a game-changer and with the help of Fadi i got a website that represented everything i wanted in addition to boosting my sales",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "Fadi's Blog",
      desc: `This is CRUD single-page React application.
      The front-end is handled with React and Redux Toolkit for state management, Tailwind CSS and Chakra UI for styling.
      The back-end is an express server with a MongoDB databse .The server's endpoints are tested with Jest and Supertest.
      The application successfully passed an End-to-End testing with Cypress.`,
      link: "https://blog-website-j2ek.onrender.com/",
      img: "/Blog.png",
      Tags: [
        "ReactJS",
        "Redux",
        "Tailwind CSS",
        "Chakra UI",
        "ExpressJS",
        "Jest",
        "Cypress",
      ],
    },
    {
      id: 2,
      name: "Helsenki Excercises",
      desc: `As part of my enrollment in the Open University provided by the University of Helsinki, I've engaged with over 50 reading materials and completed more than 140 exercises. The primary focus was on mastering single-page applications using React and complementing them with RESTful web services built on Node.js.`,
      img: "/certificate-fullstack.png",
      link: "https://github.com/fadibenz/My-Submissions",
      Tags: [
        "ReactJS",
        "Redux",
        "Tailwind CSS",
        "Chakra UI",
        "ExpressJS",
        "Jest",
        "Cypress",
        "MongoDB",
      ],
    },
    {
      id: 3,
      name: "E-VENTI",
      desc: ` E-VENTI is a comprehensive full-stack event management system that we developed as part of our second-year interdisciplinary project.
       it uses React, TypeScript, Vite and Tailwind CSS for the Front-End. 
       The Back-End was handled by .NET.
        I followed best practices in the organisation of code, notification system, using custom hooks, React router and the connection with the server where I used Axios.`,
      img: "/E-VENTI.png",
      link: "https://github.com/fadibenz/E-VENTI_Front-End",
      Tags: [
        "React",
        "TypeScript",
        "Sass",
        "React Router",
        ".NET",
        "PostgreSQL",
      ],
    },
    {
      id: 4,
      name: "Sneakers",
      desc: `This project is more focused on the UI than functionnalities as most of them are not implemented, I strated it  to enhance my React and CSS skills, it is built with the latter technology where i used most of it is core features. The design is inspired by a Front-End mentor challenge.`,
      img: "/sneakers--website.png",
      link: "https://sneakers-iadx.onrender.com/",
      Tags: ["React js", "React Router", "CSS3", "Axios", "Figma"],
    },
    {
      id: 5,
      name: "Discord Bot",
      desc: `a finance discord bot built with discord.js, i built this
                    bot as part of my journey learning JavaScript and Node.js `,
      img: "/Discord--bot.png",
      link: "https://github.com/fadibenz/aurelius-bot",
      Tags: ["Node js", "Discord js"],
    },
  ];
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className='App'>
      <nav>
        <div className='Nav--button'>
          <HiMenuAlt1 className='Nav--icon' />
        </div>
        <header>
          <span> Know me more</span>
          <h1>Fadi Benzaima</h1>
          <span className='Date'>{formattedDate}</span>
          <hr />
        </header>
      </nav>
      <main>
        <article className='Information'>
          {" "}
          <section className='Add--info Left--border'>
            <article className='Education'>
              <img src={Esi} />
              <div>
                <h2 className='Education--title'>Education</h2>
                <h2>ESI-SBA</h2>
                <p>
                  I’m currently a third year student in the{" "}
                  <span>higher school</span> of computer science,
                  Sidi-Bel-Abbes. Where i'm studying to get an engineering
                  degree in CS.
                </p>
                <span className='Light'>2021-2026</span>
              </div>
            </article>
            <article className='Know-me-more'>
              <article className='Know-me-more__info'>
                <h2>Know me more</h2>
                <span className='Dash'></span>
                <p>
                  I’m the Co-host of the AlphaGeeks podcast, I interview
                  pioneering people in tech and enterpeneurship.
                </p>
                {/* <span className='Dash'></span>
                <p>native Arabic speaker, fluent English , fluent French.</p> */}
                <span className='Dash'></span>
                <p>
                  intrested in AI and machine learning, avid reader of
                  philosophy and political thought.
                </p>
                {/* <span className='Dash'></span>
                <p>I love philosophy, astronomy, music and arabic poetry.</p> */}
              </article>
            </article>
          </section>
          <section className='About--me Left--border'>
            <img src='/mainPic.jpg' />
            <h3>ABOUT ME</h3>
            <h2>Dedicated, ambitious, always an amateur.</h2>
            <span className='Thin-text'>
              “In order for connection to happen, we have to allow ourselves to
              be seen— <span className='DO-ME'>really seen</span>.”
            </span>
            <span className='Dash'></span>
            <article className='About--me__info'>
              <div>
                <p>
                  <span className='M--letter'>M</span>y name is Benzaima Fadi,
                  I’m a results-oriented Front-End{" "}
                  <span className='DO-ME'>web developer</span> with proven track
                  record in communication, team-work and leadership, delivering
                  value in web design, development, production, testing and
                  deployment.
                </p>
              </div>
              <p className='Second--p'>
                I wanted the design to reflect my love for newspapers, I still
                remember waiting up for my dad to bring the day's newspaper to
                read about what's happening in the world, so my portfolio is
                conveniently inspired by an old newspaper feel
              </p>
              <p className='Second--p'>
                All over this page you will find informations about me, my
                education, skills, certifications and some news ! the titles are
                click baits for a reason.
              </p>
              <p className='Second--p'>
                <span className='DO-ME'>Wait....</span> don't forget to check my
                projects they are hanging out just over there.
              </p>
            </article>
            {/*  */}
            {/* <img className='SideEye' src='/sideeye.jpg'></img> */}
            {/* <span>Eunoia</span> */}
          </section>
          <section className='Skills'>
            <h2>SKILLS</h2>
            <h1>"It's a process"</h1>
            {/* <p className='Thin-text'>
              below are some of my self-tought skills or ones i gathered from my
              academic studies.
            </p> */}
            <article className='Front--article'>
              <h3>Front-End:</h3>
              <ul>
                <li>
                  <span className='DO-ME'>ReactJS</span>
                </li>
                <li>Redux & Context API</li>
                <li>TypeScript</li>
                <li>Tailwind CSS & Sass</li>
                <li>Webpack & Vite</li>
                <li>CSS3 & CSS modules</li>
              </ul>
            </article>
            <span className='Dash'></span>
            <article>
              <h3>Other:</h3>
              <ul>
                <li>Express & NodeJS</li>
                <li>MongoDB</li>
                <li>Jest & Cypress</li>
                <li>Git & Github</li>
                <li>Python</li>
              </ul>
            </article>
            <img src={Web} />
          </section>
        </article>
        <article>
          <section className='Resume'>
            <p>Download my resume with all my information from here</p>
            <a href='./Benzaima.pdf' download>
              <b>Resume here</b>
            </a>
          </section>
        </article>
      </main>
      <aside>
        <section className={`Explore--bar ${explore && "Hide--explore"}`}>
          <button
            className='News--scroll Layer--1'
            onClick={() => {
              setExplore(true);
            }}
          >
            <div className='Projects--title'>
              <h3>Explore projects</h3>
              <MdOutlineArrowForwardIos className='Projects--title__arr' />
            </div>
          </button>
          <button className='News--scroll Layer--2'></button>
          <button className='News--scroll Layer--3'></button>
        </section>
        <section className={`Projects--cnt ${!explore && "Hide--explore"}`}>
          <button
            className='Projects--btn__clear'
            onClick={() => {
              setExplore(false);
            }}
          >
            <MdClear className='Projects--clear' />
          </button>
          <section className='Projects--card__container'>
            {projects.map((project) => {
              return (
                <article
                  className={`Projects-card__single ${explore && "Scroll"}`}
                  key={project.id}
                >
                  <a href={project.link} target='_blank' rel='noreferrer'>
                    <header>
                      <h1>{project.name}</h1>
                    </header>
                    <hr></hr>
                    <div>
                      <img src={project.img} />
                      <h2></h2>
                      <p>{project.desc}</p>

                      <div className='TagCnt'>
                        {project.Tags.map((tag) => (
                          <p className='tag'>{tag}</p>
                        ))}
                      </div>
                      {/* <div className='Checkout--cnt'>
                <a className='Checkout--btn'>Checkout</a>
                <CgArrowRight />
              </div> */}
                    </div>
                  </a>
                </article>
              );
            })}
          </section>
        </section>
      </aside>
      <footer>
        <section className='Footer--main'>
          <article className='Footer--info'>
            <h2>GET IN TOUCH</h2>
            <p>You have news you want to share ?</p>
          </article>
          <section className='Social--container'>
            <a
              href='https://www.facebook.com/fadi.rey.792'
              target='_blank'
              rel='noreferrer'
            >
              <img src={facebook} />
            </a>
            <a
              href='https://www.instagram.com/fadi_bnz/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={instagram} />
            </a>
            <a
              href='https://twitter.com/FadiBenzx'
              target='_blank'
              rel='noreferrer'
            >
              <img src={twitter} />
            </a>
            <a
              href='https://www.linkedin.com/in/fadi-benzaima-8a497721b/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={linkedin} />
            </a>
          </section>
        </section>
        <section className='Footer--secondary'>
          <hr></hr>
          <span>Copyright 2023</span>
          <span className='Dote'>.</span>
          <span>Benzaima fadi</span>
        </section>
      </footer>
    </div>
  );
}

export default App;
