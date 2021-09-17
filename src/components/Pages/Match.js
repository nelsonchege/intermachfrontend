import MatchCard from "../MatchCard"
import './Pages.css'
const Match = () => {
   
    return ( 
        <div className="ContentDecoration">
           <div className="container">
                <div className="row">
                <div className="col contp">
                <MatchCard />
                </div>
                <div className="col contp">
                <MatchCard />
                </div>
                <div className="col contp">
                <MatchCard />
                </div>
                <div className="col contp">
                <MatchCard />
                </div>
                </div>
            </div>
            </div>    
     );
}
 
export default Match;