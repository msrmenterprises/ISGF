import React from 'react';
import axios from "axios";
import parse from 'html-react-parser';
const GLOBAL = require('../../commonConstants.js');

const WhatsNew_focus = GLOBAL.BASE_URL+"focus-areas";
const assetUrl = GLOBAL.assetUrl;;
function IsgFocusAreas() {
  const [getWhatsWhatsNew_focus, setWhatsWhatsNew_focus] = React.useState(null);
	React.useEffect(() => {
    axios.get(WhatsNew_focus).then((response) => {
    setWhatsWhatsNew_focus(response.data);
     });
   },[]);
  if (!getWhatsWhatsNew_focus) return null;
  return (
    <>
        <section className="isgf-breadcum focus_areas_breadcum" style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/focus-areas/focus-area-banner.jpg"
          })`,
        }}>
	<div className="container">
		<div className="isgf-breadcum-box">
			<h1>ISGF New Focus Areas</h1>
			<p>Home {'>'} ISGF New Focus Areas</p>
		</div>
	</div>
</section>
<section className="focus-areas">
	<div className="container">
		<div className="heading mb-3">
			<h2>ISGF New Focus Areas</h2>
		</div>
		<div className="row g-4">
			{(getWhatsWhatsNew_focus) && getWhatsWhatsNew_focus.map((data,index)=>(
			<div className="col-md-4 col-sm-6">
				<div className="focus-card">
					<img src={assetUrl + "/public/focus_areas/" + data.images}/>
					<div className="content">
						<h5>{(data.title)}</h5>
						{parse(`${data.descriptions}`)}
						<div className='text-center'>
							<a href="#" className="btn btn-orange" >Read More</a>
						</div>
					</div>
					</div>
				</div>
			))}
		</div>
    </div>
</section>
    </>
  )
}

export default IsgFocusAreas