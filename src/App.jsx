import { useState, useEffect } from "react";

import {
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Header from "./FRONTEND/ADMIN/Header";

import Home from "./FRONTEND/ADMIN/Home";
import Loginpage from "./FRONTEND/ADMIN/Loginpage";
import PrivateRoute from "../BACKEND/PrivateRoute";
import CustomerList from "./FRONTEND/ADMIN/CustomerList";
import ComplainList from "./FRONTEND/ADMIN/ComplainList";
import FeedbackList from "./FRONTEND/ADMIN/FeedbackList";
import ServiceroviderList from "./FRONTEND/ADMIN/ServiceproviderList";
import Admindashboard from "./FRONTEND/ADMIN/Admindashboard";
import CategoryList from "./FRONTEND/ADMIN/CategoryList";
import SubcategoryList from "./FRONTEND/ADMIN/SubcategoryList";
import ServiceProviderList from "./FRONTEND/ADMIN/ServiceproviderList";
import Header1 from "./FRONTEND/SERVICEPROVIDER/Header1";
import Home1 from "./FRONTEND/SERVICEPROVIDER/Home1";
import Footer from "./FRONTEND/SERVICEPROVIDER/Footer";
import Layout from "./FRONTEND/SERVICEPROVIDER/Layout";
import ServiceProvider from "./FRONTEND/SERVICEPROVIDER/Serviceprovider";
import Customer from "./FRONTEND/SERVICEPROVIDER/Customer";
import Catagory from "./FRONTEND/SERVICEPROVIDER/Catagory";
import LoginPage1 from "./FRONTEND/SERVICEPROVIDER/LoginPage1";
import RegistrationPage from "./FRONTEND/SERVICEPROVIDER/RegistrationPage";
import ForgotPassword from "./FRONTEND/SERVICEPROVIDER/ForgotPassword";
import Subcatagory from "./FRONTEND/SERVICEPROVIDER/Subcatagory";
import Complain from "./FRONTEND/SERVICEPROVIDER/Complain";
import Feedback from "./FRONTEND/SERVICEPROVIDER/Feedback";
import ProductOrder from "./FRONTEND/SERVICEPROVIDER/ProductOrder";
import ServiceRequest from "./FRONTEND/SERVICEPROVIDER/ServiceRequest";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header /> */}

      <Routes>
        {/* <Route path="/AdminDashboard" element={<Admindashboard />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="Adminpenal" element={<Loginpage />} />
        {/* private route for authentication  */}
        <Route
          path="/AdminDashboard"
          element={<PrivateRoute element={<Admindashboard />} />}
        />

        <Route path="/customerlist" element={<CustomerList />} />
        <Route path="/serviceproviderlist" element={<ServiceProviderList />} />

        <Route path="/categorylist" element={<CategoryList />} />
        <Route path="/subcategorylist" element={<SubcategoryList />} />
        <Route path="/complainlist" element={<ComplainList />} />
        <Route path="/feedbacklist" element={<FeedbackList />} />
        <Route path="/" element={<Layout />} />
        <Route path="/" element={<Home1 />} />
        <Route path="serviceprovider" element={<ServiceProvider />} />
        <Route path="customer" element={<Customer />} />
        <Route path="catagory" element={<Catagory />} />
        <Route path="productorder" element={<ProductOrder />} />
        <Route path="servicerequest" element={<ServiceRequest />} />
        <Route path="loginpage" element={<LoginPage1 />} />
        <Route path="registrationpage" element={<RegistrationPage />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="subcatagory" element={<Subcatagory />} />
        <Route path="complain" element={<Complain />} />
        <Route path="feedback" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;
