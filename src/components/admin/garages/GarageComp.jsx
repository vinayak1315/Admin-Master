import { FaAngleLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import chat from '../../../images/chat.png'
import { FaStar } from 'react-icons/fa'

const AddPartnerTitle = () => {
    return (
        <>
            <div className="d-flex align-items-center">
                <div>
                    <Link to="/admin/garages" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
                </div>
                <div>Add Partner</div>
            </div>
        </>
    )
}
const AddPartnerTitle1 = () => {
    return (
        <>
            <div className="d-flex align-items-center">
                <div>
                    <Link to="/admin/add/partner/step-1" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
                </div>
                <div>Add Partner</div>
            </div>
        </>
    )
}
const AddPartnerTitle2 = () => {
    return (
        <>
            <div className="d-flex align-items-center">
                <div>
                    <Link to="/admin/add/partner/step-2" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
                </div>
                <div>Add Partner</div>
            </div>
        </>
    )
}
const AddPartnerTitle3 = () => {
    return (
        <>
            <div className="d-flex align-items-center">
                <div>
                    <Link to="/admin/add/partner/step-3" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
                </div>
                <div>Add Partner</div>
            </div>
        </>
    )
}
const Garage1Title = () => {
    return (
        <>
            <div className="d-flex align-items-center">
                <div>
                    <Link to="/admin/garages" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
                </div>
                <div>#210234 / Mahindra First Choice</div>
            </div>
        </>
    )
}
const GarageNav = () => {
    const [active, setActive] = useState()
    const navigate = useNavigate();
    return (
        <div>
            <button className={active === 0 ? "btn btn-gprofile-01" : "btn btn-gprofile-02"} onClick={() => { setActive(0); navigate('/admin/garage/profile') }}>Profile</button>
            <button className={active === 1 ? "btn btn-gprofile-01" : "btn btn-gprofile-02"} onClick={() => { setActive(1); navigate('/admin/garage/bookings') }}>Bookings</button>
            <button className={active === 2 ? "btn btn-gprofile-01" : "btn btn-gprofile-02"} onClick={() => { setActive(2); navigate('/admin/garage/services') }}>Services</button>
            <button className={active === 3 ? "btn btn-gprofile-01" : "btn btn-gprofile-02"} onClick={() => { setActive(3); navigate('/admin/garage/tickets') }}>Tickets</button>
            <button className={active === 4 ? "btn btn-gprofile-01" : "btn btn-gprofile-02"} onClick={() => { setActive(4); navigate('/admin/garage/finance') }}>Finance</button>
            <button className={active === 5 ? "btn btn-gprofile-01" : "btn btn-gprofile-02"} onClick={() => { setActive(5); navigate('/admin/garage') }}>Teams</button>
            <button className={active === 6 ? "btn btn-gprofile-01" : "btn btn-gprofile-02"} onClick={() => { setActive(6); navigate('/admin/garage/reviews') }}>Reviews</button>
            <button className={active === 7 ? "btn btn-gprofile-01" : "btn btn-gprofile-02"} onClick={() => { setActive(7); navigate('/admin/garage') }}>Offers</button>
            <button className={active === 8 ? "btn btn-gprofile-01" : "btn btn-gprofile-02"} onClick={() => { setActive(8); navigate('/admin/garage') }}>Account Info</button>
        </div>
    )
}
const GarageOg = () => {
    const bookingsData = [
        {}, {}, {}, {}, {}, {}
    ]
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
                {bookingsData.map(data => (
                    <tr className="table_row">
                        <td>#123456</td>
                        <td>Maruti XL6 Petrol</td>
                        <td>21/01/2021-11.00 AM</td>
                        <td>Basic Service</td>
                        <td>Work In Progress</td>
                        <td><span style={{ color: "#438969", fontSize: "15px" }}>Paid ₹6,459</span></td>
                        <td><div><Link to={`/admin/garages`} style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                    </tr>
                ))}
            </table>
        </>
    )
}
const ActiveTickets = () => {
    const datas = [
        {}, {}, {}, {}, {}, {}
    ]
    const navigate = useNavigate();
    return (
        <>
            <table style={{ width: '100%' }}>
                <tr className="title_table">
                    <th>Ticket No.</th>
                    <th>Booking ID</th>
                    <th>Support by</th>
                    <th>Reason</th>
                    <th></th>
                    <th></th>
                </tr>
                {datas.map(data =>
                    <tr className="sups_row">
                        <td>#123456</td>
                        <td>#123456</td>
                        <td>Ankit Sharma</td>
                        <td>Garage is taking too much time to complete the service</td>
                        <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                        <td><div className="sup_chat" style={{ width: "44px", height: "44px" }} onClick={() => navigate('/support/chats')}><img src={chat} width="19px" height="17px" /></div></td>
                    </tr>
                )}
            </table>
        </>
    )
}
const ClosedTickets = () => {
    const datas = [
        {}, {}, {}, {}, {}, {}
    ]
    const navigate = useNavigate();
    return (
        <>
            <table style={{ width: '100%' }}>
                <tr className="title_table">
                    <th>Ticket No.</th>
                    <th>Booking ID</th>
                    <th>Support by</th>
                    <th>Reason</th>
                    <th></th>
                    <th></th>
                </tr>
                {datas.map(data =>
                    <tr className="sups_row">
                        <td>#123456</td>
                        <td>#123456</td>
                        <td>Ankit Sharma</td>
                        <td>Garage is taking too much time to complete the service</td>
                        <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                        <td>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="mt-1">3.0</div>
                                <div className="ml-3"><FaStar style={{ fontSize: "21px", color: "#ED7D2B" }} /></div>
                            </div>
                        </td>
                    </tr>
                )}
            </table>
        </>
    )
}
const Payments = () => {
    const datas = [
        {}, {}, {}, {}, {}, {}
    ]
    const navigate = useNavigate();
    return (
        <>
            <table style={{ width: '100%' }} className="mt-3">
                <tr className="title_table">
                    <th>Date & Time</th>
                    <th>Booking ID</th>
                    <th>Car Details</th>
                    <th>Transaction ID</th>
                    <th>Payment Mode</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
                {datas.map(data =>
                    <tr className="sups_row">
                        <td>21/01/2021-11.00 AM</td>
                        <td>#123456</td>
                        <td>Maruti XL6 Petrol</td>
                        <td>BHGG1274588</td>
                        <td>UPI Paytm</td>
                        <td><span style={{color:"#2650D8", fontSize:"15px"}}>₹6,459</span></td>
                        <td><div><Link to='/admin/garages' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                    </tr>
                )}
            </table>
        </>
    )
}
const Settlements = () => {
    const datas = [
        {}, {}, {}, {}, {}, {}
    ]
    const navigate = useNavigate();
    return (
        <>
            <table style={{ width: '100%' }} className="mt-3">
                <tr className="title_table">
                    <th>Date & Time</th>
                    <th>Transaction ID</th>
                    <th>Settlement Amount</th>
                    <th>MG Commission</th>
                    <th>Total Amount</th>
                    <th></th>
                </tr>
                {datas.map(data =>
                    <tr className="sups_row">
                        <td>21/01/2021-11.00 AM</td>
                        <td>#123456</td>
                        <td><span style={{color:"#5D6186", fontSize:"15px"}}>₹6,459</span></td>
                        <td><span style={{color:"#5D6186", fontSize:"15px"}}>₹6,459</span></td>
                        <td><span style={{color:"#2650D8", fontSize:"15px"}}>₹6,459</span></td>
                        <td><div><Link to='/admin/garages' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                    </tr>
                )}
            </table>
        </>
    )
}
export { AddPartnerTitle, AddPartnerTitle1, AddPartnerTitle2, AddPartnerTitle3, Garage1Title, GarageNav, GarageOg, ActiveTickets, ClosedTickets, Payments, Settlements }