import React from 'react'
import { ProductHeader, Nuc2Title } from './ProductComp'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { IoMdCheckboxOutline } from 'react-icons/io'
import { MdOutlineCancel } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import addImage from '../../../images/addImage.png'
import image from '../../../images/image.jpg'
const Nuc2 = () => {
    const cars = [
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    ]
    const als = [
        {
            title1: "Price",
            title2: "Remote"
        },
        {
            title1: "Year",
            title2: "Remote"
        },
        {
            title1: "Kilometer",
            title2: "Remote"
        },
        {
            title1: "Fuel Type",
            title2: "Remote"
        },
        {
            title1: "Transmission",
            title2: "Remote"
        },
        {
            title1: "Car Available at",
            title2: "Remote"
        },
        {
            title1: "Color",
            title2: "Remote"
        },
        {
            title1: "Fuel Economy",
            title2: "Remote"
        },
        {
            title1: "No. of Owner(s)",
            title2: "Remote"
        },
        {
            title1: "Registered at",
            title2: "Remote"
        },
        {
            title1: "Insurance",
            title2: "Remote"
        },
        {
            title1: "LifeTime Tax",
            title2: "Remote"
        }
    ]
    const fals = [
        {
            title1: "Airbags",
            title2: "2 (Driver & Co-Driver)"
        },
        {
            title1: "Central Locking",
            title2: "Remote"
        },
        {
            title1: "Seat Upholstery",
            title2: "Fabric"
        },
        {
            title1: "Integrated (in-dash) Music System",
            title2: "yes"
        },
        {
            title1: "Rear AC",
            title2: "Vents Only"
        },
        {
            title1: "Outside Rear View Mirrors (ORVMs)",
            title2: "Body Coloured"
        },
        {
            title1: "Power Windows",
            title2: "Front & Rear"
        },
        {
            title1: "Headlamps",
            title2: "Front & Rear"
        },
        {
            title1: "Conventional",
            title2: "Front & Rear"
        },
        {
            title1: "Anti-Lock Braking System (ABS)",
            title2: "YES"
        },
        {
            title1: "Driver Seat Adjustment",
            title2: "Manual with Height Adjustment"
        }
    ]
    const navigate = useNavigate()
    return (


        <>
            <ProductHeader title={<Nuc2Title />} />
            <div className="AddProduct">
                <div className="row">
                    <div className="col-lg-4 col-4">
                        <div className="nuc_02">
                            <div className="row">
                                <div className="col-lg-4 col-4">
                                    <div><b style={{ color: "#00155A", fontSize: "15px" }}>Category</b></div>
                                </div>
                                <div className="col-lg-8 col-6">
                                    <div style={{ color: "#2650D8", fontSize: "15px", paddingBottom: "8px", borderBottom: "2px solid #999999", width: "200px" }}>List Dealer by car<b style={{ float: "right" }}><IoIosArrowDown /></b></div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-lg-6 mt-4">
                                    <div className="d-flex justify-content-center">
                                        <img style={{ borderRadius: "10px" }} src={image} width="120px" height="120px" />
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4">
                                    <div className="d-flex justify-content-center">
                                        <img style={{ borderRadius: "10px" }} src={image} width="120px" height="120px" />
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4">
                                    <div className="d-flex justify-content-center">
                                        <img style={{ borderRadius: "10px" }} src={image} width="120px" height="120px" />
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4">
                                    <div className="d-flex justify-content-center">
                                        <img style={{ borderRadius: "10px" }} src={image} width="120px" height="120px" />
                                    </div>
                                </div>
                            </div>
                            <div className="nuc_03 ">
                                <div className="mt-4 nuc_04 d-flex justify-content-center align-items-center">
                                    <img src={addImage} width="30px" height="30px" />
                                </div>
                                <div className=""><span className="" style={{ fontSize: "15px", color: "#2650D8" }}>Add Image</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 page_reducer">
                        <div className="nuc2_01">
                            <div className="used_car">
                                <div className="nuc_01">
                                    <div style={{ fontSize: "12px", color: "#2650D8" }}>#12345</div>
                                    <div className="row p2_row">
                                        <div className="col-lg-12 col-12 padding_remover">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <div className="d-flex">
                                                        <div>
                                                            <img src={image} alt="garage" width="120px" height="120px" className="mg_img_01" />
                                                        </div>
                                                        <div className="ml-3" style={{width:"500px"}}>
                                                            <div className="fifteen" style={{ color: "#00155A" }}><span className="uc_font">2016 Hyundai Creta</span><span className="ml-3" style={{ color: "#F45C3B" , cursor:"pointer"}}>[Edit]</span></div>
                                                            <div style={{ color: "#5D6186", fontSize: "10px" }}>1.6 SX Plus AT Petrol <span style={{ fontSize: "10px", color: "#999999" }}>Automatic</span></div>
                                                            <div classname="row">
                                                                <div className="col-lg-12 col-12">
                                                                    <div className="row">
                                                                        <div className="col-lg-8">
                                                                            <div className="row mt-4">
                                                                                <div className="col-lg-10" style={{padding:0}}>
                                                                                    <div className="row">
                                                                                        <div className="col-3 col-lg-4">
                                                                                            <div style={{fontSize: "15px", color:"#2650D8"}}>Owner</div>
                                                                                        </div>
                                                                                        <div className="col-9 col-lg-8">
                                                                                            <div style={{fontSize: "15px", color:"#5D6186"}}>Classic Cars, Thane</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-lg-2 col-2">
                                                                                    <span style={{ color: "#F45C3B", fontSize: "15px", cursor:"pointer"}}>[Edit]</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row mt-1">
                                                                                <div className="col-lg-10" style={{padding:0}}>
                                                                                    <div className="row">
                                                                                        <div className="col-3 col-lg-4">
                                                                                            <div style={{fontSize: "15px", color:"#2650D8"}}>Contact</div>
                                                                                        </div>
                                                                                        <div className="col-9 col-lg-8">
                                                                                            <div style={{fontSize: "15px", color:"#5D6186"}}>887654321</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-lg-2 col-2">
                                                                                    <span style={{ color: "#F45C3B", fontSize: "15px", cursor:"pointer"}}>[Edit]</span>
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
                            </div>

                            <div style={{ color: "#00155A", fontSize: "15px", marginTop: "18px", borderTop: "2px solid #999999", paddingTop: "15px" }}>Comment by Owner<span style={{ color: "#F45C3B", float: "right", cursor:"pointer" }}>[Edit]</span></div>

                            <div className="form-group">
                                <input className="form-control al_input2" placeholder="Type here" />
                            </div>

                            <div style={{ color: "#00155A", fontSize: "15px", marginTop: "18px" }}>Overview<span style={{ color: "#F45C3B", float: "right" , cursor:"pointer"}}>[Edit]</span></div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-12 col-lg-12">
                                            <div className="cad_1">
                                                {als.map(al =>
                                                    <div className="row" style={{ borderBottom: '2px solid #9999996b' }}>
                                                        <div className="col-lg-6 col-6">
                                                            <div className="cad_02">{al.title1}</div>
                                                        </div>
                                                        <div className="col-lg-6 col-6">
                                                            <div className="cad_03">{al.title2}</div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ color: "#00155A", fontSize: "15px", marginTop: "18px" }}>Features<span style={{ color: "#F45C3B", float: "right" , cursor:"pointer"}}>[Edit]</span></div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-12 col-lg-12">
                                            <div className="cad_1">
                                                {fals.map(fal =>
                                                    <div className="row" style={{ borderBottom: '2px solid #9999996b' }}>
                                                        <div className="col-lg-6 col-6">
                                                            <div className="cad_02">{fal.title1}</div>
                                                        </div>
                                                        <div className="col-lg-6 col-6">
                                                            <div className="cad_03">{fal.title2}</div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
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
                                            <div className="d-flex justify-content-between mt-4">
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
        </>
    )
}

export default Nuc2