import Navbar from "../Navbar/Navbar";
import Img1 from '../../images/image1.png'
import './Landing.css'
import { Link } from "react-router-dom";
const Landing = () => {
    return ( 
        <div className="landing-page">
            <Navbar /> 
            <div className="hero-section">
                <div className="hero-left">
                    <h1 className="hero-title">Easily create, View profile and Meet new people</h1>
                    <p className="hero-description" >create a profile that allows you to easily match your profile to another that suits you perfectly.</p>
                      <Link to="/About">
                          <button className="btn btn-primary">
                            Learn more
                          </button>  
                      </Link>
                </div>
                <div className="hero-right">
                    <img src={Img1} alt=""/>
                </div> 
            </div>
        </div>
     );
}
 
export default Landing;