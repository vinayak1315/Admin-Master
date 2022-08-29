import React from 'react'
import Header from '../Header'
import CommonHeader from '../../Header/CommonHeader'
import MetaData from '../../layout/MetaData'
import { Link } from 'react-router-dom'
const user = () => {
    const users = [
        {},{},{},{},{},{},{},{},
    ]
    return (
        <>
            <Header title="Users" navbar_comp={<CommonHeader />} />
            <div className="page_reducer">
                <div className="user">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-user-01">All</button>
                        <button className="btn btn-user-02">New</button>
                        <button className="btn btn-user-02">Repeat</button>
                        <button className="btn btn-user-02">Loyal</button>
                    </div>
                    <div className="mt-3">
                        <table style={{ width: '100%', marginTop: "10px" }}>
                            <tr className="title_table">
                                <th>User ID</th>
                                <th>Name & Number</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>Bookings</th>
                                <th></th>
                            </tr>
                            {users.map(user =>
                                <tr className="table_row">
                                    <td>#123456</td>
                                    <td>Ramesh Kumar</td>
                                    <td>8765427277</td>
                                    <td>Ramesh@gmail.com</td>
                                    <td><span style={{ color: "#438969", fontSize: "15px" }}>900 +</span><span style={{ color: "#F45C3B", fontSize: "15px" }}> 12 </span><span style={{ color: "#2650D8", fontSize: "15px" }}>= 912</span></td>
                                    <td><div><Link to={`/admin/users/detail`} style={{ textDecoration: 'none' }} className="btn btn-cons_detail">View Details</Link></div></td>
                                </tr>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default user