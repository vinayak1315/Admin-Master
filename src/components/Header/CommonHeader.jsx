import React from 'react'
import download from '../../images/download.png'
const CommonHeader = () => {
  return (
    <>
      <div className="d-flex">
      <div className="header_title">
        <div className="time mr-3 d-flex align-items-center justify-content-start">
          <div className="time_mg">Days</div>
          <div className="time_mg">Weeks</div>
          <div className="time_mg">Months</div>
        </div>
      </div>
        
        <div className="mg_world_header">
          <div className='d-flex align-items-center'>
            <img src={download} width="25" height="25" />
            <div style={{ fontSize: "13px" }} className="ml-2">Jan,2019 - Dec,2019</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default CommonHeader