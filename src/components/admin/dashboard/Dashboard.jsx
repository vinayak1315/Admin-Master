import React, { useEffect } from 'react'
import Header from '../Header'
import CommonHeader from '../../Header/CommonHeader'
import { BsChevronDown } from 'react-icons/bs'
import expand from '../../../images/expand.png'
import graph from '../../../images/graph.png'
import { Dash03 } from './DashboardComp'
import MetaData from '../../layout/MetaData'
import { useDispatch, useSelector } from "react-redux"
import { getAllService } from '../../../actions/dashboardActions'
import { useAlert } from 'react-alert'
import Loader from '../../layout/Loader'
const Dashboard = () => {
  const { services, loading, error } = useSelector(state => state.allService)
  const alert = useAlert();
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      alert.error(error)
    }
    const formData = new FormData();
    formData.set('action', 'getcounts')
    dispatch(getAllService(formData))
  }, [error, dispatch])
  const details = [
    {
      main: "Service & Repairs",
      count: 100
    },
    {
      main: "Wash & Detailing",
      count: 100
    },
    {
      main: "Accessories",
      count: 100
    },
    {
      main: "Car Trade",
      count: 100
    },
    {
      main: "Fastag",
      count: 100
    },
    {
      main: "Challan",
      count: 100
    },
    {
      main: "Chauffer",
      count: 100
    },
    {
      main: "Insurance",
      count: 100
    },
    {
      main: "Parkings",
      count: 100
    }
  ]
  const servicechecks = [
    {
      title: "Service & Repair Bookings"
    },
    {
      title: "Wash & Detailing Bookings"
    }
  ]
  const graphs = [
    {
      color: "#0058FF",
      title: "Service & Repairs",
      value: 50
    },
    {
      color: "#21D59B",
      title: "Wash & Detailing",
      value: 25
    },
    {
      color: "#FFC700",
      title: "Accessories",
      value: 15
    },
    {
      color: "#E7CBFE",
      title: "Car Trade",
      value: 15
    },
    {
      color: "#F99600",
      title: "fastag",
      value: 10
    },
    {
      color: "#AE64F9",
      title: "Challan",
      value: 10
    },
    {
      color: "#03DAC6",
      title: "Chauffer",
      value: 10
    },
    {
      color: "#F45C3B",
      title: "Insurance",
      value: 10
    },
    {
      color: "#039BFF",
      title: "Parkings",
      value: 10
    }
  ]

  var value = 0;
  {
    services.map(service => {
      value = value + service.totalCount;
    })
  }
  const serve = [{}, {}, {}, {}, {}]
  return (
    <>
      <MetaData title={"Dasboard"} />
      <Header title="Overview" navbar_comp={<CommonHeader />} />

      {loading ? <Loader /> : (
        <>
          <div className="page_reducer">
            <div className="dashboard">
              <div className="dash_01">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div style={{ color: "#00155A", fontSize: "18px" }}><b>All Bookings</b></div>
                        <div style={{ color: "#2650D8", fontSize: "18px" }}><b>999</b></div>
                      </div>
                      <div className="col-lg-6" style={{ borderLeft: "2px solid #4EE59D" }}>
                        <div style={{ color: "#00155A", fontSize: "18px" }}><b>Website Visitors</b></div>
                        <div style={{ color: "#2650D8", fontSize: "18px" }}><b>999</b></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-4" style={{ borderLeft: "2px solid #4EE59D" }}>
                        <div style={{ color: "#00155A", fontSize: "18px" }}><b>Appstore Downloads</b></div>
                        <div style={{ color: "#2650D8", fontSize: "18px" }}><b>999</b></div>
                      </div>
                      <div className="col-lg-4" style={{ borderLeft: "2px solid #4EE59D" }}>
                        <div style={{ color: "#00155A", fontSize: "18px" }}><b>Play Store Downloads</b></div>
                        <div style={{ color: "#2650D8", fontSize: "18px" }}><b>999</b></div>
                      </div>
                      <div className="col-lg-4" style={{ borderLeft: "2px solid #4EE59D" }}>
                        <div style={{ color: "#00155A", fontSize: "18px" }}><b>Current Active Users</b></div>
                        <div style={{ color: "#2650D8", fontSize: "18px" }}><b>999</b></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="d-flex justify-content-between">
                    {services.slice(0, 8).map(service =>
                      <div>
                        <div style={{ color: "#5D6186", fontSize: "15p" }}>{service.serviceName}</div>
                        <div>{service.totalCount}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="dash_02">
                        <div className="d-flex justify-content-between">
                          <div style={{ color: "#00155A", fontSize: "18px" }}><b>Sales Growth</b></div>
                          <div className="d-flex justify-content-center align-items-center">
                            <div style={{ color: "#5A607F", fontSize: "12px" }}>Last 12 Months<BsChevronDown className="ml-2" /></div>
                            <img src={expand} width="13.81px" height="13.81px" className="ml-2" />
                          </div>
                        </div>
                        <img src={graph} width="745px" height="183px" className="mt-3" />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-4">
                          <Dash03 />
                        </div>
                        <div className="col-lg-4">
                          <Dash03 />
                        </div>
                        <div className="col-lg-4">
                          <Dash03 />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-lg-4">
                  <div className="dash_03">
                    <img src={expand} width="13.81px" height="13.81px" className="ml-2 expand_img" />
                    <div className="row">
                      <div className="col-lg-6">
                        <div style={{ color: "#00155A", fontSize: "18px" }}><b>Sales Breakdown by Product</b></div>
                        <div style={{ color: "#5A607F", fontSize: "12px" }} className="mt-1">Last 12 Months<BsChevronDown className="ml-2" /></div>
                        <div className="mt-1" style={{ color: "#00155A", fontSize: "12px" }}>Total Sales</div>
                        <div style={{ color: "#2650D8", fontSize: "12px" }}>₹ 11,10,000</div>
                      </div>
                      <div className="col-lg-6">
                        <div style={{border: "8px solid #00155A"}} className="circle_pie">
                          <div className="d-flex" style={{ height: "8px" }}>
                            {graphs.map(graph =>
                              <div style={{ padding:"5px",  backgroundColor: `${graph.color}`, width: `${((graph.value / value) * 100)}px` }}></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-lg-6">
                        {graphs.map(service =>
                          <div className="d-flex align-items-center mt-2">
                            <div className="color_graph" style={{ backgroundColor: `${service.color}` }}></div>
                            <div className="ml-2" style={{ color: "#5D6186", fontSize: "10px" }}>{service.title}</div>
                          </div>
                        )}
                      </div>
                      <div className="col-lg-6">
                        {graphs.map(service =>
                          <div className="d-flex justify-content-end mt-2" style={{ color: "#00155A", fontSize: "10px" }}>
                            <b>{((service.value / value) * 100).toFixed(2)}%</b>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* <div className="row mt-2">
                      <div className="col-lg-6">
                        {services.map(service =>
                          <div className="d-flex align-items-center mt-2">
                            <div className="color_graph" style={{ backgroundColor: `#00123F` }}></div>
                            <div className="ml-2" style={{ color: "#5D6186", fontSize: "10px" }}>{service.serviceName}</div>

                          </div>
                        )}
                      </div>
                      <div className="col-lg-6">
                        {services.map(service =>
                          <div className="d-flex justify-content-end mt-2" style={{ color: "#00155A", fontSize: "10px" }}>
                            <b>{((service.totalCount / value) * 100).toFixed(2)}%</b>
                          </div>
                        )}
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="d-flex justify-content-between">
                  {serve.map(service =>
                    <div className="dash_04">
                      <div>
                        <b style={{ color: "#00155A", fontSize: "18px" }}>Fastag Recharges</b>
                      </div>
                      <div style={{ borderBottom: "2px solid #4EE59D", paddingBottom: "10px", width: "52px" }}>
                        <b style={{ color: "#5D6186", fontSize: "18px" }}>999</b>
                      </div>
                      <div className="mt-2">
                        <span style={{ color: "#5D6186", fontSize: "15px" }}>Total Amount</span>
                      </div>
                      <div style={{ fontSize: "15px", color: "#2650D8" }}>100</div>
                    </div>
                  )}
                </div>
              </div>
              {servicechecks.map(data =>
                <div className="row mt-3 padding_adjust">
                  <div style={{ color: "#00155A", fontSize: "18px" }}><b>Service & Repair Bookings</b></div>
                  <div className="dash_05">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="d-flex justify-content-between">
                          <div style={{ color: "#5D6186", fontSize: "18px" }}>
                            <div><b>All Bookings</b></div>
                            <div><b>999</b></div>
                          </div>
                          <div style={{ color: "#2650D8", fontSize: "15px" }}>
                            <div>Pending</div>
                            <div>999</div>
                          </div>
                          <div style={{ color: "#438969", fontSize: "15px" }}>
                            <div>Accepted</div>
                            <div>999</div>
                          </div>
                          <div style={{ color: "#B92100", fontSize: "15px" }}>
                            <div>Declined</div>
                            <div>999</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6" style={{ borderLeft: "2px solid #999999" }}>
                        <div className="d-flex justify-content-between">
                          <div style={{ color: "#5D6186", fontSize: "18px" }}>
                            <div><b>Accepted Bookings</b></div>
                            <div><b>999</b></div>
                          </div>
                          <div style={{ color: "#2650D8", fontSize: "15px" }}>
                            <div>Ongoing</div>
                            <div>999</div>
                          </div>
                          <div style={{ color: "#438969", fontSize: "15px" }}>
                            <div>Delivered</div>
                            <div>999</div>
                          </div>
                          <div style={{ color: "#B92100", fontSize: "15px" }}>
                            <div>Cancelled</div>
                            <div>999</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ color: "#2650D8", fontSize: "15px" }} className="mt-3"><b>{data.title}</b></div>
                    <div className="d-flex justify-content-between mt-2">
                      <div style={{ fontSize: "15px" }}>
                        <div style={{ color: "#5D6186" }}>Booking Confirmed</div>
                        <div style={{ color: "#2650D8" }}>100</div>
                      </div>
                      <div style={{ fontSize: "15px" }}>
                        <div style={{ color: "#5D6186" }}>Booking Confirmed</div>
                        <div style={{ color: "#2650D8" }}>100</div>
                      </div>
                      <div style={{ fontSize: "15px" }}>
                        <div style={{ color: "#5D6186" }}>Booking Confirmed</div>
                        <div style={{ color: "#2650D8" }}>100</div>
                      </div>
                      <div style={{ fontSize: "15px" }}>
                        <div style={{ color: "#5D6186" }}>Booking Confirmed</div>
                        <div style={{ color: "#2650D8" }}>100</div>
                      </div><div style={{ fontSize: "15px" }}>
                        <div style={{ color: "#5D6186" }}>Booking Confirmed</div>
                        <div style={{ color: "#2650D8" }}>100</div>
                      </div>
                      <div style={{ fontSize: "15px" }}>
                        <div style={{ color: "#5D6186" }}>Booking Confirmed</div>
                        <div style={{ color: "#2650D8" }}>100</div>
                      </div><div style={{ fontSize: "15px" }}>
                        <div style={{ color: "#5D6186" }}>Booking Confirmed</div>
                        <div style={{ color: "#2650D8" }}>100</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

    </>
  )
}

export default Dashboard