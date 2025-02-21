"use client"

import 'bulma/css/bulma.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
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
    <nav className="navbar is-light py-2">
      <div className="columns is-vcentered is-mobile is-multiline" style={{ width: "100%" }}>

        {/* Left Side - Logo & Navigation */}
        <div className="column is-10-desktop is-10-tablet is-12-mobile">
          <div className="is-flex is-align-items-center">
            {/* Logo */}
            <div className="navbar-brand is-flex mr-6">
              <a className="navbar-item has-text-orange" href="#">
                <img src="https://husble.com/wp-content/uploads/2023/04/husble-logo-1.png" alt="husble_avatar" />
              </a>
            </div>
            {/* Menu Items */}
            <div className="is-flex is-flex-wrap-wrap">
              {/* <a className="navbar-item"><FontAwesomeIcon icon={faHome} className="mr-2" /> Home</a>
        <a className="navbar-item"><FontAwesomeIcon icon={faPlus} className="mr-2" /> Posts ID</a>
        <a className="navbar-item"><FontAwesomeIcon icon={faTableCells} className="mr-2" /> Fanpage</a>
        <a className="navbar-item"><FontAwesomeIcon icon={faBookOpen} className="mr-2" /> Ads Library</a>
        <a className="navbar-item"><FontAwesomeIcon icon={faChartBar} className="mr-2" /> Reports</a>
        <a className="navbar-item"><FontAwesomeIcon icon={faClock} className="mr-2" /> Fulfillment</a>
        <a className="navbar-item has-text-link"><FontAwesomeIcon icon={faChartPie} className="mr-2" /> Analytics</a>
        <a className="navbar-item has-text-link"><FontAwesomeIcon icon={faChartPie} className="mr-2" /> Analytics</a>
        <a className="navbar-item has-text-link"><FontAwesomeIcon icon={faChartPie} className="mr-2" /> Analytics</a>
        <a className="navbar-item has-text-link"><FontAwesomeIcon icon={faChartPie} className="mr-2" /> Analytics</a>
        <a className="navbar-item has-text-link"><FontAwesomeIcon icon={faChartPie} className="mr-2" /> Analytics</a>
        <a className="navbar-item has-text-link"><FontAwesomeIcon icon={faChartPie} className="mr-2" /> Analytics</a> */}
              <div className="navbar-start columns is-vcentered is-mobile is-multiline">
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
                  {/* <div className="navbar-dropdown">
                    <a className="navbar-item">Orders</a>
                    <a className="navbar-item">Tracking</a>
                  </div> */}
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
                  {/* <div className="navbar-dropdown">
                    <a className="navbar-item">SEO Tools</a>
                    <a className="navbar-item">Marketing</a>
                  </div> */}
                </div>

                <a className="navbar-item">
                  <span className="icon"><i className="fas fa-cog"></i></span> Config
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Ads & Tools */}
        <div className="column is-2-desktop is-2-tablet is-12-mobile is-flex is-justify-content-flex-end">
          <div className="is-flex is-align-items-center">

            {/* <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button className="button is-light">
                  <span className="icon"><FontAwesomeIcon icon={faUser} /></span>
                  <span>Hai Bach</span>
                </button>
              </div>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <a href="#" className="dropdown-item">Profile</a>
                  <a href="#" className="dropdown-item">Settings</a>
                  <a href="#" className="dropdown-item">Logout</a>
                </div>
              </div>
            </div> */}
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
        </div>

      </div>
    </nav>
  );
}
