import React from 'react'
import expand from '../../../images/expand.png'

const Dash03 = () => {
    return (
        <>
            <div className="dash_03">
                    <img src={expand} width="13.81px" height="13.81px" className="ml-2 expand_img" />
                <div className="row">
                    <div className="col-lg-6">
                        <b style={{ fontSize: "18px" }}>MG Coins</b>
                    </div>
                    <div className="col-lg-6">
                        <b style={{ fontSize: "25px", color: "#2650D8" }}>90</b>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-lg-6">
                        <b style={{ fontSize: "15px", color: "#5D6186" }}>Distributed</b>
                    </div>
                    <div className="col-lg-6">
                        <b style={{ fontSize: "15px", color: "#B92100" }}>100</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <b style={{ fontSize: "15px" }}>Reedemed</b>
                    </div>
                    <div className="col-lg-6">
                        <b style={{ fontSize: "15px", color: "#438969" }}>100</b>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Dash03 }