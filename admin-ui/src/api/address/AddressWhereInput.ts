import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressWhereInput = {
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  state?: StringNullableFilter;
  zip?: IntNullableFilter;
};
