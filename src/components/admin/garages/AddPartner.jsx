import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MetaData from '../../layout/MetaData'
import { AddPartnerTitle } from './GarageComp'
import Header from '../../Header/HeaderNoSearch'
import { FaAngleDown } from 'react-icons/fa'
import addImage from '../../../images/addImage.png'
import image from '../../../images/image.jpg'
import { GoDiffAdded } from 'react-icons/go'
import { FiCheckSquare, FiSquare } from 'react-icons/fi'
import { BsToggleOn, BsToggleOff } from 'react-icons/bs'
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa'
import next from '../../../images/next.png'
import step1 from '../../../images/step1.png'
import step2a from '../../../images/step2a.png'
import step3a from '../../../images/step3a.png'
import step4a from '../../../images/step4a.png'
import { addStep1, getService, addManagers, getAllGarages, deleteManagers } from '../../../actions/GarageActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { ADD_PARTNER_STEP_1_RESET } from '../../../constants/GarageConstants'
import { FiXSquare } from 'react-icons/fi'

const AddPartner = () => {
  const deals = [
    {}, {}, {}, {}, {}, {}, {}, {},
  ]
  const days = [
    {
      time: "7 to 8 am"
    },
    {
      time: "8 to 9 am"
    },
    {
      time: "9 to 10 am"
    },
    {
      time: "10 to 11 am"
    },
    {
      time: "11 to 12 pm"
    },
    {
      time: "12 to 01 pm"
    },
    {
      time: "01 to 02 pm"
    },
    {
      time: "02 to 03 pm"
    },
    {
      time: "03 to 04 pm"
    },
    {
      time: "04 to 05 pm"
    },
    {
      time: "05 to 06 pm"
    },
    {
      time: "06 to 07 pm"
    }
  ]
  const dayNames = [
    {
      value: 1,
      day: "Monday"
    },
    {
      value: 2,
      day: "Tuesday"
    },
    {
      value: 3,
      day: "Wednesday"
    },
    {
      value: 4,
      day: "Thursday"
    },
    {
      value: 5,
      day: "Friday"
    },
    {
      value: 6,
      day: "Saturday"
    },
    {
      value: 7,
      day: "Sunday"
    }
  ]

  const dispatch = useDispatch();
  const { success, error, error1, response } = useSelector(state => state.step1Add);
const { garages } = useSelector(state => state.allGarage)

  const { managers } = useSelector(state => state.getManager);
  const alert = useAlert();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(0);
  const [id, setId] = useState(1);
  const [plus, setPlus] = useState(0);
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState("Service & Repair");
  const [minus, setMinus] = useState(0);
  const [pImg, setPImg] = useState(null);
  const [sImg, setSImg] = useState("helli");
  const [data, setData] = useState({
    gname: "",
    g_contact: "",
    g_alt_contact: "",
    g_c_Address: "",
    g_city: "",
    g_state: "",
    g_pincode: "",
    g_owner_detail: "",
    g_owner_contact: "",
    g_owner_alt_no: "",
    g_service_distance: "",
    gen_garage_id: ""
  });
  const [manager, setManager] = useState({
    manager_name: "",
    manager_no: "",
    manager_alt_no: "",
  });

  const addManager = () => {
    const manData = new FormData();
    manData.set("action", "create-garage-manager");
    manData.set("garage_id", garages.length + 1);
    manData.set("manager_name", manager.manager_name);
    manData.set("manager_no", manager.manager_no);
    manData.set("manager_alt_no", manager.manager_alt_no);
    dispatch(addManagers(manData));
    setManager(null);
  }
  const deleteManager = () => {
    const delData = new FormData();
    delData.set("action", "delete-manager");
    delData.set("manager_id", managers.gm_id);
    dispatch(deleteManagers(delData));
  }
  const inputEvent_1 = (e) => {
    const { name, value } = e.target;
    setManager((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }
  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }
  const fileHandler = (e) => {
    console.log(e.target.files[0])
    setSImg(e.target.files[0])
    setPImg(e.target.files[0])
  }


  const SubmitHandler = (e) => {
    e.preventDefault();
    if (data.g_owner_alt_no != "" && data.g_service_distance != "" && data.gen_garage_id != "" && value != "" && data.gname != "" && data.g_contact != "" && data.g_alt_contact != "" && data.g_city != "" && data.g_state != "" && data.g_pincode != "" && data.g_owner_detail != "" && data.g_owner_contact) {

      const formData = new FormData();
      formData.set('action', "create-garage");
      formData.set('nature', value);
      formData.append('primaryImg', pImg);
      formData.append('Img', pImg);
      formData.set('garage_name', data.gname);
      formData.set('garage_no', data.g_contact);
      formData.set('garage_address', data.g_c_Address);
      formData.set('garage_alt_no', data.g_alt_contact);
      formData.set('city', data.g_city);
      formData.set('state', data.g_state);
      formData.set('pincode', data.g_pincode);
      formData.set('garage_owner_name', data.g_owner_detail);
      formData.set('garage_owner_no', data.g_owner_contact);
      formData.set('garage_owner_alt_no', data.g_owner_alt_no);
      formData.set('serving_distance', data.g_service_distance);
      formData.set('gen_garage_id', data.gen_garage_id);
      dispatch(addStep1(formData));
    } else {
      alert.error("please fill the data")
    }
  }

  useEffect(() => {
    if (success) {
      navigate(`/admin/add/partner/step-2/${response}`);
      alert.success("Step 1 completed")
      dispatch({ type: ADD_PARTNER_STEP_1_RESET });
    }
    if (error1) {
      alert.error(error);
    }
    const formData = new FormData();
    formData.set('action', 'all-vendors')
    dispatch(getAllGarages(formData))
    dispatch(getService(id));

  }, [alert, success, error1, navigate, id])

  return (
    <>
      <MetaData title="Step - 1" />
      <Header title={<AddPartnerTitle />} />
      <div className="row">
        <div className="col-lg-4">
          <div className="apgarage1">
            <div>
              <div className="d-flex justify-content-between apgarage2" style={{ position: "relative" }}>
                <div><b style={{ color: "#00155A", fontSize: "15px" }}>Nature</b></div>

                <div className="d-flex justify-content-between" onClick={() => { setNumber(false); setHide(true) }} style={{ cursor: "pointer", paddingBottom: "8px", width: "250px", borderBottom: "2px solid #9999997c" }}>
                  <div style={{ color: "#2650D8", fontSize: "15px" }}>{value}</div>
                  <div><FaAngleDown style={{ color: "2650D8" }} /></div>
                </div>

              </div>
              {hide &&
                <div className="sr_box">
                  <div className="sr_box_1" onClick={() => { setValue("Service & Repairs"); setHide(false); setId(1); }}>Service & Repairs</div>
                  <div className="sr_box_1" onClick={() => { setValue("Wash & Detailing"); setHide(false); setId(2); }}>Wash & Detailing</div>
                  <div className="sr_box_1" onClick={() => { setValue("Car Care & Accessories"); setHide(false); setId(3); }}>Car Care & Accessories</div>
                  <div className="sr_box_1" onClick={() => { setValue("New & Used Cars"); setHide(false); setId(4); }}>New & Used Cars</div>
                </div>
              }
            </div>

            <div className="ap_02 mt-5 m-auto d-flex justify-content-center align-items-center">
              <div>
                <input type="file" id="file" accept="image/*" onChange={fileHandler} />
                <label for="file" >
                  <img src={addImage} width="30px" height="30px" />
                  <div style={{ color: "#2650D8", fontSize: "15px" }} className="mt-3">Primary Image</div>
                </label>
              </div>
            </div>
            <div className="ap_02 mt-5 m-auto d-flex justify-content-center align-items-center">
              <div>
                <input type="file" id="file" accept="image/*" onChange={fileHandler} />
                <label for="file" >
                  <img src={addImage} width="30px" height="30px" />
                  <div style={{ color: "#2650D8", fontSize: "15px" }} className="mt-3">Add Images</div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 page_reducer">
          <div className="d-flex" style={{ margin: "10px 20px" }}>
            <div className="d-flex align-items-center">
              <div>
                <img src={step1} width="80px" height="40px" />
                <div style={{ color: "#00155A", fontSize: "10px" }}>Overview</div>
              </div>
              <div className="step-line">------------</div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <img src={step2a} width="80px" height="40px" />
                <div style={{ color: "#00155A", fontSize: "10px" }}>Services</div>
              </div>
              <div className="step-line">------------</div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <img src={step3a} width="80px" height="40px" />
                <div style={{ color: "#00155A", fontSize: "10px" }}>Offers</div>
              </div>
              <div className="step-line">------------</div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <img src={step4a} width="80px" height="40px" />
                <div style={{ color: "#00155A", fontSize: "10px" }}>Account Info</div>
              </div>
            </div>
          </div>
          <div className="apgarage4">
            <div style={{ fontSize: "18px" }}><b>Garage Name</b></div>
            <div className="mt-3">
              <input type="text" name="gname" value={data.gname} onChange={inputEvent} className="garage_input1" />
            </div>
            <div className="mt-5">
              <div className="d-flex justify-content-between">
                <div>
                  <div style={{ fontSize: "18px" }}><b>Garage Contact Number</b></div>
                  <input type="text" name="g_contact" value={data.g_contact} onChange={inputEvent} className="garage_input1 mt-3" />
                </div>
                <div>
                  <div style={{ fontSize: "18px" }}><b>Garage Alt. Contact Number</b></div>
                  <input type="text" name="g_alt_contact" onChange={inputEvent} value={data.g_alt_contact} className="garage_input1 mt-3" />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6">
                <div style={{ fontSize: "18px" }}><b>Garage Complete Address</b></div>
                <div>
                  <input type="text" name="g_c_Address" value={data.g_c_Address} onChange={inputEvent} className="garage_input1 mt-4" style={{ paddingBottom: "5px" }} placeholder="Complete Address" />
                </div>

                <div>
                  <input type="text" name="g_city" value={data.g_city} onChange={inputEvent} className="garage_input1 mt-4" style={{ paddingBottom: "5px", width: "50%" }} placeholder="CITY" />
                </div>
                <div>
                  <input type="text" name="g_state" value={data.g_state} onChange={inputEvent} className="garage_input1 mt-4" style={{ paddingBottom: "5px", width: "50%" }} placeholder="STATE" />
                </div>
                <div>
                  <input type="text" name="g_pincode" value={data.g_pincode} onChange={inputEvent} className="garage_input1 mt-4" style={{ paddingBottom: "5px", width: "50%" }} placeholder="PIN CODE" />
                </div>
              </div>
              <div className="col-lg-6">
                <img src={image} style={{ width: "100%", height: "100%", borderRadius: "8px" }} />
              </div>
            </div>
            <div className="mt-5" style={{ fontSize: "18px" }}><b>Garage Managers Detail</b></div>
            {/* {managers && managers.map(reData => */}
              <div className="row mt-2" style={{ color: "#2650D8" }}>
                <div className="col-lg-5">
                  <div>
                    {managers.manager_name}
                  </div>
                </div>
                <div className="col-lg-3">
                  <div>
                    {managers.manager_no}
                  </div>
                </div>
                <div className="col-lg-3">
                  <div>
                    {managers.manager_alt_no}
                  </div>
                </div>
                <div className="col-lg-1">
                  <div style={{ color: "#F45C3B", cursor: "pointer" }} onClick={deleteManager(managers.manager_id)}><FiXSquare /></div>
                </div>
              </div>
            {/* )} */}
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <input type="text" name="manager_name" value={managers.manager_name} onChange={inputEvent_1} className="garage_input1 mt-4" style={{ paddingBottom: "5px" }} placeholder="Name" />
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <input type="text" name="manager_no" value={managers.manager_no} onChange={inputEvent_1} className="garage_input1 mt-4" style={{ paddingBottom: "5px" }} placeholder="Contact" />
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <input type="text" name="manager_alt_no" value={managers.manager_alt_no} onChange={inputEvent_1} className="garage_input1 mt-4" style={{ paddingBottom: "5px" }} placeholder="Alternate Contact" />
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mt-2" style={{cursor: "pointer" }} onClick={addManager} ><span style={{ fontSize: "17px", color: "#2650D8"}}><GoDiffAdded /></span><span className="ml-2" style={{ fontSize: "12px", color: "#2650D8" }}>Add Manager</span></div>

            <div className="mt-5" style={{ fontSize: "18px" }}><b>Garage Owners Detail</b></div>
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <input type="text" name="g_owner_detail" value={data.g_owner_detail} onChange={inputEvent} className="garage_input1 mt-4" style={{ paddingBottom: "5px" }} placeholder="Name" />
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <input type="text" name="g_owner_contact" value={data.g_owner_contact} onChange={inputEvent} className="garage_input1 mt-4" style={{ paddingBottom: "5px" }} placeholder="Contact" />
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <input type="text" name="g_owner_alt_no" value={data.g_owner_alt_no} onChange={inputEvent} className="garage_input1 mt-4" style={{ paddingBottom: "5px" }} placeholder="Alternate Contact" />
                </div>
              </div>
            </div>

            <div className="mt-5 mb-2" style={{ fontSize: "18px" }}><b>Garage Ameneties</b></div>
            {deals.map(deal =>
              <div>
                <span style={{ fontSize: "15px", color: "#5D6186" }}><FiCheckSquare /></span><span className="ml-2" style={{ color: "#5D6186", fontSize: "12px" }}>Service Warranty</span>
              </div>
            )}
            <div className="mt-3">
              <div className="row">
                <div className="col-lg-3">
                  <div className="d-flex align-items-center">
                    <div style={{ color: "#2650D8", fontSize: "15px" }} className="add_box">Rs 99</div>
                    <div className="ml-2" style={{ color: "#5D6186", fontSize: "12px" }}>For 9kms</div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="d-flex align-items-center">
                    <div style={{ color: "#2650D8", fontSize: "15px" }} className="add_box">Rs 99</div>
                    <div className="ml-2" style={{ color: "#5D6186", fontSize: "12px" }}>For extra km</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5" style={{ fontSize: "18px" }}><b>Serving Distance</b></div>
            <div className="row">
              <div className="col-lg-4">
                <div>
                  <input type="text" name="g_service_distance" value={data.g_service_distance} onChange={inputEvent} className="garage_input1 mt-2" style={{ paddingBottom: "5px" }} placeholder="Kms in Radius" />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-3">
                <div style={{ fontSize: "18px" }}><b>Garage Timing</b></div>
              </div>
              <div className="col-lg-9">
                <div className="row apbox_2">
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">
                        <div className="padding_time_box" style={{ fontSize: "15px", float: "right" }}>No. of Slots</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 padding_time_box">
                    <div className="row">
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6 padding_time_box">
                        <div className="padding_time_box" style={{ fontSize: "15px", float: "right" }}>No. of Slots</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {dayNames.map(name =>
              <>
                <div className="row">
                  <div className="col-lg-3">
                    <div className="d-flex align-items-center justify-content-between mt-2">
                      <div style={{ fontSize: "15px" }}>{name.day}</div>
                      <div style={{ color: "#53BD8C", fontSize: "25px", cursor: "pointer" }}>{toggle === name.value ? <BsToggleOn onClick={() => setToggle(0)} /> : <BsToggleOff onClick={() => setToggle(name.value)} />}</div>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="row apbox_2">
                      <div className={toggle === name.value ? "col-lg-6" : "col-lg-6 ap_hide"}>
                        {days.slice(0, 6).map(day =>
                          <>
                            <div className="row mt-3 padding_time_box">
                              <div className="col-lg-6">
                                <div className="ap_box_2" style={{ fontSize: "12px" }}>{day.time}</div>
                              </div>
                              <div className="col-lg-6">
                                <div className="d-flex justify-content-between align-items-center" style={{ width: "80px", height: "38px", float: "right" }}>
                                  <div>
                                    <FaMinusSquare style={{ fontSize: "23px", color: "#D8D8D8", width: "24px", backgroundColor: "#5D6186", cursor: "pointer" }} />
                                  </div>
                                  <div>
                                    <input type="text" className="increment_box text-center" value={plus} />
                                  </div>
                                  <div>
                                    <FaPlusSquare style={{ fontSize: "24px", color: "#D8D8D8", width: "24px", backgroundColor: "#5D6186", cursor: "pointer" }} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      <div className={toggle === name.value ? "col-lg-6" : "col-lg-6 ap_hide"}>
                        {days.slice(6, 12).map(day =>
                          <>
                            <div className="row mt-3 padding_time_box">
                              <div className="col-lg-6">
                                <div className="ap_box_2" style={{ fontSize: "12px" }}>{day.time}</div>
                              </div>
                              <div className="col-lg-6">
                                <div className="d-flex justify-content-between align-items-center" style={{ width: "80px", height: "38px", float: "right" }}>
                                  <div>
                                    <FaMinusSquare style={{ fontSize: "23px", color: "#D8D8D8", width: "24px", backgroundColor: "#5D6186", cursor: "pointer" }} />
                                  </div>
                                  <div>
                                    <input type="text" className="increment_box text-center" value={plus} />
                                  </div>
                                  <div>
                                    <FaPlusSquare style={{ fontSize: "24px", color: "#D8D8D8", width: "24px", backgroundColor: "#5D6186", cursor: "pointer" }} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className="mt-5">
              <div className="form-group" style={{ position: "relative", width: "330px" }}>
                <input className="form-control generate_id" style={{ fontSize: "15px", width: "330px" }} onChange={inputEvent} name="gen_garage_id" value={data.gen_garage_id} type="text" placeholder="Generate Garage ID" />
                <img src={next} width="20px" height="16px" className="arrow_img" />
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5">
              <button className="btn" style={{ color: "#F45C3B", fontSize: "15px", padding: "13px 0px", width: "160px", border: "1px solid #F45C3B", borderRadius: "10px" }}>Discard</button>
              <button onClick={SubmitHandler} className="btn ml-2" style={{ color: "#fff", fontSize: "15px", padding: "13px 0px", width: "160px", backgroundColor: "#2650D8", borderRadius: "10px" }}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddPartner