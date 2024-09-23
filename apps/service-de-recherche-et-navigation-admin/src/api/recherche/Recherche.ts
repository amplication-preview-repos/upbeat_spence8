import { ItinRaire } from "../itinRaire/ItinRaire";

export type Recherche = {
  adresseId: string | null;
  createdAt: Date;
  dateDeRecherche: Date | null;
  id: string;
  itinRaires?: Array<ItinRaire>;
  termeDeRecherche: string | null;
  updatedAt: Date;
  utilisateurId: string | null;
};
