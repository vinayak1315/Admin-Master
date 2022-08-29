import React from 'react'
import { Garage1Title, GarageNav, GarageOg } from './GarageComp'
import MetaData from '../../layout/MetaData'
import Header from '../../Header/HeaderNoSearch'
import { BsToggleOn } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import edit from '../../../images/edit.png'

const Garage3 = () => {
    const bookingsData = [
        {}, {}, {}, {}, {}, {}
    ]
    const value = "false";
    return (
        <>
            <MetaData title="Garage Services" />
            <Header title={<Garage1Title />} />
            <div style={{ margin: "20px" }}>
                <GarageNav />
                <div className="row">
                    <div className="col-lg-4">
                        <div style={{ margin: "20px", backgroundColor: "#F4F8FF" }}>
                            {value === "true" ? (
                                <button style={{ fontSize: "15px", padding: "10px 0", width: "100%", backgroundColor: "#53BD8C", color: "#fff", borderRadius: "6px" }} className="text-center btn">Select Car</button>
                            ) : (
                                <div className="garage3">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <div style={{ fontSize: "12px", fontWeight: "600" }}>Maruti Suzuki</div>
                                            <div><span style={{ color: "#5D6186", fontSize: "12px", fontWeight: "600" }}>Baleno </span><span style={{ color: "#999999", fontSize: "12px" }}>Petrol</span></div>
                                        </div>
                                        <div style={{ color: "#53BD8C", fontSize: "25px", cursor: "pointer" }}>
                                            <BsToggleOn />
                                        </div>
                                    </div>
                                    <div className="mt-2 d-flex justify-content-between">
                                        <div style={{ color: "#4250F0", fontSize: "12px" }}>Change</div>
                                        <div style={{ color: "#F8484A", fontSize: "12px" }}>Reset</div>
                                    </div>
                                </div>
                            )}
                            <div style={{ padding: "25px" }}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div style={{ color: "#00155A", fontSize: "15px" }}>Perodic Service</div>
                                    <div><BsToggleOn style={{ fontSize: "26px", color: "#53BD8C" }} /></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <div style={{ color: "#999999", fontSize: "15px" }}>AC Service & Repairs</div>
                                    <div><BsToggleOn style={{ fontSize: "26px", color: "#53BD8C" }} /></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <div style={{ color: "#999999", fontSize: "15px" }}>Battery Care</div>
                                    <div><BsToggleOn style={{ fontSize: "26px", color: "#53BD8C" }} /></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <div style={{ color: "#999999", fontSize: "15px" }}>Wheel Care</div>
                                    <div><BsToggleOn style={{ fontSize: "26px", color: "#53BD8C" }} /></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <div style={{ color: "#999999", fontSize: "15px" }}>Denting & Painting</div>
                                    <div><BsToggleOn style={{ fontSize: "26px", color: "#53BD8C" }} /></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <div style={{ color: "#999999", fontSize: "15px" }}>Mechanical Repairs</div>
                                    <div><BsToggleOn style={{ fontSize: "26px", color: "#53BD8C" }} /></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <div style={{ color: "#999999", fontSize: "15px" }}>Inspection Service</div>
                                    <div><BsToggleOn style={{ fontSize: "26px", color: "#53BD8C" }} /></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <div style={{ color: "#999999", fontSize: "15px" }}>Road Side Assistance</div>
                                    <div><BsToggleOn style={{ fontSize: "26px", color: "#53BD8C" }} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 page_reducer_1">
                        <div style={{ marginTop: "20px" }}>
                            <table style={{ width: '100%', marginTop: "10px" }}>
                                <tr className="title_table">
                                    <th>Package</th>
                                    <th>Ongoing</th>
                                    <th>Completed</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                                {bookingsData.map(data => (
                                    <tr className="table_row">
                                        <td>Basic Service</td>
                                        <td>912</td>
                                        <td>912</td>
                                        <td>
                                            {value === "true" ?
                                                (
                                                    <div style={{ color: "#999999" }}>Select Car</div>
                                                ) : (
                                                    <div className="d-flex align-items-center">
                                                        <div style={{ color: "#2650D8", fontSize: "15px" }}>₹499</div>
                                                        <div className="ml-4"><img src={edit} width="17px" height="17px" /></div>
                                                    </div>
                                                )
                                            }
                                        </td>
                                        <td><div><BsToggleOn style={{ fontSize: "26px", color: "#53BD8C" }} /></div></td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Garage3