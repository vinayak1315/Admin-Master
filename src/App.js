import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/admin/dashboard/Dashboard'
import Promotion from './components/admin/promotion/Promotion'
import Promotion1 from './components/admin/promotion/Promotion1'
import Promotion2 from './components/admin/promotion/Promotion2'
import Promotion3 from './components/admin/promotion/Promotion3'
import Promotion4 from './components/admin/promotion/Promotion4'
import Promotion5 from './components/admin/promotion/Promotion5'
import Consultation from './components/admin/consultation/Consultation'
import Mg_world from './components/admin/mgworld/Mg_world'
import Mg_world1 from './components/admin/mgworld/Mg_world1'
import SideBar from './components/admin/SideBar'
import Login from './components/layout/Login'
import ForgotPassword from './components/layout/ForgotPassword'
import Otp from './components/layout/Otp'
import NewPassword from './components/layout/NewPassword'
import ConsultationDetail from './components/admin/consultation/ConsultationDetail'
import ConsultationDetail1 from './components/admin/consultation/ConsultationDetail1'
import ConsultationDetail2 from './components/admin/consultation/ConsultationDetail2'
import ConsultationDetail3 from './components/admin/consultation/ConsultationDetail3'
import ConsultationDetail4 from './components/admin/consultation/ConsultationDetail4'
import ConsultationDetail5 from './components/admin/consultation/ConsultationDetail5'
import ConsultationDetail6 from './components/admin/consultation/ConsultationDetail6'
import ConsultationDetail7 from './components/admin/consultation/ConsultationDetail7'
import ConsultationDetail8 from './components/admin/consultation/ConsultationDetail8'
import ConsultationDetail9 from './components/admin/consultation/ConsultationDetail9'
import Support from './components/admin/support/Support'
import Support1 from './components/admin/support/Support1'
import Support2 from './components/admin/support/Support2'
import Pas from './components/admin/ProductAndService/Pas'
import Sar from './components/admin/ProductAndService/Sar'
import Sar1 from './components/admin/ProductAndService/Sar1'
import Cca from './components/admin/ProductAndService/Cca'
import Cca1 from './components/admin/ProductAndService/Cca1'
import AddProduct from './components/admin/ProductAndService/AddProduct'
import AddService from './components/admin/ProductAndService/AddService'
import Nuc from './components/admin/ProductAndService/Nuc'
import AddListing from './components/admin/ProductAndService/AddListing'
import Nuc1 from './components/admin/ProductAndService/Nuc1'
import Nuc2 from './components/admin/ProductAndService/Nuc2'
import NucFilter from './components/admin/ProductAndService/NucFilter'
import Garage from './components/admin/garages/Garage'
import Garage1 from './components/admin/garages/Garage1'
import Garage2 from './components/admin/garages/Garage2'
import Garage3 from './components/admin/garages/Garage3'
import Garage4 from './components/admin/garages/Garage4'
import Garage5 from './components/admin/garages/Garage5'
import Garage6 from './components/admin/garages/Garage6'
import AddPartner from './components/admin/garages/AddPartner'
import AddPartner2 from './components/admin/garages/AddPartner2'
import AddPartner3 from './components/admin/garages/AddPartner3'
import AddPartner4 from './components/admin/garages/AddPartner4'
import OnBoarding from './components/admin/garages/OnBoarding'
import ProtectRoute from './routes/ProtectRoute'
import Booking from './components/admin/bookings/Booking'
import BookingCca from './components/admin/bookings/BookingCca'
import BookingNuc from './components/admin/bookings/BookingNuc'
import BookingNuc1 from './components/admin/bookings/BookingNuc1'
import Booking1 from './components/admin/bookings/Booking1'
import Booking2 from './components/admin/bookings/Booking2'
import Booking3 from './components/admin/bookings/Booking3'
import Booking4 from './components/admin/bookings/Booking4'
import BookingCca1 from './components/admin/bookings/BookingCca1'
import BookingCca2 from './components/admin/bookings/BookingCca2'
import BookingCca3 from './components/admin/bookings/BookingCca3'
import BookingCca4 from './components/admin/bookings/BookingCca4'
import BookingCca5 from './components/admin/bookings/BookingCca5'
import BookingCca6 from './components/admin/bookings/BookingCca6'
import BookingCca7 from './components/admin/bookings/BookingCca7'
import Users from './components/admin/users/User'
import User1 from './components/admin/users/User1'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={

            <SideBar>
              <Dashboard />
            </SideBar>

          } />
          <Route exact path='/admin/booking' element={

            <SideBar>
              <Booking />
            </SideBar>

          } />
          <Route exact path='/admin/booking/care&accessory' element={

            <SideBar>
              <BookingCca />
            </SideBar>

          } />

          <Route exact path='/admin/booking/care&accessory/detail' element={

            <SideBar>
              <BookingCca1 />
            </SideBar>

          } />
          <Route exact path='/admin/booking/care&accessory/detail/edit' element={

            <SideBar>
              <BookingCca2 />
            </SideBar>
          } />
          <Route exact path='/admin/booking/care&accessory/cancel' element={

            <SideBar>
              <BookingCca3 />
            </SideBar>

          } />
          <Route exact path='/admin/booking/care&accessory/return' element={

            <SideBar>
              <BookingCca4 />
            </SideBar>

          } />
          <Route exact path='/admin/booking/care&accesory/cancelbooking' element={

            <SideBar>
              <BookingCca5 />
            </SideBar>

          } />
          <Route exact path='/admin/booking/care&accessory/return_requested' element={

            <SideBar>
              <BookingCca6 />
            </SideBar>

          } />
          <Route exact path='/admin/booking/care&accessory/return_request/edit' element={

            <SideBar>
              <BookingCca7 />
            </SideBar>

          } />
          <Route exact path='/admin/booking/new&used-car' element={

            <SideBar>
              <BookingNuc />
            </SideBar>

          } />
          <Route exact path='/admin/booking/new&used-car/details' element={

            <SideBar>
              <BookingNuc1 />
            </SideBar>

          } />
          <Route exact path='/admin/booking/service&repair/detail/:id' element={

            <SideBar>
              <Booking1 />
            </SideBar>

          } />
          <Route exact path='/admin/booking/service&repair/detail/edit' element={

            <SideBar>
              <Booking2 />
            </SideBar>

          } />
          <Route exact path='/admin/booking/service&repair/delivered/detail' element={

            <SideBar>
              <Booking3 />
            </SideBar>

          } />
          <Route exact path='/admin/booking/service&repair/approval_pending/detail' element={

            <SideBar>
              <Booking4 />
            </SideBar>

          } />
          <Route exact path='/product&service' element={

            <SideBar>
              <Pas />
            </SideBar>

          } />
          <Route exact path='/service&repair' element={

            <SideBar>
              <Sar />
            </SideBar>

          } />
          <Route exact path='/service&repair/edit/:id' element={

            <SideBar>
              <Sar1 />
            </SideBar>

          } />
          <Route exact path='/care&accessory' element={

            <SideBar>
              <Cca />
            </SideBar>

          } />
          <Route exact path='/care&accessory/edit' element={

            <SideBar>
              <Cca1 />
            </SideBar>

          } />
          <Route exact path='/add/product' element={

            <SideBar>
              <AddProduct />
            </SideBar>

          } />
          <Route exact path='/add/service' element={

            <SideBar>
              <AddService />
            </SideBar>

          } />
          <Route exact path='/add/listing' element={

            <SideBar>
              <AddListing />
            </SideBar>

          } />
          <Route exact path='/car&accessory' element={

            <SideBar>
              <Nuc />
            </SideBar>

          } />

          <Route exact path='/new/usedcar/detail' element={

            <SideBar>
              <Nuc1 />
            </SideBar>

          } />
          <Route exact path='/car&accessory/edit' element={

            <SideBar>
              <Nuc2 />
            </SideBar>

          } />
          <Route exact path='/admin/garages' element={

            <SideBar>
              <Garage />
            </SideBar>

          } />
          <Route exact path='/admin/garage/profile/:id' element={

            <SideBar>
              <Garage1 />
            </SideBar>

          } />
          <Route exact path='/admin/garage/bookings' element={
 
            <SideBar>
              <Garage2 />
            </SideBar>

          } />
          <Route exact path='/admin/garage/services' element={

            <SideBar>
              <Garage3 />
            </SideBar>

          } />
          <Route exact path='/admin/garage/tickets' element={

            <SideBar>
              <Garage4 />
            </SideBar>

          } />
          <Route exact path='/admin/garage/finance' element={

            <SideBar>
              <Garage5 />
            </SideBar>

          } />
          <Route exact path='/admin/garage/reviews' element={

            <SideBar>
              <Garage6 />
            </SideBar>

          } />
          <Route exact path='/admin/add/partner/step-1' element={

            <SideBar>
              <AddPartner />
            </SideBar>

          } />
          <Route exact path='/admin/add/partner/step-2/:id' element={

            <SideBar>
              <AddPartner2 />
            </SideBar>

          } />
          <Route exact path='/admin/add/partner/step-3/:id' element={

            <SideBar>
              <AddPartner3 />
            </SideBar>

          } />
          <Route exact path='/admin/add/partner/step-4/:id' element={

            <SideBar>
              <AddPartner4 />
            </SideBar>

          } />
          <Route exact path='/admin/garages/onboarding/completed' element={

            <SideBar>
              <OnBoarding />
            </SideBar>

          } />
          <Route exact path='/promotion' element={

            <SideBar>
              <Promotion />
            </SideBar>

          } />
          <Route exact path='/promotion/banner' element={

            <SideBar>
              <Promotion1 />
            </SideBar>

          } />
          <Route exact path='/promotion/ratings' element={

            <SideBar>
              <Promotion2 />
            </SideBar>

          } />
          <Route exact path='/add/review' element={

            <SideBar>
              <Promotion3 />
            </SideBar>

          } />
          <Route exact path='/promotion/service&repair' element={

            <SideBar>
              <Promotion4 />
            </SideBar>

          } />
          <Route exact path='/promotion/popular/garages' element={

            <SideBar>
              <Promotion5 />
            </SideBar>

          } />
          <Route exact path='/mg-world' element={

            <SideBar>
              <Mg_world />
            </SideBar>

          } />
          <Route exact path='/mg-world/add/deal' element={

            <SideBar>
              <Mg_world1 />
            </SideBar>

          } />
          <Route exact path='/consultation' element={

            <SideBar>
              <Consultation />
            </SideBar>

          } />
          <Route exact path='/consultation/detail' element={

            <SideBar>
              <ConsultationDetail />
            </SideBar>

          } />
          <Route exact path='/consultation/detail/collecting_requirement' element={

            <SideBar>
              <ConsultationDetail1 />
            </SideBar>

          } />
          <Route exact path='/consultation/detail/add_manually' element={

            <SideBar>
              <ConsultationDetail2 />
            </SideBar>

          } />
          <Route exact path='/consultation/detail/add_service' element={

            <SideBar>
              <ConsultationDetail3 />
            </SideBar>

          } />
          <Route exact path='/consultation/detail/request_estimates' element={

            <SideBar>
              <ConsultationDetail4 />
            </SideBar>

          } />
          <Route exact path='/consultation/detail/request' element={

            <SideBar>
              <ConsultationDetail5 />
            </SideBar>

          } />
          <Route exact path='/consultation/detail/share' element={

            <SideBar>
              <ConsultationDetail6 />
            </SideBar>

          } />
          <Route exact path='/consultation/update/detail' element={

            <SideBar>
              <ConsultationDetail7 />
            </SideBar>

          } />
          <Route exact path='/consultation/cancel' element={

            <SideBar>
              <ConsultationDetail8 />
            </SideBar>

          } />
          <Route exact path='/consultation/success' element={

            <SideBar>
              <ConsultationDetail9 />
            </SideBar>

          } />
          <Route exact path='/support' element={

            <SideBar>
              <Support />
            </SideBar>

          } />
          <Route exact path='/support/add/faqs' element={

            <SideBar>
              <Support1 />
            </SideBar>

          } />
          <Route exact path='/support/chats' element={

            <SideBar>
              <Support2 />
            </SideBar>

          } />
          <Route exact path='/admin/users' element={

            <SideBar>
              <Users />
            </SideBar>

          } />
          <Route exact path='/admin/users/detail' element={

            <SideBar>
              <User1 />
            </SideBar>

          } />
          <Route excat path='/login' element={<Login />} />
          <Route excat path='/forgot/password' element={<ForgotPassword />} />
          <Route excat path='/forgot/password/otp/:id' element={<Otp />} />
          <Route excat path='/new/password/:id' element={<NewPassword />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App