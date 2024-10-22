"use client";

import Image from "next/image";
import { FormEvent, useState, ChangeEvent } from "react";
import NavBar from "@/app/components/navBar";
import HambMenu from "@/app/components/hambMenu";
import Cursor from "@/app/components/cursor";
import Input from "@/app/components/inputs";
import locationImage from "@/app/assets/images/location.svg";
import callImage from "@/app/assets/images/call.svg";
import emailImage from "@/app/assets/images/mail-2.svg";
import twitterImage from "@/app/assets/images/twitter.svg";
import instagramImage from "@/app/assets/images/instagram.svg";
import facebookImage from "@/app/assets/images/facebook.svg";
import socialImage from "@/app/assets/images/social.svg";
import { createClient } from "@/app/supabase/client";

export default function ContactPage() {
const supabase = createClient()

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errorMessage, setError] = useState<string | null>(null);
  const [successMessage, setSuccess] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
 
  const updateName = (e: ChangeEvent<HTMLInputElement>): void => {
    const usersName = e.target.value;
    setName(usersName);
  };

  const updateEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    const usersEmail = e.target.value;
    setEmail(usersEmail);
  };

  const updatePhone = (e: ChangeEvent<HTMLInputElement>): void => {
    const usersPhone = e.target.value;
    if (usersPhone === "" || !isNaN(Number(usersPhone))) {
      setPhone(usersPhone);
    }
  };

  const updateMessage = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const usersMessage = e.target.value;
    setMessage(usersMessage);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = {
      name: !name,
      email: !email,
      phone: !phone,
      message: !message,
    };

    if (Object.values(errors).includes(true)) {
      setFormErrors(errors);
      setError("All fields must be filled out.");
      setSuccess(null);
      return;
    }

    if (!supabase) {
      setError("Service is currently unavailable. Please try again later.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("Table")
        .insert([{ name, email, phone, message }]);

      if (error) {
        console.error("Error:", error);
        setError("Please fill all the fields correctly.");
        setSuccess(null);
      } else {
        setIsSubmitted(true);
        console.log("Data:", data);
        setSuccess(
          "Thanks for reaching out. Your message has been sent successfully!"
        );
        setError(null);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setFormErrors({
          name: false,
          email: false,
          phone: false,
          message: false,
        });
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("Unexpected error, please try again later.");
      setSuccess(null);
    }
  };

  return (
    <>
      <Cursor />
      <div className="mouse-cursor">
        <div className="cursor-inner"></div>
        <div className="cursor-outer"></div>
      </div>
      <NavBar />
      <HambMenu />
      <div id="contact" className="kioto_tm_section">
        <div className="container">
          <div className="kioto_tm_contact">
            <div className="kioto_tm_title">
              <span>// Get In Touch</span>
            </div>
            <div className="info_list">
              <ul>
                <li>
                  <div className="list_inner">
                    <Image className="svg icon" src={locationImage} alt="Location" />
                    <span>9449 Bay Colony Dr, Des Plaines, IL USA</span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <Image className="svg icon" src={callImage} alt="Call" />
                    <span>
                      <a className="line_effect" href="tel:8478059655">
                        847-805-9655
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <Image className="svg icon" src={emailImage} alt="Mail" />
                    <span>
                      <a className="line_effect" href="mailto:milustefano25@gmail.com">
                        milustefano25@gmail.com
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <Image className="svg icon" src={socialImage} alt="Social" />
                    <div className="kioto_tm_social">
                      <ul>
                        <li>
                          <a href="https://x.com/milustefano25" target="_blank" rel="noopener noreferrer">
                            <Image className="svg" src={twitterImage} alt="Twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/share/HZchAE6vhbk4S3LS/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                            <Image className="svg" src={facebookImage} alt="Facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/rsbarbarian?igsh=MTdzZGI1bW9vbmEwNw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <Image className="svg" src={instagramImage} alt="Instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="form_wrapper">
              {!isSubmitted && (
                <form id="contactForm" onSubmit={handleSubmit}>
                  <ul>
                    <li>
                      <Input
                        type="text"
                        placeholder="Name"
                        name="contact_name"
                        className={`cf-form-control ${formErrors.name ? "error" : ""}`}
                        value={name}
                        onChange={updateName}
                        style={{ borderColor: formErrors.name ? "red" : "" }}
                      />
                      <span></span>
                    </li>
                    <li>
                      <Input
                        type="email"
                        placeholder="Email"
                        name="contact_email"
                        className={`cf-form-control ${formErrors.email ? "error" : ""}`}
                        value={email}
                        onChange={updateEmail}
                        style={{ borderColor: formErrors.email ? "red" : "" }}
                      />
                      <span></span>
                    </li>
                    <li>
                      <Input
                        type="number"
                        placeholder="Phone"
                        name="contact_phone"
                        className={`cf-form-control ${formErrors.phone ? "error" : ""}`}
                        value={phone}
                        onChange={updatePhone}
                        style={{ borderColor: formErrors.phone ? "red" : "" }}
                      />
                      <span></span>
                    </li>
                    <li id="text-area-w">
                      <textarea
                        placeholder="Message"
                        name="contact_message"
                        className={`cf-form-control ${formErrors.message ? "error" : ""}`}
                        value={message}
                        onChange={updateMessage}
                        style={{ borderColor: formErrors.message ? "red" : "" }}
                      ></textarea>
                    </li>
                  </ul>
                  <div className="kioto_tm_button">
                    <button
                      type="submit"
                      id="send_message"
                      className="tm_text_effect"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              {successMessage && <p className="success-message">{successMessage}</p>}
            </div>

            <div className="my_map">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height="392"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=9449%20bay%20colony%20dr%20des%20plaines%20il&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
