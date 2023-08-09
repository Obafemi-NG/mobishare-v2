export interface Transaction {
  transactionRef: string;
  paymentMethod: string;
  amountReceived: number;
  transactionFee: number;
  conversionRate: number;
  amountSent: number;
  redirectUrl: string;
  operationName: string;
  responseError: [];
}
