import { SortOrder } from "../../util/SortOrder";

export type RechercheOrderByInput = {
  adresseId?: SortOrder;
  createdAt?: SortOrder;
  dateDeRecherche?: SortOrder;
  id?: SortOrder;
  termeDeRecherche?: SortOrder;
  updatedAt?: SortOrder;
  utilisateurId?: SortOrder;
};
