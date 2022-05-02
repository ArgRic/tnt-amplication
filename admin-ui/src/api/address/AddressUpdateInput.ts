import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address?: string | null;
  city?: string | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
