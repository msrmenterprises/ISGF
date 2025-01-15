import React from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const GLOBAL = require('../../commonConstants.js');
const url = GLOBAL.BASE_URL+"getparticipant/";

function TrainingsNewParticipantsRegistration() {

    const cookies = new Cookies();
    const navigate = useNavigate();
    var myArray =  cookies.get('data');

    const u_email = myArray.email ? myArray.email : '';
    const [getUser, setUser] = React.useState(null);
    React.useEffect(() => {
    axios.get(url+u_email).then((response) => {
    setUser(response.data);
     });
   },[]);

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [name_certificate, setNameCertificate] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [whatsapp, setWhatsapp] = React.useState("");
    const [designation, setDesignation] = React.useState("");
    const [academic, setAcademic] = React.useState("");
    const [qualification, setQualification] = React.useState("");
    const [experience, setExperience] = React.useState("");
    const [gst, setGST] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [state, setState] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [anyoption, setAnyoption] = React.useState("");
    const [anyoption1, setAnyoption1] = React.useState("");
    const {register,handleSubmit,formState:{errors}} = useForm();
    // const myArray = (cookies.get('data'));

        const onSubmit = (data) =>{
            var myArray1 = {
                name:   data.name ,
                secondary_email:   data.email,
                name_on_certificate:  data.name_certificate,
                mobile:  data.phone,
                whatsapp:  data.whatsapp,
                designation:   data.designation,
                company:  data.academic,
                highest_qualification:   data.qualification,
                years_of_experience: data.experience,
                gst:  data.gst,
                country:  data.country,
                state:  data.state,
                address:  data.address,
                type:  data.anyoption,
                source: data.anyoption1
            };
            const admin={...myArray,...myArray1};
            cookies.set('data', admin , { path: '/' });

            return navigate("/training-option");

}
    if (!myArray) return navigate("/");
    if (!getUser) return null;
// console.log(getUser);
  return (
    <>
        <section className="isgf-breadcum trainings_participants_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/trainings-participants/trainings-participants-banner.jpg"
                  })`,
                }}>
            <div className="container">
               <div className="isgf-breadcum-box">
                            <h1>ISGF Trainings Participants Registration</h1>
                            <p>Home {'>'}  ISGF Initiatives {'>'} ISGF Trainings {'>'}  New Participants Registration</p>
                        </div>
            </div>
        </section>
        <section className="smart_grid_handbook trainings-participants">
            <div className="container-fluid mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="trainings-participants-form">
                            <h5>New Participants Registration</h5>
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-6 mb-2">
                                        <label for="formGroupExampleInput" className="form-label">Name <span className='text-danger'>*</span></label>
                                        <input type="text" defaultValue={getUser.name ? getUser.name : name} className="form-control" name="name" placeholder="Name" {...register('name',{required:"Name is Required"})} onChange={(e) => setName(e.target.value)}/>
                                        {errors.name && (<small className="text-danger">Name Field is Required*</small>)}
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="formGroupExampleInput" className="form-label">Name as required in the Certificate <span className='text-danger'>*</span></label>
                                        <input type="text" defaultValue={getUser.name_on_certificate ? getUser.name_on_certificate : name_certificate} className="form-control" placeholder="Name as required in the Certificate" {...register('name_certificate',{required:"Name Certificate is Required"})} onChange={(e) => setNameCertificate(e.target.value)}/>
                                        {errors.name_certificate && (<small className="text-danger">Certificate Name Field is Required*</small>)}
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="formGroupExampleInput" className="form-label">Email ID <span className='text-danger'>*</span></label>
                                        <input type="text" defaultValue={getUser.secondary_email ? getUser.secondary_email : email} className="form-control" placeholder="Email" {...register('email',{required:"Email is Required",pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
})} onChange={(e) => setEmail(e.target.value)}/>
                                        {errors.email && (<small className="text-danger">Invalid Email Address*</small>)}
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="formGroupExampleInput" className="form-label">Mobile Number <span className='text-danger'>*</span></label>
                                        <input type="number" defaultValue={getUser.mobile ? getUser.mobile : phone} className="form-control" placeholder="Mobile Number" {...register('phone',{required:"Phone is Required",pattern: /[0-9]{4}/, minLength: 10,
                                                     maxLength: 10 })} onChange={(e) => setPhone(e.target.value)}/>
                                        {errors.phone && (<small className="text-danger">Mobile Number Field is Required*</small>)}
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="formGroupExampleInput" className="form-label">Your What's app number <span className='text-danger'>*</span></label>
                                        <input type="number" defaultValue={getUser.whatsapp ? getUser.whatsapp : whatsapp} className="form-control" placeholder="Your What's app number" {...register('whatsapp',{required:"Phone is Required",pattern: /[0-9]{4}/, minLength: 10,
                                                     maxLength: 10 })} onChange={(e) => setWhatsapp(e.target.value)}/>
                                        {errors.whatsapp && (<small className="text-danger">What's app number Field is Required*</small>)}
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="formGroupExampleInput" className="form-label">Designation <span className='text-danger'>*</span></label>
                                        <input type="text" defaultValue={getUser.designation ? getUser.designation : designation} className="form-control" placeholder="Designation" {...register('designation',{required:"Designation is Required"})} onChange={(e) => setDesignation(e.target.value)}/>
                                        {errors.designation && (<small className="text-danger">Designation Field is Required*</small>)}
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="formGroupExampleInput" className="form-label">Company/Academic Institutions <span className='text-danger'>*</span></label>
                                        <input type="text" defaultValue={getUser.company ? getUser.company : academic} className="form-control" placeholder="Company/Academic Institutions" {...register('academic',{required:"Academic is Required"})} onChange={(e) => setAcademic(e.target.value)}/>
                                        {errors.academic && (<small className="text-danger">Company/Academic Institutions Field is Required*</small>)}
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="formGroupExampleInput" className="form-label">Highest Qualification <span className='text-danger'>*</span></label>
                                        <select className="form-select" aria-label="Default select example" {...register('qualification',{required:"Qualification is Required"})} onChange={(e)=> setQualification(e.target.value)}>
                                        <option value={getUser.highest_qualification ? getUser.highest_qualification : ''}>{getUser.highest_qualification ? getUser.highest_qualification : 'Select Qualification'}</option>
                                        {/*<option value="">Select Qualification</option>*/}
                                        <option value="PhD/ Doctorate Degree">PhD/ Doctorate Degree</option>
                                        <option value="Master’s Degree (MTech, MBA, MSc, MCA or equivalent)">Master’s Degree (MTech, MBA, MSc, MCA or equivalent)</option>
                                        <option value="Bachelor’s Degree (BTech, BSc, BCom, BBA or equivalent)">Bachelor’s Degree (BTech, BSc, BCom, BBA or equivalent)</option>
                                        <option value="Diploma Holders">Diploma Holders</option>
                                        <option value="Studying at Present">Studying at Present</option>
                                        </select>
                                        {errors.qualification && (<small className="text-danger">Highest Qualification Field is Required*</small>)}
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="formGroupExampleInput" className="form-label">Years of Experience <span className='text-danger'>*</span></label>
                                        <select className="form-select" aria-label="Default select example" {...register('experience',{required:"Experience is Required"})} onChange={(e)=> setExperience(e.target.value)}>
                                        <option value={getUser.years_of_experience ? getUser.years_of_experience : ''}>{getUser.years_of_experience ? getUser.years_of_experience : 'Select Experience'}</option>
                                        {/*<option value="">Select Experience</option>*/}
                                        <option value="0 – 5 Years">0 – 5 Years</option>
                                        <option value="05 – 15 Years">05 – 15 Years</option>
                                        <option value="15 – 25 Years">15 – 25 Years</option>
                                        <option value="25 – 35 Years">25 – 35 Years</option>
                                        <option value="35 and above Years">35 and above Years</option>
                                        </select>
                                        {errors.experience && (<small className="text-danger">Years of Experience Field is Required*</small>)}

                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="formGroupExampleInput" className="form-label">Enter GST Number (optional)</label>
                                        <input type="text" defaultValue={getUser.gst ? getUser.gst : gst} className="form-control" placeholder="GST Number" onChange={(e)=> setGST(e.target.value)}/>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="formGroupExampleInput" className="form-label">Address <span className='text-danger'>*</span></label>
                                        <textarea className="form-control" defaultValue={getUser.address ? getUser.address : address} placeholder="Address" rows="4" {...register('address',{required:"Address is Required"})} onChange={(e)=> setAddress(e.target.value)}/>
                                        {errors.address && (<small className="text-danger">Address Field is Required*</small>)}
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="formGroupExampleInput" className="form-label">Country <span className='text-danger'>*</span></label>
                                        <select className="form-select" aria-label="Default select example" {...register('country',{required:"Country is Required"})} onChange={(e)=> setCountry(e.target.value)}>
                                            <option value={getUser.country ? getUser.country : country}>{getUser.country ? getUser.country : 'Select Country'}</option>
                                            {/*<option value="">Select Country</option>*/}
                                            <option value="Afganistan" >Afghanistan</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="American Samoa">American Samoa</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Angola">Angola</option>
                                            <option value="Anguilla">Anguilla</option>
                                            <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Barbados">Barbados</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Belize">Belize</option>
                                            <option value="Benin">Benin</option>
                                            <option value="Bermuda">Bermuda</option>
                                            <option value="Bhutan">Bhutan</option>
                                            <option value="Bolivia">Bolivia</option>
                                            <option value="Bonaire">Bonaire</option>
                                            <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                            <option value="Botswana">Botswana</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                            <option value="Brunei">Brunei</option>
                                            <option value="Bulgaria">Bulgaria</option>
                                            <option value="Burkina Faso">Burkina Faso</option>
                                            <option value="Burundi">Burundi</option>
                                            <option value="Cambodia">Cambodia</option>
                                            <option value="Cameroon">Cameroon</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Canary Islands">Canary Islands</option>
                                            <option value="Cape Verde">Cape Verde</option>
                                            <option value="Cayman Islands">Cayman Islands</option>
                                            <option value="Central African Republic">Central African Republic</option>
                                            <option value="Chad">Chad</option>
                                            <option value="Channel Islands">Channel Islands</option>
                                            <option value="Chile">Chile</option>
                                            <option value="China">China</option>
                                            <option value="Christmas Island">Christmas Island</option>
                                            <option value="Cocos Island">Cocos Island</option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="Comoros">Comoros</option>
                                            <option value="Congo">Congo</option>
                                            <option value="Cook Islands">Cook Islands</option>
                                            <option value="Costa Rica">Costa Rica</option>
                                            <option value="Cote DIvoire">Cote DIvoire</option>
                                            <option value="Croatia">Croatia</option>
                                            <option value="Cuba">Cuba</option>
                                            <option value="Curaco">Curacao</option>
                                            <option value="Cyprus">Cyprus</option>
                                            <option value="Czech Republic">Czech Republic</option>
                                            <option value="Denmark">Denmark</option>
                                            <option value="Djibouti">Djibouti</option>
                                            <option value="Dominica">Dominica</option>
                                            <option value="Dominican Republic">Dominican Republic</option>
                                            <option value="East Timor">East Timor</option>
                                            <option value="Ecuador">Ecuador</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="El Salvador">El Salvador</option>
                                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                                            <option value="Eritrea">Eritrea</option>
                                            <option value="Estonia">Estonia</option>
                                            <option value="Ethiopia">Ethiopia</option>
                                            <option value="Falkland Islands">Falkland Islands</option>
                                            <option value="Faroe Islands">Faroe Islands</option>
                                            <option value="Fiji">Fiji</option>
                                            <option value="Finland">Finland</option>
                                            <option value="France">France</option>
                                            <option value="French Guiana">French Guiana</option>
                                            <option value="French Polynesia">French Polynesia</option>
                                            <option value="French Southern Ter">French Southern Ter</option>
                                            <option value="Gabon">Gabon</option>
                                            <option value="Gambia">Gambia</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Gibraltar">Gibraltar</option>
                                            <option value="Great Britain">Great Britain</option>
                                            <option value="Greece">Greece</option>
                                            <option value="Greenland">Greenland</option>
                                            <option value="Grenada">Grenada</option>
                                            <option value="Guadeloupe">Guadeloupe</option>
                                            <option value="Guam">Guam</option>
                                            <option value="Guatemala">Guatemala</option>
                                            <option value="Guinea">Guinea</option>
                                            <option value="Guyana">Guyana</option>
                                            <option value="Haiti">Haiti</option>
                                            <option value="Hawaii">Hawaii</option>
                                            <option value="Honduras">Honduras</option>
                                            <option value="Hong Kong">Hong Kong</option>
                                            <option value="Hungary">Hungary</option>
                                            <option value="Iceland">Iceland</option>
                                            <option value="Indonesia">Indonesia</option>
                                            <option value="India" >India</option>
                                            <option value="Iran">Iran</option>
                                            <option value="Iraq">Iraq</option>
                                            <option value="Ireland">Ireland</option>
                                            <option value="Isle of Man">Isle of Man</option>
                                            <option value="Israel">Israel</option>
                                            <option value="Italy">Italy</option>
                                            <option value="Jamaica">Jamaica</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Jordan">Jordan</option>
                                            <option value="Kazakhstan">Kazakhstan</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Kiribati">Kiribati</option>
                                            <option value="Korea North">Korea North</option>
                                            <option value="Korea Sout">Korea South</option>
                                            <option value="Kuwait">Kuwait</option>
                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                            <option value="Laos">Laos</option>
                                            <option value="Latvia">Latvia</option>
                                            <option value="Lebanon">Lebanon</option>
                                            <option value="Lesotho">Lesotho</option>
                                            <option value="Liberia">Liberia</option>
                                            <option value="Libya">Libya</option>
                                            <option value="Liechtenstein">Liechtenstein</option>
                                            <option value="Lithuania">Lithuania</option>
                                            <option value="Luxembourg">Luxembourg</option>
                                            <option value="Macau">Macau</option>
                                            <option value="Macedonia">Macedonia</option>
                                            <option value="Madagascar">Madagascar</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Malawi">Malawi</option>
                                            <option value="Maldives">Maldives</option>
                                            <option value="Mali">Mali</option>
                                            <option value="Malta">Malta</option>
                                            <option value="Marshall Islands">Marshall Islands</option>
                                            <option value="Martinique">Martinique</option>
                                            <option value="Mauritania">Mauritania</option>
                                            <option value="Mauritius">Mauritius</option>
                                            <option value="Mayotte">Mayotte</option>
                                            <option value="Mexico">Mexico</option>
                                            <option value="Midway Islands">Midway Islands</option>
                                            <option value="Moldova">Moldova</option>
                                            <option value="Monaco">Monaco</option>
                                            <option value="Mongolia">Mongolia</option>
                                            <option value="Montserrat">Montserrat</option>
                                            <option value="Morocco">Morocco</option>
                                            <option value="Mozambique">Mozambique</option>
                                            <option value="Myanmar">Myanmar</option>
                                            <option value="Nambia">Nambia</option>
                                            <option value="Nauru">Nauru</option>
                                            <option value="Nepal">Nepal</option>
                                            <option value="Netherland Antilles">Netherland Antilles</option>
                                            <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                            <option value="Nevis">Nevis</option>
                                            <option value="New Caledonia">New Caledonia</option>
                                            <option value="New Zealand">New Zealand</option>
                                            <option value="Nicaragua">Nicaragua</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="Niue">Niue</option>
                                            <option value="Norfolk Island">Norfolk Island</option>
                                            <option value="Norway">Norway</option>
                                            <option value="Oman">Oman</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Palau Island">Palau Island</option>
                                            <option value="Palestine">Palestine</option>
                                            <option value="Panama">Panama</option>
                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                            <option value="Paraguay">Paraguay</option>
                                            <option value="Peru">Peru</option>
                                            <option value="Phillipines">Philippines</option>
                                            <option value="Pitcairn Island">Pitcairn Island</option>
                                            <option value="Poland">Poland</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="Puerto Rico">Puerto Rico</option>
                                            <option value="Qatar">Qatar</option>
                                            <option value="Republic of Montenegro">Republic of Montenegro</option>
                                            <option value="Republic of Serbia">Republic of Serbia</option>
                                            <option value="Reunion">Reunion</option>
                                            <option value="Romania">Romania</option>
                                            <option value="Russia">Russia</option>
                                            <option value="Rwanda">Rwanda</option>
                                            <option value="St Barthelemy">St Barthelemy</option>
                                            <option value="St Eustatius">St Eustatius</option>
                                            <option value="St Helena">St Helena</option>
                                            <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                            <option value="St Lucia">St Lucia</option>
                                            <option value="St Maarten">St Maarten</option>
                                            <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                            <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                            <option value="Saipan">Saipan</option>
                                            <option value="Samoa">Samoa</option>
                                            <option value="Samoa American">Samoa American</option>
                                            <option value="San Marino">San Marino</option>
                                            <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                            <option value="Senegal">Senegal</option>
                                            <option value="Seychelles">Seychelles</option>
                                            <option value="Sierra Leone">Sierra Leone</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Slovakia">Slovakia</option>
                                            <option value="Slovenia">Slovenia</option>
                                            <option value="Solomon Islands">Solomon Islands</option>
                                            <option value="Somalia">Somalia</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="Spain">Spain</option>
                                            <option value="Sri Lanka">Sri Lanka</option>
                                            <option value="Sudan">Sudan</option>
                                            <option value="Suriname">Suriname</option>
                                            <option value="Swaziland">Swaziland</option>
                                            <option value="Sweden">Sweden</option>
                                            <option value="Switzerland">Switzerland</option>
                                            <option value="Syria">Syria</option>
                                            <option value="Tahiti">Tahiti</option>
                                            <option value="Taiwan">Taiwan</option>
                                            <option value="Tajikistan">Tajikistan</option>
                                            <option value="Tanzania">Tanzania</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Togo">Togo</option>
                                            <option value="Tokelau">Tokelau</option>
                                            <option value="Tonga">Tonga</option>
                                            <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                            <option value="Tunisia">Tunisia</option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="Turkmenistan">Turkmenistan</option>
                                            <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                            <option value="Tuvalu">Tuvalu</option>
                                            <option value="Uganda">Uganda</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Ukraine">Ukraine</option>
                                            <option value="United Arab Erimates">United Arab Emirates</option>
                                            <option value="United States of America">United States of America</option>
                                            <option value="Uraguay">Uruguay</option>
                                            <option value="Uzbekistan">Uzbekistan</option>
                                            <option value="Vanuatu">Vanuatu</option>
                                            <option value="Vatican City State">Vatican City State</option>
                                            <option value="Venezuela">Venezuela</option>
                                            <option value="Vietnam">Vietnam</option>
                                            <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                            <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                            <option value="Wake Island">Wake Island</option>
                                            <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                            <option value="Yemen">Yemen</option>
                                            <option value="Zaire">Zaire</option>
                                            <option value="Zambia">Zambia</option>
                                            <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                        {errors.country && (<small className="text-danger">Country is Required*</small>)}
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="formGroupExampleInput" className="form-label"> State <span className='text-danger'>*</span></label>
                                        <input type="text" defaultValue={getUser.state ? getUser.state : state} className="form-control" placeholder="Enter State"{...register('state',{required:"State is Required"})} onChange={(e)=> setState(e.target.value)}/>
                                        {errors.state && (<small className="text-danger">State Field is Required*</small>)}
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="formGroupExampleInput" className="form-label mt-2">Select any one option valid for you <span className='text-danger'>*</span></label>
                                        <select className="form-select" aria-label="Default select example" {...register('anyoption',{required:"Anyoption is Required"})} onChange={(e)=> setAnyoption(e.target.value)}>
                                            <option value={getUser.type ? getUser.type : ' '}>{getUser.type ? getUser.type : 'Select any one option'}</option>
                                            {/*<option value="">Select any one option</option>*/}
                                            <option value="Utility">Utility</option>
                                            <option value="Industry">Industry</option>
                                            <option value="Student">Student</option>
                                            <option value="Academia">Academia</option>
                                            <option value="Government Institution">Government Institution</option>
                                            <option value="Others">Others</option>
                                        </select>
                                        {errors.anyoption && (<small className="text-danger">This Field is Required*</small>)}

                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="formGroupExampleInput" className="form-label mt-2">How Did You Got to Know About This Training Program? <span className='text-danger'>*</span></label>
                                        <select className="form-select" aria-label="Default select example" {...register('anyoption1',{required:"Anyoption is Required"})} onChange={(e)=> setAnyoption1(e.target.value)}>
                                            <option value={getUser.source ? getUser.source : ''}>{getUser.source ? getUser.source : 'Select any one option'}</option>
                                            {/*<option value="">Select any one option</option>*/}
                                            <option value="Social Media">Social Media</option>
                                            <option value="ISGF Mailers">ISGF Mailers</option>
                                            <option value="Word of Mouth">Word of Mouth</option>
                                            <option value="ISGF Website">ISGF Website</option>
                                            <option value="Others">Others</option>
                                        </select>
                                        {errors.anyoption1 && (<small className="text-danger">This Field is Required*</small>)}
                                    </div>
                                    <div className="col-md-12 mb-2 text-center">
                                        <button type="submit" className="btn btn-primary">Save and Continue</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

            </div>
            </div>
        </section>


    </>
  )
}

export default TrainingsNewParticipantsRegistration