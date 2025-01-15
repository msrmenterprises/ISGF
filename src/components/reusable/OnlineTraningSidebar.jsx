import React from 'react'
import { NavLink, Link } from 'react-router-dom';

function OnlineTraningSidebar() {
  return (
    <>
       <div className="online-training-registration-sidebar" > 
		    		<div className="online-form">
		    			<h5 className="hh5">Registered Participants Login</h5>
		    			<div className="online-inner">
		    				<form>
							  <div className="mb-3">
							    <label>Select Training Programs</label>
							    <select className="form-select" aria-label="Default select example">
								  <option selected>Open this select menu</option>
								  <option value="1">One</option>
								  <option value="2">Two</option>
								  <option value="3">Three</option>
								</select>
							    
							  </div>
							  <div className="mb-3">
							    <label>Username</label>
							    <input type="text" className="form-control"/>
							  </div>
							  <div className="mb-3">
							    <label>Password</label>
							    <input type="Password" className="form-control"/>
							  </div>
							  <button type="submit" className="btn btn-orange">login</button>
							</form>
		    			</div>
		    		</div>
		    		<div className="online-sidebar-registraion mt-3">
		    			<div className="icon-box">
		    				<img src="images/online-training-registration/vactor-icon.png"/>
		    			</div>
		    			<NavLink exact to="/registration" className="btn btn-green">
		    			<h5>New Participants Registration</h5>
		    			</NavLink>
		    		</div>
		    	</div>
    </>
  )
}

export default OnlineTraningSidebar