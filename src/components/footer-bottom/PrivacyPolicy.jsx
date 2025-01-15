import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
import Moment from 'react-moment';
import { NavLink, Link } from 'react-router-dom';
const GLOBAL = require('../../commonConstants.js');

const url = GLOBAL.BASE_URL+"privacyPolicys";
const assetUrl = GLOBAL.assetUrl;
function PrivacyPolicy() {
	const [getPrivacy, setPrivacy] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
    setPrivacy(response.data);
     });
   },[]);
  if (!getPrivacy) return null;
  return (
    <>
<section className="isgf-breadcum privacy-policy-breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/footer/privacy-policy-banner.jpg"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>Privacy Policy</h1>
			<p>Home {'>'} Privacy Policy</p>
		</div>
	</div>
</section>
<section className='sec-padd'>
	<div className="container">
		<div className="row">
			<div className="col-lg-8">
				<div className="heading mb-3">
					<h2>Privacy Policy</h2>
				</div>
				{(getPrivacy) && getPrivacy.map((data,index)=>(	
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

export default PrivacyPolicy