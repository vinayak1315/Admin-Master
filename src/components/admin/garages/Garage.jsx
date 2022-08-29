import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import { RiArrowDownSLine } from 'react-icons/ri'
import { VscAdd } from 'react-icons/vsc'
import { FaSlidersH, FaStar } from 'react-icons/fa'
import image from '../../../images/image.jpg'
import pencil from '../../../images/pencil.png'
import discount from '../../../images/discount.png'
import MetaData from '../../layout/MetaData'
import { useAlert } from 'react-alert'
import Loader from '../../layout/Loader'
import { useDispatch, useSelector } from "react-redux"
import { getAllGarages } from '../../../actions/GarageActions'

const bookings = [
    {
        title: "Pending",
        num: 100
    },
    {
        title: "Ongoing",
        num: 100
    },
    {
        title: "Deliverd",
        num: 100
    },
    {
        title: "Cancelled",
        num: 100
    },
    {
        title: "Declined",
        num: 100
    },
]

const Garage = () => {
    const navigate = useNavigate();
    const { garages, loading, error } = useSelector(state => state.allGarage)
    const alert = useAlert();
    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            alert.error(error)
        }
        const formData = new FormData();
        formData.set('action', 'all-vendors')
        dispatch(getAllGarages(formData))
    }, [error, dispatch])
    return (
        <>
            <MetaData title="Garages" />
            <Header title="Product & Services" />
            <div className="garage">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center"><span style={{ color: "#00155A", fontSize: "15px" }}>Nature</span><span className="ml-3" style={{ borderBottom: "2px solid #999999", fontSize: "12px", color: "#999999" }}>Service & Repairs / Wash & Detailing<span style={{ fontSize: "15px", color: "#000" }}><RiArrowDownSLine /></span></span></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center justify-content-between">
                            <div><span style={{ color: "#00155A", fontSize: "15px" }}>Category</span><span className="ml-3" style={{ borderBottom: "2px solid #999999", fontSize: "12px", color: "#999999" }}>Periodic Service / AC Service /…<span className="ml-4" style={{ fontSize: "15px", color: "#000" }}><RiArrowDownSLine /></span></span></div>
                            <div>
                                <div>
                                    <button className="btn btn_new_partner" onClick={() => navigate('/admin/add/partner/step-1')}><VscAdd style={{ fontSize: "14px" }} className="plus_icon" /><span className="ml-2" style={{ fontSize: "15px" }}>Add New Partner</span></button>
                                </div>
                            </div>
                            <div>
                                <div className="cons_icon"><FaSlidersH /></div>
                            </div>
                        </div>
                    </div>
                </div>
                {loading ? <Loader /> : (
                    <>
                        <div className="page_reducer" style={{height:"560px"}}>
                            {garages.map(data =>
                                <div className="row mt-3">
                                    <div className="col-lg-12">
                                        <div className="garage_box">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <div>
                                                                <img src={data.primaryImg} width="90px" height="90px" style={{ borderRadius: "4px" }} />
                                                            </div>
                                                            <div style={{ color: "#2650D8", fontSize: "15px" }} className="mt-2 ml-2">{data.vendorId}</div>
                                                        </div>
                                                        <div className="col-lg-9">
                                                            <div><span style={{ color: "#00155A", cursor: "pointer" }} onClick={() => navigate(`/admin/garage/profile/${data.vendorId}`)}><b>{data.garage_name}</b></span><span><img className="ml-2" src={pencil} width="15px" height="15px" /></span></div>
                                                            <div className="mt-1">
                                                                <FaStar style={{ color: "#FF9900", fontSize: "15px" }} />
                                                                <FaStar style={{ color: "#FF9900", fontSize: "15px" }} className="ml-1" />
                                                                <FaStar style={{ color: "#FF9900", fontSize: "15px" }} className="ml-1" />
                                                                <FaStar style={{ color: "#FF9900", fontSize: "15px" }} className="ml-1" />
                                                                <FaStar style={{ color: "#FF9900", fontSize: "15px" }} className="ml-1" />
                                                            </div>
                                                            <div style={{ color: "#5D6186", fontSize: "12px" }} className="mt-1">{data.phone}<span className="ml-2">{data.alternate_phone}</span></div>
                                                            <div className="mt-2" style={{ color: "#999999", fontSize: "12px" }}>{data.garage_address}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div style={{ borderLeft: "1px solid #000000", height: "100%" }}>
                                                        <div style={{ paddingLeft: "20px" }}>
                                                            <div className="row mb-1">
                                                                <div className="col-lg-6">
                                                                    <div style={{ color: "#00155A", fontSize: "15px" }}><b>All Bookings</b></div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div style={{ color: "#2650D8", fontSize: "15px" }} className="text-center"><b>90</b></div>
                                                                </div>
                                                            </div>
                                                            {bookings.map(booking =>
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div style={{ color: "#5D6186", fontSize: "12px" }}>{booking.title}</div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div style={{ color: "#2650D8", fontSize: "12px" }} className="text-center">{booking.num}</div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div style={{ borderLeft: "1px solid #000000", height: "100%", paddingLeft: "20px" }}>
                                                        <div style={{ color: "#00155A", fontSize: "15px" }}><b>Service & Repairs</b></div>
                                                        <div style={{ color: "#5D6186", fontSize: "12px" }} className="mt-2">Periodic Service / AC Service / Battery Care / Wheel Care / Denting & Painting / Mechanical Repairs / Inspection & Diagnostics / Road Side Assistance</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <span className="d-flex align-items-center">
                                                            <img src={discount} width="24px" height="25px" />
                                                            <span style={{ fontSize: "15px", color: "#B92100" }} className="ml-2">
                                                                Primary Offer
                                                            </span>
                                                            <span style={{ fontSize: "9px", color: "#00155A" }} className="ml-3 d-flex">
                                                                <input value="50% Off | TRYNEW" className="garage_input" />
                                                                <button className="btn btn-garage_update justify-content-center ml-2">UPDATE</button>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span style={{ color: "#5D6186", fontSize: "15px" }} className="mr-4">8.00 AM - 7.00 PM <span style={{ color: "#2650D8" }} className="ml-3">Open Today</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Garage