export interface AdministrativeOrder {
  id: string;
  orderNumber: string;
  issueDate: string;
  division: string;
  status: 'active' | 'completed' | 'under_review';
  totalTransactions: number;
  totalAmount: number;
  transactions: BlockedTransaction[];
}

export interface BlockedTransaction {
  id: string;
  mtcn: string;
  amount: number;
  currency: string;
  date: string;
  time: string;
  agent: string;
  location: string;
  operatorId: string;
  sender: PersonDetails;
  receiver: PersonDetails;
  status: 'blocked' | 'under_review' | 'released';
  grounds: string[];
}

export interface PersonDetails {
  name: string;
  passport?: string;
  phone?: string;
  country: string;
  iban?: string;
  bic?: string;
  bank?: string;
  city?: string;
}

export interface LegalBasis {
  section: string;
  description: string;
}