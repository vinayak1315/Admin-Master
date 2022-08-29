import React from 'react'
import { ProductHeader, ApTitle } from './ProductComp'
import { IoIosArrowDown } from 'react-icons/io'
import addImage from '../../../images/addImage.png'
import { GoDiffAdded } from 'react-icons/go'
import {BsCheck2Square} from 'react-icons/bs'
const AddProduct = () => {
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
            title:"Actual Price"
        },
        {
            title: "MG Price"
        },
        {
            title:"GST Rate"
        },
        {
            title:"commission"
        }
    ]
    return (
        <>
            <ProductHeader title={<ApTitle />} />
            <div className="AddProduct">
                <div className="row">
                    <div className="col-lg-4 col-4">
                        <div className="ap_01">
                            <div className="row">
                                <div className="col-lg-4 col-4">
                                    <div><b style={{ color: "#00155A", fontSize: "15px" }}>Store</b></div>
                                </div>
                                <div className="col-lg-8 col-6">
                                    <div style={{ color: "#2650D8", fontSize: "15px", paddingBottom: "8px", borderBottom: "2px solid #999999", width: "200px" }}>VM Car Accessories<b style={{ float: "right" }}><IoIosArrowDown /></b></div>
                                </div>
                            </div>
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
                                <img src={addImage} width="30px" height="30px" />
                            </div>
                            <div className="d-flex align-items-center mt-5"><span style={{ fontSize: "17px", color: "#2650D8" }}><GoDiffAdded /></span><span className="ml-2" style={{ fontSize: "14px", color: "#2650D8" }}>Add Image</span></div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="ap_03">
                            <div><b style={{ fontSize: "18px", color: "#00155A" }}>Product Name</b></div>
                            <div style={{ color: "#5D6186", fontSize: "15px", paddingBottom: "10px", borderBottom: "2px solid #999999" }} className="mt-2">Godrej Aer Twist Cool Air Freshener (60 ml)</div>

                            <div style={{ marginTop: "30px" }}><b style={{ fontSize: "18px", color: "#00155A" }}>Product Highlights</b></div>
                            <div style={{ color: "#5D6186", fontSize: "15px", paddingBottom: "3px", borderBottom: "2px solid #999999" }} className="mt-2"><span style={{ fontSize: "15px", color: "#2650D8" }}>Line 1<input type="text" className="ml-2 ap_input" /></span></div>
                            <div style={{ color: "#5D6186", fontSize: "15px", paddingBottom: "3px", borderBottom: "2px solid #999999" }} className="mt-2"><span style={{ fontSize: "15px", color: "#2650D8" }}>Line 2<input type="text" className="ml-2 ap_input" /></span></div>

                            <div style={{ marginTop: "30px" }}><b style={{ fontSize: "18px", color: "#00155A" }}>Product Description</b></div>
                            <div style={{ color: "#5D6186", fontSize: "15px", paddingBottom: "3px", borderBottom: "2px solid #999999" }} className="mt-2"><span style={{ fontSize: "15px", color: "#2650D8" }}>Line 1<input type="text" className="ml-2 ap_input" /></span></div>

                            <div className="d-flex align-items-center mt-3"><span style={{ fontSize: "15px", color: "#ED7D2B" }}><GoDiffAdded /></span><span className="ml-2" style={{ fontSize: "12px", color: "#ED7D2B" }}>Add Line</span></div>

                            <div style={{ marginTop: "20px" }}><b style={{ fontSize: "18px", color: "#00155A" }}>Product Specification</b></div>

                            <div className="ap_form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {apforms.map(apform =>
                                            <div className="row mt-2">
                                                <div className="col-6 col-lg-6">
                                                    <div style={{ color: "#2650D8", fontSize: "15px" }}>{apform.title}</div>
                                                </div>
                                                <div className="col-6 col-lg-6">
                                                    <div style={{ color: "#2650D8", fontSize: "15px", borderBottom: "2px solid #999999" }}><input type="text" className="ap_input" /></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: "20px" }}><b style={{ fontSize: "18px", color: "#00155A" }}>Pricing</b></div>

                            <div className="ap_form">
                                <div className="row">
                                    <div className="col-lg-12">
                                            <div className="row mt-2">
                                                <div className="col-6 col-lg-6">
                                                    <div style={{ color: "#2650D8", fontSize: "15px" }}>Actual Price</div>
                                                </div>
                                                <div className="col-6 col-lg-6">
                                                    <div style={{ color: "#2650D8", fontSize: "15px", borderBottom: "2px solid #999999" }}><input type="text" className="ap_input" /></div>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-6 col-lg-6">
                                                    <div style={{ color: "#2650D8", fontSize: "15px" }}>MG Price</div>
                                                </div>
                                                <div className="col-6 col-lg-6">
                                                    <div style={{ color: "#2650D8", fontSize: "15px", borderBottom: "2px solid #999999" }}><input type="text" className="ap_input" /></div>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-6 col-lg-6">
                                                    <div style={{ color: "#2650D8", fontSize: "15px" }}>GST Rate</div>
                                                </div>
                                                <div className="col-6 col-lg-6">
                                                    <div style={{ color: "#2650D8", fontSize: "15px", borderBottom: "2px solid #999999", width:"40%" }}><input type="text" className="ap_input" /></div>
                                                </div>
                                            </div>  
                                            <div className="row mt-2">
                                                <div className="col-6 col-lg-6">
                                                    <div style={{ color: "#2650D8", fontSize: "15px"}}>Commission</div>
                                                </div>
                                                <div className="col-6 col-lg-6">
                                                    <div style={{ color: "#2650D8", fontSize: "15px", borderBottom: "2px solid #999999", width:"40%" }}><span><input type="text" className="ap_input" /></span></div>
                                                </div>
                                            </div>  
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3"><span style={{color:"#00155A", fontSize: "15px"}}><BsCheck2Square/></span><span className="ml-2" style={{color:"#2650D8", fontSize: "15px"}}>Mark as Featured</span></div>
                            
                            <div className="d-flex justify-content-center mt-4">
                                <div>
                                    <button className="btn btn_discard">Discard</button>
                                </div>
                                <div className="ml-3">
                                    <button className="btn btn_save_ap">SAVE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct