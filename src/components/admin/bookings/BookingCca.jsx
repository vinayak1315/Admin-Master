import React, { useState } from 'react'
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
import { CcaOb, CcaDb, CcaCb, CcaRr, CcaR } from './BookingCcaComp'
import { FaSlidersH } from 'react-icons/fa'

const bookings = [
    {
        img: setting,
        title: "Service & repairs",
        width: "49px",
        height: "48px",
        link: "/admin/booking"
    },
    {
        img: car_01,
        title: "Wash & Detailing",
        width: "46px",
        height: "51px",
        link: "/"
    },
    {
        img: car_02,
        title: "Car Care & Accessory",
        width: "46px",
        height: "41px",
        link: "/admin/booking/care&accessory"
    },
    {
        img: car_03,
        title: "New & Used Cars",
        width: "41px",
        height: "36px",
        link: "/admin/booking/new&used-car"
    },
    {
        img: fasttag,
        title: "FASTag Recharge",
        width: "61px",
        height: "41px",
        link: "/"
    },
    {
        img: challan,
        title: "Pay Challans",
        width: "51px",
        height: "49px",
        link: "/"
    },
    {
        img: challanservice,
        title: "Chauffer Service",
        width: "31px",
        height: "58px",
        link: "/"
    },
    {
        img: parkings,
        title: "Parking's Nearby",
        width: "48px",
        height: "48px",
        link: "/"
    },
    {
        img: insurance,
        title: "Insurance",
        width: "45px",
        height: "47px",
        link: "/"
    }
]
const BookingCca = () => {
    const [Table, setTable] = useState({ Table: CcaOb });
    const [active, setActive] = useState(1);
    return (
        <>
            <Header title="Car Care & Accessory" navbar_comp={<CommonHeader />} />
            <div className="bookings">
                <div className="page_reducer">
                    <div className="booking_01 d-flex justify-content-between">
                        {bookings.map(booking =>
                            <Link to={booking.link} style={{ textDecoration: "none" }}>
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
                    <div className="cons_content_2 mt-2">
                        <div className="cons_cate d-flex">
                            <div className={active === 1 ? "active_link" : "unactive_link"} onClick={() => { setTable({ Table: CcaOb }); setActive(1) }}>Ongoing Bookings (192)</div>
                            <div className={`ml-3 ${active === 2 ? "active_link" : "unactive_link"}`} onClick={() => { setTable({ Table: CcaDb }); setActive(2) }}>Delivered Bookings (192)</div>
                            <div className={`ml-3 ${active === 3 ? "active_link" : "unactive_link"}`} onClick={() => { setTable({ Table: CcaCb }); setActive(3) }}>Cancelled Bookings (192)</div>
                            <div className={`ml-3 ${active === 4 ? "active_link" : "unactive_link"}`} onClick={() => { setTable({ Table: CcaRr }); setActive(4) }}>Return Requested (192)</div>
                            <div className={`ml-3 ${active === 5 ? "active_link" : "unactive_link"}`} onClick={() => { setTable({ Table: CcaR }); setActive(5) }}>Returned (12)</div>
                        </div>
                        <div className="cons_icon"><FaSlidersH /></div>
                    </div>
                    <div className="cons_table">
                        <Table.Table />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingCca