import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
import parse from 'html-react-parser';
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const icf = GLOBAL.BASE_URL+"india-cgd-forum";
function IndiaCgdForum() {
	const [getIndia, setIndia] = React.useState(null);
  React.useEffect(() => {
    axios.get(icf).then((response) => {
    setIndia(response.data);
     });
   },[]);
  if (!getIndia) return null;
  return (
    <>
<section className="isgf-breadcum india_cgd_forum_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/india-cgd-forum/india-cgd-forum-banner.jpg"})`}}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>India CGD Forum</h1>
			<p>Home {'>'} ISGF Initiatives {'>'} India CGD Forum</p>
		</div>
	</div>
</section>
<section className="india-cgd-forum">
 {(getIndia) && getIndia.map((data,index)=>(
	<div className="container">
		<div className="row">
			<div className="col-lg-8">
				<div className="heading mb-3">
					<h2>India CGD Forum</h2>
				</div>
				<div className="india-cgd-forum-content">
				{parse(`${data.description}`)}
				<h3 className="h-3 mb-3 mt-5">India CGD Forum Executive Council</h3>
				<div className="row g-4">
					{(data.executive_council) && data.executive_council.map((data2,index)=>(
					<div className="col-md-4 col-sm-6">
						<div className="testi-box pb-0">
							<div className='pic'><img src={assetUrl + "/public/forum_img/" + data2.image}/></div>
							<div className="name">{data2.title}</div>
							<div className='des mb-0'>{data2.designation2}</div>
						</div>
					</div>
					))}
				</div>
			</div>
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

export default IndiaCgdForum;
