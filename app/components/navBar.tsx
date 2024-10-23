'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import AdminLogin from "./adminLogin"; 
import "@/app/components/styles.css";

export default function NavBar() {
  const [isAdmin, setIsAdmin] = useState<boolean>(false); 

  
  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin");
    if (adminStatus === "true") {
      setIsAdmin(true);
    }
  }, []);

 
  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin"); 
  };

  return (
    <div className="leftpart">
      <div className="leftpart_inner">
        <div className="logo" data-type="text">
          <AdminLogin setIsAdmin={setIsAdmin} />
        </div>
        <div className="menu">
          <ul className="transition_link">
            <li className="active">
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
            {isAdmin && (
              <>
                <li>
                  <Link href="/pages/messages">Messages</Link>
                </li>
                <li>
                  <Link href="/" onClick={handleLogout}  passHref>
                    <button>ADMIN LOGOUT</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="copyright">
          <p>
            &copy; 2024 <br />
            Created by Milutin Stefanovic
          </p>
        </div>
      </div>
    </div>
  );
}
