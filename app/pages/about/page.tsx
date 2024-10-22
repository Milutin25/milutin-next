'use client'

import { useState } from "react";
import Image from "next/image"
import Cursor from "@/app/components/cursor";
import NavBar from "@/app/components/navBar";
import HambMenu from "@/app/components/hambMenu";
import Progress from "@/app/components/progressbar";
import slavoImage from "@/app/assets/images/slavo.jpg"
import natasaImage from "@/app/assets/images/natasa.jpg"
import zikaImage from "@/app/assets/images/zika.jpg"
import twitterImage from "@/app/assets/images/twitter.svg"
import instagramImage from "@/app/assets/images/instagram.svg"
import facebookImage from "@/app/assets/images/facebook.svg"
import tiktokImage from "@/app/assets/images/tik-tok.svg"
import DownloadButton from "@/app/components/downloadButton";

export default function About () {

  const [hidden, setHidden] = useState(true);

  return (
    <>
      <Cursor/>
      <div className="mouse-cursor">
          <div className="cursor-inner"></div>
          <div className="cursor-outer"></div>
      </div>
      <NavBar />
      <HambMenu/>
      <div id="about" className="kioto_tm_section">
        <div className="container">
          <div className="kioto_tm_about">
            <div className="kioto_tm_biography">
              <div className="biography">
                <div className="kioto_tm_title">
                  <span>// Biography</span>
                </div>
                <div className="text">
                  <p>
                    Hi, my name is Milutin Stefanovic and I began using React
                    since 2017. I’ve spent most of my waking hours for the last
                    few years programming and operating React sites. One of my
                    specialties is taking an idea from scratch and creating a
                    full-fledged platform. I go beyond to produce sites with a
                    unique, outstanding, contemporary look-and-feel.
                  </p>
                </div>
                <div className="kioto_tm_button">
                 <DownloadButton />
                </div>
              </div>
              <div className="personal_details">
                <div className="kioto_tm_title">
                  <span>// Personal Details</span>
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <span>Name:</span>
                      <span>Milutin Stefanovic</span>
                    </li>
                    <li>
                      <span>Address:</span>
                      <span>9446 Bay Colony Dr, Des Plaines, IL</span>
                    </li>
                    <li>
                      <span>Study:</span>
                      <span>University of Belgrade, Serbia</span>
                    </li>
                    <li>
                      <span>Mail:</span>
                      <span>
                        <a
                          className="line_effect"
                          href="mailto:milustefano25@gmail.com"
                        >
                          milustefano25@gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>Phone:</span>
                      <span>
                        <a className="line_effect" href="tel:847-805-9655">
                          847-805-9655
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>Freelance:</span>
                      <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="kioto_tm_skills">
              <div className="left">
                <div className="kioto_tm_title">
                  <span>// Programming Skills</span>
                </div>
                <div className="kioto_progress">
                  <Progress value={95} color="#767676" label="HTML & CSS" />
                  <Progress value={90} color="#767676" label="JavaScript" />
                  <Progress value={90} color="#767676" label="React" />
                </div>
              </div>
              <div className="right">
                <div className="kioto_tm_title">
                  <span>// Language Skills</span>
                </div>
                <div className="kioto_progress">
                  <Progress value={95} color="#767676" label="English" />
                  <Progress value={100} color="#767676" label="Serbian" />
                </div>
              </div>
            </div>
            <div className="kioto_tm_features">
              <div className="left">
                <div className="kioto_tm_title">
                  <span>// Interests</span>
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <span>
                        <label>&#10003;</label> Writing Clean Codes
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>&#10003;</label> Web Design
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>&#10003;</label> Swimming
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>&#10003;</label> Watching Cinema
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>&#10003;</label> Reading IT Books
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right"></div>
            </div>
            <div className="kioto_tm_timeline">
              <div className="left">
                <div className="kioto_tm_title">
                  <span>// Education</span>
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <div className="info">
                          <h3>University of Belgrade</h3>
                          <span>Physical Education</span>
                          </div>
                          <div className="year">
                            <span>2001 - 2005</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="info">
                          <h3>IT Academy</h3>
                          <span>Code Expert</span>
                        </div>
                        <div className="year">
                          <span>2018 - 2020</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="info">
                          <h3>Technology School</h3>
                          <span>Computer Engineering</span>
                        </div>
                        <div className="year">
                          <span>2016 - 2018</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="kioto_tm_title">
                  <span>// Experience</span>
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <div className="info">
                          <h3>Prototype.NEXT</h3>
                          <span>Software Developer</span>
                        </div>
                        <div className="year">
                          <span>2022 - now</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="kioto_tm_counter">
              <div className="kioto_tm_title">
                <span>// Fun Facts</span>
              </div>
              <div className="list">
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>100+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>35k+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>4</h3>
                      <span>Completed Marathons</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>100%</h3>
                      <span>Satisfaction Guarantee</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="kioto_tm_members">
              <div className="kioto_tm_title">
                <span>// Team Members</span>
              </div>
              <div className="list">
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="abs_image">
                        <Image src={slavoImage} alt="Slavo Popovic" />
                        <div className="main" data-img-url="img/portfolio/3.jpg"></div>
                      </div>
                      <div
                        className="details"
                        onMouseEnter={() => setHidden(false)}
                        onMouseLeave={() => setHidden(true)}
                      >
                        <h3 className="name">Slavo Popovic</h3>
                        <span className="job">Software Developer</span>
                        <div className="kioto_tm_social">
                          <ul>
                            <li>
                              <a href="#"><Image className="svg" src={tiktokImage} alt="Tik-tok" /></a>
                            </li>
                            <li>
                              <a href="#"><Image className="svg" src={twitterImage} alt="Twitter" /></a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/share/StB7JEqVEyCTHuMG/?mibextid=LQQJ4d">
                                <Image className="svg" src={facebookImage} alt="Facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/slavo_3?igsh=a2xzdDVyd3pnaDZw">
                                <Image className="svg" src={instagramImage} alt="Instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className={`hover-text ${hidden ? 'hidden' : ''}`}>
                          <p className="description">
                          Slavo Popovic is a seasoned senior software developer with an impressive track record of leading and 
                          contributing to major projects. He has played pivotal roles in high-profile developments, including 
                          significant contributions to The Weather Channel. As the founder of Prototype.NEXT, Slavo has leveraged 
                          his extensive expertise to foster innovation and drive technological advancements. His visionary 
                          approach and commitment to excellence have made a substantial impact on the software industry. Slavo's 
                          ability to navigate complex challenges and deliver high-quality solutions consistently sets him apart. 
                          His leadership and technical skills not only inspire his team but also pave the way for future 
                          breakthroughs in software development. His dedication to mentoring emerging talents and his proactive
                          approach in adopting cutting-edge technologies continue to drive the evolution of the software 
                          industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="abs_image">
                        <Image src={zikaImage} alt="Marko Zivkovic" />
                        <div className="main" data-img-url="img/portfolio/3.jpg"></div>
                      </div>
                      <div
                        className="details"
                        onMouseEnter={() => setHidden(false)}
                        onMouseLeave={() => setHidden(true)}
                      >
                        <h3 className="name">Marko Zivkovic</h3>
                        <span className="job">Software Developer</span>
                        <div className="kioto_tm_social">
                          <ul>
                            <li>
                              <a href="#"><Image className="svg" src={tiktokImage} alt="Tik-tok" /></a>
                            </li>
                            <li>
                              <a href="#"><Image className="svg" src={twitterImage} alt="Twitter" /></a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/share/MjLSFpjszLZ8oaHv/?mibextid=LQQJ4d">
                                <Image className="svg" src={facebookImage} alt="Facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/markozivkovic1982?igsh=MWN5a21hbGl1b3BzNw==">
                                <Image className="svg" src={instagramImage} alt="Instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className={`hover-text ${hidden ? 'hidden' : ''}`}>
                          <p className="description">
                          Marko Zivkovic is a dedicated mid-level software developer with a strong track record of contributing to
                          a variety of projects. He gained particular recognition for his efficiency during the challenging 
                          Covid-19 period, where his work for the Serbian government played a crucial role in supporting critical
                          systems and infrastructure. Beyond this, Marko has also been an integral part of Prototype.NEXT, where 
                          his skills and innovative approach continue to drive forward-thinking solutions. His ability to adapt
                          and excel in fast-paced environments makes him a valuable asset to any development team. Additionally,
                          Marko's collaborative spirit and commitment to continuous learning have consistently driven
                          successful project outcomes. His contributions have not only improved operational efficiency but 
                          also enhanced team cohesion and project execution.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="abs_image">
                        <Image src={natasaImage} alt="Natasa Stefanovic" />
                        <div className="main" data-img-url="img/portfolio/3.jpg"></div>
                      </div>
                      <div
                        className="details"
                        onMouseEnter={() => setHidden(false)}
                        onMouseLeave={() => setHidden(true)}
                      >
                        <h3 className="name">Natasa Stefanovic</h3>
                        <span className="job">Software Developer</span>
                        <div className="kioto_tm_social">
                          <ul>
                            <li>
                              <a href="#"><Image className="svg" src={tiktokImage} alt="Tik-tok" /></a>
                            </li>
                            <li>
                              <a href="#"><Image className="svg" src={twitterImage} alt="Twitter" /></a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/share/6E2BAACqnYahYkYk/?mibextid=LQQJ4d">
                                <Image className="svg" src={facebookImage} alt="Facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/natalystefanovic?igsh=NzJ2YWZrMWEwdzY1">
                                <Image className="svg" src={instagramImage} alt="Instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className={`hover-text ${hidden ? 'hidden' : ''}`}>
                          <p className="description">
                          Natasa Stefanovic is a distinguished software developer known for her exceptional contributions 
                          to the tech industry. With extensive experience in capital projects across Europe, Natasa has 
                          demonstrated a remarkable ability to deliver complex solutions under demanding conditions. Her
                          career spans several high-profile projects, where she has consistently exceeded expectations and 
                          brought innovative ideas to the table.In addition to her work on capital projects, Natasa has dedicated
                          a significant portion of her career to working with non-profit organizations. Her commitment to social
                          impact and community service is evident through her involvement in various initiatives aimed at 
                          leveraging technology for positive change. By collaborating with these organizations, she has helped 
                          develop solutions that address critical social issues, improve accessibility, and promote sustainable
                          development.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


