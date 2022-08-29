import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaAngleLeft } from 'react-icons/fa'

import image from '../../../images/image.jpg'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
import sar_cross from '../../../images/sar_cross.png'
import { useSelector, useDispatch } from 'react-redux'
import { CLEAR_ERRORS } from '../../../constants/ServiceConstants'
// import { getServicePackage } from '../../../actions/ServiceActions'

const SarTitle = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <Link to="/promotion/ratings" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
        </div>
        <div style={{ color: "#00155A", fontSize: "20px" }}>Service & Repairs</div>
      </div>
    </>
  )
}

const CcaTitle = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <Link to="/promotion/ratings" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
        </div>
        <div style={{ color: "#00155A", fontSize: "20px" }}>Car Care & Accessory</div>
      </div>
    </>
  )
}




const RSAComp = () => {
  const sidecontents = [
    {
      title: "Battery Jumpstart",
      content: "Every 10000 Kms or 6 months",
      point: "Scanner Report Provided",
      id: 1
    },
    {
      title: "Car Fluid Leakage",
      content: "Body Damage Inspection",
      point: "Insurance Claim Advice",
      rec: "",
      id: 2
    },
    {
      title: "Car Towing Service",
      content: "Scanner Report Provided",
      point: "50 points Checklist",
      rec: "recommended",
      id: 3
    },
    {
      title: "Car Self Starter Issue",
      content: "Engine Overfiring? ",
      point: "Engine Overheating?",
      rec: "recommended",
      id: 4
    },
    {
      title: "Clutch Breakdown",
      content: "Hard Steering?",
      point: "Noises from Suspension?",
      rec: "",
      id: 5
    }
  ]

  const [option, setOption] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <div className="add_deal mt-2">
        <div className="air_fresh">All in One</div>
        {sidecontents.map(content =>
          <div className="air_fresher1">
            <div className="row p2_row">
              <div className="col-lg-12 col-12 padding_remover">
                <div className="row">
                  <div className="col-lg-7 col-9">
                    <div className="d-flex">
                      <div>
                        <img src={image} alt="garage" width="120px" height="120px" className="mg_img_01" />
                      </div>
                      <div className="ml-3">
                        <div className="fifteen"><b>{content.title}</b></div>
                        <div style={{ color: "#5D6186", fontSize: "12px", marginTop: "15px" }}>
                          <li>{content.content}</li>
                          <li className="mt-2">{content.point}</li>
                        </div>
                        <div style={{ fontSize: "12px", marginTop: "22px" }} className={option == `${content.id}` ? "mr-5 link_hide" : " mr-5"}><div style={{ textDecoration: 'underline', color: "#2650D8", cursor: "pointer" }} onClick={() => setOption(`${content.id}`)}>Show More</div></div>
                        <div className="sar_rec">{content.rec}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-3 sar_line">
                    <div className="row">
                      <div className="col-lg-9">
                        <div className="row mt-4">
                          <div className="col-lg-6">
                            <div style={{ fontSize: "15px", color: "#2650D8" }}><span><b style={{ width: "150px" }}> All Booking</b></span></div>
                          </div>
                          <div className="col-lg-6">
                            <div style={{ fontSize: "15px", color: "#2650D8" }}>999</div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-lg-6">
                            <div style={{ fontSize: "12px", color: "#ED7D2B" }}><span style={{ width: "100px" }}>Ongoing</span></div>
                          </div>
                          <div className="col-lg-6">
                            <div style={{ fontSize: "12px", color: "#ED7D2B" }}>912</div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-lg-6">
                            <div style={{ fontSize: "12px", color: "#438969" }}><span style={{ width: "100px" }}>Completed</span></div>
                          </div>
                          <div className="col-lg-6">
                            <div style={{ fontSize: "12px", color: "#438969" }}>912</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="mg_icon d-flex align-items-center justify-content-center sar_icon"><FaRegEdit onClick={() => navigate('/service&repair/edit')} /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className={option === `${content.id}` ? "sar_show" : "sar_hide"}>
                      <div style={{ color: "#00155A", fontSize: "15px" }}><b>What's Included</b></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Engine Oil Replacement</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Oil Filter Replacement</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Air Filter</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Coolant Top up</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Wiper Fluid Replacement</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Battery Water Top up</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Heater/Spark plugs checking</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Car Wash</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Interior Vacuuming (Carpets & Seats)</span></div>
                      <div className="sar_position" onClick={() => setOption(0)}>
                        <div className="sar_cross d-flex justify-content-center align-items-center">
                          <img src={sar_cross} width="11px" height="11px" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

const ISComp = () => {
  const sidecontents = [
    {
      title: "Car Inspection & Diagnostics",
      content: "Every 10000 Kms or 6 months",
      point: "Scanner Report Provided",
      rec: "recommended",
      id: 1
    },
    {
      title: "Doorstep Accidental Inspection",
      content: "Body Damage Inspection Insurance",
      point: "Claim Advice",
      rec: "",
      id: 2
    }
  ]
  const inspections = [
    {
      title: "Engine Scanning",
      content: "Engine Overfiring? ",
      point: "Engine Overheating?",
      id: 3,
    }, {
      title: "Suspension & Steering Inspection",
      content: "Hard Steering?",
      point: "Noises from Suspension?",
      rec: "",
      id: 4
    }
  ]
  const [option, setOption] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <div className="row p2_row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="d-flex mt-3">
                <button className="btn btn-mg-01" style={{ width: "118px" }}>All in One</button>
                <button className="btn btn-mg-02 ml-3" style={{ width: "118px" }}>Others</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="add_deal mt-2">
        <div className="air_fresh">All in One</div>
        {sidecontents.map(content =>
          <div className="air_fresher1">
            <div className="row p2_row">
              <div className="col-lg-12 col-12 padding_remover">
                <div className="row">
                  <div className="col-lg-7 col-9">
                    <div className="d-flex">
                      <div>
                        <img src={image} alt="garage" width="120px" height="120px" className="mg_img_01" />
                      </div>
                      <div className="ml-3">
                        <div className="fifteen"><b>{content.title}</b></div>
                        <div style={{ color: "#5D6186", fontSize: "12px", marginTop: "15px" }}>
                          <li>{content.content}</li>
                          <li className="mt-2">{content.point}</li>
                        </div>
                        <div style={{ fontSize: "12px", marginTop: "22px" }} className={option == `${content.id}` ? "mr-5 link_hide" : " mr-5"}><div style={{ textDecoration: 'underline', color: "#2650D8", cursor: "pointer" }} onClick={() => setOption(`${content.id}`)}>Show More</div></div>
                        <div className="sar_rec">{content.rec}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-3 sar_line">
                    <div className="row">
                      <div className="col-lg-9">
                        <div className="row mt-4">
                          <div className="col-lg-6">
                            <div style={{ fontSize: "15px", color: "#2650D8" }}><span><b style={{ width: "150px" }}> All Booking</b></span></div>
                          </div>
                          <div className="col-lg-6">
                            <div style={{ fontSize: "15px", color: "#2650D8" }}>999</div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-lg-6">
                            <div style={{ fontSize: "12px", color: "#ED7D2B" }}><span style={{ width: "100px" }}>Ongoing</span></div>
                          </div>
                          <div className="col-lg-6">
                            <div style={{ fontSize: "12px", color: "#ED7D2B" }}>912</div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-lg-6">
                            <div style={{ fontSize: "12px", color: "#438969" }}><span style={{ width: "100px" }}>Completed</span></div>
                          </div>
                          <div className="col-lg-6">
                            <div style={{ fontSize: "12px", color: "#438969" }}>912</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="mg_icon d-flex align-items-center justify-content-center sar_icon"><FaRegEdit onClick={() => navigate('/service&repair/edit')} /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className={option === `${content.id}` ? "sar_show" : "sar_hide"}>
                      <div style={{ color: "#00155A", fontSize: "15px" }}><b>What's Included</b></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Engine Oil Replacement</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Oil Filter Replacement</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Air Filter</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Coolant Top up</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Wiper Fluid Replacement</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Battery Water Top up</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Heater/Spark plugs checking</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Car Wash</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Interior Vacuuming (Carpets & Seats)</span></div>
                      <div className="sar_position" onClick={() => setOption(0)}>
                        <div className="sar_cross d-flex justify-content-center align-items-center">
                          <img src={sar_cross} width="11px" height="11px" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="air_fresh">Others</div>
        {inspections.map(content =>
          <div className="air_fresher1">
            <div className="row p2_row">
              <div className="col-lg-12 col-12 padding_remover">
                <div className="row">
                  <div className="col-lg-7 col-9">
                    <div className="d-flex">
                      <div>
                        <img src={image} alt="garage" width="120px" height="120px" className="mg_img_01" />
                      </div>
                      <div className="ml-3">
                        <div className="fifteen"><b>{content.title}</b></div>
                        <div style={{ color: "#5D6186", fontSize: "12px", marginTop: "15px" }}>
                          <li>{content.content}</li>
                          <li className="mt-2">{content.point} Points Service</li>
                        </div>
                        <div style={{ fontSize: "12px", marginTop: "22px" }} className={option == `${content.id}` ? "mr-5 link_hide" : " mr-5"}><div style={{ textDecoration: 'underline', color: "#2650D8", cursor: "pointer" }} onClick={() => setOption(`${content.id}`)}>Show More</div></div>
                        <div className="sar_rec">{content.rec}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-3 sar_line">
                    <div className="row">
                      <div className="col-lg-9">
                        <div className="row mt-4">
                          <div className="col-lg-6">
                            <div style={{ fontSize: "15px", color: "#2650D8" }}><span><b style={{ width: "150px" }}> All Booking</b></span></div>
                          </div>
                          <div className="col-lg-6">
                            <div style={{ fontSize: "15px", color: "#2650D8" }}>999</div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-lg-6">
                            <div style={{ fontSize: "12px", color: "#ED7D2B" }}><span style={{ width: "100px" }}>Ongoing</span></div>
                          </div>
                          <div className="col-lg-6">
                            <div style={{ fontSize: "12px", color: "#ED7D2B" }}>912</div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-lg-6">
                            <div style={{ fontSize: "12px", color: "#438969" }}><span style={{ width: "100px" }}>Completed</span></div>
                          </div>
                          <div className="col-lg-6">
                            <div style={{ fontSize: "12px", color: "#438969" }}>912</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="mg_icon d-flex align-items-center justify-content-center sar_icon"><FaRegEdit onClick={() => navigate('/service&repair/edit')} /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className={option === `${content.id}` ? "sar_show" : "sar_hide"}>
                      <div style={{ color: "#00155A", fontSize: "15px" }}><b>What's Included</b></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Engine Oil Replacement</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Oil Filter Replacement</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Air Filter</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Coolant Top up</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Wiper Fluid Replacement</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Battery Water Top up</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Heater/Spark plugs checking</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Car Wash</span></div>
                      <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Interior Vacuuming (Carpets & Seats)</span></div>
                      <div className="sar_position" onClick={() => setOption(0)}>
                        <div className="sar_cross d-flex justify-content-center align-items-center">
                          <img src={sar_cross} width="11px" height="11px" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

const FreshnersComp = () => {
  const navigate = useNavigate();
  const contents = [
    {
      id: 1
    },
    {
      id: 2
    }
  ]

  const contents1 = [
    {
      id: 3
    },
    {
      id: 4
    }
  ]
  const cads = [
    {
      title1: "Color",
      title2: "Lush Green"
    },
    {
      title1: "Item Dimensions",
      title2: "8 x 12 x 8 cm"
    },
    {
      title1: "Item Weight",
      title2: "275 gm"
    },
    {
      title1: "Duration",
      title2: "45 days"
    },
    {
      title1: "Manufacturer",
      title2: "Air Pro"
    },
    {
      title1: "Manufacturer Warranty",
      title2: "1 year Warranty"
    },
    {
      title1: "Quantity",
      title2: "4"
    }
  ]
  const [option, setOption] = useState(0);
  return (
    <>
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
                    <div className="col-lg-7 col-7">
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
                    <div className="col-lg-5 col-5 sar_line">
                      <div className="row">
                        <div className="col-lg-9">
                          <div className="row mt-4">
                            <div className="col-lg-6">
                              <div style={{ fontSize: "15px", color: "#2650D8" }}><span><b style={{ width: "150px" }}> All Booking</b></span></div>
                            </div>
                            <div className="col-lg-6">
                              <div style={{ fontSize: "15px", color: "#2650D8" }}>999</div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-lg-6">
                              <div style={{ fontSize: "12px", color: "#ED7D2B" }}><span style={{ width: "100px" }}>Ongoing</span></div>
                            </div>
                            <div className="col-lg-6">
                              <div style={{ fontSize: "12px", color: "#ED7D2B" }}>912</div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-lg-6">
                              <div style={{ fontSize: "12px", color: "#438969" }}><span style={{ width: "100px" }}>Completed</span></div>
                            </div>
                            <div className="col-lg-6">
                              <div style={{ fontSize: "12px", color: "#438969" }}>912</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="mg_icon d-flex align-items-center justify-content-center sar_icon"><FaRegEdit onClick={() => navigate('/care&accessory/edit')} /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ color: "#999999", fontSize: "12px" }} className="mt-4">Listed By</div>
              <div className="row p2_row">
                <div className="col-12 col-lg-12 d-flex justify-content-between">
                  <div style={{ fontSize: "12px" }}><span style={{ color: "#2650D8" }}>#123456</span><span style={{ color: "#5D6186" }} className="ml-1">VM Car AccessoriesMira Road</span></div>
                  <div style={{ fontSize: "12px", marginTop: "22px" }} className={option == `${content.id}` ? "mr-5 link_hide" : " mr-5"}><div style={{ textDecoration: 'underline', color: "#2650D8", cursor: "pointer" }} onClick={() => setOption(`${content.id}`)}>Show More</div></div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <div className={option === `${content.id}` ? "sar_show" : "sar_hide"}>
                    <div style={{ color: "#00155A", fontSize: "15px" }}><b>What's Included</b></div>
                    <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Keeps your car consistently fragrant for 60 days</span></div>
                    <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Clever gel technology that makes them spill-proof</span></div>
                    <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Easy to use click mechanism</span></div>
                    <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Comes in five designer fragrances for your every mood</span></div>
                    <div style={{ color: "#00155A", fontSize: "15px", marginTop: "15px" }}><b>Product Specification</b></div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-10 col-lg-8">
                            <div className="cad_1">
                              {cads.map(cad =>
                                <div className="row" style={{ borderBottom: '2px solid #9999996b' }}>
                                  <div className="col-lg-7 col-7">
                                    <div className="cad_02">{cad.title1}</div>
                                  </div>
                                  <div className="col-lg-5 col-6">
                                    <div className="cad_03">{cad.title2}</div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sar_position" onClick={() => setOption(0)}>
                      <div className="sar_cross d-flex justify-content-center align-items-center">
                        <img src={sar_cross} width="11px" height="11px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="air_fresh mt-4">Air Purifiers</div>
        {contents1.map(content =>
          <>
            <div className="air_fresher1">
              <div className="row p2_row">
                <div className="col-lg-12 col-12 padding_remover">
                  <div className="row">
                    <div className="col-lg-7 col-7">
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
                    <div className="col-lg-5 col-5 sar_line">
                      <div className="row">
                        <div className="col-lg-9">
                          <div className="row mt-4">
                            <div className="col-lg-6">
                              <div style={{ fontSize: "15px", color: "#2650D8" }}><span><b style={{ width: "150px" }}> All Booking</b></span></div>
                            </div>
                            <div className="col-lg-6">
                              <div style={{ fontSize: "15px", color: "#2650D8" }}>999</div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-lg-6">
                              <div style={{ fontSize: "12px", color: "#ED7D2B" }}><span style={{ width: "100px" }}>Ongoing</span></div>
                            </div>
                            <div className="col-lg-6">
                              <div style={{ fontSize: "12px", color: "#ED7D2B" }}>912</div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-lg-6">
                              <div style={{ fontSize: "12px", color: "#438969" }}><span style={{ width: "100px" }}>Completed</span></div>
                            </div>
                            <div className="col-lg-6">
                              <div style={{ fontSize: "12px", color: "#438969" }}>912</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="mg_icon d-flex align-items-center justify-content-center sar_icon"><FaRegEdit onClick={() => navigate('/care&accessory/edit')} /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ color: "#999999", fontSize: "12px" }} className="mt-1">Listed By</div>
              <div className="row p2_row">
                <div className="col-12 col-lg-12 d-flex justify-content-between">
                  <div style={{ fontSize: "12px" }}><span style={{ color: "#2650D8" }}>#123456</span><span style={{ color: "#5D6186" }} className="ml-1">VM Car AccessoriesMira Road</span></div>
                  <div style={{ fontSize: "12px", marginTop: "22px" }} className={option == `${content.id}` ? "mr-5 link_hide" : " mr-5"}><div style={{ textDecoration: 'underline', color: "#2650D8", cursor: "pointer" }} onClick={() => setOption(`${content.id}`)}>Show More</div></div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <div className={option === `${content.id}` ? "sar_show" : "sar_hide"}>
                    <div style={{ color: "#00155A", fontSize: "15px" }}><b>What's Included</b></div>
                    <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Keeps your car consistently fragrant for 60 days</span></div>
                    <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Clever gel technology that makes them spill-proof</span></div>
                    <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Easy to use click mechanism</span></div>
                    <div className="mt-2"><BsFillCheckCircleFill style={{ color: "#53BD8C", fontSize: "15px" }} /><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Comes in five designer fragrances for your every mood</span></div>
                    <div style={{ color: "#00155A", fontSize: "15px", marginTop: "15px" }}><b>Product Specification</b></div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-10 col-lg-8">
                            <div className="cad_1">
                              {cads.map(cad =>
                                <div className="row" style={{ borderBottom: '2px solid #9999996b' }}>
                                  <div className="col-lg-7 col-7">
                                    <div className="cad_02">{cad.title1}</div>
                                  </div>
                                  <div className="col-lg-5 col-6">
                                    <div className="cad_03">{cad.title2}</div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sar_position" onClick={() => setOption(0)}>
                      <div className="sar_cross d-flex justify-content-center align-items-center">
                        <img src={sar_cross} width="11px" height="11px" />
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

export { SarTitle, RSAComp, CcaTitle, ISComp, FreshnersComp }