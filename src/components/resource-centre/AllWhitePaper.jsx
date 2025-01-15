import React from 'react';
import Media from "../reusable/Media";
import axios from "axios";
import Moment from 'react-moment';
import { useForm } from 'react-hook-form';
import parse from 'html-react-parser';
import {useParams,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const whitepapers = GLOBAL.BASE_URL+"white-paper-report";

function WhitePapersAndTechnicalReports() {
const slug = useParams();
 // console.log(slug.id);
 
 const url = whitepapers+"/"+slug.id;

 // console.log(url)
  const [getValue, setValue] = React.useState(null);
  const [getWhitePapers, setWhitePapers] = React.useState(null);
  const new_url = whitepapers+'?id='+getValue;


    const navigate = useNavigate();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [designation, setDesignation] = React.useState("");
    const [checkbox, setCheckbox] = React.useState("");
    const [message, setMessage] = React.useState("");
    

   

    const {register,handleSubmit,formState:{errors}} = useForm();
    function saveData() {

        axios({
            method: "post",
            url: GLOBAL.BASE_URL+"white-paper-tech-report-form",
            data: { name,company, email, phone,designation },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

        })
            .then(function (response) {
                //handle success
                toast.success('🦄 Thanks for visiting!', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					});
                // document.getElementById("whiteForm").reset();
                // console.log(response);
                navigate('/thankyou');
                // history.push("thankyou");
            })
            .catch(function (response) {
                // toast("Thanks for visiting !");
 
            });

    }
    const onSubmit = (data) =>{
	    saveData();
	} 
	
  	React.useEffect(() => {

    axios.get(url).then((response) => {
    setWhitePapers(response.data);
     });
   },[]);
  if (!getWhitePapers) return null;
  
  // console.log(getWhitePapers);
  return (
    <>
        <section className="isgf-breadcum white_paper_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/white-papers/white-paper-banner.jpg"
                  })`,
                }}>
            <div className="container">
               <div className="isgf-breadcum-box capitalize">
					<h1>{((slug.id).charAt(0).toUpperCase() + (slug.id).slice(1)).replace(/-/g, " ")}</h1>
					<p className="capitalize">Home {'>'} Resource Centre {'>'} {((slug.id).charAt(0).toUpperCase() + (slug.id).slice(1)).replace(/-/g, " ")}</p>
				</div>
            </div>
        </section>
        <section className="white-paper">
			<div className="container">
			{((getWhitePapers.length === 0 ))  ? <>
		          <div className="container">
		                No Data Found
		          </div>      
		         </>: 
		          <>
				<div className="row g-4">

					{(getWhitePapers) && getWhitePapers.map((data,index)=>(
							    		<div className="col-sm-6 col-lg-3">
                              <div className="technical-paper">
                                <div className="top">
                                  <Moment className="time" format="DD MMMM YYYY">
                                    {data.added_date}
                                  </Moment>
                                  <div className="title">{data.title}</div>
                                </div>
                                <div className="image">
                                  <img alt="pic"
                                    src={assetUrl + "/public/banner_img/" + data.image}/>
                                  </div>
                                  <div className="action">
                                    <div
                                      className="btn btn-green mb-2"
                                      data-bs-toggle="modal"
                                      data-bs-target={`#collapseOne${index}`}
                                    >
                                      Report Abstract
                                    </div>
                                    <div
                                      className="btn btn-orange"
                                      data-bs-toggle="modal"
                                      data-bs-target={`#collapseTwo${index}`}
                                    >
                                      View and Download Report
                                    </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <div
                                    className="modal fade white-paper-model"
                                    id={`collapseOne${index}`}
                                    tabindex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div className="modal-dialog">
                                      <div className="modal-content">
                                        <div className="modal-body">
                                          <a
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          ></a>
                                          <div className="white-paper-right-item">
                                            <h3>Report Abstract</h3>
                                            <div className="white-paper-inner-box">
                                              <div className="model-left">
                                                <img
                                                  src={
                                                    assetUrl +
                                                    "/public/banner_img/" +
                                                    data.image
                                                  }
                                                  className="img-fluid text-center mb-3"
                                                />
                                              </div>
                                              <div className="model-right">
                                                <p className="p-gray">
                                                  <Moment format="DD MMMM YYYY">
                                                    {data.added_date}
                                                  </Moment>
                                                </p>
                                                <p className="p-blue mb-3">
                                                  {data.title}
                                                </p>
                                              </div>
                                            </div>
                                            {parse(`${data.description}`)}

                                            <a
                                              href="grid-modernization"
                                              className="btn btn-gray mb-2 inner-btn"
                                            >
                                              Grid Modernization
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="modal fade white-paper-model"
                                    id={`collapseTwo${index}`}
                                    tabindex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div className="modal-dialog">
                                      <div className="modal-content">
                                        <div className="modal-body">
                                          <a
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          ></a>
                                          <div className="white-paper-right-item">
                                            <h3>Fill up a form</h3>
                                            <form
                                              id="whiteForm"
                                              action=""
                                              onSubmit={handleSubmit(onSubmit)}
                                            >
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                                value={name}
                                                onChange={(e) =>
                                                  setName(e.target.value)
                                                }
                                                required
                                              />
                                              <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email Address"
                                                onChange={(e) =>
                                                  setEmail(e.target.value)
                                                }
                                                required
                                              />{" "}
                                              {errors.email && (
                                                <small className="text-danger">
                                                  Invalid Email Address*
                                                </small>
                                              )}
                                              <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Mobile Number"
                                                onChange={(e) =>
                                                  setPhone(e.target.value)
                                                }
                                                required
                                              />
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Company"
                                                onChange={(e) =>
                                                  setCompany(e.target.value)
                                                }
                                                required
                                              />
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Designation"
                                                onChange={(e) =>
                                                  setDesignation(e.target.value)
                                                }
                                                required
                                              />
                                              <div className="form-check">
                                                <input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  id="checkRemember"
                                                  onChange={(e) =>
                                                    setCheckbox(e.target.value)
                                                  }
                                                  required
                                                />
                                                <label
                                                  className="form-check-label"
                                                  for="checkRemember"
                                                >
                                                  I agree to receive email
                                                  communication from ISGF and
                                                  its monthly newsletter
                                                </label>
                                              </div>
                                              <button
                                                type="submit"
                                                className="btn bg-green mt-3"
                                              >
                                                Submit
                                              </button>
                                              <ToastContainer />
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
					}
				</div>
				</>
}
		    </div>
		</section>
    </>
  )
}

export default WhitePapersAndTechnicalReports