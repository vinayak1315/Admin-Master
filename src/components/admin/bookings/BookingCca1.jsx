import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import HeaderNoSearch from '../../Header/HeaderNoSearch'
import { BookingCca1Title } from './BookingCcaComp'
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert'
import Loader from '../../layout/Loader'
import { getOgDetailBooking } from '../../../actions/BookingActions'
import { FaStar } from 'react-icons/fa'
const BookingCca1 = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const alert = useAlert();
    const { loading, error, bookingsData } = useSelector(state => state.ogDetail);
    useEffect(() => {
        if (error) {
            alert.error(error)
        } else {
            const formData = new FormData();
            formData.set("action", "booking-details");
            formData.set("leadId", id)

            dispatch(getOgDetailBooking(formData));

        }
    }, [alert, dispatch])
    return (
        <>
            <HeaderNoSearch title={<BookingCca1Title />} />
            <div className="page_reducer">
                <div className="booking1">
                    {bookingsData.map(data =>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <div><b style={{ color: "#00155A", fontSize: "18px" }}>Booking Details</b></div>
                                    <div><b><span style={{ color: "#00155A", fontSize: "18px" }}>Status: </span><span style={{ color: "#2650D8", fontSize: "18px" }}>{data.status}</span></b></div>
                                </div>
                                <div className="booking_detail mt-3">
                                    <table style={{ width: "100%" }}>
                                        <tr className="booking1_table">
                                            <th>Booking ID</th>
                                            <th>Car Details</th>
                                            <th>Customer Details</th>
                                            <th>Appointment Details</th>
                                            <th>Garage Details</th>
                                            <th>Service Advisor</th>
                                        </tr>
                                        <tr className="booking1_table">
                                            <td>#{data.leadId}<br /><span className="booking_p">{data.booking_date}-{data.booking_time}</span></td>
                                            <td>{data.manufacturer_name}<br /><span className="booking_p">{data.vehicleId}</span></td>
                                            <td>Vicky Kaushal<br /><span className="booking_p">{data.phone_no}</span></td>
                                            <td>{data.appointment_date}-{data.appointment_time}<br /><span className="booking_p">{data.addressId}, {data.city_owner}</span></td>
                                            <td>Mahindra First Choice<br /><span className="booking_p">#{data.outletId} | {data.address}</span></td>
                                            <td>Prakash Raj<br /><span className="booking_p">9876543212</span></td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="service_detail mt-3">
                                    <div className="mb-3">
                                        <div><b style={{ color: "#00155A", fontSize: "18px" }}>Product Details</b></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 service_box">
                                            <div className="d-flex justify-content-between" style={{ color: "#5D6186", fontSize: "12px" }}>
                                                <div>Product</div>
                                                <div>₹6,459</div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-1" style={{ color: "#5D6186", fontSize: "12px" }}>
                                                <div>Product</div>
                                                <div>₹6,459</div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-1" style={{ color: "#5D6186", fontSize: "12px" }}>
                                                <div>Product</div>
                                                <div>₹6,459</div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-1" style={{ color: "#5D6186", fontSize: "12px" }}>
                                                <div>Product</div>
                                                <div>₹6,459</div>
                                            </div>
                                            <div className="book01">
                                                <div className="d-flex justify-content-between mt-2" style={{ color: "#2650D8", fontSize: "12px" }}>
                                                    <div>Total</div>
                                                    <div>₹6,000</div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-1" style={{ color: "#2650D8", fontSize: "12px" }}>
                                                    <div>GST @18%</div>
                                                    <div>₹6,459</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bill_details">
                                    <div className="mt-3"><b style={{ color: "#00155A", fontSize: "18px" }}>Booking Details</b></div>
                                    <div className="mt-3">
                                        <table style={{ width: "100%" }}>
                                            <tr className="booking1_table">
                                                <th>MG Coins</th>
                                                <th>Coupon/Offer</th>
                                                <th>Total Amount</th>
                                                <th>Amount Paid</th>
                                                <th>Payment Info</th>
                                                <th>Amount Pending</th>
                                            </tr>
                                            <tr className="booking1_table">
                                                <td><span style={{ color: "#ED7D2B", fontSize: "15px" }}>1000 Coins</span><br /><span className="booking_p">Value ₹50</span></td>
                                                <td><span style={{ color: "#438969", fontSize: "15px" }}>ILOVEMG</span><br /><span className="booking_p">Value ₹100</span></td>
                                                <td><span style={{ color: "#2650D8", fontSize: "15px" }}>₹6,459</span><br /><span className="booking_p">₹6,000 + GST ₹459</span></td>
                                                <td>Paid ₹6,459<br /><span className="booking_p">A-1234, CGC Residency</span></td>
                                                <td>#23432678987<br /><span className="booking_p">via UPI @8876453234</span></td>
                                                <td><span style={{ color: "#F45C3B", fontSize: "15px" }}>₹6,459</span><br /><span className="booking_p">21/01/2021-11.00 AM</span></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </>
    )
}

export default BookingCca1