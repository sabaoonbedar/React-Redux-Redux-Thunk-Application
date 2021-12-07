import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';

// import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Swal from "sweetalert2";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useNavigate } from 'react-router-dom';

function Cards(props) {

  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [employeeInfo, setEmployeeInfo] = useState(
    {
      salarytype_id: props.salarytype_id,
      department_id: props.department_id,
      first_name: props.firstName,
      last_name: props.lastName,
      phone: props.phone,
      email: props.email,
      work_hours: props.hours,
      salary: props.salary
    }
  );


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const addEmployee = (e) => {
    e.preventDefault();
    const requestData = {
      salarytype_id: employeeInfo.salarytype_id,
      department_id: employeeInfo.department_id,
      first_name: employeeInfo.first_name,
      last_name: employeeInfo.last_name,
      phone: employeeInfo.phone,
      email: employeeInfo.email,
      work_hours: employeeInfo.work_hours,
      salary: employeeInfo.salary,
    }

    axios.put(`http://127.0.0.1:8000/api/update/` + props.id, requestData)
      .then(res => {

        const response = res.data;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Employee data has been updated successfully',
          showConfirmButton: false,
          timer: 1500
        })

        setShow(false);

        props.itemList(response);


      }).catch(errors => {

        console.log(errors.response);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: errors.response.data.message,
          showConfirmButton: false,
          timer: 1500
        })

      })


  }

  const onInputchange = (event) => {

    setEmployeeInfo(

      {
        ...employeeInfo,
        [event.target.name]: event.target.value
      })
  }




  const box = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25vh'

  };

  const values = {

    float: 'right',
    fontSize: '12px'

  };

  const toShowInfoPage = () => {

    navigate('/show', {
      state: {

        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
        phone: props.phone,
        salary: props.salary,
        hours: props.hours,
        departmentName: props.departmentName,
        salaryType: props.salaryType

      }
    });

    console.log(props.departmentName);
  }







  return (
    <>
      <div style={box}>
        <Card style={{ width: '50rem' }} className="shadow">
          <Card.Body>
            <Card.Title>
              {props.firstName} {props.lastName}
              <span style={values}>
                Salary: {props.salary}

              </span>
              <br />
              <span style={values}>
                Work Hours: {props.hours}
              </span>
              <br />
              <span style={values}>

                {
                  props.hours > 100 ? <div>Payable: {props.salary}</div> : <div>Payable: {((0.75 / 100) * props.salary) * props.hours}</div>
                }
              </span>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.email}</Card.Subtitle>
            <Card.Text>

              {props.phone}

            </Card.Text>
            <a onClick={() => { toShowInfoPage() }} style={{ textDecoration: 'none', paddingRight: '20px', color: '#187bcd', cursor: 'pointer' }}>
              View Details</a>

            <a onClick={() => props.handleDelete(props.id)} style={{ color: 'red', textDecoration: 'none', cursor: 'pointer', paddingRight: '20px' }}>Delete</a>

            <a onClick={handleShow} style={{ color: '#a85e05', textDecoration: 'none', cursor: 'pointer' }}>Edit</a>



          </Card.Body>
        </Card>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {props.firstName} {props.lastName}</Modal.Title>
        </Modal.Header>

        <form onSubmit={(e) => { addEmployee(e); }}>

          <Modal.Body>


            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="input"
                placeholder="name@example.com"
                name='first_name'
                value={employeeInfo.first_name}
                onChange={(e) => { onInputchange(e) }}
                required={true}

              />
              <label htmlFor="floatingInputCustom">First Name</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="input"
                placeholder="Last Name"
                name='last_name'
                value={employeeInfo.last_name}
                onChange={(e) => { onInputchange(e) }}
                required={true}
              />
              <label htmlFor="floatingInputCustom">Last Name</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingEmailCustom"
                type="email"
                placeholder="email"
                name='email'
                value={employeeInfo.email}
                onChange={(e) => { onInputchange(e) }}
              />
              <label htmlFor="floatingEmailCustom">Email Address</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPhoneCustom"
                type="input"
                placeholder="phone"
                name='phone'
                value={employeeInfo.phone}
                onChange={(e) => { onInputchange(e) }}
              />
              <label htmlFor="floatingPhoneCustom">Phone</label>
            </Form.Floating>



            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingWorkCustom"
                type="double"
                placeholder="work hours"
                name='work_hours'
                value={employeeInfo.work_hours}
                onChange={(e) => { onInputchange(e) }}
                required={true}
           

              />
              <label htmlFor="floatingWorkCustom">Work Hours</label>
            </Form.Floating>

            <Form.Select aria-label="Default select example" className="mb-3"
              name='salarytype_id'
              value={employeeInfo.salarytype_id}
              onChange={(e) => { onInputchange(e) }}
              required={true}
            >
              <option>Select Salary Type</option>
              <option value="1">Hourly</option>
              <option value="2">Bonuses</option>
              <option value="3">Commission</option>
            </Form.Select>

            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingSalaryCustom"
                type="number"
                placeholder="Salary"
                name='salary'
                value={employeeInfo.salary}
                onChange={(e) => { onInputchange(e) }}
                required={true}
              
              />
              <label htmlFor="floatingSalaryCustom">Salary</label>
            </Form.Floating>


            <Form.Select aria-label="Default select department" className="mb-3"
              name='department_id'
              value={employeeInfo.department_id}
              onChange={(e) => { onInputchange(e) }}
              required={true}

            >
              <option>Select Department</option>
              <option value="1">Psychology</option>
              <option value="2">Mathematics</option>
              <option value="3">Geology</option>
              <option value="4">Pharmacy</option>

            </Form.Select>


            {/* <Button text={"Submit"} class={"btn btn-primary"} type={'submit'} /> */}


          </Modal.Body>




          <Modal.Footer>

            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

    </>
  );


}


export default Cards;