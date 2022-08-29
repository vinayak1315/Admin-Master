import React from 'react'
import popcut from '../../images/popupcut.png'
const CancelPopup2 = () => {
    return (
        <>
            <div className="text-center fifteen">
                <div className="">Are you sure you want to delete this service?</div>
                <div className="mt-4 d-flex justify-content-center">
                    <button className="btn btn-block-account">Block Account</button>
                </div>
                <div className="mt-3" style={{fontSize:"15px", color:"#2650D8"}}><a href="#">Cancel</a></div>
            </div>
        </>
    )
}

export default CancelPopup2