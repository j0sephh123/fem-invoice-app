import data from "./data.json";
import type { Invoice } from "../types";

const localStorageDataKey = "invoice-app-data";

export function getData() {
  const dataFromLocalStorage = localStorage.getItem(localStorageDataKey);

  console.log(dataFromLocalStorage);

  return data as Invoice[];
}
