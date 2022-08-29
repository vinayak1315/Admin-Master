import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../../../images/image.jpg'
import discount from '../../../images/discount.png'

import ConsultationHeader from '../../Header/ConsultationHeader'
import { FaAngleLeft, FaPlus, FaAngleUp, FaAngleDown, FaStar, FaInfoCircle, FaCarSide } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { ImLoop } from 'react-icons/im'

const ConsultationDetail6 = () => {

    const navigate = useNavigate();
    return (
        <>
            <ConsultationHeader/>
            <div className="cons_detail">
                <div className="consdetail_c1 d-flex justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div style={{ fontSize: "18px", flexGrow: 2 }}><b>Consultation Details</b></div>
                    </div>
                    <div className="status_book d-flex justify-content-end"><b>Status : <span className="blueish">Estimates Shared</span></b></div>
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
                                <div className="row">
                                    <div className="col-lg-6 col-6">
                                        <div className="d-flex">
                                            <div style={{ fontSize: "15px" }}><b>All Estimates (6)</b></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="d-flex justify-content-end">
                                            <div className="btn btn-cons-can mr-3" style={{ fontSize: "15px", backgroundColor: "#F45C3B" }}>Reset</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cons_d5 mt-3">
                                    <div className="row">
                                        <div className="col-lg-12 col-12">
                                            <div className="row">
                                                <div className="col-6 col-lg-6">
                                                    <div className="d-flex">
                                                        <img src={image} height="80px" width="80px" className="img_d5" />
                                                        <div className="ml-3">
                                                            <div>
                                                                <div style={{ color: "#00155A", fontSize: "18px" }}><b>Mahindra First Choice</b></div>
                                                                <div style={{ fontSize: "11px", color: "#999999" }}><HiOutlineLocationMarker style={{ width: "12px", height: "14px" }} />Kandi Vali East 400 101 | 900 mtrs</div>
                                                            </div>
                                                            <div>
                                                                <FaStar style={{ color: "#FF9900", width: "14px", height: "14px" }} className="mr-1" />
                                                                <FaStar style={{ color: "#FF9900", width: "14px", height: "14px" }} className="mr-1" />
                                                                <FaStar style={{ color: "#FF9900", width: "14px", height: "14px" }} className="mr-1" />
                                                                <FaStar style={{ color: "#FF9900", width: "14px", height: "14px" }} className="mr-1" />
                                                                <FaStar style={{ color: "#FF9900", width: "14px", height: "14px" }} className="mr-1" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-6">
                                                    <div className="d-flex justify-content-end mt-2">
                                                        <div style={{ fontSize: "18px", color: "#2650D8" }}><b>Rs 6459</b> <span><FaInfoCircle /></span><div style={{ fontSize: "11px", color: "#F45C3B" }} >for 3 Service</div></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-12">
                                            <div className="row box_d5">
                                                <div className="col-lg-6 col-6">
                                                    <div style={{ fontSize: "14px", color: "#5D6186" }}><HiOutlineLocationMarker /><span className="ml-2"><ImLoop /></span><span className="ml-2">Free Pick-up & Drop</span></div>
                                                </div>
                                                <div className="col-lg-6 col-6">
                                                    <div className="d-flex justify-content-end">
                                                        <Link to='/consultation/success' style={{ textDecoration: 'none', fontSize: "12px", backgroundColor: "#B92100" }} className="btn btn-cons-can mr-2">DELETE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-12">
                                            <div className="discount_banner" style={{ color: "#B92100", fontSize: "15px" }}>
                                                <img src={discount} width="25px" height="25px" /><span className="ml-2">50% Off I Use Code: TRYNEW</span>
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
export default ConsultationDetail6