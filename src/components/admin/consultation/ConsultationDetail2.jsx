import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import notification from '../../../images/notification.png'
import profiledown from '../../../images/profiledown.png'
import useravatar from '../../../images/useravatar.png'
import edit_icon from '../../../images/edit.png'
import paper from '../../../images/paper.png'
import ConsultationHeader from '../../Header/ConsultationHeader'
import AddService from '../../popups/AddService'
import { FaAngleLeft, FaPlus, FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { Modal, ModalHeader } from "reactstrap"
const ConsultationDetail2 = () => {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate();
    return (
        <>
            <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)} className="add_service_popup">
                <ModalHeader toggle={() => setModal(!modal)} className="add_service_body" >
                    <AddService />
                </ModalHeader>
            </Modal>

            <ConsultationHeader />
            <div className="page_reducer">
                <div className="cons_detail">
                    <div className="consdetail_c1 d-flex justify-content-center">
                        <div className="d-flex justify-content-center">
                            <div style={{ fontSize: "18px", flexGrow: 2 }}><b>Consultation Details</b></div>
                            <div className="btn btn-book ml-3" style={{ fontSize: "15px" }}>Book Inception</div>
                        </div>
                        <div className="status_book d-flex justify-content-end"><b>Status: <span className="blueish">Collecting Requirements</span></b></div>
                    </div>
                    <div className="detail_1">
                        <div className="detail_box">
                            <table className="table_detail_outer" style={{ width: '100%', backgroundColor: "#F8F9FA" }}>
                                <tr className="table_detail_tite">
                                    <th>Enquiry ID</th>
                                    <th>Car Details</th>
                                    <th>Custumor Details</th>
                                    <th style={{ width: "290px" }}>Service Address</th>
                                    <th style={{ width: '400px' }}>Enquiry for</th>
                                </tr>
                                <tr className="detail_row">
                                    <td style={{ color: "#5D6186" }}><b style={{ fontSize: "14px" }}>123456</b><br></br><p style={{ fontSize: "12px" }}>21/01/2021-11:00 AM</p></td>
                                    <td style={{ color: "#5D6186" }}><b style={{ fontSize: "14px" }}>Maruti XL6 Petrol</b><br></br><p style={{ fontSize: "12px" }}>Petrol</p></td>

                                    <td style={{ color: "#5D6186" }}><b style={{ fontSize: "14px" }}>Vicky Kaushal</b><br></br><p style={{ fontSize: "12px" }}>8876459234</p></td>

                                    <td>
                                        <div style={{ fontSize: "15px" }}>A-1234, Global Heights, Goregaon East, Mumbai, Maharashtra - 401100</div>
                                    </td>

                                    <td style={{ color: "#5D6186" }}>
                                        <b style={{ fontSize: "12px" }}>Clutch & Transimission, AC Service, Faukty Electrical, Body damage, Brakes & Wheels, Engines Issues, Suspension & Steering, Others</b>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="detail_filter">
                        <div className="consdetail_c1">
                            <div className="row">
                                <div className="col-lg-5 col-12">
                                    <div className="d-flex ml-2">
                                        <div style={{ fontSize: "18px" }}><b>Mechanical Repairs</b></div>
                                        <div className="fifteen cr">
                                            <Link to='' style={{ textDecoration: 'none' }} ><FaPlus className="blueish mr-2" />Add Images</Link>
                                        </div>
                                    </div>
                                    <div className="cons_d1">
                                        <div className="cons_d2">
                                            <div className="d2_content d-flex">
                                                <div className="fifteen">
                                                    <b className="blueish">Service 1</b> <span>Engine Repair</span>
                                                </div>
                                                <div>
                                                    <Link to="/consultation" style={{ textDecoration: 'none' }}><img src={edit_icon} width="16px" height="16px" className="ml-3 mb-1" /></Link>
                                                </div>
                                            </div>
                                            <p style={{ fontSize: "12px", color: "#999999", width: "400px" }} className="mt-2">Complete engine overhauling and parts replacement, needs work to be finished in 1 week</p>
                                            <form className="fifteen mt-3">
                                                <b className="blueish">Service 2</b>

                                                <div className="form-group">
                                                    <label>Service name</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Description</label>
                                                    <input className="form-control" type="text" style={{ height: "60px" }} />
                                                </div>
                                            </form>
                                            <div>
                                                <div className="row">
                                                    <div className="col-lg-12 col-12">
                                                        <div className="blueish text-center pointer">
                                                            <FaPlus /> Add More
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-12">
                                                        <button className="btn btn-blueish" onClick={() => { setModal(true) }}>Add Service</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-12">
                                    <div className="d-flex ml-4">
                                        <div style={{ fontSize: "15px" }}><b>Service Pin Code</b></div>
                                        <div className="fifteen ml-3" sytle={{ float: "left" }}>
                                            <Link to='' style={{ textDecoration: 'none', borderBottom: '1px solid grey' }} ><b>400-001</b></Link>
                                        </div>
                                        <div className="orange ml-3">Change</div>
                                    </div>
                                    <div className="cons_d4 mt-1">
                                        <div className="cons_d3">

                                            <div className="d-flex justify-content-center ">
                                                <img src={paper} height="87px" width="66px" alt="Invoice" />
                                                <div className="ml-3">
                                                    <div style={{ fontSize: "25px", color: "#00155A" }}>No Estimates Yet!</div>
                                                    <p style={{ fontSize: "15px", color: "#5D6186" }}>Start adding service to view the price estimates</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConsultationDetail2