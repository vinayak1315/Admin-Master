import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { BsFillCheckCircleFill } from "react-icons/bs"
import { MdOutlineCancel } from 'react-icons/md'
import edit_icon from '../../../images/edit.png'
import { FaAngleLeft } from 'react-icons/fa'

import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert'
import Loader from '../../layout/Loader'
import { getBooking,getOnGoingBooking } from '../../../actions/BookingActions'

const BookingTitle = () => {

    return (
        <div className="d-flex align-items-center">
            <div>
                <Link to="/admin/booking" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
            </div>
            <div>#123456</div>
            <div>
                <Link to="/admin/booking/service&repair/detail/edit" style={{ textDecoration: 'none' }}><img src={edit_icon} className="cons_edit ml-3 mb-1" /></Link>
            </div>
        </div>
    )
}
const EditBookingCcaTitle = () => {

    return (
        <div className="d-flex align-items-center">
            <div>
                <Link to="/admin/booking" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
            </div>
            <div>Cancel</div>
        </div>
    )
}

const CancelBookingCcaTitle = () => {

    return (
        <div className="d-flex align-items-center">
            <div>
                <Link to="/admin/booking" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
            </div>
            <div>Cancel</div>
        </div>
    )
}

const BookingDbTitle = () => {

    return (
        <div className="d-flex align-items-center">
            <div>
                <Link to="/admin/booking" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
            </div>
            <div>#123456</div>
        </div>
    )
}
const EditBookingTitle = () => {
    const {id} = useParams();
    return (
        <div className="d-flex align-items-center">
            <div>
                <Link to={`/admin/booking/care&accessory/detail`} style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
            </div>
            <div>#123456</div>
        </div>
    )
}

const BookOb = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { loading, error, bookingsData } = useSelector(state => state.OnGoingBooking);
    useEffect(() => {
        if (error) {
            alert.error(error)
        } else{
        const formData = new FormData();
        formData.set("action", "all-bookings");
        formData.set("start", 0);
        formData.set("limit", 10);
        formData.set("statusId", 1);

        dispatch(getOnGoingBooking(formData));
        }
    }, [alert, dispatch])
    return (

        <>
            {loading ? <Loader /> : (
                
                    <table style={{ width: '100%', marginTop: "10px" }}>
                    <tr className="title_table">
                        <th>Booking ID</th>
                        <th>Car Details</th>
                        <th>Appointment Details</th>
                        <th>Garage Details</th>
                        <th>Status Update</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                    {bookingsData.map(data=>(
                    <tr className="table_row">
                        <td>#123456</td>
                        <td>{data.manufacturer_name}</td>
                        <td>{data.appointment_date}-{data.appointment_time}</td>
                        <td>{data.outletName}</td>
                        <td>{data.status}</td>
                        <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                        <td><div><Link to={`/admin/booking/service&repair/detail/${data.leadId}`} style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                    </tr>
                    ))}
                </table>
            )}
        </>
    )
}

const BookDb = () => {
    return (
        <>
            <table style={{ width: '100%', marginTop: "10px" }}>
                <tr className="title_table">
                    <th>Booking ID</th>
                    <th>Car Details</th>
                    <th>Appointment Details</th>
                    <th>Garage Details</th>
                    <th>Rating & Review</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>21/01/2021-11:00 AM</td>
                    <td>Mahindra First Choice</td>
                    <td style={{ color: "#ED7D2B" }}><FaStar /><FaStar className="ml-1" /><FaStar className="ml-1" /><FaStar className="ml-1" /><FaStar className="ml-1" /></td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/admin/booking/service&repair/delivered/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>21/01/2021-11:00 AM</td>
                    <td>Mahindra First Choice</td>
                    <td style={{ color: "#ED7D2B" }}><FaStar /><FaStar className="ml-1" /><FaStar className="ml-1" /><FaStar className="ml-1" /><FaStar className="ml-1" /></td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459 </span></td>
                    <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>21/01/2021-11:00 AM</td>
                    <td>Mahindra First Choice</td>
                    <td style={{ color: "#ED7D2B" }}><FaStar /><FaStar className="ml-1" /><FaStar className="ml-1" /><FaStar className="ml-1" /><FaStar className="ml-1" /></td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
            </table>
        </>
    )
}

const BookCb = () => {
    return (
        <>
            <table style={{ width: '100%', marginTop: "10px" }}>
                <tr className="title_table">
                    <th>Booking ID</th>
                    <th>Car Details</th>
                    <th>Appointment Details</th>
                    <th>Garage Details</th>
                    <th>Cancellation Reason</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>21/01/2021-11:00 AM</td>
                    <td>Mahindra First Choice</td>
                    <td>Wrongly Booked</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/admin/booking/care&accesory/cancelbooking' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>21/01/2021-11:00 AM</td>
                    <td>Mahindra First Choice</td>
                    <td>Not available</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459 </span></td>
                    <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>21/01/2021-11:00 AM</td>
                    <td>Mahindra First Choice</td>
                    <td>Found Better Price</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
            </table>
        </>
    )
}

const BookAp = () => {
    return (
        <>
            <table style={{ width: '100%', marginTop: "10px" }}>
                <tr className="title_table">
                    <th>Booking ID</th>
                    <th>Car Details</th>
                    <th>Appointment Details</th>
                    <th>Garage Details</th>
                    <th>Status Update</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>21/01/2021-11:00 AM</td>
                    <td>Mahindra First Choice</td>
                    <td>
                        <div className="d-flex">
                            <div><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "20px" }} /></div>
                            <div className="ml-5"><MdOutlineCancel style={{ color: "#FF6969", fontSize: "23px" }} /></div>
                        </div>
                    </td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/admin/booking/service&repair/approval_pending/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>21/01/2021-11:00 AM</td>
                    <td>Mahindra First Choice</td>
                    <td>
                        <div className="d-flex">
                            <div><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "20px" }} /></div>
                            <div className="ml-5"><MdOutlineCancel style={{ color: "#FF6969", fontSize: "23px" }} /></div>
                        </div>
                    </td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>21/01/2021-11:00 AM</td>
                    <td>Mahindra First Choice</td>
                    <td>
                        <div className="d-flex">
                            <div><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "20px" }} /></div>
                            <div className="ml-5"><MdOutlineCancel style={{ color: "#FF6969", fontSize: "23px" }} /></div>
                        </div>
                    </td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
            </table>
        </>
    )
}

const BookDb2 = () => {
    return (
        <>
            <table style={{ width: '100%', marginTop: "10px" }}>
                <tr className="title_table">
                    <th>Booking ID</th>
                    <th>Car Details</th>
                    <th>Appointment Details</th>
                    <th>Garage Details</th>
                    <th>Amount</th>
                    <th>Rejection Reason</th>
                    <th></th>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>21/01/2021-11:00 AM</td>
                    <td>Mahindra First Choice</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td>Service not available</td>
                    <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>21/01/2021-11:00 AM</td>
                    <td>Mahindra First Choice</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td>Garage Closed</td>
                    <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>21/01/2021-11:00 AM</td>
                    <td>Mahindra First Choice</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td>Spares not available</td>
                    <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
            </table>
        </>
    )
}
export { BookOb, BookDb, BookCb, BookAp, BookDb2, BookingTitle, EditBookingTitle, BookingDbTitle, EditBookingCcaTitle, CancelBookingCcaTitle }