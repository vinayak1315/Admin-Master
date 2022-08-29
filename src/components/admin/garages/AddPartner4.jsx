import React, { useState, useEffect } from 'react'
import { AddPartnerTitle3 } from './GarageComp'
import Header from '../../Header/HeaderNoSearch'
import MetaData from '../../layout/MetaData'
import { useNavigate, useParams} from 'react-router-dom'
import image from '../../../images/image.jpg'
import stepcheck from '../../../images/stepcheck.png'
import step1 from '../../../images/step1.png'
import step2a from '../../../images/step2a.png'
import step3a from '../../../images/step3a.png'
import step4a from '../../../images/step4a.png'
import { addStep4 } from '../../../actions/GarageActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import {ADD_PARTNER_STEP_4_RESET} from '../../../constants/GarageConstants'
import {GoChevronDown} from 'react-icons/go'

const AddPartner4 = () => {
    const dispatch = useDispatch();
    const {g_id} = useParams();
    const { success4, error, error1 } = useSelector(state => state.step4Add)
    const navigate = useNavigate();
    const [data, setData] = useState({
        garage_id: "",
        entity_name: "",
        office_address: "",
        bank_name: "",
        bank_branch: "",
        ifsc: "",
        account_type: "",
        gst_no: "",
        finance_poc: "",
        finance_poc_no: ""
    });
    const inputEvent = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }
    useEffect(() => {
        if (success4) {
            navigate('/admin/garages/onboarding/completed');
            dispatch({type: ADD_PARTNER_STEP_4_RESET});
        }
        if (error1) {
            alert.error(error);
        }
    }, [alert, success4, error1, navigate])
    const SubmitHandler = (e) => {
        e.preventDefault();
        if (data.entity_name != "" && data.office_address != "" && data.bank_name != "" && data.bank_branch != "" && data.ifsc != "" && data.account_type != "" && data.gst_no != "" && data.finance_poc != "" && data.finance_poc_no != "") {
            const formData = new FormData();
            formData.set('action', "create-account-info");
            formData.set('garage_id', g_id);
            formData.set('entity_name', data.entity_name);
            formData.set('office_address', data.office_address);
            formData.set('bank_name', data.bank_name);
            formData.set('bank_branch', data.bank_branch);
            formData.set('ifsc', data.ifsc);
            formData.set('account_type', data.account_type);
            formData.set('gst_no', data.gst_no);
            formData.set('finance_poc', data.finance_poc);
            formData.set('finance_poc_no', data.finance_poc_no);
            dispatch(addStep4(formData));
            alert.success("SuccessFully added Garage")
        } else {
            alert.error("please fill the data")
        }
    }

    return (
        <>
            <MetaData title="Step - 4" />
            <Header title={<AddPartnerTitle3 />} />
            <div className="row">
                <div className="col-lg-4">
                    <div className="ap_step3_04 page_reducer">
                        <img src={image} alt="logo" width="100%" height="367" />
                        <div style={{ padding: "18px" }}>
                            <div style={{ color: "#00155A", fontSize: "18px" }}><b>Mahindra First Choice</b></div>
                            <div className="d-flex align-items-center mt-2">
                                <div style={{ color: "#2650D8", fontSize: "15px" }}><b>#210234</b></div>
                                <div className="ml-2"><img src={stepcheck} alt="check" width="19px" height="19px" /></div>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <div style={{ color: "#5D6186", fontSize: "12px" }}><b>+91 8876564322</b></div>
                                <div style={{ color: "#5D6186", fontSize: "12px" }} className="ml-4"><b>+91 8876564322</b></div>
                            </div>
                            <div style={{ color: "#999999", fontSize: "12px" }} className="mt-3">A-1234, CGC Residency, Near Bisleri office, Andheri East, Mumbai - 400001</div>
                            <div className="d-flex align-items-center mt-3">
                                <div style={{ color: "#5D6186", fontSize: "12px", width: "70px" }}><b>Owner</b></div>
                                <div style={{ color: "#5D6186", fontSize: "12px" }} className="ml-4"><b>Amit Bhasin- 9876543211</b></div>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <div style={{ color: "#5D6186", fontSize: "12px", width: "70px" }}><b>Manager</b></div>
                                <div style={{ color: "#5D6186", fontSize: "12px" }} className="ml-4"><b>Amit Bhasin- 9876543211</b></div>
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
                    <div className="ap_step2_02">
                        <div className="form-group" style={{ padding: "0 30px", width: "100%" }}>
                            <input type="text" name="entity_name" value={data.entity_name} onChange={inputEvent} placeholder="REGISTERED ENTITY NAME" className="form-control step_3_holder" />
                        </div>
                        <div className="form-group" style={{ padding: "0 30px", width: "100%" }}>
                            <input type="text" name="office_address" value={data.office_address} onChange={inputEvent} placeholder="REGISTERED OFFICE ADDRESS" className="form-control step_3_holder" />
                        </div>
                        <div className="form-group" style={{ padding: "0 30px", width: "100%" }}>
                            <input type="text" name="bank_name" value={data.bank_name} onChange={inputEvent} placeholder="BANK NAME" className="form-control step_3_holder" />
                        </div>
                        <div className="form-group" style={{ padding: "0 30px", width: "100%" }}>
                            <input type="text" name="bank_branch" value={data.bank_branch} onChange={inputEvent} placeholder="BANK BRANCH" className="form-control step_3_holder" />
                        </div>
                        <div className="form-group" style={{ padding: "0 30px", width: "100%" }}>
                            <input type="text" name="ifsc" value={data.ifsc} onChange={inputEvent} placeholder="IFSC CODE" className="form-control step_3_holder" />
                        </div>
                        <div className="form-group" style={{ padding: "0 30px", position: "relative" }}>
                            <select
                                type="text"
                                id="release_field"
                                className="form-control"
                                style={{ color: "#D1D3D4", fontSize: "15px", height: "45px" }}
                                name="account_type" value={data.account_type} onChange={inputEvent}
                            >
                                <option >SAVINGS</option>
                                <option >CURRENT</option>
                            </select>
                            <div className="down_positions">
                                <GoChevronDown />
                            </div>
                        </div>
                        <div className="form-group" style={{ padding: "0 30px", width: "100%" }}>
                            <input type="text" name="gst_no" value={data.gst_no} onChange={inputEvent} placeholder="GST NUMBER" className="form-control step_3_holder" />
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="form-group" style={{ padding: "0 30px", width: "50%" }}>
                                <input type="text" name="finance_poc" value={data.finance_poc} onChange={inputEvent} placeholder="FINANCE POC" className="form-control step_3_holder" />
                            </div>
                            <div className="form-group" style={{ padding: "0 30px", width: "50%" }}>
                                <input type="text" name="finance_poc_no" value={data.finance_poc_no} onChange={inputEvent} placeholder="FINANCE POC NUMBER" className="form-control step_3_holder" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <button onClick={() => navigate("/admin/add/partner/step-3")} className="btn" style={{ color: "#F45C3B", fontSize: "15px", padding: "13px 0px", width: "160px", border: "1px solid #F45C3B", borderRadius: "10px" }}>PREVIOUS</button>
                            <button onClick={SubmitHandler} className="btn ml-2" style={{ color: "#fff", fontSize: "15px", padding: "13px 0px", width: "160px", backgroundColor: "#2650D8", borderRadius: "10px" }}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPartner4