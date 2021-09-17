import '../Home/Home.css';
import { useState } from "react";
import { Link} from "react-router-dom";

const Account= ()=>{
    const [usernameprofile,setUsernameprofile] = useState();
    const [cityprofile,setCityprofile] = useState();
    const [tribeprofile,setTribeprofile] = useState();
    const [incomeclassprofile,setIncomeclassprofile] = useState();
    const [dobprofile,setDobprofile] = useState();
    const [phonenumberprofile,setPhonenumberprofile] = useState();
    const [descriptionprofile,setDescriptionprofile] = useState();
    const [genderprofile,setGenderprofile] = useState();

    const handleSubmit = ()=>{
        return
    }  
    return(
        <div className="main-container-content">
            <div className="update-form">
            <h1>Update Profile Details</h1>
            <form onSubmit={handleSubmit}>
                <div className="left-section">
                    <h2 className="section-title">Personal Information</h2>


                    <div className="username">
                        <label>Username</label>
                        <input 
                        type="text"
                        required
                        value = {usernameprofile}
                        onChange = {e => setUsernameprofile(e.target.value)}
                        />
                        {/* {usernameError && <span className="form-error">{usernameError}</span>} */}
                    </div>
                    <div className="city">
                        <label>city</label>
                        <input 
                        type="text"
                        required
                        value = {cityprofile}
                        onChange = {e => setCityprofile(e.target.value)}
                        />
                        {/* {firstnameError && <span className="form-error">{firstnameError}</span>} */}
                    </div>
                    <div className="tribe">
                        <label>tribe</label>
                        <select
                        required
                        value = {tribeprofile}
                        onChange = {e => setTribeprofile(e.target.value)}
                        >
                            <option value=" "></option>
                            <option value="kikuyu">kikuyu</option>
                            <option value="meru">meru</option>
                            <option value="maasai">maasai</option>
                            <option value="luo">luo</option>
                            <option value="swahili">swahili</option>
                        </select>
                        {/* {lastnameError && <span className="form-error">{lastnameError}</span>} */}
                    </div>
                    <div className="incomeclass">
                        <label>income class</label>
                        <select
                        required
                        value = {incomeclassprofile}
                        onChange = {e => setIncomeclassprofile(e.target.value)}
                        >
                            <option value=" "></option>
                            <option value="10k_50k">10k-50k</option>
                            <option value="50k_70k">50k-70k</option>
                            <option value="70k_100k">70k-100k</option>
                            <option value="100k_150k">100k-150k</option>
                            <option value="150k_200k">150k-200k</option>
                        </select>
                        {/* {lastnameError && <span className="form-error">{lastnameError}</span>} */}
                    </div>
                    <div className="dob">
                        <label>Date of Birth</label>
                        <input 
                        type="date"
                        required
                        value = {dobprofile}
                        onChange = {e => setDobprofile(e.target.value)}
                        />
                        {/* {dobError && <span className="form-error">{dobError}</span>} */}
                    </div>
                    <div className="gender">
                        <label>Gender</label>
                        <select
                        value = {genderprofile}
                        onChange = {e => setGenderprofile(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {/* {genderError && <span className="form-error">{genderError}</span>} */}
                    </div>
                </div>
                <div className="right-section">
                <div className="description">
                        <label>description</label>
                        <input 
                        type="text"
                        required
                        value = {descriptionprofile}
                        onChange = {e => setDescriptionprofile(e.target.value)}
                        />
                        {/* {lastnameError && <span className="form-error">{lastnameError}</span>} */}
                    </div>
                    <div className="contact-info">
                        <div className="phonenumber">
                            <label>Phonenumber</label>
                            <input 
                            type="number"
                            required
                            value = {phonenumberprofile}
                            onChange = {e => setPhonenumberprofile(e.target.value)}
                            />
                            {/* {phonenumberError && <span className="form-error">{phonenumberError}</span>} */}
                        </div>
                        <br></br>
                        {/* <Link to="/change-email">Change email</Link> */}
                    </div>
                    <div className="danger-zone">
                        <h2 className="section-title">Danger Zone</h2>
                        <Link to="/delete-account">Delete my account</Link>
                    </div>
                    <div className="submit-btn">
                        <button className="btn btn-primary btn-submit">Update Info</button>
                        {/* {isPending &&<div className="loading" ><img src={loading} alt="loading" /></div>} */}
                    </div>
                </div>
            </form>
        </div>
    </div>
        
    )
}

export default Account;