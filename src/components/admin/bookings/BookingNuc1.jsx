import React from 'react'
import { BookingNuc1Title } from './BookingNucComp'
import Header from '../Header'
import image from '../../../images/image.jpg'
const BookingNuc1 = () => {
    return (
        <>
            <Header title={<BookingNuc1Title />} />
            <div className="page_reduce">
                <div className="bookingnuc1">
                    <div className="book_nuc1">
                        <div className="row">
                            <div className="col-lg-8 col-9">
                                <div style={{ color: "#2650D8", fontSize: "12px" }}>#12345</div>
                                <div className="d-flex">
                                    <img src={image} height="120px" width="120px" style={{ borderRadius: "10px" }} />
                                    <div className="ml-3">
                                        <div><b style={{ fontSize: "15px", color: "#00155A" }}>2016 Hyundai Creta</b></div>
                                        <div>
                                            <span style={{ color: "#5D6186", fontSize: "10px", marginTop: "-10px" }}>1.6 SX Plus AT Petrol</span><span className="ml-1" style={{ color: "#999999", fontSize: "10px" }}>Automatic</span>
                                        </div>
                                        <div style={{ color: "#5D6186", fontSize: "12px" }}>
                                            <li>12300 kms</li>
                                            <li>2017</li>
                                            <li>Petrol</li>
                                            <li>1st Owner</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="booknuc_box1">
                                    <div style={{ color: "#2650D8", fontSize: "15px" }}><b>₹6,45,934</b></div>
                                    <div style={{ color: "#5D6186", fontSize: "12px" }}>Classic Cars, Thane</div>
                                    <div><span style={{ color: "#999999", fontSize: "12px" }}>Partner ID:</span><span style={{ color: "#2650D8", fontSize: "12px" }}>#123454</span></div>
                                    <div style={{ marginTop: "40px" }}><span style={{ color: "#00155A", fontSize: "15px" }}><b>All Leads:</b></span> <span style={{ color: "#2650D8", fontSize: "15px" }}>999</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="booknuc_table_container">
                        <table style={{ width: '100%', marginTop: "10px" }}>
                            <tr className="book_nuc_table1" style={{color:"#2650D8", fontSize:"18px", borderBottom:"2px solid #99999980"}}>
                                <th>Offered by</th>
                                <th>Offer Contact</th>
                                <th>Amount</th>
                                <th>Offer Date & Time</th>
                                <th>Lead Type</th>
                            </tr>
                            <tr className="book_nuc_table2" style={{color:"#5D6186", fontSize:"15px"}}>
                                <td>Alex Morgan</td>
                                <td>8876543465</td>
                                <td><span style={{color:"#438969", fontSize:"15px"}}>₹6,459</span></td>
                                <td>21/01/2021-11.00 AM</td>
                                <td><span style={{color:"#438969", fontSize:"15px"}}>NEW</span></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BookingNuc1