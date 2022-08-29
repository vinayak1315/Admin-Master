import React from 'react'
import popcut from '../../images/popupcut.png'
import { useNavigate } from 'react-router-dom'
const AddService = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="text-center">
                <div className="fifteen">Are you sure you want to add this service?</div>
                <div className="mt-4 ">
                    <button className="btn btn-add-service fifteen" onClick={() => navigate('/consultation/detail/add_service')}>Add Service</button>
                </div>
                <div className="mt-3" style={{ fontSize: "15px", color: "#2650D8" }}><a href="#">Cancel</a></div>
            </div>
        </>
    )
}

export default AddService