import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import login_img from '../../images/login_img.png'
import cross from '../../images/cross.png'
import {useDispatch, useSelector} from 'react-redux'
import { useAlert } from 'react-alert'
import {forgotPassword} from '../../actions/userActions'
const ForgotPassword = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const alert = useAlert();
    const dispatch = useDispatch();
    const { success, error } = useSelector(state=>state.forgotPassword) 
    useEffect(() => {
        if(error){
            alert.error(error)
        }
        if(success) {
            navigate(`/forgot/password/otp/${phone}`);
            alert.success("OTP Sent Successfully")
        }
    }, [error, success, alert]);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("action", "generateOTP");
        formData.set("mobileNumber", phone);
        dispatch(forgotPassword(formData));
    }
    return (
        <>
            <div className="login">
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-12 hide_login">
                        <img src={login_img} alt="Welcome" className="login_img" width="100%" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="form-box">
                            <div>
                                <div style={{float: 'right'}}><img src={cross} alt="cancel" width="16px" height="16px" /></div>
                            </div>
                            <form className="login_form">
                                <h4><b>Forgot Password</b></h4>
                                <div className="form-group">
                                    <input className="form-control login-input-fied" name="mobileNumber" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Mobile Number" />
                                </div>


                                <button className="text-center btn btn-continue mt-2" onClick={SubmitHandler}>CONTINUE</button>
                                <br />
                                <div className="form-group mt-4">
                                    <p style={{color:"#00155A"}}>OTP will be sent to registered mobile number</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword