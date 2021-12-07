import React from 'react';
import axios from 'axios';
import Button from '../components/Button';
import Swal from "sweetalert2";
import { connect } from 'react-redux';
import { formHandler } from '../redux/actions'

import {

    Form,
} from 'react-bootstrap';

import { } from 'react-router-dom';
class AddEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
            response: [],
        };

    }









    componentDidMount() {


    }


    addEmployee = (e) => {
        e.preventDefault();
        const requestData = {
            salarytype_id: this.state.salaryType,
            department_id: this.state.department,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            work_hours: this.state.workHours,
            salary: this.state.salary,
        }

        axios.post(`http://127.0.0.1:8000/api/employeeRegister`, requestData)
            .then(res => {

                const response = res.data;
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Employee data has been stored',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.history.go(-1)

            })


    }

    onInputchange = (event) => {
        this.props.inputHandler({ key: event.target.name, value: event.target.value })
        // this.setState({
        //     [event.target.name]: event.target.value

        // });
    }



    render() {

        const mainContainer = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#accbe8',

        }

        const container = {
            display: 'block',
            width: '50rem',

        }





        return (

            <>
                <div style={mainContainer}>
                    <div style={container}>
               
{this.props.firstName}
                        <form onSubmit={(e) => { this.addEmployee(e); }}>

                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="input"
                                    placeholder="name@example.com"
                                    name='firstName'
                                    value={this.state.firstName}
                                    onChange={(e) => { this.onInputchange(e) }}
                                    required={true}

                                />
                                <label htmlFor="floatingInputCustom">First Name</label>
                            </Form.Floating>

                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="input"
                                    placeholder="Last Name"
                                    name='lastName'
                                    value={this.state.lastName}
                                    onChange={(e) => { this.onInputchange(e) }}
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
                                    value={this.state.email}
                                    onChange={(e) => { this.onInputchange(e) }}
                                />
                                <label htmlFor="floatingEmailCustom">Email Address</label>
                            </Form.Floating>

                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingPhoneCustom"
                                    type="input"
                                    placeholder="phone"
                                    name='phone'
                                    value={this.state.phone}
                                    onChange={(e) => { this.onInputchange(e) }}
                                />
                                <label htmlFor="floatingPhoneCustom">Phone</label>
                            </Form.Floating>



                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingWorkCustom"
                                    type="input"
                                    placeholder="work hours"
                                    name='workHours'
                                    value={this.state.workHours}
                                    onChange={(e) => { this.onInputchange(e) }}
                                    required={true}

                                />
                                <label htmlFor="floatingWorkCustom">Work Hours</label>
                            </Form.Floating>

                            <Form.Select aria-label="Default select example" className="mb-3"
                                name='salaryType'
                                value={this.state.salaryType}
                                onChange={(e) => { this.onInputchange(e) }}
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
                                    type="input"
                                    placeholder="Salary"
                                    name='salary'
                                    value={this.state.salary}
                                    onChange={(e) => { this.onInputchange(e) }}
                                    required={true}

                                />
                                <label htmlFor="floatingSalaryCustom">Salary</label>
                            </Form.Floating>


                            <Form.Select aria-label="Default select department" className="mb-3"
                                name='department'
                                value={this.state.department}
                                onChange={(e) => { this.onInputchange(e) }}
                                required={true}

                            >
                                <option>Select Department</option>
                                <option value="1">Psychology</option>
                                <option value="2">Mathematics</option>
                                <option value="3">Geology</option>
                                <option value="4">Pharmacy</option>

                            </Form.Select>


                            <Button text={"Submit"} class={"btn btn-primary"} type={'submit'} />
                        </form>
                    </div>
                </div>

            </>
        )
    }

}

const mapStateToProps = (state) => {
    const {

        firstName,
        lastName,

    } = state.formHandler;

    return {
        firstName: firstName,
        lastName:lastName,
    }


}

const mapDispatchToProps = dispatch=> {
    //this will add the functions as a props to the components which can be trigger on order to change the state.
    return {
        inputHandler: ({key,value})=>dispatch(formHandler({key,value}))
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);