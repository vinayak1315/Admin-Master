import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import notification from '../../../images/notification.png'
import profiledown from '../../../images/profiledown.png'
import useravatar from '../../../images/useravatar.png'
import edit_icon from '../../../images/edit.png'
import cut from '../../../images/cut.png'

import { FaAngleLeft, FaPlus, FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { BsCheckCircleFill, BsCircle } from 'react-icons/bs'

const ConsultationDetail7 = () => {
    const [tick, setTick] = useState('BsCheckCircleFill');
    const [unTick, setUnTick] = useState("")
    return (
        <>
            <div className="header">
                <div className="header_section">
                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-center">
                            <div className="header_title d-flex align-items-center">
                                <div>
                                    <Link to="/consultation/detail" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
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
            <div className="update_detail">
                <div className="update_d1">
                    <div className="row">
                        <div className="col-lg-7">
                            <div style={{ fontSize: "18px" }}><b>Update Details</b></div>
                            <div className="row mt-4">
                                <div className="col-lg-6 col-12">

                                    <div style={{ color: "#999999", fontWeight: "600", fontSize: "15px" }}>Enquiry ID</div>
                                </div>
                                <div className="col-lg-6">

                                    <div style={{ color: "#5D6186", fontWeight: "600", fontSize: "15px" }}><b>12345678</b><br /><span style={{ fontSize: "11px", fontWeight: "400", color: "#999999" }}>21/01/2021-11:00 AM</span></div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-6">

                                    <div style={{ color: "#999999", fontWeight: "600", fontSize: "15px" }}>Car Details</div>
                                </div>
                                <div className="col-lg-6">

                                    <div style={{ color: "#5D6186", fontWeight: "600", fontSize: "15px" }}><b>Maruti XL6 Petrol</b><br /><span style={{ fontSize: "11px", fontWeight: "400", color: "#999999" }}>MHO4AB1234</span></div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-6">

                                    <div style={{ color: "#999999", fontWeight: "600", fontSize: "15px" }}>Customer Details</div>
                                </div>
                                <div className="col-lg-6">

                                    <div style={{ color: "#5D6186", fontWeight: "600", fontSize: "15px" }}><b>Vicky Kaushal</b><br /><span style={{ fontSize: "11px", fontWeight: "400", color: "#999999" }}>8876453234</span></div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-6">

                                    <div style={{ color: "#999999", fontWeight: "600", fontSize: "15px" }}>Service Address</div>
                                </div>
                                <div className="col-lg-6">

                                    <div style={{ color: "#5D6186", fontWeight: "600", fontSize: "15px" }}>A-1234, Global Heights, Goregaon East, Mumbai, Maharashtra - 401100</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-6">

                                    <div style={{ color: "#999999", fontWeight: "600", fontSize: "15px" }}>Consultant's Name</div>
                                </div>
                                <div className="col-lg-6">

                                    <div style={{ color: "#5D6186", fontWeight: "600", fontSize: "15px" }}><b>Prakash Raj</b><span style={{ fontSize: "11px", fontWeight: "400", color: "#999999" }}><br />9876543210</span></div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-6">

                                    <div style={{ color: "#999999", fontWeight: "600", fontSize: "15px" }}>Enquiry for</div>
                                </div>
                                <div className="col-lg-6">

                                    <div style={{ color: "#5D6186", fontWeight: "600", fontSize: "15px" }}>Clutch & Transimission, AC Service, Faukty Electrical, Body damage, Brakes & Wheels, Engines Issues, Suspension & Steering, Others</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-12 col-12">
                                    <div style={{ color: "#999999", fontWeight: "600", fontSize: "15px" }}><img src={cut} width="18px" height="18px" /><span  className="ml-2" style={{ fontSize: "15px", color: "#B92100" }}><b>Cancel Consultation</b></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12">
                            <div style={{ fontSize: "18px" }} className="ml-4"><b>Status: <span className="blueish ml-2">Collecting Estimates</span></b><span className="ml-2" style={{ color: "#F45C3B", fontSize: "14px" }}>[Update]</span></div>
                            <div className="update_b2">
                                <div><BsCheckCircleFill style={{ color: "#53BD8C", width: "20px", height: "20px" }} /><span style={{ fontSize: "15px" }} className="ml-3">New Enquiry</span></div>
                                <div className="mt-4"><BsCheckCircleFill style={{ color: "#53BD8C", width: "20px", height: "20px" }} /><span style={{ fontSize: "15px" }} className="ml-3">Collecting Requirements</span></div>
                                <div className="mt-4"><BsCheckCircleFill style={{ color: "#53BD8C", width: "20px", height: "20px" }} /><span style={{ fontSize: "15px" }} className="ml-3">Booked Inception</span></div>
                                <div className="mt-4"><BsCircle style={{ color: "#000", width: "20px", height: "20px" }} /><span style={{ fontSize: "15px", color:"#2650D8" }} className="ml-3"><u>Collecting Estimates</u></span></div>
                                <div className="mt-4"><BsCircle style={{ color: "#000", width: "20px", height: "20px" }} /><span style={{ fontSize: "15px", color:"#999999" }} className="ml-3">Estimates Shared</span></div>
                                <div className="mt-4"><BsCircle style={{ color: "#000", width: "20px", height: "20px" }} /><span style={{ fontSize: "15px", color:"#999999"  }} className="ml-3">Completed</span></div>
                                
                                <div className="row mt-5">
                                    <div className="col-lg-6 col-6">
                                        <button className="btn btn-update_cons text-center" style={{ width: "80%" }}>Reset</button>
                                    </div>
                                    <div className="col-lg-6 col-6">
                                        <button className="btn btn-update_cons text-center" style={{ width: "80%" }}>Save</button>
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

export default ConsultationDetail7