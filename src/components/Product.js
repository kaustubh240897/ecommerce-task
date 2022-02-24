import React, { useEffect, useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import './App.css';
import headphone from '../headphone.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const fixedPrice = 4000;
    var productPrice = fixedPrice;
    var coupon = 0;
    const initValues = { quantity: 1, discountcode: "" };
    const [formValues, setformValues] = useState(initValues);
    const [quant, setquant] = useState(1);
    const [isSubmit, setisSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value });
        setquant(quant);
        setisSubmit(false);
        console.log(formValues);

    };
    const handleSubmit = (e) => {
        e.preventDefault();


        setisSubmit(true);
        console.log(formValues);
        console.log(productPrice);


    };
    if (quant < 1) {
        alert("Incorrect quantity");

    }
    else {
        productPrice = productPrice * (quant);
    }

    if (isSubmit && formValues.discountcode === 'NEWUSER') {
        if ((productPrice / 10) > 1500) {
            productPrice = productPrice - 1500;
        }
        else {
            productPrice = productPrice - (productPrice / 10);
        }

    }
    //var q = formValues.quantity;
    const addquanty = () => {
        setquant(quant + 1);

    };
    const subquanty = () => {
        setquant(quant - 1);

    };
    console.log(quant);





    return (

        <div className="card">


            <div className="card-body">
                <p>Order Summary</p>


                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <img src={headphone} className="product-img" alt="logo" />

                        </div>
                        <div className="col-md-6">
                            <p>Sony Wireless Headphones</p>
                        </div>
                        <div className="col-md-6">

                            <p class="qty">
                                <label for="qty"></label>
                                <button className="qtyminus" aria-hidden="true" onClick={subquanty}>&minus;</button>
                                <input type="number" name="quantitiy" min="1" step="1" value={quant} onChange={handleChange} />
                                <button className="qtyplus" aria-hidden="true" onClick={addquanty}>+</button>
                            </p>
                        </div>

                        <div className="col-md-12">
                            <h6>Rs. {fixedPrice} </h6>
                        </div>
                        <br />

                        <div className="col-md-10">
                            <div className="form-group mb-3 mt-3">
                                <label> <h6>Gift Card / Discount Code </h6></label>
                                <input type='text' name='discountcode' className="form-control" value={formValues.discountcode} onChange={handleChange} />
                            </div>

                        </div>
                        <div className="col-md-2">
                            <div className="form-group text-end mt-5">
                                <button type='submit' className="btn btn-outline-primary">Apply</button>

                            </div>
                        </div>

                        <br />

                        <div className="col-md-9">
                            <p>Total </p>
                        </div>
                        <div className="col-md-3">
                            <p> Rs. {productPrice + ".00"} </p>
                        </div>
                        <div className="col-md-9">
                            <p> Coupon Aplied </p>
                        </div>
                        <div className="col-md-3">
                            <p> Rs. {isSubmit && formValues.discountcode === 'NEWUSER' ? ((fixedPrice * (quant) / 10) > 1500 ? (1500 + ".00") : (fixedPrice * (quant) / 10 + ".00")) : 0 + ".00"} </p>
                        </div>
                        <div className="col-md-9">
                            <p> Shipping </p>
                        </div>
                        <div className="col-md-3">
                            <p className="cc"> Free</p>
                        </div>
                        <div className="col-md-9">
                            <h6>Total </h6>
                        </div>
                        <div className="col-md-3">
                            <h6> Rs. {(productPrice - coupon) + ".00"} </h6>
                        </div>



                    </div>
                </form>

            </div>

        </div >


    );
}
export default Product;