import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdresseWhereInput = {
  dateDeCreation?: DateTimeNullableFilter;
  derniReModification?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  identifiant?: StringNullableFilter;
  instructions?: StringNullableFilter;
  pointDeRepere?: StringNullableFilter;
  utilisateurId?: StringNullableFilter;
};
