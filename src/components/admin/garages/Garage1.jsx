import React, { useState, useEffect } from 'react'
import MetaData from '../../layout/MetaData'
import Header from '../../Header/HeaderNoSearch'
import { Garage1Title, GarageNav } from './GarageComp'
import image from '../../../images/image.jpg'
import { FaSlidersH, FaStar } from 'react-icons/fa'
import pencil from '../../../images/pencil.png'
import { useNavigate } from 'react-router-dom'
import { BsToggleOn } from 'react-icons/bs'
import { useAlert } from 'react-alert'
import Loader from '../../layout/Loader'
import { useDispatch, useSelector } from "react-redux"
import { getSingleGarage } from '../../../actions/GarageActions'
import { useParams } from 'react-router-dom'

const Garage1 = () => {
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
    const navigate = useNavigate();
    const { allGarages, loading, error } = useSelector(state => state.allGarage)
    const alert = useAlert();
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        if (error) {
            alert.error(error)
        }
        const formData = new FormData();
        formData.set('action', 'vendor-info')
        formData.set('vendorId', id)
        dispatch(getSingleGarage(formData))
    }, [error, dispatch, id])
    return (
        <>
            <MetaData title="Garage Profile" />
            <Header title={<Garage1Title />} />
            <div className="page_reducer">
                <div className="garage1">
                    <div className="d-flex align-items-center justify-content-between mt-2">
                        <GarageNav />
                        <div style={{ color: "#53BD8C", fontSize: "35px", cursor: "pointer" }}><BsToggleOn /></div>
                    </div>
                    {loading ? <Loader /> : (
                        <>
                            {allGarages.map(data =>
                                <div className="garage1_box length_reducer mt-2">
                                    <div className="d-flex justify-content-between">
                                        <img src={image} alt="logo" width="468px" height="185px" />
                                        <img src={image} alt="logo" width="468px" height="185px" className="ml-2" />
                                        <img src={image} alt="logo" width="468px" height="185px" className="ml-2" />
                                        <img src={image} alt="logo" width="468px" height="185px" className="ml-2" />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <img src={image} alt="icon" width="80px" height="80px" className="garage1_img" />
                                        <div className="d-flex justify-content-center align-items-center" style={{ width: "100px", borderRadius: "5px", backgroundColor: "#4EE59D", color: "#00155A", fontSize: "15px", height: "30px", margin: "10px" }}>{data.vendorId}</div>
                                    </div>
                                    <div className="garage1_box_2">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="row">
                                                    <div className="col-lg-8">
                                                        <div><span style={{ color: "#00155A", cursor: "pointer" }} onClick={() => navigate('/admin/garage/profile')}><b style={{ fontSize: "18px" }}>Mahindra First Choice</b></span><span><img className="ml-2" src={pencil} width="15px" height="15px" /></span></div>
                                                        <div className="mt-1">
                                                            <FaStar style={{ color: "#FF9900", fontSize: "15px" }} />
                                                            <FaStar style={{ color: "#FF9900", fontSize: "15px" }} className="ml-1" />
                                                            <FaStar style={{ color: "#FF9900", fontSize: "15px" }} className="ml-1" />
                                                            <FaStar style={{ color: "#FF9900", fontSize: "15px" }} className="ml-1" />
                                                            <FaStar style={{ color: "#FF9900", fontSize: "15px" }} className="ml-1" />
                                                        </div>
                                                        <div style={{ color: "#5D6186", fontSize: "12px" }} className="mt-1">{data.phone}<span className="ml-2">{data.alternate_phone}</span></div>
                                                        <div className="mt-2 mb-2" style={{ color: "#999999", fontSize: "12px" }}>{data.name}, {data.city}</div>
                                                        <div>
                                                            <span style={{ color: "#5D6186", fontSize: "12px" }} className="mr-4">8.00 AM - 7.00 PM <span style={{ color: "#2650D8" }} className="ml-3">Open Today</span></span>
                                                        </div>
                                                        <div className="d-flex justify-content-between mt-4">
                                                            <div style={{ color: "#00155A", fontSize: "12px" }}><b>Owner</b></div>
                                                            <div style={{ color: "#5D6186", fontSize: "12px" }}>Amit Bhasin- 9876543211</div>
                                                        </div>
                                                        <div className="d-flex justify-content-between mt-4">
                                                            <div style={{ color: "#00155A", fontSize: "12px" }}><b>Manager</b></div>
                                                            <div style={{ color: "#5D6186", fontSize: "12px" }}>Amit Bhasin- 9876543211</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4" style={{ borderRight: "1px solid #999999", borderLeft: "1px solid #999999" }}>
                                                <div className="" style={{ height: "100%" }}>
                                                    <div>
                                                        <div style={{ color: "#00155A", fontSize: "18px" }}><b>Nature</b></div>
                                                        <div style={{ color: "#5D6186", fontSize: "12px" }}><b>Service & Repairs</b></div>
                                                        <div style={{ color: "#999999", fontSize: "12px" }}>Periodic Service / AC Service / Battery Care / Wheel Care / Denting & Painting / Mechanical Repairs / Inspection & Diagnostics / Road Side Assistance</div>
                                                    </div>
                                                    <div className="mt-5">
                                                        <div style={{ color: "#00155A", fontSize: "18px" }}><b>Amenities</b></div>
                                                        <div style={{ color: "#999999", fontSize: "12px" }}>Service Warranty/ OEM and OES Parts Used/ Free Pick Up and Drop Off/ Customer Waiting Lounge/ Free Inspection/ Shaded Workshop/ Pick Up and Drop Chargeable/ Self Drive IN</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="" style={{ height: "100%" }}>
                                                    <div>
                                                        <div className="d-flex justify-content-between mb-2" style={{ width: "320px" }}>
                                                            <div className="">
                                                                <div style={{ color: "#00155A", fontSize: "18px" }}><b>All Bookings</b></div>
                                                            </div>
                                                            <div className="">
                                                                <div style={{ color: "#2650D8", fontSize: "18px" }} className="text-center"><b>90</b></div>
                                                            </div>
                                                        </div>
                                                        {bookings.map(booking =>
                                                            <div className="d-flex justify-content-between" style={{ width: "320px" }}>
                                                                <div className="">
                                                                    <div style={{ color: "#5D6186", fontSize: "12px" }}>{booking.title}</div>
                                                                </div>
                                                                <div className="">
                                                                    <div style={{ color: "#2650D8", fontSize: "12px" }} className="text-center">{booking.num}</div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <div className="mt-4" style={{ color: "#00155A", fontSize: "18px" }}><b>Service Pincodes</b></div>
                                                        <div style={{ color: "#999999", fontSize: "12px" }}>401107 / 401105 / 401103 / 401102 / 401101</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Garage1