import React, { useState } from 'react'
import { Garage1Title, GarageNav, Payments, Settlements } from './GarageComp'
import MetaData from '../../layout/MetaData'
import Header from '../Header'
import CommonHeader from '../../Header/CommonHeader'

const Garage5 = () => {
    const [Table, setTable] = useState({ Table: Payments });
    const [active, setActive] = useState(1)
    return (
        <>
            <MetaData title="Garage Finance" />
            <Header title={<Garage1Title />} navbar_comp={<CommonHeader />} />
            <div style={{ marginTop: "20px" }}><GarageNav /></div>
            <div className="row" style={{ margin: "15px" }}>
                <div className="d-flex justify-content-between">
                    <div style={{ width: "290px", backgroundColor: "#F4F8FF", border: "1px solid #ECEFF5", borderRadius: "10px", padding: "17px 20px" }}>
                        <div style={{ color: "#00155A", fontSize: "18px" }}><b>Total Earnings</b></div>
                        <div style={{ color: "#2650D8", fontSize: "22px" }}><b>₹15,800</b></div>
                    </div>
                    <div style={{ width: "290px", backgroundColor: "#F4F8FF", border: "1px solid #ECEFF5", borderRadius: "10px", padding: "17px 20px" }}>
                        <div style={{ color: "#00155A", fontSize: "18px" }}><b>Settled</b></div>
                        <div style={{ color: "#53BD8C", fontSize: "22px" }}><b>₹13,800</b></div>
                    </div>
                    <div style={{ width: "290px", backgroundColor: "#F4F8FF", border: "1px solid #ECEFF5", borderRadius: "10px", padding: "17px 20px" }}>
                        <div style={{ color: "#00155A", fontSize: "18px" }}><b>Pending</b></div>
                        <div style={{ color: "#F8484A", fontSize: "22px" }}><b>₹2,000</b></div>
                    </div>
                    <div style={{ width: "290px", backgroundColor: "#F4F8FF", border: "1px solid #ECEFF5", borderRadius: "10px", padding: "17px 20px" }}>
                        <div style={{ color: "#00155A", fontSize: "18px" }}><b>Awaiting Payment</b></div>
                        <div style={{ color: "#ED7D2B", fontSize: "22px" }}><b>₹2,000</b></div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="d-flex" style={{ width: "100%", borderBottom: "1px solid #ccc" }}>
                        <div className={active === 1 ? "active_link" : "unactive_link"} onClick={() => { setTable({ Table: Payments }); setActive(1) }}>Payments (22)</div>
                        <div className={`ml-3 ${active === 2 ? "active_link" : "unactive_link"}`} onClick={() => { setTable({ Table: Settlements }); setActive(2) }}>Settlements (232)</div>
                    </div>
                </div>
                <div className="sup_table page_reducer" style={{ height: "390px" }} >
                    <Table.Table />
                </div>
            </div>
        </>
    )
}

export default Garage5