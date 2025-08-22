'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { FiX } from 'react-icons/fi';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa6';
import { IoAlertCircleSharp } from 'react-icons/io5';

export default function SendToFriendModal({ isOpen, setIsOpen, selectedUserNames, user }: any) {
  const [amount, setAmount] = React.useState('0.00');
  const [message, setMessage] = React.useState('');
  const [isSending, setIsSending] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [insufficientBalance, setInsufficientBalance] = React.useState(false);

  const handleNumberClick = (num: string) => {
    if (amount === '0.00') {
      setAmount(num + '.00');
    } else {
      const parts = amount.split('.');
      setAmount(parts[0] + num + '.' + parts[1]);
    }
    // Clear insufficient balance error when user modifies amount
    setInsufficientBalance(false);
  };

  const handleBackspace = () => {
    if (amount === '0.00') return;

    const [dollars, cents] = amount.split('.');

    if (dollars.length > 1) {
      setAmount(dollars.slice(0, -1) + '.00');
    } else {
      setAmount('0.00');
    }
    // Clear insufficient balance error when user modifies amount
    setInsufficientBalance(false);
  };

  const handleSend = async () => {
    // Convert amount to number
    const amountToSend = parseFloat(amount);

    // Check if amount is zero
    if (amountToSend <= 0) {
      alert(`Please enter an amount greater than ${user?.bank_details.isCurrency ? '€' : '$'}0.00`);
      return;
    }

    // Check if user has sufficient balance
    if (user?.bank_details?.balance_usd < amountToSend) {
      setInsufficientBalance(true);
      return;
    }

    setIsSending(true);
    setInsufficientBalance(false);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Show success
      setShowSuccess(true);

      // Reset form after showing success
      setAmount('0.00');
      setMessage('');
    } catch (error) {
      console.error('Error sending money:', error);
      alert('Failed to send money. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>
        </TransitionChild>

        <div className="fixed inset-0">
          <div className="flex min-h-full items-center justify-center text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full flex flex-col justify-between h-screen transform overflow-hidden bg-white py-3 text-left align-middle shadow-xl transition-all">
                {showSuccess ? (
                  <div className="flex flex-col items-center justify-center p-6">
                    {user?.transaction_mgs_code.lastStepText ? (
                      <div className="flex flex-col items-center justify-center">
                        <div className="bg-red-100 p-6 rounded-full mb-4 self-start">
                          <IoAlertCircleSharp size={25} className="text-red-500" />
                        </div>
                        <p className="text-lg font-medium leading-6 text-gray-9000">
                          {user?.transaction_mgs_code.headerText}
                          <br />
                          <br />
                          {user?.transaction_mgs_code.lastStepText}
                        </p>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-lg font-medium text-gray-900">Payment Successful!</h3>
                        <p className="text-gray-500 mt-2">
                          {user?.bank_details.isCurrency ? '€' : '$'}{amount} sent to {selectedUserNames.join(', ')}
                        </p>
                      </>
                    )}
                    <div className="mt-4 w-full flex">
                      <Link href="/dashboard" className="flex justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white">
                        Go Home
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="">
                      {/* Header */}
                      <div className="flex justify-between items-center px-6">
                        <div className="w-full flex items-center justify-center gap-1">
                          <span className="text-gray-800">Send money to:</span>
                          <span className="font-semibold text-lg">{selectedUserNames.join(', ')}</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400">
                          <FiX size={20} />
                        </button>
                      </div>

                      {/* Amount Display */}
                      <div className="mt-8 flex flex-col items-center px-6">
                        <div className={`font-light ${amount.length > 12 ? 'text-3xl' : amount.length > 10 ? 'text-4xl' : amount.length > 8 ? 'text-5xl' : 'text-6xl'}`}>
                          <sup>{user?.bank_details.isCurrency ? '€' : '$'}</sup>
                          {amount}
                        </div>
                        <button className="bg-gray-100 text-sm p-1 px-4 rounded-full mt-4">{user?.bank_details.isCurrency ? "EURO" : "USD"}</button>
                        {insufficientBalance && <div className="mt-2 text-red-500 text-sm">Insufficient balance. Available: ${user?.bank_details?.balance_usd?.toFixed(2) || '0.00'}</div>}
                      </div>
                    </div>

                    <div className="">
                      {/* Message Input */}
                      <div className="mt-8 px-4 flex gap-3">
                        <input type="text" placeholder="Add a message" value={message} onChange={e => setMessage(e.target.value)} className="w-full p-3 py-2 rounded-full bg-gray-100" />
                        {/* Send Button */}
                        <button
                          onClick={handleSend}
                          disabled={isSending}
                          className={`w-[150px] py-3 rounded-full transition-colors ${isSending ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                        >
                          {isSending ? 'Sending...' : 'Send'}
                        </button>
                      </div>

                      {/* Number Pad */}
                      <div className="mt-2 grid grid-cols-3 gap-1 p-2 px-3 bg-gray-200 pb-20">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                          <button key={num} onClick={() => handleNumberClick(num.toString())} className="border py-2 text-xl rounded-lg bg-white">
                            {num}
                          </button>
                        ))}
                        <button className="py-4 text-2xl rounded-lg hover:bg-gray-100 opacity-0" disabled>
                          {/* Empty space */}
                        </button>
                        <button onClick={() => handleNumberClick('0')} className="border py-2 text-xl rounded-lg bg-white">
                          0
                        </button>
                        <button onClick={handleBackspace} className="text-xl rounded-lg hover:bg-gray-100 flex items-center justify-center">
                          ⌫
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
