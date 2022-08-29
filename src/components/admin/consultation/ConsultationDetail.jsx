import React from 'react'
import { Link } from 'react-router-dom'
import notification from '../../../images/notification.png'
import profiledown from '../../../images/profiledown.png'
import useravatar from '../../../images/useravatar.png'
import edit_icon from '../../../images/edit.png'
import paper from '../../../images/paper.png'
import {useNavigate} from 'react-router-dom'
import { FaAngleLeft, FaPlus, FaAngleUp, FaAngleDown } from 'react-icons/fa'
const ConsultationDetail = () => {
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
                                <div>
                                    <Link to="/consultation/update/detail" style={{ textDecoration: 'none' }}><img src={edit_icon} className="cons_edit ml-3 mb-1" /></Link>
                                </div>
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
                        <div className="btn btn-book ml-3" style={{ fontSize: "15px" }}>Book Inception</div>
                    </div>
                    <div className="status_book d-flex justify-content-end"><b>Status: <span className="blueish">New Enquiry</span></b></div>
                </div>
                <div className="detail_1">
                    <div className="detail_box">
                        <table className="table_detail_outer" style={{ width: '100%', backgroundColor: "#F8F9FA", }}>
                            <tr className="table_detail_tite">
                                <th>Enquiry ID</th>
                                <th>Car Details</th>
                                <th>Custumor Details</th>
                                <th>Service Address</th>
                                <th style={{ width: '500px' }}>Enquiry for</th>
                            </tr>
                            <tr className="detail_row">
                                <td style={{ color: "#5D6186" }}><b style={{ fontSize: "14px" }}>123456</b><br></br><p style={{ fontSize: "12px" }}>21/01/2021-11:00 AM</p></td>
                                <td style={{ color: "#5D6186" }}><b style={{ fontSize: "14px" }}>Maruti XL6 Petrol</b><br></br><p style={{ fontSize: "12px" }}>Petrol</p></td>

                                <td style={{ color: "#5D6186" }}><b style={{ fontSize: "14px" }}>Vicky Kaushal</b><br></br><p style={{ fontSize: "12px" }}>8876459234</p></td>

                                <td>
                                    <Link to='/consultation/add/address' style={{ fontSize: "12px" }}>Add Adress</Link><br></br>
                                    <Link to='/consultation/add/pincode' style={{ fontSize: "12px" }}>Add Pincode</Link>
                                </td>

                                <td style={{ color: "#5D6186" }}>
                                    <b style={{ fontSize: "14px" }}>Clutch & Transimission, AC Service, Faukty Electrical, Body damage, Brakes & Wheels, Engines Issues, Suspension & Steering, Others</b>
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
                                    <div className="fifteen cr">
                                        <Link to='' style={{ textDecoration: 'none' }} ><FaPlus className="blueish mr-2" />Add Images</Link>
                                    </div>
                                </div>
                                <div className="cons_d1">
                                    <div className="cons_d2">
                                        <div>
                                            <FaAngleDown className="blueish" /> <span className="font-weight-bold">Car Engine</span>
                                        </div>
                                        <div>
                                            <FaAngleDown className="blueish" /> <span className="font-weight-bold">Clutch & Transmisiso</span>
                                        </div>
                                        <div>
                                            <FaAngleDown className="blueish" /> <span className="font-weight-bold">Suspension & Sterring</span>
                                        </div>
                                        <div>
                                            <FaAngleDown className="blueish" /> <span className="font-weight-bold">Break W& heels</span>
                                        </div>
                                        <div>
                                            <FaAngleDown className="blueish" /> <span className="font-weight-bold">Faulty Electricals</span>
                                        </div>
                                        <div>
                                            <FaAngleDown className="blueish" /> <span className="font-weight-bold">Body Fittings</span>
                                        </div>
                                        <div>
                                            <FaAngleDown className="blueish" /> <span className="font-weight-bold">AC Condition</span>
                                        </div>
                                        <div>
                                            <FaAngleDown className="blueish" /> <span className="font-weight-bold">Others</span>
                                        </div>
                                        <div>
                                            <div className="row">
                                                <div className="col-lg-6 col-12">
                                                    <button className="btn btn-blueish" onClick={()=>navigate('/consultation/detail/add_manually')}>Add Manually</button>
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <button className="btn btn-greenish" onClick={()=>navigate('/consultation/detail/collecting_requirement')}>Add Services</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-12">
                                <div className="d-flex ml-4">
                                    <div style={{ fontSize: "15px" }}><b>Service Pin Code</b></div>
                                    <div className="fifteen ml-3" sytle={{ float: "left" }}>
                                        <Link to='' style={{ textDecoration: 'none', borderBottom: '1px solid grey' }} ><b>400-001</b></Link>
                                    </div>
                                    <div className="orange ml-3">Change</div>
                                </div>
                                <div className="cons_d4 mt-1">
                                    <div className="cons_d3">

                                        <div className="d-flex justify-content-center ">
                                            <img src={paper} height="87px" width="66px" alt="Invoice" />
                                            <div className="ml-3">
                                                <div style={{ fontSize: "25px", color: "#00155A" }}>No Estimates Yet!</div>
                                                <p style={{ fontSize: "15px", color: "#5D6186" }}>Start adding service to view the price estimates</p>
                                            </div>

                                        </div>
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

export default ConsultationDetail