import React from 'react'
import Header from '../Header'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaTrash, FaEdit, FaStar } from "react-icons/fa"
import image from "../../../images/image.jpg"
const promotions = [
    {
        title: "Home Page",
        content: "Total Listing: 1500",
        count: 2
    },
    {
        title: "Service & Repair",
        content: "Total Listing: 1300",
        count: 0
    },
    {
        title: "Wash & Detailing",
        content: "Total Listing: 1300",
        count: 0
    },
    {
        title: "Car Care & Accessory",
        content: "Total Listing: 1300",
        count: 0
    },
    {
        title: "New & Used Cars",
        content: "Total Listing: 1300",
        count: 0
    },
    {
        title: "Auto Box",
        content: "Total Listing: 1300",
        count: 0
    }
]
const contents = [
    {
        title: "Complete Wheel Care"
    },
    {
        title: "Complete Wheel Care"
    }
]
const Promotion2 = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="promotion">
                <Header title="Promotion" />
                <div className="row p2_row">
                    <div className="col-5 col-lg-4 count_box">
                        {promotions.map(promotion => (
                            <div className="promo_box">
                                <div className="row">
                                    <div className="col-6 col-lg-6">
                                        <div className='promo_heading'><b>{promotion.title}</b><br /><span style={{ fontSize: "10px", color: "#5D6186" }}>{promotion.content}</span></div>
                                    </div>
                                    <div className="col-6 col-lg-6 side_border">
                                        <div className='promo_heading'>Selected Deals<br /><div>{promotion.count}</div></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-7 col-7">
                        <div className="button_outer d-flex justify-content-between">

                            <div className="promo_button">
                                <NavLink to="/promotion" className="btn btn-promo" activeClassName="active" style={{ textDecoration: 'none' }}>Into The Spot Light</NavLink>
                            </div>

                            <div className="promo_button">
                                <NavLink to="/promotion/banner" className="btn btn-promo" activeClassName="active" style={{ textDecoration: 'none' }}>Offers & Discount</NavLink>
                            </div>

                            <div className="promo_button">
                                <NavLink to="/promotion/ratings" className="btn btn-promo" activeClassName="active" style={{ textDecoration: 'none' }}>Ratings & Review</NavLink>
                            </div>
                        </div>
                        <div className="row promo_main">
                            {contents.map(content => (
                                <div className="col-lg-6 col-6">
                                    <div className="review_btn">
                                        <div className="btn-up d-flex align-items-center justify-content-center">
                                            <FaTrash className="delet_promo" />
                                        </div>
                                        <div className="btn-up-edit d-flex align-items-center justify-content-center">
                                            <FaEdit className="edit_promo" />
                                        </div>
                                    </div>
                                    <div className="rating_box">
                                        <div className="row">
                                            <div className="col-lg-12 col-12">
                                            <div className="review_c2"></div>
                                                <div className="d-flex align-items-center promo_c1 ">
                                                    <div className="">
                                                        <img src={image} width="62px" height="62px" style={{ borderRadius: "50px" }} />
                                                    </div>
                                                    <div className="ml-3">
                                                        <span style={{ color: "#2650D8", fontSize: "14px" }}><b>Ankita Singh</b></span><br /><span style={{ color: "#5D6186", fontSize: "9px" }}>Mumbai</span><br /><span style={{ color: "#ED7D2B", gap: "2px" }}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <b style={{ fontSize: "15px" }}>Excellent Work By Master Garage</b>
                                                    <div style={{ color: "#999999", fontSize: "12px" }}>
                                                        "Greate service by and support by vendor, as well as Master Garage Team, I loved the idea of comparing garages on various parameter and choosing the best out of the rest."
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <div className="add_more mt-4">
                                    <button className="btn btn-add" onClick={() => navigate('/add/review')}>Add More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Promotion2