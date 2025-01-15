import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
import Moment from 'react-moment';
import { NavLink, Link } from 'react-router-dom';
const GLOBAL = require('../../commonConstants.js');

const url = GLOBAL.BASE_URL+"termConditions";
const assetUrl = GLOBAL.assetUrl;
function TermsConditions() {
	const [getTerms, setTerms] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
    setTerms(response.data);
     });
   },[]);
  if (!getTerms) return null;
  return (
    <>
<section className="isgf-breadcum disclaimer-breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/footer/disclaimer-banner.jpg"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>Terms and Conditions</h1>
			<p>Home {'>'} Terms and Conditions</p>
		</div>
	</div>
</section>
<section className="sec-padd">
	<div className="container">
		<div className="row">
			<div className="col-lg-8 ">
				<div className="heading mb-3">
					<h2>Website and e-Learning Terms and Conditions</h2>
				</div>
         {(getTerms) && getTerms.map((data,index)=>(
					<>{parse(`${data.description}`)}</>
          ))}
				
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

export default TermsConditions