import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UtilisateurWhereInput = {
  dateDeCreation?: DateTimeNullableFilter;
  derniReConnexion?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  motDePasse?: StringNullableFilter;
  nom?: StringNullableFilter;
  prNom?: StringNullableFilter;
};
