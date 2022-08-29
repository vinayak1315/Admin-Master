import React, { useState, useEffect } from 'react'
import { AddPartnerTitle2 } from './GarageComp'
import Header from '../../Header/HeaderNoSearch'
import MetaData from '../../layout/MetaData'
import { useNavigate } from 'react-router-dom'
import { BsCheck2Square } from 'react-icons/bs'
import step1 from '../../../images/step1.png'
import step2a from '../../../images/step2a.png'
import step3a from '../../../images/step3a.png'
import step4a from '../../../images/step4a.png'
import { addOffer } from '../../../actions/PromotionActions'
import { ADD_PROMOTION_OFFER_RESET } from '../../../constants/PromotionConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { GoChevronDown } from 'react-icons/go';
import { useParams } from 'react-router-dom'

const AddPartner3 = () => {
    const { success, error, error1 } = useSelector(state => state.newOffer);
    const dispatch = useDispatch();
    const alert = useAlert();
    const {g_id} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        discount_code: "",
        start_date: "",
        end_date: "",
        type_discount: "",
        min_order_value: "",
        max_discount: "",
        discount_value: "",
        apply_users: ""
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
    const SubmitHandler = (e) => {
        e.preventDefault();
        if (data.discount_code != "" && data.start_date != "" && data.end_date != "" && data.type_discount != "" && data.min_order_value != "" && data.max_discount && data.discount_value && data.apply_users) {
            const formData = new FormData();
            formData.set("action", "create-offer")
            formData.set("garage_id", g_id)
            formData.set("discount_code", data.discount_code)
            formData.set("start_date", data.start_date)
            formData.set("end_date", data.end_date)
            formData.set("type_discount", data.type_discount)
            formData.set("min_order_value", data.min_order_value)
            formData.set("max_discount", data.max_discount)
            formData.set("discount_value", data.discount_value)
            formData.set("apply_users", data.apply_users)
            formData.set("status", 1);
            formData.set("outletId", 1);
            dispatch(addOffer(formData));

        } else {
            alert.error("please fill the data")
        }
    }
    useEffect(() => {
        if (success) {
            navigate(`/admin/add/partner/step-4/${g_id}`);
            dispatch({ type: ADD_PROMOTION_OFFER_RESET });
        }
        if (error1) {
            alert.error(error);
        }
    }, [alert, success, error1, navigate])

    return (
        <>
            <MetaData title="Step - 3" />
            <Header title={<AddPartnerTitle2 />} />
            <div className="row">
                <div className="col-lg-4">
                    <div className="ap_step3_01 page_reducer">
                        <button className="btn text-center" style={{ width: "100%", fontSize: "15px", backgroundColor: "#4EE59D", boxShadow: '0px 3px 6px #00000029', color: "#000", padding: "11px 0", borderRadius: "10px" }}>ADD COUPON</button>
                        <div className="ap_step3_02">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="text-center" style={{ letterSpacing: "1px", color: "#B92100", padding: "7px 0", width: "100%", fontSize: "12px", border: "1px dashed #B92100", borderRadius: "5px" }}>
                                        HAPPY DRIVING
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2" style={{ color: "#00155A", fontSize: "12px" }}>
                                <b>Flat ₹ 500 OFF</b>
                            </div>
                            <div className="mt-1" style={{ color: "#5D6186", fontSize: "12px" }}>Valid for first time users on minimum order value of ₹2500</div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div><span style={{ color: "#999999", fontSize: "10px" }}>Validity -</span><span style={{ color: "#2650D8", fontSize: "10px" }}> 60 Days</span></div>
                                <div><span style={{ color: "#00155A", fontSize: "10px" }}>21/01/2022 - 21/01/2022</span></div>
                            </div>

                            <div className="d-flex align-items-center mt-2">
                                <div><BsCheck2Square style={{ color: "#2650D8", fontSize: "15px" }} /></div>
                                <div className="ml-2" style={{ color: "#2650D8", fontSize: "12px" }}>Mark as Primary Offer</div>
                            </div>
                            <div style={{ fontSize: "9px", color: "#00155A" }} className="mt-3 d-flex">
                                <input value="50% Off | TRYNEW" className="garage_input" />
                                <button className="btn btn-garage_update ml-2 justify-content-center" style={{ fontSize: "15px" }}>UPDATE</button>
                            </div>

                        </div>
                        <div className="ap_step3_02">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="text-center" style={{ letterSpacing: "1px", color: "#B92100", padding: "7px 0", width: "100%", fontSize: "12px", border: "1px dashed #B92100", borderRadius: "5px" }}>
                                        BESTOFMG
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2" style={{ color: "#00155A", fontSize: "12px" }}>
                                <b>Flat ₹ 500 OFF</b>
                            </div>
                            <div className="mt-1" style={{ color: "#5D6186", fontSize: "12px" }}>Valid for first time users on minimum order value of ₹2500</div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div><span style={{ color: "#999999", fontSize: "10px" }}>Validity -</span><span style={{ color: "#2650D8", fontSize: "10px" }}> 60 Days</span></div>
                                <div><span style={{ color: "#00155A", fontSize: "10px" }}>21/01/2022 - 21/01/2022</span></div>
                            </div>

                            <div className="d-flex align-items-center mt-2">
                                <div><BsCheck2Square style={{ color: "#2650D8", fontSize: "15px" }} /></div>
                                <div className="ml-2" style={{ color: "#2650D8", fontSize: "12px" }}>Mark as Primary Offer</div>
                            </div>
                            <div style={{ fontSize: "9px", color: "#00155A" }} className="mt-3 d-flex">
                                <input placeholder="Type here offer text here" type="text" className="garage_input" />
                                <button className="btn btn-step3_buttons ml-2 justify-content-center" style={{ fontSize: "15px", backgroundColor: "#B92100" }}>ADD</button>
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
                        <div className="form-group" style={{ padding: "0 30px", position: "relative" }}>
                            <select
                                type="text"
                                id="release_field"
                                className="form-control"
                                style={{ color: "#D1D3D4", fontSize: "15px", height: "45px" }}
                                name="type_discount" value={data.type_discount} onChange={inputEvent}
                            >
                                <option>Type of Discount</option>
                                <option>TRY NEW</option>
                                <option>HAPPY 50</option>
                                <option>CARCARE</option>
                            </select>
                            <div className="down_positions">
                                <GoChevronDown />
                            </div>
                        </div>

                        <div className="d-flex justify-content-between">
                            <div className="form-group" style={{ padding: "0 30px", width: "230px" }}>

                                <input type="date"
                                    id="release_field"
                                    className="form-control"
                                    placeholder="START DATE"
                                    style={{ color: "#D1D3D4", fontSize: "15px", height: "45px" }}
                                    name="start_date" value={data.start_date} onChange={inputEvent}
                                />
                            </div>
                            <div className="form-group" style={{ padding: "0 30px", width: "230px" }}>
                                <input
                                    type="date"
                                    placeholder="END DATE"
                                    id="release_field"
                                    className="form-control"
                                    style={{ color: "#D1D3D4", fontSize: "15px", height: "45px" }}
                                    name="end_date" value={data.end_date} onChange={inputEvent}
                                />
                            </div>
                        </div>
                        <div className="form-group" style={{ padding: "0 30px", position: "relative" }}>
                            <select
                                type="text"
                                id="release_field"
                                className="form-control"
                                style={{ color: "#D1D3D4", fontSize: "15px", height: "45px" }}
                                name="apply_users" value={data.apply_users} onChange={inputEvent}
                            >
                                <option>Applicable on</option>
                                <option>CAR</option>
                                <option>BIKE</option>
                                <option>Type of Discount</option>
                            </select>
                            <div className="down_positions">
                                <GoChevronDown />
                            </div>
                        </div>
                        <div className="form-group" style={{ padding: "0 30px", width: "100%" }}>
                            <input placeholder="Min. Order Value" className="form-control step_3_holder" name="min_order_value" value={data.min_order_value} onChange={inputEvent} />
                        </div>
                        <div className="form-group" style={{ padding: "0 30px", width: "100%" }}>
                            <input placeholder="Discount Value" className="form-control step_3_holder" name="discount_value" value={data.discount_value} onChange={inputEvent} />
                        </div>
                        <div className="form-group" style={{ padding: "0 30px", width: "100%" }}>
                            <input placeholder="Max Discount" className="form-control step_3_holder" name="max_discount" value={data.max_discount} onChange={inputEvent} />
                        </div>
                        <div className="d-flex justify-content-between" style={{ margin: "0px 30px", padding: "13px", borderRadius: "10px", backgroundColor: "#F45C3B" }}>
                            <input type="text" placeHolder="COUPON CODE" className="coupon_box" name="discount_code" value={data.discount_code} onChange={inputEvent} />
                            <div style={{ color: "#D8D8D8", fontSize: "15px" }}>max 15 alphabets</div>
                        </div>
                        <div style={{ color: "#D1D3D4", fontSize: "15px", padding: "0 30px" }} className="mt-3">Benefeciaries</div>
                        <div className="d-flex align-items-center mt-2" style={{ padding: "0 30px" }}>
                            <div><BsCheck2Square style={{ color: "#2650D8", fontSize: "15px" }} /></div>
                            <div className="ml-2" style={{ color: "#232D61", fontSize: "15px" }}>For First Time Customers</div>
                        </div>
                        <div className="d-flex align-items-center mt-2" style={{ padding: "0 30px" }}>
                            <div><BsCheck2Square style={{ color: "#2650D8", fontSize: "15px" }} /></div>
                            <div className="ml-2" style={{ color: "#232D61", fontSize: "15px" }}>For Repeat Customers</div>
                        </div>
                        <div className="d-flex align-items-center mt-2" style={{ padding: "0 30px" }}>
                            <div><BsCheck2Square style={{ color: "#2650D8", fontSize: "15px" }} /></div>
                            <div className="ml-2" style={{ color: "#232D61", fontSize: "15px" }}>For All Customers</div>
                        </div>
                        <div style={{ margin: "0 30px" }} className="mt-3">
                            <button className="text-center btn btn-success" style={{ width: "100%", backgroundColor: "#53BD8C", border: "none" }}>
                                SUBMIT
                            </button>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            <button onClick={() => navigate("/admin/add/partner/step-2")} className="btn" style={{ color: "#F45C3B", fontSize: "15px", padding: "13px 0px", width: "160px", border: "1px solid #F45C3B", borderRadius: "10px" }}>PREVIOUS</button>
                            <button onClick={SubmitHandler} className="btn ml-2" style={{ color: "#fff", fontSize: "15px", padding: "13px 0px", width: "160px", backgroundColor: "#2650D8", borderRadius: "10px" }}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPartner3