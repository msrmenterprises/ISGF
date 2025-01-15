import React from 'react';
import Media from '../reusable/Media';
import axios from "axios";
import parse from 'html-react-parser';
import Sidebar from '../reusable/Sidebar';
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const powerSectorDirectory = GLOBAL.BASE_URL+"powerSectorDirectory";

function PowerSectorDirectory() {
  const [getpowerSectorDirectory, setpowerSectorDirectory] = React.useState(null);
  React.useEffect(() => {
    axios.get(powerSectorDirectory).then((response) => {
    setpowerSectorDirectory(response.data);
     });
   },[]);
  if (!getpowerSectorDirectory) return null;

  return (
    <>
<section className="isgf-breadcum cbip_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/cbip/cbip-banner.jpg"
                  })`,
                }}>
	<div className="container">
		
				<div className="isgf-breadcum-box">
					<h1>Power Sector Directory (CBIP)</h1>
					<p>Home {'>'} Resource Centre {'>'}  Power Sector Directory (CBIP)</p>
				</div>
	</div>
</section>
<section className="cbip">
	<div className="container">
		<div className="row">
     {(getpowerSectorDirectory) && getpowerSectorDirectory.map((data,index)=>(
			<div className="col-lg-8">
				<div className="heading mb-3">
					<h2>Power Sector Directory</h2>
				</div>
				{/* {parse(`${data.title}`)} */}
				{/* <iframe src={data.embed_url} width="100%" height="760" allowFullScreen></iframe> */}
				<p>The directory of power sector is being updated by ISGF. To purchase the same, please email us at <a href="mailto:contactus@indiasmartgrid.org">contactus@indiasmartgrid.org</a></p>
				<div className='row g-4 justify-content-center mt-4'>
					<div className='col-sm-6 col-md-6 text-center'>
						<a href="#" className="btn btn-orange disabled" data-bs-toggle="modal" data-bs-target="#research_interns"><i className="fa fa-download"></i> View Power Sector Directory</a>
					</div>
					<div className='col-sm-6 col-md-6 text-center'>
						<a target="_blank" download href={data.download_url} className="btn btn-green disabled"><i className="fa fa-download"></i> Download Power Sector Directory</a>
					</div>
				</div>
				</div>
			))}
		    <div className="col-lg-4">
		    	<Sidebar/>
		    </div>
	</div>
    </div>
</section>


    </>
  )
}

export default PowerSectorDirectory