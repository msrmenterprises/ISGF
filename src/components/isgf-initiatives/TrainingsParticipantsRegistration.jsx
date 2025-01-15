import React from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function TrainingsParticipantsRegistration() {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const {register,handleSubmit,formState:{errors}} = useForm();
    const getmail = (cookies.get('data'));
		const onSubmit = (data) =>{
			var myArray = {email: email};
			cookies.set('data', myArray , { path: '/' });
			return navigate("/participants-registration");

}
  return (
    <>
<section className="isgf-breadcum trainings_participants_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/trainings-participants/trainings-participants-banner.jpg"
                  })`,
                }}>
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="isgf-breadcum-box">
					<h1>ISGF Trainings Participants Registration</h1>
					<p>Home  {'>'} ISGF Initiatives {'>'} ISGF Trainings New Participants Registration</p>
				</div>
				<div className="isgf_breadcum_media">
					<a href="#" className="fa fa-facebook"></a>
					<a href="#" className="fa fa-twitter"></a>
					<a href="#" className="fa fa-linkedin"></a>
					<a href="#" className="fa fa-youtube"></a>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="smart_grid_handbook trainings-participants">
	<div className="container-fluid mt-5">
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="trainings-participants-form">
					<h5>New Participants Registration</h5>
					<form action="" onSubmit={handleSubmit(onSubmit)}>
						<label className="mb-2">Enter your email id and continue <span className='text-danger'>*</span></label>
						<input value={email}  type="email" name="" className="form-control" placeholder="Email ID" {...register('email',{required:"Email is Required",pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
})} onChange={(e) => setEmail(e.target.value)}/>
						{errors.email && (<small className="text-danger">Invalid Email Address*</small>)}
						<p className="mt-5"><b>Please note:</b> Due to low internet connectivity or any other reason if you are not able to finish your registration and payment, kindly come back and enter same email id to continue</p>
						<div className="col-md-12 mb-2 text-center">
                <button type="submit" className="btn btn-primary">Save and Continue</button>
            </div>
					</form>
				</div>
			</div>

	</div>
    </div>
</section>


    </>
  )
}

export default TrainingsParticipantsRegistration