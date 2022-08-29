import React, { useState, useEffect } from 'react'
import Header from '../Header'
import { Sup_title } from './SupportComp'
import { getAllFaqs, addFaqs } from '../../../actions/SupportActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import {ADD_FAQS_RESET} from '../../../constants/SupportConstants'

const Support1 = () => {

    const dispatch = useDispatch();
    const { faqs } = useSelector(state => state.faqs);
    const { newFaqs, error01, response, success01 } = useSelector(state => state.newFaqs);
    const alert = useAlert();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [active, setActive] = useState(1);
    useEffect(() => {
        const formData = new FormData();
        if(success01){
            alert.success(response);
            dispatch({type:ADD_FAQS_RESET})
        }
        if(error01){
            alert.error(error01);
        }
        formData.set("action", "list-faq");
        dispatch(getAllFaqs(formData));
    }, [dispatch, success01, alert,error01])

    const SubmitHandler = (e) => {
        e.preventDefault();
        if (title === null || body === null) {
            const newData = new FormData();
            newData.set("action", "create-faq")
            newData.set("title", title);
            newData.set("body", body);
            dispatch(addFaqs(newData));
            setTitle("");
            setBody("");
        } else {
            alert.error("Please Fill All Fields")
        }

    }
    return (
        <>
            <Header title={<Sup_title />} />
            <div className="support">
                <div className="d-flex ">
                    <div style={{ color: "#5D6186", fontSize: "18px" }} className="ml-5">Select Field :</div>
                    <button className={active === 1 ? "btn btn_supfa ml-3" : "btn btn_supfua ml-3"} onClick={() => setActive(1)}>All</button>
                    <button className={active === 2 ? "btn btn_supfa ml-3" : "btn btn_supfua ml-3"} onClick={() => setActive(2)}>Service & Repairs</button>
                    <button className={active === 3 ? "btn btn_supfa ml-3" : "btn btn_supfua ml-3"} onClick={() => setActive(3)}>Wash & Detailing</button>
                    <button className={active === 4 ? "btn btn_supfa ml-3" : "btn btn_supfua ml-3"} onClick={() => setActive(4)}>Accessories</button>
                    <button className={active === 5 ? "btn btn_supfa ml-3" : "btn btn_supfua ml-3"} onClick={() => setActive(5)}>Car Trade</button>
                    <button className={active === 6 ? "btn btn_supfa ml-3" : "btn btn_supfua ml-3"} onClick={() => setActive(6)}>Fastag</button>
                    <button className={active === 7 ? "btn btn_supfa ml-3" : "btn btn_supfua ml-3"} onClick={() => setActive(7)}>Challan</button>
                    <button className={active === 8 ? "btn btn_supfa ml-3" : "btn btn_supfua ml-3"} onClick={() => setActive(8)}>Chauffer</button>
                </div>

                <div className="row faq_box">
                    <div className="col-lg-2 col-2 col-md-3">
                        <div className="faq_word d-flex justify-content-center mt-4">{faqs.length + 1}</div>
                    </div>
                    <div className="col-lg-10 col-2 col-md-3" >
                        <form>
                            <div className="row">
                                <div className="col-12 col-lg-12 col-md-12">
                                    <div className="faq_b1">
                                        <div className="row">
                                            <div className="col-lg-12 col-12 col-md-12">
                                                <div className="mt-2 py-2" style={{ borderBottom: '2px solid #99999973', width: '96%' }}>
                                                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="faq_input" placeholder="Enter FAQ Question" />
                                                </div>
                                                <div className="mt-2 mb-4 py-2" style={{ width: '96%' }}>
                                                    <input type="text" value={body} onChange={(e) => setBody(e.target.value)} className="faq_input" placeholder="Enter FAQ Answer" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="d-flex mt-3">
                                    <button className="btn btn-sup-add">ADD MORE</button>
                                    <button className="btn btn-sup-save ml-2" onClick={SubmitHandler}>SAVE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Support1