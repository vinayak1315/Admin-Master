import React, { useState } from 'react'
import { UserTitle, UserComp } from './UserComp'
import CommonHeader from '../../Header/CommonHeader'
import Header from '../Header'
import image from '../../../images/image.jpg'
import message from '../../../images/message.png'
import call from '../../../images/call.png'
import copy from '../../../images/copy.png'
import { useNavigate } from 'react-router-dom'

const User1 = () => {
  const [activeLink, setActiveLink] = useState()
  const navigate = useNavigate();
  const [Table, setTable] = useState({ Table: UserComp });
  const [active, setActive] = useState(1)
  const titles = [
    {}, {}, {}, {}, {}, {}, {}, {}, {}
  ]
  return (
    <>
      <Header title={<UserTitle />} navbar_comp={<CommonHeader />} />
      <div className="user page_reducer">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6">
                <div className="userBox1">
                  <div className="row">
                    <div className="col-lg-8">
                      <div><b style={{ color: "#00155A", fontSize: "18px" }}>Total Spent</b></div>
                    </div>
                    <div className="col-lg-4">
                      <div><b style={{ color: "#00155A", fontSize: "18px" }}>Bookings</b></div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-lg-8">
                      <div><b style={{ color: "#2650D8", fontSize: "18px" }}>₹11,00,000</b></div>
                    </div>
                    <div className="col-lg-4">
                      <div><b style={{ color: "#2650D8", fontSize: "18px" }}>65</b></div>
                    </div>
                  </div>
                  <div className="mt-3" style={{ color: "#5D6186", fontSize: "12px", paddingBottom: "18px", borderBottom: "1px solid #9999997c" }}>avg. spent is ₹49999</div>
                  {titles.map(data =>
                    <div className="d-flex justify-content-between mt-3">
                      <div style={{ color: "#00155A", fontSize: "13px" }}><b>Service & Repair</b></div>
                      <div style={{ color: "#999999", fontSize: "14px" }}>50</div>
                      <div style={{ color: "#5D6186", fontSize: "15px" }}>₹ 11,10,000</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="userBox1">
                      <div className="d-flex justify-content-between">
                        <div><b style={{ color: "#00155A", fontSize: "18px" }}>Ongoing Bookings</b></div>
                        <div><b style={{ color: "#2650D8", fontSize: "18px" }}>4</b></div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div><b style={{ color: "#00155A", fontSize: "15px" }}>Service & Repairs</b></div>
                        <div><b style={{ color: "#5D6186", fontSize: "15px" }}>2</b></div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div><b style={{ color: "#00155A", fontSize: "15px" }}>Wash & Detailing</b></div>
                        <div><b style={{ color: "#5D6186", fontSize: "15px" }}>2</b></div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div><b style={{ color: "#00155A", fontSize: "15px" }}>Accessories</b></div>
                        <div><b style={{ color: "#5D6186", fontSize: "15px" }}>2</b></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className="userBox1">
                      <div className="d-flex justify-content-between">
                        <div><b style={{ color: "#00155A", fontSize: "18px" }}>Tickets Details</b></div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div><b style={{ color: "#00155A", fontSize: "15px" }}>Active</b></div>
                        <div><b style={{ color: "#5D6186", fontSize: "15px" }}>2</b></div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div><b style={{ color: "#00155A", fontSize: "15px" }}>Closed</b></div>
                        <div><b style={{ color: "#5D6186", fontSize: "15px" }}>2</b></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className="userBox1">
                      <div className="d-flex justify-content-between">
                        <div><b style={{ color: "#00155A", fontSize: "18px" }}>MG Coins</b></div>
                        <div><b style={{ color: "#2650D8", fontSize: "18px" }}>450000</b></div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div><b style={{ color: "#00155A", fontSize: "15px" }}>Remaining</b></div>
                        <div><b style={{ color: "#5D6186", fontSize: "15px" }}>200000</b></div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div><b style={{ color: "#00155A", fontSize: "15px" }}>Redeemed</b></div>
                        <div><b style={{ color: "#5D6186", fontSize: "15px" }}>200000</b></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mt-4">
                <div className="d-flex" style={{ gap: "10px" }}>
                  <button className={activeLink === 0 ? "btn btn_user_1" : "btn btn_user_2"} onClick={() => { setActiveLink(0); }}>All</button>
                  <button className={activeLink === 1 ? "btn btn_user_1" : "btn btn_user_2"} onClick={() => { setActiveLink(1); }}>Service & Repairs</button>
                  <button className={activeLink === 2 ? "btn btn_user_1" : "btn btn_user_2"} onClick={() => { setActiveLink(2); }}>Wash & Detailing</button>
                  <button className={activeLink === 3 ? "btn btn_user_1" : "btn btn_user_2"} onClick={() => { setActiveLink(3); }}>Accessories</button>
                  <button className={activeLink === 4 ? "btn btn_user_1" : "btn btn_user_2"} onClick={() => { setActiveLink(4); }}>Car Trade</button>
                  <button className={activeLink === 5 ? "btn btn_user_1" : "btn btn_user_2"} onClick={() => { setActiveLink(5); }}>Fastag</button>
                  <button className={activeLink === 5 ? "btn btn_user_1" : "btn btn_user_2"} onClick={() => { setActiveLink(5); }}>Challan</button>
                </div>
              </div>
              <div style={{margin: "15px 0px" }} >
                    <div className="mt-3">
                        <div className="d-flex" style={{width:"100%", borderBottom: "1px solid #ccc", gap:"15px"}}>
                            <div className={active === 1 ? "active_link" : "unactive_link"} style={{fontSize:"15px"}} onClick={() => { setTable({ Table: UserComp }); setActive(1) }}>All Bookings </div>
                            <div className={active === 2 ? "active_link" : "unactive_link"} style={{fontSize:"15px"}} onClick={() => { setTable({ Table: UserComp }); setActive(2) }}>Ongoing Bookings </div>
                            <div className={active === 3 ? "active_link" : "unactive_link"} style={{fontSize:"15px"}} onClick={() => { setTable({ Table: UserComp }); setActive(3) }}>Delivered Bookings </div>
                            <div className={active === 4 ? "active_link" : "unactive_link"} style={{fontSize:"15px"}} onClick={() => { setTable({ Table: UserComp }); setActive(4) }}>Tickets </div>
                        </div>
                    </div>
                    <div className="sup_table page_reducer" style={{height:"490px"}} >
                        <Table.Table />
                    </div>
                </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="user_03">
              <img src={image} alt="banner" width="100%" style={{ borderRadius: "8px 8px 0px 0px" }} />
              <div style={{ padding: "20px" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div style={{ color: "#00155A", fontSize: "15px" }}><b>Ramesh Kumar</b></div>
                  <div className="d-flex align-items-center" style={{ gap: "15px" }}>
                    <div><img src={call} width="19px" height="19px" /></div>
                    <div><img src={message} width="21px" height="21px" /></div>
                  </div>
                </div>
                <div style={{ color: "#5D6186", fontSize: "12px" }} className="mt-3">A-1234, CGC Residency, Near Bisleri office, Andheri East, Mumbai - 400001</div>
                <div style={{ color: "#2650D8", fontSize: "12px" }}><a href="#">View all addresses</a></div>

                <div className="mt-4 row">
                  <div className="col-lg-4">
                    <div style={{ fontSize: "12px", color: "#5D6186" }}>
                      <div>Customer ID :</div>
                      <div>Email :</div>
                      <div>Contact :</div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div style={{ fontSize: "12px", color: "#2650D8" }}>
                      <div>#123456 <img src={copy} height="14px" width="14px" /></div>
                      <div>Ramesh@gmail.com</div>
                      <div>8876467788</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3" style={{ color: "#999999", fontSize: "12px" }}>Last Booked Feb 23, 2021</div>
                <div className="mt-1" style={{ color: "#999999", fontSize: "12px" }}>Customer since April 20, 2020</div>
                <div className="mt-4 text-center" style={{ color: "#5D6186", fontSize: "12px" }}>Block customer account access?</div>
                <div className="mt-2 d-flex justify-content-center">
                  <button className="btn" style={{ backgroundColor: "#F45C3B", color: "#fff", fontSize: "15px", padding: "14px 0", width: "259px", borderRadius: "6px" }}>Block Customer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default User1