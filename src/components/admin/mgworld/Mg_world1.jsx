import React, { useState } from 'react'
import Header from '../Header'
import Mg_World_comp from '../../Header/Mg_World_comp'
import { MgWorldTitle } from './MgWorldComp'
import { NavLink } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import image from '../../../images/image.jpg'
const Mg_world1 = () => {
    const deals = [
        {
            title: "Freshners",
            content: "Total Listing: 1500",
            count: 2
        },
        {
            title: "Seat Covers",
            content: "Total Listing: 1300",
            count: 0
        },
        {
            title: "Infotainment",
            content: "Total Listing: 1300",
            count: 0
        },
        {
            title: "Music Systems",
            content: "Total Listing: 1500",
            count: 0
        },
        {
            title: "Floor Mats",
            content: "Total Listing: 1500",
            count: 0
        },
        {
            title: "Camera & More",
            content: "Total Listing: 1500",
            count: 0
        },
        {
            title: "Auto Styling",
            content: "Total Listing: 1500",
            count: 0
        },
        {
            title: "Auto Care Products",
            content: "Total Listing: 1500",
            count: 0
        },
    ]
    const contents = [
        {

        },
        {}
    ]
    return (
        <>
            <div className="mg_world">
                <Header title={<MgWorldTitle />}
                    navbar_comp={<Mg_World_comp />}
                />
                <div className="row">
                    <div className="col-5 col-lg-4 count_box page_reducer">
                        {deals.map(deal => (
                            <div className="promo_box">
                                <div className="row">
                                    <div className="col-6 col-lg-6">
                                        <div className='promo_heading'><b>{deal.title}</b><br /><span style={{ fontSize: "10px", color: "#5D6186" }}>{deal.content}</span></div>
                                    </div>
                                    <div className="col-6 col-lg-6 side_border">
                                        <div className='promo_heading'>Total Count<br /><div>{deal.count}</div></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="mt-2 text-center mb-2 mg_btn" style={{ width: "100%" }}>
                            <button className="btn">SAVE</button>
                        </div>
                    </div>
                    <div className="col-lg-7 col-7 page_reducer">
                        <div className="row p2_row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-8 col-lg-8">
                                        <div className="d-flex mt-3">
                                            <button className="btn btn-mg-01">Air Freshners</button>
                                            <button className="btn btn-mg-02 ml-3">Air Purifiers</button>
                                        </div>
                                    </div>
                                    <div className="col-4 col-lg-4 mt-3">
                                        <span style={{ fontSize: "15px", color: "#00155A" }} className="mr-3 ml-4">Stores</span><span style={{ fontSize: "15px", color: "#2650D8", borderBottom: "2px solid #999999" }}>All Stores<span style={{ fontSize: "20px" }}><MdOutlineKeyboardArrowDown className="ml-5" /></span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="add_deal mt-2">
                            <div className="air_fresh">Air Freshners</div>
                            {contents.map(content =>
                                <>
                                    <div className="air_fresher1">
                                        <div className="row p2_row">
                                            <div className="col-lg-12 col-12 padding_remover">
                                                <div className="row">
                                                    <div className="col-lg-9 col-9">
                                                        <div className="d-flex">
                                                            <div>
                                                                <img src={image} alt="garage" width="120px" height="120px" className="mg_img_01" />
                                                            </div>
                                                            <div style={{ width: "170px" }} className="ml-3">
                                                                <div className="fifteen">Godrej Aer Twist Cool Air Freshener (60 ml)</div>
                                                                <div style={{ color: "#5D6186", fontSize: "12px" }}>
                                                                    <li>fragrant for 60 days</li>
                                                                    <li>Relax your Mood</li>
                                                                </div>
                                                                <div className="fifteen mt-2"><strike style={{ color: "#5D6186" }}>₹6,459</strike><span class="ml-1"><b>₹6,459</b></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-3 d-flex align-items-center">
                                                        <div className="d-flex justify-content-center">
                                                            <button className="btn btn_mg_selected">Selected</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ color: "#999999", fontSize: "12px" }} className="mt-4">Listed By</div>
                                        <div className="row p2_row">
                                            <div className="col-12 col-lg-12 d-flex justify-content-between">
                                                <div style={{ fontSize: "12px" }}><span style={{ color: "#2650D8" }}>#123456</span><span style={{ color: "#5D6186" }} className="ml-1">VM Car AccessoriesMira Road</span></div>
                                                <div style={{ fontSize: "12px" }} className="mr-5"><a href="#">Show More</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            <div className="air_fresh mt-4">Air Purifiers</div>
                            {contents.map(content =>
                                <>
                                    <div className="air_fresher1">
                                        <div className="row p2_row">
                                            <div className="col-lg-12 col-12 padding_remover">
                                                <div className="row">
                                                    <div className="col-lg-9 col-9">
                                                        <div className="d-flex">
                                                            <div>
                                                                <img src={image} alt="garage" width="120px" height="120px" className="mg_img_01" />
                                                            </div>
                                                            <div style={{ width: "170px" }} className="ml-3">
                                                                <div className="fifteen">Godrej Aer Twist Cool Air Freshener (60 ml)</div>
                                                                <div style={{ color: "#5D6186", fontSize: "12px" }}>
                                                                    <li>fragrant for 60 days</li>
                                                                    <li>Relax your Mood</li>
                                                                </div>
                                                                <div className="fifteen mt-2"><strike style={{ color: "#5D6186" }}>₹6,459</strike><span class="ml-1"><b>₹6,459</b></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-3 d-flex align-items-center">
                                                        <div className="d-flex justify-content-center">
                                                            <button className="btn btn_mg_select">Select</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ color: "#999999", fontSize: "12px" }} className="mt-1">Listed By</div>
                                        <div className="row p2_row">
                                            <div className="col-12 col-lg-12 d-flex justify-content-between">
                                                <div style={{ fontSize: "12px" }}><span style={{ color: "#2650D8" }}>#123456</span><span style={{ color: "#5D6186" }} className="ml-1">VM Car AccessoriesMira Road</span></div>
                                                <div style={{ fontSize: "12px" }} className="mr-5"><a href="#">Show More</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mg_world1