import React from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
const GLOBAL = require('../../commonConstants');
const news = GLOBAL.BASE_URL + "news_home";
const assetUrl = GLOBAL.assetUrl;
const achievements = GLOBAL.BASE_URL + "achievements_home";
const domainExpert = GLOBAL.BASE_URL + "domainExpert_home";
const functionalExpertise = GLOBAL.BASE_URL + "functionalExpertise_home";

const Achievements = () => {
  const [getAchievements, setAchievements] = React.useState(null);
  const [getDomain, setDomain] = React.useState(null);
  const [getFunction, setFunction] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios.get(achievements).then((response) => {
      setAchievements(response.data);
      setLoading(false);
    });
    axios.get(domainExpert).then((response) => {
      setDomain(response.data);
      setLoading(false);
    });
    axios.get(functionalExpertise).then((response) => {
      setFunction(response.data);
      setLoading(false);
    });
  }, []);

  if (!getAchievements) return null;
  if (!getDomain) return null;
  if (!getFunction) return null;

  return (
    <>
    {loading ?
      <>
      <div className="site-loader">
        Loading...
      </div>
      </>
     : <>
    <div className="contibute sec-padd" >
      <div className="container">
        <div className="heading mb-3">
          <h2>ISGF Contributions and Achievements</h2>
        </div>
        <div className="row gx-3 gy-3">
          <div className="col-md-4">
            <div
              className="box green"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/images/contri-box1.jpg"
                  })`,
              }}
            >
              <div className="box-head">Achievements</div>
              <div className="box-body">
                {(getAchievements) && getAchievements.map((data, index) => (
                  <div>
                    {((index <= 5)) ? <>
                      <p>{data.title}</p>
                    </> : <> </>}
                  </div>
                ))}
              </div>
              <div className="btn-pos">
                <NavLink onClick={() => window.scrollTo(0, 0)}
                  to="/achievements"
                  className="btn btn-white"
                >
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="box orange"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/images/contri-box2.jpg"
                  })`,
              }}
            >
              <div className="box-head">Domain Expertise</div>

              <div className="box-body">
                {(getDomain) && getDomain.map((data, index) => (
                  <div>
                    {((index <= 5)) ? <>
                      <p>{data.title}</p>
                    </> : <> </>}
                  </div>
                ))}

              </div>
              <div className="btn-pos">
                <NavLink onClick={() => window.scrollTo(0, 0)} to="/domain-of-expertise" className="btn btn-white">
                  Read More
                </NavLink>
              </div>

            </div>
          </div>
          <div className="col-md-4">
            <div
              className="box blue"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/images/contri-box3.jpg"
                  })`,
              }}
            >
              <div className="box-head">Functional Expertise</div>
              <div className="box-body">
                {(getFunction) && getFunction.map((data, index) => (
                  <div>
                    {((index <= 5)) ? <>
                      <p>{data.title}</p>
                    </> : <> </>}
                  </div>
                ))}
              </div>
              <div className="btn-pos">
                <NavLink onClick={() => window.scrollTo(0, 0)} exact to="/functional-expertise" className="btn btn-white">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     </>
    }
    </>
  )
}
export default Achievements;