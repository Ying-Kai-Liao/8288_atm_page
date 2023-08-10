import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteComponent from './components/RouteComponent';
import AppBar from './components/appbar/AppBar';

const App = () => {
  return (
    <div className='w-screen min-h-screen bg-slate-200 pb-10'>
      <BrowserRouter> {/* add basename="/atm" attribute here*/}
        <AppBar />
        <div className="-mt-20"></div>
          <Routes>
            <Route path="/" element={<RouteComponent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
