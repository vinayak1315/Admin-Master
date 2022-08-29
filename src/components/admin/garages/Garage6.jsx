import React, { useState } from 'react'
import { Garage1Title, GarageNav, Payments, Settlements } from './GarageComp'
import MetaData from '../../layout/MetaData'
import Header from '../Header'
import CommonHeader from '../../Header/CommonHeader'
import { FaStar } from 'react-icons/fa'

const Garage6 = () => {
    const bookingsData = [
        {}, {}, {}, {}, {}, {}
    ]
    return (
        <>
            <MetaData title="Garage Review" />
            <Header title={<Garage1Title />} navbar_comp={<CommonHeader />} />
            <div style={{ marginTop: "20px", marginLeft: "10px" }}><GarageNav /></div>
            <div className="row" style={{ margin: "25px 15px" }}>
                <div className="d-flex align-items-center" style={{ gap: "10px" }}>
                    <div style={{ color: "#2650D8", fontSize: "30px" }}><b>4.0</b></div>
                    <div style={{ color: "#FFC107", fontSize: "22px" }}><FaStar /></div>
                    <div style={{ color: "#00155A", fontSize: "15px" }} className="mt-1"><u>2215 Reviews</u></div>
                </div>
                <div className="page_reducer" style={{ height: "495px" }}>
                    <table style={{ width: '100%', marginTop: "10px" }}>
                        <tr className="title_table">
                            <th>Date & Time</th>
                            <th>Booking ID</th>
                            <th>Customer</th>
                            <th>Rating</th>
                            <th style={{ width: "490px" }}>Review</th>
                        </tr>
                        {bookingsData.map(data => (
                            <tr className="table_row">
                                <td>21/01/2021-11.00 AM</td>
                                <td>#123456</td>
                                <td>Shashank Pandey</td>
                                <td>
                                    <div className="d-flex" style={{color:"#ED7D2B", gap:"5px"}}>
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar style={{color:"#ECEFF5"}}/>
                                    </div>
                                </td>
                                <td><span style={{ fontSize: "12px", width: "490px" }}>Great Service and support by garage, as well as Master Garage Team, I loved the App and keep on doing great! Wish you the Best of Luck</span></td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </>
    )
}

export default Garage6