import { ItinRaireCreateNestedManyWithoutRecherchesInput } from "./ItinRaireCreateNestedManyWithoutRecherchesInput";

export type RechercheCreateInput = {
  adresseId?: string | null;
  dateDeRecherche?: Date | null;
  itinRaires?: ItinRaireCreateNestedManyWithoutRecherchesInput;
  termeDeRecherche?: string | null;
  utilisateurId?: string | null;
};
