import React from 'react';
import logo from './logo.svg';
import './App.css';

function OrderInfo() {
  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      <div className='flex flex-col text-center rounded-[20px] bg-slate-100 gap-5 p-10 w-[500px]'>
        <div>
          <img src={logo} alt='logo'></img>
        </div>
        <div>
          ATM 付款資訊
        </div>
        <div>
          您的訂單編號為12345678<br />
          請轉帳 xxxx 元<br />
          至 xx銀行 1234567890<br />
          交易時間剩餘<br />
          08:10
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;