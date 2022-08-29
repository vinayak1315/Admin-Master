import React from 'react'
import {Link} from 'react-router-dom'
const ConsAll = () => {
  return (
    <>
      <table style={{ width: '100%' }}>
        <tr className="title_table">
          <th>Enquiry ID</th>
          <th>Date & Time</th>
          <th>Name & Contact</th>
          <th>Car Details</th>
          <th>Status</th>
          <th></th>
        </tr>
        <tr className="table_row">
          <td>#123456</td>
          <td>21/01/2021-11:00 AM</td>
          <td>Ramesh Kumar<br></br><span>8765427277</span></td>
          <td>Mahindra Thar<br></br><span>Diesel</span></td>
          <td>New Enquiry</td>
          <td><div><Link to='/consultation/detail' style={{textDecoration:'none'}} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
        <tr className="table_row">
          <td>#123456</td>
          <td>21/01/2021-11:00 AM</td>
          <td>Ramesh Kumar<br></br><span>8765427277</span></td>
          <td>Mahindra Thar<br></br><span>Diesel</span></td>
          <td>Collecting Requirements</td>
          <td><div><Link to='/consultation/detail/collecting_requirement' style={{textDecoration:'none'}} className="btn btn-cons_detail">View Details</Link></div></td>
        </tr>
        <tr className="table_row">
          <td>#123456</td>
          <td>21/01/2021-11:00 AM</td>
          <td>Ramesh Kumar<br></br><span>8765427277</span></td>
          <td>Mahindra Thar<br></br><span>Diesel</span></td>
          <td>Booked Inspection</td>
          <td><div><Link to='/consultation/detail' className="btn btn-cons_detail" style={{textDecoration:'none'}}>View Details</Link></div></td>
        </tr>
      </table>
    </>
  )
}
const ConsComplete = () => {
  return (
    <>
      <table style={{ width: '100%' }}>
        <tr className="title_table">
          <th>Enquiry ID</th>
          <th>Date & Time</th>
          <th>Name & Contact</th>
          <th>Car Details</th>
          <th>Garage & Price</th>
          <th></th>
        </tr>
        <tr className="table_row">
          <td>#123456</td>
          <td>21/01/2021-11:00 AM</td>
          <td>Ramesh Kumar<br></br><span>8765427277</span></td>
          <td>Mahindra Thar<br></br><span>Diesel</span></td>
          <td>Mahindra First Choice<br></br><span className="blueish">Rs.7500</span></td>
          <td><div className="btn btn-cons_detail"><Link to='/consultation/detail' style={{textDecoration:'none'}}>View Details</Link></div></td>
        </tr>
        <tr className="table_row">
          <td>#123456</td>
          <td>21/01/2021-11:00 AM</td>
          <td>Ramesh Kumar<br></br><span>8765427277</span></td>
          <td>Mahindra Thar<br></br><span>Diesel</span></td>
          <td>Mahindra First Choice<br></br><span className="blueish">Rs.7500</span></td>
          <td><div className="btn btn-cons_detail"><Link to='/consultation/detail' style={{textDecoration:'none'}}>View Details</Link></div></td>
        </tr>
        <tr className="table_row">
          <td>#123456</td>
          <td>21/01/2021-11:00 AM</td>
          <td>Ramesh Kumar<br></br><span>8765427277</span></td>
          <td>Mahindra Thar<br></br><span>Diesel</span></td>
          <td>Mahindra First Choice<br></br><span className="blueish">Rs.7500</span></td>
          <td><div className="btn btn-cons_detail"><Link to='/consultation/detail' style={{textDecoration:'none'}}>View Details</Link></div></td>
        </tr>
      </table>
    </>
  )
}

const ConsCancel = () => {
  return(
    <table style={{ width: '100%' }}>
    <tr className="title_table">
      <th>Enquiry ID</th>
      <th>Date & Time</th>
      <th>Name & Contact</th>
      <th>Car Details</th>
      <th>Cancellation Reason</th>
      <th></th>
    </tr>
    <tr className="table_row">
      <td>#123456</td>
      <td>21/01/2021-11:00 AM</td>
      <td>Ramesh Kumar<br></br><span>8765427277</span></td>
      <td>Mahindra Thar<br></br><span>Diesel</span></td>
      <td>Found Better Price<br></br><span className="blueish">3 Estimates</span></td>
      <td><div className="btn btn-cons_detail"><Link to='/consultation/detail' style={{textDecoration:'none'}}>View Details</Link></div></td>
    </tr>
    <tr className="table_row">
      <td>#123456</td>
      <td>21/01/2021-11:00 AM</td>
      <td>Ramesh Kumar<br></br><span>8765427277</span></td>
      <td>Mahindra Thar<br></br><span>Diesel</span></td>
      <td>May Book Some Other Day<br></br><span className="blueish">Rs.7500</span></td>
      <td><div className="btn btn-cons_detail"><Link to='/consultation/detail' style={{textDecoration:'none'}}>View Details</Link></div></td>
    </tr>
    <tr className="table_row">
      <td>#123456</td>
      <td>21/01/2021-11:00 AM</td>
      <td>Ramesh Kumar<br></br><span>8765427277</span></td>
      <td>Mahindra Thar<br></br><span>Diesel</span></td>
      <td>Not Available<br></br><span className="blueish">3 Estimates</span></td>
      <td><div className="btn btn-cons_detail"><Link to='/consultation/detail' style={{textDecoration:'none'}}>View Details</Link></div></td>
    </tr>
  </table>
  )
}

export { ConsComplete, ConsAll, ConsCancel }