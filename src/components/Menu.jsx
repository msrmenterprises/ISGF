import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Menu = () =>{
    
  return (
    <div className='menu new-isgf-menu'>
        <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <NavLink exact to="/" className="navbar-brand d-block d-sm-none">
                <img
                  src={`${process.env.PUBLIC_URL}/images/isgf_Logo.png`}
                  alt=""
                  className="isgf-logo"
                />
              </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a aria-current="page" className="nav-link active" href="#"><i className="fa fa-home"></i></a></li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" exact to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ISGF
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/about">About ISGF</NavLink></li>
                                
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle sub-drop-left" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       ISGF Organizational Structure
                                    </Link>
                                    <ul className="dropdown-menu nav-submenu-1" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item" to="/">Board of Governors</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/">Working Groups</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/">General Body (ISGF MEMBERS)</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/">Secretariat</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/">General Body (ISGF MEMBERS)</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle sub-drop-left" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Membership
                                    </a>
                                    <ul className="dropdown-menu nav-submenu-1" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item" to="#">Become ISGF Member</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="#">ISGF Members List</NavLink></li>
                                        
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle sub-drop-left" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ISGF Annual Reports
                                    </a>
                                    <ul className="dropdown-menu nav-submenu nav-submenu-1" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item" to="#">2020 - 2021</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="#">2019 - 2020</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="#">2018 - 2019</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="#">2017 - 2018</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="#">2016 - 2017</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="#">2015 - 2016</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle sub-drop-left" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Careers
                                    </a>
                                    <ul className="dropdown-menu nav-submenu-1" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item" to="#">Careers at ISGF</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="#">Internship at ISGF</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>


                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Resource Centre
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/">Smart Grid Handbook</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">white papers and technical reports</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">domain of expertise</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">Standards</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">Power Sector Directory</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">National Smart Grid Mission (NSGM)</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">INDUSTRY NEWS</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">testimonials</NavLink></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ISGF Initiatives
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="#">Advisory Services</NavLink></li>
                               
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle sub-drop-left" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Trainings & Capacity Building 
                                    </NavLink>
                                    <ul className="dropdown-menu nav-submenu-2" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item" to="#">Online Training Building</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="#">Training Programs and Workshops (completed)</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="#">Trainees Trained by ISGF</NavLink></li>
                                        
                                    </ul>
                                </li>
                                <li><NavLink className="dropdown-item" to="/">India Smart Utility Week (ISUW)</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">ISGF Innovation Awards</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">Distribution Utility Meet (DUM)</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">ISUW technical papers</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">India CGD Forum</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">Women in energy</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">Bilateral Workshops</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">Webinars</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">Competitions</NavLink></li>
                            </ul>



                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Media
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/">Videos</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">Photos</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">press releases</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">isgf smart grid bulletin</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">ISGF in News</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/">India CGD Forum</NavLink></li>
              
                            </ul>



                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="#">Contributions</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="#">SMART GRID BLOG</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="#">contact Us</NavLink>
                            </li>

                    </ul>
                    
                    </div>
                </div>
                </nav>
    </div>
    </div>
  )
}

export default Menu