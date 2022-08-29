import React from 'react'
import Header from '../Header'
import { NavLink, Link } from 'react-router-dom'
import { FaTrash, FaEdit } from "react-icons/fa"

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
  }
]
const Promotion = () => {
  return (
    <>
      <Header title="Promotion" />
      <div className="row">
        <div className="row">
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

          <div className="col-lg-7 col-7" style={{width:"65%"}}>

            <div className="d-flex justify-content-between button_outer">

              <div className="promo_button">
                <NavLink to="/promotion/banner" className="btn btn-promo" activeClassName="active" style={{ textDecoration: 'none' }}>Banners</NavLink>
              </div>
              <div className="promo_button">
                <NavLink to="/promotion" className="btn btn-promo" activeClassName="active" style={{ textDecoration: 'none' }}>Into The Spot Light</NavLink>
              </div>
              <div className="promo_button">
                <NavLink to="/promotion" className="btn btn-promo" activeClassName="active" style={{ textDecoration: 'none' }}>Offers & Discount</NavLink>
              </div>
              <div className="promo_button">
                <NavLink to="/promotion/ratings" className="btn btn-promo" activeClassName="active" style={{ textDecoration: 'none' }}>Ratings & Review</NavLink>
              </div>
            </div>
            <div className="row promo_main">
              {contents.map(content => (
                <div className="col-lg-4 col-12 promo_margin">
                  <div className="card_promo">
                    <div className="bg_promo">
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
                      <div><b>Complete Wheel Care</b></div>
                      <p>Tire alignment & More</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="add_more">
                  <button className="btn btn-add" style={{ fontSize: "15px", width: "185px" }}>Add More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Promotion