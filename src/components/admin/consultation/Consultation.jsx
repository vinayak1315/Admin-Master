import React, { useState } from 'react'
import Header from '../Header'
import CommonHeader from '../../Header/CommonHeader'
import { FaSlidersH } from 'react-icons/fa'
import {ConsComplete, ConsAll, ConsCancel} from './ConsultationComp'
const Consultation = () => {
    const [Table, setTable] = useState({ Table: ConsAll });
    const [active, setActive] = useState(1)

    const cons_categories = [
        {
            title: "Car Engine Issues",
            count: 6459
        },
        {
            title: "Breakes & Wheels",
            count: 9143
        }, {
            title: "Clutch & Gear",
            count: 4584
        }, {
            title: "Suspenssion & Steering",
            count: 9143
        }, {
            title: "Faulty Electrials",
            count: 9143
        }, {
            title: "AC Repairs",
            count: 6459
        }, {
            title: "Body Fittings",
            count: 6459
        }, {
            title: "Others",
            count: 6459
        }
    ]
    return (
        <>
            <div className="page_reducer">
                <Header title={"Consultation"} navbar_comp={<CommonHeader />} />
                <div className="consultation_main">
                    <div className='cons_category'>
                        {cons_categories.map(cons_category => (
                            <>
                                <div className="cons_1">
                                    <div style={{ fontSize: "17px" }}><b>{cons_category.title}</b></div><br></br>
                                    <div style={{ fontSize: "18px" }} className="forgot_link"><b>{cons_category.count}</b></div><br></br>
                                </div>

                            </>
                        ))}
                    </div>
                    <div className="cons_content_2">
                        <div className="cons_cate d-flex">
                            <div className={active === 1 ? "active_link" : "unactive_link"} onClick={() => {setTable({ Table: ConsAll }); setActive(1)}}>All(1234)</div>
                            <div className={`ml-3 ${active === 2 ? "active_link" : "unactive_link"}`} onClick={() => {setTable({ Table: ConsComplete }); setActive(2)}}>Ongoing(192)</div>
                            <div className={`ml-3 ${active === 3 ? "active_link" : "unactive_link"}`} onClick={() => {setTable({ Table: ConsComplete });setActive(3)}}>Completed(192)</div>
                            <div className={`ml-3 ${active === 4 ? "active_link" : "unactive_link"}`} onClick={() => {setTable({ Table: ConsCancel });setActive(4)}}>Cancelled(192)</div>
                        </div>
                        <div className="cons_icon"><FaSlidersH /></div>
                    </div>
                    <div className="cons_table">
                        <Table.Table/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Consultation