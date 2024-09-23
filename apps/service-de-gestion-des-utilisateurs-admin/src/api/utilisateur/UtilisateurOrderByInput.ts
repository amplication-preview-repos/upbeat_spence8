import { SortOrder } from "../../util/SortOrder";

export type UtilisateurOrderByInput = {
  createdAt?: SortOrder;
  dateDeCreation?: SortOrder;
  derniReConnexion?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  motDePasse?: SortOrder;
  nom?: SortOrder;
  prNom?: SortOrder;
  updatedAt?: SortOrder;
};
