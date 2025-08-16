'use client';
import { Account, Transaction } from '@/utils/types';
import React, { useState } from 'react';
import { formatCurrency } from '../formatCurrency';
import { HiArrowDown } from 'react-icons/hi';
import Link from 'next/link';
import { HiMiniArrowRight } from 'react-icons/hi2';

interface TransactionHistoryProps {
  user: Account;
  hideBalance: boolean;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ user }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const hasTransactions = user.transaction_history && user.transaction_history.length > 0;

  // Show either all or first 2 date groups (not individual transactions)
  const groupedToShow = showMore ? user.transaction_history : user.transaction_history.slice(0, 6);

  return (
    <div className="px-[16px]">
      <div className="w-full">
        <div className="text-lg rounded w-full font-[500] flex items-center justify-between py-3 pt-5">
          <span>Your Activity</span>
          {hasTransactions && (
            <Link href="/dashboard/activity" className="text-2xl">
              <HiMiniArrowRight />
            </Link>
          )}
        </div>

        <div>
          {hasTransactions ? (
            groupedToShow.map(group => (
              <div key={group.date} className='border-b border-gray-300'>
                <h4 className="text-sm text-gray-500 font-semibold py-2">{group.date}</h4>

                {group.transactions.map((transaction: Transaction) => (
                  <div key={transaction.transaction_id} className="flex justify-between py-2">
                    <div className="flex gap-2 text-gray-800">
                      <button className="border-none flex items-center justify-center outline-none rounded-full w-[35px] h-[35px] bg-sky-600/10">
                        <HiArrowDown className={`${transaction.amount_usd < 0 ? '-rotate-[130deg] text-red-500' : 'text-green-700 rotate-[45deg]'}`} />
                      </button>
                      <div className="flex flex-col gap-1 justify-between">
                        <div className="flex flex-col w-[200px] sm:max-w-full">
                          <span className="text-base">{transaction.name}</span>
                          <span className="text-xs">{transaction.description}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 text-right">
                      <span className={`text-sm font-[600] ${transaction.amount_usd < 0 ? 'text-black' : 'text-green-700'}`}>
                        {transaction.amount_usd < 0 ? '' : '+'}
                        {formatCurrency(transaction.amount_usd)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 italic py-4">No transactions yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
