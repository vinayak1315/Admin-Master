import React, { useState } from 'react'
import { Garage1Title, GarageNav, ActiveTickets, ClosedTickets } from './GarageComp'
import MetaData from '../../layout/MetaData'
import Header from '../Header'
import CommonHeader from '../../Header/CommonHeader'
import { BsToggleOn } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Garage4 = () => {
    const [Table, setTable] = useState({ Table: ActiveTickets });
    const [active, setActive] = useState(1)
    return (
        <>
            <MetaData title="Garage Tickets" />
            <Header title={<Garage1Title />} navbar_comp={<CommonHeader />} />
            <div style={{ margin: "20px 15px" }}>
                <GarageNav />
                <div style={{margin: "25px 15px" }} >
                    <div className="mt-3">
                        <div className="d-flex" style={{width:"100%", borderBottom: "1px solid #ccc"}}>
                            <div className={active === 1 ? "active_link" : "unactive_link"} onClick={() => { setTable({ Table: ActiveTickets }); setActive(1) }}>Active Tickets (22)</div>
                            <div className={`ml-3 ${active === 2 ? "active_link" : "unactive_link"}`} onClick={() => { setTable({ Table: ClosedTickets }); setActive(2) }}>Closed Tickets (232)</div>
                        </div>
                    </div>
                    <div className="sup_table page_reducer" style={{height:"490px"}} >
                        <Table.Table />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Garage4