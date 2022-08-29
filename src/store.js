import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer, forgotPasswordReducer, OtpReducer, newPasswordReducer } from './reducers/userReducers'
import { allServiceReducer } from './reducers/DasboardReducer'
import { allBookingReducer, onGoingBooking, ogDetailBooking } from './reducers/BookingReducer'
import { newServiceReducer, ServiceReducer, servicePackageReducer, servicePackageByIdReducer, serviceInfoReducer, packageInfoReducer } from './reducers/ServiceReducers'
import { allOfferListing, newOfferReducer } from './reducers/PromotionReducer'
import { allGarageReducer, getSingleService, getServicePackageReducers, getSingleGarage,deleteServiceReducers, allOutletsReducer, outletInfoReducers, newOutletReducer, stepOneReducers, stepTwoReducers,deleteManagerReducers,addManagerReducers, stepFourReducers } from './reducers/GarageReducers'
import { faqsReducers, newFaqsReducers } from './reducers/SupportReducers'

const reducer = combineReducers({
    // User reducer
    auth: authReducer,
    forgotPassword : forgotPasswordReducer,
    otpVerify : OtpReducer,
    newPassword : newPasswordReducer,
    // Dashboard
    allService : allServiceReducer,
    allBooking : allBookingReducer,
    OnGoingBooking : onGoingBooking,
    ogDetail: ogDetailBooking,
    // Product & Service
    service : newServiceReducer,
    getService : ServiceReducer,
    getServicePackage : servicePackageReducer,
    getServicePackageById : servicePackageByIdReducer,
    serviceInfo : serviceInfoReducer,
    singlePackage : packageInfoReducer,
    // Promotion
    offer : allOfferListing,
    // Garages
    allGarage : allGarageReducer,
    garage : getSingleGarage,
    service : getSingleService,
    getPackages : getServicePackageReducers,
    allOutlet : allOutletsReducer,
    outletInfo : outletInfoReducers,
    outlet : newOutletReducer,
    step1Add : stepOneReducers,
    step2Add : stepTwoReducers,
    newOffer : newOfferReducer,
    step4Add : stepFourReducers,
    getManager : addManagerReducers,
    deleteManager : deleteManagerReducers,
    deleteService : deleteServiceReducers,
    // Faqs 
    faqs : faqsReducers,
    newFaqs : newFaqsReducers,
});
let initialState = {}
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;