import React, { useEffect, useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import './App.css';
import headphone from '../headphone.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Product from './Product';
import { useNavigate } from "react-router-dom";




const Checkout = (props) => {
    const navigate = useNavigate();

    const initValues = { cardname: "", cardnumber: "", expiration_date: "", expiration_year: "", cvc: "" };
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


    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
            alert("Order Placed");

        }

    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        if (!values.cardname) {
            errors.cardname = "Name is required";
        }
        if (!values.cardnumber) {
            errors.cardnumber = "Card number is required";
        }
        if (!values.expiration_date) {
            errors.expiration_date = "Expiration date is required";
        }
        if (!values.expiration_year) {
            errors.expiration_year = "Expiration year is required";
        }
        if (!values.cvc) {
            errors.cvc = "CVC is required";
        }
        return errors;


    };
    const goback = () => {
        navigate("/");
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
                                        <p className="bread">Shipping -- <FontAwesomeIcon icon={faCircleCheck} /> -- Payment</p>
                                        <h4 className="cardhead">Payment details</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label>Name on Card </label>
                                                    <input type='text' name='cardname' className="form-control" value={formValues.cardname} onChange={handleChange} />
                                                </div>
                                                <p className="errormsg"> {formErrors.cardname}</p>
                                                <div className="form-group mb-3">
                                                    <label>Card Number </label>
                                                    <input type='text' name='cardnumber' className="form-control" value={formValues.cardnumber} onChange={handleChange} />
                                                </div>
                                                <p className="errormsg"> {formErrors.cardnumber}</p>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="form-group mb-3">
                                                    <label>Expiration </label>

                                                    <input type='text' name='expiration_date' className="form-control" value={formValues.expiration_date} onChange={handleChange} />

                                                </div>
                                                <p className="errormsg"> {formErrors.expiration_date}</p>

                                            </div>
                                            <div className="col-md-1">
                                                <label></label>
                                                <p>/ </p>
                                            </div>



                                            <div className="col-md-2">

                                                <div className="form-group mb-3">
                                                    <label></label>

                                                    <input type='text' name='expiration_year' className="form-control" value={formValues.expiration_year} onChange={handleChange} />
                                                </div>
                                                <p className="errormsg"> {formErrors.expiration_year}</p>

                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label>CVC </label>

                                                    <input type='text' name='cvc' className="form-control" value={formValues.cvc} onChange={handleChange} />


                                                </div>
                                                <p className="errormsg"> {formErrors.cvc}</p>

                                            </div>
                                            <hr />


                                            <div className="col-md-12">

                                                <div className="form-group text-end">
                                                    <button type='button' onClick={goback} className="btn btn-outline-secondary btnback">Go Back</button>


                                                    <button type='submit' className="btn btn-primary btngo">Complete Order</button>


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

export default Checkout;