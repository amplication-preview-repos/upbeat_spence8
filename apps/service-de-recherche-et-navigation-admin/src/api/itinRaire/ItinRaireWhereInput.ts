import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RechercheWhereUniqueInput } from "../recherche/RechercheWhereUniqueInput";

export type ItinRaireWhereInput = {
  id?: StringFilter;
  pointsDeRepere?: StringNullableFilter;
  recherche?: RechercheWhereUniqueInput;
};
