import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import login_img from '../../images/login_img.png'
import cross from '../../images/cross.png'
import MetaData from './MetaData'
import { login, clearErrors } from '../../actions/userActions';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {useAlert} from 'react-alert'
const Login = () => {

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const alert = useAlert();
    const { loading, error, isAuthenticated } = useSelector(state => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            alert.success('Login Successfull')
            navigate('/')
        }
        if (error) {
            alert.error(error)
            dispatch(clearErrors());
        }
    }, [dispatch, alert, isAuthenticated, error, navigate])



    const SubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('action', "signin")
        formData.set('mobileNumber', phone)
        formData.set('passCode', password);

        dispatch(login(formData));

    }
    return (
        <>
            <MetaData title="Login" />
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
                            <form className="login_form" action="signin" onSubmit={SubmitHandler}>
                                <h4><b>Log in</b></h4>
                                <div className="form-group">
                                    <input className="form-control login-input-fied" type="text" name="mobileNumber" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone number or E-mail" />
                                </div>

                                <div className="form-group">
                                    <input className="form-control login-input-fied" type="password" name="passCode" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                                </div>

                                <button className="text-center btn btn-continue mt-2" >CONTINUE</button>
                                <br />
                                <div className="form-group mt-5">
                                    <p>Trouble Logging in? <span className="forgot_link"><Link to='/forgot/password' >Forgot Password</Link></span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login