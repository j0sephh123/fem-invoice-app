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
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: InvoiceStatus;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
};
