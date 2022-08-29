import React from 'react'
import Header from '../Header'
import {ReviewTitle} from './PromotionComp'
import image from "../../../images/image.jpg"
import { FaTrash, FaEdit } from "react-icons/fa"
import edit from '../../../images/edit_white.png'
const Promotion3 = () => {
    return (
        <>
            <div className="promotion3">
                <Header title={<ReviewTitle />} />
                <div className="mt-4">
                    <div className="row">
                        <div className="col-lg-3 col-3">
                            <div className=" mt-4  d-flex justify-content-center">
                                <div className="review_c1">
                                    <div className="review_edit_btn">
                                        <div className="edit_review_img ">
                                            <img src={edit} width="20px" height="20px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-2" style={{ fontSize: "12px", color: "#999999" }}>Ankita Singh</div>
                        </div>
                        <div className="col-lg-9">
                            <form>
                                <div className="form-group d-flex align-items-center mt-4">
                                    <label style={{ width: "150px", fontSize: "15px" }}>Name</label>
                                    <input style={{ width: "400px" }} type="text" className="form-control promo_form" placeholder="Type here" />
                                </div>
                                <div className="form-group d-flex align-items-center mt-4">
                                    <label style={{ width: "150px", fontSize: "15px" }}>Location</label>
                                    <input style={{ width: "400px" }} type="text" className="form-control promo_form" placeholder="Type here" />
                                </div>
                                <div className="form-group d-flex align-items-center mt-4">
                                    <label style={{ width: "150px", fontSize: "15px" }}>Rating</label>
                                    <input style={{ width: "400px" }} type="text" className="form-control promo_form" placeholder="Type here" />
                                </div>
                                <div className="form-group d-flex align-items-center mt-4">
                                    <label style={{ width: "150px", fontSize: "15px" }}>Name</label>
                                    <input style={{ width: "400px" }} type="text" className="form-control promo_form" placeholder="Type here" />
                                </div>
                                <div className="form-group d-flex align-items-center mt-4">
                                    <label style={{ width: "150px", fontSize: "15px" }}>Headline</label>
                                    <input style={{ width: "400px" }} type="text" className="form-control promo_form" placeholder="Type here" />
                                </div>
                                <div className="form-group d-flex mt-4">
                                    <label style={{ width: "150px", fontSize: "15px" }}>Review</label>
                                    <textarea style={{ width: "400px" }} type="text" className="form-control promo_form" rows="5" placeholder="Type here" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <button className="btn btn-promo-save">SAVE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promotion3