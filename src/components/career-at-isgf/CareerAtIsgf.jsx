import React from "react";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
import axios from "axios";
import parse from "html-react-parser";
import { useForm } from 'react-hook-form';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const GLOBAL = require('../../commonConstants.js');

const assetUrl = GLOBAL.assetUrl;;
const career = GLOBAL.BASE_URL+"career";
const url = GLOBAL.BASE_URL+"career_form";

function CareerAtIsgf() {
  const [getCareer, setCareer] = React.useState(null);
  React.useEffect(() => {
    axios.get(career).then((response) => {
      setCareer(response.data);
    });
  }, []);

   // const history = useHistory();
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [primary_number, setPhone] = React.useState("");
    const [secondary_number, setPhone_second] = React.useState("");
    const [year, setYear] = React.useState("");
    const [month, setMonth] = React.useState("");
    const [resume, setResume] = React.useState("");
    const [cover_letter_text, setCoverLetter] = React.useState("");
    const [cover_letter, setCoverLetterFile] = React.useState("");
    const checkInput = (e) => {
      if (!isNaN(Number(e.target.value)) && (e.target.value).length <= 12) {
          setPhone(e.target.value);
      }
    }
    const checkInput1 = (e) => {
    if (!isNaN(Number(e.target.value)) && (e.target.value).length <= 12) {
        setPhone_second(e.target.value);
    }
  }
    const {register,handleSubmit,formState:{errors}} = useForm();
function saveData() {

	 const url = GLOBAL.BASE_URL+'career_form';
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('primary_number', primary_number);
    formData.append('secondary_number', secondary_number);
    formData.append('year', year);
    formData.append('month', month);
    formData.append('cover_letter_text', cover_letter_text);
    formData.append('cover_letter', cover_letter);
    formData.append('resume', resume);
    formData.append('job_profile', inputRef.current.value);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config)
    .then((response) => {
      // navigate('/thankyou');
      toast('Applied Successfully');
      setTimeout(function() {
      window.location.reload();
      }, 3000);

      // console.log(response.data);
    })
    .catch((response) => {
      				console.log(response.message);
            });
	    }
const onSubmit = (data) =>{
    saveData();
}
  if (!getCareer) return null;

  return (
    <>
      <ToastContainer />
      <section
        className="isgf-breadcum isgf_career_at_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/career-at-isgf/career-banner.jpg"
          })`,
        }}
      >
        <div className="container">

              <div className="isgf-breadcum-box">
                <h1>Careers at ISGF</h1>
                <p>
                  Home {">"} ISGF {">"} Careers {">"} Careers at ISGF
                </p>
              </div>
        </div>
      </section>
      <section className="career_at_isgf">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <div className="row">
                <div className="col-md-12">
                  <div className="benefits_membership">
                    <div className="heading mb-3">
                      <h2>Careers at ISGF</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p>
                    Below is the current list of openings at India Smart Grid
                    Forum (ISGF). To apply for a suitable position, please click
                    on "Apply Now" button or you may also send us your resume on
                    email id, <a href="mailto:careers@indiasmartgrid.org"> careers@indiasmartgrid.org</a> with
                    subject line as "Your Full Name | Position Name | Years of
                    Experience | Qualification".
                  </p>

                  <p>
                    We will get back to you in case your profile matches our
                    open opportunity.
                  </p>
                </div>
              </div>
              <div className="row g-4">
                {getCareer &&
                  getCareer.map((data, index) => (
                    <div className="col-md-6">
                      <div className="career-box">
                        <div className="title">{data.job_title} </div>
                        <div className="job-body">
                        <div className="about-job mb-3">
                          <b><i className="fa fa-graduation-cap"></i>Qualification:</b>
                          {data.qualification}
                        </div>
                        <div className="location">
                          <b><i className="fa fa-map-marker"></i> Location:</b> {data.location}
                        </div>
                        </div>
                        <div className="action">
                        <div className="btn btn-green" data-bs-toggle="modal" data-bs-target="#exampleModal">Apply Now </div>
                              <div
                                className="btn btn-orange"
                                data-bs-toggle="modal"
                                data-bs-target={`#collapseOne${index}`}
                              >
                                View More
                              </div>
                        </div>
                      </div>
                      <div
                        className="modal fade"
                        id={`collapseOne${index}`}
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-body">
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                              <div className="career_at_model">
                                <h3 className="mb-3">{data.job_title}</h3>
                                {((data.qualification != null))  ? <>
                                <p>
                                  <b>Qualification:</b> {data.qualification}
                                </p>
                                </>: <> </>}
                                {((data.vacancies != null))  ? <>
                                <p>
                                  <b>Vacancies:</b> {data.vacancies}
                                </p>
                                </>: <> </>}
                                {((data.hiring != null))  ? <>
                                <p>
                                  <b>Hiring:</b> {data.hiring}
                                </p>
                                </>: <> </>}
                                {((data.experience != null))  ? <>
                                <p>
                                  <b>Experience:</b> {data.experience}
                                </p>
                                </>: <> </>}
                                {((data.position != null))  ? <>
                                <p>
                                  <b>Position Level:</b> {data.position}
                                </p>
                                </>: <> </>}
                                {((data.location != null))  ? <>
                                <p>
                                  <b>Location:</b> {data.location}
                                </p>
                                </>: <> </>}
                                {((data.functional_area != null))  ? <>
                                <p>
                                  <b>Functional Area:</b>
                                  {data.functional_area}
                                </p>
                                </>: <> </>}
                                {((data.salary != null))  ? <>
                                <p>
                                  <b>Salary:</b>
                                  {data.salary}
                                </p>
                                </>: <> </>}
                                {((data.age != null))  ? <>
                                <p>
                                  <b>Age:</b>
                                  {data.age}
                                </p>
                                </>: <> </>}
                                {((data.apply_at != null))  ? <>
                                <p>
                                  <b>Apply At:</b>
                                  {parse(`${data.apply_at}`)}
                                </p>
                                </>: <> </>}
                                {((data.internship_duration != null))  ? <>
                                <p>
                                  <b>Internship Duration:</b>
                                  {data.internship_duration}
                                </p>
                                </>: <> </>}
                                {((data.responsibilities != null))  ? <>
                                <p>
                                  <b>Core/ Key Responsibilities & Duties:</b>{" "}
                                  {parse(`${data.responsibilities}`)}
                                </p>
                                </>: <> </>}
                                {((data.competencies != null))  ? <>
                                <p>
                                  <b>Key Competencies:</b>{" "}
                                </p>
                                  <p>{parse(`${data.competencies}`)}</p>
                                </>: <> </>}
                                {((data.last_date_apply != null))  ? <>
                                <p>
                                  <b>Last date to apply:</b>
                                  {data.last_date_apply}{" "}
                                </p>
                                </>: <> </>}
                              <a href="#" className="btn btn-green mt-3" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#exampleModal">Apply Now</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


						<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog">
              <div className="modal-content">

              <div className="modal-body">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="row">
                  <div className="col-md-12">
                    <div className="contact-us-gray career-form">
                      <h5 className="mb-3">Apply Form</h5>

                      <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' autocomplete="off">
                      <div className="row">
                        <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                          <input type="text" className="form-control" placeholder="Name*" value={name}   onChange={(e) => setName(e.target.value)} required/>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                          <input type="email" name="email" className="form-control" placeholder="Email*" value={email}   onChange={(e) => setEmail(e.target.value)} required/>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                          <input type="hidden"ref={inputRef} value={data.job_title}/>

                          <input type="text" name="primary_number" className="form-control" placeholder="Primary number*" value={primary_number}   onChange={(e) => checkInput(e)} required/>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                          <input type="text" name="secondary_number" className="form-control" placeholder="Alternate Number*" value={secondary_number}  onChange={(e) => checkInput1(e)} required/>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                             <div className="row">
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <select className="form-select" name="year" aria-label="Default select example"  value={year}    onChange={(e) => setYear(e.target.value)} required>
                                  <option selected>Year</option>
                                  <option value="One">One</option>
                                  <option value="Two">Two</option>
                                  <option value="Three">Three</option>
                                  <option value="Four">Four</option>
                                  <option value="Five">Five</option>
                                  <option value="Six">Six</option>
                                  <option value="Seven">Seven</option>
                                  <option value="Eight">Eight</option>
                                  <option value="Nine">Nine</option>
                                  <option value="Ten">Ten</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <select className="form-select" name="month" aria-label="Default select example" value={month}   onChange={(e) => setMonth(e.target.value)} required>
                                  <option selected>Month</option>
                                  <option value="One">One</option>
                                  <option value="Two">Two</option>
                                  <option value="Three">Three</option>
                                  <option value="Four">Four</option>
                                  <option value="Five">Five</option>
                                  <option value="Six">Six</option>
                                  <option value="Seven">Seven</option>
                                  <option value="Eight">Eight</option>
                                  <option value="Nine">Nine</option>
                                  <option value="Ten">Ten</option>
                                </select>
                              </div>
                            </div>
                           </div>


                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label className="form-label" for="customFile">Upload Resume (PDF/DOCX)</label>
                            <input type="file" name="resume" className="form-control" id="customFile"    onChange={(e) => setResume(e.target.files[0])} required/>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                          <label className="form-label"> Cover Letter (Type)</label>
                          <textarea name="cover_letter_text" className="form-control cover-latter"  value={cover_letter_text}  rows="2" onChange={(e) => setCoverLetter(e.target.value)} placeholder="Your message"  > </textarea>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                          <label className="form-label" for="customFile">Upload Cover Latter (PDF/DOCX)</label>
                            <input type="file" name="cover_letter" className="form-control" id="customFile"   onChange={(e) => setCoverLetterFile(e.target.files[0])} />
                          </div>
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
              </div>

              </div>
            </div>
						</div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CareerAtIsgf;
