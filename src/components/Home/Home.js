import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './Home.css';
import HomeContent from '../Pages/HomeContent';


const Home = (props) => {
    const history = useHistory();
    const [menuClick,setMenuClick] = useState(false);
    const [income,setIncome] = useState();
    const [tribe,setTribe] = useState();
    const [gender,setGender] = useState();

    let token = localStorage.getItem('jwt');
    console.log(token);

    if (token === null){
        history.push("/");
    }

    const logoutClick = async () => {
        localStorage.removeItem('jwt');
        history.push("/");
    }

    const handleOpenMenuClick = () => {
        setMenuClick(true)
    }
    const handleCloseMenuClick = () => {
        setMenuClick(false)
    }
    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(income)
        console.log(tribe)
        console.log(gender)

    }
   
    return (
        <div className="main-content">
            <div className={menuClick ? 'sidenav-open' : 'sidenav'}>
                <div className="logo-main">
                    <Link to="/home" className="logo">HookbyTribe</Link>
                    <div className="menu-icon-close" onClick={handleCloseMenuClick}>
                        <i className='fas fa-times close-icon'/>
                    </div>
                </div>
                <div className="sidenav-menu">
                    <Link to="/home" className="sidenav-links"><i className="fas fa-home"></i> Home</Link>
                    <Link to="/myAccount" className="sidenav-links"><i className="fas fa-user-alt"></i> Account</Link>
                    <Link to="/myMatches" className="sidenav-links"><i className="fas fa-user-alt"></i> My Matches</Link>
                
                <form onSubmit={handleSubmit}>
                    <div className="fliter-links">
                        <button type='submit' >Filter</button><br/> 
                        </div>
                     
                     <div className="genders">
                        <select
                        value = {gender}
                        onChange = {e => setGender(e.target.value)}
                        >
                            <option value=" ">gender</option>
                            <option value="male">male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="incometype general">
                        <select
                        value = {income}
                        onChange = {e => setIncome(e.target.value)}
                        >
                            <option value=" ">income</option>
                            <option value="10k_50k">10k-50k</option>
                            <option value="50k_70k">50k-70k</option>
                            <option value="70k_100k">70k-100k</option>
                            <option value="100k_150k">100k-150k</option>
                            <option value="150k_200k">150k-200k</option>
                        </select>
                    </div>
                    <div className="tribe general">
                        <select
                        value = {tribe}
                        onChange = {e => setTribe(e.target.value)}
                        >
                            <option value=" ">tribe</option>
                            <option value="kikuyu">kikuyu</option>
                            <option value="meru">meru</option>
                            <option value="maasai">maasai</option>
                            <option value="luo">luo</option>
                            <option value="swahili">swahili</option>
                        </select>
                    </div>
                </form>
                </div>
            </div>
            <div className={menuClick ? 'main-small' : 'main'}>
                <div className="navbar">
                    <div className="menu-icon-open" onClick={handleOpenMenuClick}>
                        <i className='fas fa-bars open-icon' />
                    </div>
                    <div className="dropdown">
                        <div className="dropdown-btn" onClick={logoutClick}>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    <HomeContent />
                </div>
            </div>
        </div>
      );
}
 
export default Home;