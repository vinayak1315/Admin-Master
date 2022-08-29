import React, { useState } from 'react'
import Header from '../Header'
import Mg_World_comp from '../../Header/Mg_World_comp'

import { FaRegEdit } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
import { Deal, History, Booking } from './MgWorldComp'
const Mg_world = () => {
  const [Table, setTable] = useState({ Table: Deal });
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  const values = [
    {
      title: "Total Distributed",
      value: 16000,
      price: "Rs.800",
      color_1: 'blueish',
      color_2: "greyish"
    },
    {
      title: "Total Redeemed",
      value: "Rs 13800",
      price: "Rs.800",
      color_1: 'greenish',
      color_2: "greyish"
    },
    {
      title: "Total Pending",
      value: "Rs. 2000",
      price: "Rs.800",
      color_1: 'reddish',
      color_2: "greyish"
    },
    {
      title: "Value of 1 MG Coin",
      value: "Rs. 0.5",
      price: "",
      color_1: 'orange d-flex justify-content-between',
      color_2: "greyish",
      icon: <FaRegEdit />,
      mg_icon: "mg_icon d-flex align-items-center justify-content-center"
    },
  ];
  
  return (
    <>
      <div className="mg_world">
        <Header title="MG WORLD"
          navbar_comp={<Mg_World_comp />}
        />
        <div className="mg_content">
          <div className="row">
            {values.map(value => (
              <div className="col-lg-3 col-md-3 col-12">
                <div className="mg_box">
                  <div style={{ fontSize: "16px" }}><b>{value.title}</b></div>
                  <div style={{ fontSize: "16px" }} className={value.color_1}>
                    <div><b>{value.value}</b></div>
                    <div className={value.mg_icon}>{value.icon}</div>
                  </div>
                  <div style={{ fontSize: "12px" }} className={value.color_2}>{value.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="add_deal">
          <div className="row">
            <div className="col-lg-10">
              <div className="deal_cate d-flex">
                <div className={active === 1 ? "active_link" : "unactive_link"} onClick={() => { setTable({ Table: Deal }); setActive(1) }}>Deals</div>
                <div className={`ml-3 ${active === 2 ? "active_link" : "unactive_link"}`} onClick={() => { setTable({ Table: History }); setActive(2) }}>History</div>
                <div className={`ml-3 ${active === 3 ? "active_link" : "unactive_link"}`} onClick={() => { setTable({ Table: Booking }); setActive(3) }}>Bookings</div>
              </div>
            </div>
            <div className="col-lg-2">
              <button className="btn btn-deal" style={{ fontSize: "12px" }} onClick={() => navigate('/mg-world/add/deal')}>
                ADD DEALS
              </button>
            </div>
          </div>          
          <div className="cons_table">
            <Table.Table />
          </div>
        </div>
      </div>
    </>
  )
}

export default Mg_world