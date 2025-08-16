'use client';

import { UimBars } from '@/components/svgIcons';
import Image from 'next/image';
import Link from 'next/link';
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
      <Link href="/dashboard/profile" className="relative">
        {user.holder.profileImgUrl ? (
          <Image src={user.holder.profileImgUrl} width={40} height={40} className="w-[50px] h-[50px] rounded-full" alt="logo" onClick={toggleNav} />
        ) : (
          <button className="bg-white shadow rounded-full w-9 h-9 flex items-center justify-center" onClick={toggleNav}>
            <PiUserLight className="text-xl text-sky-600" />
          </button>
        )}
      </Link>
    </div>
  );
}
