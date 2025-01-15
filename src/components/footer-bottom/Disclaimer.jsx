import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
import Moment from 'react-moment';
import { NavLink, Link } from 'react-router-dom';
const GLOBAL = require('../../commonConstants.js');

const url = GLOBAL.BASE_URL+"Disclaimers";
const assetUrl = GLOBAL.assetUrl;
function Disclaimer() {
	const [getDisclaimers, setDisclaimers] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
    setDisclaimers(response.data);
     });
   },[]);
  if (!getDisclaimers) return null;
  return (
    <>
<section className="isgf-breadcum disclaimer-breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/footer/disclaimer-banner.jpg"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>Disclaimer</h1>
			<p>Home {'>'} Disclaimer</p>
		</div>
	</div>
</section>
<section className="sec-padd">
	<div className="container">
		<div className="row g-4">
			<div className="col-lg-8 ">
				
				<div className="heading mb-3">
					<h2>Disclaimer</h2>
				</div>
				
         {(getDisclaimers) && getDisclaimers.map((data,index)=>(
					<>
						 {parse(`${data.description}`)}</>
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

export default Disclaimer