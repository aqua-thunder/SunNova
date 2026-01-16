import React from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import Admin_layout from './components/layout/Admin_layout'
import Admin_Update from './components/Admin_update'
import Admin_user from './components/Admin_user'
import ServiceDetails from './components/Service_details'
const App = () => {
  return (

    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

const AppContent = () => {
  const isAdminRoute = location.pathname.startsWith('/admin');
  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/service" element={<ServiceDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path='/admin' element={<Admin_layout />}>
          <Route path='users' element={<Admin_user />} />
          {/* <Route path='contacts' element={<Admin_contacts />} /> */}
          <Route path="users/:id/edit" element={<Admin_Update />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
