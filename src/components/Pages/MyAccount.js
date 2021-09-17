import { useState } from "react";
import { Link} from "react-router-dom";
import '../Home/Home.css';
import Account from '../Pages/Account'
import { useHistory } from "react-router-dom";

const MyAccount = () => {
    const history = useHistory();

    let token = localStorage.getItem('jwt');
    console.log(token);
    if (token === null){
        history.push("/");
    }

    const [menuClick,setMenuClick] = useState(false);
    const handleCloseMenuClick = () => {
        setMenuClick(false)
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
                </div>
            </div>
            <div className={menuClick ? 'main-small' : 'main'}>
                <div className="page-content">
                    <Account />
                </div>
            </div>
        </div>
      );
}
 
export default MyAccount;