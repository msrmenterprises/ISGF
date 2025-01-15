import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
const GLOBAL = require('../../commonConstants.js');
const url = GLOBAL.BASE_URL + "working-group-user";
const assetUrl = GLOBAL.assetUrl;
function WorkingGroups() {
    const [getWorkingGroup, setWorkingGroup] = React.useState(null);
    React.useEffect(() => {
        axios.get(url).then((response) => {
            setWorkingGroup(response.data);
        });
    }, []);
   
    if (!getWorkingGroup) return null;
    return (
        <>
            <section className="isgf-breadcum isgf_general_body_breadcum" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/genral-body/general-body-banner.jpg"})` }}>
                <div className="container">
                    <div className="isgf-breadcum-box">
                        <h1>Working Groups(WGs)</h1>
                        <p>Home {'>'} ISGF {'>'} ISGF Organizational Structure {'>'} Working Groups(WGs)</p>
                    </div>
                </div>
            </section>
            <section className="isgf_members_list">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading mb-3">
                                        <h2>Working Groups(WGs)</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="">
                                        <div className="mb-3">

                                            <div className="isgf_accordion">
                                                <div className="accordion" id="accordionExample">

                                                    {(getWorkingGroup) && getWorkingGroup.map((data, index) => (
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header bg-green" id="heading1">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="false" aria-controls={`collapseOne${index}`}>
                                                                    <img src={assetUrl + "/public/forum_img/" + data.image} className="logo-icon" />{data.title}
                                                                </button>
                                                            </h2>
                                                            <div id={`collapseOne${index}`} className="accordion-collapse collapse" aria-labelledby={`headingOne${index}`} data-bs-parent="#accordionExample">

                                                                <div className="row p-3 g-4">
                                                                    <div className="col-md-12">
                                                                        <div className="heading mb-2">
                                                                            <h2>WG-{index + 1}</h2>
                                                                        </div>
                                                                    </div>
                                                                    {data.working_group_user.map((data1, index) => (

                                                                        <div className="col-md-6 col-lg-4">
                                                                            <div className="team-box">
                                                                                <div className="designation auto-height">
                                                                                    {data1.designation}
                                                                                </div>
                                                                                <div className="image">
                                                                                    <img src={assetUrl + "/public/forum_img/" + data1.image} className="img-fluid mt-4" />
                                                                                </div>
                                                                                <div className="name">
                                                                                    {data1.title}
                                                                                </div>
                                                                                <div className="social">
                                                                                    {((data1.twitter != null) && (data1.twitter != '#')) ? <>
                                                                                        <a target="_blank" href={data1.twitter} className="fa fa-twitter"></a> </> : <><a href="" className="fa fa-twitter disabled"  ></a> </>}
                                                                                    {((data1.linked_in != null) && (data1.linked_in != '#')) ? <><a target="_blank" href={data1.linked_in} className="fa fa-linkedin"></a> </> : <> <a href="" className="fa fa-linkedin disabled"></a></>}
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    ))}

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

                        </div>
                        <div className="col-lg-4">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkingGroups