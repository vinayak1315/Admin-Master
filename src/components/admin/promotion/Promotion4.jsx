import React from 'react'
import Header from '../Header'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { FaTrash, FaEdit, FaStar } from "react-icons/fa"
import discount from '../../../images/discount.png'
const promotions = [
    {
        title: "Home Page",
        count: 2,
        link: "/promotion"
    },
    {
        title: "Service & Repair",
        count: 0,
        link: "/promotion/service&repair"
    },
    {
        title: "Wash & Detailing",
        count: 0,
        link: ""
    },
    {
        title: "Car Care & Accessory",
        count: 0,
        link: ""
    },
    {
        title: "New & Used Cars",
        count: 0,
        link: ""
    },
    {
        title: "Auto Box",
        count: 0,
        link: ""
    }
]
const contents = [
    {
        title: "Complete Wheel Care"
    },
    {
        title: "Complete Wheel Care"
    },
    {
        title: "Complete Wheel Care"
    },
    {
        title: "Complete Wheel Care"
    },
    {
        title: "Complete Wheel Care"
    },
    {
        title: "Complete Wheel Care"
    },
    {
        title: "Complete Wheel Care"
    },
    {
        title: "Complete Wheel Care"
    }
]
const Promotion4 = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="promotion">
                <Header title="Promotion" />
                <div className="row p2_row">
                    <div className="col-5 col-lg-4 count_box">
                        {promotions.map(promotion => (
                            <Link to={promotion.link} style={{ textDecoration: 'none', color: "#00155A" }}>
                                <div className="promo_box">
                                    <div className="row">
                                        <div className="col-6 col-lg-6">
                                            <div className='promo_heading'><b>{promotion.title}</b></div>
                                        </div>
                                        <div className="col-6 col-lg-6 side_border">
                                            <div className='promo_heading'>Total Count<br /><div>{promotion.count}</div></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="col-lg-7 col-7">

                        <div className="d-flex justify-content-between button_outer">

                            <div className="promo_button">
                                <NavLink to="/promotion/service&repair" className="btn btn-promo" activeClassName="active" style={{ textDecoration: 'none', width: "200px" }}>Popular Garages</NavLink>
                            </div>
                            <div className="promo_button">
                                <NavLink to="/promotion" className="btn btn-promo" activeClassName="active" style={{ textDecoration: 'none', width: "200px" }}>Trending</NavLink>
                            </div>
                            <div className="promo_button">
                                <NavLink to="/promotion" className="btn btn-promo" activeClassName="active" style={{ textDecoration: 'none', width: "200px" }}>Best Offers</NavLink>
                            </div>
                        </div>
                        <div className="row promo_main">
                            {contents.map(content => (
                                <div className="col-lg-3 col-12 promo_margin">
                                    <div className="card_promo">
                                        <div className="bg_promo2">
                                            <div className="fun_btn">
                                                <div className="btn-up d-flex align-items-center justify-content-center">
                                                    <FaTrash className="delet_promo" />
                                                </div>
                                                <div className="btn-up-edit d-flex align-items-center justify-content-center">
                                                    <FaEdit className="edit_promo" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="promo_content">
                                            <div style={{ color: '#00155A' }}><b>Total Quartz</b></div>
                                            <div className="d-flex justify-content-between">
                                                <div style={{ color: "#5D6186", fontSize: "9px" }}>Tire alignment & More</div>
                                                <div style={{ color: "#ED7D2B", fontSize: "9px" }}><b>4.5</b><FaStar className="ml-1" /></div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-lg-12 col-12">
                                                    <div className="discount_banner2" style={{ color: "#B92100", fontSize: "15px" }}>
                                                        <img src={discount} width="18px" height="18px" /><span className="ml-2" style={{ fontSize: "12px" }}>50% Off | TRYNEW</span>
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
                                <div className="add_more">
                                    <button className="btn btn-add" style={{ fontSize: "15px", width: "185px" }} onClick={()=>navigate('/promotion/popular/garages')}>Add More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Promotion4