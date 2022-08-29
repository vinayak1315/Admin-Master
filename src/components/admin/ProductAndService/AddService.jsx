import React, { useEffect, useState } from 'react'
import { ProductHeader, AsTitle } from './ProductComp'
import { IoIosArrowDown } from 'react-icons/io'
import addImage from '../../../images/addImage.png'
import { GoDiffAdded } from 'react-icons/go'
import { BsCheck2Square } from 'react-icons/bs'
import MetaData from '../../layout/MetaData'
import { newService } from '../../../actions/ServiceActions'
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { ADD_SERVICE_RESET } from '../../../constants/ServiceConstants'
const AddSevice = () => {
    const apforms = [
        {
            title: "Item form"
        },
        {
            title: "Color"
        },
        {
            title: "Item Dimensions"
        },
        {
            title: "Item Weight"
        },
        {
            title: "Duration"
        },
        {
            title: "Manufacturer"
        },
        {
            title: "Manufacturer Warranty"
        },
        {
            title: "Quantity"
        },
    ]
    const pricing = [
        {
            title: "Actual Price"
        },
        {
            title: "MG Price"
        },
        {
            title: "GST Rate"
        },
        {
            title: "commission"
        }
    ]
    const { success, message, error } = useSelector(state => state.service);
    const { user } = useSelector(state => state.auth)
    const alert = useAlert();
    const [serviceImage, setServiceImage] = useState('')
    const [serviceName, setServiceName] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            alert.error(error)
        }
        if (success === "success") {
            alert.success(message)
            dispatch({ type: ADD_SERVICE_RESET })
            navigate('/service&repair')
        }
    }, [dispatch, alert, success, error])
    const fileHandler = (e) => {
        document.getElementById("myFile").click();
        console.log(e.target.files[0])
        setServiceImage(e.target.files[0])
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (!serviceName) {
            alert.error("Please fill form to Add Service")
        } else {
            const formData = new FormData();
            formData.set('serviceImage', serviceImage)
            formData.set('memberId', user.memberId)
            formData.set("action", "create")
            formData.set("isStatus", 1)
            formData.set("serviceName", serviceName)
            dispatch(newService(formData))
        }
    }

    return (
        <>
            <ProductHeader title={<AsTitle />} />
            <MetaData title="Add Service" />
            <div className="AddProduct">
                <div className="row">
                    <div className="col-lg-4 col-4">
                        <div className="ap_01">
                            <div className="row mt-2">
                                <div className="col-lg-4 col-4">
                                    <div><b style={{ color: "#00155A", fontSize: "15px" }}>Category</b></div>
                                </div>
                                <div className="col-lg-8 col-6">
                                    <div style={{ color: "#2650D8", fontSize: "15px", paddingBottom: "8px", borderBottom: "2px solid #999999", width: "200px" }}>Perfumes & Freshners<b style={{ float: "right" }}><IoIosArrowDown /></b></div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-lg-4 col-4">
                                    <div><b style={{ color: "#00155A", fontSize: "15px" }}>Subcategory</b></div>
                                </div>
                                <div className="col-lg-8 col-6">
                                    <div style={{ color: "#2650D8", fontSize: "15px", paddingBottom: "8px", borderBottom: "2px solid #999999", width: "200px" }}>Air Purifiers<b style={{ float: "right" }}><IoIosArrowDown /></b></div>
                                </div>
                            </div>
                            <div className="ap_02 mt-5 m-auto d-flex justify-content-center align-items-center">
                                <div>
                                    <input type="file" id="myfile" accept="image/*" onChange={fileHandler} />
                                    <label for="file" >
                                        <img src={addImage} width="30px" height="30px" />
                                        <div style={{ color: "#2650D8", fontSize: "15px" }} className="mt-3">Add Images</div>
                                    </label>
                                </div>
                            </div>
                            {/* <div className="ap_02 mt-5 m-auto d-flex justify-content-center align-items-center">
                                <img src={addImage} width="30px" height="30px" />
                            </div>
                            <input id="myfile" type="file" accept="image/*" required name="serviceImage" onChange={fileHandler}  />
                            <label for="file" >
                                <img src={addImage} width="30px" height="30px" />
                                <div style={{ color: "#2650D8", fontSize: "14px" }} className="mt-3">Add Images</div>
                            </label> */}
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="ap_03">
                            <form>
                                <div><b style={{ fontSize: "18px", color: "#00155A" }}>Service Name</b></div>
                                <div style={{ color: "#5D6186", fontSize: "15px", paddingBottom: "0px", borderBottom: "2px solid #999999" }} className="mt-2"><input type="text" placeholder="Service Name" required name="serviceName" onChange={(e) => setServiceName(e.target.value)} className="ap_input" /></div>

                                <div style={{ marginTop: "30px" }}><b style={{ fontSize: "18px", color: "#00155A" }}>Highlights</b></div>
                                <div style={{ color: "#5D6186", fontSize: "15px", paddingBottom: "3px", borderBottom: "2px solid #999999" }} className="mt-2"><span style={{ fontSize: "15px", color: "#2650D8" }}>Line 1<input type="text" className="ml-2 ap_input" /></span></div>
                                <div style={{ color: "#5D6186", fontSize: "15px", paddingBottom: "3px", borderBottom: "2px solid #999999" }} className="mt-2"><span style={{ fontSize: "15px", color: "#2650D8" }}>Line 2<input type="text" className="ml-2 ap_input" /></span></div>

                                <div style={{ marginTop: "30px" }}><b style={{ fontSize: "18px", color: "#00155A" }}>What's Included</b></div>
                                <div style={{ color: "#5D6186", fontSize: "15px", paddingBottom: "3px", borderBottom: "2px solid #999999" }} className="mt-2"><span style={{ fontSize: "15px", color: "#2650D8" }}>Line 1<input type="text" className="ml-2 ap_input" /></span></div>

                                <div className="d-flex align-items-center mt-3"><span style={{ fontSize: "15px", color: "#ED7D2B" }}><GoDiffAdded /></span><span className="ml-2" style={{ fontSize: "12px", color: "#ED7D2B" }}>Add Line</span></div>

                                <div style={{ marginTop: "20px" }}><b style={{ fontSize: "18px", color: "#00155A" }}>FAQs</b></div>

                                <div style={{ color: "#5D6186", fontSize: "15px" }} className="mt-2"><span style={{ fontSize: "15px", color: "#5D6186" }}>Question 1<input type="text" className="ml-2 ap_input" style={{ paddingBottom: "3px", borderBottom: "2px solid #999999" }} /></span></div>

                                <div style={{ color: "#5D6186", fontSize: "15px", paddingBottom: "3px", borderBottom: "2px solid #999999" }} className="mt-2"><span style={{ fontSize: "12px", color: "#2650D8" }}>Answer 1<input type="text" className="ml-2 ap_input" /></span></div>

                                <div className="d-flex align-items-center mt-3"><span style={{ fontSize: "15px", color: "#ED7D2B" }}><GoDiffAdded /></span><span className="ml-2" style={{ fontSize: "12px", color: "#ED7D2B" }}>Add FAQs</span></div>

                                <div className="mt-3"><span style={{ color: "#00155A", fontSize: "15px" }}><BsCheck2Square /></span><span className="ml-2" style={{ color: "#2650D8", fontSize: "15px" }}>Mark as Featured</span></div>

                                <div className="d-flex justify-content-center mt-4">
                                    <div>
                                        <button className="btn btn_discard">Discard</button>
                                    </div>
                                    <div className="ml-3">
                                        <button className="btn btn_save_ap" onClick={submitHandler}>SAVE</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddSevice