import React from 'react';
import Sidebar from '../reusable/Sidebar';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const GLOBAL = require('../../commonConstants.js');
const url1 = GLOBAL.BASE_URL + "contactUS";

function ContactUs() {


    const [getContactData, setContactData] = React.useState(null);
 
    const navigate = useNavigate();
    const [fname, setfName] = React.useState("");
    const [lname, setlName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [message, setMessage] = React.useState("");
    const checkInput = (e) => {
        if (!isNaN(Number(e.target.value)) && (e.target.value).length <= 12) {
            setPhone(e.target.value);
        }
    }
    const { register, handleSubmit, formState: { errors } } = useForm();

    React.useEffect(() => {
        axios.get(url1).then((response) => {
            setContactData(response.data);
        });
    }, []);
 
    const onSubmit = (data) => {
        axios({
            method: "post",
            url: GLOBAL.BASE_URL + "contact",
            data: { lname, fname, email, phone, message },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

        })
        .then(function (response) {
            navigate('/thankyou');
        })
        .catch(function (response) {
            console.log(response);
        });
    }

    if (!getContactData) return null;

    return (
        <>
            <section className="isgf-breadcum contact_banner_at_breadcum" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/images/contact-us/contact-banner.jpg"
                    })`,
            }}>
                <div className="container">
                    <div className="isgf-breadcum-box">
                        <h1>Contact Us</h1>
                        <p>Home {'>'} Contact Us</p>
                    </div>
                </div>
            </section>
            <section className="career_at_isgf">
                {(getContactData) && getContactData.map((data, index) => (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="benefits_membership">
                                            <div className="heading mb-3">
                                                <h2>Contact Us</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-5">
                                    <div className="col-md-6 mb-3">
                                        <div className="contact-us-box">
                                            <div className="left-1">
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            </div>
                                            <div className="right-1">
                                                <p className="titel">India Smart Grid Forum</p>
                                                <p>{data.india_smart_grid_forum}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6  mb-3">
                                        <div className="contact-us-adddres">
                                            <div className="contact-us-box">
                                                <div className="left-1">
                                                    <i className="fa fa fa-phone" aria-hidden="true"></i>
                                                </div>
                                                <div className="right-1">
                                                    <p className="titel">Phone</p>
                                                    <p><a href={"tel:" + data.phone}>{data.phone}</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6  mb-3">
                                        <div className="contact-us-adddres">
                                            <div className="contact-us-box">
                                                <div className="left-1">
                                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                                </div>
                                                <div className="right-1">
                                                    <p className="titel">E-mail</p>
                                                    <p><a href={"mailto:" + data.email}>{data.email}</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6  mb-3">
                                        <div className="contact-us-adddres">
                                            <div className="contact-us-box">
                                                <div className="left-1">
                                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                </div>
                                                <div className="right-1">
                                                    <p className="titel">Website</p>
                                                    <p>
                                                    <a href={data.website} target="_blank">{data.website} </a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-md-12">
                                        <div className="contact-us-gray">
                                            <h5 className="mb-3">Enquiry Form</h5>
                                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                                <div className="row">
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="fname" placeholder="First Name*" value={fname} {...register('fname', { required: "Name is Required" })} onChange={(e) => setfName(e.target.value)} />
                                                                {errors.fname && (<small className="text-danger">First Name is  Required*</small>)}
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="lname" placeholder="Last Name*" value={lname} {...register('lname', { required: "Name is Required" })} onChange={(e) => setlName(e.target.value)} />
                                                                {errors.lname && (<small className="text-danger">Last Name is Required*</small>)}
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <div className="form-group">
                                                                <input type="email" className="form-control" name="email" placeholder="Email*" {...register('email', {
                                                                    required: "Email is Required", pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
                                                                })} onChange={(e) => setEmail(e.target.value)} />
                                                                {errors.email && (<small className="text-danger">Email is Required*</small>)}
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Phone number *" value={phone} {...register('phone', { required: "Phone is Required" })} onChange={(e) => checkInput(e)} />
                                                                {errors.phone && (<small className="text-danger">Phone Number is Required*</small>)}
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <textarea className="form-control" placeholder="Enquiry*" rows="3" value={message} {...register('message', { required: "Message is Required" })} onChange={(e) => setMessage(e.target.value)} > </textarea>
                                                            </div>
                                                                {(errors.message || errors.message == '') && (<small className="text-danger">Message is Required*</small>)}
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <button type="submit" className="btn btn-primary btn-p">Submit</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                    </div>

                                </div>

                                <div className="row mb-5">
                                    <div className="col-md-12">
                                        <div className="map-responsive">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14011.701027723831!2d77.188105!3d28.602019!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x884f3c678a542b90!2sIndia%20Smart%20Grid%20Forum%20(ISGF)!5e0!3m2!1sen!2sin!4v1662372283366!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-md-12">
                                        <div className="media-box">
                                            <h4>Follow Us @</h4>
                                            <div className="media-box-icon mt-4">
                                                <a target="_blank" href={data.fb} className="fa fa-facebook"></a>
                                                <a target="_blank" href={data.linkedin} className="fa fa-linkedin"></a>
                                                <a target="_blank" href={data.twitter} className="fa fa-twitter"></a>
                                                <a target="_blank" href={data.instagram} className="fa fa-instagram"></a>
                                                <a target="_blank" href={data.youtube} className="fa fa-youtube"></a>
                                                <a target="_blank" href={data.flickr} className="fa fa-flickr"></a>
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
                ))}

            </section>
        </>
    )
}

export default ContactUs