'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import milutinImage from "@/app/assets/images/unnamed.png";
import NavBar from "./components/navBar";
import TypeAnimation from "./components/typeAnimation";
import HambMenu from "./components/hambMenu";
import Cursor from "./components/cursor";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [temperature, setTemperature] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=1001cf9c399e4f26b3284513242410&q=Chicago&aqi=no`
        );        
        const data = await response.json();
        setTemperature(data.current.temp_f); 
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, );

  if (loading) {
    return (
      <div id="preloader">
        <div className="loader_line"></div>
      </div>
    );
  }

  return (
    <div>
      <div
        className="kioto_tm_all_wrap"
        data-magic-cursor="show"
        data-enter="rollIn"
        data-exit="rollOut"
      >
        <HambMenu />
        <Cursor />
        <div className="mouse-cursor">
          <div className="cursor-inner"></div>
          <div className="cursor-outer"></div>
        </div>
        <NavBar />
        <div className="rightpart">
          <div className="rightpart_in">
            <div id="home" className="kioto_tm_section animated">
              <div className="container">
                <div className="kioto_tm_home">
                  <div className="left">
                    <span className="name">// Milutin Stefanovic</span>
                    <h3>Software Developer And</h3>
                    <h3 className="job">
                      <span className="cd-headline clip">
                        <span className="cd-words-wrapper">
                          <b className="is-visible"> Web Nomad</b>
                          <b> Analyzer</b>
                          <b> Freelancer</b>
                        </span>
                      </span>
                    </h3>
                    <div className="kioto_tm_button transition_link">
                      <Link href="/pages/contact" className="tm_text_effect">
                        Get in Touch
                      </Link>
                    </div>
                    {temperature !== null && (
                      <div className="weather-info">
                        <p>Chicago: {temperature}°F</p>
                      </div>
                    )}
                  </div>
                  <div className="right">
                    <div className="abs_image">
                      <Image src={milutinImage} alt="" />
                      <div
                        className="main ripple"
                        data-img-url={"3-4.png"}
                        id="ripple"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TypeAnimation />
      </div>
    </div>
  );
}
