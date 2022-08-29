// Service And Repair
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../Header'
import { SarTitle } from './PasComp'
import image from '../../../images/image.jpg'
import { GoDiffAdded } from 'react-icons/go'
import { FaRegEdit } from 'react-icons/fa'
import { IoMdCheckboxOutline } from 'react-icons/io'
import { MdOutlineCancel } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux';
import { getAllService, getServicePackage, getServicePackageById, getSinglePackage } from '../../../actions/ServiceActions'
import sar1 from '../../../images/sar1.png'
import sar2 from '../../../images/sar2.png'
import sar3 from '../../../images/sar3.png'
import sar4 from '../../../images/sar4.png'
import sar5 from '../../../images/sar5.png'
import sar6 from '../../../images/sar6.png'
import sar7 from '../../../images/sar7.png'
import sar8 from '../../../images/sar8.png'
import sar_cross from '../../../images/sar_cross.png'
const Sar1 = () => {
    const services = [
        {
            title: "Periodic Service",
            total: 912,
            complete: 900,
            ongoing: 12,
            image: sar1,
            width: "40px",
            height: "35px"
        },
        {
            title: 'AC Service & Repairs',
            total: 912,
            complete: 900,
            ongoing: 12,
            image: sar2,
            width: "40px",
            height: "35px"
        },
        {
            title: "Battery Care",
            total: 912,
            complete: 900,
            ongoing: 12,
            image: sar3,
            width: "32px",
            height: "35px"
        },
        {
            title: "Wheel Care",
            total: 912,
            complete: 900,
            ongoing: 12,
            image: sar4,
            width: "38px",
            height: "35px"
        },
        {
            title: "Denting & Painting",
            total: 912,
            complete: 900,
            ongoing: 12,
            image: sar5,
            width: "35px",
            height: "35px"
        },
        {
            title: "Mechanical Repairs",
            total: 912,
            complete: 900,
            ongoing: 12,
            image: sar6,
            width: "33px",
            height: "33px"
        },
        {
            title: "Inspection Service",
            total: 912,
            complete: 900,
            ongoing: 12,
            image: sar7,
            width: "33px",
            height: "35px"
        },
        {
            title: "Road Side Assistance",
            total: 912,
            complete: 900,
            ongoing: 12,
            image: sar8,
            width: "39px",
            height: "36px"
        },
    ]
    const sidecontents = [
        {
            title: "Basic Service",
            content: "Every 5000 Kms or 3 months",
            point: 9,
            id: 1
        }
    ]
    const inspections = [
        {
            title: "Car Inspection & Diagnostics",
            content: "Every 5000 Kms or 3 months",
            point: 9,
            id: 3,
        }, {
            title: "Engine Scanning",
            content: "Every 10000 Kms or 3 months",
            point: 15,
            rec: "recommended",
            id: 4
        }
    ]

    const [option, setOption] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { servicesList, error, loading } = useSelector(state => state.getService);
    const { result } = useSelector(state => state.singlePackage);
    const { id } = useParams();

    useEffect(() => {
        const data = new FormData();
        data.set("action", "getlist");
        dispatch(getServicePackage(data));
        console.log(id)
        const dataForm = new FormData();
        dataForm.set("action", "get-single-package");
        dataForm.set("packageId", id);
        dispatch(getSinglePackage(dataForm));
    }, [dispatch])
    return (
        <>
            <Header title={<SarTitle />} />
            <div className="row p2_row">
                <div className="col-5 col-lg-4 count_box page_reducer">
                    <div className="mt-2 text-center mb-2 mg_btn" style={{ width: "100%" }}>
                        <button className="btn">ADD NEW SERVICE</button>
                    </div>
                    {servicesList.map(data => (
                        <div className="sar_box" style={{ cursor: "pointer" }} onClick={() => navigate('/service&repair')}>
                            <div className="row">
                                <div className="col-6 col-lg-6">
                                    <div className="d-flex align-items-center" style={{ height: "60px" }}>
                                        <img src={data.imageUri} width="40px" height="35px" className="mr-1" />
                                        <div className='ml-3' style={{ fontSize: "12px", color: "#00155A", width: "70px" }}><b>{data.name}</b></div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-6 side_border">
                                    <span style={{ fontSize: "12px", color: "#00155A" }}>All Bookings</span><br /><div style={{ fontSize: "15px", color: "#2650D8" }}>900</div><div style={{ fontSize: "12px" }}><span style={{ color: "#438969" }}>10 + </span><span style={{ color: "#ED7D2B" }}>20</span></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-lg-7 col-7 page_reducer">
                    <div className="add_deal mt-1">

                            <div className="sar_box1">
                                <div className="row p2_row">
                                    <div className="col-lg-12 col-12 padding_remover">
                                        <div className="row">
                                            <div className="col-lg-7 col-9">
                                                <div className="d-flex">

                                                    <>
                                                        <div>
                                                            <img src={result.imageUri} alt="garage" width="120px" height="120px" className="mg_img_01" />
                                                        </div>
                                                        <div className="ml-3">
                                                            <div className="fifteen"><b>{result.package_name}</b><span className="ml-1" style={{ color: "#F45C3B", fontSize: "15px", cursor: "pointer" }}>[Edit]</span></div>
                                                            <div style={{ color: "#5D6186", fontSize: "12px", marginTop: "15px" }}>
                                                                <li>{result.months_or_kms}</li>
                                                                <li className="mt-2">{result.months_or_kms}</li>
                                                            </div>
                                                            <div className="sar_rec">{result.rec}</div>
                                                        </div>
                                                    </>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-lg-12">
                                                <div className="sar_show">
                                                    <div style={{ color: "#00155A", fontSize: "15px" }}><b>What's Included</b><span className="ml-1" style={{ color: "#F45C3B", fontSize: "15px", cursor: "pointer" }}>[Edit]</span></div>
                                                    <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Line 1</span><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Engine Oil Replacement</span></div>
                                                    <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Line 2</span><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Oil Filter Replacement</span></div>
                                                    <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Line 3</span><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Air Filter</span></div>
                                                    <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Line 4</span><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Coolant Top up</span></div>
                                                    <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Line 5</span><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Wiper Fluid Replacement</span></div>
                                                    <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Line 6</span><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Battery Water Top up</span></div>
                                                    <div className="mt-2"><span style={{ color: "#2650D8", fontSize: "15px" }}>Line 7</span><span style={{ color: "#5D6186", fontSize: "15px" }} className="ml-2">Heater/Spark plugs checking</span></div>
                                                    <div className="mt-3"><GoDiffAdded style={{ fontSize: "15px", color: "#2650D8" }} /><span style={{ fontSize: "12px", color: "#2650D8" }} className="ml-2">Add Line</span></div>
                                                    <div className="sar_position" onClick={() => navigate('/service&repair')}>
                                                        <div className="sar_cross d-flex justify-content-center align-items-center">
                                                            <img src={sar_cross} width="11px" height="11px" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-lg-12">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-6">
                                                            <div style={{ cursor: "pointer" }}><IoMdCheckboxOutline style={{ fontSize: "18px" }} /><span style={{ fontSize: "15px", color: "#2650D8" }} className="ml-1">Mark as Recommended</span></div>
                                                            <div className="mt-2" style={{ color: "#B92100", cursor: "pointer" }}><MdOutlineCancel style={{ fontSize: "18px" }} /><span style={{ fontSize: "15px" }} className="ml-1">Mark as Recommended</span></div>
                                                        </div>
                                                        <div className="col-lg-6 col-6">
                                                            <div className="d-flex justify-content-between mt-2">
                                                                <div>
                                                                    <button className="btn btn_sar_reset" style={{ fontSize: "15px", color: "#2650D8" }}>RESET</button>
                                                                </div>
                                                                <div>
                                                                    <button className="btn btn_sar_apply" style={{ fontSize: "15px" }}>APPLY</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sar1