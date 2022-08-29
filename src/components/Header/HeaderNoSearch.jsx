import React from 'react'
import notification from '../../images/notification.png'
import profiledown from '../../images/profiledown.png'
import useravatar from '../../images/useravatar.png'
import search from '../../images/search.png'
import { useNavigate } from 'react-router-dom'

const HeaderNoSearch = ({ title, navbar_comp }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="header_section">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-center">
              <div className="header_title">
                <div>{title}</div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="header_search d-flex align-items-center"></div>
            </div>
            <div className="col-lg-6 padding_remover">

              <div className="Header_right d-flex align-items-center">
                {navbar_comp}
                <div className="notification_icon d-flex justify-content-center align-items-center">
                  <img src={notification} alt="notification" width="23px" height="25px" />
                </div>
                <div className="header_profile" onClick={() =>navigate('/login')} style={{cursor:"pointer"}}>
                  <img src={useravatar} alt="avatar" width="48px" height="48px" />
                  <img src={profiledown} alt="profile" width="14px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderNoSearch