import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import dummy_img from '../../../images/image.jpg'
import star from "../../../images/star.png"
const MgWorldTitle = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <Link to="/support" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
        </div>
        <div>Add Deals</div>
      </div>
    </>
  )
}
const Deal = () => {
  const deals = [
    {
      title: "Leather Seat Covers"
    },
    {
      title: "Car Shade"
    },
    {
      title: "Ash Tray"
    },
    {
      title: "Car Shade"
    },
  ]
  return (

    <>
      <div className="row">
        {deals.map(deal => (
          <div className="col-lg-3 col-12">
            <div className="mg_cards">
              <img className="mg_img" src={dummy_img} alt="dummy_img" width="250px" height="231px" />
              <div className="mg_box_1">
                <div className="mg_title" style={{ fontSize: "16px" }}>Leather Seat Covers</div>
                <div className="d-flex mg_payment mt-1">
                  <img src={star} width="20px" height="20px" />
                  <div style={{ fontSize: "14px" }} className="orange ml-1">1000 MG Coins</div>
                  <div style={{ fontSize: "12px", color: "#999999" }} className="price_mg ml-5">Rs.6459</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const History = () => {
  return (
    <>

<table style={{ width: '100%' }} className="mt-2">
        <tr className="title_table">
          <th>Booking ID</th>
          <th>Coins Reedemed</th>
          <th>Coins Earn</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr className="table_row">
          <td>#123456<br></br><span>21/01/2021-11:00 AM</span></td>
          <td style={{ color: "#F45C3B" }}>5000</td>
          <td style={{ color: "#438969" }}>5000</td>
          <td></td>
          <td></td>
          <td></td>
          <td><div><Link to='' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
        <tr className="table_row">
          <td>#123456<br></br><span>21/01/2021-11:00 AM</span></td>
          <td style={{ color: "#F45C3B" }}>5000</td>
          <td style={{ color: "#438969" }}>5000</td>
          <td></td>
          <td></td>
          <td></td>
          <td><div><Link to='' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
        <tr className="table_row">
          <td>#123456<br></br><span>21/01/2021-11:00 AM</span></td>
          <td style={{ color: "#F45C3B" }}>5000</td>
          <td style={{ color: "#438969" }}>5000</td>
          <td></td>
          <td></td>
          <td></td>
          <td><div><Link to='' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
        <tr className="table_row">
          <td>#123456<br></br><span>21/01/2021-11:00 AM</span></td>
          <td style={{ color: "#F45C3B" }}>5000</td>
          <td style={{ color: "#438969" }}>5000</td>
          <td></td>
          <td></td>
          <td></td>
          <td><div><Link to='' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
      </table>
    </>
  )
}
const Booking = () => {
  return (
    <>
    <div className="mt-3 d-flex">
        <div>
          <button className="btn btn-mg-world" style={{ fontSize: "10px" }}>Ongoing Bookings (192)</button>
        </div>
        <div className="ml-3">
          <button className="btn btn-mg-world-2 " style={{ fontSize: "10px" }}>Ongoing Bookings (192)</button>
        </div>
        <div className="ml-3">
          <button className="btn btn-mg-world-2 " style={{ fontSize: "10px" }}>Ongoing Bookings (192)</button>
        </div>
        <div className="ml-3">
          <button className="btn btn-mg-world-2 " style={{ fontSize: "10px" }}>Ongoing Bookings (192)</button>
        </div>
        <div className="ml-3">
          <button className="btn btn-mg-world-2 " style={{ fontSize: "10px" }}>Ongoing Bookings (192)</button>
        </div>
      </div>

      <table style={{ width: '100%' }} className="mt-2">
        <tr className="title_table">
          <th>Booking ID</th>
          <th>Product Details</th>
          <th>Customer Details</th>
          <th>Product Details</th>
          <th>Status Update</th>
          <th>MG Coins</th>
          <th></th>
        </tr>
        <tr className="table_row">
          <td>#123456</td>
          <td>Maruti XL6 Petrol</td>
          <td>Phunsuk Wangdu</td>
          <td>Seat cover</td>
          <td>Order Confirmed</td>
          <td style={{ color: "#438969" }}>4567</td>
          <td><div><Link to='' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
        <tr className="table_row">
          <td>#123456</td>
          <td>Maruti XL6 Petrol</td>
          <td>Phunsuk Wangdu</td>
          <td>Seat cover</td>
          <td>Packed</td>
          <td style={{ color: "#438969" }}>4567</td>
          <td><div><Link to='' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
        <tr className="table_row">
          <td>#123456</td>
          <td>Maruti XL6 Petrol</td>
          <td>Phunsuk Wangdu</td>
          <td>Seat cover</td>
          <td>Shipped</td>
          <td style={{ color: "#438969" }}>4567</td>
          <td><div><Link to='' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
        <tr className="table_row">
          <td>#123456</td>
          <td>Maruti XL6 Petrol</td>
          <td>Phunsuk Wangdu</td>
          <td>Seat cover</td>
          <td>Out for Delivery</td>
          <td style={{ color: "#438969" }}>4567</td>
          <td><div><Link to='' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
        <tr className="table_row">
          <td>#123456</td>
          <td>Maruti XL6 Petrol</td>
          <td>Phunsuk Wangdu</td>
          <td>Seat cover</td>
          <td>Order Confirmed</td>
          <td style={{ color: "#438969" }}>4567</td>
          <td><div><Link to='' style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
      </table>
      
      
    </>
  )
}
export { MgWorldTitle, Deal, History, Booking }