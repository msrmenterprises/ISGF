import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const usaForum = GLOBAL.BASE_URL+"usaForum";
function UamForum() {
	const [getUSA, setUSA] = React.useState(null);
  React.useEffect(() => {
    axios.get(usaForum).then((response) => {
    setUSA(response.data);
     });
   },[]);
  if (!getUSA) return null;
  return (
    <>
<section className="isgf-breadcum uas_forum_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/usa/usa-banner.jpg"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>UAS Forum</h1>
			<p>Home {'>'} ISGF Initiatives {'>'} UAS Forum</p>
		</div>
	</div>
</section>
<section className="uas-forum">
 {(getUSA) && getUSA.map((data,index)=>(
	<div className="container">
		<div className="row">
			<div className="col-lg-8 ">
				<div className="benefits_membership">
					<div className="heading mb-3">
						<h2>Unmanned Aircraft Systems (UAS) Forum</h2>
					</div>
				</div>
				
				{parse(`${data.descriptions}`)}
				<h4 className="h-4">Market Outlook</h4>
				{parse(`${data.market_outlook}`)}
				<a target="_blank" href={data.url} className="btn btn-blue mt-3 mb-3">Visit Website</a>
			</div>
		    <div className="col-lg-4">
		    	<Sidebar/>
		    </div>
	</div>
    </div>
		))}
</section>

    </>
  )
}

export default UamForum