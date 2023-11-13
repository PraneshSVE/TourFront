import React, { useState,useContext } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {BASE_URL} from '../../utils/config';


const Booking = ({ tour, avgRating }) => {
    const { price, reviews,title } = tour;
    const navigate = useNavigate();
    const {user} =useContext(AuthContext)
    const [booking, setBooking] = useState({
        userId: user && user._id,
        useEmail: user && user.email,
        tourName:title,
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: '',
    });

    const [formValid, setFormValid] = useState(false);

    const handleChange = (e) => {
        setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));

        const { fullName, phone, bookAt, guestSize } = booking;
        const isValid =
            fullName.trim() !== '' &&
            phone.trim() !== '' &&
            bookAt.trim() !== '' &&
            guestSize > 0;

        setFormValid(isValid);
    };

    const serviceFee = 15;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

    const handleClick = async (e) => {
        e.preventDefault();
        console.log(booking);

        try {
            if(!user|| user===undefined||user===null)
            {
                return alert('Please sign in')
            }

            const res =await fetch (`${BASE_URL}/booking`,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                credentials:'include',
                body:JSON.stringify(booking)

        })
        const result =await res.json()
        if(!res.ok)
        {
            return alert(result.message)
        }
        navigate('/thank-you');
        } catch (err) {
            alert(err.message)
        }
       
    };

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>
                    ${price} <span>/per person</span>
                </h3>
                <span className="tour__rating d-flex align-items-center ">
                    <i className="ri-star-s-fill"></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>

            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form">
                    <FormGroup>
                        <input
                            type="text"
                            placeholder="Full Name"
                            id="fullName"
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <input
                            type="number"
                            placeholder="Phone"
                            id="phone"
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        <input
                            type="date"
                            placeholder=""
                            id="bookAt"
                            required
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            placeholder="No. of persons"
                            id="guestSize"
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Form>
            </div>

            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className="d-flex align-items-center gap-1">
                            ₹{price} <i className="ri-close-line"></i>1 person
                        </h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>${serviceFee}</h5>
                        <span>$15</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total">
                        <h5>Total</h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <div className="butn">
                    <Button
                        className="btn primary__btn w-100 mt-4"
                        onClick={handleClick}
                        disabled={!formValid} // Disable the button when the form is not valid
                        
                    >
                        Book Now
                        
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Booking;
