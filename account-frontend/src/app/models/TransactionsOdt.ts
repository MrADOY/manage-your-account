export interface TransactionOdt {
  id: number;
  amount: number;
  fromWho: string;
  date: Date;
  transactionType: TransactionType;
  transactionDate: Date;
}

export enum TransactionType {
  APARTMENT,
  FOOD,
  OTHER,
  HOBBIES,
  INVOICES,
  INCOME
}
