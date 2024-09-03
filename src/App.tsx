import { Routes, Route } from "react-router-dom";
// import OrderConfirmation from "./Components/OrderConfirmation/OrderConfirmation";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
// import Notification from "./Components/Notificationmodal/notification";

import Signup from "./pages/customersignup/CustomerSignup";
import Login from "./pages/login/login";
import DeliveryPage from "./pages/delivery/Delivery";
import ChangePassword from "./pages/changePassword/ChangePassword";
import ResetPage from "./pages/resetpage/Reset";
import AdminSignup from "./pages/adminSignup/AdminSignup";
import OtpPage from "./pages/otp/otpPage";
import MenuPage from "./pages/menuPage/MenuPage";
import MenuDetailsPage from "./pages/MenuDetailsPage/MenuDetailsPage";
import { RestaurantProtectedRoute } from "./components/protectedRoutes/protectedRoute";
import { CustomerProtectedRoute } from "./components/protectedRoutes/customerprotectedroute";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation";
import FindARestaurant from "./pages/findRestaurant/FindARestaurant";
// import { ErrorPage } from './Components/ErrorPage/Error';

import AddMenu from "./components/AddMenu/AddMenu";
// import Checkout from "./Components/CartCheckout/Checkout";

// import PaymentOption from "./Components/PaymentOpt/PaymentOption";
// import PaymentInfo from "./Components/PaymentInfo/PaymentInfo";

import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/customerlogin" element={<Login />} />
      <Route path="/customersignup" element={<Signup />} />
      <Route path="/customerdelivery" element={<DeliveryPage />} />
      <Route
        path="/customerchangepassword/:token"
        element={<ChangePassword />}
      />
      <Route path="/customerotp" element={<OtpPage />} />
      <Route path="/customerresetpage" element={<ResetPage />} />
      <Route path="/adminsignup" element={<AdminSignup />} />
      <Route path="/adminlogin" element={<Login />} />
      <Route path="/adminresetpage" element={<ResetPage />} />
      <Route path="/adminchangepassword/:token" element={<ChangePassword />} />
      <Route path="/adminotp" element={<OtpPage />} />
      <Route path="/menupage" element={<MenuPage />} />
      <Route path="/menudetailspage/:id" element={<MenuDetailsPage />} />
      {/* <Route path="/customerdashboard" element={<Dashboard />} /> */}
      {/* <Route path="/error" element={<ErrorPage />} /> */}
      {/* <Route path="/addmenu" element={<AddMenu />} /> */}

      <Route
        path="/customerdashboard/*" element={ <CustomerProtectedRoute>
           <Routes>
            <Route index element={<Dashboard />}/>
          </Routes>
        {/* <Route path="payout" element={  <Dashboard />}/> */}
        </CustomerProtectedRoute>}
      />
      <Route
        path="/addmenu/*"
        element={
        <RestaurantProtectedRoute>
          <Routes>
            <Route index element={<AddMenu />}/>
          </Routes>
        </RestaurantProtectedRoute>}
      />
      <Route path="/customerdashboard" element={<Dashboard />} />
      <Route path="/orderconfirmation" element={<OrderConfirmation />} />
      {/* <Route path="/error" element={<ErrorPage />} /> */}
      {/* <Route path="/addmenu" element={<AddMenu />} /> */}
      <Route path="/findrestaurant" element={<FindARestaurant />} />
    </Routes>
  )
}

export default App
