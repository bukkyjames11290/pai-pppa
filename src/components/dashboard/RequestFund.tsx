'use client';

import React, { useState } from 'react';
import { mockUsers } from '../dropdown/UserMockData';
import Image from 'next/image';
import { getRandomColor } from '../getRandomColor';
import { FiX } from 'react-icons/fi';
import RequestFundModal from '../modals/RequestFundModal';

export default function RequestFund() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [hiddenFromRecent, setHiddenFromRecent] = useState<string[]>([]);

  const filteredUsers = mockUsers.filter(
    user => user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.username.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // For recent searches, exclude hidden users only when there's no search term
  const displayUsers = searchTerm ? filteredUsers : filteredUsers.filter(user => !hiddenFromRecent.includes(user.id));

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers(prev => (prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]));
  };

  // Remove user from recent searches (not from data)
  const removeFromRecentSearches = (userId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering selection
    setHiddenFromRecent(prev => [...prev, userId]);
  };

  // Get selected user names
  const selectedUserNames = selectedUsers
    .map(id => {
      const user = mockUsers.find(u => u.id === id);
      return user ? user.name : '';
    })
    .filter(name => name !== '');

  // Combine search term and selected user names for display
  const inputDisplayValue = selectedUserNames.length > 0 ? `${selectedUserNames.join(', ')}${searchTerm ? ` ${searchTerm}` : ''}` : searchTerm;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (selectedUserNames.length > 0) {
      // If we have selected users, extract only the new search term
      const selectedText = selectedUserNames.join(', ');
      if (value.startsWith(selectedText)) {
        const newSearchTerm = value.slice(selectedText.length).trim();
        setSearchTerm(newSearchTerm);
      } else {
        // If user is editing the selected part, clear selections and use the whole value
        setSelectedUsers([]);
        setSearchTerm(value);
      }
    } else {
      setSearchTerm(value);
    }
  };

  const clearInput = () => {
    setSelectedUsers([]);
    setSearchTerm('');
  };

  return (
    <div className="">
      <div className="p-4">
        <div className="rounded-lg p-4">
          <h2 className="text-[#2e2e2e] text-lg font-semibold mb-2">Send to friends on PayPal</h2>

          <div className="search-box relative">
            <input
              type="text"
              placeholder={selectedUserNames.length > 0 ? '' : 'Name, username, email, mobile'}
              value={inputDisplayValue}
              onChange={handleInputChange}
              className="w-full px-6 p-3 my-2 mb-2 min-h-[60px] bg-white rounded-full border-none text-[#2e2e2e] focus:outline-none pr-10"
            />
            {(searchTerm || selectedUserNames.length > 0) && (
              <button onClick={clearInput} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none">
                <FiX size={20} />
              </button>
            )}
          </div>

          {selectedUserNames.length === 0 && (
            <div className="user-list">
              <h2 className="py-2">{searchTerm ? 'Search results' : 'Recent searches'}</h2>
              {displayUsers.map(user => (
                <div
                  key={user.id}
                  className={`flex items-center py-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 group`}
                  onClick={() => {
                    toggleUserSelection(user.id);
                    setIsOpen(true);
                  }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                    {user.profileUrl ? (
                      <Image src={user.profileUrl} width={40} height={40} className="w-full h-full rounded-full object-cover" alt={user.name} />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${getRandomColor(user.name.charAt(0))} text-white font-medium`}>{user.name.charAt(0).toUpperCase()}</div>
                    )}
                  </div>
                  <div className="user-info flex-1">
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-gray-500 text-sm">@{user.username}</p>
                  </div>
                  <button onClick={e => removeFromRecentSearches(user.id, e)} className="transition-opacity text-gray-400 hover:text-red-500 focus:outline-none p-2">
                    <FiX size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <RequestFundModal isOpen={isOpen} setIsOpen={setIsOpen} selectedUserNames={selectedUserNames} />
    </div>
  );
}
