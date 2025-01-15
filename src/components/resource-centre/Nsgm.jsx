import React from 'react';
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
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>National Smart Grid Mission</h1>
			<p>Home {'>'} Resource Centre {'>'}  National Smart Grid Mission</p>
		</div>
	</div>
</section>
<section className="nsgm">
	<div className="container">
		<div className="heading mb-3">
			<h2>National Smart Grid Mission</h2>
		</div>
		<div className="row">
			<div className="col-md-12">
         		{(getNSGM) && getNSGM.map((data,index)=>(
				<><p>{parse(`${data.title}`)}</p>
						<div className="nsgm-color-box">
							<p className="title">Objective of NSGM</p>
							<p className='obj-text'>{parse(`${data.objective_of_nsgm}`)}</p>
						</div>
							  <img src={assetUrl + "/public/forum_img/" + data.image} className="img-fluid"/>
							  {parse(`${data.organisational_structure}`)}
							 
						<a target="_blank" href="http://www.nsgm.gov.in/" className="btn btn-blue">Click Here</a>
				</>
          	))}

			</div>
	</div>
    </div>
</section>


    </>
  )
}

export default Nsgm