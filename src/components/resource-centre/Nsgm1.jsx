import React from 'react';
import Media from '../reusable/Media';
import axios from "axios";
import parse from 'html-react-parser';
import Moment from 'react-moment';
import { NavLink, Link } from 'react-router-dom';
const GLOBAL = require('../../commonConstants.js');
const url = GLOBAL.BASE_URL+"nsgm";
const assetUrl = GLOBAL.assetUrl;
function Nsgm() {
	 const [getNSGM, setNSGM] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
    setNSGM(response.data);
     });
   },[]);
 
  if (!setNSGM) return null;
  return (
    <>
 
<section className="isgf-breadcum nsgm_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/nsgm/nsgm-banner.jpg"
                  })`,
                }}>
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-12">
				<div className="isgf-breadcum-box">
					<h1>National Smart Grid Mission</h1>
					<p>Home {'>'} Resource Centre {'>'}  National Smart Grid Mission</p>
				</div>
				<Media/>	
			</div>
		</div>
	</div>
</section>
<section className="nsgm">
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-12">
         		{(getNSGM) && getNSGM.map((data,index)=>(
				<div className="row">
					<div className="col-md-12">
						<div className="benefits_membership">
							<div className="heading mb-3">
			                	<h2>National Smart Grid Mission</h2>
			            	</div>
				            
						</div>
						{parse(`${data.title}`)}
						<div className="nsgm-color-box">
							<p className="title">Objective of NSGM</p>
							  {parse(`${data.objective_of_nsgm}`)}
							  </div>
						<img src={assetUrl + "/public/forum_img/" + data.image} className="img-fluid"/>
							  {parse(`${data.organisational_structure}`)}
							 
						<a href="javascript:void(0)" className="btn btn-blue">Click Here</a>
					</div>
				</div>
          	))}

			</div>
	</div>
    </div>
</section>


    </>
  )
}

export default Nsgm