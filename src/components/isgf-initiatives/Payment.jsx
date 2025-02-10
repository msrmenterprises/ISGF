import React from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
window.onload = function() {
		var d = new Date().getTime();
		const inputElement = document.getElementById('tid');
		if (inputElement) {
			inputElement.value = 'someValue';
		  }
		//document.getElementById("tid").value = d;
	};
function Payment() {
    const cookies = new Cookies();
    const navigate = useNavigate();
  	const myArray =  cookies.get('data');
    const [email, setEmail] = React.useState("");
    const {register,handleSubmit,formState:{errors}} = useForm();
    const getmail = (cookies.get('data'));
		const onSubmit = (data) =>{
			var myArray = {email: email};
			cookies.set('data', myArray , { path: '/' });
			return navigate("/participants-registration");
		 
}
// document.getElementById('paymentFrom').submit();
  	// console.log(myArray);
  	// console.log(process.env.PUBLIC_URL);
  return (
    <>
<section className="isgf-breadcum trainings_participants_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/trainings-participants/trainings-participants-banner.jpg"
                  })`,
                }}>
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-12">
				<div className="isgf-breadcum-box">
					<h1>Payment </h1>
					<p>Payment</p>
				</div>
				<div className="isgf_breadcum_media">
					<a href="#" className="fa fa-facebook"></a>
					<a href="#" className="fa fa-twitter"></a>
					<a href="#" className="fa fa-linkedin"></a>
					<a href="#" className="fa fa-youtube"></a>
				</div>	
			</div>
		</div>
	</div>
</section>
<section className="smart_grid_handbook trainings-participants">
	<div className="container-fluid mt-5">
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="trainings-participants-form">
					<form method="post" name="customerData" action="ccavRequestHandler" id="paymentFrom" >
						 	<table width="40%" height="100" border='1' align="center" style={{
                  display: ``,
                }}><caption><font size="4" color="blue"><b>Integration Kit</b></font></caption></table>
					<table width="40%" height="100" border='1' align="center"  style={{
                  display: ``,
                }}>
				<tr>
					<td>Parameter Name:</td><td>Parameter Value:</td>
				</tr>
				<tr>
					<td colspan="2"> Compulsory information</td>
				</tr>
				<tr>
					<td>TID	:</td><td><input type="text" name="tid" id="tid"  /></td>
				</tr>
				<tr>
					<td>Merchant Id	:</td><td><input type="text" name="merchant_id" value="80773"/></td>
				</tr>
				<tr>
					<td>Order Id	:</td><td><input type="text" name="order_id" value={myArray.order_id ? myArray.order_id : ''}/></td>
				</tr>
				<tr>
					<td>Amount	:</td><td><input type="text" name="amount" value={myArray.amount ? myArray.amount : ''}/></td>
				</tr>
				<tr>
					<td>Currency	:</td><td><input type="text" name="currency" value="INR"/></td>
				</tr>
				<tr>
					<td>Redirect URL	:</td><td><input type="text" name="redirect_url" value={process.env.PUBLIC_URL + "/ccavResponseHandler"}/></td>
				</tr>
			 	<tr>
			 		<td>Cancel URL	:</td><td><input type="text" name="cancel_url" value={process.env.PUBLIC_URL + "/ccavResponseHandler"}/></td>
			 	</tr>
			 	<tr>
					<td>Language	:</td><td><input type="text" name="language" value="EN"/></td>
				</tr>
		     	<tr>
		     		<td colspan="2">Billing information(optional):</td>
		     	</tr>
		        <tr>
		        	<td>Billing Name	:</td><td><input type="text" name="billing_name" value={myArray.name ? myArray.name : ''}/></td>
		        </tr>
		        <tr>
		        	<td>Billing Address	:</td><td><input type="text" name="billing_address" value={myArray.address ? myArray.address : ''}/></td>
		        </tr>
		        <tr>
		        	<td>Billing City	:</td><td><input type="text" name="billing_city" value= ""/></td>
		        </tr>
		        <tr>
		        	<td>Billing State	:</td><td><input type="text" name="billing_state" value={myArray.state ? myArray.state : ''}/></td>
		        </tr>
		        <tr>
		        	<td>Billing Zip	:</td><td><input type="text" name="billing_zip" value=""/></td>
		        </tr>
		        <tr>
		        	<td>Billing Country	:</td><td><input type="text" name="billing_country" value={myArray.country ? myArray.country : ''}/></td>
		        </tr>
		        <tr>
		        	<td>Billing Tel	:</td><td><input type="text" name="billing_tel" value={myArray.mobile ? myArray.mobile : ''}/></td>
		        </tr>
		        <tr>
		        	<td>Billing Email	:</td><td><input type="text" name="billing_email" value={myArray.email ? myArray.email : ''}/></td>
		        </tr>
		        <tr>
		        	<td colspan="2">Shipping information(optional)</td>
		        </tr>
		        <tr>
		        	<td>Shipping Name	:</td><td><input type="text" name="delivery_name" value={myArray.name ? myArray.name : ''}/></td>
		        </tr>
		        <tr>
		        	<td>Shipping Address	:</td><td><input type="text" name="delivery_address" value={myArray.address ? myArray.address : ''}/></td>
		        </tr>
		        <tr>
		        	<td>shipping City	:</td><td><input type="text" name="delivery_city" value=''/></td>
		        </tr>
		        <tr>
		        	<td>shipping State	:</td><td><input type="text" name="delivery_state" value={myArray.state ? myArray.state : ''}/></td>
		        </tr>
		        <tr>
		        	<td>shipping Zip	:</td><td><input type="text" name="delivery_zip" value=''/></td>
		        </tr>
		        <tr>
		        	<td>shipping Country	:</td><td><input type="text" name="delivery_country" value={myArray.country ? myArray.country : ''}/></td>
		        </tr>
		        <tr>
		        	<td>Shipping Tel	:</td><td><input type="text" name="delivery_tel" value={myArray.mobile ? myArray.mobile : ''}/></td>
		        </tr>
		        <tr>
		        	<td>Merchant Param1	:</td><td><input type="text" name="merchant_param1" value=''/></td>
		        </tr>
		        <tr>
		        	<td>Merchant Param2	:</td><td><input type="text" name="merchant_param2" value=''/></td>
		        </tr>
				<tr>
					<td>Merchant Param3	:</td><td><input type="text" name="merchant_param3" value=''/></td>
				</tr>
				<tr>
					<td>Merchant Param4	:</td><td><input type="text" name="merchant_param4" value=''/></td>
				</tr>
				<tr>
					<td>Merchant Param5	:</td><td><input type="text" name="merchant_param5" value=''/></td>
				</tr>
				<tr>
					<td>Promo Code	:</td><td><input type="text" name="promo_code" value=''/></td>
				</tr>
				<tr>
					<td>Vault Info.	:</td><td><input type="text" name="customer_identifier" value=''/></td>
				</tr>
		        <tr>
		        	<td></td><td><input type="submit" value="CheckOut"/></td>
		        </tr>
	      	</table>
					</form>

				</div>
			</div>
	      <script>
	      		{/*{document.getElementById('paymentFrom').submit()}*/}
	      </script>
		    
	</div>
    </div>
</section>


    </>
  )
}

export default Payment