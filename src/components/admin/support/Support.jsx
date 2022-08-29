import React, { useState } from 'react'
import Header from '../Header'
import CommonHeader from '../../Header/CommonHeader'
import { FaSlidersH } from 'react-icons/fa'
import { ActiveTickets, ClosedTickets, Faqs, AddFaq } from './SupportComp'

const Support = () => {

    const [Table, setTable] = useState({ Table: ActiveTickets });
    const [active, setActive] = useState(1);
    
    return (
        <>
            <div className="">
                <Header title="Support" navbar_comp={<CommonHeader />} />
                <div className="support">
                    <div className="sup_content">
                        <div className="sup_cate d-flex">
                            <div className={active === 1 ? "active_link" : "unactive_link"} onClick={() => { setTable({ Table: ActiveTickets }); setActive(1) }}>Active Tickets</div>
                            <div className={`ml-3 ${active === 2 ? "active_link" : "unactive_link"}`} onClick={() => { setTable({ Table: ClosedTickets }); setActive(2) }}>Closed Tickets</div>
                        </div>
                        <button className={active === 3 ? "sup_faq_btn_active btn mr-3" : "sup_faq_btn btn mr-3"} onClick={() => { setTable({ Table: Faqs }); setActive(3) }}>FAQs</button>
                        {active === 3 ? <AddFaq /> : (<div className="sup_icon"><FaSlidersH /></div>)}
                    </div>
                    <div className="sup_table">
                        <Table.Table />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support