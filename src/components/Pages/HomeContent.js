import 'bootstrap/dist/css/bootstrap.min.css';
import './Pages.css'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const HomeContent = () => {
   const profiles =[
       {name :"nelson",age : 32,income:"10k - 100k",description:"i'm lot of fun"},
       {name : "jane",age :31,income:"100k - 150k",description:"life of the party"},
       {name : "john",age :34,income:"150k - 200k",description:"mystery,come find out"},
       {name : "james",age :53,income:"100k - 150k",description:" no content found"},
       {name : "sharon",age :23,income:"10k - 100k",description:"no content found"},
       {name : "ruth",age :37,income:"200k - 250k",description:"mystery,come find out"},
       {name : "antony",age :31,income:"10k - 100k",description:"whaaaaat?"},
       {name : "meek",age :29,income:"150k - 200k",description:"no content found"},
   ];
    return ( 
        <div className="ContentDecoration">
        <div className="container">
             <div className="row">
             {
                 profiles.map((profile)=>{
                     return(
                         <div className="col contpad">
                             <Card  style={{ width: '14rem' }}>
                                <Card.Body ClassName="carddeco">
                                <Card.Title className="textstyle">{profile.name}</Card.Title>
                                <p> {profile.income}</p>
                                <p> {profile.age}</p>
                                <p> {profile.description}</p>
                                <Button variant="primary">like</Button>
                                </Card.Body>
                             </Card>
                         </div>    
                     );
                 })
             }
             </div>
         </div>
         </div>      
     );
}
 
export default HomeContent;


{/*<div className="col contp" > 
 <ProfileCard />
</div>
<div className="col contp">
<ProfileCard />
</div>
<div className="col contp">
<ProfileCard />
</div>
<div className="col contp">
<ProfileCard />
</div>
<div className="col contp">
<ProfileCard />
</div>
<div className="col contp">
<ProfileCard />
</div>
<div className="col contp">
<ProfileCard />
</div>
<div className="col contp">
<ProfileCard />
</div> */}