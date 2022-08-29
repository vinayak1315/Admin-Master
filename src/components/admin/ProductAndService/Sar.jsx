// Service And Repair
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import { SarTitle, PSComp, RSAComp, ISComp } from './PasComp'
import MetaData from '../../layout/MetaData'
import Loader from '../../layout/Loader'
import { getAllService, getServicePackage, getServicePackageById } from '../../../actions/ServiceActions'
import { useSelector, useDispatch } from 'react-redux';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { CLEAR_ERRORS } from '../../../constants/ServiceConstants'
import sar_cross from '../../../images/sar_cross.png'
import image from '../../../images/image.jpg'
import { FaRegEdit } from 'react-icons/fa'


const Sar = () => {
  const inspections = [{}]
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [option, setOption] = useState(0);
  const [id, setId] = useState(1);
  const { servicesList, error, loading } = useSelector(state => state.getService);
  const { servicesLists } = useSelector(state => state.getServicePackage);
  const { filterList } = useSelector(state => state.getServicePackageById);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: CLEAR_ERRORS })
    }
    const formData = new FormData();
    formData.set("action", "getlist");

    dispatch(getAllService(1));

    const data = new FormData();
    data.set("action", "getlist");

    dispatch(getServicePackage(data));

    const idData = new FormData();
    idData.set("action", "getlistbyserviceId");
    idData.set("serviceId", id);
    console.log(id)
    dispatch(getServicePackageById(idData));

  }, [dispatch, id])
  return (
    <>
      <Header title={<SarTitle />} />       
      <MetaData title="Service & Repair" />
      {loading ? <Loader /> : (
        <div className="row p2_row">
          <div className="col-5 col-lg-4 count_box page_reducer">
            <div className="mt-2 text-center mb-2">
              <button className="btn mg_btn" style={{ width: "100%" }} onClick={() => navigate('/add/service')}>ADD NEW SERVICE</button>
            </div>
            {servicesList.map(data => (
              <div className="sar_box" style={{ cursor: "pointer" }} onClick={() => setId(data.serviceId)}>
                <div className="row">
                  <div className="col-6 col-lg-6">
                    <div className="d-flex align-items-center" style={{ height: "60px" }}>
                      <img src={data.imageUri} width="40px" height="35px" className="mr-1" />
                      <div className='ml-3' style={{ fontSize: "12px", color: "#00155A", width: "70px" }}><b>{data.name}</b></div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-6 side_border">
                    <span style={{ fontSize: "12px", color: "#00155A" }}>All Bookings</span><br /><div style={{ fontSize: "15px", color: "#2650D8" }}>900</div><div style={{ fontSize: "12px" }}><span style={{ color: "#438969" }}>10 + </span><span style={{ color: "#ED7D2B" }}>20</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-7 col-7 page_reducer">
            <div className="row p2_row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-12 col-lg-12">
                    <div className="d-flex mt-3">
                      <button className="btn btn-mg-01" style={{ width: "118px" }}>Service Packages</button>
                      <button className="btn btn-mg-02 ml-3" style={{ width: "118px" }}>Inspections</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="add_deal mt-2">
              <div className="air_fresh">Service Packages</div>
              {filterList ? (
                <>
                  {filterList.map(data =>
                    <div className="air_fresher1">
                      <div className="row p2_row">
                        <div className="col-lg-12 col-12 padding_remover">
                          <div className="row">
                            <div className="col-lg-7 col-7">
                              <div className="d-flex">
                                <div>
                                  <img src={data.packageImage} alt="garage" width="120px" height="120px" className="mg_img_01" />
                                </div>
                                <div className="ml-3">
                                  <div className="fifteen"><b>{data.packageName}</b></div>
                                  <div style={{ color: "#5D6186", fontSize: "12px", marginTop: "15px" }}>
                                    <li>{data.packagemonthKMS}</li>
                                    <li className="mt-2">{data.packagePoints} Points Service</li>
                                  </div>
                                  <div style={{ fontSize: "12px", marginTop: "22px" }} className={option == `${data.packageId}` ? "mr-5 link_hide" : " mr-5"}><div style={{ textDecoration: 'underline', color: "#2650D8", cursor: "pointer" }} onClick={() => setOption(`${data.packageId}`)}>Show More</div></div>
                                  <div className="sar_rec">{data.rec}</div>
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
                                  <div className="mg_icon d-flex align-items-center justify-content-center sar_icon"><FaRegEdit onClick={() => navigate(`/service&repair/edit/${data.packageId}`)} /></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-lg-12">
                              <div className={option === `${data.packageId}` ? "sar_show" : "sar_hide"}>
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
                  <div className="air_fresh">Inspections</div>
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
                </>
              ) : (
                <>
                  {servicesLists.map(data =>
                    <div className="air_fresher1">
                      <div className="row p2_row">
                        <div className="col-lg-12 col-12 padding_remover">
                          <div className="row">
                            <div className="col-lg-7 col-7">
                              <div className="d-flex">
                                <div>
                                  <img src={data.packageImage} alt="garage" width="120px" height="120px" className="mg_img_01" />
                                </div>
                                <div className="ml-3">
                                  <div className="fifteen"><b>{data.packageName}</b></div>
                                  <div style={{ color: "#5D6186", fontSize: "12px", marginTop: "15px" }}>
                                    <li>{data.packagemonthKMS}</li>
                                    <li className="mt-2">{data.packagePoints} Points Service</li>
                                  </div>
                                  <div style={{ fontSize: "12px", marginTop: "22px" }} className={option == `${data.packageId}` ? "mr-5 link_hide" : " mr-5"}><div style={{ textDecoration: 'underline', color: "#2650D8", cursor: "pointer" }} onClick={() => setOption(`${data.packageId}`)}>Show More</div></div>
                                  <div className="sar_rec">{data.rec}</div>
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
                                  <div className="mg_icon d-flex align-items-center justify-content-center sar_icon"><FaRegEdit onClick={() => navigate('/service&repair/edit')} /></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-lg-12">
                              <div className={option === `${data.packageId}` ? "sar_show" : "sar_hide"}>
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
                  <div className="air_fresh">Inspections</div>
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
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Sar