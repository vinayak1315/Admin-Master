import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import notification from '../../../images/notification.png'
import profiledown from '../../../images/profiledown.png'
import useravatar from '../../../images/useravatar.png'
import { FaAngleLeft, FaSlidersH } from 'react-icons/fa'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import image from '../../../images/image.jpg'
import sar_cross from '../../../images/sar_cross.png'

const ProductHeader = ({ title, navbar_comp }) => {
  return (
    <>
      <div className="header">
        <div className="header_section">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-center">
              <div className="header_title">
                <div>{title}</div>
              </div>
            </div>
            <div className="col-lg-2">

            </div>
            <div className="col-lg-6 padding_remover">

              <div className="Header_right d-flex align-items-center">
                {navbar_comp}
                <div className="notification_icon d-flex justify-content-center align-items-center">
                  <img src={notification} alt="notification" width="23px" height="25px" />
                </div>
                <div className="header_profile">
                  <img src={useravatar} alt="avatar" width="48px" height="48px" />
                  <img src={profiledown} alt="profile" width="14px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const ApTitle = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <Link to="/promotion/ratings" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
        </div>
        <div style={{ color: "#00155A", fontSize: "20px" }}>Add Product</div>
      </div>
    </>
  )
}
const AlTitle = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <Link to="/promotion/ratings" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
        </div>
        <div style={{ color: "#00155A", fontSize: "20px" }}>Add Listing</div>
      </div>
    </>
  )
}
const AsTitle = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <Link to="/service&repair" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
        </div>
        <div style={{ color: "#00155A", fontSize: "20px" }}>Add Service</div>
      </div>
    </>
  )
}

const NucTitle = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <Link to="/promotion/ratings" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
        </div>
        <div style={{ color: "#00155A", fontSize: "20px" }}>Used Car</div>
      </div>
    </>
  )
}
const Nuc1Title = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <Link to="/promotion/ratings" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
        </div>
        <div style={{ color: "#00155A", fontSize: "20px" }}>New & Used Cars</div>
      </div>
    </>
  )
}
const Nuc2Title = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <Link to="/promotion/ratings" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
        </div>
        <div style={{ color: "#00155A", fontSize: "20px" }}>2016 Hyundai Creta</div>
      </div>
    </>
  )
}
const UsedCarDetComp = () => {
  const navigate = useNavigate();
  const contents = [
    {
      id: 1
    }
  ]

  const fals = [
    {
      title1: "Airbags",
      title2: "2 (Driver & Co-Driver)"
    },
    {
      title1: "Central Locking",
      title2: "Remote"
    },
    {
      title1: "Seat Upholstery",
      title2: "Fabric"
    },
    {
      title1: "Integrated (in-dash) Music System",
      title2: "yes"
    },
    {
      title1: "Rear AC",
      title2: "Vents Only"
    },
    {
      title1: "Outside Rear View Mirrors (ORVMs)",
      title2: "Body Coloured"
    },
    {
      title1: "Power Windows",
      title2: "Front & Rear"
    },
    {
      title1: "Headlamps",
      title2: "Front & Rear"
    },
    {
      title1: "Conventional",
      title2: "Front & Rear"
    },
    {
      title1: "Anti-Lock Braking System (ABS)",
      title2: "YES"
    },
    {
      title1: "Driver Seat Adjustment",
      title2: "Manual with Height Adjustment"
    }
  ]

  return (
    <>
      <div className="row p2_row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-10 col-lg-10">
              <div className="d-flex mt-3">
                <button className="btn btn-mg-01">All Listing</button>
                <button className="btn btn-mg-02 ml-3">New Listing</button>
                <button className="btn btn-mg-02 ml-3">Old Listing</button>
              </div>
            </div>
            <div className="col-2 col-lg-2 mt-3">
              <div className="cons_icon"><FaSlidersH /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="used_car">
        {contents.map(content =>
          <>
            <div className="nuc_01">
              <div style={{ fontSize: "12px", color: "#2650D8" }}>#12345</div>
              <div className="row p2_row">
                <div className="col-lg-12 col-12 padding_remover">
                  <div className="row">
                    <div className="col-lg-7 col-7">
                      <div className="d-flex">
                        <div>
                          <img src={image} alt="garage" width="120px" height="120px" className="mg_img_01" />
                        </div>
                        <div style={{ width: "170px" }} className="ml-3">
                          <div className="fifteen uc_font">2016 Hyundai Creta</div>
                          <div style={{ color: "#5D6186", fontSize: "10px" }}>1.6 SX Plus AT Petrol</div>
                          <div style={{ color: "#5D6186", fontSize: "12px" }}>
                            <li>12300 kms</li>
                            <li>2019</li>
                            <li>Petrol</li>
                            <li>List Owner</li>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-5 sar_line">
                      <div className="row">
                        <div className="col-lg-9">
                          <div className="row ">
                            <div className="col-lg-12">
                              <div style={{ fontSize: "15px", color: "#2650D8" }}><span><b style={{ width: "150px" }}> ₹6,45,934</b></span></div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-lg-12">
                              <div style={{ fontSize: "12px", color: "#5D6186" }}><span style={{ width: "100px" }}>Classic Cars, Thane</span></div>
                            </div>
                          </div>
                          <div className="row mt-5">
                            <div className="col-lg-12">
                              <div style={{ fontSize: "15px" }}><span><b style={{ width: "150px", color: "#00155A" }}>All Leads: <span style={{ color: "#2650D8" }}>999</span></b></span></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="mg_icon d-flex align-items-center justify-content-center sar_icon"><FaRegEdit onClick={() => navigate('/car&accessory/edit')} /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ fontSize: "15px", marginTop: "20px", borderTop: "2px solid #999999", paddingTop: "20px" }}><span><b style={{ width: "150px", color: "#00155A" }}>All Leads</b></span></div>

              <table style={{ width: '100%', backgroundColor: "#fff", borderRadius: "10px" }} className="mt-2">
                <tr style={{ color: "#2650D8", fontSize: "15px", borderBottom: "1px solid #9999997c", paddingBottom: "15px" }} className="nuc_table">
                  <th>Offered by</th>
                  <th>Offer Contact</th>
                  <th>Amount</th>
                  <th>Offer Date & Time</th>
                  <th>Lead Type</th>
                </tr>
                <tr className="nuc_tr">
                  <td>Alex Morgan</td>
                  <td>8876543465</td>
                  <td style={{ color: "#438969" }}>₹6,459</td>
                  <td>21/01/2021-11.00 AM</td>
                  <td style={{ color: "#438969" }}>NEW</td>
                </tr>
                <tr className="nuc_tr">
                  <td>Alex Morgan</td>
                  <td>8876543465</td>
                  <td style={{ color: "#438969" }}>₹6,459</td>
                  <td>21/01/2021-11.00 AM</td>
                  <td style={{ color: "#438969" }}>NEW</td>
                </tr>
                <tr className="nuc_tr">
                  <td>Alex Morgan</td>
                  <td>8876543465</td>
                  <td style={{ color: "#438969" }}>₹6,459</td>
                  <td>21/01/2021-11.00 AM</td>
                  <td style={{ color: "#438969" }}>NEW</td>
                </tr>
                <tr className="nuc_tr">
                  <td>Alex Morgan</td>
                  <td>8876543465</td>
                  <td style={{ color: "#438969" }}>₹6,459</td>
                  <td>21/01/2021-11.00 AM</td>
                  <td style={{ color: "#438969" }}>NEW</td>
                </tr>
              </table>


              <div style={{ color: "#00155A", fontSize: "15px", marginTop: "18px" }}><b>Comment by Owner</b></div>

              <div className="form-group">
                <input className="form-control al_input2" placeholder="Excellent Condition, Single handed Used, Fully loaded accessories, New Tires" />
              </div>

              <div style={{ color: "#00155A", fontSize: "15px", marginTop: "18px" }}><b>Overview</b></div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-12 col-lg-12">
                      <div className="cad_1">
                        {fals.map(fal =>
                          <div className="row" style={{ borderBottom: '2px solid #9999996b' }}>
                            <div className="col-lg-6 col-6">
                              <div className="cad_02">{fal.title1}</div>
                            </div>
                            <div className="col-lg-6 col-6">
                              <div className="cad_03">{fal.title2}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ color: "#00155A", fontSize: "15px", marginTop: "18px" }}><b>Features</b></div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-12 col-lg-12">
                      <div className="cad_1">
                        {fals.map(fal =>
                          <div className="row" style={{ borderBottom: '2px solid #9999996b' }}>
                            <div className="col-lg-6 col-6">
                              <div className="cad_02">{fal.title1}</div>
                            </div>
                            <div className="col-lg-6 col-6">
                              <div className="cad_03">{fal.title2}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </>
        )}
      </div>
    </>
  )
}

const UsedCarComp = () => {
  const navigate = useNavigate();
  const contents = [
    {
      id: 1,
      link: "/new/usedcar/detail"
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ]

  return (
    <>
      <div className="row p2_row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-10 col-lg-10">
              <div className="d-flex mt-3">
                <button className="btn btn-mg-01">All Listing</button>
                <button className="btn btn-mg-02 ml-3">New Listing</button>
                <button className="btn btn-mg-02 ml-3">Old Listing</button>
              </div>
            </div>
            <div className="col-2 col-lg-2 mt-3">
              <div className="cons_icon"><FaSlidersH /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="used_car">
        {contents.map(content =>
          <>
            <Link to={`${content.link}`} style={{ textDecoration: 'none' }}>

              <div className="nuc_01">
                <div style={{ fontSize: "12px", color: "#2650D8" }}>#12345</div>
                <div className="row p2_row">
                  <div className="col-lg-12 col-12 padding_remover">
                    <div className="row">
                      <div className="col-lg-7 col-7">
                        <div className="d-flex">
                          <div>
                            <img src={image} alt="garage" width="120px" height="120px" className="mg_img_01" />
                          </div>
                          <div style={{ width: "170px" }} className="ml-3">
                            <div className="fifteen uc_font" style={{ color: "#00155A" }}>2016 Hyundai Creta</div>
                            <div style={{ color: "#5D6186", fontSize: "10px" }}>1.6 SX Plus AT Petrol</div>
                            <div style={{ color: "#5D6186", fontSize: "12px" }}>
                              <li>12300 kms</li>
                              <li>2019</li>
                              <li>Petrol</li>
                              <li>List Owner</li>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-5 sar_line">
                        <div className="row">
                          <div className="col-lg-9">
                            <div className="row ">
                              <div className="col-lg-12">
                                <div style={{ fontSize: "15px", color: "#2650D8" }}><span><b style={{ width: "150px" }}> ₹6,45,934</b></span></div>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-lg-12">
                                <div style={{ fontSize: "12px", color: "#5D6186" }}><span style={{ width: "100px" }}>Classic Cars, Thane</span></div>
                              </div>
                            </div>
                            <div className="row mt-5">
                              <div className="col-lg-12">
                                <div style={{ fontSize: "15px" }}><span><b style={{ width: "150px", color: "#00155A" }}>All Leads: <span style={{ color: "#2650D8" }}>999</span></b></span></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="mg_icon d-flex align-items-center justify-content-center sar_icon"><FaRegEdit onClick={() => navigate('/car&accessory/edit')} /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </>
        )}
      </div>
    </>
  )
}

export { ProductHeader, ApTitle, AsTitle, NucTitle, UsedCarComp, AlTitle, UsedCarDetComp, Nuc1Title, Nuc2Title }