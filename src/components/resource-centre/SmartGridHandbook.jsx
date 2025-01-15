import React from 'react';
import Media from '../reusable/Media';
import Sidebar from '../reusable/Sidebar';
import axios from "axios";
// import Iframe from 'react-iframe'
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const smartGrid = GLOBAL.BASE_URL+"smartGridHandbook";
function SmartGridHandbook() {
  const [getSmartGrid, setSmartGrid] = React.useState(null);
  React.useEffect(() => {
    axios.get(smartGrid).then((response) => {
    setSmartGrid(response.data);
     });
   },[]);
 

  const downloadFile = () => {
    window.location.href = "https://indiasmartgrid.org/reports/Smart%20Grid%20Handbook%20for%20Regulators%20and%20Policy%20Makers_20Dec.pdf"
  }
  return (
    <>
      <section className="isgf-breadcum smart_grid_handbook_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/smart-grid-handbook/smart-grid-handbook-banner.jpg"
                  })`,
                }}>
            <div className="container">
                        <div className="isgf-breadcum-box">
                            <h1>Smart Grid Handbook</h1>
                            <p>Home {'>'} Resource Center {'>'}  Smart Grid Handbook</p>
                        </div>
            </div>
        </section>
        <section className="smart_grid_handbook">
            <div className="container">
                <div className="row">
                     {(getSmartGrid) && getSmartGrid.map((data,index)=>(
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="benefits_membership">
                                    <div className="heading mb-3">
                                        <h2>Smart Grid Handbook</h2>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <object data="https://indiasmartgrid.org/images/smart-grid-handbook/smart-grid-handbook.pdf" type="application/pdf" width="100%" height="600px"   >
    <iframe src="https://docs.google.com/viewer?url=https://indiasmartgrid.org/images/smart-grid-handbook/smart-grid-handbook.pdf&embedded=true" width="100%" height="600px"  allowFullScreen></iframe>
</object>

{/* <Iframe url={data.embed_url}
        width="100%"
        height="800"
        id=""
        className=""
        display="block"
        position="relative"/> */}

                             {/* <iframe src={data.embed_url} width="100%" height="800"  allowFullScreen></iframe> */}
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-12 d-flex justify-content-center mb-3">
                                <a target="_blank" download href={data.download_url} className="btn btn-orange"> <i className="fa fa-book"></i> View Smart Grid Handbook</a>
                                {/*<a href={`${process.env.PUBLIC_URL}/images/smart-grid-handbook/smart-grid-handbook.pdf`} className="btn btn-green" data-bs-toggle="modal" data-bs-target="#research_interns" onClick={downloadFile}> <i className="fa fa-download"></i> Download Smart Grid Handbook</a>*/}
                                <a href={`${process.env.PUBLIC_URL}/images/smart-grid-handbook/smart-grid-handbook.pdf`} download className="btn btn-green"> <i className="fa fa-download"></i> Download Smart Grid Handbook</a>

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

export default SmartGridHandbook