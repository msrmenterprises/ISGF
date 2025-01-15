import React, { useEffect } from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
import { NavLink, Link } from "react-router-dom";
const GLOBAL = require('../../commonConstants.js');

const url = GLOBAL.BASE_URL+"achievements";
const assetUrl = GLOBAL.assetUrl;;
function Achievements() {
	const [getAchievements, setAchievements] = React.useState(null);
    React.useEffect(() => {
    axios.get(url).then((response) => {
    setAchievements(response.data);
     });
   },[]);
    // console.log(getAchievements);
	useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
<section className="isgf-breadcum achievement_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/achievements/achivment-banner.jpg"
                  })`,
                }}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>ISGF Achievements</h1>
			<p>Home {'>'} ISGF Achievements</p>
		</div>
	</div>
</section>
<section className="achievement">
	<div className="container">
		<div className="heading mb-3">
			<h2>ISGF Key Achievement, Contributions And Recommendations To Ministries, Government Bodies And Utilities</h2>
		</div>
		<div className="isgf_accordion">
								            		 <div className="accordion" id="accordionExample">

                              {(getAchievements) && getAchievements.map((data,index)=>(
														  <div className="accordion-item">
														   <h2 className="accordion-header bg-green" id="heading1">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="false" aria-controls={`collapseOne${index}`}>
														        {data.title} </button>
														    </h2>
														   <div id={`collapseOne${index}`} className={`accordion-collapse collapse`} aria-expanded="false" aria-labelledby="heading1" data-bs-parent="#accordionExample">
														      <div className="accordion-body p-3">
														       {parse(`${data.descriptions}`)}</div>
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

export default Achievements