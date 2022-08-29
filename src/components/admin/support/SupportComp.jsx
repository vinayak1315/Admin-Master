import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import chat from '../../../images/chat.png'
import { BsPlusLg, BsChevronDown } from 'react-icons/bs'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { FaAngleLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFaqs } from '../../../actions/SupportActions'
import Loader from '../../layout/Loader'
import { useAlert } from 'react-alert'

const ActiveTickets = () => {

  const navigate = useNavigate();

  return (
    <>
      <table style={{ width: '100%' }}>
        <tr className="title_table">
          <th>Ticket No.</th>
          <th>Booking ID</th>
          <th>Car Details</th>
          <th>Garage Details</th>
          <th>Status</th>
          <th></th>
          <th></th>
        </tr>
        <tr className="sups_row">
          <td>#123456<br /><span>21/01/2021-11:00 AM</span></td>
          <td>#123456<br /><span>21/01/2021-11:00 AM</span></td>
          <td>Mahindra Thar<br></br><span>Diesel</span></td>
          <td>Mahindra First Choice<br></br><span>Kandivali 400101</span></td>
          <td><span className="fifteen" style={{ color: "#438969" }}>OPEN</span></td>
          <td><div className="sup_chat" onClick={() => navigate('/support/chats')}><img src={chat} width="19px" height="17px" /></div></td>
          <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
        <tr className="sups_row">
          <td>#123456<br /><span>21/01/2021-11:00 AM</span></td>
          <td>#123456<br /><span>21/01/2021-11:00 AM</span></td>
          <td>Mahindra Thar<br></br><span>Diesel</span></td>
          <td>Mahindra First Choice<br></br><span>Kandivali 400101</span></td>
          <td><span className="fifteen" style={{ color: "#438969" }}>OPEN</span></td>
          <td><div className="sup_chat" onClick={() => navigate('/support/chats')}><img src={chat} width="19px" height="17px" /></div></td>
          <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
        <tr className="sups_row">
          <td>#123456<br /><span>21/01/2021-11:00 AM</span></td>
          <td>#123456<br /><span>21/01/2021-11:00 AM</span></td>
          <td>Mahindra Thar<br></br><span>Diesel</span></td>
          <td>Mahindra First Choice<br></br><span>Kandivali 400101</span></td>
          <td><span className="fifteen" style={{ color: "#438969" }}>OPEN</span></td>
          <td><div className="sup_chat" onClick={() => navigate('/support/chats')}><img src={chat} width="19px" height="17px" /></div></td>
          <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
      </table>
    </>
  )
}
const ClosedTickets = () => {
  return (
    <>
      <table style={{ width: '100%' }}>
        <tr className="title_table">
          <th>Ticket No.</th>
          <th>Booking ID</th>
          <th>Car Details</th>
          <th>Garage Details</th>
          <th>Ratings</th>
          <th>Status</th>
          <th></th>
        </tr>
        <tr className="sups_row">
          <td>#123456<br /><span>21/01/2021-11:00 AM</span></td>
          <td>#123456<br /><span>21/01/2021-11:00 AM</span></td>
          <td>Mahindra Thar<br></br><span>Diesel</span></td>
          <td>Mahindra First Choice<br></br><span>Kandivali 400101</span></td>
          <td><span style={{ fontSize: " 22px", color: "#ED7D2B" }}><FaStar /><FaStar className='ml-2' /><FaStar className='ml-2' /><FaStar className='ml-2' /><FaStar className='ml-2' /><br /></span><span style={{ color: "#4250F0", fontSize: "12px" }}><Link to='/' style={{ textDecoration: 'none' }}>Review</Link></span></td>
          <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
        <tr className="sups_row">
          <td>#123456<br /><span>21/01/2021-11:00 AM</span></td>
          <td>#123456<br /><span>21/01/2021-11:00 AM</span></td>
          <td>Mahindra Thar<br></br><span>Diesel</span></td>
          <td>Mahindra First Choice<br></br><span>Kandivali 400101</span></td>
          <td><span style={{ fontSize: " 22px", color: "#ED7D2B" }}><FaStar /><FaStar className='ml-2' /><FaStar className='ml-2' /><FaStar className='ml-2' /><FaStar className='ml-2' /><br /></span><span style={{ color: "#4250F0", fontSize: "12px" }}><Link to='/' style={{ textDecoration: 'none' }}>Review</Link></span></td>
          <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
        <tr className="sups_row">
          <td>#123456<br /><span>21/01/2021-11:00 AM</span></td>
          <td>#123456<br /><span>21/01/2021-11:00 AM</span></td>
          <td>Mahindra Thar<br></br><span>Diesel</span></td>
          <td>Mahindra First Choice<br></br><span>Kandivali 400101</span></td>
          <td><span style={{ fontSize: " 22px", color: "#ED7D2B" }}><FaStar /><FaStar className='ml-2' /><FaStar className='ml-2' /><FaStar className='ml-2' /><FaStar className='ml-2' /><br /></span><span style={{ color: "#4250F0", fontSize: "12px" }}><Link to='/' style={{ textDecoration: 'none' }}>Review</Link></span></td>
          <td><div><Link to='/consultation/detail' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
      </table>
    </>
  )
}

const Faqs = () => {
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();
  const { faqs, error, loading } = useSelector(state => state.faqs);
  const alert = useAlert();
  const [effect, setEffect] = useState(0)

  useEffect(() => {
    const formData = new FormData();
    formData.set("action", "list-faq");
    dispatch(getAllFaqs(formData));
    if (error) {
      alert.error(error)
    }
  }, [dispatch])

  return (
    <>
      {loading ? <Loader /> : (
        <div className="faq_content page_reducer_faq">
          <div className="d-flex mt-3">
            <button className={active === 1 ? "btn btn_supfa" : "btn btn_supfua"} onClick={() => setActive(1)}>All</button>
            <button className={active === 2 ? "btn btn_supfa ml-3" : "btn btn_supfua ml-3"} onClick={() => setActive(2)}>Service & Repairs</button>
            <button className={active === 3 ? "btn btn_supfa ml-3" : "btn btn_supfua ml-3"} onClick={() => setActive(3)}>Wash & Detailing</button>
            <button className={active === 4 ? "btn btn_supfa ml-3" : "btn btn_supfua ml-3"} onClick={() => setActive(4)}>Accessories</button>
            <button className={active === 5 ? "btn btn_supfa ml-3" : "btn btn_supfua ml-3"} onClick={() => setActive(5)}>Car Trade</button>
            <button className={active === 6 ? "btn btn_supfa ml-3" : "btn btn_supfua ml-3"} onClick={() => setActive(6)}>Fastag</button>
            <button className={active === 7 ? "btn btn_supfa ml-3" : "btn btn_supfua ml-3"} onClick={() => setActive(7)}>Challan</button>
            <button className={active === 8 ? "btn btn_supfa ml-3" : "btn btn_supfua ml-3"} onClick={() => setActive(8)}>Chauffer</button>
          </div>
          {faqs.map(box => (
            <div className="row faq_box">
              <div className="col-lg-2 col-2 col-md-3">
                <div className="faq_word d-flex justify-content-center mt-4">{box.faqId}</div>
              </div>
              <div className="col-lg-10 col-2 col-md-3" >
                <div className="faq_b1">
                  <div className="row">
                    <div className="col-lg-12 col-12 col-md-12">
                      <div className="row">
                        <div className="col-lg-11 col-11 col-md-11 py-2" style={{ borderBottom: '2px solid #99999973' }}>
                          <span style={{ color: "#00155A" }} className="faq_t1">{box.title}</span>
                        </div>
                        {effect === box.faqsId ?
                          <div className="col-lg-1 col-1 col-md-1" onClick={() => { setEffect(box.faqId)}}>
                            <IoIosArrowUp style={{ color: "#00155A", fontSize: "23px" }} />
                          </div>
                          :
                          <div className="col-lg-1 col-1 col-md-1" onClick={() => {setEffect(box.faqId); }}>
                            <IoIosArrowDown style={{ color: "#00155A", fontSize: "23px" }} />
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                  <div style={{ fontSize: "15px", color: "#5D6186" }} className={effect === box.faqsId ? " hide" : "mt-3 mb-3"}>
                    {box.body}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </>
  )
}

const AddFaq = () => {
  const navigate = useNavigate();

  return (
    <div className="add_faq">
      <BsPlusLg style={{ color: "white" }} onClick={() => navigate('/support/add/faqs')} />
    </div>
  )
}

const Sup_title = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <Link to="/support" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
        </div>
        <div>Add FAQs</div>
      </div>
    </>
  )
}

const Chat_title = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <Link to="/support" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
        </div>
        <div>Chats</div>
      </div>
    </>
  )
}
export { ActiveTickets, ClosedTickets, Faqs, AddFaq, Sup_title, Chat_title }