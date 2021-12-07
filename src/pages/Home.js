import React from 'react';
import Card from '../components/Card';
import axios from 'axios';
// import Button from '../components/Button';
import BackgroundImage from '../Assets/background.jpeg';
import Swal from "sweetalert2";  
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import {connect} from 'react-redux';

import { 
    Link,
  } from 'react-router-dom';
  
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsList: [],
            modalShow:false,
        };

    }


    handleDelete=(id)=>{
        // console.log(id);
        if(window.confirm("Are you sure you want to delete?")){
        axios.delete(`http://127.0.0.1:8000/api/delete/`+id)
        .then(res => {
      // you can use the same method for sarching elements
            let filteredArray = this.state.itemsList.filter(item => item.id !== id )
            this.setState({itemsList: filteredArray})

//this will be swal alert that would execute after deletion is performed
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Employee data has been successfully deleted',
                showConfirmButton: false,
                timer: 1500
              })
      
        })

        
    
      


    }else{}
        
      }
      

handleUpdate=(itemList)=>{

    this.setState({ itemsList: itemList });


}
  



    componentDidMount() {

        axios.get(`http://127.0.0.1:8000/api/list`)
            .then(res => {

                const itemsList = res.data;
                this.setState({ itemsList: itemsList });
                // console.log(this.state.itemsList);

            })



    }


    render() {


        const background={
            backgroundImage: `url(${BackgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100%'
        }



        return (

            <>
<div style={background}>
<div style={{justifyContent:'center', display:'flex',padding:'1%'}}>


<Link className={'btn btn-primary'} to={{pathname: '/register' }}>

AddEmployee
</Link>
</div>
               {
    this.state.itemsList.map((item,index) => {
        return(
   

    <Card

key={index}
id={item.id}
salarytype_id={item.salarytype_id}
department_id={item.department_id}

firstName={item.first_name}
lastName={item.last_name}
phone={item.phone}
email={item.email}
hours={item.work_hours}
salary={item.salary}
departmentName={item.name}
salaryType={item.type}
handleDelete= {this.handleDelete}
itemList={this.handleUpdate}
 />



        )

    })

    }

</div>



            </>
        )
    }

}



export default Home;