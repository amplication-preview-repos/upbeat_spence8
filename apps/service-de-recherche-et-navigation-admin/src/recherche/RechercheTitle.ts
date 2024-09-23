import { Recherche as TRecherche } from "../api/recherche/Recherche";

export const RECHERCHE_TITLE_FIELD = "adresseId";

export const RechercheTitle = (record: TRecherche): string => {
  return record.adresseId?.toString() || String(record.id);
};
