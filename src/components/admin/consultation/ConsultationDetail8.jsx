import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import notification from '../../../images/notification.png'
import profiledown from '../../../images/profiledown.png'
import useravatar from '../../../images/useravatar.png'
import { FaAngleLeft, FaStar, FaInfoCircle } from 'react-icons/fa'
import cancel_detail from '../../../images/cancel.png'


const ConsultationDetail8 = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className="header">
                <div className="header_section">
                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-center">
                            <div className="header_title d-flex align-items-center">
                                <div>
                                    <Link to="/consultation" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
                                </div>
                                <div>#123456</div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="header_search d-flex align-items-center">

                            </div>
                        </div>
                        <div className="col-lg-5 padding_remover">

                            <div className="Header_right d-flex align-items-center">
                                <div className="notification_icon d-flex justify-content-center align-items-center">
                                    <img src={notification} alt="notification" width="23px" height="25px" />
                                </div>
                                <div className="header_profile">
                                    <img src={useravatar} alt="avatar" width="48px" height="48px" />
                                    <img src={profiledown} alt="profile" width="14px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="cons_detail">
                <div className="consdetail_c1 d-flex justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div style={{ fontSize: "18px", flexGrow: 2 }}><b>Consultation Details</b></div>
                    </div>
                    <div className="status_book d-flex justify-content-end" style={{fontSize: "18px"}}><b>Status : <span className="blueish">Cancelled</span></b></div>
                </div>
                <div className="detail_1">
                    <div className="detail_box">
                        <table className="table_detail_outer" style={{ width: '105%', backgroundColor: "#F8F9FA" }}>
                            <tr className="table_detail_tite">
                                <th>Enquiry ID</th>
                                <th>Car Details</th>
                                <th>Custumor Details</th>
                                <th style={{ width: "290px" }}>Service Address</th>
                                <th style={{ width: '400px' }}>Enquiry for</th>
                            </tr>
                            <tr className="detail_row">
                                <td style={{ color: "#5D6186" }}><b style={{ fontSize: "14px" }}>123456</b><br></br><p style={{ fontSize: "12px" }}>21/01/2021-11:00 AM</p></td>
                                <td style={{ color: "#5D6186" }}><b style={{ fontSize: "14px" }}>Maruti XL6 Petrol</b><br></br><p style={{ fontSize: "12px" }}>Petrol</p></td>

                                <td style={{ color: "#5D6186" }}><b style={{ fontSize: "14px" }}>Vicky Kaushal</b><br></br><p style={{ fontSize: "12px" }}>8876459234</p></td>

                                <td>
                                    <div style={{ fontSize: "15px" }}>A-1234, Global Heights, Goregaon East, Mumbai, Maharashtra - 401100</div>
                                </td>

                                <td style={{ color: "#5D6186" }}>
                                    <b style={{ fontSize: "12px" }}>Clutch & Transimission, AC Service, Faukty Electrical, Body damage, Brakes & Wheels, Engines Issues, Suspension & Steering, Others</b>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="detail_filter">
                    <div className="consdetail_c1">
                        <div className="row">
                            <div className="col-lg-5 col-12">
                                <div className="d-flex ml-2">
                                    <div style={{ fontSize: "18px" }}><b>Mechanical Repairs</b></div>
                                    <div className="fifteen cr02 d-flex justify-content-end" style={{ width: "300px" }}>
                                        <div style={{ color: "#5D6186" }}>16 Images</div>
                                    </div>
                                </div>
                                <div className="cons_d1">
                                    <div className="cons_d2">
                                        <div className="d2_content">
                                            <div className="fifteen">
                                                <b>Car Engine</b>
                                                <p className="mgbt_rmv mt-1" style={{ color: "#5D6186" }} ><span style={{ fontSize: "14px" }}>Engine Mounting Replacement</span></p>
                                                <p className="mgbt_rmv" style={{ color: "#5D6186" }} ><span style={{ fontSize: "14px" }}>Fuel Pump Replacement</span></p>
                                            </div>
                                            <div className="fifteen mt-3">
                                                <b>Clutch & Transimission</b>
                                                <p className="mgbt_rmv mt-1" style={{ color: "#5D6186" }} ><span style={{ fontSize: "14px" }}>Feul Pump Replacement</span></p>
                                                <p className="mgbt_rmv mt-2" style={{ color: "#5D6186" }} ><span style={{ fontSize: "14px" }}>Starter Motor Repair</span></p>
                                            </div>
                                        </div>
                                        <div className="fifteen mt-3">
                                            <div className="d2_content d-flex">
                                                <div className="fifteen">
                                                    <b style={{ color: "#F45C3B" }}>Added Manually</b>
                                                    <p className="mgbt_rmv mt-1" style={{ color: "#5D6186" }} ><span style={{ fontSize: "14px" }}>Engine Repair</span></p>
                                                    <p style={{ fontSize: "12px", color: "#999999", width: "400px" }} className="mt-2">Complete engine overhauling and parts replacement, needs work to be finished in 1 week</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-12">
                                <div className="cancel_1">
                                    <div className="cancel_2 d-flex align-items-center">
                                        <div>
                                            <img src={cancel_detail} height="72px" width="72px"/>
                                        </div>
                                        <div style={{fontSize:"25px", fontWeight:"500"}} className="ml-4">Cancel Consultation</div>
                                    </div>
                                    <div style={{color:"#00155A", fontWeight:"600", fontSize:"15px", marginTop:"50px"}} class>May Book some other day</div>
                                    <div style={{color:"#5D6186", fontSize:"12px", marginTop: "15px" }}>Customer has difficulty in choice he will search for garage by him self</div>

                                    <div className="mt-4">
                                        <button className="btn btn-view" onClick={()=>navigate('/consultation/detail/request')}>View Estimates</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ConsultationDetail8