import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      fullName: 'Eugene Neuliep L.',
      email: 'eu*@gmail.com',
      dateCreated: '8/14/2025', // m/d/y
      username: 'sample@gmail.com',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 850502.12
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '2378',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your PayPal account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        date: 'August 13, 2025',
        transactions: [
          {
            name: 'Mark Wleme',
            description: 'Money Received',
            status: 'Success',
            amount_usd: 4267.0
          },
          {
            name: 'Jane Doe',
            description: 'Money Sent',
            status: 'Success',
            amount_usd: -150.0
          }
        ]
      },
      {
        date: 'August 12, 2025',
        transactions: [
          {
            name: 'John Doe',
            description: 'Money Received',
            status: 'Success',
            amount_usd: 4267.0
          }
        ]
      },
      {
        date: 'August 11, 2025',
        transactions: [
          {
            name: 'Walmart',
            description: 'Payment Sent',
            status: 'Success',
            amount_usd: -120.0
          }
        ]
      },
      {
        date: 'August 10, 2025',
        transactions: [
          {
            name: 'D&D Building',
            description: 'Money Received',
            status: 'Success',
            amount_usd: -120.0
          }
        ]
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      fullName: 'Jessica Gommes',
      email: 'jess**@gmail.com',
      dateCreated: '8/22/2025', // m/d/y
      username: 'jessicagommes72@gmail.com',
      password: 'Password0035$'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 700000.0,
      isCurrency: 'euro'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '2378',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your PayPal account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        date: 'July 14, 2025',
        transactions: [
          {
            name: 'Charges',
            description: 'Payment Processing Fee',
            status: 'Success',
            amount_usd: -80.0
          },
          {
            name: 'BASF',
            description: 'Money Received',
            status: 'Success',
            amount_usd: 75080.0
          },
        ]
      },
      {
        date: 'July 13, 2025',
        transactions: [
          {
            name: 'Charges',
            description: 'Payment Processing Fee',
            status: 'Success',
            amount_usd: -80.0
          },
          {
            name: 'BASF',
            description: 'Money Received',
            status: 'Success',
            amount_usd: 75080.0
          },
        ]
      },
      {
        date: 'June 22, 2025',
        transactions: [
          {
            name: 'Charges',
            description: 'Payment Processing Fee',
            status: 'Success',
            amount_usd: -80.0
          },
          {
            name: 'E.ON',
            description: 'Money Received',
            status: 'Success',
            amount_usd: 87500.0
          },
          {
            name: 'Charges',
            description: 'Payment Processing Fee',
            status: 'Success',
            amount_usd: -80.0
          },
          {
            name: 'E.ON',
            description: 'Money Received',
            status: 'Success',
            amount_usd: 87580.0
          }
        ]
      },
      {
        date: 'May 9, 2025',
        transactions: [
          {
            name: 'Charges',
            description: 'Payment Processing Fee',
            status: 'Success',
            amount_usd: -80.0
          },
          {
            name: 'Allianz',
            description: 'Money Received',
            status: 'Success',
            amount_usd: 100080.0
          }
        ]
      },
      {
        date: 'May 8, 2025',
        transactions: [
          {
            name: 'Charges',
            description: 'Payment Processing Fee',
            status: 'Success',
            amount_usd: -80.0
          },
          {
            name: 'Allianz',
            description: 'Money Received',
            status: 'Success',
            amount_usd: 100080.0
          }
        ]
      },
      {
        date: 'April 28, 2025',
        transactions: [
          {
            name: 'Charges',
            description: 'Payment Processing Fee',
            status: 'Success',
            amount_usd: -80.0
          },
          {
            name: 'Bayerische Motoren Werke AG',
            description: 'Money Received',
            status: 'Success',
            amount_usd: 87580.0
          }
        ]
      },
      {
        date: 'April 27, 2025',
        transactions: [
          {
            name: 'Charges',
            description: 'Payment Processing Fee',
            status: 'Success',
            amount_usd: -80.0
          },
          {
            name: 'Bayerische Motoren Werke AG',
            description: 'Money Received',
            status: 'Success',
            amount_usd: 87580.0
          }
        ]
      }
    ]
  }
];
