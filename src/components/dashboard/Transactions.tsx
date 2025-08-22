'use client';

import { Account, Transaction } from '@/utils/types';
import React, { useEffect, useState } from 'react';
import { HiArrowDown } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { euroCurrency, usdCurrency } from '../formatCurrency';
import Link from 'next/link';

export default function Transactions() {
  const [user, setUser] = useState<Account | null>(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      try {
        const user = JSON.parse(loggedInUser) as Account;
        setUser(user);
      } catch (error) {
        console.error('Error parsing loggedInUser from localStorage', error);
      }
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const hasTransactions = user.transaction_history && user.transaction_history.length > 0;

  return (
    <div className="border w-full">
      <div className="bg-white sticky top-0 z-10 p-3 py-5 flex items-center justify-between gap-1">
        <Link href="/dashboard" className="flex items-center gap-2">
          <IoIosArrowBack />
          <span className="text-[#252525] font-semibold">Your Activities</span>
        </Link>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-lg p-4 pb-0">
          {hasTransactions ? (
            user.transaction_history.map(group => (
              <div key={group.date} className="flex flex-col gap-2 border-b">
                <h4 className="text-sm font-semibold text-gray-500 mt-3">{group.date}</h4>
                <div className="mb-2">
                  {group.transactions.map((transaction: Transaction) => (
                    <div key={transaction.transaction_id} className="flex justify-between py-2">
                      <div className="flex gap-2 text-gray-800">
                        <button className="border-none flex items-center justify-center outline-none rounded-full w-[35px] h-[35px] bg-sky-600/10">
                          <HiArrowDown className={`${transaction.amount_usd < 0 ? '-rotate-[130deg] text-red-500' : 'text-green-700 rotate-[45deg]'}`} />
                        </button>
                        <div className="flex flex-col gap-1 justify-between">
                          <div className="flex flex-col w-full">
                            <span className="text-base">{transaction.name}</span>
                            <span className="text-xs">{transaction.description}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 text-right">
                        <span className={`text-sm font-[600] ${transaction.amount_usd < 0 ? 'text-black' : 'text-green-700'}`}>
                          {transaction.amount_usd < 0 ? '' : '+'}
                          {user.bank_details.isCurrency === 'euro' ? euroCurrency(transaction.amount_usd) : usdCurrency(transaction.amount_usd)}
                        </span>
                        <span className={`text-xs hidden font-medium ${transaction.status === 'Pending' ? 'text-yellow-500 font-bold' : 'text-green-600'}`}>{transaction.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 italic py-4">No transactions yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
