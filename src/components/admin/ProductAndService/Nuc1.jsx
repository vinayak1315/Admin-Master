// Service And Repair
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Nuc1Title, UsedCarDetComp, ProductHeader } from './ProductComp'
const Nuc1 = () => {
    const services = [
        {
            title: "Listed by Dealers",
            count: 1500,
            total: 912,
            complete: 900,
            ongoing: 12,
            page: UsedCarDetComp,
            link: "/car&accessory"
        },
        {
            title: 'Listed by Individuals',
            count: 1500,
            total: 912,
            complete: 900,
            ongoing: 12,
        },
        {
            title: "Certified by MG",
            count: 1500,
            total: 912,
            complete: 900,
            ongoing: 12,
        }
    ]

    const [Page, setPage] = useState({ Page: UsedCarDetComp });
    const navigate = useNavigate();
    return (
        <>
            <ProductHeader title={<Nuc1Title />} />
            <div className="row p2_row">
                <div className="col-4 col-lg-4 count_box">
                    <div className="mt-2 text-center mb-2" style={{ width: "100%" }}>
                        <button className="btn mg_btn" style={{ width: "100%" }} onClick={() => navigate("/add/listing")}>ADD USED CAR</button>
                    </div>
                    <div><span className="uc_font mt-3" style={{ color: "#00155A", fontSize: "15px" }}>Listed Car: </span><span className="uc_font" style={{ color: "#2650D8", fontSize: "15px" }}>999</span></div>
                    {services.map(service => (
                        <Link to={`${service.link}`} style={{ textDecoration: 'none' }}>

                            <div className="sar_box" style={{ cursor: "pointer" }} onClick={() => setPage({ Page: service.page })}>
                                <div className="row">
                                    <div className="col-6 col-lg-6">
                                        <div className="d-flex align-items-center" style={{ height: "60px" }}>
                                            <div className='ml-3' style={{ fontSize: "12px", color: "#00155A" }}><b>{service.title}</b></div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-6 side_border">
                                        <span style={{ fontSize: "12px", color: "#00155A" }}>All Listing</span><br /><div style={{ fontSize: "15px", color: "#2650D8" }}>{service.total}</div><div style={{ fontSize: "12px" }}><span style={{ color: "#438969" }}>{service.complete} + </span><span style={{ color: "#ED7D2B" }}>{service.ongoing}</span></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="col-lg-7 col-7 page_reducer">
                    <Page.Page />
                </div>
            </div>
        </>
    )
}

export default Nuc1