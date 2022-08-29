import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import MetaData from '../../layout/MetaData'
import { AddPartnerTitle1 } from './GarageComp'
import Header from '../../Header/HeaderNoSearch'
import { BsToggleOn, BsToggleOff } from 'react-icons/bs'
import pencil from '../../../images/pencil.png'
import { FiEdit } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import step1 from '../../../images/step1.png'
import step2a from '../../../images/step2a.png'
import step3a from '../../../images/step3a.png'
import step4a from '../../../images/step4a.png'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { getService, getPackage, deleteServices, addStep2 } from '../../../actions/GarageActions'
import Loader from '../../layout/Loader'
import ToggleIcons from 'react-toggle'
import "react-toggle/style.css"

const AddPartner2 = () => {
    const categories = [
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
    ]
    const { services, loading } = useSelector(state => state.service);
    const { packages } = useSelector(state => state.getPackages);
    const { success } = useSelector(state => state.step2Add);
    const {g_id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [id, setId] = useState(1);
    const [active, setActive] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [service, setService] = useState({
        price:"",
        commision:""
    });
    const inputEvent = (e) => {
        const { name, value } = e.target;
        setService((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }
    useEffect(() => {
        if(success) {
            navigate(`/admin/add/partner/step-3/${g_id}`)
        }
        dispatch(getPackage(id));
        dispatch(getService(1));
    }, [id, dispatch])

    
    const toggler = () => {
        if(toggle){
            setToggle(false);
            deleteHandler();
        } else {
            setToggle(true);
            submitHandler();
        }
    }

    const submitHandler = () => {
        const formData = new FormData();
        formData.set("action", "create-service");
        formData.set("garage_id",g_id );
        formData.set("service_id", id);
        formData.set("packege_id", active );
        formData.set("status", 1 );
        formData.set("price", service.price );
        formData.set("commision", service.commision);
        dispatch(addStep2(formData));
    }
    const deleteHandler = () => {
        const delData = new FormData();
        delData.set("action", "delete-service");
        delData.set("garage_service_id",id )
        dispatch(deleteServices(delData));
    }

    return (
        <>
            <MetaData title="Step - 2" />
            <Header title={<AddPartnerTitle1 />} />
            <div className="row">
                <div className="col-lg-4">
                    {loading ? <Loader /> :
                        <>
                            <div className="ap_step2_01 page_reducer">
                                <div className="ap_step2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <div style={{ fontSize: "12px", fontWeight: "600" }}>Maruti Suzuki</div>
                                            <div><span style={{ color: "#5D6186", fontSize: "12px", fontWeight: "600" }}>Baleno </span><span style={{ color: "#999999", fontSize: "12px" }}>Petrol</span></div>
                                        </div>
                                        <div style={{ color: "#53BD8C", fontSize: "25px", cursor: "pointer" }}>
                                            <BsToggleOn />
                                        </div>
                                    </div>
                                    <div className="mt-2 d-flex justify-content-between">
                                        <div style={{ color: "#4250F0", fontSize: "12px" }}>Change</div>
                                        <div style={{ color: "#F8484A", fontSize: "12px" }}>Reset</div>
                                    </div>
                                </div>
                                {services.map(data =>
                                    <div className="d-flex justify-content-between mt-3">
                                        <div>
                                            <div><b style={{ fontSize: "15px" }}>{data.name}</b></div>
                                            <div><b><span style={{ color: "#438969", fontSize: "15px" }}>10</span><span style={{ color: "#2650D8", fontSize: "15px" }}>/10</span></b></div>
                                        </div>

                                        {id === data.serviceId ?
                                            <div style={{ color: "#53BD8C", fontSize: "25px", cursor: "pointer" }} onClick={() => setId(0)}>
                                                <BsToggleOn />
                                            </div> :
                                            <div style={{ color: "#53BD8C", fontSize: "25px", cursor: "pointer" }} onClick={() => setId(data.serviceId)}>
                                                <BsToggleOff />
                                            </div>
                                        }
                                    </div>
                                )}
                            </div>
                        </>
                    }
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
                    <div className="ap_step2_02">
                        <div className="row" style={{ paddingBottom: "10px", borderBottom: "2px solid #9999997c" }}>
                            <div className="col-lg-6">
                                <div style={{ color: "#2650D8", fontSize: "18px", paddingLeft: "10px" }}><b>Periodic Service</b></div>
                            </div>
                            <div className="col-lg-3">
                                <div style={{ color: "#2650D8", fontSize: "18px" }}><b>Pricing</b></div>
                            </div>
                            <div className="col-lg-3">
                                <div style={{ color: "#2650D8", fontSize: "18px" }}><b>Commission %</b></div>
                            </div>
                        </div>
                        {packages && packages.map(data =>
                            <div className="row" style={{ padding: "10px 0", borderBottom: "2px solid #9999997c" }}>
                                <div className="col-lg-6">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div style={{ color: "#00155A", fontSize: "15px", padding: "0 10px" }}><b>{data.package_name}</b></div>

                                        <div style={{ color: "#53BD8C", fontSize: "25px", cursor: "pointer" }} onClick={() => setActive(data.packageId)}>
                                            <ToggleIcons onClick={toggler} id={data.packageId} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="d-flex align-items-center mt-2">
                                        ₹<input className="step2_input" style={{ color: "#999999", fontSize: "15px" }} value={service.price} onChange={inputEvent} name="price" />
                                        <img src={pencil} alt="edit" width="15px" height="15px" className="ml-4" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="d-flex align-items-center mt-2">
                                        ₹<input className="step2_input" style={{ color: "#999999", fontSize: "15px" }} value={service.commision} onChange={inputEvent} name="commision" />
                                        <img src={pencil} alt="edit" width="15px" height="15px" className="ml-4" />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            <button onClick={() => navigate("/admin/add/partner/step-1")} className="btn" style={{ color: "#F45C3B", fontSize: "15px", padding: "13px 0px", width: "160px", border: "1px solid #F45C3B", borderRadius: "10px" }}>PREVIOUS</button>
                            <button onClick={() => navigate('/admin/add/partner/step-3')} className="btn ml-2" style={{ color: "#fff", fontSize: "15px", padding: "13px 0px", width: "160px", backgroundColor: "#2650D8", borderRadius: "10px" }}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPartner2