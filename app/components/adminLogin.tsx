'use client';

import { useState, FC } from "react";

interface AdminLoginProps {
  setIsAdmin: (isAdmin: boolean) => void; 
}

const AdminLogin: FC<AdminLoginProps> = ({ setIsAdmin }) => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (password === "Milutin" && email === "milustefano25@gmail.com") {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
      setShowModal(false);
    } else {
      alert("Incorrect info");
    }
  };

  return (
    <>
      <div onClick={() => setShowModal(true)} style={{ cursor: 'pointer' }}>
        <h3>MILUTIN</h3>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Admin Login</h3>
            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              type="button" 
              className="admin-login-button" 
              onClick={handleLogin}
            >
              Login
            </button>
            <button 
              type="button" 
              className="admin-close-button" 
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLogin;
