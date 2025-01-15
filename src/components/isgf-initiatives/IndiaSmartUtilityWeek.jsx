import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const indiaSmartUtilityWeeks = GLOBAL.BASE_URL+"indiaSmartUtilityWeeks";

function IndiaSmartUtilityWeek() {
	 const [getIndiaSmart, setIndiaSmart] = React.useState(null);
  React.useEffect(() => {
    axios.get(indiaSmartUtilityWeeks).then((response) => {
    setIndiaSmart(response.data);
     });
   },[]);
  if (!getIndiaSmart) return null;
  // console.log(getIndiaSmart);
  return (
    <>
      <section className="isgf-breadcum isuw_banner_at_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/isuw/isuw-banner.jpg"
                  })`,
                }}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>India Smart Utility Week (ISUW)</h1>
			<p>Home {'>'} ISGF Initiatives {'>'}  India Smart Utility Week (ISUW)</p>
		</div>
	</div>
</section>
<section className="isuw">
	<div className="container">
		<div className="row">
			<div className="col-lg-8">
         {(getIndiaSmart) && getIndiaSmart.map((data,index)=>(
				<div className="row">
					<div className="col-md-12">
						<div className="benefits_membership">
							<div className="heading mb-3">
			                	<h2>India Smart Utility Week (ISUW)</h2>
			            	</div>
				            <h4 className="blue">The Upcoming Edition of ISUW</h4>
				            <p>ISUW 2023 will be held in New Delhi from 01-04 March 2023. For more details, please visit <a href="https://www.isuw.in/"  target="_blank">www.isuw.in.</a>  For Queries, please write to ISGF at <a href="mailto:isuw@isuw.in">isuw@isuw.in</a> </p>
				            <img src={assetUrl + "/public/banner_img/" + data.image} className="img-fluid"/>
				            <div className="isuw-gray-box mt-4 mb-3">
				            	<h4 className="mb-3 blue">About ISUW</h4>
									{parse(`${data.upcoming_edition_ISUW}`)}
							</div>

									{parse(`${data.description}`)}
							 		<img
			                src={`${process.env.PUBLIC_URL}/images/isuw/img-2.jpg`}
			                alt=""
			                className="isgf-logo"
			              />
							<h4 className="mt-5 blue">The Last Edition of ISUW</h4>
							<div className="carousel-wrapper">
	                <Carousel infiniteLoop useKeyboardArrows autoPlay>
        							 {(data.last_edition_ISUW) && data.last_edition_ISUW.map((data1,index)=>(
	                    <div>
											    <img src={assetUrl + "/public/" + data1} className="img-fluid"/>
	                    </div>
        								))}
	                </Carousel>
	        		</div>

							<div className="text-center">
								<a target="_blank" href={data.link} className="btn btn-blue"  > Visit Website</a>
							</div>
						</div>
					</div>
				</div>
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

export default IndiaSmartUtilityWeek