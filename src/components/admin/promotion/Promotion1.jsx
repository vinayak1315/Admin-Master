import React from 'react'
import Header from '../Header'
import { NavLink } from 'react-router-dom'
import { FaTrash, FaEdit } from "react-icons/fa"

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
    },
    {
        title: "Complete Wheel Care"
    },
    {
        title: "Complete Wheel Care"
    },
]
const Promotion1 = () => {
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
                                <div className="col-lg-6 col-12 promo_margin">
                                    <div className="card_promo">
                                        <div className="bg_promo1">
                                            <div className="fun_btn">
                                                <div className="btn-up d-flex align-items-center justify-content-center">
                                                    <FaTrash className="delet_promo" />
                                                </div>
                                                <div className="btn-up-edit d-flex align-items-center justify-content-center">
                                                    <FaEdit className="edit_promo" />
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
                                    <button className="btn btn-add">Add More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Promotion1