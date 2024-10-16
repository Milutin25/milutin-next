"use client";

import Link from "next/link";
import { useState } from "react";

export default function HambMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={`kioto_tm_topbar ${isOpen ? "active" : ""}`}>
        <div className="topbar_inner">
          <div className="logo" data-type="image">
            <h3>MILUTIN</h3>
          </div>
          <div className="trigger" onClick={handleToggle}>
            <div
              className={`hamburger hamburger--slider ${isOpen ? "is-active" : ""}`}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`kioto_tm_mobile_menu ${isOpen ? "opened" : ""}`}>
        <div className="menu_list">
          <ul className="transition_link">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pages/about">About</Link>
            </li>
            <li>
              <Link href="/pages/recentWork">Recent Work</Link>
            </li>
            <li>
              <Link href="/blogs">Blog</Link>
            </li>
            <li>
              <Link href="/pages/contact">Contact</Link>
            </li>
            <li>
              <Link href="/pages/login">Login</Link>
            </li>
            <li>
              <Link href="pages/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
