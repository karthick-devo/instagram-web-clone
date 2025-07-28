// App.tsx or Sidebar.tsx
import React from 'react';
import Sidebar from './features/sidebar';
import Home from './features/home';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router';




const Layout = () => (
  <div className=' d-flex'>
    <Sidebar />
    <Outlet/>
  </div>
)

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<Layout />}>
          <Route path='/Home' element={<Home />} />
          <Route path='/SHome' element={<Home />} />
        </Route>              
      </Routes>
    </BrowserRouter>


  );
};

export default App;
