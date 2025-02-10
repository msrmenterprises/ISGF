import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Media from "./reusable/Media";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Menu from "./Menu";
import swal from "sweetalert";
import axios from "axios";
import Frame from 'react-frame-component';
const GLOBAL = require("../commonConstants.js");
const logo = GLOBAL.BASE_URL + "logo";
const assetUrl = GLOBAL.assetUrl;

const Navbar = () => {
  const navigate = useNavigate();
  const [getLogo, setLogo] = React.useState(null);
  const [search, setSearch] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSearchShow, setSearchShow] = useState('');
  const handleClick = () => {
    setSearchShow(!isSearchShow);
  };



  const onSubmit = (data) => {

    if (search == '') {
      swal(
        "Failed",
        "Please enter valid data",
        "error"
      );

    } else{
      setSearchShow(false);

      return navigate("/search/" + search);

    }

  };



  const el = document.querySelector('.navbar-collapse.collapse');


  // const handleClick1 = (e) => {
  
  //   let a = 'mega-link';
  //   let string = e.target.className;

  //   if (string.includes(a)) {
  //     el.classList.remove("show");
  // }
  // };

  const handleClick1 = (e) => {
    let a = 'mega-link';
    let string = e.target.className;
  
    if (string.includes(a)) {
      // Make sure to define 'el' properly
      const el = document.querySelector('.show'); // Select the element you want to remove the 'show' class from
      if (el) {  // Check if 'el' exists
        el.classList.remove("show");
      } else {
        console.warn('Element with class "show" not found');
      }
    }
  };
  

  React.useEffect(() => {
    axios.get(logo).then((response) => {
      setLogo(response.data);
    });
    window.scrollTo(0, 0);

  }, []);
  if (!getLogo) return null;

  return (
    <>

      <Media />
      <div className="org-header">
        <div className="container">
          <h2>WELCOME TO INDIA SMART GRID KNOWLEDGE PORTAL</h2>
        </div>
      </div>
      <div className="logo-header d-none d-sm-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2 text-center text-sm-start">
              <NavLink exact to="/" className="logo">
                <img
                  src={assetUrl + "/public/Logo_img/" + getLogo[0].image}
                  alt=""
                  className="isgf-logo"
                />
              </NavLink>
            </div>
            <div className="col-md-8">
              <div className="h-center">
                <div className="tag-line-box">
                  <img
                    src={assetUrl + "/public/Logo_img/" + getLogo[2].image}
                    alt=""
                  />
                  <p className="tag">
                    Accelerating the Electric Grid Modernization and Energy
                    Transition
                  </p>
                </div>
                {/* <div className="tag">
                  Accelerating the Electric Grid Modernization and Energy
                  Transition
                </div> */}
              </div>
            </div>
            <div className="col-md-2 text-center text-sm-end">
              <div className="right-logo">
                <a href="http://www.isuw.in/" target="_blank">
                  <img
                    src={assetUrl + "/public/Logo_img/" + getLogo[1].image}
                    alt=""
                    className="isgf-right-logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Menu/> */}


      <div className="menu new-isgf-menu">
        <div className="container" onClick={() => window.scrollTo(0, 0)}>
          <nav className="navbar navbar-expand-lg navbar-light" onClick={handleClick1} >
            <div className="container-fluid">
              <NavLink exact to="/" className="navbar-brand d-block d-sm-none">
                <img
                  src={`${process.env.PUBLIC_URL}/images/isgf_Logo.png`}
                  alt=""
                  className="isgf-logo"
                />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      aria-current="page"
                      className="nav-link active mega-link"
                      to="/"
                    >
                      <i className="fa fa-home"></i>
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      exact
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ISGF
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <NavLink className="dropdown-item mega-link " to="/about">
                          About ISGF
                        </NavLink>
                      </li>

                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle sub-drop-left"
                          to="#"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          ISGF Organizational Structure
                        </Link>
                        <ul
                          className="dropdown-menu nav-submenu-1"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <NavLink
                              className="dropdown-item hide-m mega-link"
                              to="/general-body"
                            >
                              General Body (ISGF MEMBERS)
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item hide-m mega-link"
                              to="/boardgovernors"
                            >
                              Board of Governors
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item hide-m mega-link"
                              to="/working-groups"
                            >
                              Working Groups
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item hide-m mega-link"
                              to="/mentors-and-advisors"
                            >
                              MENTORS AND ADVISORS
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item hide-m mega-link"
                              to="/secretariat-team"
                            >
                              Secretariat
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle sub-drop-left"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Membership
                        </a>
                        <ul
                          className="dropdown-menu nav-submenu-1"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              to="/become-a-member"
                            >
                              Become ISGF Member
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              to="/members-list"
                            >
                              ISGF Members List
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle sub-drop-left"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          ISGF Annual Reports
                        </a>
                        <ul
                          className="dropdown-menu nav-submenu nav-submenu-1"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              exact
                              to="/annual-report/2022-2023"
                            >
                              2022 - 2023
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              exact
                              to="/annual-report/2021-2022"
                            >
                              2021 - 2022
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              to="/annual-report/2020-2021"
                            >
                              2020 - 2021
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              to="/annual-report/2019-2020"
                            >
                              2019 - 2020
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              to="/annual-report/2018-2019"
                            >
                              2018 - 2019
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              to="/annual-report/2017-2018"
                            >
                              2017 - 2018
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              to="/annual-report/2016-2017"
                            >
                              2016 - 2017
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              to="/annual-report/2015-2016"
                            >
                              2015 - 2016
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle sub-drop-left"
                          to="#"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Careers
                        </Link>
                        <ul
                          className="dropdown-menu nav-submenu-1"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              to="/career-at-isgf"
                            >
                              Careers at ISGF
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              to="/career-internship-at-isgf"
                            >
                              Internship at ISGF
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Resource Centre
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <NavLink className="dropdown-item mega-link" to="/achievements">
                          Key Achievements
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item mega-link"
                          to="/white-papers-technical-reports"
                        >
                          white papers and technical reports
                        </NavLink>
                      </li>
                      <li>
                        <li>
                          <NavLink
                            className="dropdown-item mega-link"
                            to="/smart-grid-handbook"
                          >
                            Smart Grid Handbook
                          </NavLink>
                        </li>

                        <NavLink
                          className="dropdown-item mega-link"
                          to="/domain-of-expertise"
                        >
                          domain of expertise
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item mega-link" to="/standards">
                          Standards
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item mega-link"
                          to="/smart-grid-news"
                        >
                          INDUSTRY NEWS
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item mega-link" to="/testimonies">
                          testimonials
                        </NavLink>
                      </li>
                      {/* <li>
                        <NavLink
                          className="dropdown-item"
                          to="/power-sector-directory"
                        >
                          Power Sector Directory
                        </NavLink>
                      </li> */}
                      <li>
                        <NavLink className="dropdown-item mega-link" to="/nsgm">
                          National Smart Grid Mission (NSGM)
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ISGF Initiatives
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <NavLink
                          className="dropdown-item mega-link"
                          to="/advisory-services"
                        >
                          Advisory Services
                        </NavLink>
                      </li>

                      <li className="nav-item dropdown">
                        <NavLink
                          className="nav-link dropdown-toggle sub-drop-left"
                          to="#"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Education and Training
                        </NavLink>
                        <ul
                          className="dropdown-menu nav-submenu-2"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              to="/online-training-registration"
                            >
                              Online Training Programs (On -going)
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              to="/training-programs-workshops"
                            >
                              Past Training Programs (completed)
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              to=""
                            >
                              Master Classes
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="dropdown-item mega-link" to="/webinar">
                              Webinars
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              className="dropdown-item mega-link"
                              to="/trainees-trained"
                            >
                              Trainees Certified by ISGF
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item mega-link"
                          to="/functional-expertise"
                        >
                          Functional Expertise
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item mega-link"
                          to="/india-smart-utility-Week"
                        >
                          India Smart Utility Week (ISUW)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item mega-link" to="/awards">
                          ISGF Innovation Awards
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item mega-link"
                          to="/distribution-utility-meet"
                        >
                          Distribution Utility Meet (DUM)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item mega-link"
                          to="/technical-papers"
                        >
                          ISUW technical papers
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item mega-link"
                          to="/india-cgd-forum"
                        >
                          India CGD Forum
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item mega-link"
                          exact
                          to="/uam-forum"
                        >
                          UAS Forum
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item mega-link" to="/women-energy">
                          Women in energy
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item mega-link"
                          to="/bilateral-workshops"
                        >
                          Bilateral Workshops
                        </NavLink>
                      </li>

                      <li>
                        <NavLink className="dropdown-item mega-link" to="/competitions">
                          Competitions
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Media
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <NavLink className="dropdown-item mega-link" to="/vidoes">
                          Videos
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item mega-link" to="/photos">
                          Photos
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item mega-link" to="/press-release">
                          press releases
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item mega-link"
                          to="/smart-grid-bulletin"
                        >
                          isgf smart grid bulletin
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item mega-link" to="/media-coverage">
                          ISGF in News
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item mega-link" to="/event-calendar">
                          EVENT CALENDARs
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link mega-link"
                      aria-current="page"
                      to="/contribution"
                    >
                      Contributions
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link  mega-link"
                      aria-current="page"
                      to="/isgf-blogs"
                    >
                      SMART GRID BLOG
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link  mega-link"
                      aria-current="page"
                      to="/contact-us"
                    >
                      contact Us
                    </NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <i className="fa fa-search" onClick={handleClick}></i>
                    <>
                      {isSearchShow == false ? (
                        <></>
                      ) : (
                        <>
                          <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-group">
                              <input
                                value={search}
                                type="search"
                                name=""
                                className="form-control"
                                placeholder="Search Events/Webinars/Reports"
                                onChange={(e) => setSearch(e.target.value)}
                                autoFocus
                              />
                              <button type="submit" className="btn btn-blue">
                                Search
                              </button>
                            </div>
                          </form>
                        </>
                      )}
                    </>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
