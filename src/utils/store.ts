// persist https://valtio.pmnd.rs/docs/how-tos/how-to-persist-states

import data from "./data.json";

import { Invoice } from "@/types";
import { proxy } from "valtio";

export const store = proxy<{ invoices: Invoice[] }>({
  invoices: data as Invoice[],
});
