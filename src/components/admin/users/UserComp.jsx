import { FaAngleLeft } from "react-icons/fa"
import { Link } from 'react-router-dom'
import chat from '../../../images/chat.png'
const UserTitle = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <Link to="/admin/users" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
        </div>
        <div>#123456</div>
      </div>
    </>
  )
}
const UserComp = () => {
  const bookingsData = [
    {}, {}, {}, {}
  ]
  const abuser = [
    {},{},{},{}
  ]
  return (
    <>
      {abuser.map(data =>
        <div className="user02_box mt-2">
          <div className="row">
            <div className="col-lg-3">
              <div className="row">
                <div className="col-lg-12">
                  <div style={{ color: "#999999", fontSize: "12px" }}>Booking ID</div>
                  <div style={{ color: "#00155A", fontSize: "15px" }}>MG123456789</div>
                </div>
                <div className="col-lg-12 mt-4">
                  <div style={{ color: "#999999", fontSize: "12px" }}>Booking Amount</div>
                  <div style={{ color: "#00155A", fontSize: "15px" }}>₹ 6,459</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="row">
                <div className="col-lg-12">
                  <div style={{ color: "#999999", fontSize: "12px" }}>Booking Date</div>
                  <div style={{ color: "#00155A", fontSize: "15px" }}>Feb 20, 2021</div>
                </div>
                <div className="col-lg-12 mt-4">
                  <div style={{ color: "#999999", fontSize: "12px" }}>Vehicle Details</div>
                  <div style={{ color: "#00155A", fontSize: "15px" }}>Scorpio-0099</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="row">
                <div className="col-lg-12">
                  <div style={{ color: "#999999", fontSize: "12px" }}>Booking Time</div>
                  <div style={{ color: "#00155A", fontSize: "15px" }}>11.00 am</div>
                </div>
                <div className="col-lg-12 mt-4">
                  <div style={{ color: "#999999", fontSize: "12px" }}>Booking Details</div>
                  <div style={{ color: "#00155A", fontSize: "15px" }}>Mahindra First Choice</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex align-items-center">
                    <div>
                      <div style={{ color: "#999999", fontSize: "12px" }}>Status</div>
                      <div style={{ color: "#F45C3B", fontSize: "15px" }}><b>Ongoing</b></div>
                    </div>
                    <div style={{ marginLeft: "40px" }} className="d-flex align-items-center">
                      <div className="sup_chat" ><img src={chat} width="19px" height="17px" /></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-4">
                  <div style={{ color: "#999999", fontSize: "12px" }}>Booking Amount</div>
                  <div style={{ color: "#2650D8", fontSize: "15px" }}>Work in Progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export { UserTitle, UserComp }