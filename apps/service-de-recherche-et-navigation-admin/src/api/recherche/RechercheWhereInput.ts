import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItinRaireListRelationFilter } from "../itinRaire/ItinRaireListRelationFilter";

export type RechercheWhereInput = {
  adresseId?: StringNullableFilter;
  dateDeRecherche?: DateTimeNullableFilter;
  id?: StringFilter;
  itinRaires?: ItinRaireListRelationFilter;
  termeDeRecherche?: StringNullableFilter;
  utilisateurId?: StringNullableFilter;
};
