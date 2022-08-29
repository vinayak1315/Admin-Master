// Service And Repair
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import { CcaTitle, FreshnersComp } from './PasComp'
import { getAllService, getServicePackage, getServicePackageById } from '../../../actions/ServiceActions'
import { useSelector, useDispatch } from 'react-redux';
import { CLEAR_ERRORS } from '../../../constants/ServiceConstants'

const Cca = () => {
  const services = [
    {
      title: "Freshners",
      count: 1500,
      total: 912,
      complete: 900,
      ongoing: 12,
      page: FreshnersComp
    },
    {
      title: 'Seat Covers',
      count: 1500,
      total: 912,
      complete: 900,
      ongoing: 12,
      width: "40px",
      height: "35px"
    },
    {
      title: "Infotainment",
      count: 1500,
      total: 912,
      complete: 900,
      ongoing: 12,
      width: "32px",
      height: "35px"
    },
    {
      title: "Music Systems",
      count: 1500,
      total: 912,
      complete: 900,
      ongoing: 12,
      width: "38px",
      height: "35px"
    },
    {
      title: "Floor Mats",
      count: 1500,
      total: 912,
      complete: 900,
      ongoing: 12,
      width: "35px",
      height: "35px"
    },
    {
      title: "Cameras & more",
      count: 1500,
      total: 912,
      complete: 900,
      ongoing: 12,
      width: "33px",
      height: "33px"
    },
    {
      title: "Auto Styling",
      count: 1500,
      total: 912,
      complete: 900,
      ongoing: 12,
      width: "33px",
      height: "35px"
    },
    {
      title: "Auto Care Products",
      count: 1500,
      total: 912,
      complete: 900,
      ongoing: 12,
      width: "39px",
      height: "36px"
    }
  ]

  const [Page, setPage] = useState({ Page: FreshnersComp });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState(33);
  const { servicesList, error, loading } = useSelector(state => state.getService);
  const { filterList } = useSelector(state => state.getServicePackageById);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: CLEAR_ERRORS })
    }
    dispatch(getAllService(3));

    const idData = new FormData();
    idData.set("action", "getlistbyserviceId");
    idData.set("serviceId", id);
    console.log(id)
    dispatch(getServicePackageById(idData));
  },[dispatch, error])
  return (
    <>
      <Header title={<CcaTitle />} />
      <div className="row p2_row">
        <div className="col-4 col-lg-4 count_box ">
          <div className="page_reducer">
            <div className="mt-2 text-center mb-2" style={{ width: "100%" }}>
              <button className="btn mg_btn" style={{ width: "100%" }} onClick={() => navigate("/add/product")}>ADD NEW PRODUCT</button>
            </div>
            {servicesList.map(service => (
              <div className="sar_box" style={{ cursor: "pointer" }} onClick={() => setPage({ Page: service.page })}>
                <div className="row">
                  <div className="col-6 col-lg-6">
                    <div className="d-flex align-items-center" style={{ height: "60px" }}>
                      <div className='ml-3' style={{ fontSize: "12px", color: "#00155A" }}><b>{service.name}</b><br /><span style={{ color: "#5D6186", fontSize: "10px" }}>Total Listing: 1000</span></div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-6 side_border">
                    <span style={{ fontSize: "12px", color: "#00155A" }}>All Bookings</span><br /><div style={{ fontSize: "15px", color: "#2650D8" }}>99</div><div style={{ fontSize: "12px" }}><span style={{ color: "#438969" }}>99 + </span><span style={{ color: "#ED7D2B" }}>99</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-7 col-7 ">
          <div className="page_reducer">
            {filterList.map(()=> 
              <>
                
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cca