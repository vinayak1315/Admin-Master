import React from 'react'
import { BsCheckSquare, BsCheckSquareFill } from 'react-icons/bs'
import popcut from '../../images/popupcut.png'
import {useNavigate} from 'react-router-dom'

const CancelPopup1 = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="cancel_popup">
                <div style={{ fontSize: "15px" }}><b>Reason for Cancellation</b></div>
                <div className="mt-2 fifteen cancel-grey">
                    <BsCheckSquare /><span className="ml-2">Wrongly Booked</span>
                </div>
                <div className="mt-2 fifteen cancel-grey">
                    <BsCheckSquare /><span className="ml-2">Not Available</span>
                </div>
                <div className="mt-2 fifteen cancel-grey">
                    <BsCheckSquare /><span className="ml-2">Found better Price</span>
                </div>
                <div className="mt-2 fifteen cancel-grey">
                    <BsCheckSquare /><span className="ml-2">Reason Undisclosed</span>
                </div>
                <div className="mt-2 fifteen cancel-grey">
                    <BsCheckSquare /><span className="ml-2">May book some other day </span>
                </div>
                <div className="mt-2 fifteen cancel-grey">
                    <BsCheckSquare /><span className="ml-2">Garage Denied Booking</span>
                </div>
                <div className="mt-2 fifteen cancel-grey">
                    <BsCheckSquare /><span className="ml-2">Others</span>
                </div>
                <div className="mt-3 fifteen">
                    <b>Other Reason- Please Explain</b>
                </div>
                <div className="mt-2 fifteen cancel-grey">
                    <form>
                        <textarea className="cancel_input form-control"/>
                        <div className="mt-3 d-flex justify-content-center">
                            <button className="btn btn-cancel-proceed" onClick={() => navigate('/consultation/cancel')}>Proceed</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CancelPopup1


