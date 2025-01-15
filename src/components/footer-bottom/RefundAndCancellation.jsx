import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
import Moment from 'react-moment';
import { NavLink, Link } from 'react-router-dom';
const GLOBAL = require('../../commonConstants.js');

const url = GLOBAL.BASE_URL+"refundCancellations";
const assetUrl = GLOBAL.assetUrl;
function RefundAndCancellation() {
	const [getRefund, setRefund] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
    setRefund(response.data);
     });
   },[]);
  if (!getRefund) return null;
  return (
    <>
<section className="isgf-breadcum refund-cancellation-breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/footer/refund-cancellation-banner.jpg"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>Refund and Cancellation</h1>
			<p>Home {'>'} Refund and Cancellation</p>
		</div>
	</div>
</section>
<section className="sec-padd">
	<div className="container">
		<div className="row">
			<div className="col-lg-8 ">
				<div className="heading mb-3">
					<h2>Refund and Cancellation</h2>
				</div>
				
				{(getRefund) && getRefund.map((data,index)=>(
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

export default RefundAndCancellation