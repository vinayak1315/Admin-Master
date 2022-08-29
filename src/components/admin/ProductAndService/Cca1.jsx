// Service And Repair
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import image from '../../../images/image.jpg'
import { GoDiffAdded } from 'react-icons/go'
import { IoMdCheckboxOutline } from 'react-icons/io'
import { MdOutlineCancel } from 'react-icons/md'
import { CcaTitle, FreshnersComp } from './PasComp'
import { RiDeleteBin5Line } from 'react-icons/ri'

import sar_cross from '../../../images/sar_cross.png'
const Cca1 = () => {
    const services = [
        {
            title: "Freshners",
            count: 1500,
            total: 912,
            complete: 900,
            ongoing: 12,
            page: FreshnersComp
        },
        {
            title: 'Seat Covers',
            count: 1500,
            total: 912,
            complete: 900,
            ongoing: 12,
            width: "40px",
            height: "35px"
        },
        {
            title: "Infotainment",
            count: 1500,
            total: 912,
            complete: 900,
            ongoing: 12,
            width: "32px",
            height: "35px"
        },
        {
            title: "Music Systems",
            count: 1500,
            total: 912,
            complete: 900,
            ongoing: 12,
            width: "38px",
            height: "35px"
        },
        {
            title: "Floor Mats",
            count: 1500,
            total: 912,
            complete: 900,
            ongoing: 12,
            width: "35px",
            height: "35px"
        },
        {
            title: "Cameras & more",
            count: 1500,
            total: 912,
            complete: 900,
            ongoing: 12,
            width: "33px",
            height: "33px"
        },
        {
            title: "Auto Styling",
            count: 1500,
            total: 912,
            complete: 900,
            ongoing: 12,
            width: "33px",
            height: "35px"
        },
        {
            title: "Auto Care Products",
            count: 1500,
            total: 912,
            complete: 900,
            ongoing: 12,
            width: "39px",
            height: "36px"
        }
    ]
    const sidecontents = [
        {
            title: "Godrej Aer Twist Cool Air Freshener (60 ml)",
            content: "Every 5000 Kms or 3 months",
            point: 9,
            id: 1
        }
    ]
    const [Page, setPage] = useState({ Page: FreshnersComp });
    const [option, setOption] = useState(0);
    const navigate = useNavigate();
    return (
        <>
            <Header title={<CcaTitle />} />
            <div className="row p2_row">
                <div className="col-5 col-lg-4 count_box">
                    <div className="mt-2 text-center mb-2 mg_btn" style={{ width: "100%" }}>
                        <button className="btn mg_btn" style={{ width: "100%" }} onClick={()=>navigate('/add/product')}>ADD NEW PRODUCT</button>
                    </div>
                    {services.map(service => (
                        <div className="sar_box" style={{ cursor: "pointer" }} onClick={() => setPage({ Page: service.page })}>
                            <div className="row">
                                <div className="col-6 col-lg-6">
                                    <div className="d-flex align-items-center" style={{ height: "60px" }}>
                                        <div className='ml-3' style={{ fontSize: "12px", color: "#00155A" }}><b>{service.title}</b><br /><span style={{ color: "#5D6186", fontSize: "10px" }}>Total Listing: {service.count}</span></div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-6 side_border">
                                    <span style={{ fontSize: "12px", color: "#00155A" }}>All Bookings</span><br /><div style={{ fontSize: "15px", color: "#2650D8" }}>{service.total}</div><div style={{ fontSize: "12px" }}><span style={{ color: "#438969" }}>{service.complete} + </span><span style={{ color: "#ED7D2B" }}>{service.ongoing}</span></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-lg-7 col-7">
                    <div className="add_deal mt-1">
                        <div className="sar_box1">
                            <div className="row p2_row">
                                <div className="col-lg-12 col-12 padding_remover">
                                    <div className="row">
                                        <div className="col-lg-7 col-7">
                                            <div className="cca_01">
                                                <div className="row">
                                                    <div className="col-4 col-lg-4">
                                                        <div><img src={image} width="120px" height="120opx" className="cca_img" /></div>
                                                    </div>
                                                    <div className="col-lg-6 col-6">
                                                        <div><b style={{ color: "#00155A" }}>Godrej Aer Twist Cool Air Freshener (60 ml)</b></div>
                                                        <div><span style={{ color: "#2650D8", fontSize: "12px" }}>Line 1</span><span style={{ color: "#5D6186", fontSize: "12px", marginLeft: "10px" }}>fragrant for 60 days</span></div>
                                                        <div><span style={{ color: "#2650D8", fontSize: "12px" }}>Line 2</span><span style={{ color: "#5D6186", fontSize: "12px", marginLeft: "10px" }}>fragrant for 60 days</span></div>
                                                    </div>
                                                    <div className="col-lg-2 col-2">
                                                        <span style={{ fontSize: "15px", color: "#F45C3B" }}>[Edit]</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5 col-lg-5">
                                            <div className="cca_02 d-flex  flex-column justify-content-center">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <span style={{ color: "#2650D8", fontSize: "15px", marginTop: "50px" }}>Actual Price</span>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div style={{ color: "#2650D8", fontSize: "15px" }}>₹6459<span style={{ fontSize: "15px", color: "#F45C3B" }} className="ml-2">[Edit]</span></div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <span style={{ color: "#2650D8", fontSize: "15px" }}>MG Price</span>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div style={{ color: "#2650D8", fontSize: "15px" }}>₹6459<span style={{ fontSize: "15px", color: "#F45C3B" }} className="ml-2">[Edit]</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-lg-12">
                                            <div className="sar_show">
                                                <div style={{ color: "#00155A", fontSize: "15px" }}><b>Product Description</b><span className="ml-1" style={{ color: "#F45C3B", fontSize: "15px", cursor: "pointer" }}>[Edit]</span></div>
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Line 1</span></div>
                                                        <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Line 2</span></div>
                                                        <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Line 3</span></div>
                                                        <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Line 4</span></div>
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <div className="mt-2"><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Keeps your car consistently fragrant for 60 days</span></div>
                                                        <div className="mt-2"><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Oil Filter Replacement</span></div>
                                                        <div className="mt-2"><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Air Filter</span></div>
                                                        <div className="mt-2"><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Coolant Top up</span></div>
                                                    </div>
                                                </div>
                                                <div className="mt-3"><GoDiffAdded style={{ fontSize: "15px", color: "#2650D8" }} /><span style={{ fontSize: "12px", color: "#2650D8" }} className="ml-2">Add Line</span></div>
                                                <div className="sar_position" onClick={() => navigate('/care&accessory')}>
                                                    <div className="sar_cross d-flex justify-content-center align-items-center">
                                                        <img src={sar_cross} width="11px" height="11px" />
                                                    </div>
                                                </div>
                                                <div style={{ color: "#00155A", fontSize: "15px", marginTop: "15px" }}><b>Product Specification</b><span className="ml-1" style={{ color: "#F45C3B", fontSize: "15px", cursor: "pointer" }}>[Edit]</span></div>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Item Form</span></div>
                                                        <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Color</span></div>
                                                        <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Item Dimensions</span></div>
                                                        <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Item Weight</span></div>
                                                        <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Duration</span></div>
                                                        <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Manufacturer</span></div>
                                                        <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Manufacturer Warranty</span></div>
                                                        <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Quantity</span></div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="mt-2"><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Jelly Form</span></div>
                                                        <div className="mt-2"><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Lush Green</span></div>
                                                        <div className="mt-2"><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">8 x 12 x 8 cm</span></div>
                                                        <div className="mt-2"><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">275 gm</span></div>
                                                        <div className="mt-2"><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">45 days</span></div>
                                                        <div className="mt-2"><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Air Pro</span></div>
                                                        <div className="mt-2"><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">1 year Warranty</span></div>
                                                        <div className="mt-2"><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Pack of 3</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-lg-12">
                                                <div className="row">
                                                    <div className="col-lg-6 col-6">
                                                        <div style={{ cursor: "pointer" }}><IoMdCheckboxOutline style={{ fontSize: "18px" }} /><span style={{ fontSize: "15px", color: "#2650D8" }} className="ml-1">Mark as Recommended</span></div>
                                                        <div className="mt-2" style={{ color: "#ED7D2B", cursor: "pointer" }}><MdOutlineCancel style={{ fontSize: "18px" }} /><span style={{ fontSize: "15px" }} className="ml-1">Mark as Out of Stock</span></div>
                                                        <div className="mt-2" style={{ color: "#B92100", cursor: "pointer" }}><RiDeleteBin5Line style={{ fontSize: "18px" }} /><span style={{ fontSize: "15px" }} className="ml-1">Mark as Recommended</span></div>
                                                    </div>
                                                    <div className="col-lg-6 col-6">
                                                        <div className="d-flex justify-content-between mt-2">
                                                            <div>
                                                                <button className="btn btn_sar_reset" style={{ fontSize: "15px", color: "#2650D8" }}>RESET</button>
                                                            </div>
                                                            <div>
                                                                <button className="btn btn_sar_apply" style={{ fontSize: "15px" }}>APPLY</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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

export default Cca1