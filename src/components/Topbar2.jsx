"use client"

import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faSignOutAlt, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { removeUserFromLocalStorage } from '@/utils/localStorage';

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    removeUserFromLocalStorage()
    router.push("/login"); // Redirect to login
  };

  return (
    <nav className="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item has-text-orange" href="#">
          {/* <strong style={{ fontSize: '22px', color: "#fa6900" }}>husble</strong> */}
          <img src="https://husble.com/wp-content/uploads/2023/04/husble-logo-1.png" alt="husble_avatar" />
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            <span className="icon"><i className="fas fa-home"></i></span> Home
          </a>
          <a className="navbar-item">
            <span className="icon"><i className="fas fa-plus"></i></span> Posts ID
          </a>
          <a className="navbar-item">
            <span className="icon"><i className="fas fa-table"></i></span> Fanpage
          </a>
          <a className="navbar-item">
            <span className="icon"><i className="fas fa-book"></i></span> Ads Library
          </a>
          <a className="navbar-item">
            <span className="icon"><i className="fas fa-chart-bar"></i></span> Reports
          </a>

          {/* Dropdown Example */}
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              <span className="icon"><i className="fas fa-clock"></i></span> Fulfillment
            </a>
            <div className="navbar-dropdown">
              <a className="navbar-item">Orders</a>
              <a className="navbar-item">Tracking</a>
            </div>
          </div>

          <a className="navbar-item has-text-orange">
            <span className="icon"><i className="fas fa-chart-line"></i></span> Analytics
          </a>

          <a className="navbar-item">
            <span className="icon"><i className="fab fa-tiktok"></i></span> TikTok Ads
          </a>
          <a className="navbar-item">
            <span className="icon"><i className="fab fa-google"></i></span> Google Ads
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              <span className="icon"><i className="fas fa-tools"></i></span> Tools
            </a>
            <div className="navbar-dropdown">
              <a className="navbar-item">SEO Tools</a>
              <a className="navbar-item">Marketing</a>
            </div>
          </div>

          <a className="navbar-item">
            <span className="icon"><i className="fas fa-cog"></i></span> Config
          </a>
        </div>

        {/* Profile */}
        <div className={`dropdown ${isOpen ? "is-active" : ""}`}>
          {/* Dropdown Trigger */}
          <div className="dropdown-trigger">
            <button className="button is-light" onClick={() => setIsOpen(!isOpen)}>
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span>Hai Bach</span>
              <span className="icon">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </button>
          </div>

          {/* Dropdown Menu */}
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <a href="/profile" className="dropdown-item">
                <FontAwesomeIcon icon={faUser} className="mr-2" /> Profile
              </a>
              <a href="/settings" className="dropdown-item">
                <FontAwesomeIcon icon={faCog} className="mr-2" /> Settings
              </a>
              <hr className="dropdown-divider" />
              <a onClick={handleLogout} className="dropdown-item has-text-danger">
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}