import React,{useState} from 'react'
import { Garage1Title, GarageNav, GarageOg } from './GarageComp'
import MetaData from '../../layout/MetaData'
import Header from '../../Header/HeaderNoSearch'
import {FaSlidersH} from 'react-icons/fa'

const Garage2 = () => {
    const [Table, setTable] = useState({ Table: GarageOg });
    const [active, setActive] = useState(1)
    return (
        <>
            <MetaData title="Garage Bookings" />
            <Header title={<Garage1Title />} />
            <div className="page_reducer">
                <div style={{margin:"20px"}}>
                    <GarageNav/>
                    <div className="cons_content_2 mt-3">
                        <div className="cons_cate d-flex">
                            <div className={active === 1 ? "active_link" : "unactive_link"} onClick={() => { setTable({ Table: GarageOg }); setActive(1) }}>Ongoing Bookings (10)</div>
                            <div className={`ml-3 ${active === 2 ? "active_link" : "unactive_link"}`} onClick={() => { setTable({ Table: GarageOg }); setActive(2) }}>Delivered Bookings (192)</div>
                            <div className={`ml-3 ${active === 3 ? "active_link" : "unactive_link"}`} onClick={() => { setTable({ Table: GarageOg }); setActive(3) }}>Cancelled Bookings (192)</div>
                            <div className={`ml-3 ${active === 4 ? "active_link" : "unactive_link"}`} onClick={() => { setTable({ Table: GarageOg }); setActive(4) }}>Approval Pending (192)</div>
                            <div className={`ml-3 ${active === 5 ? "active_link" : "unactive_link"}`} onClick={() => { setTable({ Table: GarageOg }); setActive(5) }}>Declined Bookings (192)</div>
                        </div>
                        <div className="cons_icon"><FaSlidersH /></div>
                    </div>
                    <div className="cons_table">
                        <Table.Table />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Garage2