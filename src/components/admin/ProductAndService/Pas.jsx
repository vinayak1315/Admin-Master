import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import CommonHeader from '../../Header/CommonHeader'
import setting from '../../../images/setting.png'
import car_01 from '../../../images/car_02.png'
import car_02 from '../../../images/car_01.png'
import car_03 from '../../../images/car_03.png'
import fasttag from '../../../images/fasttag.png'
import challan from '../../../images/challan.png'
import challanservice from '../../../images/challanservice.png'
import parkings from '../../../images/parkings.png'
import insurance from '../../../images/insurance.png'
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'
const bookings = [
    {
        img: setting,
        title: "Service & repairs",
        width: "49px",
        height: "48px",
        link:"/service&repair"
    },
    {
        img: car_01,
        title: "Wash & Detailing",
        width: "46px",
        height: "51px",
        link:"/"
    },
    {
        img: car_02,
        title: "Car Care & Accessory",
        width: "46px",
        height: "41px",
        link:"/care&accessory"
    },
    {
        img: car_03,
        title: "New & Used Cars",
        width: "41px",
        height: "36px",
        link:"/car&accessory"
    },
    {
        img: fasttag,
        title: "FASTag Recharge",
        width: "61px",
        height: "41px",
        link:"/"
    },
    {
        img: challan,
        title: "Pay Challans",
        width: "51px",
        height: "49px",
        link:"/"
    },
    {
        img: challanservice,
        title: "Chauffer Service",
        width: "31px",
        height: "58px",
        link:"/"
    },
    {
        img: parkings,
        title: "Parking's Nearby",
        width: "48px",
        height: "48px",
        link:"/"
    },
    {
        img: insurance,
        title: "Insurance",
        width: "45px",
        height: "47px",
        link:"/"
    }
]
const Pas = () => {
    return (
        <>
            <>
                <Header title="Products & Services" navbar_comp={<CommonHeader/>} />
                <div className="bookings">
                    <div className="booking_01 d-flex justify-content-between">
                        {bookings.map(booking =>
                        <Link to={booking.link} style={{textDecoration:"none"}}>
                            <div className="booking_card">
                                <img src={booking.img} width={booking.width} height={booking.height} />
                                <div style={{ fontWeight: '600', color: "#00155A", fontSize: "10px", padding: "5px", borderBottom: "1px solid #999999" }}>{booking.title}</div>
                                <div style={{ color: "#9AA2D0", fontSize: "10px" }} className="mt-1">Bookings</div>
                                <div style={{ color: "#2650D8", fontSize: "12px" }}><b>4584</b></div>
                                <div><BsArrowDownCircle style={{ color: "#B92100", fontSize: "12px" }} /><span className="ml-1" style={{ fontSize: "10px" }}>1.5%</span></div>
                            </div>
                        </Link>
                        )}
                    </div>

                    <div className="booking_03 mt-2">
                        <div className="row">
                            <div className="col-lg-4 col-4">
                                <div className="booking_box">
                                    <div className="border_bottom">
                                        <div className="row">
                                            <div className="col-11 col-lg-10">
                                                <div style={{ fontSize: "18px", color: "#00155A" }}><b>Highest Booked Services</b></div>
                                            </div>
                                            <div className="col-1 col-lg-2">
                                                <div style={{ fontSize: "18px", color: "#2650D8" }}><b>Qty</b></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-11 col-lg-10">
                                            <div style={{ fontSize: "15px", color: "#5D6186" }}>LHS front Door Denting & Painting</div>
                                            <div style={{ fontSize: "12px", color: "#999999" }}>Maruti Suzuki XL6</div>
                                        </div>
                                        <div className="col-1 col-lg-2">
                                            <div style={{ fontSize: "15px", color: "#5D6186" }}>100</div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-11 col-lg-10">
                                            <div style={{ fontSize: "15px", color: "#5D6186" }}>Basic Service</div>
                                            <div style={{ fontSize: "12px", color: "#999999" }}>Maruti Suzuki XL6</div>
                                        </div>
                                        <div className="col-1 col-lg-2">
                                            <div style={{ fontSize: "15px", color: "#5D6186" }}>100</div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-11 col-lg-10">
                                            <div style={{ fontSize: "15px", color: "#5D6186" }}>Engine Scanning</div>
                                            <div style={{ fontSize: "12px", color: "#999999" }}>Maruti Suzuki XL6</div>
                                        </div>
                                        <div className="col-1 col-lg-2">
                                            <div style={{ fontSize: "15px", color: "#5D6186" }}>100</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-4">
                                <div className="booking_box">
                                    <div className="row">
                                        <div className="col-12 cl-lg-12">
                                            <div className="border_bottom">
                                                <div className="row">
                                                    <div className="col-11 col-lg-10">
                                                        <div style={{ fontSize: "18px", color: "#00155A" }}><b>Highest Selling Products</b></div>
                                                    </div>
                                                    <div className="col-1 col-lg-2">
                                                        <div style={{ fontSize: "18px", color: "#2650D8" }}><b>Qty</b></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col-11 col-lg-10">
                                                    <div style={{ fontSize: "15px", color: "#5D6186", width: "168px" }}>Godrej Aer Twist Cool Air Freshener (60 ml)</div>
                                                    <div style={{ fontSize: "12px", color: "#999999" }}>Maruti Suzuki XL6</div>
                                                </div>
                                                <div className="col-1 col-lg-2">
                                                    <div style={{ fontSize: "15px", color: "#5D6186" }}>100</div>
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col-11 col-lg-10">
                                                    <div style={{ fontSize: "15px", color: "#5D6186", width: "168px" }}>7d Elegant Floor Mats</div>
                                                    <div style={{ fontSize: "12px", color: "#999999" }}>Maruti Suzuki XL6</div>
                                                </div>
                                                <div className="col-1 col-lg-2">
                                                    <div style={{ fontSize: "15px", color: "#5D6186" }}>100</div>
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col-11 col-lg-10">
                                                    <div style={{ fontSize: "15px", color: "#5D6186", width: "168px" }}>Microfibre Towel</div>
                                                </div>
                                                <div className="col-1 col-lg-2">
                                                    <div style={{ fontSize: "15px", color: "#5D6186" }}>100</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-4">
                                <div className="booking_box">
                                    <div className="border_bottom">
                                        <div className="row">
                                            <div className="col-11 col-lg-10">
                                                <div style={{ fontSize: "18px", color: "#00155A" }}><b>Trending Cars</b></div>
                                            </div>
                                            <div className="col-1 col-lg-2">
                                                <div style={{ fontSize: "18px", color: "#2650D8" }}><b>Qty</b></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-11 col-lg-10">
                                            <div style={{ fontSize: "15px", color: "#5D6186", width: "168px" }}>Maruti Suzuki XL6</div>
                                        </div>
                                        <div className="col-1 col-lg-2">
                                            <div style={{ fontSize: "15px", color: "#5D6186" }}>100</div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-11 col-lg-10">
                                            <div style={{ fontSize: "15px", color: "#5D6186", width: "168px" }}>Maruti Suzuki XL6</div>
                                        </div>
                                        <div className="col-1 col-lg-2">
                                            <div style={{ fontSize: "15px", color: "#5D6186" }}>100</div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-11 col-lg-10">
                                            <div style={{ fontSize: "15px", color: "#5D6186", width: "168px" }}>Maruti Suzuki XL6</div>
                                        </div>
                                        <div className="col-1 col-lg-2">
                                            <div style={{ fontSize: "15px", color: "#5D6186" }}>100</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Pas