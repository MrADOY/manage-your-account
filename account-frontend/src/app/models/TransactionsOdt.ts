export interface TransactionOdt {
  id: number;
  amount: number;
  fromWho: string;
  date: Date;
  transactionType: TransactionType;
  transactionDate: Date;
}

export enum TransactionType {
  APARTMENT = 'APARTMENT',
  FOOD= 'FOOD',
  OTHER = 'OTHER',
  HOBBIES = 'HOBBIES',
  INVOICES = 'INVOICES',
  INCOME = 'INCOME'
}
