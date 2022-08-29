import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../images/logo.png'
import logo_2 from '../../images/logo_2.png'
import up from '../../images/up.png'
import down from '../../images/down.png'    
import autobox from '../../images/autobox.png'
import booking from '../../images/booking.png'
import finance from '../../images/finance.png'
import garages from '../../images/garages.png'
import team from '../../images/team.png'
import users from '../../images/users.png'
import consultation from '../../images/consultation.png'
import data from '../../images/data.png'
import product_service from '../../images/product_service.png'
import promotion from '../../images/promotion.png'
import support from '../../images/support.png'
import mg_world from '../../images/mg_world.png'
import invoice from '../../images/invoice.png'
const SideBar = ({children }) => {
    const routes = [
        {
            path: "/",
            name: "Dashboard",
            icon: autobox 
        },
        {
            path: "/admin/booking",
            name: "Bookings",
            icon: booking 
        },
        {
            path: "/product&service",
            name: "Product & Services",
            icon: product_service 
        },
        {
            path: "/admin/garages",
            name: "Garages",
            icon: garages 
        },
        {
            path: "/admin/users",
            name: "Users",
            icon: users 
        },
        {
            path: "/support",
            name: "Support",
            icon: support
        },
        {
            path: "/consultation",
            name: "Consultation",
            icon: consultation 
        },
        {
            path: "/",
            name: "Invoices",
            icon: invoice 
        },
        {
            path: "/mg-world",
            name: "MG World",
            icon: mg_world
        },
        {
            path: "/promotion",
            name: "Promotions",
            icon: promotion 
        },
        {
            path: "/",
            name: "Team",
            icon: team 
        },
        {
            path: "/",
            name: "Data Insight",
            icon: data 
        },
        {
            path: "/",
            name: "Finance",
            icon: finance 
        },
        {
            path: "/",
            name: "Autobox",
            icon: autobox 
        }
    ]
    return (
        <>
            <section className="main-container">
                <div className="sidebar">
                    <div className="top_section">
                        <img src={logo} alt="company logo" width="47.66px" height="54.66px" />
                    </div>
                    <div className='sidebar_layout'>
                        <div className="sidebar_box">
                            <div className="sidebar_logo">
                                <img src={logo_2} alt="company logo" width="39px" height="39px" />
                            </div>
                            <div className="sidebar_content">
                                <div>Mumbai Western</div>
                                <p>Mira Road</p>
                            </div>
                            <div className="sidebar_icon">
                                <img src={up} alt='up' width="11px"  />
                                <img src={down} alt='down' width="11px"  />
                            </div>
                        </div>
                    </div>
                    <div className="bottom_section">
                        <div className="main_icons">
                            {routes.map(route => (
                                <div className="sidebar_menu">
                                    <div className="menu_icons">
                                    <img src={route.icon} width= "17px" height= "17px" />
                                    </div>
                                    <div className="menu_content">
                                        <NavLink className="menu_font" style={{textDecoration: "none"}} to={route.path}>{route.name}</NavLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <main>{children}</main>
            </section>
        </>
    )
}

export default SideBar