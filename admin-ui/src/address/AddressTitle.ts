import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "address";

export const AddressTitle = (record: TAddress): string => {
  return record.address || record.id;
};
