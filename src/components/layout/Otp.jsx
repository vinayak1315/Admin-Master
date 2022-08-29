import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import login_img from '../../images/login_img.png'
import cross from '../../images/cross.png'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { OtpVerification, forgotPassword } from '../../actions/userActions'
import Loader from './Loader'

const Otp = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [otp, setOtp] = useState('');
    const alert = useAlert();
    const dispatch = useDispatch();
    const { success, loading, error } = useSelector(state => state.otpVerify)
    useEffect(() => {
        if (error) {
            alert.error(error)
        }
        if (success) {
            navigate(`/new/password/${id}`);
            alert.success("Verification Success")
        }
    }, [error, success, alert]);
    const SubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("action", "otpVerify");
        formData.set("mobileNumber", id);
        formData.set("otpCode", otp);
        dispatch(OtpVerification(formData));
    }
    const ResendHandler = (e) => {
        e.preventDefault();
        const otpData = new FormData();
        otpData.set("action", "generateOTP");
        otpData.set("mobileNumber", id);
        dispatch(forgotPassword(otpData));
    }
    return (
        <>
            {loading ? <Loader /> : (
                <>
                    <div className="login">
                        <div className="row">
                            <div className="col-lg-8 col-md-6 col-12 hide_login">
                                <img src={login_img} alt="Welcome" className="login_img" width="100%" />
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="form-box">
                                    <div>
                                        <div><b>Hello User,</b><span className="cross"><img src={cross} alt="cancel" width="16px" height="16px" /></span></div>
                                    </div>
                                    <form className="login_form">
                                        <h4><b>Enter OTP</b></h4>
                                        <div className="form-group resend_pos">
                                            <input name="otpCode" value={otp} onChange = {(e)=> setOtp(e.target.value)} className="form-control login-input-fied" placeholder="Enter OTP here" />
                                            <div className="otp" style={{cursor:"pointer"}} onClick={ResendHandler}>Resend</div>
                                        </div>

                                        <button className="text-center btn btn-continue mt-2" onClick={SubmitHandler}>SUBMIT</button>
                                        <br />
                                        <div className="form-group mt-4">
                                            <p style={{ color: "#00155A" }}>OTP sent to 8897564353</p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default Otp