import React from 'react';
import axios from "axios";
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import { NavLink, Link } from "react-router-dom";
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const mentor = GLOBAL.BASE_URL+"mentor";
const adviser = GLOBAL.BASE_URL+"advisor";

function MentorsAndAdvisors() {
  const [getMentor, setMentor] = React.useState(null);
  const [getAdviser, setAdviser] = React.useState(null);
  React.useEffect(() => {
    axios.get(mentor).then((response) => {
    setMentor(response.data);
     });
    axios.get(adviser).then((response) => {
    setAdviser(response.data);
     });
   },[]);
  if (!getMentor) return null;
  if (!getAdviser) return null;
  return (
    <>
            <section className="isgf-breadcum isgf_mentors_and_advisors_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/mentors-and-advisors/mentors-and-advisors.jpg"
                  })`,
                }}>
                <div className="container">
                    <div className="isgf-breadcum-box">
                        <h1>Mentors and Advisors</h1>
                        <p>Home {'>'} ISGF {'>'} ISGF Organizational Structure {'>'} Mentors and Advisors</p>
                    </div>
                </div>
            </section>
            <section className="mentors-and-advisors">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 ">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="benefits_membership">
                                        <div className="heading mb-3">
                                            <h2>Mentors</h2>
                                        </div>
                                        <div className="mb-3">

                                            <div className="row g-4">
                                                {(getMentor) && getMentor.map((data,index)=>(
                                                <div className="col-sm-6 col-md-4 mb-3">
                                                    <div className="mentor-box">
                                                        <div className='image'>
                                                        <img alt="pic" src={assetUrl + "/public/forum_img/" + data.image}/>
                                                        </div>

                                                        <div className="about-mentor mb-2">
                                                            <div className="name">{data.title}</div>
                                                            <div className='description'>{data.designation}</div>
                                                        </div>
                                                        <div className="social">
                                                        {((data.twitter != null) && (data.twitter != '#'))  ? <>
                                                            <a target="_blank" href={data.twitter} className="fa fa-twitter"></a> </>: <><a href="" className="fa fa-twitter disabled"  ></a> </>}
                                                        {((data.linked_in != null) && (data.linked_in != '#'))  ? <>
                                                            <a target="_blank" href={data.linked_in} className="fa fa-linkedin"></a> </>: <> <a   href=""className="fa fa-linkedin disabled"></a></>}
                                                        </div>
                                                    </div>
                                                </div>
                                                ))}

                                            </div>
                                        </div>
                                        <div className="heading mb-3">
                                            <h2>Advisors</h2>
                                        </div>
                                        <div className="mb-3">

                                            <div className="row g-4">

                                                {(getAdviser) && getAdviser.map((data,index)=>(
                                                <div className="col-md-4 mb-3">
                                                    <div className="mentor-box">
                                                        <div className='image'>
                                                        <img src={assetUrl + "/public/forum_img/" + data.image} alt="pic"/>
                                                        </div>
                                                       <div className="about-mentor mb-2">
                                                            <div className="name">{data.title}</div>
                                                            <div className='description'>{data.designation}</div>
                                                        </div>
                                                        <div className="social">
                                                        {((data.twitter != null) && (data.twitter != '#'))  ? <>
                                                            <a target="_blank" href={data.twitter} className="fa fa-twitter"></a> </>: <><a href="" className="fa fa-twitter disabled"  ></a> </>}
                                                        {((data.linked_in != null) && (data.linked_in != '#'))  ? <>
                                                            <a target="_blank" href={data.linked_in} className="fa fa-linkedin"></a> </>: <> <a   href=""className="fa fa-linkedin disabled"></a></>}

                                                        </div>
                                                    </div>
                                                </div>
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <Sidebar/>
                        </div>
                </div>
                </div>
            </section>
    </>
  )
}

export default MentorsAndAdvisors