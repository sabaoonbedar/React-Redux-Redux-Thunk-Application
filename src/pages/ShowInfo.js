
import Card from 'react-bootstrap/Card'
import IconImage from '../Assets/icon.png';

import {useLocation} from 'react-router-dom';

 function ShowInfo() {

    const location = useLocation();
       
    const container={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'90vh',
    }


        return (

            <>
               
<div style={container}>





<Card style={{ width: '30rem', }}>
  <Card.Img variant="top" src={IconImage} style={{width:'45%',height:'auto',alignSelf:'center'}} />
  <Card.Body>
    <Card.Title>{location.state.firstName} {location.state.lastName}</Card.Title>
    <div style={{float:'right'}}>Contact:{location.state.phone}</div>
    <Card.Subtitle className="mb-2 text-muted">{location.state.email}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">Department: {location.state.departmentName}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">Salary Type: {location.state.salaryType}</Card.Subtitle>


<hr/>
    <Card.Text>
      <b>Monthly Salary:</b> {location.state.salary} <br/>
      <b>Work Hours:</b> {location.state.hours} <br/>

      {
              location.state.hours > 100 ? <div><b>Payable:</b> {location.state.salary}</div> : <div>Payable: {((0.75/100)*location.state.salary)*location.state.hours}</div>
            }



            
    </Card.Text>
  </Card.Body>
</Card>



</div>

            </>
        )
    }




export default ShowInfo;