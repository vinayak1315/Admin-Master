import React from 'react'
import { ProductHeader, AlTitle } from './ProductComp'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import addImage from '../../../images/addImage.png'
import logo from '../../../images/car_01.png'
const AddListing = () => {
    const cars = [
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    ]
    const als = [
        {
            title1: "Price"
        },
        {
            title1: "Year"
        },
        {
            title1: "Kilometer"
        },
        {
            title1: "Fuel Type"
        },
        {
            title1: "Transmission"
        },
        {
            title1: "Car Available at"
        },
        {
            title1: "Color"
        },
        {
            title1: "Fuel Economy"
        },
        {
            title1: "No. of Owner(s)"
        },
        {
            title1: "Registered at"
        },
        {
            title1: "Insurance"
        },
        {
            title1: "LifeTime Tax"
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
    return (
        <>
            <ProductHeader title={<AlTitle />} />
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
                                <div className="col-lg-10 col-4">
                                    <div><b style={{ color: "#00155A", fontSize: "15px" }}>Manufacturer & Model</b></div>
                                </div>
                                <div className="col-lg-2 col-6"><b style={{ float: "right", color: "#2650D8" }}><IoIosArrowUp /></b>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="car_logo_box">
                                        <div className="row ">
                                            {cars.map(car =>

                                                <div className="col-4 col-lg-4 center_logo mt-4">
                                                    <div className="car_logo d-flex justify-content-center align-items-center">
                                                        <img src={logo} width="100%" height="100%" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
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
                        <div className="ap_03">
                            <div className="row pb-4" style={{ borderBottom: "2px solid #99999980" }}>
                                <div className="col-lg-6 col-6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div style={{ color: "#00155A", fontSize: "15px" }}>Price</div>
                                        </div>
                                        <div className="col-lg-6">
                                            <input className="al_input1" type="text" />
                                        </div>
                                    </div>
                                    <div className="row mt-1">
                                        <div className="col-lg-6">
                                            <div style={{ color: "#00155A", fontSize: "15px" }}>Owner Name</div>
                                        </div>
                                        <div className="col-lg-6">
                                            <input className="al_input1" type="text" />
                                        </div>
                                    </div>
                                    <div className="row mt-1">
                                        <div className="col-lg-6">
                                            <div style={{ color: "#00155A", fontSize: "15px" }}>Price</div>
                                        </div>
                                        <div className="col-lg-6">
                                            <input className="al_input1" type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ color: "#00155A", fontSize: "15px", marginTop: "18px" }}>Comment by Owner</div>

                            <div className="form-group">
                                <input className="form-control al_input2" placeholder="Type here" />
                            </div>

                            <div style={{ color: "#00155A", fontSize: "15px", marginTop: "18px" }}>Overview</div>

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
                                                            <div className="cad_03"><input type="text" className="al_input3" /></div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ color: "#00155A", fontSize: "15px", marginTop: "18px" }}>Features</div>

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
                                                            <div className="cad_03">{fal.title2} <b style={{ float: "right", color: "#2650D8" }}><IoIosArrowDown /></b></div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center mt-4">
                                <div>
                                    <button className="btn btn_discard">Discard</button>
                                </div>
                                <div className="ml-3">
                                    <button className="btn btn_save_ap">SAVE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddListing