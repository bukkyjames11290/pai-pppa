'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Account } from '@/utils/types';
import Link from 'next/link';
import TransactionHistory from './TransactionHistory';
import Header from './header/Header';
import { euroCurrency, usdCurrency } from '../formatCurrency';
import Loader from '../Loader';
import { BillIcon, CardIcon } from '../svgIcons';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<Account | null>(null);
  const [hideBalance, setSideBalance] = useState(false);

  const toggleHideBalance = () => {
    setSideBalance(true);
  };

  const toggleShowBalance = () => {
    setSideBalance(false);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    router.push('/');
  };

  if (!user) {
    return <Loader />;
  }
  return (
    <div className="pb-20">
      <Header handleLogout={handleLogout} user={user} />
      <div className="flex flex-col">
        <div className="p-[16px] max-w-[300px] mx-auto text-center py-[15px] flex-col">
          <span className="font-medium text-2xl">It's nice to see you, {user.holder.fullName}</span>
        </div>
        <div className="px-[16px]">
          <div className="border flex flex-col gap-9 bg-white text-black font-semibold p-4 rounded-t-xl">
            <div className="flex items-center justify-between">
              <span className="text-[14px] flex items-center gap-1">PayPal balance</span>
              <div className="flex items-center gap-2">
                <span className="text-[14px] flex gap-1">**2913</span>
                <div className="bg-sky-800 flex flex-col gap-2 rounded-md p-1 pt-0">
                  <span className="text-sky-300 text-xs">PayPal</span>
                  <span className="bg-red-500 self-end p-1 w-3"></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-2xl flex items-center gap-1">
                  {user.bank_details.isCurrency === 'euro' ? euroCurrency(user.bank_details.balance_usd ?? 0) : usdCurrency(user.bank_details.balance_usd ?? 0)}
                </span>
                <span className="font-normal text-gray-500 text-xs">Estimated total of all currencies</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg-sky-600 p-1 rounded-md text-white font-normal text-xs">+5%</span>
                <span className="font-normal text-xs">Cash back on health & beauty</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 rounded-b-xl bg-sky-600 p-6 text-white">
            <span className="text-base font-semibold">Earn {user.bank_details.isCurrency ? "€50" : "$50"} (5,000 pts)</span>
            <span className="text-xs">Pay 5 times with PayPal Debit</span>
          </div>
        </div>
        <div className="p-[16px] hidden border py-8">
          <div className="flex items-center justify-center gap-3">
            <Link href="/dashboard/cards" className="border flex items-center gap-1 p-4 py-2 text-[13px] max-w-max bg-white text-sky-600 rounded-full">
              <CardIcon className="w-5 h-5" /> <span>Cards</span>
            </Link>
            <Link href="/dashboard/bill-payment" className="border flex items-center gap-1 p-4 py-2 text-[13px] max-w-max bg-white text-sky-600 rounded-full">
              <BillIcon className="w-5 h-5" />
              <span>Pay Bills</span>
            </Link>
          </div>
        </div>
        <TransactionHistory user={user} hideBalance={hideBalance} />
      </div>
    </div>
  );
}
