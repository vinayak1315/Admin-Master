import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import login_img from '../../images/login_img.png'
import cross from '../../images/cross.png'
import { useDispatch, useSelector } from 'react-redux'
import { newPasswordAction } from '../../actions/userActions'
import {useAlert} from 'react-alert'
import Loader from './Loader'
const NewPassword = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const alert = useAlert();
    const dispatch = useDispatch();
    const { success, message, error, loading } = useSelector(state => state.newPassword)

    useEffect(() => {
        if (error) {
            alert.error(error)
        }
        if (success) {
            navigate(`/login`);
            alert.success(message)
        }
    }, [error, success, alert, message]);

    const SubmitHandler = (e) => {
        e.preventDefault();
        if (password === newPassword) {
            const formData = new FormData();
            formData.set("action", "resetPassword");
            formData.set("mobileNumber", id);
            formData.set("passCode", password);
            dispatch(newPasswordAction(formData));
        } else {
            alert.error("Enter Password Doesn't Match")
        }
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
                                        <div><b>Hello User,</b><span className="cross"><img src={cross} alt="cancel" width="16px" height="16px" style={{cursor:"pointer"}} /></span></div>
                                    </div>
                                    <form className="login_form">
                                        <h4><b>Set Password</b></h4>
                                        <div className="form-group">
                                            <input type="password" className="form-control login-input-fied" name="passCode" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
                                        </div>

                                        <div className="form-group">
                                            <input type="password" className="form-control login-input-fied" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} placeholder="Re-enter Password" />
                                        </div>

                                        <button className="text-center btn btn-continue mt-2" onClick={SubmitHandler}>CONFIRM</button>
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

export default NewPassword