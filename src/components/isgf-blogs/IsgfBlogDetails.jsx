import React from 'react'
import Media from '../reusable/Media';
import axios from "axios";
import parse from 'html-react-parser';
import { NavLink, Link } from 'react-router-dom';
import Moment from 'react-moment';
import {useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FacebookShareButton,LinkedinShareButton,TwitterShareButton} from "react-share";
const GLOBAL = require('../../commonConstants.js');
const url = GLOBAL.BASE_URL+"blogs/";
const assetUrl = GLOBAL.assetUrl;
const url1 = GLOBAL.BASE_URL+"contactUS";

function IsgfBlogDetails() {
  const [getContactData, setContactData] = React.useState(null);
	const [getBlogDeatils, setBlogDeatils] = React.useState(null);
	const slug = useParams();
  const main_slug = slug.id;
	const new_url = url+main_slug;
	const new_url1 = window.location.href;
  React.useEffect(() => {
    axios.get(new_url).then((response) => {
    setBlogDeatils(response.data);
     });
    axios.get(url1).then((response) => {
    setContactData(response.data);
     });
   },[new_url]);

  // const history = useHistory();
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const [fname, setFName] = React.useState("");
    const [lname, setLName] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [cover_letter_text, setCoverLetter] = React.useState("");

    const {register,handleSubmit,formState:{errors}} = useForm();
function saveData() {

	 const url = GLOBAL.BASE_URL+'blog_form';
    const formData = new FormData();
    formData.append('fname', fname);
    formData.append('lname', lname);
    formData.append('company_name', company);
    formData.append('message', cover_letter_text);
    formData.append('blog_id', inputRef.current.value);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config)
    .then((response) => {
      // navigate('/thankyou');
      toast('Commented  Successfully');
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
  // console.log(new_url);
  if (!setBlogDeatils) return null;
  if (!getContactData) return null;
  return (
    <>
      <ToastContainer />

<section className="isgf-breadcum blogs_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/blogs/blogs-banner.jpg"
                  })`,
                }}>
	<div className="container">

				<div className="isgf-breadcum-box">
					<h1>ISGF Smart Grid Blog</h1>
					<p>Home {'>'} Blog  {'>'} {((getBlogDeatils != null))  ? <> {getBlogDeatils[0].heading} </>: <> </>} </p>
				</div>

	</div>
</section>
<section className="blogs">
	<div className="container">
     {(getBlogDeatils) && getBlogDeatils.map((data,index)=>(
			<>
				<div className="benefits_membership">
					<div className="heading mb-3">
						<h2>{data.heading}</h2>
					</div>
				</div>
				<div className="blog-detail">
					<div className='pic'>
						<img src={assetUrl + "/public/blogs/" + data.images} alt={data.heading} width="100%"/>
						<p className="green-box"> {data.title} </p>
					</div>
					<div className='content'>


						<p className="date mt-2">
							<i className="fa fa-calendar"></i> {((data.add_date != null))  ? <>
									<Moment format="DD MMMM YYYY">
                      {data.add_date}
                  </Moment>
                   </>: <> <p></p> </>}
						</p>
						<p><i className="fa fa-user"></i> {data.created_by}</p>
                		{parse(`${data.descriptions}`)}
                		<a target="_blank" href={data.link} className="btn btn-blue px-3">View Attachment</a>
					</div>
				</div>
			</>

   	 ))}
	  <div className="col-md-12">
						<div className="blog-tagbox mt-3">
							<div className="row justify-content-between">
								<div className="col-md-8 mt-3">
									<b>Tags</b> : Renewable Energy, Solar, Insights, Systems, Battery, Research, Energy
								</div>
								{((getBlogDeatils != null)) ? <>
									<div className="col-md-4 text-end">
										<b>Share This :
											{/* <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${new_url}`} className="fa fa-facebook"></a> */}
											<FacebookShareButton  className="fa fa-facebook"
											url ={new_url1}
											source ="ISGF"
											title={getBlogDeatils[0].heading}
											summary={parse(`${getBlogDeatils[0].descriptions}`)}
											/>
											<LinkedinShareButton className="fa fa-linkedin"
												url ={new_url1}
												source ="ISGF"
												title={getBlogDeatils[0].heading}
												summary={parse(`${getBlogDeatils[0].descriptions}`)}
											/>
											<TwitterShareButton className="fa fa-linkedin"
											url ={new_url1}
											source ="ISGF"
											title={getBlogDeatils[0].heading}
											summary={parse(`${getBlogDeatils[0].descriptions}`)}
											/>
 											{/* <a target="_blank" href={getContactData[0].linkedin} className="fa fa-linkedin"></a>  */}
											{/* <a target="_blank" href={getContactData[0].twitter} className="fa fa-twitter"></a> */}
										</b>
									</div>
								</> : <> </>}
							</div>
						</div>
					</div>
		  <div className="row single-blog">
					<div className="col-md-12">
						<div className="blog-tagbox mt-3">
						<p>Give A Comment</p>
            <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' autocomplete="off">
							<div className="row">
							  <div className="col">
                  <input type="text" className="form-control" placeholder="First name*" value={fname}   onChange={(e) => setFName(e.target.value)} required/>
							  </div>
							  <div className="col">
                  <input type="text" className="form-control" placeholder="Last name*" value={lname}   onChange={(e) => setLName(e.target.value)} required/>
                  <input type="hidden"ref={inputRef} value=
                  {((getBlogDeatils != null))  ? getBlogDeatils[0].id : ''}/>
							  </div>
							</div>
							<div className="row mt-2">
							  <div className="col">
                  <input type="text" name="email" className="form-control" placeholder="Company Namee*" value={company}   onChange={(e) => setCompany(e.target.value)} required/>
							  </div>

							</div>
							<div className="row mt-2">
							  <div className="col">
                  <textarea name="cover_letter_text" className="form-control cover-latter p-2"  value={cover_letter_text}  rows="2" onChange={(e) => setCoverLetter(e.target.value)} placeholder="Your message"  > </textarea>
							  </div>
							</div>
							<div className="mb-3 form-check">
							    <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
							    <label className="form-check-label" for="exampleCheck1">Save my name, email, and website in this browser for the next time I comment.</label>
							 </div>
							 <div className="row mt-2">
							  <div className="col">
							  	<button type="submit" className="btn btn-green">Comment</button>
							  </div>
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

export default IsgfBlogDetails