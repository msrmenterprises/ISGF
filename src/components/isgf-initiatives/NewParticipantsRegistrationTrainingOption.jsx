import React from 'react'
import Media from '../reusable/Media';
import axios from "axios";
import Moment from 'react-moment';
import parse from 'html-react-parser';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
const GLOBAL = require('../../commonConstants.js');
const url = GLOBAL.BASE_URL+"getparticipant/";

const assetUrl = GLOBAL.assetUrl;
const course = GLOBAL.BASE_URL+"purchase-course";

function NewParticipantsRegistrationTrainingOption() {
  const cookies = new Cookies();
  var myArray =  cookies.get('data');
  // console.log(myArray);
  const u_email = myArray.email ? myArray.email : '';
    const [getUser, setUser] = React.useState(null);
    React.useEffect(() => {
    axios.get(url+u_email).then((response) => {
    setUser(response.data);
     });
   },[]);
    
  const [select, setSelect] = React.useState({cheked_value: []});
  const navigate = useNavigate();
  const [getCourse, setCourse] = React.useState(null);
  const {register,handleSubmit,formState:{errors}} = useForm();

  const u_selected_course = (getUser != null) && (getUser != '') ? getUser.selected_course : '';
      // setSelect({
      //   cheked_value: [u_selected_course]
      // });
  var usd = (u_selected_course != null) && (u_selected_course != undefined) ? u_selected_course.split(',') : '' ;
 
  // console.log(my_selected_course);
  const handleChange = (e) => {

    const { value, checked } = e.target;
    const { cheked_value } = select;
     
    if (checked) {
      setSelect({
        cheked_value: [...cheked_value, value],
      });
    // console.log(cheked_value);

    }
    else {
      setSelect({
        cheked_value: cheked_value.filter((e) => e !== value),
      });
    }
  };

          const onSubmit = (data) =>{
            const newchecked  =select.cheked_value.filter(x => !usd.includes(x));
            var myArray1 = {
                selected_course: newchecked,
            };
            const admin={...myArray,...myArray1};
            cookies.set('data', admin , { path: '/' });
            return navigate("/order-summary");
         
}


  React.useEffect(() => {
    axios.get(course).then((response) => {
    setCourse(response.data);
     });
   },[]);
  if (!getCourse) return null;
  if (!myArray) return navigate("/");
  if (!getUser) return null;
 

  // console.log(cookies.get('data'));
  return (
    <>
<section className="isgf-breadcum trainings_participants_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/trainings-participants/trainings-participants-banner.jpg"})`,}}>
	<div className="container">
		<div className="isgf-breadcum-box">
					<h1>ISGF Trainings Participants Registration</h1>
					<p>Home  {'>'} ISGF Initiatives {'>'}  ISGF Trainings  New Participants Registration</p>
				</div>
	</div>
</section>
<form action="" onSubmit={handleSubmit(onSubmit)}>
<section className="smart_grid_handbook trainings-participants ">
	<div className="container mt-5">
		<div className="row justify-content-center">
			<div className="col-md-12">
				<div className="trainings-participants-form custom-shadow mb-4" >
					<h5>The available Training options by ISGF</h5>
					<div className="table-responsive">
					<table className="table mt-4 table-bordered table-rersponsive">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Date</th>
      <th scope="col">Model (Online/Offline)</th>
      <th scope="col">Program</th>
      <th scope="col">Fee</th>
      <th scope="col">Select (Min 1 or More)</th>
    </tr>
  </thead>
  <tbody>
       {(getCourse) && getCourse.map((data,index)=>(
    <tr>
      <th scope="row">{index+1}</th>
      <td> 
          {data.date} 
      </td>
      <td>{data.model}</td>
      <td>{data.program}</td>

       <td>{data.fee}* + GST</td>
       <td className="text-center"> 
       {(((usd.includes((data.id).toString())) === true))  ? <>
        <input 
          className="form-check-input"
          type="checkbox"
          name="cheked_value"
          onChange={handleChange}
          id="checkboxNoLabel"
          value={data.id}
          checked
          disabled
        /></>: <>
        <input 
          className="form-check-input"
          type="checkbox"
          name="cheked_value"
          onChange={handleChange}
          id="checkboxNoLabel"
          value={data.id}
        />
         </>}
       </td>
    </tr>
      ))}
  </tbody>
</table>
</div>
<p>* All the above mentioned fee is valid w.e.f 15 May 2021</p>

<div className="text-center mt-3 mb-3">
{(((select.cheked_value).length > 0 ))  ? <>
	<button type="submit" className="btn btn-blue upppr">Save and Continue</button>
 </>: <> </>}
</div>
				</div>
			</div>
		    
	</div>
  </div>
</section>
</form>


    </>
  )
}

export default NewParticipantsRegistrationTrainingOption