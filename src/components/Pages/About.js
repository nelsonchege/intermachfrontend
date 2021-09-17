import './Pages.css'
import Navbar from "../Navbar/Navbar";
import Img1 from '../../images/About1.png'
import Img2 from '../../images/About2.png'
import Img3 from '../../images/About3.png'
import Img4 from '../../images/About4.png'
// className="hero-right"

const About = () => {
    return (
            <div className="About-page">
                <Navbar/> 
                <div >
                    <div className="AboutContent">
                       <div className="container">
                            <div className="row">
                            <div className="col">
                               <img src={Img1} alt="" className="about-pic"/>
                            </div>
                            <div className="col">
                              <img src={Img2} alt="" className="about-pic"/> 
                            </div>
                            <div className="col">
                               <img src={Img3} alt="" className="about-pic"/>
                            </div>
                            <div className="col">
                               <img src={Img4} alt="" className="about-pic"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
     );
}
 
export default About;