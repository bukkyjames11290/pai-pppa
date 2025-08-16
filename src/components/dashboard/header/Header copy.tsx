'use client';

import { UimBars } from '@/components/svgIcons';
import Image from 'next/image';
import React, { useState } from 'react';
import { PiUserLight } from 'react-icons/pi';

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-between p-[16px] py-[15px]">
      {/* <Image src="https://i.imgur.com/LmYJycQ.png" width={200} height={200} className="w-[30px] h-[30px]" alt="logo" /> */}
      <div className="text-xl text-black font-semibold">Accounts</div>
      <div className="relative">
        {user.holder.profileImgUrl ? (
          <Image src={user.holder.profileImgUrl} width={40} height={40} className="w-[50px] h-[50px] rounded-full" alt="logo" onClick={toggleNav} />
        ) : (
          <button className="bg-white shadow rounded-full w-9 h-9 flex items-center justify-center" onClick={toggleNav}>
            <PiUserLight className="text-xl text-sky-600" />
          </button>
        )}

        {open && (
          <div className="absolute w-[200px] mt-1 z-50 shadow bg-white border py-2 rounded-md right-0 flex flex-col justify-center gap-[5px]">
            <p className="text-[14px] px-[15px] py-[5px] whitespace-nowrap font-medium text-sky-600">
              {user.holder.fullName}&nbsp;{user.holder.lastName}
            </p>
            <p className="text-[14px] m-1 px-[15px] text-center rounded-md py-[5px] bg-sky-600 border whitespace-nowrap text-white" onClick={handleLogout}>
              Sign out
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
