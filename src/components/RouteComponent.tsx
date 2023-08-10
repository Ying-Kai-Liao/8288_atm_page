// RouteComponent.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import atmLottie from '../animations/atm-lottie.json'

const RouteComponent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const merchantTradeNo = queryParams.get('MerchantTradeNo');
  const bankCode = queryParams.get('BankCode');
  const vAccount = queryParams.get('vAccount');
  const expireDate = queryParams.get('ExpireDate');
  const totalAmount = queryParams.get('TotalAmount');
  const itemName = queryParams.get('ItemName');

  const handlePrint = () => {
    window.print();
  };

  return (
      <div className='flex items-center justify-center flex-col'>
      <div className='flex flex-col text-center rounded-[20px] bg-white max-w-[500px] mx-5 md:w-[500px] shadow-lg'>
        <div className='p-4 rounded-[20px] m-4 bg-slate-100'>
            <div className='text-[30px] font-semibold'>
                ATM 付款資訊
            </div>
            <Player
                src={atmLottie}
                className="player"
                loop
                autoplay
                style={{ height: '250px', width: '250px' }}
            />
        </div>
        <div className='px-10 pb-10 divide-y divide-dashed'>
            <div className='py-5 flex flex-col'>
                <div className='flex justify-between'>
                    <div className='pb-2 text-stone-400'>訂單編號</div>
                    <div>{merchantTradeNo}</div>
                </div>
                <div className='flex justify-between'>
                    <div className='pb-2 text-stone-400'>付款方式</div>
                    <div>ATM轉帳</div>
                </div>
                <div className='flex justify-between'>
                    <div className='pb-2 text-stone-400'>商品資訊</div>
                    <div>{itemName}</div>
                </div>
            </div>
            <div className='py-5'>
                <div className='flex justify-between text-fuchsia-800 py-2 text-xl'>
                    <div className=' text-left'>
                        ATM<br />
                        繳費帳號
                    </div>
                    <div className='text-right'>
                        {bankCode === '822' ? '中國信託 822': bankCode}
                        <br />
                        {vAccount}
                    </div>
                </div>
                <div className='flex justify-between text-fuchsia-800 py-2 text-xl'>
                    <div className=' text-left'>
                        金額
                    </div>
                    <div className='text-right'>
                        ＄{totalAmount}
                    </div>
                </div>
            </div>
            <div className="text-sm text-left">
                請勿關閉本頁，無法再次瀏覽，如需保存請於右上角
                <span className='text-slate-400 cursor-pointer underline' onClick={handlePrint}>
                    列印
                </span>
                本頁並於
                <span className='text-xl text-red-500'>
                    {expireDate} 
                </span>前轉帳。
            </div>
        </div>
      </div>
    </div>
  );
};

export default RouteComponent;
