import React from 'react'
import Header from '../Header'
import { Chat_title } from './SupportComp'
import img from "../../../images/image.jpg"
import { useNavigate } from 'react-router-dom'
import chat from '../../../images/chat.png'

const Support2 = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header title={<Chat_title />} />
            <div className="row margin_settle_chat">
                <div className="col-lg-4 chat_side">
                    <div className="row chat_lt1">
                        <div className="col-lg-12 col-12">
                            <div className="row">
                                <div className="d-flex">
                                    <div className="">
                                        <img src={img} alt="profile photo" width="50px" height="50px" className="img_chat_profile" />
                                    </div>
                                    <div className="d-flex align-items-center ml-3">
                                        <div><span style={{ fontSize: "15px", color: "#00155A" }}>Ravina Tandon- #123456</span><br /><span style={{ fontSize: "12px", color: "#5D6186" }}>I have payment related issues</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row chat_lt2">
                        <div className="col-lg-12 col-12">
                            <div className="row">
                                <div className="d-flex">
                                    <div className="">
                                        <img src={img} alt="profile photo" width="50px" height="50px" className="img_chat_profile" />
                                    </div>
                                    <div className="d-flex align-items-center ml-3">
                                        <div><span style={{ fontSize: "15px", color: "#00155A" }}>Amit Rai- #123456</span><br /><span style={{ fontSize: "12px", color: "#5D6186" }}>I have service related issues</span></div>
                                    </div>
                                    <div style={{marginLeft:"40px"}} className="d-flex align-items-center">
                                        <div className="sup_chat" onClick={() => navigate('/support/chats')}><img src={chat} width="19px" height="17px" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 chat_rside">
                    <div className="chat_t1">
                        <div className="chat_t2">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="row">
                                        <div className="d-flex" style={{ color: "white" }}>
                                            <div className="chat_head">
                                                <img src={img} alt="profile photo" width="70px" height="70px" className="img_chat_profile" />
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div>Ravina Tandon- #123456<br /><span className="chat_h1">I have payment related issues</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat_t3">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Support2