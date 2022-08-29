import {Link} from "react-router-dom"
import {FaAngleLeft} from 'react-icons/fa'
import React from 'react'


const BookingNuc1Title = () => {

    return (
        <div className="d-flex align-items-center">
            <div>
                <Link to="/admin/booking/new&used-car" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
            </div>
            <div>#123456</div>
        </div>
    )
}
const BookAl = () => {
    return (
        <>
            <table style={{ width: '100%', marginTop: "10px" }}>
                <tr className="title_table">
                    <th>Listing ID</th>
                    <th>Car Details</th>
                    <th>Listed By</th>
                    <th>All Leads</th>
                    <th>New Leads</th>
                    <th></th>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Classic Motors</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>999</span></td>
                    <td><span style={{ color: "#2650D8", fontSize: "15px" }}>999</span></td>
                    <td><div><Link to='/admin/booking/new&used-car/details' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Classic Motors</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>999</span></td>
                    <td><span style={{ color: "#2650D8", fontSize: "15px" }}>999</span></td>
                    <td><div><Link to='/' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
                <tr className="table_row">
                    <td>#123456</td>
                    <td>Maruti XL6 Petrol</td>
                    <td>Classic Motors</td>
                    <td><span style={{ color: "#438969", fontSize: "15px" }}>999</span></td>
                    <td><span style={{ color: "#2650D8", fontSize: "15px" }}>999</span></td>
                    <td><div><Link to='/' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                </tr>
            </table>
        </>
    )
}

export  {BookAl, BookingNuc1Title}