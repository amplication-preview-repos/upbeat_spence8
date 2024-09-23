import { ItinRaireUpdateManyWithoutRecherchesInput } from "./ItinRaireUpdateManyWithoutRecherchesInput";

export type RechercheUpdateInput = {
  adresseId?: string | null;
  dateDeRecherche?: Date | null;
  itinRaires?: ItinRaireUpdateManyWithoutRecherchesInput;
  termeDeRecherche?: string | null;
  utilisateurId?: string | null;
};
