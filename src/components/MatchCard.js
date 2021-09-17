import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Pages/Pages.css'

const MatchCard =()=>{
   return(
       <div>
           
          <Card  style={{ width: '14rem' }}>
            <Card.Body className="carddeco">
            <Card.Title>username</Card.Title>
            <p> income level</p>
            <p> city</p>
            <p> short description</p>
            <Button variant="primary">get phonenumber</Button>
            </Card.Body>
            </Card>
       </div>
   );
}

export default MatchCard;