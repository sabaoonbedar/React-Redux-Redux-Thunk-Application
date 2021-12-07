import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Buttons(props) {
  const box = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh',
    width:'10%'

  };

  const values={

    float: 'right',
    fontSize: '12px'

  };



  return (
      <>
      <div style={box} >
<Button className={props.class} onClick={props.onClick} type={props.type}> {props.text} </Button>
</div>
      </>
  );
}


export default Buttons;