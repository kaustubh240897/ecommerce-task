import React, { useEffect, useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import './App.css';
import headphone from '../headphone.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Product from './Product';
import { useNavigate } from "react-router-dom";


const Landing = (props) => {
    const navigate = useNavigate();
    const initValues = { firstlineaddress: "", streetname: "", postcode: "", delivery: "Free Delivery" };
    const [formValues, setformValues] = useState(initValues);
    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value });
        //console.log(formValues);

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(formValues));
        setisSubmit(true);
        console.log(formValues);
        if (isSubmit) {
            navigate("checkout");
        }

    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }

    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        if (!values.firstlineaddress) {
            errors.firstlineaddress = "Address is required";
        }
        if (!values.streetname) {
            errors.streetname = "Street name is required";
        }
        if (!values.postcode) {
            errors.postcode = "Post code is required";
        }
        if (!values.delivery) {
            errors.delivery = "delivery is required";
        }
        return errors;


    };

    return (

        <div>
            <div className="py-4">

                <div className="container">

                    <div className="row">



                        <div className="col-md-7">

                            <form onSubmit={handleSubmit}>

                                <div className="card">

                                    <div className="card-header">
                                        <p className='bread'>Shipping  --  <FontAwesomeIcon icon={faCircleCheck} /> -- Payment</p>
                                        <h4 className="cardhead">Shipping details</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label>First line of Address </label>
                                                    <input type='text' name='firstlineaddress' className="form-control" value={formValues.firstlineaddress} onChange={handleChange} />
                                                </div>
                                                <p className="errormsg"> {formErrors.firstlineaddress}</p>
                                                <div className="form-group mb-3">
                                                    <label>Street Name </label>
                                                    <input type='text' name='streetname' className="form-control" value={formValues.streetname} onChange={handleChange} />
                                                </div>
                                                <p className="errormsg"> {formErrors.streetname}</p>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label>PostCode </label>
                                                    <input type='text' name='postcode' className="form-control" value={formValues.postcode} onChange={handleChange} />
                                                </div>
                                                <p className="errormsg"> {formErrors.postcode}</p>

                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label>Select Shipping </label>

                                                    <select name="delivery" className="form-control" value={formValues.delivery} onChange={handleChange}>
                                                        <option value="Free Delivery"> Free Delivery </option>
                                                        <option value="Paid Delivery"> Paid Delivery </option>

                                                    </select>


                                                </div>
                                                <p className="errormsg"> {formErrors.delivery}</p>

                                            </div>
                                            <hr />

                                            <div className="col-md-12">
                                                <div className="form-group text-end">
                                                    <button type='submit' className="btn btn-primary">Payment</button>

                                                </div>
                                            </div>


                                        </div>



                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-5">
                            <Product />
                        </div>
                    </div>

                </div>









            </div>

        </div>

    );
}

export default Landing;