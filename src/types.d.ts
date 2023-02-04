export type InvoiceStatus = "Paid" | "Pending" | "Draft";
export type Invoice = {
  id: string;
  due: string;
  person: string;
  sum: string;
  type: InvoiceStatus;
};
