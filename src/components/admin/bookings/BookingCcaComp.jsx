import {Link} from "react-router-dom"
import {FaStar} from 'react-icons/fa'
import edit_icon from '../../../images/edit.png'
import { FaAngleLeft } from 'react-icons/fa'


const BookingCca1Title = () => {

    return (
        <div className="d-flex align-items-center">
            <div>
                <Link to="/admin/booking" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
            </div>
            <div>#123456</div>
            <div>
                <Link to="/admin/booking/care&accessory/detail/edit" style={{ textDecoration: 'none' }}><img src={edit_icon} className="cons_edit ml-3 mb-1" /></Link>
            </div>
        </div>
    )
}
const BookingCca5Title = () => {

    return (
        <div className="d-flex align-items-center">
            <div>
                <Link to="/admin/booking/care&accessory" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
            </div>
            <div>#123456</div>
        </div>
    )
}
const BookingCca6Title = () => {

    return (
        <div className="d-flex align-items-center">
            <div>
                <Link to="/admin/booking/care&accessory" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
            </div>
            <div>#123456</div>
            
            <div>
                <Link to="/admin/booking/care&accessory/return_request/edit" style={{ textDecoration: 'none' }}><img src={edit_icon} className="cons_edit ml-3 mb-1" /></Link>
            </div>
        </div>
    )
}
const BookingCca7Title = () => {

    return (
        <div className="d-flex align-items-center">
            <div>
                <Link to="/admin/booking/care&accessory/return_request" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
            </div>
            <div>#123456</div>
        </div>
    )
}
const CcaOb = () => {
    return (
        <>
            <table style={{ width: '100%', marginTop: "10px" }}>
                <tr className="title_table">
                    <th>Booking ID</th>
                    <th>Car Details</th>
                    <th>Customer Details</th>
                    <th>Product Details</th>
                    <th>Status Update</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Phunsuk Wangdu</td>
                    <td>Seat cover, Android Infotainment & 4 more</td>
                    <td>Order Confirmed</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/admin/booking/care&accessory/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Phunsuk Wangdu</td>
                    <td>Seat cover, Android Infotainment & 4 more</td>
                    <td>Order Confirmed</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/admin/booking/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Phunsuk Wangdu</td>
                    <td>Seat cover, Android Infotainment & 4 more</td>
                    <td>Order Confirmed</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
            </table>
        </>
    )
}
const CcaDb = () => {
    return (
        <>
            <table style={{ width: '100%', marginTop: "10px" }}>
                <tr className="title_table">
                    <th>Booking ID</th>
                    <th>Car Details</th>
                    <th>Customer Details</th>
                    <th>Product Details</th>
                    <th>Rating & Review</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Phunsuk Wangdu</td>
                    <td>Seat cover, Android Infotainment & 4 more</td>
                    <td style={{ color: "#ED7D2B" }}><FaStar /><FaStar className="ml-1" /><FaStar className="ml-1" /><FaStar className="ml-1" /><FaStar className="ml-1" /></td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Phunsuk Wangdu</td>
                    <td>Seat cover, Android Infotainment & 4 more</td>
                    <td style={{ color: "#ED7D2B" }}><FaStar /><FaStar className="ml-1" /><FaStar className="ml-1" /><FaStar className="ml-1" /><FaStar className="ml-1" /></td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Phunsuk Wangdu</td>
                    <td>Seat cover, Android Infotainment & 4 more</td>
                    <td style={{ color: "#ED7D2B" }}><FaStar /><FaStar className="ml-1" /><FaStar className="ml-1" /><FaStar className="ml-1" /><FaStar className="ml-1" /></td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
            </table>
        </>
    )
}

const CcaCb = () => {
    return (
        <>
            <table style={{ width: '100%', marginTop: "10px" }}>
                <tr className="title_table">
                    <th>Booking ID</th>
                    <th>Car Details</th>
                    <th>Customer Details</th>
                    <th>Product Details</th>
                    <th>Amount</th>
                    <th>Cancellation Reason</th>
                    <th></th>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Phunsuk Wangdu</td>
                    <td>Seat cover, Android Infotainment & 4 more</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td>Wrongly Booked</td>
                    <td><div><Link to='/admin/booking/care&accesory/cancelbooking' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Phunsuk Wangdu</td>
                    <td>Seat cover, Android Infotainment & 4 more</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td>Wrongly Booked</td>
                    <td><div><Link to='/' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Phunsuk Wangdu</td>
                    <td>Seat cover, Android Infotainment & 4 more</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td>Wrongly Booked</td>
                    <td><div><Link to='/' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
            </table>
        </>
    )
}
const CcaRr = () => {
    return (
        <>
            <table style={{ width: '100%', marginTop: "10px" }}>
                <tr className="title_table">
                    <th>Booking ID</th>
                    <th>Car Details</th>
                    <th>Customer Details</th>
                    <th>Product Details</th>
                    <th>Amount</th>
                    <th>Return Status</th>
                    <th></th>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Phunsuk Wangdu</td>
                    <td>Seat cover, Android Infotainment & 4 more</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td>Return Confirmed</td>
                    <td><div><Link to='/admin/booking/care&accessory/return_requested' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Phunsuk Wangdu</td>
                    <td>Seat cover, Android Infotainment & 4 more</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td>Out for Pick Up</td>
                    <td><div><Link to='/' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Phunsuk Wangdu</td>
                    <td>Seat cover, Android Infotainment & 4 more</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td>Refund Initiated</td>
                    <td><div><Link to='/' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
            </table>
        </>
    )
}
const CcaR = () => {
    return (
        <>
            <table style={{ width: '100%', marginTop: "10px" }}>
                <tr className="title_table">
                    <th>Booking ID</th>
                    <th>Car Details</th>
                    <th>Customer Details</th>
                    <th>Product Details</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Phunsuk Wangdu</td>
                    <td>Seat cover, Android Infotainment & 4 more</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Phunsuk Wangdu</td>
                    <td>Seat cover, Android Infotainment & 4 more</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Phunsuk Wangdu</td>
                    <td>Seat cover, Android Infotainment & 4 more</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                    <td><div><Link to='/' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
            </table>
        </>
    )
}

export { CcaOb,CcaDb, CcaCb, CcaRr, CcaR, BookingCca1Title, BookingCca5Title, BookingCca6Title }