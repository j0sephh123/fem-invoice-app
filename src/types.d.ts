export type InvoiceStatus = "paid" | "pending" | "draft";
type Address = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};
type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};
export type Invoice = {
  id: readonly string;
  createdAt: readonly string;
  paymentDue: readonly string;
  description: readonly string;
  paymentTerms: readonly number;
  clientName: readonly string;
  clientEmail: readonly string;
  status: readonly InvoiceStatus;
  senderAddress: readonly Address;
  clientAddress: readonly Address;
  items: readonly Item[];
  total: readonly number;
};
