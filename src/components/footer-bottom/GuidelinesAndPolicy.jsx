import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
import Moment from 'react-moment';
import { NavLink, Link } from 'react-router-dom';
const GLOBAL = require('../../commonConstants.js');

const url = GLOBAL.BASE_URL+"GuidelineAndPolicys";
const assetUrl = GLOBAL.assetUrl;
function GuidelinesAndPolicy() {
	const [getGuidelines, setGuidelines] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
    setGuidelines(response.data);
     });
   },[]);
  if (!getGuidelines) return null;
  return (
    <>
<section className="isgf-breadcum guidelines-policy-breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/footer/guidelines-and-policy.jpg"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>Guidelines & Policy</h1>
			<p>Home {'>'} Guidelines & Policy</p>
		</div>
	</div>
</section>
<section className="sec-padd">
	<div className="container">
		<div className="row">
			<div className="col-lg-8">
				<div className="heading mb-3">
					<h2>Guidelines & Policy</h2>
				</div>
				
				{(getGuidelines) && getGuidelines.map((data,index)=>(
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

export default GuidelinesAndPolicy