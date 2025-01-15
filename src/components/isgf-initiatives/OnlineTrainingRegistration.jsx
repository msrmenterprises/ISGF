import React from 'react';
import OnlineTraningSidebar from '../reusable/OnlineTraningSidebar';
import Cookies from 'universal-cookie';
import axios from "axios";
import parse from 'html-react-parser';
import { NavLink, Link } from 'react-router-dom';
import Media from '../reusable/Media';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const GLOBAL = require('../../commonConstants.js');

const assetUrl = GLOBAL.assetUrl;
const methodology = GLOBAL.BASE_URL+"methodology";

function OnlineTrainingRegistration() {
	  const cookies = new Cookies();
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const {register,handleSubmit,formState:{errors}} = useForm();

    function saveData() {

    axios({
      method: "post",
      url: GLOBAL.BASE_URL+"login",
      data: { email,password },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },

    })
      .then(function (response) {
        console.log(response.data.status);
        if(response.data.status === 'success'){
        	 cookies.set('data', email , { path: '/' });
	        // toast('Login Successfully');
          return navigate("/course");

        }
        // setSuccess(response);
        // setEmail("");
      })
      .catch(function (response) {
        //handle error
	        toast('Invalid Creadendtials');
        // console.log(response);
      });

  }
  const onSubmit = (data) => {
    saveData();
  }
	 const [getMethodology, setMethodology] = React.useState(null);
  React.useEffect(() => {
    axios.get(methodology).then((response) => {
    setMethodology(response.data);
     });
   },[]);
  if (!getMethodology) return null;
  // console.log(getMethodology);
  return (
    <>
<ToastContainer />
<section className="isgf-breadcum online_traning_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/online-training-registration/online-traning-bg.jpg"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>ISGF Trainings</h1>
			<p>Home {'>'} ISGF Initiatives {'>'}  ISGF Trainings</p>
		</div>
	</div>
</section>
<section className="smart_grid_handbook online-training-registration">
	<div className="container">
		<div className="row g-4 justify-content-between">
       {(getMethodology) && getMethodology.map((data,index)=>(
			<div className="col-lg-8 ">
				<div className="heading mb-3">
					<h2>Training And Capacity Building</h2>
				</div>
				<p> {parse(`${data.training_capacity}`)}</p>
				<div className="row training-img">
					<div className="col-md-4">
						<div>
						<h5 className="orn">Onsite Training</h5>

              {parse(`${data.onsite_training}`)}
              </div>
					</div>
					<div className="col-md-4">
						<div>
							<h5 className="bl">Live Online Training</h5>
							{parse(`${data.live_training}`)}
						</div>
					</div>
					<div className="col-md-4">
						<div>
							<h5 className="green">Recorded Online Training</h5>
							{parse(`${data.recorded_training}`)}

							</div>
					</div>
				</div>
				<div className="row ">
					<div className="col-md-12">
						<div className="participants">
							<p className="black">Participants will be awarded Certificate of Participation or Certificate of Merit upon clearing the examination.</p>
							<p className="blue">For more details about on-going and upcoming training programs by ISGF, please click on one of the training modes mentioned below</p>
						</div>
					</div>
				</div>
				<div className="row buttan">
					<div className="col-md-12 d-flex justify-content-center mb-3">
						<NavLink exact to="/online-trainings-program" className="btn btn-green"> <img src="images/online-training-registration/online-icon.png"/> Online Trainings</NavLink>
						<NavLink exact  to="/onsite-trainings-program" className="btn btn-orange"> <img src="images/online-training-registration/onsite-1.png"/> Onsite Trainings</NavLink>
					</div>
				</div>
			</div>
        ))}

		    <div className="col-lg-3">
				<div className="online-training-registration-sidebar">
                <div className="online-form" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/online-training-registration/login-bg.png"})`,}}>
                  <h5 className="hh5">Registered Participants Login</h5>
                  <div className="online-inner">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                      {/*<div className="mb-3">
                        <label>Select Training Programs</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>*/}
                      <div className="mb-3">
                        <label>Username</label>
                        <input value={email}  type="email" name="email" className="form-control" placeholder="Email ID" {...register('email',{required:"Email is Required",pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
})} onChange={(e) => setEmail(e.target.value)}/>
						{errors.email && (<small className="text-danger">Invalid Email Address*</small>)}

                      </div>
                      <div className="mb-3">
                        <label>Password</label>
                        <input value={password}  type="password" name="password" className="form-control" placeholder="Password" {...register('password',{required:"Password is Required"})} onChange={(e) => setPassword(e.target.value)}/>
						{errors.password && (<small className="text-danger">Invalid Password*</small>)}

                      </div>
                      <button type="submit" className="btn btn-orange">
                        login
                      </button>
                    </form>
                  </div>
                </div>
                <div className="online-sidebar-registraion mt-3">
                  <div className="icon-box" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/online-training-registration/green-bg.png"})`,}}>
                    <img src="images/online-training-registration/vactor-icon.png" />
                  </div>
                 <NavLink exact to="/registration" style={{textDecoration: `none`,}} >
                  <h5>New Participants Registration</h5>
                  </NavLink>
                </div>
              </div>
		    </div>
	</div>
    </div>
</section>


    </>
  )
}

export default OnlineTrainingRegistration