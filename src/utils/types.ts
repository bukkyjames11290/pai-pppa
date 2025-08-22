// Transaction Interface (individual transaction)
export interface Transaction {
  transaction_id?: string;
  name: string;
  description: string;
  status: string;
  amount_usd: number;
  account_no?: string;
}

// GroupedTransaction Interface (grouped by date)
export interface GroupedTransaction {
  date: string;
  transactions: Transaction[];
}

// Account Interface
export interface Account {
  account_id: string;
  holder: {
    fullName?: string;
    lastName?: string;
    mobileNumber?: string;
    profileImgUrl?: string;
    nickName?: string;
    email?: string;
    jointNames?: string;
    dateCreated?: string;
    dateUpdated?: string;
    username: string;
    password: string;
  };
  bank_details: {
    bank_name?: string;
    branch?: string;
    isAccountNumber?: boolean;
    account_number?: string;
    routing_number?: string;
    account_type: string;
    balance_usd: number;
    isCurrency?: string;
  };
  transaction_mgs_code: {
    transaction_text_msg?: string;
    transaction_code?: string;
    headerText?: string;
    lastStepText?: string;
    wireDate: boolean;
  };
  
  // Updated to use grouped transaction structure
  transaction_history: GroupedTransaction[];
}