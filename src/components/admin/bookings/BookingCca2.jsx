import React from 'react'
import { EditBookingTitle } from './BookingComp'
import Header from '../Header'
import cut from '../../../images/cut.png'
import { BsCheckCircleFill, BsCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import HeaderNoSearch from '../../Header/HeaderNoSearch'
import cut_blue from '../../../images/cut_blue.png'
const BookingCca2 = () => {
    const navigate = useNavigate();
    return (
        <>
            <HeaderNoSearch title={<EditBookingTitle />} />
            <div className="page_reducer">
                <div className="booking1">
                    <div className="update_detail">
                        <div className="row">
                            <div className="col-lg-7">
                                <div style={{ fontSize: "18px" }}><b>Update Details</b></div>
                                <div className="row mt-4">
                                    <div className="col-lg-6 col-12">

                                        <div style={{ color: "#999999", fontWeight: "600", fontSize: "15px" }}>Booking ID</div>
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

                                        <div style={{ color: "#999999", fontWeight: "600", fontSize: "15px" }}>Booking Date, Time</div>
                                    </div>
                                    <div className="col-lg-6">

                                        <div style={{ color: "#5D6186", fontWeight: "600", fontSize: "15px" }}><b>21/01/2021-11.00 AM</b></div>

                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-lg-6">

                                        <div style={{ color: "#999999", fontWeight: "600", fontSize: "15px" }}>Appointment Date, Time Delivery Address<br /><span style={{ color: "#F45C3B", fontSize: "12px" }}>[Edit]</span></div>
                                    </div>
                                    <div className="col-lg-6">

                                        <div><span style={{ color: "#5D6186", fontSize: "15px" }}><b>A-1234, Global Heights, Goregaon East, Mumbai, Maharashtra - 401100</b></span></div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-lg-6">

                                        <div style={{ color: "#999999", fontWeight: "600", fontSize: "15px" }}>Ticket No.<br/><span style={{color:"#F45C3B", fontSize:"12px"}}>[Mark as Closed]</span></div>
                                    </div>
                                    <div className="col-lg-6">

                                        <div style={{ color: "#5D6186", fontWeight: "600", fontSize: "15px" }}><b>MG123456789</b><span style={{ fontSize: "11px", fontWeight: "400", color: "#999999" }}><br />21/01/2021-11.00 AM</span></div>

                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-lg-6 col-6">
                                        <div style={{ color: "#999999", fontWeight: "600", fontSize: "15px", cursor: "pointer" }} onClick={() => navigate('/admin/booking/care&accessory/cancel')} className="mt-3"><img src={cut} width="18px" height="18px" /><span className="ml-2" style={{ fontSize: "15px", color: "#B92100" }}><b>Cancel Booking</b></span></div>
                                    </div>
                                    <div className="col-lg-6 col-6">
                                        <div style={{ color: "#999999", fontWeight: "600", fontSize: "15px", cursor: "pointer" }} onClick={() => navigate('/admin/booking/care&accessory/return')} className="mt-3"><img src={cut_blue} width="18px" height="18px" /><span className="ml-2" style={{ fontSize: "15px", color: "#2650D8" }}><b>Initiate Return</b></span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-12">
                                <div style={{ fontSize: "18px" }} className="ml-4"><b>Status: <span className="blueish ml-2">Out For Delivery</span></b><span className="ml-2" style={{ color: "#F45C3B", fontSize: "14px" }}>[Update]</span></div>
                                <div className="update_b2">
                                    <div><BsCheckCircleFill style={{ color: "#53BD8C", width: "20px", height: "20px" }} /><span style={{ fontSize: "15px" }} className="ml-3">Order Confirmed</span></div>
                                    <div className="mt-4"><BsCheckCircleFill style={{ color: "#53BD8C", width: "20px", height: "20px" }} /><span style={{ fontSize: "15px" }} className="ml-3">Packed</span></div>
                                    <div className="mt-4"><BsCheckCircleFill style={{ color: "#53BD8C", width: "20px", height: "20px" }} /><span style={{ fontSize: "15px" }} className="ml-3">Shipped</span></div>
                                    <div className="mt-4"><BsCircle style={{ color: "#000", width: "20px", height: "20px" }} /><span style={{ fontSize: "15px", color: "#2650D8" }} className="ml-3"><u>Out for Delivery</u></span></div>
                                    <div className="mt-4"><BsCircle style={{ color: "#000", width: "20px", height: "20px" }} /><span style={{ fontSize: "15px", color: "#999999" }} className="ml-3">Delivered</span></div>


                                    <div className="row mt-5">
                                        <div className="col-lg-6 col-6">
                                            <button className="btn btn-update_cons text-center" style={{ fontSize:"12px", width: "80%" }}>RESET</button>
                                        </div>
                                        <div className="col-lg-6 col-6">
                                            <button className="btn btn-update_cons text-center" style={{ fontSize:"12px",width: "80%" }}>SAVE</button>
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

export default BookingCca2