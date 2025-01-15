import React, {useState} from "react";
import { Link, NavLink, useNavigate, } from 'react-router-dom';
import Media from "./reusable/Media";
import { useForm } from 'react-hook-form';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Navbar = () => {

  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");
  const {register,handleSubmit,formState:{errors}} = useForm();
  const onSubmit = (data) =>{
    return navigate("/search/"+search);
  }

  const [isSearchShow, setSearchShow] = useState(true);
  const handleClick = () => {
    setSearchShow(!isSearchShow);
  };
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
                  src={`${process.env.PUBLIC_URL}/images/isgf_Logo.png`}
                  alt=""
                  className="isgf-logo"
                />
              </NavLink>
            </div>
            <div className="col-md-8">
              <div className="h-center">
                <div>

                  <img
                    src={`${process.env.PUBLIC_URL}/images/10-years.png`}
                    alt=""
                  />
                </div>
                <div className="tag">
                  Accelerating the Electric Grid Modernization and Energy
                  Transition
                </div>
              </div>
            </div>
            <div className="col-md-2 text-center text-sm-end">
              <div className="right-logo">
               <a href="http://www.isuw.in/" target="_blank">
               <img
                  src={`${process.env.PUBLIC_URL}/images/logo-11.jpg`}
                  alt=""
                  className="isgf-right-logo"
                />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu">
        <nav className="navbar navbar-expand-lg navbar-dark ">

          <div className="container">
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
              data-bs-target="#main_nav"
              aria-expanded="false"

              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse"  id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    exact
                    to="/"
                  >
                    <i className="fa fa-home"></i>
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                  ISGF
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/about">
                        About ISGF
                      </NavLink>
                    </li>

                    <li>

                      <Link className="dropdown-item parent" to="/">
                        ISGF Organizational Structure &raquo;
                      </Link>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/boardgovernors"
                          >
                            Board of Governors
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/working-groups">
                            Working Groups
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/mentors-and-advisors"
                          >
                            Mentors and Advisors
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" exact to="/secretariat-team">
                            Secretariat
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" exact to="/general-body">
                            General Body (ISGF MEMBERS)
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link className="dropdown-item" exact to="#">
                        Membership &raquo;
                      </Link>

                      <ul className="submenu dropdown-menu">
                        <li>
                          <NavLink className="dropdown-item" exact to="/become-a-member">
                            Become ISGF Member
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" exact to="/members-list">
                            ISGF Members List
                          </NavLink>
                        </li>

                      </ul>
                    </li>



                    <li>
                      <Link className="dropdown-item" exact to="#">
                        ISGF Annual Reports &raquo;
                      </Link>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <NavLink className="dropdown-item" exact to="/annual-report/2020-2021" >
                            2020 - 2021
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" exact to="/annual-report/2019-2020">
                            2019 - 2020
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" exact to="/annual-report/2018-2019">
                            2018 - 2019
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" exact to="/annual-report/2017-2018">
                            2017 - 2018
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" exact to="/annual-report/2016-2017">
                            2016 - 2017
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" exact to="/annual-report/2015-2016" value="2015-2016">
                            2015 - 2016
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dropdown-item" exact to="#">
                        Careers &raquo;
                      </Link>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <NavLink className="dropdown-item" exact to="/career-at-isgf">
                            Careers at ISGF
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item"
                            exact to="/career-internship-at-isgf"
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
                    exact to="#"
                    data-bs-toggle="dropdown"
                  >

                    Resource Centre
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" exact to="/smart-grid-handbook">
                       Smart Grid Handbook
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className="dropdown-item"
                        exact to="/white-papers-technical-reports"
                      >
                       white papers and technical reports
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="/domain-of-expertise">
                        domain of expertise
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="/standards">
                        Standards
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        exact to="/power-sector-directory"
                      >
                       Power Sector Directory
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="/nsgm">
                      National Smart Grid Mission (NSGM)
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="/smart-grid-news">
                      INDUSTRY NEWS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="/testimonies">
                       testimonials
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    exact to="#"
                    data-bs-toggle="dropdown"
                  >
                   ISGF Initiatives
                  </Link>
                  <ul className="dropdown-menu">

                    <li>
                      <NavLink className="dropdown-item" exact to="/advisory-services">
                       Advisory Services
                      </NavLink>
                    </li>
                    <li>
                      <Link className="dropdown-item" exact to="#">
                        Trainings & Capacity Building <span>&raquo;</span>
                      </Link>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <NavLink className="dropdown-item" exact to="/online-training-registration">
                            Online Training Building
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item"
                            exact to="/training-programs-workshops"
                          >
                            Training Programs and Workshops (completed)
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" exact to="/trainees-trained">
                            Trainees Trained by ISGF
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        exact to="/india-smart-utility-Week"
                      >
                        India Smart Utility Week (ISUW)
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="/awards">
                       ISGF Innovation Awards
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        exact to="/distribution-utility-meet"
                      >

                        Distribution Utility Meet (DUM)
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="/technical-papers">
                       ISUW technical papers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="/india-cgd-forum">
                       India CGD Forum
                      </NavLink>
                    </li>

                    <li>
                      <NavLink className="dropdown-item" exact to="/uam-forum">
                      UAS Forum
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="/women-energy">
                        Women in energy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="/bilateral-workshops">
                        Bilateral Workshops
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="/webinar">
                       Webinars
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="/competitions">
                        Competitions
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    exact to="#"
                    data-bs-toggle="dropdown"
                    aria-current="page"
                  >
                  Media
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" exact to="/vidoes">
                       Videos
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="photos">
                       Photos
                      </NavLink>
                    </li>

                    <li>
                      <NavLink className="dropdown-item" exact to="press-release">
                        press releases
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="smart-grid-bulletin">
                        isgf smart grid bulletin
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="media-coverage">
                        ISGF in News
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" exact to="event-calendar">
                          Events
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    exact to="/contribution"
                  >
                    Contributions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    exact to="/isgf-blogs"
                  >
                    SMART GRID BLOG
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    exact to="/contact-us"
                  >
                    contact Us
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">

                {/* <Popup trigger={<i className="fa fa-search"></i>}
                  position="bottom center">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>

                      <div className="input-group">

                      <input value={search}  type="search" name="" className="form-control" placeholder="Search here"  onChange ={(e) => setSearch(e.target.value)}/>
                      <button type="submit" className="btn btn-primary">Search</button>
                      </div>

                      </form>
                  </Popup> */}

                  {/* <NavLink className="nav-link" aria-current="page" exact to="/"> */}
                     <i  className="fa fa-search" onClick={handleClick}></i>
                     {/* <i className="fa fa-search"></i> */}
                  {/* </NavLink> */}

                  <>
                    {isSearchShow ? (
                      <></>
                    ) : (
                      <>
                      <form action="" onSubmit={handleSubmit(onSubmit)}>

                        <div className="input-group">

                        <input value={search}  type="search" name="" className="form-control" placeholder="Search Events/Webinars/Reports"  onChange ={(e) => setSearch(e.target.value)}/>
                        <button type="submit" className="btn btn-blue">Search</button>
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

    </>
  );
};

export default Navbar;
