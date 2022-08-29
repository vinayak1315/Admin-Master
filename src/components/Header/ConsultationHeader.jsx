import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import notification from '../../images/notification.png'
import profiledown from '../../images/profiledown.png'
import useravatar from '../../images/useravatar.png'
import edit_icon from '../../images/edit.png'
import search from '../../images/search.png'
import { FaAngleLeft, FaPlus, FaAngleUp, FaAngleDown, FaStar, FaInfoCircle, FaCarSide } from 'react-icons/fa'

const ConsultationHeader = () => {
    return (
        <>
            <div className="header">
                <div className="header_section">
                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-center padding_remover_c1">
                            <div className="header_title d-flex align-items-center">
                                <div>
                                    <Link to="/consultation/detail" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
                                </div>
                                <div>#123456</div>
                                <div>
                                    <Link to="/consultation/update/detail" style={{ textDecoration: 'none' }}><img src={edit_icon} className="cons_edit ml-3 mb-1" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="header_search d-flex align-items-center">
                                <div className="input-icons">
                                    <img src={search} alt="search" className="search_icon" />
                                </div>
                                <input placeholder="Search" className="input-field" />
                            </div>
                        </div>
                        <div className="col-lg-5 padding_remover">

                            <div className="Header_right d-flex align-items-center">
                                <div className="notification_icon d-flex justify-content-center align-items-center">
                                    <img src={notification} alt="notification" width="23px" height="25px" />
                                </div>
                                <div className="header_profile">
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

export default ConsultationHeader