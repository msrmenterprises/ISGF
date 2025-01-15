import React, { useEffect } from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
import { NavLink, Link } from "react-router-dom";
const GLOBAL = require('../../commonConstants.js');

const url = GLOBAL.BASE_URL+"functionalExpertise";
const assetUrl = GLOBAL.assetUrl;
function FunctionalExpertise() {
	const [getFunction, setFunction] = React.useState(null);
    React.useEffect(() => {
    axios.get(url).then((response) => {
    setFunction(response.data);
     });
   },[]);
    // console.log(getFunction);
useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
<section className="isgf-breadcum functional_expertise_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/functional-expertise/functional-expertise-banner.jpg"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
					<h1>Functional Expertise</h1>
					<p>Home {'>'} Functional Expertise</p>
				</div>
	</div>
</section>
<section className="functional-expertise">
	<div className="container">
		<div className="row">
			<div className="col-lg-8">
				<div className="heading mb-3">
					<h2>Functional Expertise</h2>
				</div>

				<div className="isgf_accordion">
				            		 <div className="accordion" id="accordionExample">

                      {(getFunction) && getFunction.map((data,index)=>(
										  <div className="accordion-item">
										    <h2 className="accordion-header bg-green" id="heading1">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="false" aria-controls={`collapseOne${index}`}>
										       <img src={assetUrl + "/public/functional-expertise/" + data.images} className="logo-icon"/> {data.title}
										      </button>
										    </h2>
										   <div id={`collapseOne${index}`} className={`accordion-collapse collapse`} aria-expanded="false" aria-labelledby="heading1" data-bs-parent="#accordionExample">
										      <div className="accordion-body p-3 table-img-expand">
										      	{parse(`${data.descriptions}`)}</div>
										    </div>
										  </div>
                      ))}

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

export default FunctionalExpertise