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
          }
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
          }
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
            amount_usd: 50080.0
          },
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
            amount_usd: 50080.0
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
            amount_usd: 50080.0
          },
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
            amount_usd: 25080.0
          },
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
            amount_usd: 25080.0
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
  },
  {
    account_id: 'ACC003',
    holder: {
      fullName: 'Marie Micheal',
      email: 'jan**87@gmail.com',
      dateCreated: '1/16/2026', // m/d/y
      username: 'janettforge87@gmail.com',
      password: 'Hunter123$'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 1730000.0,
      isCurrency: ''
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '2378',
      headerText: 'Dear Valued Customer,',
      lastStepText:
        'To make a transaction in your account a withdrawal fee of $4700.00 is required to be able to withdraw your money. Thank you for your continued trust and cooperation. Best regards, Paypal',
      wireDate: true
    },
    transaction_history: [
      {
        date: 'January 15, 2026',
        transactions: [
          {
            name: 'ExxonMobil',
            description: 'Quarterly crude oil supply payment',
            status: 'Success',
            amount_usd: 300000
          }
        ]
      },
      {
        date: 'November 6, 2025',
        transactions: [
          {
            name: 'Vattenfall',
            description: 'Wind farm maintenance contract payment',
            status: 'Success',
            amount_usd: 170000
          }
        ]
      },
      {
        date: 'July 18, 2025',
        transactions: [
          {
            name: 'Shell',
            description: 'Refinery logistics service fee',
            status: 'Success',
            amount_usd: 180000
          }
        ]
      },
      {
        date: 'March 10, 2025',
        transactions: [
          {
            name: 'BASF',
            description: 'Chemical supply delivery payment',
            status: 'Success',
            amount_usd: 200000
          }
        ]
      },
      {
        date: 'October 21, 2024',
        transactions: [
          {
            name: 'Chevron',
            description: 'Oil pipeline infrastructure fee',
            status: 'Success',
            amount_usd: 150000
          }
        ]
      },
      {
        date: 'June 9, 2024',
        transactions: [
          {
            name: 'Neste',
            description: 'Biofuel shipment payment',
            status: 'Success',
            amount_usd: 160000
          }
        ]
      },
      {
        date: 'February 14, 2024',
        transactions: [
          {
            name: 'TotalEnergies',
            description: 'Natural gas distribution contract',
            status: 'Success',
            amount_usd: 170000
          }
        ]
      },
      {
        date: 'September 12, 2023',
        transactions: [
          {
            name: 'Uniper',
            description: 'Electricity supply agreement payment',
            status: 'Success',
            amount_usd: 110000
          }
        ]
      },
      {
        date: 'April 5, 2023',
        transactions: [
          {
            name: 'ArcelorMittal',
            description: 'Steel shipment payment',
            status: 'Success',
            amount_usd: 120000
          }
        ]
      },
      {
        date: 'December 8, 2022',
        transactions: [
          {
            name: 'Odfjell SE',
            description: 'Chemical tanker delivery fee',
            status: 'Success',
            amount_usd: 80000
          }
        ]
      },
      {
        date: 'January 20, 2022',
        transactions: [
          {
            name: 'Yara International',
            description: 'Fertilizer supply contract payment',
            status: 'Success',
            amount_usd: 90000
          }
        ]
      }
    ]
  }
];
