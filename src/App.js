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
      name: "Sneakers",
      desc: `I strated this project to enhance my react skills, it is built with the latter technology where i used most of it is core features like hooks, React router,state managment tools and more. The design is inspired by a Front-End mentor challenge and the backend is handled by Express`,
      img: "/sneakers--website.png",
      link: "https://sneakers-iadx.onrender.com/",
      Tags: ["React js", "React Router", "Express js", "Axios", "Figma"],
    },
    {
      id: 2,
      name: "Portfolio",
      desc: ` This is my first ever web project, and my former portfolio
                    page where i used Vanilla HTML, javaScript and CSS. i built
                    it while learning the core features of the latter
                    tehcnologies.`,
      link: "https://benzaimafadi.netlify.app/",

      img: "/Portfolio.png",
      Tags: ["Vanilla JavaScript", "Bootstrap"],
    },
    {
      id: 3,
      name: "E-VENTI",
      desc: ` This is my second year project, a website for exploring and
                    organizing events, i build it with my teammate using React,
                    TypeScript, Vite and Tailwind CSS. The backend was handled
                    by .NET.`,
      img: "/E-VENTI.png",
      link: "",
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
                  <span >higher school</span> of computer
                  science, Sidi-Bel-Abbes. Where i'm studying to get an
                  ingeunirat in CS.
                </p>
                <span className="Light">2021-2026</span>
              </div>
            </article>
            <article className='Know-me-more'>
              <article className='Know-me-more__info'>
                <h2>Know me more</h2>
                <span className='Dash'></span>
                <p>
                  I’m the Co-host of the AlphaGeeks , each week i interview
                  pioneering people in tech and enterpeneurship.
                </p>
                <span className='Dash'></span>
                <p>
                  I’m passionate about design and giving my websites an original
                  feel and look, basing that on color and theme choice and
                  moreover code implementation.
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
              <div className='M'>
                <div>
                  <p className='M--letter'>M</p>
                  <p>
                    Y name is Benzaima Fadi, I’m a junior{" "}
                    <span className='DO-ME'>web devoloper</span> 
                     {' '}using cutting-edge technologies like React, Redux and more.
                  </p>
                </div>
              </div>
              <p className='Second--p'>
                An online identity is a must nowadays, and with my skills and
                expertise i will bring yours to the next level. My academic
                background and constant will to learn new technologies are all
                factors that will allow me to give you the{" "}
                <span >best product possible.</span>
              </p>
            </article>
            {/*  */}
            <img className='SideEye' src='/sideeye.jpg'></img>
            {/* <span>Eunoia</span> */}
          </section>
          <section className='Skills'>
            <img src={Web} />

            <h2>SKILLS</h2>
            <h1>"It's a process"</h1>
            <p className='Thin-text'>
              below are some of my self-tought skills or ones i gathered from my
              academic studies.
            </p>
            <article className='Front--article'>
              <h3>Frontend:</h3>
              <ul>
                <li>
                  <span className='DO-ME'>React and Redux</span>
                </li>
                <li>Vanilla JavaScript </li>
                <li>Tailwind CSS</li>
                <li>CSS3 and Sass</li>
                <li>HTML5</li>
              </ul>
            </article>
            <span className='Dash'></span>
            <article>
              <h3>Backend:</h3>
              <ul>
                <li>Node with express</li>
                <li>MongoDB</li>
                <li>Mysql</li>
                <li>Git and Github</li>
              </ul>
            </article>
          </section>
        </article>
        <article>
          <section className='News'>
            <div className='USA '>
              <div className='IMG'>
                <img src='/Harvard.jpg'></img>
              </div>
              <div className='TALK'>
                <header>
                  <h3>TRAVEL</h3>
                  <h1>I studied At the USA, here's how!</h1>
                </header>
                <p>
                  I am an alumna of the rigorous Leadership and Civic Engagement
                  program, 'Study of the US Institutes for student leaders'
                  where I spent the summer of 2023 at the University of
                  Massachusetts. During this program, I had the opportunity to
                  expand my knowledge in leadership, entrepreneurship and more.
                  I attended conferences and visited esteemed institutions such
                  as Harvard and MIT. I also had the privlige of conducting my
                  study tour in Detroit, Michigan.
                </p>
              </div>
            </div>
          </section>
          <section className='Resume'>
            <p>Download my resume with all my information from here</p>
            <a href='./Benzaima.pdf' download>
              <b>Resume here</b>
            </a>
          </section>

          <section className='Reviews'>
            <h2>
              <i>Reviews for my Web work:</i>
            </h2>
            <article className='Reviews--cnt'>
              {reviews.map((review) => {
                const { id, name, title, desc } = review;
                return (
                  <article className='Single--review' key={id}>
                    <h3>{name}</h3>
                    <span>{title}</span>
                    <p>{desc}</p>
                  </article>
                );
              })}
            </article>
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
                      <h2>Sneakers Website</h2>
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
            <i>to get the website of your dreams!</i>
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
