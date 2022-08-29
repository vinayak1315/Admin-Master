import React from 'react'
import Header from '../../Header/HeaderNoSearch'
import {HeadBack} from '../../Header/BackHeader'
import { BsCheckCircleFill } from 'react-icons/bs'
import MetaData from '../../layout/MetaData'
const OnBoarding = () => {
    return (
        <>
            <MetaData title="Completed" />
            <Header title="Onboarding Complete" />
            <div className="">
                <div className=" on_boarding d-flex justify-content-center align-items-center text-center">
                    <div>
                        <BsCheckCircleFill style={{ color: "#53BD8C", fontSize: "104px" }} />
                        <div className="mt-2" style={{ fontSize: "24px" }}><b>Onboarding Successfully Completed</b></div>
                        <div className="mt-5">
                            <button className="btn" style={{fontSize: "15px", padding:"15px 45px", borderRadius:"10px", color:"#fff", backgroundColor:"#2650D8"}}>All Garages</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnBoarding