import { useState } from "react";
import SplitScreen from "../SplitScreen/SplitScreen";
import createProfile from "../../images/profile.png";
import { useHistory } from "react-router-dom";

const CreateProfile = (props) => {
    // state variables and other variables declaration

    const [usernamecreateprofile,setUsernamecreateprofile] = useState();
    const [citycreateprofile,setCitycreateprofile] = useState();
    const [tribecreateprofile,setTribecreateprofile] = useState();
    const [incomeclasscreateprofile,setIncomeclasscreateprofile] = useState();
    const [dobcreateprofile,setDobcreateprofile] = useState();
    const [phonenumbercreateprofile,setPhonenumbercreateprofile] = useState();
    const [descriptioncreateprofile,setDescriptioncreateprofile] = useState();
    const [gendercreateprofile,setGendercreateprofile] = useState();
    const history = useHistory(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            "username": usernamecreateprofile,
            "dateOfBirth": dobcreateprofile,
            "city": citycreateprofile,
            "phonenumber": phonenumbercreateprofile,
            "description": descriptioncreateprofile,
            "userGender": gendercreateprofile,
            "userIncome": incomeclasscreateprofile,
            "userTribe": tribecreateprofile,
             
        };
        return history.push("/login");
    }

    return ( 
        <SplitScreen
            img={createProfile}
            action=""
            actionText=""
            actionUrl=""
            formTitle="Welcome! Let's create your profile"
            formDescription=""
            form={[
                <form onSubmit={handleSubmit}>
                {/* {formError && <span className="form-error">{formError}</span>} */}
                <div className="username">
                    <label>Username</label>
                    <input 
                    type="text"
                    required
                    value = {usernamecreateprofile}
                    onChange = {e => setUsernamecreateprofile(e.target.value)}
                    />
                    {/* {usernameError && <span className="form-error">{usernameError}</span>} */}
                </div>
                <div className="city">
                    <label>city</label>
                    <input 
                    type="text"
                    required
                    value = {citycreateprofile}
                    onChange = {e => setCitycreateprofile(e.target.value)}
                    />
                    {/* {firstnameError && <span className="form-error">{firstnameError}</span>} */}
                </div>
                <div className="tribe">
                    <label>tribe</label>
                    <select
                    required
                    value = {tribecreateprofile}
                    onChange = {e => setTribecreateprofile(e.target.value)}
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
                    value = {incomeclasscreateprofile}
                    onChange = {e => setIncomeclasscreateprofile(e.target.value)}
                    >
                        <option value=" "></option>
                        <option value="10k_50k">10k-50k</option>
                        <option value="50k_70k">50k-70k</option>
                        <option value="70k_100k">70k-100k</option>
                        <option value="100k_150k">100k-150k</option>
                        <option value="150k_200k">150k-200k</option>
                    </select>
                    {/* {phonenumberError && <span className="form-error">{phonenumberError}</span>} */}
                </div>
                <div className="dob">
                    <label>Date of birth</label>
                    <input 
                    type="date"
                    required
                    value = {dobcreateprofile}
                    onChange = {e => setDobcreateprofile(e.target.value)}
                    />
                    {/* {dobError && <span className="form-error">{dobError}</span>} */}
                </div>
                <div className="phonenumber">
                    <label>phone number</label>
                    <input 
                    type="text"
                    required
                    value = {phonenumbercreateprofile}
                    onChange = {e => setPhonenumbercreateprofile(e.target.value)}
                    />
                    {/* {dobError && <span className="form-error">{dobError}</span>} */}
                </div>
                <div className="description">
                    <label> short description of yourself</label>
                    <input 
                    type="text"
                    required
                    value = {descriptioncreateprofile}
                    onChange = {e => setDescriptioncreateprofile(e.target.value)}
                    />
                    {/* {dobError && <span className="form-error">{dobError}</span>} */}
                </div>
                <div className="gender">
                    <label>Gender</label>
                    <select
                        value = {gendercreateprofile}
                        onChange = {e => setGendercreateprofile(e.target.value)}
                    >
                        <option value=""></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <button className="btn btn-primary btn-submit">Create Profile</button>
                {/* {isPending &&<div className="loading" ><img src={loading} alt="loading" /></div>} */}
            </form>
            ]}
        />
     );
}
 
export default CreateProfile;